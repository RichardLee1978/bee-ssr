const router = require('koa-router')();

import axios from '../../plugins/http'
router.post('/login', async (ctx, next) =>{
    console.log('----------------------------------------------------')
   // console.dir(JSON.stringify(ctx));
    console.log(ctx);
    const { Password, phone } = ctx.request.body;
    const user =await axios.post('/user/login',{ Password, phone });
    if (user) {
        ctx.session.user = {
         token:user.data.data   
        
        }
        return (ctx.body = {
            code: 200,
            data: {
                token:user.data.data 
            },
            msg:'登录成功'
           });
    } else {
        return (ctx.body = {
            code: 400,
            data: {
                
            },
            msg:'用户名或密码错误'
           });
    }
});
export default  router
