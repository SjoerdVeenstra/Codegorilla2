<html>
<head>
<title>PHP opdracht1a</title>

</head>
<body>



<h1 style= "color:rgb(19, 160, 226); font-family:Helvetica; font-weight:bold;">Inschrijfformulier leraren</h1>
<form action="phpopdracht1a.php" method="post">
<input type="text" name="naam" onsubmit="test_input1()" placeholder="Naam" style="width:20%; padding:10px; margin:5px; color:rgb(19, 160, 226); border-radius:5px; 
font-weight:bold; margin-left:5%;"><br>
<input type="text" name="straat" placeholder="Straat" style="width:20%; padding:10px; margin:5px; color:rgb(19, 160, 226); border-radius:5px; 
font-weight:bold; margin-left:5%;"><br>
<input type="text" name="postcode" placeholder="Postcode" style="width:20%; padding:10px; margin:5px; color:rgb(19, 160, 226); border-radius:5px; 
font-weight:bold; margin-left:5%;"><br>
<input type="text" name="woonplaats" placeholder="Woonplaats" style="width:20%; padding:10px; margin:5px; color:rgb(19, 160, 226); border-radius:5px; 
font-weight:bold; margin-left:5%;"><br>
<input type="email" name="emailadres" onsubmit="test_input2()" placeholder="E-mailadres" style="width:20%; padding:10px; margin:5px; color:rgb(19, 160, 226); border-radius:5px; 
font-weight:bold; margin-left:5%;"><br>
<input type="number" name="phonenumber" placeholder="Telefoonnummer" style="width:20%; padding:10px; margin:5px; color:rgb(19, 160, 226); border-radius:5px; 
font-weight:bold; margin-left:5%;"><br><br>
<h5 style= "color:rgb(19, 160, 226); font-family:Helvetica; font-weight:bold; margin-left:5%">Geboortedatum</h5>
<input type="date" name="geboortedatum" placeholder="Geboortedatum" style="width:20%; padding:10px; margin:5px; color:rgb(19, 160, 226); border-radius:5px; 
font-weight:bold; margin-left:5%;"><br>
<input type="radio" name="gender" value="male" style="margin-left:5%;"> Man
            <input type="radio" name="gender" value="female" style="margin-left:5%;"> Vrouw<br>
<input type="text" name="vak" placeholder="Vak" style="width:20%; padding:10px; margin:5px; color:rgb(19, 160, 226); border-radius:5px; 
font-weight:bold; margin-left:5%;"><br>
<textarea rows="4" cols="50" placeholder="Opmerkingen..." style="color:rgb(19, 160, 226); font-weight:bold; margin-left:5%;"></textarea><br>
<input type="submit" name="submit" style="width:20%; padding:10px; margin:5px; color:rgb(19, 160, 226); border-radius:5px; 
font-weight:bold; margin-left:5%; cursor:pointer;"><br>
</form>


<?php
$name = test_input1($_POST["naam"]);
if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
  $nameErr = "Only letters and white space allowed"; 
}

$email = test_input2($_POST["emailadres"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format"; 
}

?>


</body>
</html>