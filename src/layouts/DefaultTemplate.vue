<template>
    <div>
        <header-component />

        <section>
            <router-view></router-view>
        </section>

        <footer-component />
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    components: { 
        HeaderComponent,
        FooterComponent
    },

    props: {
        
    },

    data() {
        return {

        }
    },

    created() {

    },

    methods: {

    },
}
</script>

<style scoped>

</style>