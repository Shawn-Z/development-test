import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductPage from "./components/projects/ProductPage";

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Route path="/" exact component={() => <ProductPage ref={titleRef} />} />
    </BrowserRouter>
  );
};

export default App;
