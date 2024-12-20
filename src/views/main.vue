<template>
    <div class="layoutContainer">
        <div class="left">
            <Aside></Aside>
        </div>
        <div class="right">
            <div class="top">
                <Top></Top>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
  </template>

<script setup>
import Top from '../components/top.vue';
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
    flex:0.5;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px;
}
.main{
    flex:4;
    width: 100%;
}
</style>