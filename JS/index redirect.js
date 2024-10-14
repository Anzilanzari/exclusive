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
        downArrow.classList.toggle("drop")
    })
})
window.addEventListener('click',()=>{
    
})
            //  Menu
let hamburger=document.querySelector(".drop-menu")
let menu=document.querySelector(".menu-wrap")
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
})
function toShow() {
  // Change the URL path to your desired page
  window.location.href = 'HTML/Index.html';
}
        
const allProduct=[
    {
      "id":0,
      "category": "Food",
      "title":"Breed Dry Dog Food",
      "image":"../Assets/cesar.png",
      "imgAlt":"cesar.png",
      "cost":100,
      "new":"hidden",
      "discount":'',
      "red":'hidden',
      "rating":"../Assets/Three Star.png",
      "review":35,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":1,
      "category": "Camera",
      "title":"CANON EOS DSLR Camera",
      "image":"../Assets/DSLR.png",
      "imgAlt":"DSLR.png",
      "cost":360,
      "new":"hidden",
      "discount":'',
      "red":'hidden',
      "rating":"../Assets/Four Star.png",
      "review":95,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":2,
      "category": "Computer",
      "title":"ASUS FHD Gaming Laptop",
      "image":"../Assets/ideapad-gaming-3i-01-500x500 1.png",
      "imgAlt":"Electric car.png",
      "cost":960,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Five star.png",
      "review":325,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":3,
      "category": "Cosmetics",
      "title":"Curology Product Set",
      "image":"../Assets/Curology.png",
       "imgAlt":"Curology.png",
      "cost":500,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Four Star.png",
      "review":145,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":4,
      "category": "Game",
      "title":"Kids Electric Car",
      "image":"../Assets/Electric car.png",
      "imgAlt":"ideapad-gaming.png",
      "new":'visible',
      "cost":700,
      "discount":'',
      "red":'hidden',
      "rating":"../Assets/Five star.png",
      "review":65,
      "color":"../Assets/red and red.png",
      "colorAlt":'red and red.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":5,
      "category": "Sports",
      "title":"Jr. Zoom Soccer Cleats",
      "image":"../Assets/Zoom Soccer.png",
      "imgAlt":"Zoom Soccer.png",
      "cost":1160,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Five star.png",
      "review":95,
      "color":"../Assets/yellow and red.png",
      "colorAlt":'yellow and red.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":6,
      "category": "Game",
      "title":"GP11 Shooter USB Gamepad",
      "image":"../Assets/shooter USB.png",
      "imgAlt":"shooter USB.png",
      "cost":660,
      "discount":'',
      "red":'hidden',
      "new":'visible',
      "rating":"../Assets/Four Star.png",
      "review":55,
      "color":"../Assets/red and black.png",
      "colorAlt":'red and black.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":7,
      "category": "Jacket",
      "title":"Quilted Satin Jacket ",
      "image":"../Assets/jacket .png",
      "imgAlt":"jacket .png",
      "cost":660,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Four Star.png",
      "review":55,
      "color":"../Assets/green and orange.png",
      "colorAlt":'green and orange.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
      
    },
    {
      "id":8,
      "category": "Food",
      "title":"Breed Dry Dog Food",
      "image":"../Assets/cesar.png",
      "imgAlt":"cesar.png",
      "cost":100,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Three Star.png",
      "review":35,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":9,
      "category": "Camera",
      "title":"CANON EOS DSLR Camera",
      "image":"../Assets/DSLR.png",
      "imgAlt":"DSLR.png",
      "cost":360,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Four Star.png",
      "review":95,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":10,
      "category": "Computer",
      "title":"ASUS FHD Gaming Laptop",
      "image":"../Assets/ideapad-gaming-3i-01-500x500 1.png",
      "imgAlt":"Electric car.png",
      "cost":960,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Five star.png",
      "review":325,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":11,
      "category": "Cosmetics",
      "title":"Curology Product Set",
      "image":"../Assets/Curology.png",
       "imgAlt":"Curology.png",
      "cost":500,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Four Star.png",
      "review":145,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":12,
      "category": "Game",
      "title":"Kids Electric Car",
      "image":"../Assets/Electric car.png",
      "imgAlt":"ideapad-gaming.png",
      "new":'visible',
      "cost":700,
      "discount":'',
      "red":'hidden',
      "rating":"../Assets/Five star.png",
      "review":65,
      "color":"../Assets/red and red.png",
      "colorAlt":'red and red.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":13,
      "category": "Sports",
      "title":"Jr. Zoom Soccer Cleats",
      "image":"../Assets/Zoom Soccer.png",
      "imgAlt":"Zoom Soccer.png",
      "cost":1160,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Five star.png",
      "review":95,
      "color":"../Assets/yellow and red.png",
      "colorAlt":'yellow and red.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":14,
      "category": "Game",
      "title":"GP11 Shooter USB Gamepad",
      "image":"../Assets/shooter USB.png",
      "imgAlt":"shooter USB.png",
      "cost":660,
      "discount":'',
      "red":'hidden',
      "new":'visible',
      "rating":"../Assets/Four Star.png",
      "review":55,
      "color":"../Assets/red and black.png",
      "colorAlt":'red and black.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":15,
      "category": "Jacket",
      "title":"Quilted Satin Jacket ",
      "image":"../Assets/jacket .png",
      "imgAlt":"jacket .png",
      "cost":660,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Four Star.png",
      "review":55,
      "color":"../Assets/green and orange.png",
      "colorAlt":'green and orange.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
      
    },
    {
      "id":16,
      "category": "Game",
      "title":"HAVIT HV-G92 Gamepad",
      "image":"../Assets/g92.png",
      "imgAlt":"g92.png",
      "cost":120,
      "discount":40,
      "red":'',
      "new":"",
      "rating":"../Assets/Three Star.png",
      "review":88,
      "color":"",
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":160,
      "offSpan":"",
      "colFlex":"rating-down"
    },
    {
      "id":17,
      "category": "Computer",
      "title":" AK-900 Wired Keyboard",
      "image":"../Assets/ak.png",
      "imgAlt":"ak.png",
      "cost":960,
      "discount":35,
      "red":'',
      "new":"",
      "rating":"../Assets/Four Star.png",
      "review":75,
      "color":"",
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":1160,
      "offSpan":"",
      "colFlex":"rating-down"
    },
    {
      "id":18,
      "category": "Computer",
      "title":"IPS LCD Gaming Monitor",
      "image":"../Assets/g27.png",
      "imgAlt":"g27.png",
      "cost":370,
      "discount":30,
      "red":'',
      "new":"",
      "rating":"../Assets/Five star.png",
      "review":325,
      "color":"",
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":370,
      "offSpan":"",
      "colFlex":"rating-down"
    },
    {
      "id":19,
      "category": "Computer",
      "title":"RGB liquid CPU Cooler ",
      "image":"../Assets/gammaxx.png",
      "imgAlt":"Gamma.png",
      "cost":160,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Four Star.png",
      "review":145,
      "color":"",
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":170,
      "offSpan":"",
      "colFlex":"rating-down"
    },
    {
      "id":20,
      "category": "Food",
      "title":"Breed Dry Dog Food",
      "image":"../Assets/cesar.png",
      "imgAlt":"cesar.png",
      "cost":100,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Three Star.png",
      "review":35,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":21,
      "category": "Camera",
      "title":"CANON EOS DSLR Camera",
      "image":"../Assets/DSLR.png",
      "imgAlt":"DSLR.png",
      "cost":360,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Four Star.png",
      "review":95,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":22,
      "category": "Computer",
      "title":"ASUS FHD Gaming Laptop",
      "image":"../Assets/ideapad-gaming-3i-01-500x500 1.png",
      "imgAlt":"Electric car.png",
      "cost":960,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Five star.png",
      "review":325,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":23,
      "category": "Cosmetics",
      "title":"Curology Product Set",
      "image":"../Assets/Curology.png",
       "imgAlt":"Curology.png",
      "cost":500,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Four Star.png",
      "review":145,
      "color":'',
      "colorAlt":'',
      "colorDiv":'hidden',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":24,
      "category": "Game",
      "title":"Kids Electric Car",
      "image":"../Assets/Electric car.png",
      "imgAlt":"ideapad-gaming.png",
      "new":'visible',
      "cost":700,
      "discount":'',
      "red":'hidden',
      "rating":"../Assets/Five star.png",
      "review":65,
      "color":"../Assets/red and red.png",
      "colorAlt":'red and red.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":25,
      "category": "Sports",
      "title":"Jr. Zoom Soccer Cleats",
      "image":"../Assets/Zoom Soccer.png",
      "imgAlt":"Zoom Soccer.png",
      "cost":1160,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Five star.png",
      "review":95,
      "color":"../Assets/yellow and red.png",
      "colorAlt":'yellow and red.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":26,
      "category": "Game",
      "title":"GP11 Shooter USB Gamepad",
      "image":"../Assets/shooter USB.png",
      "imgAlt":"shooter USB.png",
      "cost":660,
      "discount":'',
      "red":'hidden',
      "new":'visible',
      "rating":"../Assets/Four Star.png",
      "review":55,
      "color":"../Assets/red and black.png",
      "colorAlt":'red and black.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
    {
      "id":27,
      "category": "Jacket",
      "title":"Quilted Satin Jacket ",
      "image":"../Assets/jacket .png",
      "imgAlt":"jacket .png",
      "cost":660,
      "discount":'',
      "red":'hidden',
      "new":"hidden",
      "rating":"../Assets/Four Star.png",
      "review":55,
      "color":"../Assets/green and orange.png",
      "colorAlt":'green and orange.png',
      "colorDiv":'',
      "off":'',
      "offSpan":"hidden",
      "colFlex":"rating",
    },
  ]
  
  function allMap(all){
    const productItem=document.querySelector('.product-list')
    productItem.innerHTML=''
    all.map((card)=>{
    let addDiv=document.createElement('div')
    addDiv.classList.add('append')
    let allDiv=(addDiv.innerHTML=`<li class="product-item">
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
                              <div class="rate-off" ${card.red}>-${card.discount}%</div>
                          </div>
                          <button class="cart">Add to Cart</button> 
                      </div>
                      <div class="product-info">
                          <div class="product-name">
                              ${card.title}
                          </div>
                          <div class="${card.colFlex}">
                              <div class="rate">$${card.cost} <span ${card.offSpan}><strike>$${card.off}</strike></span></div>
                              <div class="star-rate">
                                   <img src="${card.rating}" alt="four-star.png" class="star-img">
                                   <div class="review">(${card.review})</div>
                              </div>
                          </div>
                          <div class="color" ${card.colorDiv}><img src="${card.color}" alt="${card.colorAlt}"></div>
                      </div>
                  </li>`
      )
                  productItem.appendChild(addDiv)
    })}
  allMap(allProduct)


  let searchBox = document.getElementById('search');
  searchBox.addEventListener('keyup', (e) => {
      const productItem = document.querySelector('.product-list');
      const resultDiv =document.querySelector('.result')
     
      let searchData = e.target.value.toLowerCase();
        
      if (searchData === '') {

        allMap(allProduct);
        resultDiv.innerHTML = ''; 
        return; 
    }
    
      let filterdata = allProduct.filter((item) => {
          return (
              item.title.toLowerCase().includes(searchData) || 
              item.category.toLowerCase().includes(searchData)
          );
      });
  
      
      if (filterdata.length === 0) {
          productItem.innerHTML=''
          resultDiv.innerHTML = 'No products found';
          
      } else {
          allMap(filterdata); 
          resultDiv.innerHTML=`${filterdata.length} products found`

      }
      
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



       
                                  // Cart Count
                                  

