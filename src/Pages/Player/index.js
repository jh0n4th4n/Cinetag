import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from "json/db.json";
import styles from "./Player.module.css";
import NaoEncontrada from "Pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/jh0n4th4n/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
}, [])

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>

      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
