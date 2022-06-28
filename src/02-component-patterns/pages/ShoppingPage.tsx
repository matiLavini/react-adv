import React from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

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
			<ProductCard product={product}>
				<ProductImage />
				<ProductTitle />
				<ProductButtons />
			</ProductCard>
		</div>
	);
};
