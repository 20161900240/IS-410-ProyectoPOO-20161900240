<?php
require_once '../vendor/autoload.php';
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

class BaseDeDatos{
    private $db;
    private $URI = 'https://datosproyecto-924c8.firebaseio.com/';
    private $keyFile = '../secret/datosproyecto-924c8-22d7325dfb50.json';
    public function __construct(){
        $serviceAccount = ServiceAccount::fromJsonFile($this->keyFile);
        $firebase = (new Factory)
            ->withServiceAccount($serviceAccount)
            ->withDatabaseUri($this->URI)
            ->create();

        $this->db = $firebase->getDatabase();
    }

    public function getDB(){
        return $this->db;
    }
}

?>