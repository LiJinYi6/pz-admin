<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo asideContainer"
        @open="handleOpen"
        @close="handleClose"
      >
        <p class="title">陪诊管理</p>
        <Menu :menuDate="menuDate"></Menu>
    </el-menu>
</template>

<script setup>
import { reactive } from 'vue';
import Menu from './menu.vue';
import { useRouter } from 'vue-router';
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const router=useRouter()
const menuDate=reactive({router.options.routes[0].children})


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
}
</style>