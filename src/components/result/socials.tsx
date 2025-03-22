import { SOCIALS } from "@/constants";
import { useUrl } from "@/hooks/use-url";
import { addPadding } from "@/lib/addPadding";
import { formatNavigationArgs } from "@/lib/formatNavigationArgs";

export const Socials = ({ args }: { args: string }) => {
  const { success, argsArray } = formatNavigationArgs(args);
  if (!success) {
    const messages = ["socials", "socials go <social-id>"];
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
    if (Number.isNaN(id)) <p>Invalid social id</p>

    return (
      <FetchSocials id={id} />
    )
  }

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

function FetchSocials({ id }: { id: number }) {
  const social = SOCIALS.find(social => social.id === id);
  useUrl(social?.url, !social);
  if (!social) {
    return (
      <p>Incorrect social id</p>
    )
  }
  return <p>Opening <span className="text-cursor">{social.name}</span> at {social.url} ...</p>;
}
