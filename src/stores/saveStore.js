import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

export default defineStore('saveStore', {
  state: () => ({
    saveIdlist: [],
    saveProductList: [],
    isHover: false,
  }),
  actions: {
    addToSave(product) {
      const index = this.saveIdlist.findIndex(
        (item) => item.productId === product.id,
      );
      if (index === -1) {
        // 如果 savelist 中不存在该 productId，则添加到 savelist
        Swal.fire({
          title: '加入收藏',
          text: '加入我的收藏頁面',
          icon: 'success',
        });
        this.saveIdlist.push({ productId: product.id });
        this.saveProductList.push({ product });
        this.isHover = true;
      } else {
        // 如果 savelist 中已经存在该 productId，則將 savelist 中移除
        this.saveIdlist.splice(index, 1);
        this.saveProductList.splice(index, 1);
        Swal.fire({
          title: '移除收藏',
          text: '將產品移除我的收藏頁面',
          icon: 'error',
        });
      }
    },
    onMouseover(productId) {
      this.$set(this.isHover, productId, true);
    },
    onMouseleave(productId) {
      this.$set(this.isHover, productId, false);
    },
    isProductSaved(productId) {
      return this.saveIdlist.some((item) => item.productId === productId);
    },
  },
});
