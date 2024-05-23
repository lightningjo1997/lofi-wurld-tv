<template>
    <div class="join-box">
        <h2 class="header-title">Join The Club</h2>
        <p class="button">Join the <NuxtLink to="/club"><span class="club-button">Lofi Music Club!</span></NuxtLink></p>
    </div>
</template>

<script setup>
</script>

<style>


.join-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* border-left: 3px solid rgb(94, 99, 163); */
  border-left: 3px solid rgb(152, 92, 160);
  margin: 10px;
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

.header-title {
    color: rgb(152, 92, 160);
    font-weight: bold;

}




.club-button:hover {
    color: rgb(233, 204, 239);
    background: rgb(122, 72, 147);
    cursor:pointer;
    /* underline text */
}
</style>