<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>

	<body>
		<?php

		// MINIFICANDO EL JS
			require 'jsmin.php';
			//$contenido = JSMin::minify(file_get_contents('example.js') . file_get_contents('example2.js'));
			//$contenido = JSMin::minify(file_get_contents('http://code.jquery.com/jquery-1.11.1.js'));
			//echo $contenido;
			//file_put_contents('example2.js',$contenido);


// RECORRIENDO DIRECTORIO		
/*$directorio = opendir("/Users/israelviveros/Sites/final-page/branch"); //ruta actual
while ($archivo = readdir($directorio)){
    if(preg_match("/.\.js$/", $archivo)){
        echo $archivo . "<br />";
    }
}*/


//COPIAR EL DIRECTORIO
function full_copy( $source, $target ) { 
	if ( is_dir( $source ) ) {
	 @mkdir( $target ); $d = dir( $source ); while ( FALSE !== ( $entry = $d->read() ) ) { if ( $entry == '.' || $entry == '..' ) { continue; } $Entry = $source . '/' . $entry; if ( is_dir( $Entry ) ) { full_copy( $Entry, $target . '/' . $entry ); continue; } copy( $Entry, $target . '/' . $entry ); } $d->close(); 
	}else { 
		copy( $source, $target ); 
	} 
}

$source ='/Users/israelviveros/Sites/televisa-test/item-page-gsa/'; 
$destination = '/Users/israelviveros/Sites/televisa-test/'.date('Y-m-d'); 

//full_copy($source, $destination);


rename('/Users/israelviveros/Sites/televisa-test/mio/', '/Users/israelviveros/Sites/televisa-test/tuyo/')






		?>
	</body>
</html>