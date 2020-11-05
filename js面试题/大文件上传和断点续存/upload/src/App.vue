<template>
  <div>
    <input type="file" @change="handleFileChange">
    <el-button type="primary">上传</el-button>
  </div>
</template>

<script>
const Size = 10 * 1024 * 1024 // 切片的大小  
export default {
  data() {
    return {
      container: {
        file: null
      },
      data: []
    }
  },
  methods: {
    createFileChunk(file, size = Size) {
      // 生成切片文件
      const fileChunkList = []
      let curr = 0
      while(curr < file.size) {
        fileChunkList.push( {file: file.slice(curr, curr+ size)} )
        curr += size
      }
      return fileChunkList
    },
    async uploadChunks() {
      // 上传切片
      const requestList = this.data.map(({chunk, hash}) => {
        const formData = new FormData()
        formData.append('chunk', chunk)
        formData.append('hash', hash)
        formData.append('filename', this.container.file.name)
        return { formData }
      }).map(async ({formData}) => {
        this.request({url: 'http://loaclhost:3000', data: formData})
      })
      await Promise.all(requestList) // 并发
      await this.mergeRequest()
    },
    async mergeRequest() {
      await this.request({
        url: 'http://loaclhost:3000',
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
          filename: this.container.file.name
        })
      })
    },
    handleFileChange(e) { 
      console.log(e);
      const [files]  = e.target.files
      if(!files) return
      Object.assign(this.$data, this.$options.data())
      this.container.file = files
    },
    async handleUpload() {
      if(!this.container.file) return
      const fileChunkList = this.createFileChunk(this.container.file)
      this.data = fileChunkList.map(({file}, index) => ({
        chunk: file,
        hash: this.container.file.name + '-' + index
      }))
      await this.uploadChunks()
    },
    // 封装一个原生的请求
    request({ url, method = 'post', data, headers = {} }) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key])
        })
        xhr.send(data)
        xhr.onload = e => {
          resolve({
            data: e.target.response
          })
        }
      })
    },
  }
}
</script>

<style>

</style>