<template>
    <div>
        <div class="pageTitle">
            <span class="title">Curso X</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <div class="container">
                <modules />
                
                <div class="right">
                    <div class="content">
                        <player />

                        <supports-lesson />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modules from './components/Modules.vue'
import Player from './components/Player.vue'
import SupportsLesson from './components/SupportsLesson.vue'

export default {
    components: { 
        Modules,
        Player,
        SupportsLesson,
    },

    props: {
        
    },
}
</script>