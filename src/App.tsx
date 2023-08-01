import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import List from "./components/List";
const App = () => {
    return (
        <div>
            <h2 className="font-bold text-2xl">Counter</h2>
            <Counter />
            <hr className="my-3" />
            <h2 className="font-bold text-2xl">Product</h2>
            <List />
            <Cart />
        </div>
    );
};

export default App;