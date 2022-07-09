<script setup lang="ts">
import Toast from "@/components/lib/Toast";
import { ref, computed } from "vue";
import { Form, Field } from "vee-validate";
import serviceAuthPembimbingSekolah from "@/services/serviceAuthPembimbingSekolah";
import fnValidasi from "@/components/lib/babengValidasi";
import { useRouter } from "vue-router";
import { useStoreAdminAuthPembimbingSekolah } from "@/stores/adminAuthPembimbingSekolah";
const storeAdminAuthPembimbingSekolah = useStoreAdminAuthPembimbingSekolah();

const token = computed(() => storeAdminAuthPembimbingSekolah.getToken);
const isLogin = computed(() => storeAdminAuthPembimbingSekolah.getIsLogin);

const resCheckToken: Ref<Promise<boolean>> = ref([]);
const checkTokenExpired = async (dataToken: string): Promise<void> => {
  resCheckToken.value = await serviceAuth.doCheckToken(dataToken);
  if (resCheckToken.value == true) {
    Toast.info("Info", "Login berhasil");
    router.push({ name: "AdminDashboard" });
  }
};

if (token.value) {
  // console.log("isTokenExpired");
  checkTokenExpired(token.value);
}

const router = useRouter();
const email = ref();
const password = ref();
const resLogin = ref(false);
const onSubmit = async (values: any) => {
  // console.log(values.email, values.password);
  resLogin.value = await serviceAuthPembimbingSekolah.doLogin(
    values.email,
    values.password
  );
  if (resLogin.value) {
    router.push({ name: "AdminDashboard" });
  }
};
</script>
<template>
  <div>
    <div class="flex justify-center w-full">
      <div>
        <Form v-slot="{ errors }" @submit="onSubmit">
          <div class="bg-base-100 py-32">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <div class="text-center lg:text-left">
                <!-- <p class="py-6">
                  Masuk sebagai
                  <span class="uppercase underline font-bold"
                    >Pembimbing Lapangan</span
                  >.
                </p> -->
              </div>
              <div
                class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100"
              >
                <div class="card-body">
                  <div class="flex justify-center py-4 border-b-2">
                    <!-- <p class="py-2">Masuk sebagai :</p> -->
                    <h1 class="text-4xl font-bold text-center">
                      Pembimbing Sekolah
                    </h1>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email / Username</span>
                    </label>
                    <Field
                      v-model="email"
                      :rules="fnValidasi.validateData2"
                      name="email"
                      type="text"
                      placeholder="email"
                      class="input input-bordered input-secondary"
                    />
                    <div class="text-xs text-red-600 mt-1">
                      {{ errors.email }}
                    </div>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <Field
                      v-model="password"
                      :rules="fnValidasi.validateData2"
                      name="password"
                      type="password"
                      placeholder="password"
                      class="input input-bordered input-secondary"
                    />
                    <div class="text-xs text-red-600 mt-1">
                      {{ errors.password }}
                    </div>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary w-full">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
