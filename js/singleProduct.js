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
        }).done(function () {
            console.log("Done");

            window.location.reload();
        })
    },

    addReviewToProduct: function(){

        let productIdValue;
        let reviewIdValue;
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

