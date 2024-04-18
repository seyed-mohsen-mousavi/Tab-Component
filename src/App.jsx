import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  return (
    <div className="tab">
      <div className="tab__header">
        <button>ITEM one</button>
        <button>ITEM two</button>
        <button>ITEM three</button>
      </div>
      <div className="tab__contet"></div>
    </div>
  );
}

export default App;
