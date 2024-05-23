<template>

    <div>
        <div  v-if="!names"></div>
        <div v-else class="songs-box">
            <div class="song" v-for="artist in names.split(',')" >
            <h3 class="artist-name"><i><b>{{ artist }}</b></i></h3>
            <p>song bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae optio in minus beatae facilis ad odio commodi assumenda soluta dolor, et quam ipsam ex consectetur deserunt earum delectus culpa.</p>
            <div class="call-to-action">
                <button class="buttons">Listen</button>
                <button class="buttons">Use for project</button>
            </div>
        </div>
      </div>
        
    </div>
</template>

<script setup>

const props = defineProps({
  names: {
    type: String,
    required: true,
  },
});
const { names } = props;
</script>

<style scoped>

.songs-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.song {
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* border-left: 3px solid rgb(94, 99, 163); */
  border-left: 3px solid rgb(152, 92, 160);
  margin: 10px;
}

.call-to-action {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.buttons {
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    background-color: rgb(122, 72, 147);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-left: 5px solid rgb(62, 7, 74);
    color: aliceblue;

}
</style>