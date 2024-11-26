import { Router } from "express";
import { addorder, deleteOrder } from "../controllers/order.js";


//create a Router
const orderRouter = Router();


// Define Routes

orderRouter.post('/order', addorder );


orderRouter.delete('/order/:id', deleteOrder );


// Export Router
export default orderRouter;