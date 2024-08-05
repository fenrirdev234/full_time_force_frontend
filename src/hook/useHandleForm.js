import { toast } from "sonner";

export const useHandleFormCreate = (event) => {
  event.preventDefault();

  const title = event.target.title.value.trim();
  const author = event.target.author.value.trim();
  const content = event.target.content.value.trim();

  if (title && author && content) {
    toast.success("the post was created");
    event.target.reset();
  } else {
    toast.error(`Please fill in all fields`);
  }
};

export const useHandleFormModify = (event) => {
  event.preventDefault();

  const title = event.target.title.value.trim();
  const author = event.target.author.value.trim();
  const content = event.target.content.value.trim();

  if (title && author && content) {
    toast.success("the post was created");
    event.target.reset();
  } else {
    toast.error(`Please fill in all fields`);
  }
};
