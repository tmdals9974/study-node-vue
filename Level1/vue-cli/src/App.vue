<template>
  <!-- 템플릿 루트 엘리먼트는 무조건 1개만 가능 -->
  <div>
    {{ str }}
    <app-header v-bind:header="str" v-on:renew="renewStr"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  // 재사용성을 위해 data : { } 로 객체를 생성하는게 아닌 function return을 해주어야함. (변수)
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header' : AppHeader,
  },
  methods: {
    //#region EventEmit
    renewStr : function(str) {
      this.str = str;
    }
    //#endregion
  },
}
</script>

<style>

</style>