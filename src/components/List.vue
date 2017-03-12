<template>
<div class="list">
  <table>
    <thead>
    <tr>
      <th class="title">标题</th>
      <th class="time">截止日期</th>
      <th class="status">状态</th>
      <th class="handle">操作</th>
    </tr>
    </thead>
    <!--<tbody>-->
    <!--<tr>-->
      <!--<td>{{qns.title}}</td>-->
      <!--<td>{{qns.deadline}}</td>-->
      <!--<td>{{msg}}</td>-->
      <!--<td>发不问卷，删除问卷，编辑问卷</td>-->
    <!--</tr>-->
    <!--</tbody>-->
  </table>
</div>
</template>
<script>
export default {
  name: 'list'
}
</script>
<style>
  table {
    width: 60%;
    margin: 10% auto;
    background: #fff;
    border: 2px solid #42b983;
    border-radius: 5px;
    text-align: center;
    line-height: 1.5;
  }
  th {
    height: 50px;
    color: #fff;
    background: #42b983;
    font-size: 18px;
    font-weight: 700;
  }
  .title {
    font-size: 20px;
    width: 30%;
  }
  .time {
    width: 20%;
  }
  .status {
    width: 20%;
  }
  .handle {
    width: 40%;
  }

</style>

