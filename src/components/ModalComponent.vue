<!-- eslint-disable vue/no-duplicate-attributes -->
<!-- eslint-disable space-infix-ops -->
<!-- eslint-disable no-alert -->
<!-- eslint-disable no-alert -->
<!-- eslint-disable max-len -->
<!-- eslint-disable padded-blocks -->
<!-- eslint-disable indent -->
<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable key-spacing -->
<template>
<div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title" >
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯產品</span>
              </h5>
              <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-12">
                  <div class="row mb-2">
                    <div class="mb-3 text-start col-sm-6">
                      <label for="imagesUrl" class="form-label h5">主要圖片</label>
                      <input
                      type="text"
                      id="imageUrl"
                      class="form-control" v-model="tempProduct.imageUrl" placeholder="請輸入圖片連結"
                      >
                      <img class="img-fluid mt-3" :src="tempProduct.imageUrl" alt="">
                    </div>
                    <!-- 如果tempProduct.imagesUrl不為空，顯示以下資訊 -->
                    <div class="col-sm-6">
                      <h5 class="text-start h5">多圖新增</h5>
                      <div v-if="Array.isArray(tempProduct.imagesUrl)">
                          <div v-for="(item,key) in tempProduct.imagesUrl" :key="key">
                              <div class="form-group d-flex mb-3 align-items-center">
                                <label :for="`imageUrl${key}`" class="form-label col-1 mb-0">網址{{ key+1 }}</label>
                                <input :id="`imageUrl${key}`"
                                type="text"
                                class="form-control ms-2"
                                v-model="tempProduct.imagesUrl[key]"
                                placeholder="請輸入圖片連結" >
                              </div>
                            <!-- v-if="item.length"：檢查目前item（圖像 URL）的屬性是否為真
                              - 如果item是undefined或空字串，則條件計算結果為假，則不渲染影像 -->
                              <div>
                                <img class="img-fluid" :src="item" alt="">
                              </div>
                            </div>
                          <!-- 若陣列為空或最後一個元素為真，則顯示「新增圖片」按鈕；否則，顯示“刪除圖片”按鈕 -->
                          <div v-if="!tempProduct.imagesUrl.length ||
                          tempProduct.imagesUrl.at(-1).trim()" class="my-2">
                            <button
                            class="btn btn-outline-primary btn-sm d-block w-100"
                            @click="tempProduct.imagesUrl.push('')" >
                            <!-- tempProduct.imagesUrl.push('') -->
                              新增圖片
                            </button>
                          </div>
                          <div v-else>
                            <button class="btn btn-outline-danger btn-sm d-block w-100" @click="tempProduct.imagesUrl.pop()">
                              <!-- 移除 tempProduct.imagesUrl pop一個元素 -->
                              刪除圖片
                            </button>
                          </div>
                        </div>
                      <!-- 如果tempProduct.imagesUrl為空，則顯示此按鈕，允許新增第一張圖像。 -->
                      <!-- tempProduct.imagesUrl=['']替換了數組引用 -->
                      <div v-else>
                        <button class="btn btn-outline-primary btn-sm d-block w-100" @click = "tempProduct.imagesUrl = ['']">
                          新增圖片
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="mb-3 text-start">
                    <label for="title" class="form-label">旅遊方案標題</label>
                    <input id="title" type="text" class="form-control" placeholder="請輸入標題"  v-model="tempProduct.title">
                  </div>

                  <div class="row text-start">
                    <div class="mb-3 col-md-6">
                      <label for="category" class="form-label">旅遊類型</label>
                      <input id="category" type="text" class="form-control"
                        placeholder="請輸入分類" v-model="tempProduct.category">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="unit" class="form-label">單位</label>
                      <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="tempProduct.unit">
                    </div>
                  </div>

                  <div class="row text-start">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label">原價</label>
                      <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model="tempProduct.origin_price">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">售價</label>
                      <input id="price" type="number" min="0" class="form-control"
                             placeholder="請輸入售價" v-model="tempProduct.price">
                    </div>
                  </div>

                  <div class="row text-start">
                    <div class="mb-3 col-md-6">
                      <label for="area" class="form-label">地區</label>
                      <select class="form-select" aria-label="Default select" v-model="tempProduct.area">
                        <option selected>請選擇地區</option>
                        <option value="北區">北部</option>
                        <option value="中部">中部</option>
                        <option value="南部">南部</option>
                        <option value="東部">東部</option>
                      </select>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="area" class="form-label">建議使用交通工具</label>
                        <div class="d-lg-inline-flex flex-row align-items-center mt-2">
                          <div class="form-check me-3  form-check-inline">
                            <input class="form-check-input" type="checkbox" value="雙腳萬能" id="walk" v-model="tempProduct.is_walk" :true-value="1" :false-value="0">
                            <label class="form-check-label" for="walk">
                              雙腳萬能
                            </label>
                          </div>
                          <div class="form-check me-3  form-check-inline">
                            <input class="form-check-input" type="checkbox" value="包車" id="Intercitybus" v-model="tempProduct.is_intercitybus" :true-value="1" :false-value="0">
                            <label class="form-check-label" for="Intercitybus">
                              包車(租賃、遊覽車)
                            </label>
                          </div>
                          <div class="form-check  form-check-inline">
                            <input class="form-check-input" type="checkbox" value="大眾交通" id="publictrans" v-model="tempProduct.is_publictrans" :true-value="1" :false-value="0">
                            <label class="form-check-label" for="publictrans">
                              大眾交通(火車、公車、捷運等)
                            </label>
                          </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3 text-start">
                    <label for="description" class="form-label">旅遊簡介說明</label>
                    <textarea id="description" type="text" class="form-control"
                              placeholder="旅遊簡介說明" v-model="tempProduct.description">
                    </textarea>
                  </div>
                  <div class="mb-3 text-start">
                    <label for="description" class="form-label">旅遊行程文字說明</label>
                    <textarea id="description" type="text" class="form-control"
                              placeholder="旅遊行程文字說明" v-model="tempProduct.schedule">
                    </textarea>
                  </div>

                  <div class="mb-3 text-start">
                    <label for="content" class="form-label">餐點內容</label>
                    <textarea id="description" type="text" class="form-control"
                    placeholder="請輸入注意事項"  v-model="tempProduct.content">
                    </textarea>
                  </div>

                  <div class="mb-3 text-start">
                    <label for="content" class="form-label">發布集合地點</label>
                    <textarea id="description" type="text" class="form-control"
                    placeholder="請輸入注意事項"  v-model="tempProduct.place">
                    </textarea>
                  </div>
                  <div class="mb-3 text-start">
                    <label for="content" class="form-label">包車</label>
                    <div class="form-check ms-3  form-check-inline">
                            <input class="form-check-input" type="checkbox"
                            value="可包車" id="needcar" v-model="tempProduct.need_car" :true-value="1" :false-value="0">
                            <label class="form-check-label" for="needcar">
                              可包車
                            </label>
                      </div>
                  </div>
                  <div class="mb-3 text-start">
                    <label for="feeincluded" class="form-label">費用包含</label>
                    <textarea id="description" type="text" class="form-control"
                    placeholder="請輸入費用內容"  v-model="tempProduct.feeincluded">
                    </textarea>
                  </div>

                  <div class="d-flex">
                    <div class="mb-3 text-start w-25">
                      <label for="peoplemin" class="form-label">最少成行人數</label>
                        <input id="peoplemin" type="number" min="0" class="form-control"
                        placeholder="請輸入最少成行人數" v-model="tempProduct.minpeople">
                    </div>

                    <div class="mb-3 ms-4 text-start w-25">
                      <label for="registpeople" class="form-label">可報名人數</label>
                      <input id="registpeople" type="number" min="0" class="form-control"
                        placeholder="請輸入最多可報名人數" v-model="tempProduct.regist">
                    </div>
                  </div>
                 <!-- <div class="mb-3 text-start">
                    <label for="content" class="form-label">取消退費政策</label>
                    <textarea id="description" type="text" class="form-control"
                    placeholder="請輸入取消政策"  v-model="tempProduct.canclepolic">
                    </textarea>
                  </div> -->

                  <div class="mb-3 text-start">
                    <div class="form-check">
                      <input id="is_enabled" class="form-check-input" type="checkbox"
                      v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" >
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" >
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="updateProduct">
                確認
              </button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import axios from 'axios';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  props: ['tempProduct', 'isNew', 'clearInput', 'getProducts', 'description'],
  data() {
    return {
      productModal: null,
      data: '',
    };
  },
  methods: {
    showModal() {
      this.productModal.show();
    },
    hideModal() {
      this.productModal.hide();
    },
    updateProduct() {
    // 更新與新增使用同一個 method，新增時的寫法
      let url = `${VITE_URL}/api/${VITE_NAME}/admin/product`;
      let http = 'post'; // 傳入資料

      if (!this.isNew) {
      // 當確認為新增時，更新資料。這個是編輯的不是新增
        url = `${VITE_URL}/api/${VITE_NAME}/admin/product/${this.tempProduct.id}`;
        http = 'put';// 更新資料
      }

      axios[http](url, { data: this.tempProduct })
        .then((res) => {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.hideModal();
          this.$emit('update');
        })
        .catch((err) => {
          // eslint-disable-next-line no-alert
          alert(err.response.data.message);
          // .data.message
        });
    },
    addschedules() {
      console.log(this.tempProduct.schedule[0]);
      let schedules = this.tempProduct.schedule;
      if (!Array.isArray(schedules)) {
        schedules = [schedules];
      }
      schedules.push('');
      this.$emit('update:tempProduct', { ...this.tempProduct, schedule: schedules });
    },
  },
  mounted() {
    // this.productModal = new Modal(this.$ref.productModal, {
    //   keyboard: false,
    //   backdrop: 'static',
    // });
    this.productModal = new Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
