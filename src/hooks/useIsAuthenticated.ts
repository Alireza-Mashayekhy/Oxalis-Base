import { useEffect,useState } from 'react';

const useIsAuthenticated = (): boolean => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const token =
            localStorage.getItem('accessToken') ||
            sessionStorage.getItem('accessToken');
        return !!token;
    });

    useEffect(() => {
        const handleStorageChange = () => {
            const token =
                localStorage.getItem('accessToken') ||
                sessionStorage.getItem('accessToken');
            setIsAuthenticated(!!token);
        };

        window.addEventListener('storage', handleStorageChange);

        // همچنین تغییرات در همان تب را گوش دهید
        const intervalId = setInterval(() => {
            const token =
                localStorage.getItem('accessToken') ||
                sessionStorage.getItem('accessToken');
            setIsAuthenticated(!!token);
        }, 500);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(intervalId);
        };
    }, []);

    return isAuthenticated;
};

export default useIsAuthenticated;
