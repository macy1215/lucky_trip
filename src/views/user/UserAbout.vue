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
        .then((response) => {
          console.log(response.data.article.content);
          if (response.data.success) {
            this.editorData = response.data.article.content.replace(/\n/g, '<br>');
          } else {
            console.error('找不到產品編號！');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
