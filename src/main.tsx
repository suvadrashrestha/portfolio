import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./router/route";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

// document.addEventListener("mousemove", (e) => {
//   const x = e.clientX;
//   const y = e.clientY;

//   const container = document.getElementById("topContainer");
//   if (container) {
//     const width = container.offsetHeight / 2;
//     container.style.top = y - width + "px";
//     container.style.left = x - width + "px";
//   }
// });
