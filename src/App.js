import React from "react";
import Menu from "./components/Menu";
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  const { titulo, url } = dadosIniciais.categorias[0].videos[0];
  console.log(dadosIniciais);
  return (
    <div className="App" style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={titulo}
        url={url}
        videoDescription={"O que é o Front-end?"}
      />
      {dadosIniciais.categorias.map((item, index) => (
        <Carousel ignoreFirstVideo={index === 0} category={item} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
