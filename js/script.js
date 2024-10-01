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
        category: "Pets"
      },
      {
        name: "CANON EOS DSLR Camera",
        price: "$360",
        rating: 4.5,
        reviews: 95,
        img: "../Assets/DSLR.png",
        category: "Camera"
      },
      {
        name: "ASUS FHD Gaming Laptop",
        price: "$700",
        rating: 5,
        reviews: 325,
        img: "../assets/Frame 604.svg",
        categories:"computers"
      },
    {
      name: "Quilted Satin Jacket",
      price: "$660",
      rating: 4,
      reviews: 55,
      img: "../assets/Frame 608.png",
      category: "Clothing"
    },

    {
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      rating: 3.8,
      reviews: 55,
      img: "../Assets/shooter USB.png",
      category: "Gaming"
    },
    {
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 3.5,
      reviews: 35,
      img: "../Assets/cesar.png",
      category: "Pets"
    },

    
    // Add more products similarly...
  ];
  
// Select the category list and product list elements
const categoryList = document.querySelector('.category-list');
const productList = document.querySelector('.product-list');

// Generate category list
categories.forEach(category => {
    const li = document.createElement('li');
    li.classList.add('category-items');
    li.innerHTML = `
      <img src="${category.img}" alt="${category.name}" class="category-image" />
      <div class="product-name">${category.name}</div>
    `;
    categoryList.appendChild(li);
});

// Function to display products based on category (or show all)
const displayProducts = (selectedCategory = null) => {
    productList.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        if (selectedCategory === null || product.category === selectedCategory) {
            const li = document.createElement('li');
            li.classList.add('product-item');
            li.innerHTML = `
                <div class="bg-wrap">
                    <div class="product-container">
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
                            ${'<img src="../assets/Vector.svg"alt="Filled Star" class="star-image" />'.repeat(Math.floor(product.rating))}
                            ${product.rating % 1 !== 0 ? '<img src="../assets/Vector2.svg" alt="Half Star" class="star-image" />' : ''}
                            ${'<img src="../assets/Vector1.svg"alt="Empty Star" class="star-image" />'.repeat(5 - Math.ceil(product.rating))}
                        </div>
                        <div class="review">(${product.reviews})</div>
                    </div>
                </div>`;
            productList.appendChild(li);
        }
    });
};

// Initial call to display all products (optional)
displayProducts();

  
  // Example: Filter by category
  // If you want to filter by a specific category, call the function like this:
  // displayProducts("Gaming"); // This will display only "Gaming" products
  