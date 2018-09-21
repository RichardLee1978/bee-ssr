<template>
    <flexbox :gutter='2' :align="'center'" :justify="'center'" style='background-color:#EFEFF4;'>
        <flexbox-item  :span='1' style="height:44px;">
            <a href='/' class="top-logo-link">
                 <img  src="~/static/imgs/logo/photo_logo2.png" class="top-logo-img">
            </a>
           
        </flexbox-item>
        <flexbox-item :span='11'>
            <search
            auto-scroll-to-top
            :placeholder="'搜索'"
            :auto-fixed='false'
            ref="search">
            </search>
        </flexbox-item>
  </flexbox>
</template>
<style lang="less">
    .top-logo-link {
        position: relative;
        display: block;
        width:100%;
        height: 100%;
        .top-logo-img {
            position: absolute;
            z-index: 10;
            max-width: 90%;
            left: 7px;
            top: 5px;
        }
    }
</style>
<script>
export default {
    
}
</script>

