import IReview from "./review";
import IUser from "./user";

export default interface IDoctor extends IUser {
	specialization: string;
	location: {
		city: string;
		state: string;
		country: string;
	};
	priceRange: {
		from: number;
		to: number;
	};
	verified: boolean;
	bio?: string;
	reviews?: IReview[];
}