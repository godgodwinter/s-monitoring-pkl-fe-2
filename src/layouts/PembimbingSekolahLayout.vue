<script setup lang="ts">
import serviceAuthPembimbingSekolah from "@/services/serviceAuthPembimbingSekolah";
import { computed, ref } from "vue";
import Footer from "@/components/template/CFooter.vue";
// import ThemeBar from "@/components/template/ThemeBar.vue";
import SideBarAdmin from "@/components/template/admin/SideBarAdminPembimbingSekolah.vue";
import ScrollToTop from "@/components/template/ScrollToTop.vue";
import { useStoreAdminAuthPembimbingSekolah } from "@/stores/adminAuthPembimbingSekolah";
import { useRouter } from "vue-router";
import Toast from "@/components/lib/Toast";
const router = useRouter();
const storeAdminAuthPembimbingSekolah = useStoreAdminAuthPembimbingSekolah();
const token = computed(() => storeAdminAuthPembimbingSekolah.getToken);
const isLogin = computed(() => storeAdminAuthPembimbingSekolah.getIsLogin);
storeAdminAuthPembimbingSekolah.$subscribe((mutation, state) => {});

const resCheckToken: Ref<Promise<boolean>> = ref([]);
const checkTokenExpired = async (dataToken: string): Promise<void> => {
  resCheckToken.value = await serviceAuthPembimbingSekolah.doCheckToken(
    dataToken
  );
  if (resCheckToken.value === false) {
    serviceAuthPembimbingSekolah.doLogout(false);
    Toast.danger("Info", "Token Expired");
    router.push({ name: "LandingLoginPembimbingSekolah" });
  }
};
// console.log(token.value);

if (token.value) {
  console.log("isTokenExpired");
  checkTokenExpired(token.value);
} else {
  Toast.info("Info", "Silahkan login terlebih dahulu");
  router.push({ name: "LandingLoginPembimbingSekolah" });
}
</script>
<template>
  <!-- <ScrollToTop /> -->
  <!-- <ThemeBar /> -->
  <div class="border-b-2 top-0 lg:top-0 relative">
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <!-- mobile ONLY -->
        <div
          class="w-full flex justify-between px-4 py-4 bg-base-200 shadow-md"
        >
          <div>
            <router-link :to="{ name: 'LandingIndex' }">
              <h1
                class="text-base-content font-bold py-2 pt-6 uppercase underline italic underline-offset-2"
              >
                Landing Pages
              </h1>
            </router-link>
          </div>
          <div>
            <label for="my-drawer-2" class="btn drawer-button lg:hidden"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                /></svg
            ></label>
          </div>
        </div>
        <!-- mobile ONLY -->

        <main class="font-serif md:min-h-screen py-12 px-2 lg:px-4 lg:py-10">
          <router-view />
        </main>
      </div>
      <SideBarAdmin></SideBarAdmin>
    </div>

    <Footer />
  </div>
</template>
