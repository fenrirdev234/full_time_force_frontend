import { useSelector } from "react-redux";
import "./App.scss";
import { Item } from "./components/functionalComponent/items/item/Item";
import useFetch from "./hook/useFetch";

import { API_ENDPOINTS } from "./services/endpoint";
import { Toaster } from "sonner";

function App() {
  const { data, isLoading, hasError, errorMessage } = useFetch(
    `${process.env.REACT_APP_API_ENDPOINT}${API_ENDPOINTS.POST}`
  );
  const posts = useSelector((state) => state.users);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>BlogPosts</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <section>dgdxg</section>

          <section>
            <h2 className="title">List</h2>

            {data.post.docs.map((doc, index) => (
              <ul className="list" key={index}>
                <Item
                  title={doc.title}
                  content={doc.content}
                  author={doc.author}
                  createdAt={doc.createdAt}
                  updatedAt={doc.updatedAt}
                />
              </ul>
            ))}
          </section>
        </main>
      </div>
      <Toaster richColors />
    </>
  );
}

export default App;
