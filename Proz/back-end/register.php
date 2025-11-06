<?php
// Conexão com o banco de dados
$host = '127.0.0.1';
$db = 'alunoproz';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Erro na conexão: " . $conn->connect_error);
}
//Salva os dados do formulário e verifica se as senhas coincidem

$nome = $_POST['nameStudent'];
$curso = $_POST['courseStudent'];
$email = $_POST['emailStudent'];
$senha = $_POST['passwordStudent'];
$confirmSenha = $_POST['confirmPassword'];

if ($senha !== $confirmSenha) {
  die("As senhas não coincidem.");
}

// Verifica se o email já está cadastrado
$sqlCheck = "SELECT * FROM alunoproz WHERE emailAluno = ?";
$stmtCheck = $conn->prepare($sqlCheck);
$stmtCheck->bind_param("s", $email);
$stmtCheck->execute();
$resultCheck = $stmtCheck->get_result();

if ($resultCheck->num_rows > 0) {
  die("Este email já está cadastrado.");
}

// Insere os dados no banco
$sql = "INSERT INTO alunoproz (emailAluno, senhaAluno, nomeAluno, cursoAluno) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $email, $senha, $nome, $curso);

if ($stmt->execute()) {
  header("Location: ../login.html");
  exit(); 
} else {
  echo "Erro ao cadastrar: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>