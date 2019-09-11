<?php
 if (isset($_POST['nombreEmpresa']) && !empty($_POST['nombreEmpresa']) && isset($_POST['correoEmpresa']) && !empty($_POST['correoEmpresa']) && isset($_POST['idEmpresa']) && !empty($_POST['idEmpresa'])
    && isset($_POST['telefonoEmpresa']) && !empty($_POST['telefonoEmpresa']) && isset($_POST['paginaWebEmpresa']) && !empty($_POST['paginaWebEmpresa']) && isset($_POST['faceEmpresa']) && !empty($_POST['faceEmpresa'])
    && isset($_POST['twitEmpresa']) && !empty($_POST['twitEmpresa']) && isset($_POST['contrasenaEmpresa']) && !empty($_POST['contrasenaEmpresa'])  && isset($_POST['longitudEmpresa']) && !empty($_POST['longitudEmpresa'])
     && isset($_POST['latitudEmpresa'])  && !empty($_POST['latitudEmpresa']) && isset($_POST['paisEmpresa']) && !empty($_POST['paisEmpresa']) && isset($_POST['fundacionEmpresa'])  && !empty($_POST['fundacionEmpresa']) 
    && ($_FILES['bannerEmpresa']['type']=="image/pjpeg"  || $_FILES['logoEmpresa']['type']=="image/pjpeg"
         || $_FILES['bannerEmpresa']['type']=="image/PJPEG"  || $_FILES['logoEmpresa']['type']=="image/PJPEG"
         || $_FILES['bannerEmpresa']['type']=="image/jpeg" || $_FILES['logoEmpresa']['type']=="image/jpeg"
         || $_FILES['bannerEmpresa']['type']=="image/JPEG" || $_FILES['logoEmpresa']['type']=="image/JPEG"
         || $_FILES['bannerEmpresa']['type']=="image/png" || $_FILES['logoEmpresa']['type']=="image/png"
         || $_FILES['bannerEmpresa']['type']=="image/PNG" || $_FILES['logoEmpresa']['type']=="image/PNG"
         || $_FILES['bannerEmpresa']['type']=="image/gif" || $_FILES['logoEmpresa']['type']=="image/gif")){
            
            // guardando las imagenes
        /* move_uploaded_file($_FILES["logoEmpresa"]["tmp_name"], "../imgLogos/".$_FILES['logoEmpresa']['name']);
         move_uploaded_file($_FILES["bannerEmpresa"]["tmp_name"], "../imgBanners/".$_FILES['bannerEmpresa']['name']);*/
              
        $datos = array(
        'nombreEmpresa'=>$_POST['nombreEmpresa'],
        'correoEmpresa'=>$_POST['correoEmpresa'],
        'idEmpresa'=>$_POST['idEmpresa'],
        'telefonoEmpresa'=>$_POST['telefonoEmpresa'],
        'paginaWebEmpresa'=>$_POST['paginaWebEmpresa'],
        'faceEmpresa'=>$_POST['faceEmpresa'],
        'twitEmpresa'=>$_POST['twitEmpresa'],
        'contrasenaEmpresa'=>$_POST['contrasenaEmpresa'],
        'longitudEmpresa'=>$_POST['longitudEmpresa'],
        'latitudEmpresa'=>$_POST['latitudEmpresa'],
        'paisEmpresa'=>$_POST['paisEmpresa'],
        'fundacionEmpresa'=>$_POST['fundacionEmpresa'],
        'bannerEmpresa' => "../imgBanners/".$_FILES['bannerEmpresa']['name'],
        'logoEmpresa' => "../imgLogos/".$_FILES['logoEmpresa']['name']
        );
        $json = json_encode($datos);
        echo $json;
}else{
    $datos1 = array('datos'=>'false');
    $json1 = json_encode($datos1);
    echo $json1;
} 

?>