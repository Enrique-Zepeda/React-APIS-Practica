import { Button } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-slate-700 h-screen flex-col text-center justify-center ">
              <h1 className="text-3xl font-bold underline text-cyan-300">
                Hello world!
              </h1>
              <button className="bg-sky-500 hover:bg-sky-700 px-5 py-5 my-4 text-white rounded-lg">
                Mi primer boton
              </button>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className="bg-sky-500 hover:bg-sky-700 px-5 py-5 my-4 text-white rounded-lg"
              >
                Contained
              </Button>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="bg-slate-700 h-screen flex-col text-center justify-center ">
              <h1 className="text-3xl font-bold underline text-cyan-300">
                Hello about!
              </h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
