import Button from "@/components/button";
import DoctorCard from "@/components/cards/doctor";
import MessageSection from "@/components/sections/message";
import GridSection from "@/components/sections/grid";
import UsersThreeIcon from "@/public/assets/svgs/icons/fill/users-three.svg";
import FunnelIcon from "@/public/assets/svgs/icons/regular/funnel.svg";
import IDoctor from "@/types/doctor";
import { getDoctors } from "../api/users/route";

export default async function Doctors() {
	const doctors: IDoctor[] = await getDoctors();

	if (doctors.length === 0) {
		return <MessageSection icon={<UsersThreeIcon />} messages={["Unfortunately no doctors are available.", "be the first one here and start arranging appointments."]} redirect={{ to: '/account/sign-up', label: 'Create an account now' }} />;
	} else {
		return (
			<>
				<GridSection>{doctors.map((doctor) => <DoctorCard doctor={doctor} key={`DoctorsPageDoctor(${doctor.id})`} />)}</GridSection>
				<Button style={{ theme: "primary", shape: "circular", outlined: false }} className="floating" content={<FunnelIcon />} />
			</>
		);
	}
}
