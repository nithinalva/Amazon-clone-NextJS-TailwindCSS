import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import {store} from '../src/app/store';

import {Provider as AuthProvider} from 'next-auth/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'



function MyApp({ Component, pageProps }) {

  let persistor=persistStore(store)

  return (
    
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
      </Provider>
  </AuthProvider>
  )
  
}

export default MyApp
