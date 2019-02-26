Page({
  data: {
    class: "请上传图片",
    prob: "请上传图片",
    width: "请上传图片",
    top: "请上传图片",
    left: "请上传图片",
    height: "请上传图片",
    image_src: "https://i.loli.net/2019/02/18/5c6a70c249efa.gif"
  },
  UploadImage() {
    var random = Date.parse(new Date()) + Math.ceil(Math.random() * 1000)
    var myThis = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths[0]
        console.log(tempFilePaths)
        myThis.setData({
          image_src: res.tempFilePaths[0]
        });
        var uploadTask = wx.cloud.uploadFile({
          cloudPath: random + '.png',
          filePath: tempFilePaths, // 文件路径
          success: res => {
            console.log(res.fileID)
            wx.cloud.callFunction({
              name: 'fish_recognition',
              data: {
                fileID: res.fileID
              },
              success: res => {
                myThis.setData({
                  count: count,
                  class: ,
                  prob: ,
                  width:,
                  top: ,
				  left: ,
				  height: ,
                })
                }
              },
            })
          },
          fail: err => {
          }
        })
        uploadTask.onProgressUpdate((res) => {
          myThis.setData({
            progress: res.progress //上传进度
          })
        })
      }
    })
  },
  onLoad: function (options) {
    wx.cloud.init({
      env: 'deeplearning-590e94'
    })
  }
})