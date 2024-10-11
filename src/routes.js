import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Shop from "./pages/Shop";
import Commit from "./pages/Commit";
import TradeMark from "./pages/Trademark";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: Detail,
    },
    {
        path: "/shop",
        name: "Shop",
        component: Shop,
    },
    {
        path: "/trademark",
        name: "TradeMark",
        component: TradeMark,
    },
    {
        path: "/commit",
        name: "Comit",
        component: Commit,
    },
    {
        path: "/search/:searchTerm",
        name: "Search",
        component: Search,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
    }
];

export { routes };
