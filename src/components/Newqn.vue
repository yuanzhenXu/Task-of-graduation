<template>
<div class="new-qn">
  <input type="text" autocomplete="off" placeholder="请填写问卷标题" class="title">
  <hr>
  <div>
    <!--<ul>-->
      <!--<li>-->
        <!--&lt;!&ndash;<input type="text" class="type">&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="text" class="options">&ndash;&gt;-->
      <!--</li>-->

    <!--</ul>-->
  </div>
  <div>
    <button>删除</button>
    <button>复用</button>
    <button>上移</button>
    <button>下移</button>
  </div>
  <section>
    <div class="radio">单选</div>
    <div class="checkbox">多选</div>
    <div class="text">简答</div>
  </section>
  <section class="add-qn">
    添加问题
  </section>
  <hr>
  <footer>
    <div class="deadline">
      <span>截止日期： </span>
      <!--<date-picker></date-picker>-->
    </div>
    <a class="btns">
      <span>保存问卷</span>
    </a>
  </footer>
  <!--<my-alert :alert-message="altertmessage"></my-alert>-->
</div>
</template>
<script>
export default {
  name: 'new-qn'
}

</script>
<style>
  .new-qn {
    width: 60%;
    margin: 10% auto;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 5px 15px #999;
    border-radius: 5px;
    padding: 25px;
    position: relative;
  }
  .title {
    width: 100%;
    height: 40px;
    border: none;
    text-align: center;
    font-size: 30px;
  }
  hr {
    margin: 20px 0;
  }
  .deadline {
    float: left;
    margin-left: 40px;
  }
  .btns {
    float: right;
    margin-right: 40px;

  }
  .add-qn {
    height: 100px;
    margin: 20px;
    text-align: center;
    background: #ef9;
  }
  span {
    display: block;
    margin: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 3px 6px #666;
    cursor: pointer;
    background: #fff;
  }
  /*.type {*/

  /*}*/
  /*.options {*/

  /*}*/

</style>

