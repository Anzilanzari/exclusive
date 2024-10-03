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
        smallImg: "../Assets/small-dog.png", // Small image
        topLeftImg: "../Assets/new-badge.png" // Top-left image (e.g., a badge for new products)
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
        img: "../assets/Frame 604.svg",
        category: "Computers",
        smallImg: "../Assets/yellow and red.png", // Small image
        topLeftImg: "../Assets/New Button.png" // Example top-left image for this product
    }
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
      }
  });
};


// Initial call to display all products (optional)
displayProducts();

  
  // Example: Filter by category
  // If you want to filter by a specific category, call the function like this:
  // displayProducts("Gaming"); // This will display only "Gaming" products
  