"use client";

import Message from "@/components/message";
import { Warning } from "@phosphor-icons/react";

export default function NotFound() {
	return <Message icon={<Warning weight="fill" />} messages={["The page you trying to access is not found.", "Please double check the page URL."]} redirect={{ to: "/", label: "Return to home page" }} />;
}
