<script setup lang="ts">
import { ref } from "vue";
import { useStoreAdmin } from "@/stores/admin";

const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("absensi");
const data = ref([]);

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
    field: "tgl",
    sortable: false,
    width: "200px",
    tdClass: "text-center",
    thClass: "text-center",
  },
  {
    label: "Kehadiran",
    field: "kehadiran",
    type: "String",
  },
  {
    label: "Jurnal",
    field: "jurnal",
    type: "String",
  },
];
</script>
<template>
  <div class="space-y-2">
    <h1 class="text-2xl font-bold">Absensi dan Jurnal</h1>
  </div>

  <div class="py-10">
    <div>
      <div class="flex space-x-2">
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>Pilih Siswa ?</option>
          <option>Paijo</option>
          <option>Jokowi</option>
          <option>Sri</option>
        </select>
        <button class="btn btn-primary">PIlih</button>
      </div>
    </div>
  </div>

  <div class="py-10">
    <div>
      <div>
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>Pilih Bulan ?</option>
          <option>Paijo</option>
          <option>Jokowi</option>
          <option>Sri</option>
        </select>
        <button class="btn btn-primary">PIlih</button>
      </div>
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
              perPageDropdown: [10, 20, 50],
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
              <span v-else-if="props.column.field == 'absensi'">
                <button class="btn btn-primary btn-sm">Absensi</button></span
              >
              <span v-else-if="props.column.field == 'jurnal'">
                <button class="btn btn-warning btn-sm">Jurnal</button></span
              >
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
