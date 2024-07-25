import express from 'express';
import {searchProduct} from "../controllers/searchController.js"

const searchRouter = express.Router();

searchRouter.post("/search",searchProduct);


export default searchRouter;