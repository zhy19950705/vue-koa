<template>
  <div>
      <div class="search-bar">
          <van-row gutter="5">
          <van-col span="3"> <span class="svg-container">
              <svg-icon icon-class="search" />
            </span></van-col>
          <van-col span="16">
            <input type="text" class="search-input" />
          </van-col>
          <van-col span="5">
            <van-button size="mini">查找</van-button>
          </van-col>
      </van-row>
      </div>
      <div class="swiper-area">
        <van-swipe :autoplay="2000">
          <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img :src="banner.image" width="100%" >
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="type-bar">
        <div v-for="(cate,index) in category" :key="index">
         <img v-lazy="cate.image" width="90%" />
         <span>{{cate.mallCategoryName}}</span>
        </div>
      </div>
      <div class="ad-banner">
        <img v-lazy='adBanner.PICTURE_ADDRESS' width="100%" />
      </div>
      <div class="recommend-area">
         <div class="recommend-title">
            商品推荐
         </div>
         <div class="recommend-body">
             <div class="floor">
               <div class="floor-anomaly">
                 <div class="floor-one"><img :src="floor1_0.image" width="100%"></div>
               </div>
             <div>
                 <div class="floor-two"><img :src="floor1_1.image" width="100%"></div>
                 <div><img :src="floor1_2.image" width="100%"></div>
             </div>
             <div class="floor-rule">
                <div v-for="(item,index) in floor1.slice(3)" :key="index">
                 <img :src='item.image'  width="100%">
                </div>
             </div>
             </div>
         </div>
      </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      bannerPicArray: [],
      category: [],
      adBanner: [],
      recommendGoods: [],
      floor1: [],
      floor1_0:{},
      floor1_1:{},
      floor1_2:{}
    };
  },
  components: {},
  created() {
    axios({
      url: "https://www.easy-mock.com/mock/5ab0cb4eb38a7b7e2b5f06ad/vue/happy",
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.bannerPicArray = response.data.data.slides;
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          this.floor1_0 = this.floor1[0];
          this.floor1_1 = this.floor1[1];
          this.floor1_2 = this.floor1[2];
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang=scss>
$border:1px solid #ddd;
$background-color: #fff;
.search-bar {
  height: 2.2rem;
  /* background-color: #d704e1; */
  line-height: 2.2rem;
}
.svg-container {
  /* display: inline-block; */
  padding-top: 0.2rem;
  padding-left: 0.3rem;
  /* color: $dark_gray; */
  /* vertical-align: middle; */
}
.search-input {
  width: 100%;
  line-height: 1.3rem;
  border-top: 0px;
  border-bottom: 1px solid 1px;
  border-left: 0px;
  border-right: 0px;
}
.swipe-area {
  width: 20rem;
  clear: both;
}
.type-bar {
  background-color: $background-color;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div {
    padding: 0.3rem;
    font-size: 12px;
    text-align: center;
  }
}
.recommend-area {
  background-color: $background-color;
  margin-top: 0.3rem;
  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: 0.2rem;
    color: #e5017d;
  }
  .recommend-body {
    .floor-anomaly{
      display: flex;
      flex-direction: row;
      background-color: $background-color;
      border-bottom: $border;
      div{
        width: 10rem;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
      }
      .floor-one{
        border-right:$border;
        .floor-two{
          border-bottom: $border;
        }
      }
    }
    .floor-rule{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: $background-color;
      div{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 10rem;
        border-bottom: $border;
      }
      div:nth-child(odd){
        border-right:$border 
      }
    }

  }
}

</style>

