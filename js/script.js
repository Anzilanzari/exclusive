// Category data
const categories = [
    { name: "Phones", img: "../Assets/CellPhone.svg" },
    { name: "Computers", img: "../Assets/Computer.svg" },
    { name: "SmartWatch", img: "../Assets/SmartWatch.svg" },
    { name: "HeadPhones", img: "../assets/category-Headphone.svg" },
    { name: "Gaming", img: "../Assets/Gamepad.svg" },
    { name: "Camera", img: "../Assets/Camera.svg" }
  ];
  
  // Product data with categories (but category will be hidden from user)
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
        // No topLeftImg for this product
    },
    {
        name: "ASUS FHD Gaming Laptop",
        price: "$700",
        rating: 5,
        reviews: 325,
        img: "../assets/Frame 604.svg" ,
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
    smallImg: "../Assets/red and red.png", // Small image
    topLeftImg: "../Assets/New Button.png" // Example top-left image for this product
},
{
  name: "Jr.Zoom Scoccer Cleats",
  price: "$1160",
  rating: 5,
  reviews: 35,
  img: "../assets/Zoom Soccer.png",
  category: "boots",
  smallImg: "../Assets/yellow and red.png", // Small image
  topLeftImg: "../Assets/New Button.png" // Example top-left image for this product
},
{
  name: "GP11 Shooter USB Gamepad",
  price: "$600",
  rating: 4.5,
  reviews: 55,
  img: "../assets/Shooter USB.png",
  category: "Gaming",
  smallImg: "../Assets/red and black.png", // Small image
  topLeftImg: "../Assets/New Button.png" // Example top-left image for this product
},
{
  name: "Quilted Satin Jacket",
  price: "$660",
  rating: 4.5,
  reviews: 55,
  img: "../assets/Frame 608.png",
  category: "dress",
  smallImg: "../Assets/green and orange.png", // Small image
  topLeftImg: "../Assets/New Button.png" // Example top-left image for this product
}

];

  
// Select the category list and product list elements
// Select the category list and product list elements
const categoryList = document.querySelector('.category-list');
const productList = document.querySelector('.product-list');

// Function to display products based on category (or show all)
const displayProducts = (selectedCategory = null) => {
    productList.innerHTML = ''; // Clear existing products

    // Filter the products by category or show all if no category is selected
    let filteredProducts = products.filter(product => {
        return selectedCategory === null || product.category.toLowerCase() === selectedCategory.toLowerCase();
    });

    // Limit to 8 products
    filteredProducts = filteredProducts.slice(0, 8);

    // Render filtered products
    filteredProducts.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('product-item');
        li.innerHTML = `
            <div class="bg-wrap">
                <div class="product-container">
                    ${product.topLeftImg ? `
                    <div class="top-left-image">
                        <img src="${product.topLeftImg}" alt="Top Left Image" class="top-left-img" />
                    </div>
                    ` : ''}
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
            </div>
            ` : ''}
        `;
        productList.appendChild(li);
    });
};

// Function to generate the category list
const generateCategoryList = () => {
    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('category-items');
        li.innerHTML = `
            <img src="${category.img}" alt="${category.name}" class="category-image" />
            <div class="product-name">${category.name}</div>
        `;
        categoryList.appendChild(li);

        // Add click event listener for each category
        li.addEventListener('click', () => {
            const selectedCategory = category.name; // Use the name of the clicked category
            displayProducts(selectedCategory); // Filter and display products based on category
        });
    });
};

// Initially generate the category list (once)
generateCategoryList();

// Initially display all products (up to 8)
displayProducts();





  
  // Example: Filter by category
  // If you want to filter by a specific category, call the function like this:
  // displayProducts("Gaming"); // This will display only "Gaming" products
  