import "./App.css";
import Header from "./components/Header/Header";
import Invatory from "./components/Invatory/Invatory";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Header> </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/manage" element={<Invatory />} />
          <Route path="/product/:productsKey" element={<ProductDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
