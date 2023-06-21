import MessageSection from "@/components/sections/message";
import BellIcon from "@/public/assets/svgs/icons/fill/bell.svg";

export default function Notifications() {
	return <MessageSection icon={<BellIcon />} messages={["No notifications available.", "Always keep checking for any new updates."]} />;
}
