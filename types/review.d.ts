import IUser from "./user";

export default interface IReview {
	id?: string;
	user: IUser;
	text: string;
	rate: number;
	createdAt?: string;
	updatedAt?: string;
}