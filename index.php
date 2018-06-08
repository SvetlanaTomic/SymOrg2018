<?php
session_start();
include 'api/config.php';
$xml = get_config('api/restricted/config.xml');
$conn = connect($xml);
?>
<!DOCTYPE html>
<html>
	<head>
		<title>NASLOV VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />

			<!-- JQuery -->
		<script src="//code.jquery.com/jquery-latest.min.js"></script>
		
		<!-- BOOTSTRAP -->
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		<!-- Set the viewport and unable user zoom -->
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		
		<!-- icons -->
		<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
		<link rel="stylesheet" href="css.css">
		<!-- CKEditor -->
        <!--<script src="ckeditor/ckeditor.js"></script>-->
		<script src="https://cdn.ckeditor.com/4.6.2/basic/ckeditor.js"></script>
	</head>

<body>
<?php
    $input_form = <<<EOD
    <form name="login" id="login" method="POST" action="izlaz.php">
   
    <html>

<div id="header-wrapper">
		<div id="header">
			<div id="logo">
				<h1>Prijava za paušalno oporezivanje</h1>
			</div>
		</div>
	</div>
<ul>
<li>
	<text>Šifra delatnosti</text>
    <input  type="text" name="field1" class="field-style field-split align-right 1" placeholder="Prostor za unos podataka" name="Sifra" id="Sifra" value="" />  
</li>
<li>
	<text>Adresa</text>
	<input  type="text" name="field2" class="field-style field-split align-right 2" placeholder="Prostor za unos podataka" name="Adresa" id="Adresa" value=""/> 
</li>
<li>
	<text>Opština</text>
	<input  type="text" name="field2" class="field-style field-split align-right 3" placeholder="Prostor za unos podataka" name="Mesto" id="Mesto" value=""/> 
</li>
<li>
	<text>Zona uokviru opštine</text>
	<input  type="text" name="field2" class="field-style field-split align-right 4" placeholder="Prostor za unos podataka" name="zona" id="zona" value=""/> 
</li>
<li>
	<text>Visina prosečne mesečne zarade</text>
	<input  type="text" name="field1" class="field-style field-split align-right 5" placeholder="Prostor za unos podataka" name="Prosecna zarada" id="Prosecna zarada" value=""/>
</li>
<li>
	<text>Broj poslovnih jedinica</text>
	<input  type="text" name="field2" class="field-style field-split align-right 6" placeholder="Prostor za unos podataka" name="Broj poslovnih jedinica" id="Broj poslovnih jedinica" value=""/>
</li>
<li>
	<text>Broj zaposlenih radnika</text>
	 <input  type="text" name="field1" class="field-style field-split align-right 7" placeholder="Prostor za unos podataka" name="Broj zaposlenih radnika" id="Broj zaposlenih radnika" value=""/>
</li>
<li>
	<text>Rad na terenu</text>

	<select  class="field-style field-split align-right 8" name="Teren" id="Teren" value="">
		<option value="Da">Da</option>
		<option value="Ne">Ne</option>
	</select>
</li>
<li>
	<text>Prvo zaposlenje</text>
	<select class="field-style field-split align-right 9" name="Prvo zaposlenje" id="Prvo zaposlenje" value="">
		<option value="Da">Da</option>
		<option value="Ne">Ne</option>
	</select>
</li>
<li>
	<text>Duga nezaposlenost</text>
	 <select  class="field-style field-split align-right 10" name="Nezaposlenost" id="Nezaposlenost" value="">
		<option value="Da">Da</option>
		<option value="Ne">Ne</option>
	</select>
</li>
<li>
	<text>Fiksno radno vreme?</text>
	 <select  class="field-style field-split align-right 11" name="username" id="username" value="">
		<option value="Da">Da</option>
		<option value="Ne">Ne</option>
	</select>
</li>
<li>
	<text>Duže odsustvo preduzetnika</text>
   <select  class="field-style field-split align-right 12" name="Odsustvo" id="Odsustvo" value="">
		<option value="Da">Da</option>
		<option value="Ne">Ne</option>
	</select>
</li>
<li>
	<text>Vreme ostvarivanja delatnosti</text>
     <input   type="text" name="field1" class="field-style field-split align-right 13" placeholder="Prostor za unos podataka" name="Vreme rada" id="Vreme rada" value=""/>
</li>
<li>
	<text>Kategorija invaliditeta</text>
	<select  type="text" name="field1" class="field-style field-split align-right 14" placeholder="Prostor za unos podataka" name="Invalid" id="Invalid" value="">
		<option value="0">0</option>
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
	</select>
</li>
<li>
	<text>Starost obveznika</text>
    <input   type="text" name="field1" class="field-style field-split align-right 15" placeholder="Prostor za unos podataka" name="Starost obveznika" id="Starost obveznika" value=""/>
</li>
<li>
	<text>Površina lokala u m<sup>2</sup></text>
    <input type="text" name="field2" class="field-style field-split align-right" placeholder="Prostor za unos podataka" name="Povrsina lokala" id="Povrsina lokala" value=""/>
</li>
<!--
<li>
	<text>Šifra delatnosti</text>
    <input type="text" name="field3" class="field-style field-split align-right" placeholder="Kriterijum" />
</li>
<li>
	<text>Šifra delatnosti</text>
    <input type="text" name="field3" class="field-style field-split align-right" placeholder="Kriterijum" />
</li>
<li>
	<text>Šifra delatnosti</text>
    <input type="text" name="field3" class="field-style field-split align-right" placeholder="Kriterijum" />
</li>
<li>
	<text>Šifra delatnosti</text>
    <input type="text" name="field3" class="field-style field-split align-right" placeholder="Kriterijum" />
</li>
<li>
	<text>Šifra delatnosti</text>
	<input type="text" name="field1" class="field-style field-split align-right" placeholder="Kriterijum" />
</li>
-->
    <p><input type="submit" name="submit" id="submit" value="Pošalji upit"/> 
    </form>
EOD;
if(isset($_GET['msg'])) echo '<p>'.$_GET['msg'].'</p>'; //If message is set echo it

echo $input_form;
?>
</body>

</html> 