import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

// Es el equivalente a crear una interfaz para definir el tipo del title
export const ProductTitle = ({ title }: { title?: string }) => {
	const { product } = useContext(ProductContext);
	const titleToShow = title ? title : product.title;

	return <span className={styles.productDescription}>{titleToShow}</span>;
};
