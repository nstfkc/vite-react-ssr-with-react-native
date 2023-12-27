import { jsx, Fragment } from "react/jsx-runtime";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { View, Text } from "react-native-web";
const Test = () => {
  return /* @__PURE__ */ jsx(View, { children: /* @__PURE__ */ jsx(Text, { children: "React native web" }) });
};
function App() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Test, {}) });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
