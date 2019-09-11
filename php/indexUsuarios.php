<?php
require_once '../vendor/autoload.php';
require_once '../clases/BaseDeDatos.php';
require_once '../clases/Usuarios.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
    $BDD = new BaseDeDatos(); 



 if (isset($_POST['nombreUsuario']) && !empty($_POST['nombreUsuario']) && isset($_POST['correoUsuario']) && !empty($_POST['correoUsuario']) && isset($_POST['idUsuario']) && !empty($_POST['idUsuario']) &&
     isset($_POST['direccionUsuario']) && !empty($_POST['direccionUsuario']) && isset($_POST['telefonoUsuario']) && !empty($_POST['telefonoUsuario']) && isset($_POST['contrasenaUsuario']) && !empty($_POST['contrasenaUsuario']) &&
     isset($_POST['paisUsuario']) && !empty($_POST['paisUsuario']) && isset($_POST['nacimientoUsuario']) && !empty($_POST['nacimientoUsuario']) && isset($_POST['generoUsuario']) && !empty($_POST['generoUsuario'])) {
    

    $usuarios = new Usuarios('../imgFotosPerfil/avatar.png',$_POST['nombreUsuario'],$_POST['correoUsuario'],'false',$_POST['idUsuario'],$_POST['direccionUsuario'],$_POST['telefonoUsuario'],$_POST['contrasenaUsuario'],$_POST['paisUsuario'],$_POST['nacimientoUsuario'],$_POST['generoUsuario']);
    $result = $usuarios->insertarUsuario($BDD->getDB());
    $contenido = "Nombre: ".$_POST['nombreUsuario']."\nCorreo: ".$_POST['correoUsuario']."\nMensaje: Activa tu cuenta en Producto mas, haz click en la siguiente URL www.google.com";
    mail("enocantrivmor@yahoo.com","Activar tu cuenta en PRODUCTOYMÁS",$contenido);
    /* $datos = array(
        'nombreUsuario'=>$_POST['nombreUsuario'],
        'correoUsuario'=>$_POST['correoUsuario'],
        'idUsuario'=>$_POST['idUsuario'],
        'direccionUsuario'=>$_POST['direccionUsuario'],
        'telefonoUsuario'=>$_POST['telefonoUsuario'],
        'contrasenaUsuario'=>$_POST['contrasenaUsuario'],
        'paisUsuario'=>$_POST['paisUsuario'],
        'nacimientoUsuario'=>$_POST['nacimientoUsuario'],
        'generoUsuario'=>$_POST['generoUsuario']
);
$json = json_encode($datos);
echo $json; */
 echo '{"datos":"guardados"}';
 } else {
     echo '{"datos":"incompletos"}';
 }
 
?>