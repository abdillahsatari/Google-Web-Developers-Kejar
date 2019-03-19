function findLocation(x,y) {    
	// console.log(x,y);        
	for (var i=0; i< places.length;i++) {        
		if (places[i].lokasi[0]==x &&             
			places[i].lokasi[1]==y) {            
			return i;        
		}    
	}    
	return -1; 
} 

function showLocation(e) {       
	//console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);    
	let ix= findLocation(e.latlng.lat,e.latlng.lng);    
	if (ix >=0) {        
		img.src= places[ix].gambar;        
		par.textContent=places[ix].review;    
	} 
} 

let gmb= document.getElementById("gmb"); 
let rev= document.getElementById("review"); 
let img= document.createElement('img'); 
let par= document.createElement('p'); 
gmb.appendChild(img); 
rev.appendChild(par); 

let r0="restoran spanyol di jakarta yang dekat dengan kantor saya"; 
let r1="warung kopi cita rasa yang sangat tinggi dengan harga yang murah"; 
let r2="Ikan bakar kualitas tinggi, hampir gosong tapi belum"; 
let r3="Steak lokal harga impor, 200gr dan 300gr mentah "; 
let r4="seafood international lobster, king crabs, cumi, kerang, semua ada"; 
let places= [     
	{"lokasi": [-5.149640, 119.438319], "sponsor" : "Resto Spanyol", "gambar":"images/planB.jpg","review": r0},    
	{"lokasi": [-5.156705, 119.444434], "sponsor" : "Warung Kopi", "gambar":"images/warkop.jpg","review": r1},    
	{"lokasi": [-5.157553, 119.438371], "sponsor" : "Pondok Ikan Bakar", "gambar":"images/ikan_bakar.jpg","review": r2},    
	{"lokasi": [-5.154828, 119.440388], "sponsor" : "STEAK cow", "gambar":"images/steak.jpg","review": r3},
	{"lokasi": [-5.160113, 119.447562], "sponsor" : "Rupa-rupa Seafood!!", "gambar":"images/seafood.jpg","review": r4} 
	]; 

for (var p of places) {    
	var marker= L.marker(p.lokasi).addTo(mymap)     
	.bindPopup(p.sponsor);    
	marker.on('click', showLocation); 
}