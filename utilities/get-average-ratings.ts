export default function getAverageRating(numbers: number[]): number {
	let averageRating: number;
	const ratingsTotal: number = numbers.length;
	averageRating = numbers.reduce((accumulator, current) => accumulator + current, 0) / ratingsTotal;
	return averageRating;
}