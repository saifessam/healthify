"use client";

import { getDoctor } from "@/app/api/users/route";
import DoctorProfile from "@/components/doctor-profile";
import Message from "@/components/message";
import { FileX } from "@phosphor-icons/react";

type Props = {
	params: { id: string; };
};

export default async function Doctor({ params }: Props) {
	const doctor = await getDoctor(params.id);

	if (!doctor) return <Message icon={<FileX weight="fill" />} messages={["Doctor not found"]} />;
	return <DoctorProfile doctor={doctor} />;
}
