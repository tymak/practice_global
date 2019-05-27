<?php
function get_current_year() 
{

    return date('Y');

}
?>
<footer>
        &copy;  <?php 
        echo get_current_year();
         ?> Me & myself
</footer>

