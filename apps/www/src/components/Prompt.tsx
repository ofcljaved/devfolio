import { HOST_NAME, USER } from "@repo/constants";

export const Prompt = () => {
  return (
    <div className="font-term text-warning font-bold">
      <span className="text-error">{USER}</span>@
      <span className="text-success">{HOST_NAME}</span>
      :~$
    </div>
  );
};
