//Código JavaScript para generar mapa Leaflet//
// Mapa Leaflet
var mapa = L.map('mapid').setView([6.26037,-75.5659238], 12);

// Capa base
var topo= L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}
).addTo(mapa);		
    
// Otra capa base
    var esri = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
  {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }
).addTo(mapa);

//Capa base toner
var Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mapa);
    
// Marcadores
alpujarra = L.marker([6.2447586,-75.5755976]);
alpujarra.bindTooltip("La Alpujarra").openTooltip();
alpujarra.bindPopup ('<h2>La Alpujarra</h2> Enlace a <a href="https://es.wikipedia.org/wiki/Centro_Administrativo_La_Alpujarra"> Wikipedia</a><p><img src="Imagenes/Alpujarra.jpg" alt="Alpujarra" height="100" width="100"></p>').openPopup();
alpujarra.addTo(mapa);
    
atanasio = L.marker([6.256767,-75.5927425]);
atanasio.bindTooltip("Estadio Atanasio Girardot").openTooltip();
atanasio.bindPopup ('<h2>Estadio Anastasio Girardot</h2> Enlace a <a href="https://es.wikipedia.org/wiki/Estadio_Atanasio_Girardot">Wikipedia</a><p><img src="Imagenes/Estadio.jpg" alt="Estadio A.Girardot" height="100" width="100"></p>').openPopup();
atanasio.addTo(mapa);	   
    
eoh = L.marker([6.2189865,-75.5874772]);
eoh.bindTooltip("Aeropuero Olaya Herrera").openTooltip();
eoh.bindPopup('<h2>Aeropuerto Olaya Herrera</h2>Enlace a <a href="https://es.wikipedia.org/wiki/Aeropuerto_Olaya_Herrera"> Wikipedia </a><p><img src="Imagenes/eoh.jpg" alt="Aeropuerto" height="100" width="100"></p>').openPopup();
eoh.addTo(mapa);	    	    
        
// Conjunto de capas base
var mapasBase = {
    "Aérea": esri,
    "Topográfico": topo,
    "Tinta negra": Toner		
    
};	    
    
// Control de capas
    L.control.layers(mapasBase).addTo(mapa);

//Agregar control de escala
    L.control.scale({position:'bottomright', imperial: false}).addTo(mapa);
