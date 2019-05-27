
<?php 

$first_name = "Michal";
$surname ="Timko";

$year_of_birth =1939;
$height =184;
define("SERVER_SOTWARE","Apache");
define("MY_OS","Windows");

echo "First name: ",$first_name;?>
<br>
<?php echo "Surname: ",$surname;?>
<br>

<?php
echo "Year of birth: ",$year_of_birth;?>
<br>
<?php echo "height: ",$height;
?>
<br>

<?= "This server is running on ",SERVER_SOTWARE ?>
<br>
<?php echo "My operating system is ",MY_OS ?>
<br>
<?php 

?>


