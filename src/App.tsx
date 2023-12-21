import Markdown from "marked-react";
import { content } from "./data";

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 16 }}>
      <Markdown>{content}</Markdown>
      <hr />
      <a href="mynotepad://">メモ帳を開く</a>
    </div>
  );
}

export default App;
