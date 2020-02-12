<template>
  <div v-click-outside="hideDropdown" class="dropdown-wrapper">
    <div class="selected-box" @click="toggleList">
      <span class="selected-box__label-text ellipsis">
<!--        {{ label || defaultLabel }}-->
        <input type="text" @input="onInput" :value="inputValue" :placeholder="defaultLabel">
      </span>

      <div :class="{ open: listOpen }" class="icon-dropdown">
        <img
          src="@/assets/icon-caret-down.svg"
          alt="Caret Down" />
      </div>
    </div>

    <Transition effectName="slide-down">
      <div v-if="listOpen" class="list-items">
        <div
          class="item"
          v-for="item in listData"
          :key="item.value"
          :class="{ selected: item.value === value }"
          @click="selectThisItem(item)"
        >
          <span>{{ item.name }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script src="./js/drop-down.js"></script>
<style lang="scss" scoped>
@import "@/styles/colors";

.dropdown-wrapper {
  width: 100%;
  position: relative;
  text-align: left;

  .selected-box {
    min-height: 50px;
    background-color: $color-grey-light;
    line-height: 50px;
    border-radius: 8px;
    padding: 0 10px 0 16px;
    position: relative;
    cursor: pointer;
    user-select: none;

    &__label-text {
      width: 90%;
      display: block;
      color: $color-grey-shade-1;

      input {
        border: none;
        font-size: 16px;
        outline: 0;
        padding: 16px 0 10px;
        width: 100%;
        background-color: $color-grey-light;
        color: $color-grey-shade-1;
      }
    }

    img{
      width: 30px;
      height: 30px;
      right: 10px;
      position: absolute;
      top: 10px;
    }

    .icon-dropdown {
      img{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        transition: all 400ms ease;
      }

      &.open {

        img{
          -webkit-transform: rotate(180deg);
          -moz-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          -o-transform: rotate(180deg);
          transform: rotate(180deg);
          transition: all 400ms ease;
        }
      }
    }
  }

  .list-items {
    background-color: #ffffff;
    margin: 5px 0;
    z-index: 2;
    box-shadow: 0 3px 10px 0 rgba(34, 36, 38, 0.15);
    color: $color-grey-shade-3;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    position: absolute;
    width: calc(100% - 1px);
    max-height: 180px;
    overflow-y: scroll;

    .item {
      padding: 12px 5px;
      font-size: 15px;

      &.selected {
        background-color: $color-blue-3;
        color: $color-white;
      }
    }
  }
}
</style>
