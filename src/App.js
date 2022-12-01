import React from "react";
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import PromocionApp from "./Components/PromocionApp";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"No hay productos seleccionados"} />
      <PromocionApp />
      <Footer />
    </div>
  );
}

export default App;
