const express = require('express')
const path = require('path')
const authRoutes = require('./routes/auth')


const app = express()
app.use(express.json())

// API routes for authentication
app.use('/api/auth', authRoutes)

// Serve static files from the client production build folder (Vite outputs to "dist")
app.use(express.static(path.join(__dirname, '../client/dist')))

// Catch-all handler: serve index.html for any unmatched route (client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
