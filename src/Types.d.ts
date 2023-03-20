export interface IOfferItem {
	percent: Number;
	originalPrice: Number;
	validDate: Date;
}

export interface IPriceItem {
	currency: String;
	value: Number;
}

export interface IHotspotItem {
	_id: Number;
	name: String;
	position: String;
	normal: String;
}

/**
 *  Model item interface
 */
export interface IModelItem {
	thumbImage: String;
	model: Buffer;
	placement: String;
	hotspots?: IHotspotItem[];
}
