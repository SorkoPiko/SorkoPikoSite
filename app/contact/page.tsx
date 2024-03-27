import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
	return (
		<>
			<div className="px-6 flex gap-4 flex-col pb-16 flex-grow items-center">
				<h1 className="mt-4 font-bold text-4xl">
					Socials
				</h1>
				<div className="flex space-x-2">
					<SocialIcon target="_blank" url="https://youtube.com/@SorkoPiko" />
					<Popover placement="right" showArrow={true}>
						<PopoverTrigger>
								<SocialIcon network="discord" url="#" />
						</PopoverTrigger>
						<PopoverContent>
							<div className="px-1 py-2">
								<div className="text-small font-bold">sorkopiko</div>
							</div>
						</PopoverContent>
					</Popover>
					<SocialIcon target="_blank" url="https://x.com/SorkoPiko" />
					<SocialIcon target="_blank" url="https://reddit.com/user/SorkoPiko" />
					<SocialIcon target="_blank" url="https://twitch.tv/SorkoPiko" />
					<SocialIcon target="_blank" url="https://au.linkedin.com/in/sorkopiko" />
				</div>
				<p>I am most active on Discord, so contact me there first.</p>
			</div>
		</>
	);
}