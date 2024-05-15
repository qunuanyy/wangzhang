<template>
    <div class="container">
        <!-- 导航组件 -->
        <NavBar></NavBar>
        <div class="layout-right">
            <!-- 头部导航栏 -->
            <HeaderView></HeaderView>
            <!-- 内容区域 -->
            <ContentView></ContentView>
        </div>


    </div>
</template>
<script>
import NavBar from './NavBar.vue';
import HeaderView from './HeaderView.vue';
import ContentView from './ContentView'
export default {
    data() { return {} },
    components: {
        NavBar, HeaderView, ContentView
    }


}
</script>