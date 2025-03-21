import { hostname } from "@/constants";

export const Hostname = ({ args }: { args: string }) => {
  if (args.trim().length) {
    return <p>Usage: hostname</p>;
  };

  return <p>{hostname()}</p>;
};
