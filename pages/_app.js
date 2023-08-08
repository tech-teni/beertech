import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store  from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'


export default function App({ Component, pageProps }) {
  let persistor = persistStore(store)

  return(
          <PersistGate loading={null} persistor={persistor}>

                  <Provider store={store}>
                      <Component {...pageProps} />
                </Provider>

        </PersistGate>

)}
