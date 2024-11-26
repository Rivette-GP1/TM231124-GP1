import { OrderModel } from "../models/order-form.js"



//Add an order
export const addorder = async (req, res, next) => {
    try {
        const addedorder = await OrderModel.create({
            ...req.body,
        });
        res.status(201).json(addedorder)
    } catch (error) {
        next(error)
    }
};



//Delete a contact
export const deleteOrder = async (req, res, next) => {
    try {
        const deletedOrder = await OrderModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedOrder)
    } catch (error) {
        next(error)
    }
}