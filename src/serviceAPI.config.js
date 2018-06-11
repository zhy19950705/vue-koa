const BASEURL = 'https://www.easy-mock.com/mock/5ab0cb4eb38a7b7e2b5f06ad/vue/happy'
const LOCALURL = 'http://localhost:3000/'
const URL = {
  getShoppingMallInfo: BASEURL + 'index',
  getGoodsInfo: BASEURL + 'getGoodsInfo',
  registerUser: LOCALURL + 'user/register'
}

module.exports = URL
