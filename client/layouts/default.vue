<template>
  <div class="container">
    <nav class="layout-nav">
      <Menubar :model="menuItems">
        <template #start>
          <span>coloring memo</span>
        </template>
        <template #end>
          <InputText placeholder="Search" type="text" />
        </template>
      </Menubar>
    </nav>
    <div class="layout-content">
      <div class="layout-main"><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const menuItems = ref([
  {
    label: 'Home',
    to: '/',
    // icon: 'fa-solid fa-house',
  },
  {
    label: 'Combos',
    to: '/combos',
  },
  {
    label: 'Pencil DB',
    to: '/pencildb',
  },
]);

const visible = ref(false);
</script>
