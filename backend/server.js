import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

dotenv.config()
// app config
const app = express()
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();


// middlewares
app.use(express.json())
app.use(cors())


// api endpoints (from routes folder)
app.use('/api/admin', adminRouter)  // localhost:4000/api/admin/add-doctor
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
  res.send("API WORKING")
})

// app.listen(port, () =>
//   console.log("Server Started", port))
app.listen(port, '0.0.0.0', () =>
  console.log(`Server Started on port ${port}`)
);
