import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { Loader, NotFound } from "./components";

const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Product"));

const routeList = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Products /> },
      { path: ":id", element: <Product /> },
      { path: ":id/:colorId", element: <Product /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

const App = () => {
  const routing = useRoutes(routeList);
  return <Suspense fallback={<Loader fullHeight />}>{routing}</Suspense>;
};

export default App;
