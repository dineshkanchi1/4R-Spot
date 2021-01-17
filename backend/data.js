import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Dinesh',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456',8),
            isAdmin: true
        },
        {
            name: 'Pavan',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456',8),
            isAdmin: false
        },
    ],
    products: [
        {
            name:'Peacock',
            category:'Bird',
            image:'/images/bird1.jpg',
            price:120,
            countInStock:10,
            rating:4.5,
            numReviews:10,
            description: 'high quality product'
        },
        {
            name:'Pigeon',
            category:'Bird',
            image:'/images/bird2.jpg',
            price:120,
            countInStock:20,
            rating:5,
            numReviews:10,
            description: 'high quality product'
        },
        {
            name:'Swallow',
            category:'Bird',
            image:'/images/bird3.jpg',
            price:120,
            countInStock:0,
            rating:3.5,
            numReviews:10,
            description: 'high quality product'
        },
        {
            name:'Crow',
            category:'Bird',
            image:'/images/bird4.jpg',
            price:240,
            rating:4,
            countInStock:5,
            numReviews:10,
            description: 'high quality product'
        },
        {
            name:'Dove',
            category:'Bird',
            image:'/images/bird5.jpg',
            price:600,
            countInStock:2,
            rating:5,
            numReviews:10,
            description: 'high quality product'
        },
    ],
};

export default data;