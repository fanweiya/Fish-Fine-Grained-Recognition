const cloud = require('wx-server-sdk')// 云函数入口文件


cloud.init() // 云开发初始化



synDetectFace();
// 云函数入口函数
exports.main = async (event, context) => {
  const fileList = ['cloud://deeplearning-590e94.6465-deeplearning-590e94/cobia_30.jpg']
  const result = await cloud.getTempFileURL({
    fileList,
  })
  return result.fileList
}