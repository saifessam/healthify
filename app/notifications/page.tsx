"use client";

import { Bell } from "@phosphor-icons/react";
import MessageSection from "@/components/sections/message";

export default function Notifications() {
	return <MessageSection icon={<Bell weight="fill" />} messages={["No notifications available.", "Always keep checking for any new updates."]} />;
}
