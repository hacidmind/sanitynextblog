// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp






import 'bootstrap/dist/css/bootstrap.css'; //Just added
import '../styles/globals.css';

import { useEffect } from "react"; //added
 
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
 
  return <Component {...pageProps} />;
}


export default MyApp