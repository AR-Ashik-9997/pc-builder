import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      {getLayout(
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      )}
    </Provider>
  );
}
