/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

//https://gateway.marvel.com:443/v1/public/characters?apikey=acee3ebcf5e11d64f4b19f6143e5b812
//key privada: c940533c4dc50276b3a61eca6680337c0a2d817d
//key publica: c3d1053766384b30ff609272b5ef5440

//KeyArm
//1c940533c4dc50276b3a61eca6680337c0a2d817dc3d1053766384b30ff609272b5ef5440
//MD5
//hash: 98e297b6a8e1a7e275f8ba54e97eda61


// https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c3d1053766384b30ff609272b5ef5440&hash=98e297b6a8e1a7e275f8ba54e97eda61
function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c3d1053766384b30ff609272b5ef5440&hash=98e297b6a8e1a7e275f8ba54e97eda61"
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(personajes);

  return (
    <div className="App">
      <h1>MARVEL</h1>

      {/* GRID DE IMAGENES */}
      {/* Elemento extraido de bootstrap, buscar card - card layout*/}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Recorriendo el arreglo de datos */}
        {personajes.map((p) => (
          <div className="col mt-5" key={p.id}>
            <div
              className="card align-items-center"
              style={{ width: "18rem", height: "18rem" }}
            >
              {/* toca sacar tanto el path como la extension para obtener la ruta
              completa de la imagen */}
              <img
                src={`${p.thumbnail.path}.${p.thumbnail.extension}`}
                className="card-img-top"
                style={{ width: "80%", height: "80%" }}
              />
              <div className="card-body">
                <h4 className="card-title">{p.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;