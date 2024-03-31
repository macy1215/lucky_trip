<template>
    <nav aria-label="Page navigation example">
    <ul class="pagination  d-flex justify-content-start align-item-center">
      <!-- 回前頁 -->
      <li class="page-item d-flex align-items-center" :class="{disabled:!pagination.has_pre}">
        <a class="page-link" aria-label="Previous"
        @click.prevent="updatePage(pagination.current_page-1)">
          <span aria-hidden="true" class="d-inline-block align-middle"
          style="padding-bottom: 0.4rem">&laquo;</span>
        </a>
      </li>
      <!-- 當前頁面 -->
      <li class="page-item"
           v-for="page in pagination.total_pages" :key="page"
          :class="{active:page === pagination.current_page}">
        <a class="page-link d-inline-block align-middle"
            @click.prevent="updatePage(page)">
            <span class="d-inline-block align-middle"
            style="padding-bottom: 0.4rem">{{page}}</span>
        </a>
     </li>
     <!-- 下一頁 -->
      <li class="page-item"
          :class="{disabled: !pagination.has_next}">
        <a class="page-link d-inline-block align-middle" aria-label="Next"
        @click.prevent="updatePage(pagination.current_page+1)">
          <span aria-hidden="true" class="d-inline-block align-middle"
          style="padding-bottom: 0.4rem">&raquo;</span>
        </a>
      </li>
    </ul>
    </nav>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    updatePage(item) {
      this.$emit('emitPages', item);
    },
  },
};
</script>

<style>
</style>
