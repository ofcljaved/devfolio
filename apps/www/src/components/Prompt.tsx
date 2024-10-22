import { HOST_NAME, USER } from "~/constants"

export const Prompt = () => {
    return (
        <div>
            <span>{USER}</span>
            @
            <span>{HOST_NAME}</span>
            :~$
        </div>
    )
}
