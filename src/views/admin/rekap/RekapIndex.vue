<script setup lang="ts">
import { useStoreAdmin } from "@/stores/admin";

const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("rekap");
</script>
<template>Rekap</template>
