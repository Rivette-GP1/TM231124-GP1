import { ContactModel } from "../models/contactform.js";



//Add an order
export const addmessage = async (req, res, next) => {
    try {
        const addedmessage = await ContactModel.create({
            ...req.body,
        });
        res.status(201).json(addedmessage)
    } catch (error) {
        next(error)
    }
};
