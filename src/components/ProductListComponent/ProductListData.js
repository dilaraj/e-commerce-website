import product1 from '../../assets/images/products/Product1/product1.png';
import product1_1 from '../../assets/images/products/Product1/product1_1.jpeg';
import product1_2 from '../../assets/images/products/Product1/product1_2.jpeg';
import product1_3 from '../../assets/images/products/Product1/product1_3.jpeg';

import product2 from '../../assets/images/products/Product2/product2.png';
import product2_1 from '../../assets/images/products/Product2/product2_1.jpeg';
import product2_2 from '../../assets/images/products/Product2/product2_2.jpeg';
import product2_3 from '../../assets/images/products/Product2/product2_3.jpeg';

import product3 from '../../assets/images/products/Product3/product3.png';
import product3_1 from '../../assets/images/products/Product3/product3_1.webp';
import product3_2 from '../../assets/images/products/Product3/product3_2.webp';
import product3_3 from '../../assets/images/products/Product3/product3_3.webp';

import product4 from '../../assets/images/products/Product4/product4.png';
import product4_1 from '../../assets/images/products/Product4/product4_1.png';
import product4_2 from '../../assets/images/products/Product4/product4_2.png';
import product4_3 from '../../assets/images/products/Product4/product4_3.png';


const ProductListData = [
    {
        id: 1,
        src: product1,// create a src file for the original images and leave the array for the other images.
        images: [product1_1, product1_2, product1_3],
        brand: 'Off-White',
        name: 'Out Of Office "Ooo" sneakers',
        price: '$775'
    },
    {
        id: 2,
        src: product2,
        images: [product2_1, product2_2, product2_3],
        brand: 'Nike',
        name: 'Nike Air Force Premium',
        price: '$200'
    },
    {
        id: 3,
        src: product3,
        images: [product3_1, product3_2, product3_3],
        brand: 'Nike',
        name: 'Nike Air Force Premium',
        price: '$98.23'
    },
    {
        id: 4,
        src: product4,
        images: [product4_1, product4_2, product4_3],
        brand: 'adidas',
        name: 'DAILY 3.0 SHOES',
        price: '$98.99'
    }
]

export default ProductListData;