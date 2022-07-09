<script setup lang="ts">
import { useStoreAdmin } from "@/stores/admin";

const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("dashboard");
</script>
<template>Dashboard</template>
