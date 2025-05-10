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
        price: '$775',
        description: 'Off-White "Out of Office" high-top sneakers in light blue leather with dark shades. White details, round toe, lace-up closure, top strap detail, iconic tag patch, side frecce patch detail, rubber sole.',
        descriptionList: [
            'Composition: 100% Leather',
            'Sole: 100% Rubber',
            'Made In: China'
        ]
    },
    {
        id: 2,
        src: product2,
        images: [product2_1, product2_2, product2_3],
        brand: 'Nike',
        name: 'Nike Air Force Premium',
        price: '$200',
        description: "Layers upon layers of dimensional style—that's a force to be reckoned with. Offering both comfort and versatility, these kicks are rooted in heritage basketball culture. Collar materials pay homage to vintage sport while the subtle platform elevates your look, literally. The Gamma Force is forging its own legacy: court style that can be worn all day, wherever you go.",
        descriptionList: [
            'Colourway: Amber Brown',
            'Main Colour: Cream',
            'Material: Leather'
        ]
    },
    {
        id: 3,
        src: product3,
        images: [product3_1, product3_2, product3_3],
        brand: 'Nike',
        name: 'Nike Air Force Premium',
        price: '$98.23',
        description: "Launching as part of the ‘United in Victory’ Collection, the Nike Women’s Air Force 1 LX ‘Hemp’ features a bold all-over pattern made up of a repeating ‘N’ and ‘U’ — short for ‘Nike United — covering the upper and midsole, both wrapped in Hemp-colored textile. Tan leather detailing settles on the signature Swoosh and Nike-branded back tab. ‘NU’ branding appears on the woven tongue tag, while ‘AFV’ lace jewels shine in a metallic gold finish.",
        descriptionList: [
            'Material: Textile',
            'Colourway: Hemp/Black/Summit White',
            'Main Colour: Tan'
        ]
    },
    {
        id: 4,
        src: product4,
        images: [product4_1, product4_2, product4_3],
        brand: 'adidas',
        name: 'DAILY 3.0 SHOES',
        price: '$98.99',
        description: "Lace-up canvas trainers with modern style. A fresh take on a classic, these adidas shoes blend a heritage feel with modern materials and design. Your walk across campus has never looked or felt this good.",
        descriptionList: [
            'Colour: Off White/ Off White / Bright Red',
            'Materials: Rubber outsole with valcanised look',
            'OrthoLite® sockliner',
            'Washed canvas upper'
        ]
    }
]

export default ProductListData;