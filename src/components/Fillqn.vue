<template>
  <div class="fill-qn" v-if="fillQns">
    <h2 class="title">{{fillqns.title}}</h2>
    <hr>
    <div class="qnlist">
      <div></div>
    </div>
    <footer>
      <span>提交问卷</span>
    </footer>
  </div>
</template>
<script>
export default{
  name: 'fill-qn'
}
</script>
