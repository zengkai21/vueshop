//入口文件
import Vue from 'vue'
//导入App根组件
import app from './App.vue'
import './lib/mui/css/mui.css'
import 'bootstrap/dist/css/bootstrap.css'

//引入 Mint-UI 的 Header 组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);



let vm = new Vue({
    el:"#app",
    data:{},
    methods:{},
    render:c=>c(app)
})