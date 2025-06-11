import ReactDOM from "react-dom/client";

import "./index.css";
import Button from "./Button";

const App = () => (
  <div className="mt-[32px] text-3xl mx-auto max-w-6xl border-[2px] border-gray-300 p-[16px] ronded-lg shadow-lg">
    <div className="mb-[16px]">Name: react-remote</div>
    <Button />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);