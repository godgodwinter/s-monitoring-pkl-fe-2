<script setup lang="ts">
import { useStoreAdmin } from "@/stores/admin";

const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("profile");
</script>
<template>
  <div>
    <h1 class="text-2xl font-bold">Profile</h1>
  </div>

  <div class="py-10 px-4">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">PT ABCD</h2>
      <p class="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        quidem.
      </p>
      <p class="text-sm">Jl asd - No hp :123</p>
    </div>
  </div>

  <div class="py-10 px-4">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">PEMBIMBING LAPANGAN</h2>
      <p class="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        quidem.
      </p>
      <p class="text-sm">No hp :123</p>
    </div>
  </div>

  <div class="py-10 px-4">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">PEMBIMBING SEKOLAH</h2>
      <p class="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        quidem.
      </p>
      <p class="text-sm">No hp :123</p>
    </div>
  </div>

  <div class="py-10 px-4">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">SISWA : 4 SISWA</h2>
      <p class="text-sm">PKL tanggal 02 Januari 2022 - 04 Juni 2022</p>

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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
