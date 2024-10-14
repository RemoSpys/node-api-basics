import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = import.meta.PORT || 3006;

const app = express()

app.get("/", (request, response) => {
    response.json({
        message: "Welcome to the server! Everything is running smoothly. Have a great day!"
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})