<template>
<el-upload
  drag
  action="/api/admin/upload"
  multiple>
  <div class="upload-tip">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  </div>
  
  <div class="el-upload__tip" slot="tip"></div>
</el-upload>
</template>

<script>
console.log('run in upload');
function bar(n){
  return new Promise(function(res,rej){
    setTimeout(() => {
      n+=3;
      res(n);
    }, 3000);
  })
}
async function proces(){
  for(var i=0;i<10;i++){
    console.log(await bar(i).then(function(m){
      return 'm+1===='+m+1;
    }));
  }
}
proces();
export default {
  data() {
    return {
    }; 
  },
  methods: {

  }
};
</script>

<style lang="less" >
  .el-upload{
    width:50%;
    margin:0 auto;
    .el-upload-dragger{
      width:100%;
      min-height:400px;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
  }
  
</style>

