        // جلب البيانات من الـ localStorage
        var order = JSON.parse(localStorage.getItem("order"));

        // اسند البيانات في صفحة الـ order
        if (order) {
            var foodImage = document.getElementById("food-image");
            var foodTitle = document.getElementById("food-title");
            var foodPrice = document.getElementById("food-price");

            foodImage.src = order.image;
            foodTitle.textContent = order.name;
            foodPrice.textContent = order.price;
        } else {
            var foodTitle = document.getElementById("food-title");
            var foodPrice = document.getElementById("food-price");

            foodTitle.textContent = "No order details found.";
            foodPrice.textContent = "";
        }
        //**////////////////////////////////////////////// */
        document.getElementById('btn').addEventListener('click', function() {

            var qty=document.getElementById('qty').value;
            var fullName = document.getElementById('fullName').value;
            var phoneNumber = document.getElementById('phoneNumber').value;
            var email = document.getElementById('Email').value;
            var address = document.getElementById('Address').value;
//تخزين البيانات في اوبجكت
            var orderDetails = {
                qty:qty,
                fullName: fullName,
                phoneNumber: phoneNumber,
                email: email,
                address: address
            };
//رفع البيانات على localstorg
            localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
            window.location.href = 'info.html';
        });
        
        