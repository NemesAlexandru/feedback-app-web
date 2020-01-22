window.singleProduct = {
    API_BASE_URL: "http://localhost:8085",

    getProduct: function () {
        let productId = 4;
            $.ajax({
            url: singleProduct.API_BASE_URL + "/products/" + productId,
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
                                        <img src="img/product-3.jpg" alt="">
                                    </div>
                                    
                                    <div class="product-gallery">
                                        <img src="img/product-thumb-4.jpg" alt="">
                                        <img src="img/product-thumb-4.jpg" alt="">
                                        <img src="img/product-thumb-4.jpg" alt="">
                                        <img src="img/product-thumb-4.jpg" alt="">
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
                                        <p>Category: <a href="">Electronice</p>
                                    </div> 
                                    
                                    <div role="tabpanel">
                                        <ul class="product-tab" role="tablist">
                                            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Reviews</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane fade in active" id="home">
                                                <div class="submit-review">
                                                    <p><label for="name">Review Title</label> <input name="name" type="text"></p>
                                                    <p><label for="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit"></p>
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

    }

};

singleProduct.getProduct();

