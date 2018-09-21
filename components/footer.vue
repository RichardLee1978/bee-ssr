<template>
    <tabbar style="position:fixed;bottom:0;left:0;z-index:10;">
      <tabbar-item :selected='cur.home.selected' link='/'>
         
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected='cur.news.selected' link="/news">
       
        <span slot="label">新闻</span>
      </tabbar-item>
      <tabbar-item  link="/component/demo">
       
        <span slot="label">快讯</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/user" :selected='cur.user.selected'>
        
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
