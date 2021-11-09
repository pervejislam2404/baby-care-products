import React, { createContext } from 'react';
import useFirebase from '../../../Hooks/useFirebase';

export const ProductContext = createContext()
const AuthContext = ({children}) => {
    const userValue = useFirebase()
    return (
        <ProductContext.Provider value={userValue}>
            {children}
        </ProductContext.Provider>
    );
};

export default AuthContext;