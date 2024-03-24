<template>
    <h1>我的收藏頁面</h1>
    {{ savelist }}
  </template>

<script>
import { mapState } from 'pinia';
import saveStore from '@/stores/saveStore';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(saveStore, ['savelist']),
  },
};
</script>

<style scoped>
</style>
