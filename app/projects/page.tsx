import { Project } from "@/components/Project";
import projects from "../../public/projects.json";

projects.projects.sort(function (a, b) {
	return b.startTimestamp - a.startTimestamp;
});

export default function Projects() {
	return (
		<>
			<div className="px-6 flex gap-4 flex-col pb-16 flex-grow items-center">
				<h1 className="mt-4 font-bold text-4xl">Projects</h1>
				{projects.projects.map((project, index) => (
					<Project {...project} key={index} />
				))}
			</div>
		</>
	);
}
