const products = [
    {
        id: 1,
        slug: "galaxy-s24-ultra",
        title: "Samsung Galaxy S24 Ultra",
        description: "6.8-inch AMOLED display, Snapdragon 8 Gen 3, 200MP camera.",
        image: "./assets/images/galaxy-s24-ultra.avif",
        old_price: 1499,
        price_after_sale: 1299,
        currency: "USD"
    },
    {
        id: 2,
        slug: "iphone-15-pro-max",
        title: "Apple iPhone 15 Pro Max",
        description: "A17 Pro chip, titanium design, 48MP camera, long battery life.",
        image: "./assets/images/iphone-15-pro-max.jpg",
        old_price: 1599,
        price_after_sale: 1499,
        currency: "USD"
    },
    {
        id: 3,
        slug: "macbook-air-m3",
        title: "MacBook Air M3",
        description: "13-inch Retina display, M3 chip, 8GB RAM, 256GB SSD.",
        image: "./assets/images/macbook-air-m3.webp",
        old_price: 1399,
        price_after_sale: 1249,
        currency: "USD"
    },
    {
        id: 4,
        slug: "lenovo-legion-7",
        title: "Lenovo Legion 7",
        description: "AMD Ryzen 9, RTX 4070, 16GB RAM, 1TB SSD, 16-inch QHD display.",
        image: "./assets/images/lenovo-legion-7.jpg",
        old_price: 2199,
        price_after_sale: 1999,
        currency: "USD"
    },
    {
        id: 5,
        slug: "anker-powercore-20000",
        title: "Anker PowerCore 20000mAh Power Bank",
        description: "High-capacity portable charger with fast charging.",
        image: "./assets/images/anker-powercore-20000.webp",
        old_price: 69,
        price_after_sale: 49,
        currency: "USD"
    },
    {
        id: 6,
        slug: "sony-wh-1000xm5",
        title: "Sony WH-1000XM5 Headphones",
        description: "Industry-leading noise-canceling wireless headphones.",
        image: "./assets/images/sony-wh-1000xm5.webp",
        old_price: 399,
        price_after_sale: 349,
        currency: "USD"
    },
    {
        id: 7,
        slug: "logitech-mx-master-3s",
        title: "Logitech MX Master 3S Mouse",
        description: "Ergonomic wireless mouse with precision tracking and fast scrolling.",
        image: "./assets/images/logitech-mx-master-3s.jpg",
        old_price: 119,
        price_after_sale: 99,
        currency: "USD"
    },
    {
        id: 8,
        slug: "apple-airpods-pro-2",
        title: "Apple AirPods Pro (2nd Gen)",
        description: "Active noise cancellation, personalized spatial audio, USB-C case.",
        image: "./assets/images/apple-airpods-pro-2.jpg",
        old_price: 299,
        price_after_sale: 269,
        currency: "USD"
    }
];
let productsContainer = document.querySelector(".products.container .row")
const cartProducts = []
const cardIndicator = document.querySelector(".card-indicator")
const wishlistIndicator = document.querySelector(".wishlist-indicator")

