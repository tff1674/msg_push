import "moment/locale/zh-cn";

import App from "./pages/App";
import { ConfigProvider } from "antd";
// import { Hupu } from "@/store/configStore";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import zhCN from "antd/es/locale/zh_CN";

ReactDOM.render(
    // <StrictMode>
    // <Hupu>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>,
    // </Hupu>,
    // </StrictMode>
    document.getElementById("root"),
);
