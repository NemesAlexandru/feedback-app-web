window.singleProduct = {
    API_BASE_URL: "http://localhost:8085",

    getProduct: function () {
        let productId = 4;
        $.ajax({
            url: Shop.API_BASE_URL + "/products/" + productId,
            //default ajax method: "GET"
        }).done(function (response) {
            console.log(response);
            singleProduct.displayProduct(response.content)
        });

},

    getSingleProductHtml: function (product) {

        return `<div class="col-sm-6">
                                <div class="product-inner">
                                    <h2 class="product-name">${product.name}</h2>                                                                                                           
                                    
                                    <div class="product-inner-category">
                                    </div> 
                                    
                                    <div role="tabpanel">
                                        <ul class="product-tab" role="tablist">
                                            
                                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Reviews</a></li>
                                        </ul>
                                        <div class="tab-content">
                                           
                                            <div role="tabpanel" class="tab-pane fade" id="profile">
                                                <h2>Reviews</h2>
                                                <div class="submit-review">
                                                    <p><label for="name">Review Name</label> <input name="name" type="text"></p>
                                                    
                                                    <div class="rating-chooser">
                                                        <p>Your rating</p>

                                                        <div class="rating-wrap-post">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p><label for="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit"></p>
                                                </div>
                                            </div>
                                        </div>`

    },

    displayProduct: function(product) {
        let productHtml;
        productHtml = singleProduct.getSingleProductHtml(product);
        $(".single-product-area .row .col-md-6:nth-child(2)").html(productHtml)

    }

};