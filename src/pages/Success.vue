<template>
  <div class="success">
    <h1>Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</h1>
    <div class="success__data">
      <div>Time Taken: <span>{{findFalconResult.timeTaken}}</span></div>
      <div>Planet Found: <span>{{findFalconResult.planet_name}}</span></div>
      <div><button @click="goToHomePage">Start Again</button></div>
    </div>
  </div>
</template>
<script src="./js/success.js"></script>
<style lang="scss" scoped>
  .success {
    margin-top: 5rem;

    &__data {
      > div {
        font-size: 18px;
        font-weight: bold;
        line-height: 28px;

        span {
          color: #42b983;
        }

        button {
          margin-top: 30px;
          padding: 14px;
          font-size: 16px;
          border: 1px solid darkgray;
          border-radius: 5px;

          &:focus {
            outline: none !important;
          }
        }
      }
    }
  }
</style>
