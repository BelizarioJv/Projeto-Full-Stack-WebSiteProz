const resposta = await fetch("back-end/detailStudent.php");
const dados = await resposta.json();
document.getElementById("name-student").innerText = dados.nomeAluno;
document.getElementById("course-student").innerText = dados.cursoAluno;
