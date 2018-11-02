const vailPhone = (code)=>{
   return /^[1][3,4,5,7,8][0-9]{9}$/.test(code)
}
module.exports = {
    vailPhone,//验证是否是手机号码
}