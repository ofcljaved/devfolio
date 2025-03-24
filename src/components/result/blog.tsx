import { BLOGS } from "@/constants";
import { useUrl } from "@/hooks/use-url";
import { formatNavigationArgs } from "@/lib/formatNavigationArgs";

export const Blogs = ({ args }: { args: string }) => {
  const { success, argsArray } = formatNavigationArgs(args);
  if (!success) {
    const messages = ["blog", "blog go <blog-id>"];
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
    if (Number.isNaN(id)) <p>Invalid blog id</p>

    return (
      <FetchBlogs id={id} />
    )
  }

  return (
    <>
      <p className="italic">"Craving my code insights? Discover my blogged coding adventures"</p>
      <ul className="my-2">
        {BLOGS.map(({ name, url, id, description }) => (
          <li key={id} className="grid py-2">
            <div className="font-bold">
              <span className="text-warning mr-1">{id}.</span>
              <span className="text-warning whitespace-pre">{name}</span>
            </div>
            <span className="py-1 w-[85ch] text-balance">{description}</span>
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
      <p>Usage: blog go {"<blog-id>"}</p>
      <p className="text-cursor">eg: blog go 1</p>
    </>
  )
};

function FetchBlogs({ id }: { id: number }) {
  const blog = BLOGS.find(blog => blog.id === id);
  useUrl(blog?.url, !blog);
  if (!blog) {
    return (
      <p>Incorrect blog id</p>
    )
  }
  return <p>Opening <span className="text-cursor">Blog {blog.id}</span> at {blog.url} ...</p>;
}
