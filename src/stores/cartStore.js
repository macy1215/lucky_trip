import { defineStore } from 'pinia';
import axios from 'axios';

import Swal from 'sweetalert2';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default defineStore('cartStore', {
  state: () => ({
    carts: [], // 購物車列表
    final_total: 0, // 購物車總計
    order_total: 0,
    total: 0,
    status: {
      addCartLoading: '',
      showCartLoading: '',
      cartQtyLoading: '',
    },
  }),
  actions: {
    addToCart(id, qty = 1) {
      console.log(id, qty);
      const cart = {
        product_id: id,
        qty,
      };
        // this.status.addCartLoading = id
      axios.post(`${VITE_URL}/api/${VITE_NAME}/cart`, { data: cart })
        .then((res) => {
          console.log(res);
          this.getCart();
          Swal.fire({
            title: '成功加入購物車',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err,
            // title: err.response.data.message,
          });
        });
    },
    getCart() {
      axios.get(`${VITE_URL}/api/${VITE_NAME}/cart`)
        .then((res) => {
          console.log(res);
          this.carts = res.data.data.carts;
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
          this.order_total = res.data.data.total;
          console.log('pinia cart', this.carts);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeCartItem(id) {
      Swal.fire({
        title: '您確定要刪除這個商品嗎？',
        text: '一但刪除將無法復原',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '我要刪除',
      }).then((result) => {
        if (result.isConfirmed) {
          this.status.cartQtyLoading = id;
          this.status.showCartLoading = id;
          console.log(id);
          axios.delete(`${VITE_URL}/api/${VITE_NAME}/cart/${id}`)
            .then((res) => {
              console.log(res);
              this.status.cartQtyLoading = '';
              this.status.showCartLoading = '';
              this.getCart();
              Swal.fire({
                title: '刪除該商品',
                text: '確定已將產品刪除',
                icon: 'success',
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    removeAllCart() {
      Swal.fire({
        title: '您確定要刪除所有商品嗎？',
        text: '一但刪除將無法復原',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '我要刪除',
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`${VITE_URL}/api/${VITE_NAME}/carts`)
            .then((res) => {
              // eslint-disable-next-line no-console
              console.log(res);
              this.getCart();
              Swal.fire({
                title: '刪除所有商品',
                text: '確定已將列表刪除',
                icon: 'success',
              });
            })
            .catch((err) => {
              // eslint-disable-next-line no-alert
              window.alert(err.data.message);
            });
        }
      });
    },
    changeCartQty(item, qty = 1) { //  將整個購物車帶入
      const order = {
        product_id: item.product_id,
        qty,
      };
      this.status.cartQtyLoading = item.id;
      // 帶入購物車 id
      axios.put(`${VITE_URL}/api/${VITE_NAME}/cart/${item.id}`, { data: order })
        .then((res) => {
          console.log(res);
          this.status.cartQtyLoading = '';
          // 加完購物車，會重跑顯示列表
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});