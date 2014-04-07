function removeAcento(palavra) {

	palavra = palavra.toLowerCase();
	var a = "áãàâéèêíïîóõòôúùûç";
	var b = "aaaaeeeiiioooouuuc";

	var qtda = a.length;
	var re;


	for (var i = 0; i < qtda; i++) {
		re = new RegExp(a[i], "g");
		palavra = palavra.replace(re, b[i]);
	
	};

	return palavra;

}