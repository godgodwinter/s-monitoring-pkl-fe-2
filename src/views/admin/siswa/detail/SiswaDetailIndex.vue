<script setup>
import Api from "@/axios/axios";
import { ref } from "vue";
import BreadCrumb from "@/components/breadcrumb/BabengBreadcrumb.vue"
import { useRouter, useRoute } from "vue-router";
import Toast from "@/components/lib/Toast.js";
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
moment.updateLocale("id", localization);
const router = useRouter();
const route = useRoute();
const id = route.params.id;
const dataId = null;
const dataSiswa = ref([]);
const dataAsli = ref([]);
const tempatpkl = ref([]);
const anggota = ref([]);
const pembimbinglapangan = ref([]);
const pembimbingsekolah = ref([]);
const status = ref([]);
const dataDetail = ref({
    siswa: { label: "-", id: id },
    tempatpkl: { label: "-", id: id, tgl_pengajuan: "" },
    pembimbinglapangan: { label: "-", id: id },
    pembimbingsekolah: { label: "-", id: id },
});
const getDataId = async () => {
    try {
        const response = await Api.get(`pembimbinglapangan/datasiswa/profile/${id}`);
        // console.log(response.data);
        dataSiswa.value = response.data.siswa;
        tempatpkl.value = response.data.tempatpkl;
        anggota.value = response.data.anggota;
        status.value = response.data.status;
        dataAsli.value = response.data;
        // console.log(dataSiswa.value, tempatpkl.value, anggota.value, status.value);
        // dataDetail.value.siswa.label = ` ${dataAsli.value.nama} `;
        // dataSiswa.value.kelas = ` ${dataAsli.value.kelasdetail.kelas.tingkatan} ${dataAsli.value.kelasdetail.kelas.jurusan} ${dataAsli.value.kelasdetail.kelas.suffix} `;
        return response;
    } catch (error) {
        Toast.danger("Warning", "Token anda kadaluarsa! Silahkan login kembali");
        console.error(error);
    }
};
getDataId();
</script>
<template>
    <BreadCrumb />

    <div class="pt-4 px-10">
        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm">Profile Siswa</span>
    </div>

    <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto" src="@/assets/img/flat/reading.png" alt="" />
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                        {{ dataSiswa.nama }}
                    </h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">
                        NIS : {{ dataSiswa.nomeridentitas }}
                    </h3>
                    <!-- <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
            eligendi dolorum sequi illum qui unde aspernatur non deserunt
          </p> -->
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status Akun</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Status PKL</span>
                            <span class="ml-auto"><span class="bg-orange-500 py-1 px-2 rounded text-white text-sm">{{
                                    status
                            }}</span></span>
                        </li>
                        <!-- <li class="flex items-center py-3">
              <span>Member since</span>
              <span class="ml-auto">Nov 07, 2016</span>
            </li> -->
                    </ul>
                </div>
                <!-- End of profile card -->
                <div class="my-4"></div>
                <!-- Friends card -->
                <div class="bg-white p-3 hover:shadow">
                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <!-- <span class="text-green-500">
              <svg
                class="h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span>Data Siswa</span> -->
                    </div>
                    <!-- <div class="grid grid-cols-2 xl:grid-cols-3">
            <div class="text-center my-2">
              <div
                class="h-16 w-16 rounded-full mx-auto bg-slate-500 hover:text-white flex text-xl font-bold items-center justify-center text-slate-200 hover:bg-slate-800"
              >
                2
              </div>
              <p class="text-main-color text-sm text-slate-700">Tidak Hadir</p>
            </div>
            <div class="text-center my-2">
              <div
                class="h-16 w-16 rounded-full mx-auto bg-slate-500 hover:text-white flex text-xl font-bold items-center justify-center text-slate-200 hover:bg-slate-800"
              >
                10
              </div>
              <p class="text-main-color text-sm text-slate-700">Tidak Mengisi Jurnal</p>
            </div>
            <div class="text-center my-2">
              <div
                class="h-16 w-16 rounded-full mx-auto bg-slate-500 hover:text-white flex text-xl font-bold items-center justify-center text-slate-200 hover:bg-slate-800"
              >
                1
              </div>
              <p class="text-main-color text-sm text-slate-700">Pelanggaran</p>
            </div>
          </div> -->
                </div>
                <!-- End of Data Statistik card -->
            </div>

            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">

                <div class="divider"></div>
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Identitas</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Nama Lengkap</div>
                                <div class="px-4 py-2">{{ dataSiswa.nama }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">NIS</div>
                                <div class="px-4 py-2">{{ dataSiswa.nomeridentitas }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Jenis Kelamin</div>
                                <div class="px-4 py-2">{{ dataSiswa.jk }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">No. Telp</div>
                                <div class="px-4 py-2">{{ dataSiswa.telp }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Alamat Lengkap</div>
                                <div class="px-4 py-2">{{ dataSiswa.alamat }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Agama</div>
                                <div class="px-4 py-2">{{ dataSiswa.agama }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Kelas</div>
                                <div class="px-4 py-2">{{ dataSiswa.kelas_nama }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Tempat, Tanggal Lahir</div>
                                <div class="px-4 py-2">
                                    {{ dataSiswa.tempatlahir }}, {{ dataSiswa.tgllahir }}
                                </div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Kepala Jurusan</div>
                                <div class="px-4 py-2">{{ dataAsli.kepalajurusan?.nama }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="divider"></div>
                <div class="bg-white p-3" v-if="status == 'Disetujui'">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Prakerin</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Tempat PKL</div>
                                <div class="px-4 py-2">{{ tempatpkl.nama }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Status Prakerin</div>
                                <div class="px-4 py-2">
                                    {{ status }}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Tanggal Mulai</div>
                                <div class="px-4 py-2">{{ moment(tempatpkl.tgl_mulai).format("DD MMMM YYYY") }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Tanggal Selesai</div>
                                <div class="px-4 py-2">{{ moment(tempatpkl.tgl_selesai).format("DD MMMM YYYY") }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Pembimbing Lapangan</div>
                                <div class="px-4 py-2">{{ dataAsli.pembimbinglapangan?.nama }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Pembimbing Sekolah</div>
                                <div class="px-4 py-2">{{ dataAsli.pembimbingsekolah?.nama }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 shadow-sm rounded-sm" v-else></div>
                <div class="divider"></div>

            </div>
        </div>
    </div>

</template>