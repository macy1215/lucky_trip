<template>
  <div
    id="delOrderModal"
    ref="delOrderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>訂單編號{{ tempOrder.id }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start">
          是否刪除訂單編號為
          <strong class="text-danger">
            <span class="fw-bold">{{ tempOrder.id }}</span>
          </strong>
          訂單？
          <div class="mt-2">(刪除後將無法恢復)。</div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteOrder">
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

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  props: ['tempOrder', 'getOrders'],
  data() {
    return {
      delOrderModal: null,
    };
  },
  methods: {
    showModal() {
      this.delOrderModal.show();
    },
    hideModal() {
      this.delOrderModal.hide();
    },
    deleteOrder() {
      const url = `${VITE_URL}/api/${VITE_NAME}/admin/order/${this.tempOrder.id}`;
      axios
        .delete(url, { data: this.tempOrder })
        .then((res) => {
          this.$emit('update');
          this.hideModal();
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: 'success',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  },
  mounted() {
    this.delOrderModal = new Modal(this.$refs.delOrderModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
