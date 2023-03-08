<template>
  <div class="hello">
    The BOARD with todo tockets`s will be here!
  </div>
</template>

<script>
export default {
    name: 'NoticeBoard',

    props: {
        msg: {
            type: String,
            default: 'Welcome to Your Vue.js App'  
        }, 
    },
    created() {
        this.$utils.say(this.msg);
    }
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
