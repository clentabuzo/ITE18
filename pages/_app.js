import { AuthProvider } from '../added_file/AuthContext';
import Header from '@/added_file/Header';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header/>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;