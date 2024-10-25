import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const APIKEY = "548cef8108a8b2f5bfb5c7191d029926";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
      );
      if (!response.ok) {
        throw new Error("Error en la llamada a la API");
      }
      const result = await response.json();
      setData(result); // Guardamos los datos recibidos
    } catch (error) {
      console.log(error);
    } finally {
      console.log(data);
    }
  };

  const searchCiry = async (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <h1>Clima</h1>
      <form onSubmit={searchCiry}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Ingresa una ciudad</label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button type="submit">Buscar</button>
        </div>
      </form>
      <h2>Datos</h2>
      {data ? (
        <div>
          <h3>Ciudad: {data.name}</h3>
          <p>Temperatura Maxima: {data.main.temp_max}</p>
          <p>Temperatura Minima: {data.main.temp_min}</p>
          <p>Temperatura Actual: {data.main.temp}</p>
          <h4>Clima</h4>
          <p>{data.weather[0].description}</p>
        </div>
      ) : (
        <p>no hay datos</p>
      )}
    </>
  );
}

export default App;
