<script setup lang="ts">
import { useStoreAdmin } from "@/stores/admin";
import Api from "@/axios/axios";
import { ref } from "vue";

const tempatPKl = ref([]);
const pembimbinglapangan = ref([]);
const pembimbingsekolah = ref([]);
const siswa = ref([]);
const getData = async () => {
  try {
    const response = await Api.get("/pembimbinglapangan/profile/get");
    let res = response.data;
    tempatPKl.value = res.tempatpkl;
    pembimbinglapangan.value = res.pembimbinglapangan;
    pembimbingsekolah.value = res.pembimbingsekolah;
    siswa.value = res.siswa;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
getData();

const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("profile");
</script>
<template>
  <div>
    <h1 class="text-2xl font-bold">Profile</h1>
  </div>

  <div class="py-10 px-4" v-if="tempatPKl">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">{{ tempatPKl.nama }}</h2>
      <p class="text-sm">
        {{ tempatPKl.alamat }}
      </p>
      <p class="text-sm">Telp : {{ tempatPKl.telp }}</p>
    </div>
  </div>

  <div class="py-10 px-4" v-if="pembimbinglapangan">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">PEMBIMBING LAPANGAN</h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table table-compact w-72">
            <!-- head -->

            <tbody>
              <tr>
                <td>Nama</td>
                <td class="w-1">:</td>
                <td>{{ pembimbinglapangan.nama }}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td class="w-1">:</td>
                <td>{{ pembimbinglapangan.alamat }}</td>
              </tr>
              <tr>
                <td>Telp</td>
                <td class="w-1">:</td>
                <td>{{ pembimbinglapangan.telp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="py-10 px-4" v-if="pembimbingsekolah">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">PEMBIMBING SEKOLAH</h2>
      <div>
        <div class="overflow-x-auto">
          <div
            v-for="(item, index) in pembimbingsekolah"
            :key="item.id"
            class="py-2 px-4"
          >
            <h2 class="font-bold text-lg py-2">Pembimbing {{ index + 1 }}</h2>
            <table class="table table-compact w-72">
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td class="w-1">:</td>
                  <td>{{ item.nama }}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td class="w-1">:</td>
                  <td>{{ item.alamat }}</td>
                </tr>
                <tr>
                  <td>Telp</td>
                  <td class="w-1">:</td>
                  <td>{{ item.telp }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-10 px-4" v-if="siswa">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">SISWA : {{ siswa.length }} SISWA</h2>
      <!-- <p class="text-sm">PKL tanggal 02 Januari 2022 - 04 Juni 2022</p> -->

      <div class="overflow-x-auto py-4">
        <table class="table table-zebra table-compact w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Nama</th>
              <th>Kelas</th>
              <th>Telp</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr v-for="(item, index) in siswa" :key="item.id">
              <th>{{ index + 1 }}</th>
              <td>{{ item.nama }}</td>
              <td>
                {{
                  item.kelasdetail
                    ? item.kelasdetail.kelas.tingkatan +
                      " " +
                      item.kelasdetail.kelas.jurusan +
                      " " +
                      item.kelasdetail.kelas.suffix
                    : "-"
                }}
              </td>
              <td>{{ item.telp }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
