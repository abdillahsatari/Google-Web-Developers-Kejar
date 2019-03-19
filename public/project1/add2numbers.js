
var angka = document.querySelectorAll('input');

function resetForm(){
		angka[0].value = "";
		angka[1].value = "";
		angka[2].value = "";
		// pesan.innerHTML="";
}

function cek(){

	if(angka[0].value == "" && angka[1].value == ""){
		alert("please fill the number");
		exit;
	} else if (angka[0].value == "") {
		alert("First number should not be empty");
		exit;
	} else if (angka[1].value == "") {
		alert("Second number should not be empty");
		exit;
	}
 }

function kalkulator(){
	cek();
	var opt = document.getElementById("mySelect").value;
	let i1= parseInt(angka[0].value) ; //angka pertama   
	let i2= parseInt(angka[1].value) ; //angka kedua
  		
  		if (opt == "tambah") {
				// var hasil = i1 + i2;
				let i3= angka[2].value= i1 + i2 ;
			}else if (opt == "kurang") {
				
				let i4= angka[2].value= i1 - i2 ;
			}else if (opt == "kali") {
				
				let i4= angka[2].value= i1 * i2 ;
			}else if (opt == "bagi") {
				
				let i4= angka[2].value= i1 / i2 ;
			}
	
	// let i3= angka[2].value= i1 + i2 ;

	var pesan = document.getElementById('message');
	pesan.innerHTML="Selesai";
}

let tombol = document.querySelector('button'); 
tombol.addEventListener('click', kalkulator);