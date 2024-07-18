import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./styles/output.css";

import "./styles/output.css";
import router from "./router.tsx";
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
