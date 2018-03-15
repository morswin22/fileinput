<?php

if (isset($_FILES['files'], $_POST['origin'])) {
    if (!is_dir(__DIR__.'/uploaded/')) mkdir(__DIR__.'/uploaded/');
    $sent = $_FILES['files'];
    $types = array('image/jpeg','image/pjpeg','image/png');
    foreach($sent['type'] as $k => $type) {
        if (in_array($type, $types)) {
            $fname = $sent['name'][$k];
            $ftmp = $sent['tmp_name'][$k];
            $path = __DIR__.'/uploaded/'.$fname;
            if (is_file($path)) {
                $n = 0;
                $filename  = pathinfo($fname, PATHINFO_FILENAME);
                $extension = pathinfo($fname, PATHINFO_EXTENSION);
                while (is_file($path)) {
                    $n++;
                    $path = __DIR__.'/uploaded/'.$filename.' ('.$n.').'.$extension;
                }
            }
            move_uploaded_file($ftmp, $path);
        }
    }
    header('Location: '.$_POST['origin']);
    exit();
}

?>
