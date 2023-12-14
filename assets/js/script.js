$(document).ready(function () {
    let html = '';
    arrayImages.forEach(image => {
        html += `
            <li class="item">
                <div>
                    <div class="polaroid">
                        <img src="${image.image}">
                        <div class="caption">${image.description}</div>
                    </div>
                </div>
            </li>
        `;
    })
    $('#photos').append(html);
});