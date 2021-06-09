import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import {store} from '../src/app/store';

import {Provider as AuthProvider} from 'next-auth/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Currency } from '../src/Currency';



function MyApp({ Component, pageProps }) {

  let persistor=persistStore(store)

  return (
    <Currency>
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
      </Provider>
  </AuthProvider>
  </Currency>
  )
  
}

export default MyApp
