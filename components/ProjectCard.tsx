import Link from "next/link";
import { projects } from "../projects";

const ProjectCard = () => {
	return (
		<>
			{projects.map((project) => (
				<div
					key={project.id}
					className="rounded-xl mb-10 p-5  border-2 border-gray-700"
				>
					<div className="flex justify-between">
						<h3 className="text-xl">{project.title}</h3>
						<div className="text-secondaryText flex">
							{project.link ? (
								<div className="h-6 w-6 mr-2">
									<Link href={project.link} target="_blank">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>External Link</title>
											<path
												d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z"
												fill="#50e4b2"
											/>
											<path
												d="M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z"
												fill="#50e4b2"
											/>
										</svg>
									</Link>
								</div>
							) : null}
							{project.github ? (
								<div className="h-6 w-6">
									<Link href={project.github} target="_blank">
										<svg
											role="img"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>GitHub</title>
											<path
												fill="#50e4b2"
												d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
											/>
										</svg>
									</Link>
								</div>
							) : null}
						</div>
					</div>
					<p className="text-secondaryText text-sm mb-8">{project.description}</p>
					<div className="flex flex-wrap">
						{project.tags.map((tag, i) => (
							<p key={i} className="mr-5 text-cta text-sm">
								{tag}
							</p>
						))}
					</div>
				</div>
			))}
		</>
	);
};

export default ProjectCard;
