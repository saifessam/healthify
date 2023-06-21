import MessageSection from "@/components/sections/message";
import WarningIcon from "@/public/assets/svgs/icons/fill/bell.svg";

export default function NotFound() {
	return <MessageSection icon={<WarningIcon />} messages={["The page you trying to access is not found.", "Please double check the page URL."]} redirect={{ to: "/", label: "Return to home page" }} />;
}
