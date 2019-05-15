<template>
    <div  class="user-center">
        <x-header style="background-color:#F9F9F9;">比特蜜蜂</x-header>
        <group>
            <cell :title="'我的昵称'" :value="'fuckfuck'"></cell>
           <cell :title="'我的蜂晶'" :value="'25 BM'"></cell>
            <cell :title="'我的邀请'"  is-link link='/user/invite'></cell>
        </group>
      <x-button mini plain type="warn" style="margin:30px auto auto auto;display:block;">退出</x-button>
        
        <footer-bar :cur="curIsSelected"></footer-bar>
    </div>
</template>
<style lang="less">
.user-center {
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
}
</style>

<script>
    export default {
        middleware: 'auth',
        computed:{
            curIsSelected(){
                 return {
                        home: {
                            selected:false
                        },
                        news:{
                            selected:false
                        },
                        exp:{
                            selected:false
                        },
                        user:{
                            selected:true
                        }
                    }
            }
        }
    }    
</script>

