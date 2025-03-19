import { USER } from "@/constants";

export const Whoami = () => {
  return <p className="text-balance">
    Well you are {" "}
    <span className="text-error">{USER}</ span> {" "}
    and I'm <span className="text-warning">Javed</span>,
    <br />A developer who codes to solve problems, currently exploring the exciting worlds of Web3 </p>;
};
