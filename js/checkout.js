/* =========================================================
   ALFISHA E-STORE
   CHECKOUT JAVASCRIPT
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       STORAGE KEYS
    ===================================================== */

    const CART_KEY = "alfishaCart";
    const ORDER_KEY = "alfishaOrders";


    /* =====================================================
       GET CART
    ===================================================== */

    function getCart() {

        const savedCart =
            localStorage.getItem(CART_KEY);

        if (!savedCart) {
            return [];
        }

        try {

            const cart =
                JSON.parse(savedCart);

            return Array.isArray(cart)
                ? cart
                : [];

        } catch (error) {

            console.error(
                "Invalid cart data.",
                error
            );

            return [];

        }

    }


    /* =====================================================
       SAVE ORDERS
    ===================================================== */

    function saveOrder(order) {

        let orders = [];

        const savedOrders =
            localStorage.getItem(ORDER_KEY);

        if (savedOrders) {

            try {

                orders = JSON.parse(savedOrders);

                if (!Array.isArray(orders)) {
                    orders = [];
                }

            } catch (error) {

                orders = [];

            }

        }

        orders.push(order);

        localStorage.setItem(
            ORDER_KEY,
            JSON.stringify(orders)
        );

    }


    /* =====================================================
       FORMAT PRICE
    ===================================================== */

    function formatPrice(value) {

        return "₹" +
            Number(value || 0)
                .toLocaleString("en-IN");

    }


    /* =====================================================
       UPDATE CART COUNT
    ===================================================== */

    function updateCartCount() {

        const cart = getCart();

        let count = 0;

        cart.forEach(function (item) {

            count +=
                Number(item.quantity) || 0;

        });


        document
            .querySelectorAll(".cart-count")
            .forEach(function (element) {

                element.textContent = count;

            });

    }


    /* =====================================================
       CALCULATE TOTALS
    ===================================================== */

    function calculateTotals(cart) {

        let subtotal = 0;
        let discount = 0;


        cart.forEach(function (item) {

            const quantity =
                Number(item.quantity) || 1;

            const price =
                Number(item.price) || 0;

            const oldPrice =
                Number(item.oldPrice) || price;


            subtotal +=
                price * quantity;


            if (oldPrice > price) {

                discount +=
                    (oldPrice - price) *
                    quantity;

            }

        });


        let delivery = 0;


        /*
         * Free delivery for orders
         * of ₹999 or more.
         */

        if (
            subtotal > 0 &&
            subtotal < 999
        ) {

            delivery = 99;

        }


        const total =
            subtotal + delivery;


        return {

            subtotal: subtotal,
            delivery: delivery,
            discount: discount,
            total: total

        };

    }


    /* =====================================================
       RENDER CHECKOUT ITEMS
    ===================================================== */

    function renderCheckoutItems() {

        const container =
            document.getElementById(
                "checkout-items"
            );


        if (!container) {
            return;
        }


        const cart = getCart();


        /* EMPTY CART */

        if (cart.length === 0) {

            container.innerHTML = `

                <div class="checkout-empty">

                    <div class="checkout-empty-icon">

                        <i class="fa-solid fa-cart-shopping"></i>

                    </div>

                    <h3>
                        Your cart is empty
                    </h3>

                    <p>
                        Add products before placing
                        an order.
                    </p>

                    <a href="products.html"
                       class="primary-button">

                        Browse Products

                        <i class="fa-solid fa-arrow-right"></i>

                    </a>

                </div>

            `;

            updateCheckoutTotals([]);

            return;

        }


        container.innerHTML = "";


        cart.forEach(function (item) {

            const quantity =
                Number(item.quantity) || 1;

            const price =
                Number(item.price) || 0;

            const itemTotal =
                price * quantity;


            const itemElement =
                document.createElement("div");


            itemElement.className =
                "checkout-item";


            itemElement.innerHTML = `

                <div class="checkout-item-image">

                    <img
                        src="${item.image || ""}"
                        alt="${escapeHTML(item.name)}">

                </div>


                <div class="checkout-item-details">

                    <span>
                        ${escapeHTML(
                            item.category ||
                            "PRODUCT"
                        )}
                    </span>

                    <h3>
                        ${escapeHTML(item.name)}
                    </h3>

                    <small>
                        Qty: ${quantity}
                    </small>

                </div>


                <strong class="checkout-item-price">

                    ${formatPrice(itemTotal)}

                </strong>

            `;


            container.appendChild(
                itemElement
            );

        });


        updateCheckoutTotals(cart);

    }


    /* =====================================================
       UPDATE CHECKOUT TOTALS
    ===================================================== */

    function updateCheckoutTotals(cart) {

        const totals =
            calculateTotals(cart);


        const subtotal =
            document.getElementById(
                "checkout-subtotal"
            );

        const delivery =
            document.getElementById(
                "checkout-delivery"
            );

        const discount =
            document.getElementById(
                "checkout-discount"
            );

        const total =
            document.getElementById(
                "checkout-total"
            );


        if (subtotal) {

            subtotal.textContent =
                formatPrice(
                    totals.subtotal
                );

        }


        if (delivery) {

            delivery.textContent =
                totals.delivery === 0
                    ? "FREE"
                    : formatPrice(
                        totals.delivery
                    );

        }


        if (discount) {

            discount.textContent =
                formatPrice(
                    totals.discount
                );

        }


        if (total) {

            total.textContent =
                formatPrice(
                    totals.total
                );

        }

    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value)

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =====================================================
       FORM VALIDATION
    ===================================================== */

    function validateDeliveryDetails() {

        const fields = {

            name:
                document.getElementById(
                    "full-name"
                ),

            phone:
                document.getElementById(
                    "phone"
                ),

            email:
                document.getElementById(
                    "email"
                ),

            address:
                document.getElementById(
                    "address"
                ),

            city:
                document.getElementById(
                    "city"
                ),

            state:
                document.getElementById(
                    "state"
                ),

            pincode:
                document.getElementById(
                    "pincode"
                )

        };


        const values = {

            name:
                fields.name
                    ? fields.name.value.trim()
                    : "",

            phone:
                fields.phone
                    ? fields.phone.value.trim()
                    : "",

            email:
                fields.email
                    ? fields.email.value.trim()
                    : "",

            address:
                fields.address
                    ? fields.address.value.trim()
                    : "",

            city:
                fields.city
                    ? fields.city.value.trim()
                    : "",

            state:
                fields.state
                    ? fields.state.value.trim()
                    : "",

            pincode:
                fields.pincode
                    ? fields.pincode.value.trim()
                    : ""

        };


        /* REQUIRED FIELDS */

        if (
            !values.name ||
            !values.phone ||
            !values.email ||
            !values.address ||
            !values.city ||
            !values.state ||
            !values.pincode
        ) {

            showToast(
                "Please fill in all delivery details."
            );

            return null;

        }


        /* PHONE */

        const phonePattern =
            /^[6-9]\d{9}$/;


        if (
            !phonePattern.test(
                values.phone
                    .replace(/\s+/g, "")
            )
        ) {

            showToast(
                "Please enter a valid 10-digit phone number."
            );

            return null;

        }


        /* EMAIL */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(
                values.email
            )
        ) {

            showToast(
                "Please enter a valid email address."
            );

            return null;

        }


        /* PINCODE */

        const pincodePattern =
            /^\d{6}$/;


        if (
            !pincodePattern.test(
                values.pincode
            )
        ) {

            showToast(
                "Please enter a valid 6-digit PIN code."
            );

            return null;

        }


        return values;

    }


    /* =====================================================
       GET PAYMENT METHOD
    ===================================================== */

    function getPaymentMethod() {

        const selected =
            document.querySelector(
                'input[name="payment"]:checked'
            );


        if (!selected) {
            return null;
        }


        return selected.value;

    }


    /* =====================================================
       PAYMENT OPTION UI
    ===================================================== */

    function setupPaymentOptions() {

        const options =
            document.querySelectorAll(
                ".payment-option"
            );


        options.forEach(function (option) {

            const radio =
                option.querySelector(
                    'input[type="radio"]'
                );


            if (!radio) {
                return;
            }


            function updateSelected() {

                options.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                if (radio.checked) {

                    option.classList.add(
                        "selected"
                    );

                }

            }


            radio.addEventListener(
                "change",
                updateSelected
            );


            updateSelected();

        });

    }


    /* =====================================================
       PLACE ORDER
    ===================================================== */

    function setupPlaceOrder() {

        const button =
            document.getElementById(
                "place-order-button"
            );


        if (!button) {
            return;
        }


        button.addEventListener(
            "click",
            function () {

                const cart = getCart();


                /* EMPTY CART */

                if (cart.length === 0) {

                    showToast(
                        "Your cart is empty."
                    );

                    return;

                }


                /* DELIVERY */

                const customer =
                    validateDeliveryDetails();


                if (!customer) {
                    return;
                }


                /* PAYMENT */

                const payment =
                    getPaymentMethod();


                if (!payment) {

                    showToast(
                        "Please select a payment method."
                    );

                    return;

                }


                const totals =
                    calculateTotals(cart);


                /* ORDER ID */

                const orderId =
                    "ALF" +
                    Date.now()
                        .toString()
                        .slice(-8);


                /* ORDER OBJECT */

const order = {

    id: orderId,

    createdAt:
        new Date().toISOString(),

    customer: customer,

    payment:
        payment,

    products: cart,

    subtotal:
        totals.subtotal,

    delivery:
        totals.delivery,

    discount:
        totals.discount,

    total:
        totals.total,

    status:
        "Confirmed"

};


                saveOrder(order);


                /*
                 * Clear cart after
                 * successful order.
                 */

               localStorage.removeItem(CART_KEY);

updateCartCount();

/*
 * Save latest order for
 * order-success.html and profile.html
 */

localStorage.setItem(
    "alfishaLastOrder",
    JSON.stringify(order)
);


                showToast(
                    "Order placed successfully!"
                );


                /*
                 * Give the toast a moment
                 * before redirecting.
                 */

                setTimeout(
                    function () {

                        window.location.href =
                            "order-success.html";

                    },
                    1000
                );

            }
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


        if (!toast) {
            return;
        }


        const text =
            toast.querySelector("span");


        if (text) {

            text.textContent =
                message;

        }


        toast.classList.add(
            "show"
        );


        clearTimeout(
            window.alfishaCheckoutToast
        );


        window.alfishaCheckoutToast =
            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );

                },
                2500
            );

    }


    /* =====================================================
       START
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            updateCartCount();

            renderCheckoutItems();

            setupPaymentOptions();

            setupPlaceOrder();

        }
    );


})();