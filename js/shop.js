window.Shop = {
    API_BASE_URL: "http://localhost:8085",

    getProducts: function () {
        $.ajax({
            url: Shop.API_BASE_URL + "/products"
            //default ajax method: "GET"
        }).done(function (response) {
            console.log(response);

            Shop.displayProducts(response.content);
        });
    },


    bindEvents: function () {
        $(".single-product-area").delegate(".add_to_cart_button", "click", function (event) {
            event.preventDefault();
            let productId = $(this).data("product_id");

            window.location.replace("single-product.html?product-id=" + productId);
        })
    },

    getProductsHtml: function (product) {
        return `<div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                            <img src="${product.imageUrl}" alt="">
                        </div>
                        <h2><a href="">${product.name}</a></h2>
                        <div class="product-carousel-price">
                        </div>  
                        
                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id=${product.id} rel="nofollow" href="/canvas/shop/?add-to-cart=${product.id}">Add review</a>
                        </div>                       
                    </div>
                </div>`
    },

    displayProducts: function (products) {
        var productsHtml = "";

        products.forEach(oneProduct => productsHtml += Shop.getProductsHtml(oneProduct));
        $(".single-product-area .row:first-child").html(productsHtml);
    },

};

Shop.getProducts();
Shop.bindEvents();
