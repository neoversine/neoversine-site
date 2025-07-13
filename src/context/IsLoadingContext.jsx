/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const IsLoadingContext = createContext();

export const IsLoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </IsLoadingContext.Provider>
    );
};

const useIsLoading = () => {
    const context = useContext(IsLoadingContext)
    if (!context) {
        throw new Error('useIsLoading must be used within an IsLoadingProvider')
    }
    return context
}

export { useIsLoading }