for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML += `  <div class=" col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 pe-1 ">
    <div class="product_card d-flex flex-column gap-2 border border-secondary rounded-1 p-3">
                    <img src="${products[i].image}" alt="${products[i].title}" width="100%" >
                    <div class="iphone mb-2">
                        <h3>${products[i].title}</h3>
                        <p class="text-secondary mb-1">
                          ${products[i].description}  
                        </p>
                        <span class="aftersale text-success">${products[i].price_after_sale}$</span>
                        <span class="beforesale text-danger text-decoration-line-through">${products[i].old_price}$</span>
                    </div>
                     <div class="buttons d-flex gap-2 mt-auto  ">
                     ${cartProducts.includes(products[i]) ?
            `<button onclick="removeFromCart(${products[i].id})" class="remove_from_cart_button text-white btn btn-danger flex-grow-1 border-0" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8L16 12"
                                    stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path
                                    d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
                                    stroke="white" stroke-width="2" />
                            </svg>
                            Remove from cart
                        </button>`:
            `<button onclick="addToCart(${products[i].id})" class="add_to_cart_button text-white bg-primary flex-grow-1 border-0" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8L16 12"
                                    stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path
                                    d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
                                    stroke="white" stroke-width="2" />
                            </svg>Add to cart</button>`}
                        <button onclick="addToWishList(${products[i].id})" class="fav_button-add bg-white border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <path
                            d="M5.56335 17.3853L14.3153 25.6068C14.6398 25.9116 14.802 26.064 15 26.064C15.198 26.064 15.3602 25.9116 15.6847 25.6068L15.6847 25.6068L24.4367 17.3853C26.8819 15.0882 27.1788 11.3082 25.1223 8.65758L24.7356 8.15918C22.2753 4.98822 17.337 5.52002 15.6083 9.14206C15.3641 9.6537 14.6359 9.6537 14.3917 9.14206C12.663 5.52002 7.72465 4.98823 5.26443 8.15918L4.87773 8.65759C2.82118 11.3083 3.11813 15.0882 5.56335 17.3853Z"
                            stroke="#007BFF" stroke-width="2" />
                    </svg>
                </button>
                    </div>
                    </div>
                    </div>`

}
//search
const searchProduct = document.querySelector(".search.container .search-input")
let searchValidation = document.querySelector(".search-valid")
const searchBtn = document.querySelector(".search.container .search-btn")
searchBtn.addEventListener("click", function () {
    //search input validation
    if (searchProduct.value.trim() === "") {
        searchValidation.textContent = "Enter product you want to search"
    }
    else {
        searchValidation.textContent = ""
    } 
    let searchedItems = products.filter(product => {
        return product.title.toLowerCase().includes(searchProduct.value.toLowerCase())
    })
    productsContainer.innerHTML = ""
    //display searched items
   displayProducts(searchedItems)
    //test if searched item dont match the products
    if (searchedItems.length === 0) {
    searchValidation.textContent = "there are no products match this search";
    console.log(searchedItems)
}

})
/////min& maxprice filter
const minPrice = document.querySelector(".filter.container .min-price-input")
const maxPrice = document.querySelector(".filter.container .max-price-input")
const filterBtn = document.querySelector(".filter.container .filter-btn")
const minPriceMessage = document.querySelector(".enter-min-price")
const maxpriceMessage = document.querySelector(".enter-max-price")

//when filltered items clicked
filterBtn.addEventListener("click", function () {
//minvalidation
    if (minPrice.value.trim() === "") {
        minPriceMessage.textContent = "Enter Minimum price"
    }
    else if (!(/^\d+$/.test(minPrice.value))) {
        minPriceMessage.textContent = "Minimum price must be number"
    }
    else {
        minPriceMessage.textContent = ""
    }
    if (maxPrice.value.trim() === "") {
        maxpriceMessage.textContent = "Enter maximum price"
    }
    //max validation
    else if (!(/^\d+$/.test(maxPrice.value))) {
        maxpriceMessage.textContent = "maximum price must be number"
        
    }
    else {
        maxpriceMessage.textContent = ""
    }
    const minPricevalue = Number(minPrice.value)
    const maxPricevalue = Number(maxPrice.value)
   
    if ((minPricevalue < 0) || (maxPricevalue < 0)) {
        productsContainer.innerHTML = "<p class='text-danger'>Prices must be positive numbers</p>";
        return;
    }

    if (minPricevalue > maxPricevalue) {
       
        productsContainer.innerHTML = "<p class='text-danger'>Maximum price must be greater than minimum price</p>";
        return

    }
    const filteredItems = products.filter(product => {
        return product.price_after_sale >= minPricevalue && product.price_after_sale <= maxPricevalue
    })
    //filter
    console.log(filteredItems)
    productsContainer.innerHTML = ""
    //min&maxvalidation


    //filter(if not found)
    if (filteredItems.length === 0) {
        productsContainer.innerHTML = "<p class='text-danger'>there are no products between this range</p>";
        return;
    }
//print filltered items
    displayProducts(filteredItems)

})

