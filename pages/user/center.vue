<template>
    <div style="height:100%;">
        <x-header style="background-color:#04BE02;">比特蜜蜂</x-header>
        <group>
            <cell :title="'我的昵称'" :value="'fuckfuck'"></cell>
           <cell :title="'我的蜂晶'" :value="'25 BM'"></cell>
            <cell :title="'我的邀请'"  is-link></cell>
        </group>
      <x-button mini plain type="warn" style="margin:30px auto auto auto;display:block;">退出</x-button>
        
        <footer-bar :cur="curIsSelected"></footer-bar>
    </div>
</template>
<script>
    export default {

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

