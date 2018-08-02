$(document).keypress(function(event) {
	/* Act on the event */
	tecla = event.which;
	switch (tecla) {
		case 113:
			console.log('presionando...', 1);
			Guarda_Valor(1);
			break;
		case 119:
			// tecla w
			console.log('presionando...', 2);
			Guarda_Valor(2);
			break;
		case 101:
			// tecla e
			console.log('presionando...', 3);
			Guarda_Valor(3);
			break;
		case 97:
			// tecla a
			console.log('presionando...', 4);
			Guarda_Valor(4);
			break;
		case 115:
			// tecla s
			console.log('presionando...', 0);
			Guarda_Valor(0);
			break;
		case 100:
			// tecla d
			console.log('presionando...', 5);
			Guarda_Valor(5);
			break;
		case 122:
			// tecla z
			console.log('presionando...', 6);
			Guarda_Valor(6);
			break;
		case 120:
			// tecla x
			console.log('presionando...', 7);
			Guarda_Valor(7);
			break;
		case 99:
			// tecla c
			console.log('presionando...', 8);
			Guarda_Valor(8);
			break;		
	}
});

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