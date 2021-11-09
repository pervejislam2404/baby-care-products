import { useContext } from 'react';
import { ProductContext } from './AuthContext';

const UseAuth = () => {
    return useContext(ProductContext)
};

export default UseAuth;