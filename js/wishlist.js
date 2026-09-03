/* =========================================================
   ALFISHA E-STORE
   WISHLIST PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       GET WISHLIST
    ===================================================== */

    let wishlist = JSON.parse(
        localStorage.getItem("alfishaWishlist")
    ) || [];


    const wishlistContainer =
        document.querySelector("#wishlist-items");

    const emptyWishlist =
        document.querySelector("#empty-wishlist");


    if (!wishlistContainer) {
        return;
    }


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
       UPDATE WISHLIST COUNT
    ===================================================== */

    function updateWishlistCount() {

        document
            .querySelectorAll(".wishlist-count")
            .forEach(function (element) {

                element.textContent =
                    wishlist.length;

            });

    }


    /* =====================================================
       PRICE FORMAT
    ===================================================== */

    function formatPrice(price) {

        if (
            typeof price === "string" &&
            price.includes("₹")
        ) {

            return price;

        }


        const number =
            Number(
                String(price)
                    .replace(/[₹,\s]/g, "")
            ) || 0;


        return "₹" +
            number.toLocaleString("en-IN");

    }


    /* =====================================================
       RENDER WISHLIST
    ===================================================== */

    function renderWishlist() {

        wishlistContainer.innerHTML = "";


        /* EMPTY WISHLIST */

        if (wishlist.length === 0) {

            if (emptyWishlist) {

                emptyWishlist.style.display =
                    "block";

            }

            updateWishlistCount();

            return;
        }


        /* HIDE EMPTY MESSAGE */

        if (emptyWishlist) {

            emptyWishlist.style.display =
                "none";

        }


        /* =================================================
           CREATE EACH WISHLIST PRODUCT
        ================================================= */

        wishlist.forEach(function (product, index) {

            /* Ignore old ID-only wishlist data */

            if (
                typeof product !== "object" ||
                !product.name
            ) {
                return;
            }


            const item =
                document.createElement("article");


            item.className =
                "wishlist-item";


            item.innerHTML = `

                <div class="wishlist-item-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="this.src='images/placeholder.png'">

                </div>


                <div class="wishlist-item-details">

                    <span>
                        ${product.category || "Electronics"}
                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <div class="wishlist-price">

                        <strong>
                            ${formatPrice(product.price)}
                        </strong>

                        ${
                            product.oldPrice
                                ? `
                                    <del>
                                        ${product.oldPrice}
                                    </del>
                                  `
                                : ""
                        }

                    </div>


                    <div class="wishlist-actions">

                        <button
                            class="wishlist-cart-button"
                            data-index="${index}">

                            <i class="fa-solid fa-cart-shopping"></i>

                            Add to Cart

                        </button>


                        <button
                            class="wishlist-remove-button"
                            data-index="${index}">

                            <i class="fa-solid fa-trash"></i>

                            Remove

                        </button>

                    </div>

                </div>

            `;


            wishlistContainer.appendChild(item);

        });


        attachWishlistButtons();

        updateWishlistCount();

    }


    /* =====================================================
       WISHLIST BUTTON CONTROLS
    ===================================================== */

    function attachWishlistButtons() {


        /* =================================================
           REMOVE
        ================================================= */

        document
            .querySelectorAll(
                ".wishlist-remove-button"
            )
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.dataset.index
                            );


                        if (
                            wishlist[index] !==
                            undefined
                        ) {

                            wishlist.splice(
                                index,
                                1
                            );

                        }


                        saveWishlist();

                        renderWishlist();

                    }
                );

            });


        /* =================================================
           ADD TO CART
        ================================================= */

        document
            .querySelectorAll(
                ".wishlist-cart-button"
            )
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.dataset.index
                            );


                        const product =
                            wishlist[index];


                        if (!product) {
                            return;
                        }


                        /* GET CURRENT CART */

                        let cart =
                            JSON.parse(
                                localStorage.getItem(
                                    "alfishaCart"
                                )
                            ) || [];


                        /* CHECK IF ALREADY IN CART */

                        const existingProduct =
                            cart.find(
                                function (item) {

                                    return (
                                        item.id ===
                                        product.id
                                    );

                                }
                            );


                        if (existingProduct) {

                            existingProduct.quantity =
                                (
                                    existingProduct.quantity ||
                                    1
                                ) + 1;

                        } else {

                            cart.push({

                                id: product.id,

                                name: product.name,

                                category:
                                    product.category ||
                                    "Electronics",

                                price: product.price,

                                image: product.image,

                                quantity: 1

                            });

                        }


                        /* SAVE CART */

                        localStorage.setItem(
                            "alfishaCart",
                            JSON.stringify(cart)
                        );


                        button.innerHTML = `
                            <i class="fa-solid fa-check"></i>
                            Added
                        `;


                        setTimeout(
                            function () {

                                button.innerHTML = `
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    Add to Cart
                                `;

                            },
                            1200
                        );

                    }
                );

            });

    }


    /* =====================================================
       START
    ===================================================== */

    renderWishlist();

});