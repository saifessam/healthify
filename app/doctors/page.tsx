"use client";

import Button from "@/components/button";
import DoctorCard from "@/components/cards/doctor";
import Message from "@/components/message";
// import FiltersSection from "@/components/sections/filters";
import GridSection from "@/components/sections/grid";
import ShowMoreSection from "@/components/sections/pagination";
import IDoctor from "@/types/doctor";
import { Gear, UsersThree } from "@phosphor-icons/react";
import { getDoctors } from "../api/users/route";

export default async function Doctors() {
	const doctors: IDoctor[] = await getDoctors();

	if (doctors.length === 0) {
		return <Message icon={<UsersThree weight="fill" />} messages={["Unfortunately no doctors are available.", "be the first one here and start arranging appointments."]} redirect={{ to: '/account/sign-up', label: 'Create an account now' }} />;
	} else {
		return (
			<>
				<GridSection>{doctors.map((doctor) => <DoctorCard doctor={doctor} key={`DoctorsPageDoctor(${doctor.id})`} />)}</GridSection>
				<ShowMoreSection />
				<Button condition="primary" className="floating" label="Filters" icon={<Gear weight="fill" />} />
			</>
		);
	}
}