const addToCart = (id) => {
    cartProducts.push(id)
    console.log(cartProducts)
    cardIndicator.textContent = cartProducts.length
    displayProducts()
}

const removeFromCart = (id) => {
    let indexToRemove = -1
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i] === id) {
            indexToRemove = i
            break
        }
    }
    if (indexToRemove === -1)
        return
    cartProducts.splice(indexToRemove, 1)
    cardIndicator.textContent = cartProducts.length
    displayProducts()
}
const wishList = []
const addToWishList = (id) => {
    wishList.push(id)

    wishlistIndicator.textContent = wishList.length
    displayProducts()
}
const removeFromWishList = (id) => {
    console.log("wishList")
    let indexToRemove = -1
    for (let i = 0; i < wishList.length; i++) {
        if (wishList[i] === id) {
            indexToRemove = i
            break
        }
    }
    if (indexToRemove === -1)
        return
    wishList.splice(indexToRemove, 1)
    wishlistIndicator.textContent = wishList.length
    displayProducts()
}
//display products
const displayProducts = (array) => {
    productsContainer.innerHTML = ""
    array.forEach(product => {
        productsContainer.innerHTML += `  <div class=" col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 pe-1 ">
    <div class="product_card d-flex flex-column gap-2 border border-secondary rounded-1 p-3">
                    <img src="${product.image}" alt="${product.title}" width="100%" >
                    <div class="iphone mb-2">
                        <h3>${product.title}</h3>
                        <p class="text-secondary mb-1">
                          ${product.description}  
                        </p>
                        <span class="aftersale text-success">${product.price_after_sale}$</span>
                        <span class="beforesale text-danger text-decoration-line-through">${product.old_price}$</span>
                    </div>
                      <div class="buttons d-flex gap-2 mt-auto ">
                     ${(cartProducts.includes(product.id)) ?
                `<button onclick="removeFromCart(${product.id})" class="remove_from_cart_button text-white btn btn-danger flex-grow-1 border-0" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8L16 12"
                                    stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path
                                    d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
                                    stroke="white" stroke-width="2" />
                            </svg>
                            Remove from cart
                        </button>`:
                `<button onclick="addToCart(${product.id})" class="add_to_cart_button text-white bg-primary flex-grow-1 border-0" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8L16 12"
                                    stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path
                                    d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
                                    stroke="white" stroke-width="2" />
                            </svg>Add to cart</button>`}
                            ${(wishList.includes(product.id)) ?
                `<button onclick="removeFromWishList(${product.id})" class="fav_button-delete bg-white border-primary">
                <?xml version="1.0" encoding="utf-8"?>
                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>i</title>
                <g id="Complete">
                <g id="user-remove">
                <g>
                <path d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <circle cx="9" cy="7" r="4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <line x1="17" y1="11" x2="23" y2="11" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
                </g>
                </g>
                </svg>
                </button>`:
                `<button onclick="addToWishList(${product.id})" class="fav_button-add bg-white border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <path
                            d="M5.56335 17.3853L14.3153 25.6068C14.6398 25.9116 14.802 26.064 15 26.064C15.198 26.064 15.3602 25.9116 15.6847 25.6068L15.6847 25.6068L24.4367 17.3853C26.8819 15.0882 27.1788 11.3082 25.1223 8.65758L24.7356 8.15918C22.2753 4.98822 17.337 5.52002 15.6083 9.14206C15.3641 9.6537 14.6359 9.6537 14.3917 9.14206C12.663 5.52002 7.72465 4.98823 5.26443 8.15918L4.87773 8.65759C2.82118 11.3083 3.11813 15.0882 5.56335 17.3853Z"
                            stroke="#007BFF" stroke-width="2" />
                    </svg>
                </button>`
            }
                
                    </div >
                    </div > `
    })
}


