<?php
require_once '../vendor/autoload.php';
require_once '../clases/BaseDeDatos.php';
require_once '../clases/Buscar.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

 $BDD = new BaseDeDatos(); 

    $buscar = new Buscar();
    $result = $buscar->retornarID($BDD->getDB());
    var_dump($result);

    $datos = $buscar->retornarDatosPorID($BDD->getDB(),$result[0]);
    var_dump($datos);

    if ($datos['nombreUsuario'] === "Enoc" && $datos['contrasenaRegistro'] === '159951') {
        echo 'encontrado';
    } else {
        echo 'no encontrado';
    }
    
?>