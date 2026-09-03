/* =========================================================
   ALFISHA E-STORE
   PRODUCT DETAILS SYSTEM
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       PRODUCT DATA
    ===================================================== */

    const products = {

        "Premium Wireless Headphones": {
            category: "HEADPHONES",
            name: "Premium Wireless Headphones",
            price: "₹2,499",
            oldPrice: "₹3,199",
            discount: "20% OFF",
            badge: "-20%",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Experience powerful sound and crystal-clear audio with our Premium Wireless Headphones. Designed for music lovers, professionals and everyday entertainment.",
            description2: "Enjoy comfortable all-day listening, immersive bass and reliable wireless connectivity wherever you go."
        },


        "ProFit Smart Watch": {
            category: "SMART WATCH",
            name: "ProFit Smart Watch",
            price: "₹3,999",
            oldPrice: "₹5,499",
            discount: "27% OFF",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Track your fitness, notifications and daily activities with the stylish ProFit Smart Watch.",
            description2: "Enjoy health tracking, smart notifications, activity monitoring and long battery life."
        },


        "Nova X5 Smartphone": {
            category: "SMARTPHONES",
            name: "Nova X5 Smartphone",
            price: "₹18,999",
            oldPrice: "₹21,999",
            discount: "15% OFF",
            badge: "-15%",
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Powerful performance meets modern design with the Nova X5 Smartphone.",
            description2: "Enjoy a bright display, powerful processor, advanced camera and reliable all-day battery."
        },


        "UltraBook Pro 14": {
            category: "LAPTOPS",
            name: "UltraBook Pro 14",
            price: "₹54,999",
            oldPrice: "₹62,999",
            discount: "NEW",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=90"
            ],
            description: "A powerful and lightweight laptop designed for work, study and entertainment.",
            description2: "Enjoy fast performance, premium design, sharp display and excellent portability."
        },


        "Nova Pro Smartphone": {
            category: "SMARTPHONES",
            name: "Nova Pro Smartphone",
            price: "₹24,999",
            oldPrice: "₹28,499",
            discount: "12% OFF",
            badge: "-12%",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Nova Pro combines powerful performance with a premium smartphone experience.",
            description2: "Built for photography, gaming, streaming and everyday productivity."
        },


        "Edge Max Smartphone": {
            category: "SMARTPHONES",
            name: "Edge Max Smartphone",
            price: "₹32,999",
            oldPrice: "₹36,999",
            discount: "NEW",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Edge Max delivers flagship-inspired performance with a beautiful modern design.",
            description2: "Enjoy a powerful processor, immersive display and advanced camera system."
        },


        "CreatorBook Pro 15": {
            category: "LAPTOPS",
            name: "CreatorBook Pro 15",
            price: "₹64,999",
            oldPrice: "₹71,999",
            discount: "10% OFF",
            badge: "-10%",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=90"
            ],
            description: "CreatorBook Pro 15 is designed for creators, professionals and demanding workloads.",
            description2: "Powerful performance, large display and premium build make it ideal for creative work."
        },


        "BusinessBook Air 15": {
            category: "LAPTOPS",
            name: "BusinessBook Air 15",
            price: "₹72,999",
            oldPrice: "₹79,999",
            discount: "NEW",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=700&q=90"
            ],
            description: "BusinessBook Air 15 gives professionals the speed and portability they need.",
            description2: "Perfect for office work, meetings, productivity and everyday computing."
        },


        "Studio Sound Headphones": {
            category: "HEADPHONES",
            name: "Studio Sound Headphones",
            price: "₹3,499",
            oldPrice: "₹4,299",
            discount: "18% OFF",
            badge: "-18%",
            image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Enjoy detailed studio-style audio with the Studio Sound Headphones.",
            description2: "Comfortable design, powerful bass and clear sound make them perfect for everyday listening."
        },


        "NoiseFree Pro Headphones": {
            category: "HEADPHONES",
            name: "NoiseFree Pro Headphones",
            price: "₹5,999",
            oldPrice: "₹7,499",
            discount: "NEW",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=700&q=90"
            ],
            description: "NoiseFree Pro delivers immersive sound with advanced noise cancellation.",
            description2: "Perfect for travel, work and entertainment with comfortable all-day listening."
        },


        "ActiveFit Smart Watch": {
            category: "SMART WATCH",
            name: "ActiveFit Smart Watch",
            price: "₹4,499",
            oldPrice: "₹5,399",
            discount: "16% OFF",
            badge: "-16%",
            image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=90"
            ],
            description: "ActiveFit helps you stay connected and track your daily fitness activities.",
            description2: "Monitor workouts, activity, notifications and more from your wrist."
        },


        "SmartTime Elite Watch": {
            category: "SMART WATCH",
            name: "SmartTime Elite Watch",
            price: "₹6,999",
            oldPrice: "₹8,499",
            discount: "NEW",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=90"
            ],
            description: "SmartTime Elite combines premium style with powerful smart features.",
            description2: "Stay connected with notifications, fitness tracking and modern smartwatch features."
        },


        "TabPro 11 Tablet": {
            category: "TABLETS",
            name: "TabPro 11 Tablet",
            price: "₹21,999",
            oldPrice: "₹25,499",
            discount: "14% OFF",
            badge: "-14%",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=700&q=90"
            ],
            description: "TabPro 11 offers a large immersive display for entertainment and productivity.",
            description2: "Perfect for streaming, studying, browsing and everyday work."
        },


        "AirTab Max": {
            category: "TABLETS",
            name: "AirTab Max",
            price: "₹28,999",
            oldPrice: "₹32,999",
            discount: "NEW",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=90"
            ],
            description: "AirTab Max gives you premium tablet performance in a slim design.",
            description2: "Enjoy a beautiful display, powerful performance and excellent portability."
        },


        "BoomBox Bluetooth Speaker": {
            category: "SPEAKERS",
            name: "BoomBox Bluetooth Speaker",
            price: "₹2,999",
            oldPrice: "₹3,799",
            discount: "20% OFF",
            badge: "-20%",
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Bring powerful wireless sound anywhere with the BoomBox Bluetooth Speaker.",
            description2: "Enjoy rich bass, clear vocals and convenient Bluetooth connectivity."
        },


        "SoundWave Mini Speaker": {
            category: "SPEAKERS",
            name: "SoundWave Mini Speaker",
            price: "₹4,999",
            oldPrice: "₹5,899",
            discount: "15% OFF",
            badge: "-15%",
            image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Compact size with powerful sound makes the SoundWave Mini perfect for every room.",
            description2: "Portable design, wireless connectivity and clear audio wherever you go."
        },


        "Pro Gaming Controller": {
            category: "GAMING",
            name: "Pro Gaming Controller",
            price: "₹7,499",
            oldPrice: "₹8,999",
            discount: "NEW",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Take your gaming experience to the next level with the Pro Gaming Controller.",
            description2: "Responsive controls, comfortable grip and precise input for competitive gaming."
        },


        "Arena Gaming Headset": {
            category: "GAMING",
            name: "Arena Gaming Headset",
            price: "₹8,999",
            oldPrice: "₹10,199",
            discount: "12% OFF",
            badge: "-12%",
            image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Arena Gaming Headset delivers immersive gaming audio and clear communication.",
            description2: "Enjoy detailed sound, comfortable ear cushions and an excellent gaming experience."
        },


        "FastCharge Power Adapter": {
            category: "ACCESSORIES",
            name: "FastCharge Power Adapter",
            price: "₹1,499",
            oldPrice: "₹1,999",
            discount: "25% OFF",
            badge: "-25%",
            image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=90"
            ],
            description: "FastCharge Power Adapter provides reliable and fast charging for your devices.",
            description2: "Compact design makes it perfect for home, office and travel."
        },


        "Wireless Charging Stand": {
            category: "ACCESSORIES",
            name: "Wireless Charging Stand",
            price: "₹1,999",
            oldPrice: "₹2,499",
            discount: "NEW",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1000&q=90",
            thumbnails: [
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=90",
                "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=90"
            ],
            description: "Keep your phone charged and visible with this convenient Wireless Charging Stand.",
            description2: "Clean desktop design with convenient wireless charging."
        }

    };


    /* =====================================================
       SAVE SELECTED PRODUCT
    ===================================================== */

    function setupProductLinks() {

        const links = document.querySelectorAll(".quick-view");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                const card = link.closest(".catalog-product");

                if (!card) return;

                const nameElement =
                    card.querySelector(".catalog-details h3");

                if (!nameElement) return;

                const productName =
                    nameElement.textContent.trim();

                const product =
                    products[productName];

                if (product) {

                    localStorage.setItem(
                        "alfishaSelectedProduct",
                        JSON.stringify(product)
                    );

                }

            });

        });

    }


    /* =====================================================
       LOAD PRODUCT DETAILS
    ===================================================== */

    function loadProductDetails() {

        const savedProduct =
            localStorage.getItem("alfishaSelectedProduct");

        if (!savedProduct) return;

        let product;

        try {

            product = JSON.parse(savedProduct);

        } catch (error) {

            console.error(
                "Invalid ALFISHA product data."
            );

            return;

        }

        if (!product) return;


        /* =================================================
           PRODUCT NAME
        ================================================= */

        const name =
            document.getElementById("detail-product-name");

        if (name) {

            name.textContent =
                product.name;

        }


        /* =================================================
           CATEGORY
        ================================================= */

        const category =
            document.getElementById("detail-category");

        if (category) {

            category.textContent =
                product.category;

        }


        /* =================================================
           BREADCRUMB
        ================================================= */

        const breadcrumb =
            document.getElementById("breadcrumb-product");

        if (breadcrumb) {

            breadcrumb.textContent =
                product.name;

        }


        /* =================================================
           MAIN IMAGE
        ================================================= */

        const image =
            document.getElementById(
                "detail-product-image"
            );

        if (image) {

            image.src =
                product.image;

            image.alt =
                product.name;

        }


        /* =================================================
           PRODUCT BADGE
        ================================================= */

        const badge =
            document.querySelector(
                ".product-detail-badge"
            );

        if (badge) {

            badge.textContent =
                product.badge;

            badge.classList.remove("new");

            if (product.badge === "NEW") {

                badge.classList.add("new");

            }

        }


        /* =================================================
           PRICE
        ================================================= */

        const price =
            document.getElementById(
                "detail-price"
            );

        if (price) {

            price.textContent =
                product.price;

        }


        /* =================================================
           OLD PRICE
        ================================================= */

        const oldPrice =
            document.getElementById(
                "detail-old-price"
            );

        if (oldPrice) {

            oldPrice.textContent =
                product.oldPrice;

        }


        /* =================================================
           DISCOUNT
        ================================================= */

        const discount =
            document.querySelector(
                ".detail-discount"
            );

        if (discount) {

            discount.textContent =
                product.discount;

        }


        /* =================================================
           DESCRIPTION
        ================================================= */

        const descriptions =
            document.querySelectorAll(
                ".detail-description p"
            );

        if (descriptions[0]) {

            descriptions[0].textContent =
                product.description;

        }

        if (descriptions[1]) {

            descriptions[1].textContent =
                product.description2;

        }


        /* =================================================
           PAGE TITLE
        ================================================= */

        document.title =
            product.name +
            " | ALFISHA E-STORE";


        /* =================================================
           THUMBNAILS
        ================================================= */

        setupProductThumbnails(product);

    }


    /* =====================================================
       DYNAMIC THUMBNAILS
    ===================================================== */

    function setupProductThumbnails(product) {

        const thumbnails =
            document.querySelectorAll(
                ".product-thumb"
            );

        if (!thumbnails.length) return;


        thumbnails.forEach(function (thumbnail, index) {

            const image =
                thumbnail.querySelector("img");

            if (!image) return;

            const thumbnailImage =
                product.thumbnails[index] ||
                product.image;

            image.src =
                thumbnailImage;

            image.alt =
                product.name +
                " thumbnail " +
                (index + 1);


            thumbnail.addEventListener(
                "click",
                function () {

                    const mainImage =
                        document.getElementById(
                            "detail-product-image"
                        );

                    if (!mainImage) return;

                    mainImage.src =
                        thumbnailImage;

                    mainImage.alt =
                        product.name;


                    thumbnails.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );

                    thumbnail.classList.add(
                        "active"
                    );

                }
            );

        });

    }


    /* =====================================================
       QUANTITY
    ===================================================== */

    function setupQuantity() {

        const quantity =
            document.getElementById(
                "product-quantity"
            );

        const minus =
            document.querySelector(
                ".quantity-minus"
            );

        const plus =
            document.querySelector(
                ".quantity-plus"
            );

        if (!quantity) return;


        let value =
            parseInt(
                quantity.textContent
            ) || 1;


        /* DECREASE */

        if (minus) {

            minus.addEventListener(
                "click",
                function () {

                    if (value > 1) {

                        value--;

                        quantity.textContent =
                            value;

                    }

                }
            );

        }


        /* INCREASE */

        if (plus) {

            plus.addEventListener(
                "click",
                function () {

                    value++;

                    quantity.textContent =
                        value;

                }
            );

        }

    }


    /* =====================================================
       ADD TO CART
    ===================================================== */

    function setupAddToCart() {

        const button =
            document.querySelector(
                ".detail-add-cart"
            );

        if (!button) return;


        button.addEventListener(
            "click",
            function () {

                const savedProduct =
                    localStorage.getItem(
                        "alfishaSelectedProduct"
                    );

                if (!savedProduct) return;


                let product;

                try {

                    product =
                        JSON.parse(
                            savedProduct
                        );

                } catch (error) {

                    return;

                }


                const quantityElement =
                    document.getElementById(
                        "product-quantity"
                    );


                const quantity =
                    parseInt(
                        quantityElement
                            ? quantityElement.textContent
                            : 1
                    ) || 1;


                let cart =
                    JSON.parse(
                        localStorage.getItem(
                            "alfishaCart"
                        )
                    ) || [];


                const existingProduct =
                    cart.find(
                        function (item) {

                            return item.name ===
                                product.name;

                        }
                    );


                if (existingProduct) {

                    existingProduct.quantity +=
                        quantity;

                } else {

                    cart.push({

                        name:
                            product.name,

                        price:
                            product.price,

                        oldPrice:
                            product.oldPrice,

                        image:
                            product.image,

                        category:
                            product.category,

                        quantity:
                            quantity

                    });

                }


                localStorage.setItem(
                    "alfishaCart",
                    JSON.stringify(cart)
                );


                showToast(
                    "Added to cart!"
                );


                updateCartCount();

            }
        );

    }


    /* =====================================================
       BUY NOW
    ===================================================== */

    function setupBuyNow() {

        const button =
            document.querySelector(
                ".detail-buy-now"
            );

        if (!button) return;


        button.addEventListener(
            "click",
            function () {

                const addCartButton =
                    document.querySelector(
                        ".detail-add-cart"
                    );

                if (addCartButton) {

                    addCartButton.click();

                }


                setTimeout(
                    function () {

                        window.location.href =
                            "cart.html";

                    },
                    300
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

        if (!toast) return;


        const text =
            toast.querySelector("span");


        if (text) {

            text.textContent =
                message;

        }


        toast.classList.add(
            "show"
        );


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
       CART COUNT
    ===================================================== */

    function updateCartCount() {

        const cart =
            JSON.parse(
                localStorage.getItem(
                    "alfishaCart"
                )
            ) || [];


        let total =
            0;


        cart.forEach(
            function (item) {

                total +=
                    Number(
                        item.quantity
                    ) || 0;

            }
        );


        const counters =
            document.querySelectorAll(
                ".cart-count"
            );


        counters.forEach(
            function (counter) {

                counter.textContent =
                    total;

            }
        );

    }


    /* =====================================================
       START SYSTEM
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            setupProductLinks();

            loadProductDetails();

            setupQuantity();

            setupAddToCart();

            setupBuyNow();

            updateCartCount();

        }
    );

})();