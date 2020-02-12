<template>
  <div class="radio-btn" v-bind:class="{checked: option === activeOption, disabled: isDisabled}">
    <label @click="handleClick">
      <span>{{name}}</span>
      <input
        type="radio"
      />
    </label>
  </div>
</template>
<script src="./js/radio-button.js"></script>
<style lang="scss" scoped>
  @import "@/styles/colors";
  .radio-btn{
    display: inline-block;

    input[type="radio"] {
      display: none;
      opacity: 0;
      visibility: hidden;
    }

    label {
      cursor: pointer;
      position: relative;

      span {
        margin-left: 23px;
        position: relative;
        top: 0;
        word-wrap: normal;
        color: $color-grey-dark4;
      }

      &::after{
        content: '';
        width: 16px;
        height: 16px;
        background: $color-blue-3;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        transition: all 0.3s ease;
        transform: scale(0);
      }

      &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 22px;
        height: 22px;
        border: 1px solid $color-grey-dark;
        border-radius: 100%;
        background: $color-white;
      }
    }

    &.checked label{

      &::after{
        content: '';
        width: 16px;
        height: 16px;
        background: $color-blue-3;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        transition: all 0.3s ease;
        transform: scale(0.9);
      }
    }

    &.disabled label{
      cursor: not-allowed;
      &::after{
        background: $color-grey-lightest-1;
      }
    }

    &.disabled.checked label{
      cursor: not-allowed;
      &::after{
        background: $color-grey-lightest-1;
      }
    }
  }

</style>
