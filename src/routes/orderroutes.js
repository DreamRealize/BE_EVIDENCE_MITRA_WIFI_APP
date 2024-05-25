import { Router } from "express";
import verifyToken from "../middleware/authMiddleware.js";
import {
   getOrder,
   getOrderById,
   insertOrder,
   updateOrder,
} from "../controllers/ordercontroller.js";
const order = Router();

order.get("/order", getOrder);
order.post("/order/create", insertOrder);
order.put("/order/update/:idOrder", updateOrder);
order.get('/order/:idOrder', getOrderById); 

export default order;
