import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./userContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
