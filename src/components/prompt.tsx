import { hostname, USER } from "@/constants";

export const Prompt = () => {
  return (
    <div className="font-term text-warning font-bold">
      <span className="text-error">{USER}</span>@
      <span className="text-success">{hostname()}</span>
      :~$
    </div>
  );
};
