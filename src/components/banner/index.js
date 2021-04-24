import "./styles.css";
import Botao from "../botao";
export default function Banner() {
    return (
    <section id="banner" className="vh-100 vw-100" > 
     <h1>Escutar Muda Tudo</h1>
     <p>
      Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
     </p>
     <Botao texto="Baixe o Spotify free" variante="sucesso" />
    </section>
  );
}