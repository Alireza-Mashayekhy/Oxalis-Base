import React from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/globals.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import { useSelector } from 'react-redux';
import { getTheme } from './redux/selectors';
import Authenticated from './layouts/authenticated';

const App = () => {
    const theme = useSelector(getTheme);

    const renderLayout = () => {
        return <Authenticated />;
    };

    return (
        <PrimeReactProvider>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                {renderLayout()}
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
