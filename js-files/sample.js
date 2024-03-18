
document.addEventListener('DOMContentLoaded', function() {
    const serviceDivs = document.querySelectorAll('[class="service"]'); // Select all divs with class starting with "service-"

    serviceDivs.forEach(function(serviceDiv) {
        const accordionBtn = serviceDiv.querySelector('.accordion-btn');
        const hideContent = serviceDiv.querySelector('.hide');

        accordionBtn.addEventListener('click', function() {
            if (hideContent.style.display === 'none') {
                hideContent.style.display = 'block';
                accordionBtn.src = 'images/Union-.svg'; // Change image to minus sign
            } else {
                hideContent.style.display = 'none';
                accordionBtn.src = 'images/Union1.svg'; // Change image to plus sign
            }
        });
    });
});


  