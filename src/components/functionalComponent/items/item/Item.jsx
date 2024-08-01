import styles from "./Item.module.scss";
import { BsFillGearFill, BsFillTrashFill } from "react-icons/bs";

export const Item = ({
  title,
  content,
  author,
  createdAt,
  updatedAt,
  permaLink,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.item__header}>
        <h3 className={styles.item__title}>{title}</h3>
        <div className={styles.item__config}>
          <button className={styles.item__gear}>
            <BsFillGearFill />
          </button>

          <button className={styles.item__trash}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
      <div className={styles.item__author}>
        <p>{author}</p>
      </div>
      <p>{content}</p>
      <div className={styles.item__date}>
        <p>Create at: {createdAt}</p>
        <p>Update up: {updatedAt}</p>
      </div>
    </li>
  );
};
