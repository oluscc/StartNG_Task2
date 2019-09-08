<?php
 $file_path = 'contact_form.txt';
 if (isset($_POST['fullName']) && isset($_POST['email']) && isset($_POST['title']) && isset($_POST['message'])) {
    $file_handler = fopen($file_path,"a+");
    $form_content = '<< '. $_POST['fullName'].' | '.$_POST['email'].' | '.$_POST['title'].' | '.$_POST['message']. ' >> ...';
    fwrite($file_handler, $form_content); // Write information to the file
    fclose($file_handler); // Close the file
 }

 echo '
        <script>
        alert("Thank You For Contacting Me");    
        window.location.replace("https://oluscc.github.io/StartNG_Tasks");
        </script>
    ';

?>
