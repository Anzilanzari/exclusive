        // Language Dropdown
let  dropDown=document.querySelector(".lang-down")
let  language=document.querySelector(".top-language")
let  downArrow=document.querySelector(".down-arrow")
let  langList=document.querySelector(".lang-list")

language.addEventListener('click', ()=>{
      dropDown.classList.toggle("drop")
      language.classList.toggle("drop")
      downArrow.classList.toggle("drop")
      
})

let lang=document.querySelectorAll('.lang')
lang.forEach((click)=>{
    click.addEventListener('click', (e)=>{
        let select=e.target.textContent
        let eng=document.querySelector('.eng')
        eng.innerHTML=select
    })
})

        // Language Dropdown
  
         //  Menu
let hamburger=document.querySelector(".drop-menu")
let menu=document.querySelector(".menu-wrap")
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
})


              //Menu
const categoryList=[
  {
    "id":0,
    "img":"../Assets/CellPhone.svg",
    "category":"Phones"
  },
  {
    "id":1,
    "img":"../Assets/Computer.svg",
    "category":"Computers"
  },
  {
    "id":2,
    "img":"../Assets/SmartWatch.svg",
    "category":"SmartWatch"
  },
  {
    "id":3,
    "img":"../Assets/eadphone.svg",
    "category":"HeadPhones"
  },
  {
    "id":4,
    "img":"../Assets/Gamepad.svg",
    "category":"Gaming"
  },
  {
    "id":5,
    "img":"../Assets/Camera.svg",
    "category":"Camera"
  }
]


let categoryMap=categoryList.map((item)=>{

     return  `<li class="category-items" data-id="${item.category}">
                  <img src="${item.img}" class="category-image">
                  <div class="product-name">${item.category}</div>
             </li>`

            
}).join('')
console.log(categoryMap)

let categoryItem=document.querySelector('.category-list')
categoryItem.innerHTML=categoryMap
console.log(categoryItem.innerHTML)





  
const productList=[
  {
    "id":0,
    "category": "Food",
    "title":"Breed Dry Dog Food",
    "image":"../Assets/cesar.png",
    "imgAlt":"cesar.png",
    "cost":100,
    "new":"hidden",
    "rating":"../Assets/Three Star.png",
    "review":35,
    "color":'',
    "colorAlt":''
  },
  {
    "id":1,
    "category": "Camera",
    "title":"CANON EOS DSLR Camera",
    "image":"../Assets/DSLR.png",
    "imgAlt":"DSLR.png",
    "cost":360,
    "new":"hidden",
    "rating":"../Assets/Four Star.png",
    "review":95,
    "color":'',
    "colorAlt":''
  },
  {
    "id":2,
    "category": "Computers",
    "title":"ASUS FHD Gaming Laptop",
    "image":"../Assets/ideapad-gaming-3i-01-500x500 1.png",
    "imgAlt":"Electric car.png",
    "cost":960,
    "new":"hidden",
    "rating":"../Assets/Five star.png",
    "review":325,
    "color":'',
    "colorAlt":''
  },
  {
    "id":3,
    "category": "Cosmetics",
    "title":"Curology Product Set",
    "image":"../Assets/Curology.png",
     "imgAlt":"Curology.png",
    "cost":500,
    "new":"hidden",
    "rating":"../Assets/Four Star.png",
    "review":145,
    "color":'',
    "colorAlt":''
  },
  {
    "id":4,
    "category": "Gaming",
    "title":"Kids Electric Car",
    "image":"../Assets/Electric car.png",
    "imgAlt":"ideapad-gaming.png",
    "new":'visible',
    "cost":700,
    "rating":"../Assets/Five star.png",
    "review":65,
    "color":"../Assets/red and red.png",
    "colorAlt":'red and red.png'
  },
  {
    "id":5,
    "category": "Sports",
    "title":"Jr. Zoom Soccer Cleats",
    "image":"../Assets/Zoom Soccer.png",
    "imgAlt":"Zoom Soccer.png",
    "cost":1160,
    "new":"hidden",
    "rating":"../Assets/Five star.png",
    "review":95,
    "color":"../Assets/yellow and red.png",
    "colorAlt":'yellow and red.png'
  },
  {
    "id":6,
    "category": "Gaming",
    "title":"GP11 Shooter USB Gamepad",
    "image":"../Assets/shooter USB.png",
    "imgAlt":"shooter USB.png",
    "cost":660,
    "new":'visible',
    "rating":"../Assets/Four Star.png",
    "review":55,
    "color":"../Assets/red and black.png",
    "colorAlt":'red and black.png'
  },
  {
    "id":7,
    "category": "Jacket",
    "title":"Quilted Satin Jacket ",
    "image":"../Assets/jacket .png",
    "imgAlt":"jacket .png",
    "cost":660,
    "new":"hidden",
    "rating":"../Assets/Four Star.png",
    "review":55,
    "color":"../Assets/green and orange.png",
    "colorAlt":'green and orange.png'
  },
]


function productMap(products){
  const productItem=document.querySelector('.product-list')

  productItem.innerHTML=''
  products.map((card)=>{

       let addDiv=document.createElement('div') 
       addDiv.classList.add('append')
       let prodJs=(addDiv.innerHTML=` 
        <li class="product-item">
            <div class="bg-wrap">
          <div class="product-container">
              <img src="${card.image}" alt="${card.imgAlt}" class="product-png"/>
              <div class="heart">
                 <img src="../Assets/wishlist.svg" alt="wishlist.svg" />
              </div>
              <div class="quick">
                  <img src="../Assets/Quick View.svg" alt="quick-view.svg" />
              </div>
              <div class="new" ${card.new}>New</div>
          </div>
          <button class="cart">Add to Cart</button>
      </div>
      <div class="product-info">
          <div class="product-name">
                    ${card.title}
          </div>
          <div class="rating">
              <div class="rate">$${card.cost}</div>
              <div class="star-rate">
                  <img src="${card.rating}" alt="four-star.png" class="star-img">
              </div>
              <div class="review">(${card.review})</div>
          </div>
          <div class="color"><img src="${card.color}" alt="${card.colorAlt}" ></div>
      </div>
     </li>
    `)
          productItem.appendChild(addDiv)
}
)
}
productMap(productList)


function handleCategoryClick(event) {
  const category = event.currentTarget.getAttribute('data-id');
  const filteredProducts = productList.filter(product => product.category === category);
  const result=document.querySelector('.result')
  if (filteredProducts.length > 0) {
    productMap(filteredProducts); 
    result.innerHTML=`${filteredProducts.length} Products Found Under ${category} Category`
  } else {
    productMap([]);
    result.innerHTML=`No Products Found in the ${category} Category`
  }
}

document.querySelectorAll('.category-items').forEach(item => {
  item.addEventListener('click', handleCategoryClick);
  
});


                // Cart Count

let cartButton=document.getElementsByClassName("cart")
let count=document.getElementById("product-count")
let value=0
for (let i=0; i<cartButton.length;i++)
    cartButton[i].addEventListener('click',()=>{

  value+=1
  count.innerHTML=value 
})

let like=document.querySelectorAll('.heart')
let favCount=document.querySelector('.fav-count')
for(i=0; i<like.length;i++)
  like[i].addEventListener('click',()=>{
     let count
     count=+1
     favCount.innerHTML=count
    // if (count>1){
    //   favCount.innerHTML=count--
    // }
   })


       
                                  // Cart Count