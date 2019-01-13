var map = L.map('mapid').setView([17.3331,78.5794], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([17.3331,78.5794]).addTo(map)
    .bindPopup('I live here.')
    .openPopup();