import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/output.css";

import router from "./router.tsx";
import { persistedStore, store } from "./redux/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ReduxProvider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </ReduxProvider>
);
