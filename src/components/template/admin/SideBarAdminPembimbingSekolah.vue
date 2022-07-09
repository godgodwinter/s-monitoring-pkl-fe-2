<script setup lang="ts">
import { ref } from "vue";
import { useStoreAdminPembimbingSekolah } from "@/stores/adminPembimbingSekolah";
import { useStoreAdminAuthPembimbingSekolah } from "@/stores/adminAuthPembimbingSekolah";
import { computed } from "vue";
import serviceAuthPembimbingSekolah from "@/services/serviceAuthPembimbingSekolah";
import { useRouter } from "vue-router";
const router = useRouter();
const storeAdminPembimbingSekolah = useStoreAdminPembimbingSekolah();
const storeAdminAuthPembimbingSekolah = useStoreAdminAuthPembimbingSekolah();

const pagesActive = computed(() => storeAdminPembimbingSekolah.pagesActive);
const me = computed(() => storeAdminAuthPembimbingSekolah.me);
const pagesActiveClass = ref("border-b  border-info rounded-full shadow-lg");

const doLogout = async (): Promise<void> => {
  if (confirm("Apakah anda yakin ingin Logout?")) {
    const resLogout: boolean | undefined =
      await serviceAuthPembimbingSekolah.doLogout();
    if (resLogout) {
      router.push({ name: "LandingLoginPembimbingSekolah" });
    }
  }
};
</script>
<template>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
      <div class="py-4 border-secondary border-b">
        <div class="flex gap-2 items-center justify-center">
          <div class="avatar online">
            <div
              class="w-24 rounded-full border border-sky-200 hover:border-sky-400 shadow hover:shadow-lg"
            >
              <img src="@/assets/img/avatar/user.png" />
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col justify-center w-full">
            <div class="flex justify-center gap-2 w-full">
              <p
                class="text-base-content text-md font-semibold text-center py-2 capitalize"
              >
                {{ me.name }}
              </p>
              <span
                class="py-2 hover:scale-125 tooltip"
                data-tip="Update Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
            </div>
            <div class="flex justify-center flex-col">
              <p
                class="text-base-content text-sm font-medium text-center link link-primary"
              >
                Pembimbing Sekolah
              </p>
              <span
                class="py-2 hover:scale-125 tooltip mx-auto"
                data-tip="Logout"
                @click="doLogout()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
            </div>
          </div>
        </div>
      </div>
      <span class="py-2"></span>
      <!-- Sidebar content here -->
      <li :class="[pagesActive == 'dashboard' ? pagesActiveClass : '']">
        <router-link :to="{ name: 'PembimbingSekolahDashboard' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
          <span class="ml-3">Dashboard </span></router-link
        >
      </li>
      <li :class="[pagesActive == 'profile' ? pagesActiveClass : '']">
        <router-link :to="{ name: 'PembimbingSekolahDashboard' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="ml-3">Profile </span></router-link
        >
      </li>
    </ul>
  </div>
</template>
