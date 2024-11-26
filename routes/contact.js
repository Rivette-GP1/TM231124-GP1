import { Router } from "express";
import { addmessage } from "../controllers/contact.js";


//create a Router
const contactRouter = Router();


// Define Routes

contactRouter.post('/contact', addmessage );



// Export Router
export default contactRouter;