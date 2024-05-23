<template>

    <div>
        <iframe width="560" height="315" :src='"https://www.youtube.com/embed/"+id+"?autoplay=1&modestbranding=1"' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const { id } = props;
</script>