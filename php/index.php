<?php
require_once '../vendor/autoload.php';
require_once '../clases/BaseDeDatos.php';
require_once '../clases/Usuarios.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;


 $BDD = new BaseDeDatos();
 echo "Se conecto";

// echo '<pre>';
// var_dump($BDD->getDB());
// echo '</pre>'; 

$usuarios = new Usuarios('HERCULES','enocantrivmor@yahoo.com',null,'ComayaguaxD','98707307','123456789','Honduras','24/10/1996','M');
$result = $usuarios->insertarUsuario($BDD->getDB());
// die(print_r($BDD));



?>