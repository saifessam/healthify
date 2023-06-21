"use client";

import MessageSection from "@/components/sections/message";
import { Warning } from "@phosphor-icons/react";

export default function NotFound() {
	return <MessageSection icon={<Warning weight="fill" />} messages={["The page you trying to access is not found.", "Please double check the page URL."]} redirect={{ to: "/", label: "Return to home page" }} />;
}
