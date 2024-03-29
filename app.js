document.addEventListener("DOMContentLoaded", function() {
    const checkoutButtons = document.querySelectorAll('.tit button');

    checkoutButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get product details
            const card = button.closest('.card');
            const imageSrc = card.querySelector('img').src;
            const price = card.querySelector('h4').textContent;
            const productName = card.getAttribute('data-pname');
            const productDetails = card.getAttribute('data-details');

            // Open new page for product details
            const productDetailsPage = window.open('product_details.html', '_blank');

            // Pass product details to product_details.html
            productDetailsPage.onload = function() {
                productDetailsPage.document.getElementById('product-image').src = imageSrc;
                productDetailsPage.document.getElementById('product-name').textContent = productName;
                productDetailsPage.document.getElementById('product-price').textContent = price;
                productDetailsPage.document.getElementById('product-details').textContent = productDetails;
            };
        });
    });
});


