import { EDUCATION } from "@/constants";

export const Education = ({ args }: { args: string }) => {
  if (args.trim().length) {
    return <p>Usage: education</p>;
  };
  return (
    <>
      <p className="italic">Here is my academic backgournd!</p>
      <ul className="my-2">
        {EDUCATION.map(({ name, description }, id) => (
          <li key={id} className="grid py-2">
            <div className="font-bold">
              <span className="text-warning whitespace-pre">{name}</span>
            </div>
            <span className="py-1 w-[85ch] text-balance">{description}</span>
          </li>
        ))}
      </ul>
    </>
  )
};
