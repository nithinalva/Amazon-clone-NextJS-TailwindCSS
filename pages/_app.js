import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import {store} from '../src/app/store';

import {Provider as AuthProvider} from 'next-auth/client'
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
  
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
      <Component {...pageProps} />

      </Provider>
  </AuthProvider>
  )
  
}

export default MyApp
