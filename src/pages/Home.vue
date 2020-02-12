<template>
  <div class="home">
    <div class="home__app-head">Finding Falcon</div>
    <div class="home__app-sub-head">Select planets you want to search in:</div>
    <div class="home__total-time">Time Taken: {{totalTime}}</div>
    <div class="home__vehicle-selector">
      <div v-for="(item, index) in destionations" v-bind:key="index">
        <Dropdown
          :key="index"
          :keyName="`destination${index+1}`"
          :value="item.distance"
          :label="item.name"
          :defaultLabel="`Destination ${index+1}`"
          :onItemClick="(key, data) => menuItemSelected(key, data, index)"
          :listData="listData"
          :onAutocompleteChange="handleAutoCompleteChange"
          :inputValue="searchData[`destination${index+1}`]"
        />
        <div class="user-list">
          <ul v-if="destionations[index].distance > 0">
            <li class="user-selection-list" v-for="it in vehiclesData"
                :key="it.max_distance"
                v-bind:class="{disabled: (item.distance > it.max_distance) || it.total_no === 0}"
            >
              <RadioButton
                :key="it.max_distance"
                @onRadioChange="(data) => handleRadioChange(data, index)"
                :activeOption="destionations[index].max_distance"
                :option="it.max_distance"
                :isDisabled="item.distance > it.max_distance"
              />
              <span class="name ellipsis">{{it.name}} ({{it.total_no}})</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home__find">
      <button
        :disabled="!isButtonDisabled"
        class="home__find__btn"
        @click="findFalcon">Find Falcon</button>
    </div>
  </div>
</template>
<script src="./js/home.js"></script>
<style lang="scss" scoped>
  .home {

    &__app-head {
      font-size: 30px;
      font-weight: bold;
    }

    &__app-sub-head {
      font-size: 18px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &__total-time {
      font-size: 18px;
      font-weight: bold;
      color: #42b983;
    }

    &__vehicle-selector {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 40px;

      > div {
        width: 200px;
        margin: 10px;
      }
    }

    .user-list{
      max-height: 330px;
      overflow-y: scroll;
      overflow-x: hidden;

      ul{
        padding-left: 0 !important;

        li{
          padding: 10px 1px;
        }
      }

      .user-selection-list{

        .name{
          color: black;
          width: 65%;
          display: inline-block;
          vertical-align: middle;
          text-align: left;
          margin-left: 5px;
        }

        label span {
          margin-left: 20px;
        }

        &.disabled {
          pointer-events: none;
          opacity: 0.3;
        }
      }
    }

    &__find {
      text-align: center;
      padding: 50px 0;
      &__btn {
        padding: 10px;
        font-size: 18px;
        background-color: #42b983;
        border: none;
        color: white;
        border-radius: 5px;

        &:focus {
          outline: none !important;
        }

        &:disabled {
          background-color: darkgrey;
          color: black;
          opacity: 0.3;
        }
      }
    }
  }
</style>
