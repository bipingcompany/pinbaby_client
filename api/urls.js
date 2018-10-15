// const host = 'http://10.0.246.42:8290/'
const host = 'https://ppb.bipingcoin.com/'

export default {
  HOSTURL: host,
  USERLOGIN: `${host}userLogin`, // 登录
  GETPHONE: `${host}getPhoneData`, // 收集手机号
  TEMFORMID: `${host}temfromid`, //收集fromId
  COMMLIST: `${host}commList`,  // 商品列表
  COMMDTAIL: `${host}commDetail`, // 商品详情
  SINGLEPAY: `${host}pay/directPurchase`, // 单买
  GROUPPAY: `${host}/pay/openGroup`, // 组团买
  GROUPRESULT: `${host}payResult/groupResult`, // 下单结果页
  INVOKEGROUP: `${host}pay/invokeGroup`, //加入拼团下单
  SPELLORDER: `${host}user/order/spellorder`, // 我的订单
}