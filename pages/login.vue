<template>
    <div class="login">
        <div class="login-top-logo">
             <img  src="~/static/imgs/logo/photo_logo.png" >
        </div>
        <div class="login-box">
            <group title="手机">
                <x-input   v-model="phone" :max="13" mask="999 9999 9999" is-type="china-mobile" placeholder="输入手机号"></x-input>
            </group>
            <group title="密码">
                <x-input  type="password" v-model="Password"   placeholder="输入密码"></x-input>
            </group>
             <div style="padding:15px;">
                    <x-button style="background:#1fac89;" @click.native='postdata'  type="primary">登录</x-button>
                    
            </div>
             <flexbox style="margin:0px auto;">
                <flexbox-item><div style="text-align:center"> <a class="forget-password" href="">忘记密码</a></div></flexbox-item>
                <flexbox-item><div style="text-align:center"><a class="forget-password" href="/register">注册</a></div></flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<style lang="less">
    html,body {
        height:100%;
        width:100%;
    }
    .login {
        height:100%;
        .login-top-logo {
                margin:15px auto auto auto;
                img {
                    margin-left:20px;
                    display: block;
                }
            } 
        .login-box {
            padding:15px;
            .forget-password {
                color:#1fac89;
            }
        }
    }
</style>
<script>
import axios from 'axios'
export default {
     data () {
        return {
        password: '123465',
        password2: '',
        enterText: '',
        valid1: false,
        valid2: false,
        iconType: '',
        ValidateCellPhone: function (value) {
            const is_cellphone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
            return {
                valid: is_cellphone.test(value),
                msg: '必须是手机号'
            }
        },
        ValidateNickName: function (value) {
            const is_nickname = /^[\u4E00-\u9FA5A-Za-z]+[\u4E00-\u9FA5A-Za-z0-9_]{1,20}$/;
            return {
                valid: is_nickname.test(value),
                msg: '昵称格式不对哦~'
            }
        },
        style: '',
        disabledValue: 'hello',
        debounceValue: '',
        maxValue: '',
        maskValue: '',
        maskValue2: '',
        phone:'',
        Password:''
        }
    },
    methods:{
       async postdata(){
            const login = await axios.post('/login',{Password:this.password,phone:'13456789000'});
            console.log(login);
        }
        
    }

}
</script>
