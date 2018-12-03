- [body-parser](https://github.com/expressjs/body-parser)
  
  处理 post 请求

- Form 进行文件上传

  要加上 `enctype="multipart/form-data"`

- [multer](https://github.com/expressjs/multer)

  文件上传

- multer 文件上传

  `upload.single("file")` 中 file 是上传框 name 值

- 中间件

  中间件如果不进行处理则要调用 next() 向下传递，否则会阻塞

  中间件第一个参数可以加上路径