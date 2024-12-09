import { createContext, useState } from 'react';

export const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
    const [refreshPosts, setRefreshPosts] = useState(false);

    return (
        <RefreshContext.Provider value={{ refreshPosts, setRefreshPosts }}>
            {children}
        </RefreshContext.Provider>
    );
};