import { PROJECTS } from "@/constants";
import { useUrl } from "@/hooks/use-url";
import { formatNavigationArgs } from "@/lib/formatNavigationArgs";

export const Projects = ({ args }: { args: string }) => {
  const { success, argsArray } = formatNavigationArgs(args);
  if (!success) {
    const messages = ["projects", "projects go <project-id>"];
    return (
      <div className="grid grid-cols-[max-content_1fr] grid-rows-2 gap-x-2">
        <p className="row-span-full">Usage:</p>
        {messages.map((message, index) => (
          <p key={index}>
            {message}
          </p>
        ))}
      </div>
    )
  }

  if (argsArray.length > 0) {
    const id = Number(argsArray[1]);
    if (Number.isNaN(id)) <p>Invalid project id</p>

    return (
      <FetchProjects id={id} />
    )
  }

  return (
    <>
      <p className="italic">"Curious about what I can do? Take a look at my featured projects"</p>
      <p>Here are some of the projects I'm most excited to share with you</p>
      <ul className="my-2">
        {PROJECTS.map(({ name, url, id, description }) => (
          <li key={id} className="grid py-2">
            <div className="font-bold">
              <span className="text-warning mr-1">{id}.</span>
              <span className="text-warning whitespace-pre">{name}</span>
            </div>
            <span className="whitespace-pre py-1">{description}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${name} profile`}
              className="text-cursor"
            >
              Check it out → <span className="text-foreground underline hover:bg-muted">{url}</span>
            </a>
          </li>
        ))}
      </ul>
      <p>Usage: projects go {"<project-id>"}</p>
      <p className="text-cursor">eg: projects go 1</p>
    </>
  )
};

function FetchProjects({ id }: { id: number }) {
  const project = PROJECTS.find(project => project.id === id);
  useUrl(project?.url, !project);
  if (!project) {
    return (
      <p>Incorrect project id</p>
    )
  }
  return <p>Opening <span className="text-cursor">{project.name}</span> at {project.url} ...</p>;
}
