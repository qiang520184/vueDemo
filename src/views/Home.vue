<template>
<div class="home">
    <hello-world />
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data() {
        return {
            msg: 'Home页'
        };
    }
};
</script>
