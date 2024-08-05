import { Toaster } from "sonner";
import "./App.scss";

import { Route, Routes } from "react-router";

import { ModifyPost } from "./page/ModifyPost";
import { HomePage } from "./page/HomePage";
import { LogButton } from "./components/functionalComponent/Button/LogButton";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>BlogPosts</p>
          <LogButton />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/update" element={<ModifyPost />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </main>
      </div>
      <Toaster richColors position="bottom-center" />
    </>
  );
}

export default App;
