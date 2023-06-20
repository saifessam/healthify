import { NextResponse } from 'next/server';
import UsersJSON from './users.json';

export async function getUsers() {
	return NextResponse.json(UsersJSON).json();
}

export async function getDoctors() {
	const doctors = UsersJSON.filter((user) => user.type === "doctor");
	return NextResponse.json(doctors).json();
}

export async function getDoctor(id: string) {
	const doctors = UsersJSON.filter((user) => user.type === "doctor");
	const doctor = doctors.find(doctor => doctor.id === id);
	return NextResponse.json(doctor).json();
}

export async function searchDoctors(term: string) {
	if (!term) {
		return NextResponse.json([]).json();
	} else {
		const doctors = UsersJSON.filter((user) => user.type === "doctor");
		if (term === "*") return NextResponse.json(doctors).json();
		const filteredDoctors = doctors.filter((doctor) => doctor.name.trim().toLocaleLowerCase().startsWith(term.trim().toLocaleLowerCase()));
		return filteredDoctors.length === 0 ? NextResponse.json({ message: `No doctors found named "${term}"` }).json() : NextResponse.json(filteredDoctors).json();
	}
}