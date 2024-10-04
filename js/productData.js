// productData.js
const products = [
    {
        name: "Breed Dry Dog Food",
        price: "$100",
        rating: 3.5,
        reviews: 35,
        img: "../Assets/cesar.png",
        category: "Pets",
    },
    {
        name: "CANON EOS DSLR Camera",
        price: "$360",
        rating: 4.5,
        reviews: 95,
        img: "../Assets/DSLR.png",
        category: "Camera",
    },
    {
        name: "ASUS FHD Gaming Laptop",
        price: "$700",
        rating: 5,
        reviews: 325,
        img: "../assets/Frame 604.svg",
        category: "Computers",
    },
    {
        name: "Curology Product Set",
        price: "$500",
        rating: 4,
        reviews: 325,
        img: "../assets/curology.png",
        category: "Cream",
    },
    {
        name: "Kids Eletric Car",
        price: "$960",
        rating: 5,
        reviews: 65,
        img: "../assets/Electric car.png",
        category: "toy",
        smallImg: "../Assets/red and red.png",
        topLeftImg: "../Assets/New Button.png"
    },
    {
        name: "Jr.Zoom Soccer Cleats",
        price: "$1160",
        rating: 5,
        reviews: 35,
        img: "../assets/Zoom Soccer.png",
        category: "boots",
        smallImg: "../Assets/yellow and red.png",
        topLeftImg: "../Assets/New Button.png"
    },
    {
        name: "GP11 Shooter USB Gamepad",
        price: "$600",
        rating: 4.5,
        reviews: 55,
        img: "../assets/Shooter USB.png",
        category: "Gaming",
        smallImg: "../Assets/red and black.png",
        topLeftImg: "../Assets/New Button.png"
    },
    {
        name: "Quilted Satin Jacket",
        price: "$660",
        rating: 4.5,
        reviews: 55,
        img: "../assets/Frame 608.png",
        category: "dress",
        smallImg: "../Assets/green and orange.png",
        topLeftImg: "../Assets/New Button.png"
    }
];


// allProducts.js
const productContainer = document.getElementById('productContainer');

const displayAllProducts = () => {
    products.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('product-item');

        li.innerHTML = `
            <div class="bg-wrap">
                <div class="product-container">
                    ${product.topLeftImg ? `
                    <div class="top-left-image">
                        <img src="${product.topLeftImg}" alt="Top Left Image" class="top-left-img" />
                    </div>` : ''}
                    <img src="${product.img}" alt="${product.name}" class="product-png"/>
                    <div class="heart">
                        <img src="../Assets/wishlist.svg" alt="wishlist.svg" />
                    </div>
                    <div class="quick">
                        <img src="../Assets/Quick View.svg" alt="quick-view.svg" />
                    </div>
                </div>
                <button class="cart">Add to Cart</button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="rating">
                    <div class="rate">${product.price}</div>
                    <div class="star-rate">
                        ${'<img src="../assets/Vector.svg" alt="Filled Star" class="star-image" />'.repeat(Math.floor(product.rating))}
                        ${product.rating % 1 !== 0 ? '<img src="../assets/Vector2.svg" alt="Half Star" class="star-image" />' : ''}
                        ${'<img src="../assets/Vector1.svg" alt="Empty Star" class="star-image" />'.repeat(5 - Math.ceil(product.rating))}
                    </div>
                    <div class="review">(${product.reviews})</div>
                </div>
            </div>
            ${product.smallImg ? `
            <div class="extra-image">
                <img src="${product.smallImg}" alt="Small Image" class="small-image"/>
            </div>` : ''}
        `;
        productContainer.appendChild(li);
    });
};

// Display all products on page load
displayAllProducts();

