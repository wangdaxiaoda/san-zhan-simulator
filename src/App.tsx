import React from "react";
import { Tabs } from "antd";
import PropertyResult from "./pages/PropertyResult";
import "./App.css";

const TAB_KEYS = {
  /** 属性计算器 */
  PROPERTY: "1",
};

const TAB_NAMES = {
  [TAB_KEYS.PROPERTY]: "属性计算器",
};

function App() {
  return (
    <div className="root__app">
      <Tabs>
        <Tabs.TabPane
          tabKey={TAB_KEYS.PROPERTY}
          tab={TAB_NAMES[TAB_KEYS.PROPERTY]}
        >
          <PropertyResult />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
