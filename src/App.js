import "./App.css";

import { Default } from "./layouts/default";

import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";

function App() {
	return (
		<Default>
			<RouterProvider router={routes} />
		</Default>
	);
}

export default App;
