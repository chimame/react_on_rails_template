const hypernova = require('hypernova/server')

hypernova({
  devMode: true,

  getComponent(name) {
    const fs = require('fs')
    const path = "./frontend/js/"
    let fileList = []

    fs.readdir(path, (err, files) => {
      if (err) throw err

      files.filter((file) => {
        return fs.statSync(`${path}${file}`).isFile() && /.*\.js$/.test(path+file) //絞り込み
      }).forEach((file) => {
        fileList.push(file)
      })
    })

    if (fileList.indexOf(name)){
      return require(`${path}${name}`)
    }

    return null;
  },

  port: 3030,
})
