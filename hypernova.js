const hypernova = require('hypernova/server')
const fs = require('fs')
const chokidar = require('chokidar')
const path = "./frontend/js/"
var fileList = []

const makeFileList = () => {
  fileList = []
  fs.readdir(path, (err, files) => {
    if (err) throw err

    files.filter((file) => {
      return fs.statSync(`${path}${file}`).isFile() && /.*\.js$/.test(path+file) //絞り込み
    }).forEach((file) => {
      if (fileList.indexOf(file) === -1){
        fileList.push(file)
      }
    })
  })
}

var watcher = chokidar.watch(path, {	//watch対象ディレクトリorファイル
  ignored: /[\/\\]\./,	//無視する対象
  persistent:true	//監視を継続するかどうか
})

watcher.on('ready', (path) => { makeFileList() })
  .on('add', (path) => { makeFileList() })        // ファイルが追加された場合
  .on('unlink', (path) => { makeFileList() })     // ファイルが削除された場合

hypernova({
  devMode: true,

  getComponent(name) {
  console.log(fileList)
    if (fileList.indexOf(name) > -1){
      return require(`${path}${name}`)
    }

    return null;
  },

  port: 3030,
})
