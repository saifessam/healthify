"use client";

import { Bell } from "@phosphor-icons/react";
import Message from "@/components/message";

export default function Notifications() {
	return <Message icon={<Bell weight="fill" />} messages={["No notifications available.", "Always keep checking for any new updates."]} />;
}
