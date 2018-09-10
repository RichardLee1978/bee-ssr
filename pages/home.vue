<template>
<div>
  <!-- <x-header style="background-color:#04BE02;">比特蜜蜂</x-header> -->
   <search
      auto-scroll-to-top
      :placeholder="'搜索'"
     
      ref="search">
      </search>
    <tab>
      <tab-item v-for="n in 8" :key="n" :selected="n===1">频道{{ n }}</tab-item>
    </tab>
   <panel :footer="footer" :list="list" :type="type" ></panel>

   <tabbar>
      <tabbar-item selected>
          <img slot="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABIpJREFUaAXtWk9IVEEYn2/LSomIiAJDMLU6GWkQ/TtoGQSdDDL04iYdulqXDhF76FBQdO0Q/iFIMqhLQaCmh0oI0sgumlYQGkVERGilven7vX2zvre7rr6debgub2D3zXvzfd/8fvPNm/m+4QkRlnAEcnoEKB26A60vCr/9mD4qhagUUq5NJ5Mzz4j+MImRzRuL+gZvHpxJxpVCcNfZ3t2zs+K+EHJnsnBu39NYQYE4NXq77o0bp4cgPPfl+/RrkCNBw+zBJxGSf90KuVa3JK1hEselkFVC0NjWTUV73J5c7QaMaanIlWxftW8gVjvnbs/Vek2s//KnD/9egmScg3iksEZUBVf7nYtfn6wUcsANrJhtqCsOqKN4CKoFJdenZRy69z+BOWlR9BL06uTFXUhwpbsx9GDowRwfgbyfop5IJghnSClpR8vTKkuIXWTJYvQhIzTFIzv6ru3IMBHx3hxcCYxg+bnnW+TM74sV0b4GDqG2gUKCiSUFExbcNlnW3NdNheuuTtw69DUImoFM0fLm3gtiZmZCCKvVJkf0kQPiLorQDfvHdcHP4sStVsjaOgEwNOrBmmj/uk9yro2BNwIrZyQPmdCV8fajQ+mwV5zpq5aWvMTy9dx+vby5Z28JrW4Z6Kj9nU4+m2dGCcbJiUb21k+ejk0TnXWPM4FyiJ8sa+45wTp3WaeRbUClKZOenzZjUxRTDABtciQOv+88lpGcGyRkJes4A9NocroaIYgFhQHHABqee99xbAR1PwU60HV0Yo5NPybSyhohiNWS36P1eOf8eC4ZEXRhA7ZgM7k9m3ttgtjniKzT6BwLSjYg3DrKBgnZANvutmzq2gQrov3VUopiLPsLrZZ+gNk2nC0Etv3oppPVJigj8dM3knIwXQfZPFO2lO1sbCgdbYIq/BIcfimj2lfHVsK2hkFtghp9L6pK/CIuKrSIgDZBBM52H04gvUh/S2uWwo5dLaLPS1NYWEqbIFk0BvO8lh5YuBt/Ley2/dBgcKP+NFOltQmOd9QO8VSa4iPHUsSWqV34e2LbYFu8H04infKnnSqtTRD5nJSRezCNwDm1C39PlA0pqNtErqhNEPCLCuQ1HvFfyAoQOPujNC8NXdiALeSI8y3Z14wQfHu77gtDiAEGsoKyaE8l6n4KdKDr6MRMJcBGCAIUp0Y3GGAXLxAb+BDimR9P2ukS69i6bAO2/AxOJlljBNEJklVFkm8fcdrzINPCgzbIQFaRgw3YMlWMJrxOJt7EoF8xwBjeJ1406suivR/t8Mu1Z2JbsSyrFETwzkEenuNzDqPFKEGFDEA5n7sjOOVBpsHLbCl7qFTwYVOicISO7cVegQM8dAqEIEg4i8R5JnfBzjg4KFexJaIfBAjj7dhDV+ixofKUQwBTFj9PoU7PbSA3RheZQBBqGg0Jag7gsquHHlx2F2gCCD2oOYDLru71IH/YBkT4PGrZkfkEkMDscFDqHoIcKNtH7nw9zp9HBRblqM5NXYEVmGFPcVC2+X6+5OPHeB6CoJrXn1MqX+bTB7GKU3gNRyBHR+A/KFjbvWAqMXEAAAAASUVORK5CYII=">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
       
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item  link="/component/demo">
       
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAH5JREFUaAXt17ERgDAIAEDiKs5i4zlERnOJVO7iKvFsc0fvmacDGvikIUIQIECAAIFUoGSdtV6t99iz/ufqJdp9bsc41zIW5AQIECBAgAABAgQIECDwCrgH/QMCBAgQIECAAAECBAjMKeAenPPdbU2AAAECBAgQIECAAIHfCzxT3RUKkM/E+AAAAABJRU5ErkJggg=='/>
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
</div>
</template>
<script>
export default {
    data () {
        return {
            type: '5',
            list: [{
                    src: 'https://yunhome.oss-cn-hangzhou.aliyuncs.com/js/1536360440575914.png?x-oss-process=image/resize,w_60',
                    fallbackSrc: 'https://yunhome.oss-cn-hangzhou.aliyuncs.com/js/1536360440575914.png?x-oss-process=image/resize,w_181',
                    title: '带着简单看看DAPP的发展现状',
                    desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    url: '/d/5gsb252g2adda',
                    meta: {
                      source: '杨汇',
                      date: '2018-9-1',
                      other: '打卡机蛋糕'
                    }
                  },
                  {
                    src: 'https://yunhome.oss-cn-hangzhou.aliyuncs.com/js/1536314072476946.png?x-oss-process=image/resize,w_60',
                    title: '区块链制度经济学：从市场机制、国家机制、企业机制到分布式自治组织（DAO）',
                    desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    url: {
                      path: '/d/5gsb252g2addc',
                      replace: false
                    },
                    meta: {
                      source: '区块链大牛',
                      date: '2018-8-31',
                     
                    }
                }], 
            footer: {
              title: '更多',
              url: 'http://vux.li'
            }
        }
    }
}
</script>