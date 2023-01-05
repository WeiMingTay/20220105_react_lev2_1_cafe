import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Galerie from "./Pages/Galerie/Galerie";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Oeffnungszeiten from "./Pages/Oeffnungszeiten/Oeffnungszeiten";
import Speisekarte from "./Pages/Speisekarte/Speisekarte";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/Speisekarte" element={<Speisekarte />}></Route>
					<Route path="/Kontakt" element={<Kontakt />}></Route>
					<Route path="/Oeffnungszeiten" element={<Oeffnungszeiten />}></Route>
					<Route path="/Galerie" element={<Galerie />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
