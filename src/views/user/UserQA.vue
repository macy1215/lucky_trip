<template>
  <div class="container py-4 mb-3">
    <h1 class="fs-4 text-primary mb-4 pt-4 text-center">常見問題</h1>
    <div class="row justify-content-center align-items-center text-start pb-4">
      <div class="col-md-8">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                訂購流程說明
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ol class="ps-md-5 ps-3 lh-lg">
                  <li>請利用官網上提供行程，將商品加入購物車。</li>
                  <li>
                    確認購買後，請確認您最後欲購買商品，並填寫購買者資訊。
                  </li>
                  <li>填寫收件人資訊送出後即可進行付款。</li>
                  <li>
                    付款完成後待好嗨遊客服確認訂單並與買方確認出遊日期與行程
                  </li>
                  <li>以上確認完成，將郵寄出旅遊相關行程與票券。</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                請問我有行程想調整怎麼辦？
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                <ol class="ps-md-5 ps-3 lh-lg">
                  <li>在確認購買行程後，填寫收件人資訊時可以加入備註中</li>
                  <li>待好嗨遊接收到需求會請有專人與您洽談。</li>
                  <li>
                    付款完成後待好嗨遊客服確認訂單，將郵寄出旅遊相關行程與票券。
                  </li>
                  <li
                    class="text-danger fw-bold ps-0 list-unstyled pt-2"
                    style="margin-left: -16px"
                  >
                    注意:行程日前1個月請確認最後行程。並不可再調整大方向行程
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                如果我想要包車或是團隊旅遊可以嗎？
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                <div class="ps-md-5 ps-0 lh-lg">
                  <p class="ms-md-1">
                    可以的！如果需要公司團體旅遊，請先與好嗨遊確認行程地點及人數，我們會提供客製化的服務及旅遊行程。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                完成訂單後，付款期限為何？
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
                <div class="ps-md-5 ps-0 lh-lg">
                  <p class="ms-md-1">
                    訂購後 5 日內，不可分開付費，請一次繳納完成。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                退費政策
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div class="accordion-body">
                <ul class="ps-md-5 ps-3 lh-lg">
                  <li class="text-danger list-unstyled">
                    政策適用於團體及個人
                  </li>
                  <li>旅遊開始前第31日取消:平台需賠償百分之10</li>
                  <li>旅遊開始前第21-30日取消:平台需賠償百分之20。</li>
                  <li>旅遊開始前第11-20日取消:平台需賠償百分之30。</li>
                  <li>旅遊開始前第4-10日取消:平台需賠償百分之50。</li>
                  <li>旅遊開始前第1-3日取消:平台需賠償百分之70。</li>
                  <li class="text-danger fw-bold ps-0 pt-2">
                    <strong
                      >如於出發當天取消訂單、團隊集合逾時、因個人因素私自脫隊、及未通知不參加者恕不退費</strong
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-banner />
</template>

<script>
import FooterBanner from '@/components/FooterBanner.vue';

export default {
  components: {
    FooterBanner,
  },
};
</script>

<style scoped></style>
