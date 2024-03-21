<template>
<div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
    aria-labelledby="delProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
        <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
        是否刪除
          <strong class="text-danger ">
            <span class="fw-bold">{{ tempProduct.title}}</span>
          </strong> 方案
          <div class="mt-2">
            (刪除後將無法恢復)。
          </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
        </button>
        <button type="button" class="btn btn-danger" @click="deleteProduct">
            確認刪除
        </button>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import axios from 'axios';

import Swal from 'sweetalert2';
import { toast } from 'vue3-toastify';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  props: ['tempProduct', 'getProducts'],
  data() {
    return {
      delProductModal: null,
    };
  },
  methods: {
    showModal() {
      this.delProductModal.show();
    },
    hideModal() {
      this.delProductModal.hide();
    },
    deleteProduct() {
      const url = `${VITE_URL}/api/${VITE_NAME}/admin/product/${this.tempProduct.id}`;
      axios.delete(url, { data: this.tempProduct })
        .then((res) => {
          Swal.fire({
            title: res.response.data.message,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
          this.hideModal();
          this.$emit('update');
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    },
  },
  mounted() {
    this.delProductModal = new Modal(this.$refs.delProductModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
