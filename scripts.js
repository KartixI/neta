document.querySelectorAll('.left ul li').forEach(item => {
    item.addEventListener('click', event => {
        const text = event.target.getAttribute('data-text');
        const imgSrc = event.target.getAttribute('data-img');

        const container = document.getElementById('container');
        container.innerHTML = `
            <div class="popup-container">
                <div class="text-container">
                    <p>${text}</p>
                </div>
                <div class="image-container">
                    <img src="${imgSrc}" alt="">
                </div>
            </div>
        `;
    });
});
