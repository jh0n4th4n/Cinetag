import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritoContext } from "components/contextos/Favoritos";

function Favoritos () {
    const {favorito} = useFavoritoContext();
    return(
        <>
        <Banner imagem='favoritos'/>
        <Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key = {fav.id} />
                })}
            </section>
        </Titulo>
        </>
    )
}

export default Favoritos;