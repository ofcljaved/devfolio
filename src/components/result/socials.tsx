import { SOCIALS } from "@/constants";
import { addPadding } from "@/lib/addPadding";

export const Socials = ({ args }: { args: string }) => {
  console.log(args);
  if (args.trim().length) {
    return <p>Usage: socials</p>;
  };

  return (
    <>
      <p>Here are my socials</p>
      <ul className="my-2">
        {SOCIALS.map(({ name, url, id }) => (
          <li key={id}>
            <span className="text-warning mr-1">{id}.</span>
            <span className="text-warning whitespace-pre">{addPadding(name, 13)}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${name} profile`}
            >
              → <span className="hover:bg-muted">{url}</span>
            </a>
          </li>
        ))}
      </ul>
      <p>Usage: socials go {"<social-id>"}</p>
      <p className="text-cursor">eg: socials go 1</p>
    </>
  )
};
