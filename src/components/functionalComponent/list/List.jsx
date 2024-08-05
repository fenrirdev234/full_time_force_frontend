import { useGetPostsQuery } from "../../../api/post/apiSlice";
import { Item } from "../item/Item";
import styles from "./List.module.scss";

export const List = () => {
  const { data, isLoading, isError, error } = useGetPostsQuery();

  return (
    <section className={styles.list_section}>
      <h2 className={styles.title}>List</h2>
      {isError && error ? (
        <p>
          {error.status} {error.error}
        </p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <ul className={styles.list}>
          {!isLoading &&
            data &&
            data?.post.docs.map((doc, index) => (
              <Item
                key={index}
                title={doc.title}
                content={doc.content}
                author={doc.author}
                createdAt={doc.createdAt}
                updatedAt={doc.updatedAt}
              />
            ))}
        </ul>
      ) : null}
    </section>
  );
};
export default List;
