// pages/_app.tsx
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import "../styles/globals.css"; // Add any other global styles if needed

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
