import { Form } from "../components/classComponent/Form";
import { useHandleFormModify } from "../hook/useHandleForm";

export const ModifyPost = () => {
  return <Form handleClick={useHandleFormModify} title={"Update a post"} />;
};
