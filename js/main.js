/* =========================================================
   ALFISHA E-STORE
   COMPLETE MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CART DATA
    ===================================================== */

    let cart = JSON.parse(
        localStorage.getItem("alfishaCart")
    ) || [];


    /* =====================================================
       SAVE CART
    ===================================================== */

    function saveCart() {

        localStorage.setItem(
            "alfishaCart",
            JSON.stringify(cart)
        );

    }


    /* =====================================================
       CART COUNT
    ===================================================== */

    function updateCartCount() {

        const cartCounts =
            document.querySelectorAll(".cart-count");

        const totalItems = cart.reduce(
            function (total, item) {
                return total + (item.quantity || 1);
            },
            0
        );

        cartCounts.forEach(function (element) {

            element.textContent = totalItems;

        });

    }

    updateCartCount();


    /* =====================================================
       ADD TO CART
    ===================================================== */

    const addCartButtons =
        document.querySelectorAll(".add-cart-button");


    addCartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

         const productCard = button.closest(".catalog-product");

            if (!productCard) return;


            const nameElement =
                productCard.querySelector("h3");

            const categoryElement =
                productCard.querySelector(".catalog-category");

            const priceElement =
                productCard.querySelector(
                    ".catalog-bottom strong"
                );

            const imageElement =
                productCard.querySelector(
                    ".catalog-image img"
                );


            if (
                !nameElement ||
                !priceElement ||
                !imageElement
            ) {
                return;
            }


            const name =
                nameElement.textContent.trim();

            const category =
                categoryElement
                    ? categoryElement.textContent.trim()
                    : "Electronics";

            const price =
                priceElement.textContent.trim();

            const image =
                imageElement.src;


            const id =
                name
                    .toLowerCase()
                    .replace(/\s+/g, "-");


            const existingProduct =
                cart.find(function (item) {

                    return item.id === id;

                });


            if (existingProduct) {

                existingProduct.quantity += 1;

            } else {

                cart.push({

                    id: id,

                    name: name,

                    category: category,

                    price: price,

                    image: image,

                    quantity: 1

                });

            }


            saveCart();

            updateCartCount();

            showToast("Added to cart!");

            button.classList.add("cart-added");


            setTimeout(function () {

                button.classList.remove(
                    "cart-added"
                );

            }, 500);

        });

    });


    /* =====================================================
       CART PAGE
    ===================================================== */

    const cartItemsContainer =
        document.querySelector("#cart-items");


    if (cartItemsContainer) {

        renderCart();

    }


    function renderCart() {

        const emptyCart =
            document.querySelector("#empty-cart");

        const cartSubtotal =
            document.querySelector("#cart-subtotal");

        const cartTotal =
            document.querySelector("#cart-total");

        const cartItemsTotal =
            document.querySelector(
                ".cart-items-total"
            );


        if (!cartItemsContainer) return;


        cartItemsContainer.innerHTML = "";


        /* EMPTY CART */

        if (cart.length === 0) {

            if (emptyCart) {

                emptyCart.style.display = "block";

            }

            if (cartSubtotal) {

                cartSubtotal.textContent = "₹0";

            }

            if (cartTotal) {

                cartTotal.textContent = "₹0";

            }

            if (cartItemsTotal) {

                cartItemsTotal.textContent =
                    "0 Items";

            }

            return;

        }


        if (emptyCart) {

            emptyCart.style.display = "none";

        }


        let subtotal = 0;

        let totalQuantity = 0;


        /* CREATE EACH PRODUCT */

        cart.forEach(function (product, index) {

            const quantity =
                product.quantity || 1;


            const numericPrice =
                parsePrice(product.price);


            const itemTotal =
                numericPrice * quantity;


            subtotal += itemTotal;

            totalQuantity += quantity;


            const item =
                document.createElement("div");


            item.className = "cart-item";


            item.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}">

                </div>


                <div class="cart-item-info">

                    <span class="cart-item-category">

                        ${product.category}

                    </span>

                    <h3>

                        ${product.name}

                    </h3>

                    <span class="cart-item-price">

                        ${formatPrice(numericPrice)}

                    </span>

                </div>


                <div class="cart-item-actions">


                    <div class="quantity-control">

                        <button
                            class="quantity-minus"
                            data-index="${index}">

                            <i class="fa-solid fa-minus"></i>

                        </button>


                        <span>

                            ${quantity}

                        </span>


                        <button
                            class="quantity-plus"
                            data-index="${index}">

                            <i class="fa-solid fa-plus"></i>

                        </button>

                    </div>


                    <strong>

                        ${formatPrice(itemTotal)}

                    </strong>


                  <button
    class="wishlist-remove-button"
    data-index="${index}"
    title="Remove from Wishlist">

    <i class="fa-solid fa-trash"></i>

</button>
                </div>

            `;


            cartItemsContainer.appendChild(item);

        });


        /* UPDATE TOTALS */

        if (cartSubtotal) {

            cartSubtotal.textContent =
                formatPrice(subtotal);

        }


        if (cartTotal) {

            cartTotal.textContent =
                formatPrice(subtotal);

        }


        if (cartItemsTotal) {

            cartItemsTotal.textContent =
                totalQuantity +
                (totalQuantity === 1
                    ? " Item"
                    : " Items");

        }


        attachCartControls();

    }


    /* =====================================================
       CART CONTROLS
    ===================================================== */

    function attachCartControls() {


        /* PLUS */

        document
            .querySelectorAll(".quantity-plus")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.dataset.index
                            );


                        if (cart[index]) {

                            cart[index].quantity =
                                (cart[index].quantity || 1) + 1;

                        }


                        saveCart();

                        updateCartCount();

                        renderCart();

                    }
                );

            });


        /* MINUS */

        document
            .querySelectorAll(".quantity-minus")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.dataset.index
                            );


                        if (!cart[index]) return;


                        if (
                            (cart[index].quantity || 1)
                            > 1
                        ) {

                            cart[index].quantity -= 1;

                        } else {

                            cart.splice(index, 1);

                        }


                        saveCart();

                        updateCartCount();

                        renderCart();

                    }
                );

            });


        /* REMOVE */

        document
            .querySelectorAll(".remove-cart-item")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.dataset.index
                            );


                        if (cart[index]) {

                            cart.splice(index, 1);

                        }


                        saveCart();

                        updateCartCount();

                        renderCart();

                        showToast(
                            "Item removed from cart"
                        );

                    }
                );

            });

    }


    /* =====================================================
       PRICE CONVERSION
    ===================================================== */

    function parsePrice(price) {

        if (typeof price === "number") {

            return price;

        }


        return Number(
            String(price)
                .replace(/[₹,\s]/g, "")
        ) || 0;

    }


    /* =====================================================
       FORMAT PRICE
    ===================================================== */

    function formatPrice(amount) {

        return "₹" +
            Number(amount).toLocaleString(
                "en-IN"
            );

    }


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message) {

        const toast =
            document.querySelector(
                ".toast-notification"
            );


        if (!toast) return;


        const toastText =
            toast.querySelector("span");


        if (toastText) {

            toastText.textContent =
                message;

        }


        toast.classList.add("show");


        clearTimeout(
            window.alfishaToastTimer
        );


        window.alfishaToastTimer =
            setTimeout(function () {

                toast.classList.remove(
                    "show"
                );

            }, 2200);

    }


   /* =====================================================
   WISHLIST
   Stores complete product information
===================================================== */

let wishlist =
    JSON.parse(
        localStorage.getItem("alfishaWishlist")
    ) || [];


/* =====================================================
   SAVE WISHLIST
===================================================== */

function saveWishlist() {

    localStorage.setItem(
        "alfishaWishlist",
        JSON.stringify(wishlist)
    );

}


/* =====================================================
   WISHLIST COUNT
===================================================== */

function updateWishlistCount() {

    document
        .querySelectorAll(".wishlist-count")
        .forEach(function (element) {

            element.textContent =
                wishlist.length;

        });

}

updateWishlistCount();


/* =====================================================
   CREATE PRODUCT ID
===================================================== */

function createProductId(name) {

    return name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

}


/* =====================================================
   WISHLIST BUTTONS
===================================================== */

document
    .querySelectorAll(".wishlist-button")
    .forEach(function (button) {

        const productCard =
            button.closest(".catalog-product");

        if (!productCard) return;


        const nameElement =
            productCard.querySelector("h3");

        const categoryElement =
            productCard.querySelector(
                ".catalog-category"
            );

        const priceElement =
            productCard.querySelector(
                ".catalog-bottom strong"
            );

        const imageElement =
            productCard.querySelector(
                ".catalog-image img"
            );

        const oldPriceElement =
            productCard.querySelector(
                ".catalog-bottom del"
            );


        if (
            !nameElement ||
            !priceElement ||
            !imageElement
        ) {
            return;
        }


        /* PRODUCT INFORMATION */

        const name =
            nameElement.textContent.trim();

        const category =
            categoryElement
                ? categoryElement.textContent.trim()
                : "Electronics";

        const price =
            priceElement.textContent.trim();

        const image =
            imageElement.getAttribute("src");

        const oldPrice =
            oldPriceElement
                ? oldPriceElement.textContent.trim()
                : "";

        const productId =
            createProductId(name);


        const icon =
            button.querySelector("i");


        /* =================================================
           CHECK EXISTING WISHLIST
        ================================================= */

        const existingProduct =
            wishlist.find(function (item) {

                /*
                 Supports both the new
                 object format and the old
                 ID-only format.
                */

                if (typeof item === "string") {

                    return item === productId;

                }

                return item.id === productId;

            });


        /* =================================================
           SHOW ACTIVE HEART
        ================================================= */

        if (existingProduct) {

            button.classList.add("active");


            if (icon) {

                icon.classList.remove(
                    "fa-regular"
                );

                icon.classList.add(
                    "fa-solid"
                );

            }

        }


        /* =================================================
           HEART CLICK
        ================================================= */

        button.addEventListener(
            "click",
            function () {

                const existingIndex =
                    wishlist.findIndex(
                        function (item) {

                            if (
                                typeof item ===
                                "string"
                            ) {

                                return item ===
                                    productId;

                            }

                            return item.id ===
                                productId;

                        }
                    );


                /* =========================================
                   ADD TO WISHLIST
                ========================================= */

                if (existingIndex === -1) {

                    wishlist.push({

                        id: productId,

                        name: name,

                        category: category,

                        price: price,

                        oldPrice: oldPrice,

                        image: image

                    });


                    button.classList.add(
                        "active"
                    );


                    if (icon) {

                        icon.classList.remove(
                            "fa-regular"
                        );

                        icon.classList.add(
                            "fa-solid"
                        );

                    }


                    showToast(
                        "Added to wishlist!"
                    );

                }


                /* =========================================
                   REMOVE FROM WISHLIST
                ========================================= */

                else {

                    wishlist.splice(
                        existingIndex,
                        1
                    );


                    button.classList.remove(
                        "active"
                    );


                    if (icon) {

                        icon.classList.remove(
                            "fa-solid"
                        );

                        icon.classList.add(
                            "fa-regular"
                        );

                    }


                    showToast(
                        "Removed from wishlist"
                    );

                }


                saveWishlist();

                updateWishlistCount();

            }
        );

    });
    /* =====================================================
       DARK MODE
    ===================================================== */

    const modeButton =
        document.querySelector(".mode-button");


    if (modeButton) {

        modeButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark-mode"
                );


                const icon =
                    modeButton.querySelector("i");


                if (
                    document.body.classList.contains(
                        "dark-mode"
                    )
                ) {

                    icon.classList.remove(
                        "fa-moon"
                    );

                    icon.classList.add(
                        "fa-sun"
                    );

                } else {

                    icon.classList.remove(
                        "fa-sun"
                    );

                    icon.classList.add(
                        "fa-moon"
                    );

                }

            }
        );

    }


    /* =====================================================
       SEARCH OVERLAY
    ===================================================== */

    const searchButton =
        document.querySelector(".search-button");

    const searchOverlay =
        document.querySelector(".search-overlay");

    const closeSearch =
        document.querySelector(".close-search");

    const searchInput =
        searchOverlay
            ? searchOverlay.querySelector("input")
            : null;


    if (
        searchButton &&
        searchOverlay
    ) {

        searchButton.addEventListener(
            "click",
            function () {

                searchOverlay.classList.add(
                    "active"
                );


                if (searchInput) {

                    setTimeout(
                        function () {

                            searchInput.focus();

                        },
                        200
                    );

                }

            }
        );

    }


    if (
        closeSearch &&
        searchOverlay
    ) {

        closeSearch.addEventListener(
            "click",
            function () {

                searchOverlay.classList.remove(
                    "active"
                );

            }
        );

    }


    if (searchOverlay) {

        searchOverlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    searchOverlay
                ) {

                    searchOverlay.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    const value =
                        searchInput.value.trim();


                    if (value) {

                        window.location.href =
                            "products.html?search=" +
                            encodeURIComponent(
                                value
                            );

                    }

                }

            }
        );

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenuButton =
        document.querySelector(
            ".mobile-menu-button"
        );

    const mobileNav =
        document.querySelector(
            ".mobile-nav"
        );


    if (
        mobileMenuButton &&
        mobileNav
    ) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                mobileNav.classList.toggle(
                    "active"
                );

            }
        );

    }


    if (mobileNav) {

        mobileNav
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mobileNav.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }


    /* =====================================================
       BEST SELLER SLIDER
    ===================================================== */

    const productSlider =
        document.querySelector(
            "#best-sellers"
        );


    const nextButton =
        document.querySelector(
            "#products-next"
        );


    const prevButton =
        document.querySelector(
            "#products-prev"
        );


    if (productSlider) {

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function () {

                    productSlider.scrollBy({

                        left: 320,

                        behavior: "smooth"

                    });

                }
            );

        }


        if (prevButton) {

            prevButton.addEventListener(
                "click",
                function () {

                    productSlider.scrollBy({

                        left: -320,

                        behavior: "smooth"

                    });

                }
            );

        }

    }
/* =====================================================
   EXPLORE COLLECTIONS SLIDER
===================================================== */

const categorySlider =
    document.querySelector(".category-slider");

const categoriesNext =
    document.querySelector("#categories-next");

const categoriesPrev =
    document.querySelector("#categories-prev");


if (
    categorySlider &&
    categoriesNext &&
    categoriesPrev
) {

    function getCategoryScrollAmount() {

        const categoryCard =
            categorySlider.querySelector(".category-card");

        if (!categoryCard) return 0;

        const gap =
            parseFloat(
                getComputedStyle(categorySlider).gap
            ) || 18;

        return categoryCard.offsetWidth + gap;
    }


    categoriesNext.addEventListener(
        "click",
        function () {

            categorySlider.scrollBy({

                left: getCategoryScrollAmount(),

                behavior: "smooth"

            });

        }
    );


    categoriesPrev.addEventListener(
        "click",
        function () {

            categorySlider.scrollBy({

                left: -getCategoryScrollAmount(),

                behavior: "smooth"

            });

        }
    );

}

    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                if (searchOverlay) {

                    searchOverlay.classList.remove(
                        "active"
                    );

                }


                if (mobileNav) {

                    mobileNav.classList.remove(
                        "active"
                    );

                }

            }

        }
    );


    /* =====================================================
       NEWSLETTER
    ===================================================== */

    const newsletterForm =
        document.querySelector(
            ".newsletter-form"
        );


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                newsletterForm.reset();

                showToast(
                    "Thanks for subscribing!"
                );

            }
        );

    }


 /* =====================================================
   CHECKOUT BUTTON
===================================================== */

const checkoutButton =
    document.querySelector("#checkout-button");


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function () {

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty"
                );

                return;

            }

            window.location.href =
                "checkout.html";

        }
    );

}
/* =====================================================
   PRODUCT CATEGORY FILTER
===================================================== */

const categoryButtons =
    document.querySelectorAll(".category-filter");

const catalogProducts =
    document.querySelectorAll(".catalog-product");

const productCount =
    document.querySelector("#product-count");

function filterProducts(category) {

    let visibleProducts = 0;

    catalogProducts.forEach(function (product) {

        const productCategory =
            product.dataset.category;

        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    if (productCount) {

        productCount.textContent =
            visibleProducts +
            (visibleProducts === 1
                ? " Product"
                : " Products");

    }

}


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        categoryButtons.forEach(function (item) {

            item.classList.remove("active");

        });

        button.classList.add("active");

        filterProducts(
            button.dataset.category
        );

    });

});
/* =====================================================
   CATEGORY FROM URL
===================================================== */

const urlParams =
    new URLSearchParams(window.location.search);

const selectedCategory =
    urlParams.get("category");

if (selectedCategory) {

    const matchingButton =
        document.querySelector(
            `.category-filter[data-category="${selectedCategory}"]`
        );

    if (matchingButton) {

        categoryButtons.forEach(function (button) {

            button.classList.remove("active");

        });

        matchingButton.classList.add("active");

        filterProducts(selectedCategory);

    }

}
});