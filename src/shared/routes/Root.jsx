import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "../../modules/Product/page/ProductPage";
import DefaultPage from "../pages/DefaultPage";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/Product" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
