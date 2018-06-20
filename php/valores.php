<?php
$respuesta['estado'] = false; 

try{
	//  obtiene el valor del boton presionado
	$valor = $_POST['valor'];
	
	// guarda en el archivo valores.ph
	// la extension del archivo puede ser cualquier (.txt, .aaa, .proyecto ..... etc.)	
	if (!is_numeric($valor)){
		$valor = 0;
	}
	
	$fp = fopen("valores.ph", "w");
	fputs($fp, $valor);
	fclose($fp);
		
	$respuesta['estado'] = true;
}catch(Exception $e){
	fclose($fp);
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);