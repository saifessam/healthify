import StarIcon from "@/public/assets/svgs/icons/fill/star.svg";
import Image from "next/image";
import ReviewType from "../../../types/review";
import "./styles.css";

type Props = {
	data: ReviewType;
};

export default function Review({ data }: Props) {
	return (
		<div className="review">
			<div className="header">
				<div className="image">
					<Image src={`/assets/images/users/1.jpg`} alt={data.user.name} fill />
				</div>
				<div className="title">
					<span>{data.user.name}</span>
					<small>{data.createdAt}</small>
				</div>
				<small>{data.rate}<StarIcon /></small>
			</div>
			<div className="body">
				<p>{data.text}</p>
			</div>
		</div>
	);
}
