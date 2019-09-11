<?php
class Usuarios{
        private $fotoPerfil;
        private $nombreUsuario;
        private $correo;
        private $verificacionCorreo;
        private $idUsuarioPersonal;
        private $direccion;
        private $telefono;
        private $contrasenaUsuario;
        private $pais;
        private $fechaNacimiento;
        private $publicacionesFavoritas  = array('IDPublicacion'=>'Soy una publicacion');
        private $empresasFavoritas = array('IDEmpresa'=>'Holasoyuna Empresa');
        private $genero;
        
    public function __construct(
        $fotoPerfil,
        $nombreUsuario,
        $correo,
        $verificacionCorreo,
        $idUsuarioPersonal,
        $direccion,
        $telefono,
        $contrasenaUsuario,
        $pais,
        $fechaNacimiento,
        $genero){
        $this->fotoPerfil = $fotoPerfil;
        $this->nombreUsuario = $nombreUsuario;
        $this->correo = $correo;
        $this->verificacionCorreo = $verificacionCorreo;
        $this->idUsuarioPersonal = $idUsuarioPersonal; 
        $this->direccion = $direccion;
        $this->telefono = $telefono;
        $this->contrasenaRegistro = $contrasenaUsuario;
        $this->pais = $pais;
        $this->fechaNacimiento = $fechaNacimiento;
        $this->genero = $genero;
    }

    public function insertarUsuario($BDD){
        $resultado = $BDD
        ->getReference('Usuarios')
        ->push([
            'nombreUsuario'         =>   $this->nombreUsuario,
            'correo'                =>   $this->correo,
            'verificacionCorreo'    =>   $this->verificacionCorreo,
            'idUsuarioPersonal'     =>   $this->idUsuarioPersonal,
            'direccion'             =>   $this->direccion,
            'telefono'              =>   $this->telefono,
            'contrasenaUsuario'    =>   $this->contrasenaUsuario,
            'pais'                  =>   $this->pais,
            'fechaNacimiento'       =>   $this->fechaNacimiento,
            'genero'                =>   $this->genero,
            'rutaFotoPerfil'        =>   $this->fotoPerfil,
            'empresasFavoritas'     =>   $this->empresasFavoritas,
            'publicacionesFavoritas'=>   $this->publicacionesFavoritas
        ]);
        return $resultado;
    }

    public function actualizarUsuario(){

        
    }
}
?>