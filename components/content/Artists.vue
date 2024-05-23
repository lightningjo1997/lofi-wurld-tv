<template>

    <div class="artist-box">
        <div class="artist" v-for="artist in artists" >
            <h3 class="artist-name"><i><b>{{ artist.stage_name }}</b></i></h3>
            <p><i><small><b>Style:</b> {{ artist.style }}</small> </i></p>
            <div>
              <Icon name="uil:instagram" color="rgb(152, 92, 160)" size="30" @click ='go_to("https://www.instagram.com/"+artist.instagram_handle)' />
            </div>
            <p>{{ artist.artist_bio }}</p>
        </div>
          <!-- Artist: {{ artists }}
          <br><br>
          Artist no: {{ artists.length }}
          <br><br>
          namesArray: {{ namesArray }} -->
        <!-- {{ colorMode.preference }} -->
    </div>
</template>


<script setup>

const colorMode = useColorMode()

const props = defineProps({
  names: {
    type: String,
    required: true,
  },
});
const { names } = props;

const namesArray = computed(() => {
  return props.names.split(',').map(name => name.trim());
});

const supabase = useSupabaseClient()

const { data: artists } = useAsyncData(async () => {
  try {
    const { data } = await supabase.from('artists').select().in('name', namesArray.value);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or handle the error appropriately
  }
});

const go_to = (to) => {
  window.open(to, '_blank');
}

</script>

<style scoped>

.artist-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.artist {
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 3px solid rgb(152, 92, 160);
  margin: 10px;
}

/* hover cursor for icon */

.icon {
  cursor: pointer;
}

</style>