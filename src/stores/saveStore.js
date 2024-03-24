import { defineStore } from 'pinia';
// import productsStore from './productsStore';

export default defineStore('saveStore', {
  state: () => ({
    savelist: [],
  }),
  actions: {
    addToSave(product) {
      // eslint-disable-next-line max-len
      const isSaved = this.savelist.some((item) => JSON.stringify(item) === JSON.stringify(product));
      if (!isSaved) {
        console.log(isSaved);
        // 如果 savelist 中不存在该 productId，则添加到 savelist
        this.savelist.push({ product });
      } else {
        // 如果 savelist 中已经存在该 productId，则从 savelist 中移除
        const index = this.savelist.findIndex((item) => item === product);
        console.log(index !== -1);
        this.savelist.splice(index, 1);
      }
      console.log(this.savelist);
    },
    isProductSaved(product) {
      return this.savelist.some((item) => item === product);
    },
    // addToSave(productId) {
    //   const index = this.savelist.findIndex((item) => item.productId === productId);
    //   if (index === -1) {
    //     // 如果 savelist 中不存在该 productId，则添加到 savelist
    //     this.savelist.push({ productId });
    //   } else {
    //     // 如果 savelist 中已经存在该 productId，则从 savelist 中移除
    //     this.savelist.splice(index, 1);
    //   }
    //   console.log(this.savelist);
    // },
    // isProductSaved(productId) {
    //   return this.savelist.some((item) => item.productId === productId);
    // },
  },
});
