import mongoose from "mongoose";


// export const  connectDB = async () =>{
//     await mongoose.connect('mongodb://127.0.0.1:27017/food-del').then(()=>console.log("DB Connected"))
// }


export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://santoshdhobi958905:YbJlFTGNdhvCNPSP@cluster0.yy2cgr4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.