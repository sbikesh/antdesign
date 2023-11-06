import { Button, ConfigProvider } from "antd";
import React, { useState } from "react";
import App from "./App";

import light from "./tokens/light.json";
import dark from "./tokens/dark.json";

const ThemedApp = () => {
  const [theme, setTheme] = useState(light);

  const { components, ...token } = theme;

  return (
    <ConfigProvider theme={{ token, components }}>
      <Button
        onClick={() => (theme === light ? setTheme(dark) : setTheme(light))}
        style={{ margin: 20 }}
      >
        Change theme
      </Button>
      <App />
    </ConfigProvider>
  );
};

export default ThemedApp;
