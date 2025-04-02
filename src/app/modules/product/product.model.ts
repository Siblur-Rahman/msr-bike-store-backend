import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";

const PorductSchema = new Schema<IProduct>({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    availableProduct:{
        type: Number,
          required: true
    },
    stock:{
        type: String,
        enum: {
            values: ['in Stock', 'out of stock'],
            message: '{VALUE} please provide a valid stock.',
          },
          required: true
    }
})

const Product = model<IProduct>('product', PorductSchema)

export default Product

