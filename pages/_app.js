import { Provider } from "react-redux";
import { useStore } from "@/store/store.config";
import GlobalStyles from "@/styles/globalStyles";

import "normalize.css/normalize.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  );
}
