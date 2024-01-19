const express = require('express')
const cors = require('cors')

const app = express()
const port = 3001

const jsonData = [
  {
    nick: 'Blas',
    months: 3,
    profileUrl: 'https://i.pravatar.cc/150?u=blas',
    description: 'Blas hace de moderador a veces'
  },
  {
    nick: 'Mayco',
    months: 7,
    profileUrl: 'https://i.pravatar.cc/150?u=Mayco',
    description: 'Mayco solo chatea'
  },
  {
    nick: 'Rosally',
    months: 17,
    profileUrl: 'https://i.pravatar.cc/150?u=Rosally',
    description: 'Ella habla con sus fans'
  }
]

// Enable CORS for all routes
app.use(cors())

app.get('/sub', (req, res) => {
  res.json(jsonData)
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/sub`)
})
