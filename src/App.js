import "./style.scss";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WebHosting } from "./pages/WebHosting";
import { CpanelHosting } from "./pages/CpanelHosting";
import { WordpressHosting } from "./pages/WordpressHosting";
import { ResellerHosting } from "./pages/ResellerHosting";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
     <Routes>
      <Route path="/" index element={<Home/>}>
        
      </Route>
      <Route path="/web-hosting" element={<WebHosting/>}></Route>
      <Route path="/cpanel-hosting" element={<CpanelHosting/>}></Route>
      <Route path="/wordpress-hosting" element={<WordpressHosting/>}></Route>
      <Route path="/reseller-hosting" element={<ResellerHosting/>}></Route>
     </Routes>
     <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
