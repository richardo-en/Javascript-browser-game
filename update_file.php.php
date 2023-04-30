<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $A = $_POST['A'];
  $D = $_POST['D'];
  $volume = $_POST['volume'];

  $data = "$A\n$D\n$volume";
  $file = 'data/settings.txt';

  if (file_put_contents($file, $data) !== false) {
    echo "File updated successfully.";
  } else {
    echo "An error occurred while updating the file.";
  }
}
?>