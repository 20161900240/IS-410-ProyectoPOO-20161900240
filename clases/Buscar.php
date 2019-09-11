<?php
 class Buscar{
    private $nombreUsuario;
    private $contrasenaUsuario;

    public function __construct(){
    
    }

    public function retornarID($BDD){
       $id = $BDD
       ->getReference('Usuarios')->getChildKeys();
       return $id;
    }
    public function retornarDatosPorID($BDD,$ID){
       $id = $BDD
       ->getReference('Usuarios')->getChild($ID)->getValue();
       return $id;
    }


 }
?>