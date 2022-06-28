import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

interface Props {
	title?: string;
	className?: string;
	style?: CSSProperties;
}

// Es el equivalente a crear una interfaz para definir el tipo del title
export const ProductTitle = ({ title, className, style }: Props) => {
	const { product } = useContext(ProductContext);
	const titleToShow = title ? title : product.title;

	return (
		<span className={`${styles.productDescription} ${className}`} style={style}>
			{titleToShow}
		</span>
	);
};
