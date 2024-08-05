import { Form } from "../components/classComponent/Form";
import List from "../components/functionalComponent/list/List";
import { useHandleFormCreate } from "../hook/useHandleForm";

export const HomePage = () => {
  return (
    <>
      <Form handleClick={useHandleFormCreate} title={"Create a post"} />
      <List />
    </>
  );
};
