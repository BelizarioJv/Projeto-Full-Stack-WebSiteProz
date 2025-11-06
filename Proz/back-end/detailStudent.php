<?php
// Conexão com o banco de dados
$host = '127.0.0.1';
$db = 'alunoproz';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass, $db);

// Verifica conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Pegando o nome e o curso do primeiro aluno
$sql = "SELECT nomeAluno, cursoAluno FROM alunoproz LIMIT 1";
$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
    $linha = $resultado->fetch_assoc();
    echo json_encode($linha); 
} else {
    echo json_encode(["erro" => "Nenhum nome encontrado"]);
}


$conn->close();
?>
