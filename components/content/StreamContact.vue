<template>

    <div>
        <div class="call-to-action">
                <button class="buttons">
                    <!-- <NuxtLink :to="'/contact?msg='+msg">Use this for a project</NuxtLink> -->
                    <NuxtLink to="/contact">Use this for a project</NuxtLink>
                </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>

.call-to-action {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.buttons {
    border-radius: 5px;
    margin: 5px 0;
    padding: 5px;
    background-color: rgb(122, 72, 147);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-left: 5px solid rgb(62, 7, 74);
    color: aliceblue;

}
</style>