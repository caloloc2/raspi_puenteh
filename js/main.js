

$('.linea .item').mouseup(function(event) {
	/* Act on the event */
	console.log('soltado!');
	Colores(event, '#008000');
	Guarda_Valor(0);
});

$('.linea .item').mousedown(function(event) {
	/* Act on the event */
	console.log('presionando...', event.currentTarget.id);
	Colores(event, '#FF5252');
	Guarda_Valor(event.currentTarget.id);
});

function Colores(event, color){
	try {
		$('#'+event.currentTarget.id).css({
			'background': color
		});
	} catch(e) {		
	}
}

function Guarda_Valor(valor){
	$.ajax({
		url: 'php/valores.php',
		data: {
			valor: valor
		},
		type: "POST",
		dataType: 'json',
		async: false,
		success: function(datos) {			
			console.log(datos);
		},
		error:function(e){
			console.log(e.responseText); // muestra el error si lo hay
		}
	});	
}