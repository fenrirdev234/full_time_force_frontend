import { Component } from "react";
import styles from "./Form.module.scss";
export class Form extends Component {
  render() {
    return (
      <section className={styles.from_section}>
        <h2 className={styles.form_title}>{this.props.title}</h2>
        <form onSubmit={this.props.handleClick} className={styles.form}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            name="title"
            minLength={1}
            maxLength={128}
            id="title"
            type="text"
            className={styles.input}
            required
            placeholder="Write the title"
          />
          <label htmlFor="author" className={styles.label}>
            Author
          </label>
          <input
            name="author"
            id="author"
            minLength={1}
            maxLength={128}
            type="text"
            className={styles.input}
            placeholder="Write the Author"
            required
          />
          <label htmlFor="content" className={styles.label}>
            Content
          </label>
          <textarea
            type="text"
            name="content"
            id="content"
            minLength={1}
            maxLength={2000}
            className={styles.textarea}
            placeholder="Write the content"
            required
          />
          <button className={styles.button} type="submit">
            Add Task
          </button>
        </form>
      </section>
    );
  }
}
