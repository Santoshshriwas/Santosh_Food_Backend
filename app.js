import express  from "express"
import mongoose from "mongoose";
import cors from 'cors'
// import  {connectDB} from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import searchRouter from "./routes/searchRoute.js"
// app config
const app = express()
const port =process.env.PORT || 4000




const connectDB = async () => {
  try {
      const conn = await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
  }
};

// Connect to Database
connectDB();



// middlewares
app.use(express.json())
app.use(cors())


// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/product",searchRouter)

app.get("/", (req, res) => {
    res.send("API Working")
  });


app.listen(port, () => console.log(`Server started on http://localhost:${port}`))



