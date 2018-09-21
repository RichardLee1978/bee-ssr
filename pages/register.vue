<template>
    <div class="register">
        <div class="register-top-logo">
             <img  src="~/static/imgs/logo/photo_logo.png" >
        </div>
        <div class="register-box">
            
            <group title="手机">
                <x-input   v-model="nickName" :max="13" mask="999 9999 9999" is-type="china-mobile" placeholder="输入手机号"></x-input>
            </group>
             <group title="验证码">
                <x-input  placeholder="输入图形验证码" >
                    <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
                </x-input>
                <x-input  class="weui-vcode" placeholder="输入手机验证码">
                    <x-button style="background:#1fac89;" slot="right" type="primary" mini>发送手机验证码</x-button>
                </x-input>
            </group>
            <group title="密码">
                <x-input  type="password"    placeholder="输入密码"></x-input>
            </group>
            <group title="邀请码">
                <x-input   placeholder="输入邀请码"></x-input>
            </group>
             <div style="padding:15px;">
                    <x-button style="background:#1fac89;"  type="primary">注册</x-button>
                    
            </div>
             <flexbox style="margin:0px auto;">
                <flexbox-item><div style="text-align:center"> <a class="forget-password" href="">忘记密码</a></div></flexbox-item>
                <flexbox-item><div style="text-align:center"><a class="forget-password" href="/login">登录</a></div></flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<style lang="less">
    html,body {
        height:100%;
        width:100%;
    }
    .register {
        height:100%;
        .register-top-logo {
                margin:5px auto auto auto;
                img {
                    margin-left:20px;
                    display: block;
                 
                }
            } 
        .register-box {
            padding:5px;
            .forget-password {
                color:#1fac89;
            }
        }
    }
</style>
<script>
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
        nickName:''
        }
    }
}
</script>
