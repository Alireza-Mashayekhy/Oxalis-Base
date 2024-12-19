import 'react-toastify/dist/ReactToastify.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/globals.css';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';

import { PrimeReactProvider } from 'primereact/api';
import { Flip, ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/components/GlobalStyle';
import PrimeReactStyle from '@/styles/components/PrimeReactStyle';

import { useIsAuthenticated } from './hooks';
import Authenticated from './layouts/authenticated';
import Unauthenticated from './layouts/unauthenticated';
import { lightTheme } from './styles/theme';

const App = () => {
    const isAuthenticated = useIsAuthenticated();

    const renderLayout = () => {
        if (isAuthenticated) {
            return <Authenticated />;
        }
        return <Unauthenticated />;
    };

    return (
        <PrimeReactProvider>
            <ThemeProvider theme={lightTheme}>
                {renderLayout()}
                <GlobalStyle />
                <PrimeReactStyle />

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="colored"
                    transition={Flip}
                />
            </ThemeProvider>
        </PrimeReactProvider>
    );
};

export default App;
