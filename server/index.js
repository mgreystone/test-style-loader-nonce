const express = require('express')
const helmet = require('helmet')
const path = require('path')

const { env: { PORT } } = process

const app = express()

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      styleSrc: [ `'nonce-mysecret'` ]
    }
  }
}))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/dist', express.static(path.resolve(__dirname, '../dist')))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
