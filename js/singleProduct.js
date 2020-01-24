window.singleProduct = {
    API_BASE_URL: "http://localhost:8085",

    getProduct: function () {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = parseInt(urlParams.get(`product-id`));
        $.ajax({
            url: singleProduct.API_BASE_URL + "/products/" + myParam,
            method: "GET",
            //default ajax method: "GET"
        }).done(function (response) {
            console.log(response);
            singleProduct.displayProduct(response)
        });


    },

    getReviews: function (){
        const urlParams = new URLSearchParams(window.location.search);
        const productIdValue = parseInt(urlParams.get(`product-id`));


        $.ajax({
            url: singleProduct.API_BASE_URL + "/reviews/" + productIdValue,

        }).done(function (response) {
            console.log(response);
            console.log("A MERS")
            singleProduct.displayReviews(response.content);
        })
    },

    getReviewsHtml: function(review){
        return `<table class="shop_table">
                                                   <thead>
                                                      <tr>
                                                           <th class="product-name">${review.reviewName}</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                        <tr class="cart_item">
                                                            <td class="product-name">
                                                                ${review.description} </td>
                                                        </tr>
                                                   </tbody>`
    },


    getSingleProductHtml: function (product) {

        return `<div class="col-sm-6">
                                <div class="product-images">
                                    <div class="product-main-img">
                                        <img src="${product.imageUrl}" alt="">
                                    </div>
                                    
                                   
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="product-inner">
                                    <h2 class="product-name">${product.name}</h2>
                                    <div class="product-inner-price">
                                    </div>    
                                    
                                    <form action="" class="cart">
                                        
                                    </form>   
                                    
                                    <div class="product-inner-category">
                                        <p>Category: <a href="">Electronics</p>
                                    </div> 
                                    
                                    <div role="tabpanel">
                                        <ul class="product-tab" role="tablist">
                                            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Reviews</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane fade in active" id="home">
                                                <div class="submit-review">
                                                    <p><label for="name">Review Title</label> <input name="name" id="review_title" type="text"></p>
                                                    <p><label for="review">Your review</label> <textarea name="review" id="review_body" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit" id="submit"></p>
                                                </div>
                                               </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>`
                                   
                                    
    },

    displayReviews: function(reviews){
        let reviewsHtml = "";

        reviews.forEach(oneReview => reviewsHtml += singleProduct.getReviewsHtml(oneReview));

        $(".single-sidebar .sidebar-title").html(reviewsHtml);


    },

    displayProduct: function(product) {
        let productHtml;
        productHtml = singleProduct.getSingleProductHtml(product);
        $(".col-md-8 .row ").html(productHtml);

    },

    createReview: function () {
        let reviewNameValue = $("#review_title").val();
        let descriptionValue = $("#review_body").val();

        let requestBody = {
            reviewName: reviewNameValue,
            description: descriptionValue
        };
        $.ajax({
            url: singleProduct.API_BASE_URL + "/reviews",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        }).done(function (response) {
            console.log("Done");
            singleProduct.addReviewToProduct(response);

            window.location.reload();
        })
    },

    addReviewToProduct: function(review){

        let urlParams = new URLSearchParams(window.location.search);
        let productIdValue = parseInt(urlParams.get(`product-id`));
        let reviewIdValue = review.id;

        let requestBody = {
            productId: productIdValue,
            reviewId: reviewIdValue
        };

        $.ajax({
            url: singleProduct.API_BASE_URL + "/products",
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        }).done(function () {
            console.log("Added review to product")
        })

    },

    bindEvents: function () {
        $(".col-md-8").delegate("#submit", "click", function (event) {


            event.preventDefault();
            singleProduct.createReview()

        })

    }



};

singleProduct.getProduct();
singleProduct.bindEvents();
singleProduct.getReviews();
