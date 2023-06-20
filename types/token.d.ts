export default interface IToken {
	id: string;
	doctor: boolean;
	iat: Date;
	exp: Date;
}