const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const json = {
        'cf-connecting-ip': req.header('cf-connecting-ip'),
        'x-client-ip': req.header('x-client-ip'),
        'x-forwarded-for': req.header('x-forwarded-for'),
        'x-real-ip': req.header('x-real-ip'),
        'x-cluster-client-ip': req.header('x-cluster-client-ip'),
        'x-forwarded': req.header('x-forwarded'),
        'forwarded-for': req.header('forwarded-for'),
        'forwarded': req.header('forwarded'),
        'socket': req.socket?.remoteAddress,
        'info': req.info?.remoteAddress,
    }
    console.log(json)
    res.json(json)
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})