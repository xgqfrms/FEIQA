# vue template


```js
<template>
  <div>$1</div>
</template>

<script>
const log = console.log;
export default {
  name: "$1",
  components: {},
  props: {
    name: {
      type: String,
      required: false,
      default: "",
    },
  },
  // data: function () {return {};}
  data() {
    return {
      loading: false,
      data: [],
    };
  },
  methods: {
    fetchAPI(url = ``) {
      // this.data = [];
      log(`fetch url`, url);
    },
  },
  beforeCreate() {
    log(`beforeCreate`, 1);
  },
  created() {
    log(`created`, 2);
  },
  beforeMount() {
    log(`beforeMount`, 3);
  },
  mounted() {
    log(`mounted`, 4);
  },
  beforeUpdate() {
    log(`beforeUpdate`, 5);
  },
  updated() {
    log(`updated`, 6);
  },
  beforeDestroy() {
    log(`beforeDestroy`, 7);
  },
  destroyed() {
    log(`destroyed`, 8);
  },
}
</script>

<style scope lang="scss">
.className {
  color: #000;
  background: #fff;
}
</style>


```
