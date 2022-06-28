import React from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
const product = {
	id: '1',
	title: 'Coffe Mug',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<div>Shopping Store</div>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}></div>
			<ProductCard product={product} className='bg-dark text-white'>
				<ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
				<ProductTitle className='text-bold' />
				<ProductButtons className='custom-buttons' />
			</ProductCard>
			<ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
				<ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
				<ProductTitle style={{ fontWeight: 'bold' }} />
				<ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
			</ProductCard>
		</div>
	);
};
