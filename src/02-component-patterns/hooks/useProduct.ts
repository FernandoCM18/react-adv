import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {

    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        setCounter( newValue);
        // if (onChange) {
        //     onChange();
        // } Es lo mismo que el de abajo pero es una forma de hacerlo mas corta
        onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy
    }
    
}
