<template>
    <div class="interface centerpanel">
        <div v-for="star in this.stars" v-bind:key ="star.id">
            <span>{{star.displayName}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'StarList',
        
        props: {
            stars: [],
            
        },

    }
</script>