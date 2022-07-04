import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args : onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {
	const [counter, setCounter] = useState(((initialValues && initialValues.count) || value));
    const isMounted = useRef(false);
    
	const increaseBy = (value: number) => {
        console.log({counter})
        let newValue = Math.max(counter + value, 0);
        
        if (initialValues && initialValues.maxCount) {
           newValue = Math.min(newValue, initialValues.maxCount) ;
        }

        setCounter(newValue);
        
        onChange && onChange({count: newValue, product});
	};

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value);
    }, [value]);

    const reset = () => {
        setCounter((initialValues && initialValues.count) || value);
    }

    return {
        counter,
        increaseBy,
        isMaxCountReached: ((initialValues && initialValues.count) && ((initialValues && initialValues.maxCount) === counter)) as boolean,
        maxCount: initialValues && initialValues.maxCount,
        reset
    };
}