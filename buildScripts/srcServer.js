import express from 'express'
import path from 'path'
import open from 'open'

import webpack from 'webpack'
import config from '../webpack.config.dev'



const port = 300
const app = express()
const compiler = webpack(config)
0
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))


function rootHandler(req, res){
    const indexPagePath = path.join(__dirname,'../src/index.html')
    res.sendFile(indexPagePath)
}

app.get('/', rootHandler)

app.listen(port, function(err){
    if(err){
        console.log(err)
    }else{
        open('http://localhost:'+ port)
    }
})
