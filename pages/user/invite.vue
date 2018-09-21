<template>
    <div class="user-invite" >
         <x-header style="background-color:#F9F9F9;">比特蜜蜂</x-header>
        <group label-width="5em" title="邀请规则">
            <cell primary="content" title="说明" :value-align="'left'" :value="d"></cell>
            <cell title="奖励" align-items="center" :value-align="'left'" :value="explain"></cell>
            <cell title="邀请码" align-items="center" :value-align="'left'" :value="'UUI9'"></cell>
        </group>
        <div class="invite-box">
            <divider>长按二维码</divider>
            <qrcode value="https://vux.li?x-page=demo_qrcode"></qrcode>
        </div>
        
    </div>
</template>
<style lang="less">
.user-invite {
    height:100%;
    .vux-header {
        .vux-header-left {
            .left-arrow:before {
                   content: "";
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    border: 1px solid #333;
                    border-width: 1px 0 0 1px;
                    -webkit-transform: rotate(315deg);
                    transform: rotate(315deg);
                    top: 8px;
                    left: 7px;
            }
            .vux-header-back {
                color:#333;
            }
        }
        .vux-header-title {
            color:#333;
        }
    }
    .invite-box {
        margin: 25px auto auto auto;
        img {
            display: block;
            margin:0 auto;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            d:'嘻嘻嘻嘻嘻休息休息',
            explain:'案件规定好的发到付安静地嘎嘎嘎个，的嘎嘎的杠杆昂贵的嘎鸡蛋干，案件郭德纲的'
        }
    }
}
</script>

