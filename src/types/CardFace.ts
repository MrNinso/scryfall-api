import type { Color } from './Color';
import type { ImageUris } from './ImageUris';

export interface CardFace {
	artist?: string;
	color_indicator?: Color[];
	colors: Color[];
	flavor_text?: string;
	illustration_id?: string;
	image_uris?: ImageUris;
	loyalty?: string;
	mana_cost: string;
	name: string;
	object: 'card_face';
	oracle_text?: string;
	power?: string;
	printed_name?: string;
	printed_text?: string;
	printed_type_line?: string;
	toughness?: string;
	type_line: string;
	watermark?: string;
}
