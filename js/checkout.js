window.Checkout = {
    API_BASE_URL: "http://localhost:8085",

    createProduct: function () {
        let nameValue = $("#shipping_first_name").val();
        let imageUrlValue = $("#order_comments").val();

        let requestBody = {
            imageUrl: imageUrlValue,
            name: nameValue
        };
        $.ajax({
            url: Checkout.API_BASE_URL + "/products",
            method: "POST",
            //MIME type
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        }).done(function () {
            // ToDoList.getItems();
            window.location.replace("shop.html");
        })

    },

    bindEvents: function () {
        $(".checkout").submit(function (event) {
            event.preventDefault();

            Checkout.createProduct();

        })
    }

};

Checkout.bindEvents();