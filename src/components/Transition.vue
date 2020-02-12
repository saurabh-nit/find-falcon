<template>
  <transition :name="effectName">
    <slot />
  </transition>
</template>
<script src="./js/transition.js"></script>
<style lang="scss" scoped>
/*FADE-EFFECT*/
.fade-effect-enter-active, .fade-effect-leave-active {
  transition: opacity .3s ease-in-out;
}
.fade-effect-enter, .fade-effect-leave-to {
  opacity: 0;
}

/*SLIDE-UP*/
.slide-up-enter{
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-active {
  transition: all .3s ease;
}
.slide-up-leave-active {
  transition: all .3s ease-out;
}
.slide-up-leave-to{
  transform: translateY(100%);
  opacity: 0;
}

/*SLIDE-LEFT*/
.slide-left-enter{
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all .3s ease;
}
.slide-left-leave-active {
  transition: all .3s ease-out;
}
.slide-left-leave-to{
  transform: translateX(100%);
  opacity: 0;
}

/*SLIDE-RIGHT*/
.slide-left-enter{
  transform: translateX(100%);
  opacity: 1;
}
.slide-left-enter-active {
  opacity: 1;
  transition: all .3s ease;
}
.slide-left-leave-active {
  opacity: 0.5;
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-left-leave-to{
  transform: translateX(-100%);
  opacity: 0;
}

/*SLIDE-DOWN*/
.slide-down-enter{
  transform: translateY(-10px);
  opacity: 0;
}
.slide-down-enter-active {
  transition: all .3s ease;
}
.slide-down-leave-active {
  transition: all .3s ease-out;
}
.slide-down-leave-to{
  transform: translateY(-10px);
  opacity: 0;
}
</style>
