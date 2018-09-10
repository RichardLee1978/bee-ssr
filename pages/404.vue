<template>
    
         <div>
              <msg :title="'空空如也..'" :buttons="buttons" :icon="'info'"></msg>
         </div>
    
</template>
<style lang='less'>
    html,body{
        height:100%;
        width:100%;
    }
</style>
<script>
export default {
    data () {
        return {
             buttons: [{
                type: 'primary',
                text: '回到首页',
                 link: '/'
            }, {
                type: 'default',
                text: '个人中心',
                link: '/user'
            }]
        }
    }
}
</script>