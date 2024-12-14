<template>
    <div class="layoutContainer">
        <div class="left">
            <Aside></Aside>
        </div>
        <div class="right">
            <div class="top">
                top
            </div>
            <div class="main">
                main
            </div>
        </div>
    </div>
  </template>

<script setup>
import Aside from '../components/aside.vue';
</script>

<style lang="less" scoped>
.layoutContainer{
    height: 100%;
    display: flex;
    flex-direction: row;
}
.left{
    flex:1;
    height:100%
}
.right{
    flex:6;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.top{
    flex:1;
    width: 100%;
}
.main{
    flex:4;
    width: 100%;
}
</style>