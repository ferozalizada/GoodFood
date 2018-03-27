<?php
header('Access-Control-Allow-Origin: *');
include("connection.php");
echo "This is the response";
// $queryRecords = pg_query($this->conn, $sql) or die("error to fetch employees data");
// $result = pg_fetch_all($queryRecords);
// class Employee {
//  protected $conn;
//  protected $result = array();
//  function __construct() {
 
//  $db = new dbObj();
//  $connString =  $db->getConnstring();
//  $this->conn = $connString;
//  }
 
//  public function getEmployees() {
//  $sql = "SELECT * FROM rater";
//  $queryRecords = pg_query($this->conn, $sql) or die("error to fetch employees data");
//  $result = pg_fetch_all(json_encode($queryRecords));
//  return json_encode($result);
//  }
// }
?>