<template>
  <Header />
  <div id="error-404" class="error-box">
    <ul>
      <li class="error-404">
        <div id="f404-1" class="f404">4</div>
        <div id="f404-2" class="f404">0</div>
        <div id="f404-3" class="f404">4</div>
      </li>
      <li class="error-text">
        <div class="text-box">
          <div class="container">
            <p class="error-message">Page not found: {{ route.fullPath }}</p>
            <NuxtLink class="back-button" to="/">Вернуться на главную</NuxtLink>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,800");
@import url("https://fonts.googleapis.com/css?family=Rubik+Mono+One");
@import url("https://fonts.googleapis.com/css?family=Paytone+One");
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
@import url("https://fonts.googleapis.com/css?family=Reem+Kufi");
@import url("https://fonts.googleapis.com/css?family=Krona+One");

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Montserrat", sans-serif;
  text-align: center;
}

.error-message {
  font-size: 16px;
  margin-bottom: 20px;
  color: #333;
}

.back-button {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #900;
  border-radius: 5px;
  color: #900;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

.back-button:hover {
  background-color: #900;
  color: white;
}

.error-box {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-404,
.error-text {
  display: flex;
  justify-content: center;
}

.error-404 {
  height: 40vh;
}

.f404 {
  display: inline-block;
  cursor: context-menu;
  font-family: "Krona One";
  font-size: 28vh;
  text-align: center;
  color: #ccc;
  text-shadow: 0 10vh 40px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.f404:hover,
.f404:active {
  margin-top: 3vh;
  font-size: 24.5vh;
  color: #eee;
  text-shadow: none;
}

#f404-1,
#f404-2,
#f404-3 {
  animation: float 2s infinite ease-in-out alternate;
}

#f404-2 {
  animation-delay: 0.4s;
}

#f404-3 {
  animation-delay: 0.8s;
}

@keyframes float {
  100% {
    transform: translateY(20px);
  }
}

@media (max-width: 767px) {
  .f404 {
    font-size: 20vh;
  }
}
</style>
