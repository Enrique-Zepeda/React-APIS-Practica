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
