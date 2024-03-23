<template>
    <h1>This is About page.</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div class="container">
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Swal from 'sweetalert2';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        // toolbar: ['heading', '|', 'bold', 'italic', 'link'],
        dataProcessor: {
          writer: {
            enter: '<br>',
          },
        },
      },
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      axios
        .get(`${VITE_URL}/api/${VITE_NAME}/admin/article/-Ns6PAFkxXqUVGmEolbo`)
        .then((res) => {
          if (res.data.success) {
            this.editorData = res.data.article.content.replace(/\n/g, '<br>');
          } else {
            Swal.fire({
              title: '找不到產品編號！',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: err.data.message,
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
        });
    },
  },
};
</script>

<style scoped>
</style>
