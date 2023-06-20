export default interface IUser {
	id?: string;
	name: string;
	email: string;
	phone: string;
	password: string;
	image: string;
	type: "doctor" | "patient";
	createdAt?: string;
	updatedAt?: string;
}