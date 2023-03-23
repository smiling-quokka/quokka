<template>
  <div>{{ msg }}</div>
</template>
<script>
export default {
    name: 'HomePage',
    props: {
        msg: {
            type: String,
            default: 'Welcome to Your Vue.js App'
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.logo {
  border: 1px solid red;
}
</style>
