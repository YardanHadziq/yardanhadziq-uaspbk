<template>
    <div class="layar">
      <div class="centered">
        <iframe src="https://yardan-datanama-tp2.netlify.app" frameborder="0" width="100%" height="100%"></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Task2'
  };
  </script>

<style scoped>
.layar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.centered {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>