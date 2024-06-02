import './App.css';
import Header from './components/Header/Header';
import InputCard from "./components/InputCard/InputCard";
import NoProduct from './components/NoProductMessage/NoProduct';
import ProductCard from './components/ProductCard/ProductCard';
function App() {
  return (
    <div className="app">
     <Header />
        <InputCard />
        <NoProduct />
        <ProductCard product={{title: "Hello", price: 100}} />

    </div>
  );
}

export default App;
