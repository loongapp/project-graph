import "driver.js/dist/driver.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/index.css";

const el = document.getElementById("root")!;

// 建议挂载根节点前的一系列操作统一写成函数，
// 在这里看着清爽一些，像一个列表清单一样。也方便调整顺序

(async () => {
  const root = createRoot(el);
  root.render(<App></App>);
})();
