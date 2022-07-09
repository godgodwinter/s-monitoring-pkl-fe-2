<script setup lang="ts">
import { useStoreAdminPembimbingSekolah } from "@/stores/adminPembimbingSekolah";

const storeAdminPembimbingSekolah = useStoreAdminPembimbingSekolah();
storeAdminPembimbingSekolah.setPagesActive("dashboard");
</script>
<template>Dashboard</template>
