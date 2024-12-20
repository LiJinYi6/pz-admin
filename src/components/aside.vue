<template>
    <el-menu
        default-active=""
        class="el-menu-vertical-demo asideContainer"
        router="true"
      >
        <p class="title">陪诊管理</p>
        <TreeMenu :menuDate="menuDate"></TreeMenu>
    </el-menu>
</template>

<script setup>
import { reactive } from 'vue';
import TreeMenu from './TreeMenu.vue';
import { useRouter } from 'vue-router';
const router=useRouter()
const menuDate=reactive(router.options.routes[0].children)


</script>

<style lang="less" scoped>
.asideContainer{
    height: 100%;
    .title{
        font-size: 20px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color:lightblue
    }
    background-color: rgba(255, 235, 122, 0.288);
}
.el-menu-item{
  background-color: rgba(255, 235, 122, 0.288) ;
}
</style>