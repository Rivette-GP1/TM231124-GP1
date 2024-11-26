import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const orderSchema = new Schema ({
    name: { type: String, required: true},
    phoneNumber: { type: Number, required: true},
    deliveryAddress: { type: String, require: true},
    selectedPlan:  {type: String, 
        enum: [ 'Basic Plan(solo)', 'Balanced Plan(2 people)', 'Family Plan (4 people)']},
    dietaryPreference: {type: String, 
        enum: [ 'Vegan', 'Non-vegan'], required: true},
    optionalAddons: { type: String}

    // createdAt: { type: Date, default: Date.now()}
},{
    timestamps: true

});

orderSchema.plugin(toJSON);

export const OrderModel = model('order', orderSchema);