<?php
    header('Content-Type: application/json; charset=utf-8');
    
    if(!empty($_POST['name']) && !empty($_POST['phone'])){
        $data = ['name'=> $_POST['name'], 'phone'=> $_POST['phone'],'res'=>'good'];
        echo json_encode($data);
    } else {
        echo json_encode(['res'=>'falid']);
    }