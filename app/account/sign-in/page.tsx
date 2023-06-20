"use client";

import Form from "@/components/form";
import PasswordInput from "@/components/inputs/password";
import TextInput from "@/components/inputs/text";
import { SyntheticEvent, useState } from "react";

export default function SignIn() {
	const [data, setData] = useState({ email: "", password: "" });
	const links = [{ to: "/support/reset-password", label: { text: "Forgot password?" } }, { to: "/account/sign-up", label: { suffix: "New here?", text: "Create an account" } }];

	async function onSubmit(e: SyntheticEvent) {
		e.preventDefault();
		console.log("DATA ==>", data);
	};

	return (
		<Form onSubmit={(e: SyntheticEvent) => onSubmit(e)} title="Welcome Back" links={links}>
			<TextInput name="email" placeholder="Email address" setter={setData} />
			<PasswordInput name="password" placeholder="Password" setter={setData} />
		</Form>
	);
}
