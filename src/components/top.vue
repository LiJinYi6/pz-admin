<template>
   <div class="topLeft">
    <el-icon>
        <DArrowRight size="40px"></DArrowRight>
    </el-icon>
   </div>
   <div class="topRight">
    <el-avatar :size="30" :src="avatarUrl" />
   </div>
</template>

<script setup>
let avatarUrl="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
</script>

<style lang="less" scoped>
.topLeft{
    flex:4;
    text-align: left;
}
.topRight{
    flex:1;
    text-align: right;
}
</style>