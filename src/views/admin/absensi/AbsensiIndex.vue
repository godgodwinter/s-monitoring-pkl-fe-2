<script setup lang="ts">
import ApiAbsensi from "@/services/api/apiAbsensi.js";
import { ref } from "vue";
import { useStoreAdmin } from "@/stores/admin";
import Api from "@/axios/axios";
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
import { Field, Form } from "vee-validate";
import fnValidasi from "@/components/lib/babengValidasi";

const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("absensi");
const data = ref([]);

const tempatPKl = ref([]);
const pembimbinglapangan = ref([]);
const pembimbingsekolah = ref([]);
const siswa = ref([]);
const getData = async () => {
  try {
    const response = await Api.get("/pembimbinglapangan/profile/get");
    let res = response.data;
    // data.value = res.siswa;
    tempatPKl.value = res.tempatpkl;
    pembimbinglapangan.value = res.pembimbinglapangan;
    pembimbingsekolah.value = res.pembimbingsekolah;
    siswa.value = res.siswa;
    selectedSiswa.value = siswa.value[0].id;
    getDataAbsensi(selectedSiswa.value, moment().format("yyyy-MM"));
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
};
getData();

let dataExample = [
  {
    id: 1,
    nomeridentitas: "123456789",
    nama: "Paijo",
    kelas: "XI RPL 1",
  },
];

data.value = dataExample;
const columns = [
  {
    label: "Tanggal",
    field: "tanggal",
    sortable: true,
    width: "200px",
    tdClass: "text-center",
    thClass: "text-center",
  },
  {
    width: "200px",
    label: "Kehadiran",
    field: "kehadiran",
    type: "String",
  },
  {
    width: "200px",
    label: "Jurnal",
    field: "jurnal",
    type: "String",
  },
];
const selectedSiswa = ref("");
const doPilihSiswa = () => {
  // console.log(selectedSiswa.value);
  let month = null;
  if (parseInt(dataForm.value.monthyear.month) < 10) {
    month = "0" + (parseInt(dataForm.value.monthyear.month) + 1);
  }
  let dateTerpilih = month
    ? dataForm.value.monthyear.year + "-" + month
    : moment().format("yyyy-MM");
  getDataAbsensi(selectedSiswa.value, dateTerpilih);
};
// get month year

const today = moment().format("DD MMMM YYYY");
const monthyear = {
  month: moment().format("MMMM"),
  year: moment().format("YYYY"),
};
const dataForm = ref({ monthyear: monthyear });
// dataForm.value.monthyear = moment().format("yyyy/MM");
// console.log(today, dataForm.value.monthyear);

const onChangeMonth = () => {
  let month = null;
  if (parseInt(dataForm.value.monthyear.month) < 10) {
    month = "0" + (parseInt(dataForm.value.monthyear.month) + 1);
  }
  let dateTerpilih = month
    ? dataForm.value.monthyear.year + "-" + month
    : moment().format("yyyy-MM");
  getDataAbsensi(selectedSiswa.value, dateTerpilih);
};

const dataAbsensi = ref([]);
const getDataAbsensi = async (siswaId, monthyear) => {
  try {
    // const response = await Api.get("/pembimbinglapangan/profile/get");
    // let res = response.data;
    // data.value = res.siswa;
    dataAbsensi.value = await ApiAbsensi.getData(siswaId, monthyear);
    data.value = dataAbsensi.value;
    // console.log(siswaId, monthyear, dataAbsensi.value);
  } catch (error) {
    console.log(error);
  }
};

const doKonfirmasiKehadiran = async (tanggal) => {
  let siswaId = selectedSiswa.value;
  console.log(siswaId, tanggal);
};
const doKonfirmasiJurnal = async (tanggal) => {
  let siswaId = selectedSiswa.value;
  console.log(siswaId, tanggal);
};
</script>
<template>
  <div class="space-y-2">
    <h1 class="text-2xl font-bold">Absensi dan Jurnal : {{ today }}</h1>
  </div>

  <div class="py-4 px-4">
    <div>
      <label for="">Pilih Siswa :</label>
      <div class="flex space-x-2">
        <select
          v-model="selectedSiswa"
          class="select select-bordered w-full max-w-xs"
          @change="doPilihSiswa"
        >
          <option disabled selected>Pilih Siswa ?</option>
          <option
            v-for="(item, index) in siswa"
            :key="item.id"
            :value="item.id"
          >
            {{ item.nama }}
          </option>
        </select>
        <button class="btn btn-primary" @click="doPilihSiswa">PIlih</button>
      </div>
    </div>
  </div>

  <div class="py-4 px-4">
    <label for="">Pilih bulan :</label>
    <div class="py-2 flex gap-2">
      <Datepicker
        format="yyyy/MM"
        value-format="yyyy-MM"
        v-model="dataForm.monthyear"
        monthPicker
        required
      >
        <template #calendar-header="{ index, day }">
          <div :class="index === 5 || index === 6 ? 'red-color' : ''">
            {{ day }}
          </div>
        </template>
      </Datepicker>
      <button class="btn btn-primary" @click="onChangeMonth">PILIH</button>
    </div>
  </div>

  <div class="md:py-2 px-4 lg:flex flex-wrap gap-4">
    <div class="w-full lg:w-full">
      <div class="bg-white shadow rounded-lg px-4 py-4">
        <div v-if="data">
          <vue-good-table
            :line-numbers="true"
            :columns="columns"
            :rows="data"
            :search-options="{
              enabled: true,
            }"
            :pagination-options="{
              enabled: true,
              perPageDropdown: [31, 10, 20, 50],
            }"
            styleClass="vgt-table striped bordered condensed"
            class="py-0"
          >
            <template #table-row="props">
              <span v-if="props.column.field == 'actions'">
                <div
                  class="text-sm font-medium text-center flex justify-center space-x-1"
                >
                  <button
                    class="btn btn-sm btn-primary tooltip"
                    data-tip="Detail"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </span>
              <span v-else-if="props.column.field == 'tanggal'">
                {{ moment(props.row.tanggal).format("DD MMMM YYYY") }}
              </span>
              <span v-else-if="props.column.field == 'kehadiran'">
                <div class="flex justify-between px-6">
                  <div>
                    {{ props.row.kehadiran ? props.row.kehadiran : "-" }}
                  </div>
                  <div>
                    <label
                      :for="'my-modal-absen' + props.row.id"
                      class="btn btn-primary modal-button font-medium rounded-lg text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </label>
                    <!-- Put this part before </body> tag -->
                    <input
                      type="checkbox"
                      :id="'my-modal-absen' + props.row.id"
                      class="modal-toggle"
                    />
                    <label
                      :for="'my-modal-absen' + props.row.id"
                      class="modal cursor-pointer"
                    >
                      <label class="modal-box w-11/12 max-w-xl relative" for="">
                        <h3 class="text-lg font-bold text-center">
                          Kehadiran tanggal {{ props.row.tanggal }}
                        </h3>

                        <Form v-slot="{ errors }" @submit="onSubmitAbsensi">
                          <div class="px-10">
                            <div
                              class="py-4 space-x-2 space-y-2 flex flex-wrap w-full justify-center"
                            >
                              <div class="w-full py-2">
                                <label for="">Konfirmasi:</label>
                                <Field
                                  :rules="fnValidasi.validateData2"
                                  v-model="dataForm.label"
                                  name="label"
                                  class="select select-bordered w-11/12"
                                  as="select"
                                >
                                  <option disabled selected>Pilih ?</option>
                                  <option value="Disetujui">Disetujui</option>
                                  <option value="Ditolak">Ditolak</option>
                                </Field>

                                <div class="text-xs text-red-600 mt-1">
                                  {{ errors.label }}
                                </div>
                              </div>

                              <div
                                class="w-full"
                                v-if="
                                  dataForm.label &&
                                  dataForm.label != 'Disetujui'
                                "
                              >
                                <label for="file" class>Catatan : </label>

                                <Field
                                  :rules="fnValidasi.validateData2"
                                  v-model="dataForm.alasan"
                                  v-slot="{ field }"
                                  name="alasan"
                                  type="text"
                                  class="input input-bordered w-11/12"
                                >
                                  <textarea
                                    v-bind="field"
                                    class="textarea textarea-bordered w-11/12 h-24"
                                    placeholder="Catatan"
                                  ></textarea>
                                </Field>
                                <div class="text-xs text-red-600 mt-1">
                                  {{ errors.alasan }}
                                </div>
                              </div>
                            </div>
                            <div class="w-full flex justify-end">
                              <button class="btn btn-primary">Simpan</button>
                            </div>
                          </div>
                        </Form>
                      </label>
                    </label>
                    <!-- <button
                      class="btn btn-primary btn-sm"
                      @click="doKonfirmasiKehadiran(props.row.tanggal)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button> -->
                  </div>
                </div></span
              >
              <span v-else-if="props.column.field == 'jurnal'">
                <div class="flex justify-between px-6">
                  <div>
                    {{ props.row.jurnal ? props.row.jurnal : "-" }}
                  </div>
                  <div>
                    <button
                      class="btn btn-warning btn-sm"
                      @click="doKonfirmasiJurnal(props.row.tanggal)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div></div
              ></span>
              <span v-else-if="props.column.field == 'rekap'">
                <button class="btn btn-danger btn-sm">Rekap</button></span
              >

              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>
      </div>
    </div>
  </div>
</template>
