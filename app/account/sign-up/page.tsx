"use client";

import Form from "@/components/from";
import PasswordInput from "@/components/inputs/password";
import TextInput from "@/components/inputs/text";
import { SyntheticEvent, useState } from "react";

export default function SignUpPage() {
	const [data, setData] = useState({ name: "", email: "", password: "" });
	const links = [{ to: "/account/sign-in", label: { suffix: "Already a user?", text: "Sign in" } }];

	async function onSubmit(e: SyntheticEvent) {
		e.preventDefault();
	};

	return (
		<Form onSubmit={(e: SyntheticEvent) => onSubmit(e)} title="Welcome to Healthify" links={links}>
			<TextInput name="name" placeholder="Full name" setter={setData} />
			<TextInput name="email" placeholder="Email address" setter={setData} />
			<PasswordInput name="password" placeholder="Password" setter={setData} />
		</Form>
	);
}
