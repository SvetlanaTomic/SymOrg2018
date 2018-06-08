<?php
	function connect($xml) {		
		// create connection
		//$conn = new mysqli($xml->web->hostname, $xml->web->username, $xml->web->password, $xml->web->database);
		$conn = new mysqli('localhost', 'root', '', 'symorgdb');
		// check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 
		
		// this will make sure cyrilic letters are displayed properly
		$conn->query("SET NAMES utf8");
		
		return $conn;
	}
	
	function get_config($config) {
		// load configuration file
		$xml = simplexml_load_file($config) or die("Error: Cannot load configuration file");
		return $xml;
	}
	
	
?>