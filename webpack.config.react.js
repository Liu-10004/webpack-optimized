let path = require('path');
let webpack = require('webpack');

module.exports = {
  mode:'development',
  entry:{
    react:['react','react-dom'],
  },
  output:{
    filename:'_dll_[name].js',
    path:path.resolve(__dirname,'dist'),
    library:'_dll_[name]', //导出的名字
    libraryTarget:'var' // coomonjs var this
  },
  plugins:[
    new webpack.DllPlugin({ // 这里的name 必须和 library 一致
      name:'_dll_[name]',
      path:path.resolve(__dirname,'dist','manifest.json') //manifest 本质是一个任务清单
    })
  ]
  
}