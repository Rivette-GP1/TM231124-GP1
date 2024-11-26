import { model, Schema } from "mongoose";
// import { toJSON } from "@reis/mongoose-to-json";


const contactSchema = new Schema ({
    name: { type: String, required: true},
    email: { type: String},
    message: { type: String}

    // createdAt: { type: Date, default: Date.now()}
},{
    timestamps: true

});

// orderSchema.plugin(toJSON);

export const ContactModel = model('contact', contactSchema);