document.addEventListener('DOMContentLoaded', function () {
  var mapContainer = document.getElementById('map');
  mapContainer.style.height = window.innerHeight + 'px';

  L.mapbox.accessToken = 'pk.eyJ1IjoiZm9vZW56ZSIsImEiOiJrMlpXc01JIn0.ymqjCa4-xulzMO3HYRxbvg';

  drawMap();
});


function drawMap () {
  var canvasTiles = L.tileLayer.canvas();
  var map = L.mapbox.map('map', 'fooenze.11a7a104').setView([103.8126, 1.3395], 12);

  L.canvasOverlay().drawing(drawPoints).addTo(map);
}

function drawPoints (canvasOverlay, params) {
  var ctx = params.canvas.getContext('2d');
  ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);
  
  ctx.beginPath();
  points.map(function (d, i) {
    dot = canvasOverlay._map.latLngToContainerPoint( [d[0], d[1]] );
    ctx.lineTo(dot.x, dot.y);

  });
            ctx.strokeStyle = '#ffffff';
          ctx.stroke();
}