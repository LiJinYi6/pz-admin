<template>
  <template v-for="item in props.menuDate" :key="item.path">
      <el-menu-item v-if="!item.children || item.children.length==0" 
       :index="item.meta.path"
       router="true"
       >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.name }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length>0" 
       :index="item.meta.name"
       router="true">
       <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.name }}</span>
       </template>
          <TreeMenu :menuDate="item.children"></TreeMenu>
      </el-sub-menu>
  </template>
</template>


<script setup>
import { defineProps } from 'vue';
const props=defineProps(['menuDate'])
</script>

<style lang="scss" scoped>

</style>