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
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      bannerPicArray:[],
      category:[],
      adBanner:[]
    };
  },
  created () {
    axios({
      url: 'https://www.easy-mock.com/mock/5ab0cb4eb38a7b7e2b5f06ad/vue/happy',
      method: 'get'
    }).then(response => {
      console.log(response);
      if(response.status==200){
        this.bannerPicArray=response.data.data.slides;
        this.category=response.data.data.category;
        this.adBanner=response.data.data.advertesPicture;
      }
    }).catch(error => {
      console.log(error)
    })
  }
};
</script>
<style lang=scss>
$dark_gray: #a8a4a5;
$background-color:#fff;
.search-bar {
  height: 2.2rem;
  /* background-color: #d704e1; */
  line-height: 2.2rem;
}
.svg-container {
  /* display: inline-block; */
  padding-top: .2rem;
  padding-left: .3rem;
  color: $dark_gray;
  /* vertical-align: middle; */
}
.search-input{
  width: 100%;
  line-height: 1.3rem;
  border-top: 0px;
  border-bottom: 1px solid 1px;
  border-left: 0px;
  border-right: 0px;
}
.swipe-area{
  width: 20rem;
  clear: both;
}
.type-bar{
  background-color:$background-color;
  margin: 0 .3rem .3rem .3rem;
  border-radius: .3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div{
    padding: .3rem;
    font-size: 12px;
    text-align: center
  }
}
</style>

