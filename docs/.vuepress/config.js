/*
 * @Description: blog配置文件
 * @Author: Mr.yang
 * @Date: 2020-06-13 17:30:06
 * @LastEditTime: 2020-07-08 14:31:26
 */ 
module.exports = {
    base:"/blog/",
    title: '前端小菜鸟的博客',
    description: '专注于技术的积累',
    // configureWebpack: {
    //     resolve: {
    //       alias: {
    //         '@alias': 'path/to/some/dir'
    //       }
    //     }
    //   },
      themeConfig:{
          nav:[
              {text:"主页",link:"/"},
              {text:"vue",link:"/src/vue/"},
              {text:"react",link:"/src/react/"},
              {text:"ES6",link:"/src/ES6/"},
              {text:"webPack",link:"/src/webPack/"},
              {text:"nginx",link:"/src/nginx/"},
              {text:"关于我",link:"/src/user/"},
            ],
            sidebar:{
                "/src/vue/":[
                    ["", "基本配置"],
                    ["/src/vue/vue1/", "基本使用"],
                    ["/src/vue/index/", "vue基本指令"],
                    ["/src/vue/props/", "vue常用属性"],
                    ["/src/vue/liftCycle/", "vue生命周期"],
                    // ["stream", "node核心模块-stream"]
                  ],
            }
              
           
      }
  }
