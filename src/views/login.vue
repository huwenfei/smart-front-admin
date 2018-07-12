<template>
  <div>
      <h3>数据解密后台</h3>
      <div class="form">
        <el-input v-model="name" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
        <el-button type="primary" @click="submit">登录</el-button>
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "admin",
      password: "datang"
    };
  },
  methods: {
    submit() {
      console.log("submit");
      this.ajax
        .post(
          "/api/admin/login",
          this.qs.stringify({
            name: this.name,
            password: this.md5(this.password)
          })
        )
        .then(data => {
            // console.log(data);
          if (data.data.code == 1) {
            this.$router.push("/home" );
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  width: 30%;
  margin: 0 auto;
  * {
    margin-top: 30px;
  }
}
</style>

