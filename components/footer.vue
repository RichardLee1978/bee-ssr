<template>
    <tabbar style="position:fixed;bottom:0;left:0;z-index:10;">
      <tabbar-item :selected='cur.home.selected' link='/' >
         <img slot="icon" src="~/static/imgs/icons/ic_jishu_1@2x.png">
        <span slot="label">技术</span>
      </tabbar-item>
      <tabbar-item :selected='cur.news.selected' link="/news" >
       <img slot="icon" src="~/static/imgs/icons/ic_zixun_1@2x.png">
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item  link="/component/demo" >
       <img slot="icon" src="~/static/imgs/icons/ic_kuaixun_1@2x.png">
        <span slot="label">快讯</span>
      </tabbar-item>
      <tabbar-item  link="/user" :selected='cur.user.selected' >
        <img slot="icon" src="~/static/imgs/icons/ic_tap_wd_1@2x.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
export default {
  props:{
      cur:Object
  }
}
</script>
