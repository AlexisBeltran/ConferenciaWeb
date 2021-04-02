(function () {
    'use strict';   
    document.addEventListener('DOMContentLoaded', function(){
        var map = L.map('mapa').setView([23.230038, -106.426417], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([23.230038, -106.426417]).addTo(map)
            .bindPopup('MztWebCamp 2021 <br> Boletos ya disponibles')
            .openPopup();

    });
})();