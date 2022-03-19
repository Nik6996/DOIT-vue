<template>
  <div>
    <div class="bracket">
      <div class="bracket__btns">
        <div allowSlideNext class="bracket__swiper-button-prev"></div>
        <div allowSlideNext class="bracket__swiper-button-next"></div>
      </div>
      <div class="bracket__content">
        <swiper
          :slidesPerView="3"
          :slidesPerGroup="1"
          :navigation="{
            nextEl: '.bracket__swiper-button-next',
            prevEl: '.bracket__swiper-button-prev',
          }"
          :breakpoints="{
            320: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },
            1320: {
              slidesPerView: 3,
            },
          }"
          class="swiper"
        >
          <swiper-slide>
            <div class="bracket__title">Round 16</div>
            <div class="bracket__column">
              <div class="bracket__block">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span>22</span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">Round 8</div>
            <div class="bracket__column column2">
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">Semi final</div>
            <div class="bracket__column column2">
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
              <div class="bracket__block bracket__inner-small">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bracket__title">final</div>
            <div class="bracket__column">
              <div class="bracket__block bracket__inner-big">
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
                <div class="bracket__player">
                  <div class="bracket__flag"></div>
                  user <span></span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Autoplay } from "swiper";
//import { mapGetters } from "vuex";
SwiperCore.use([Navigation, Autoplay]);
import "swiper/swiper.scss";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.bracket {
  border: 2px solid #20252b;
  &__content {
    max-width: 812px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 815px;
  }

  &__title {
    text-transform: uppercase;

    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    color: white;
  }

  &__block {
    margin: 10px;
    position: relative;
  }
  &__inner-small::before {
    content: "";
    background-image: url("../../../../assets/img/bracket.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 60px;
    height: 100px;
    position: absolute;
    top: -9px;
    left: -59px;
  }
  &__inner-big::before {
    content: "";
    background-image: url("../../../../assets/img/bracket-big.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 63px;
    height: 200px;
    position: absolute;
    top: -61.5px;
    left: -59px;
  }

  &__player {
    color: #b1b1b1;
    font-weight: 400;
    font-size: 14px;
    margin: 1px;
    width: 160px;
    height: 36px;
    border: 1px solid #20272e;
    border-radius: 2px 2px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      background: #20272e;
      width: 36px;
      height: 36px;
      color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 27px;
    z-index: 10;
  }
  &__swiper-button-next {
    transform: rotate(180deg);
    margin: 10px;
    background-image: url("../../../../assets/icon/arrow-bracket.svg");
    background-position: top;
    width: 20px;
    height: 17px;
    cursor: pointer;
  }
  &__swiper-button-prev {
    cursor: pointer;
    margin: 10px;
    background-image: url("../../../../assets/icon/arrow-bracket.svg");
    background-position: top;
    width: 20px;
    height: 17px;
  }
}
.column2 {
  height: 812px;
  justify-content: space-around;
  padding: 25px 0px;
}
</style>