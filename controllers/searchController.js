import foodModel from "../models/foodModel.js";
const searchProduct= async (req,res)=>{
   const {nam} = req.body;
  foodModel.find({nam}).then((data)=>{
    res.json(data);
   })
   console.log(res.data);
console.log(nam);
}
export {searchProduct}

// import foodModel from "../models/foodModel.js";

// const searchProduct = async (req, res) => {
//     try {
//         let nam = req.body.name;
//         let data = await foodModel.find({ name: nam });
//         res.json(data);
//         console.log(data);
//     } catch (error) {
//         res.status(500).json({ message: "Error searching for product", error: error.message });
//         console.error(error);
//         console.log(nam);
//     }
// };

// export { searchProduct };

