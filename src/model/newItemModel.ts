import mongoose from "mongoose";
import { IOfferItem, IPriceItem, IModelItem } from "../Types";

const Schema = mongoose.Schema;

const newItemSchema = new Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Object as () => IPriceItem,
		required: true,
	},
	offer: {
		type: Object as () => IOfferItem,
	},
	description: {
		type: String,
		required: true,
	},
	item: {
		type: Object as () => IModelItem,
		required: true,
	},
});

export default mongoose.model("NewItem", newItemSchema);
