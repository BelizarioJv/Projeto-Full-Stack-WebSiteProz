// Seleciona os botões e a área onde o formulário será exibido
const getInStudent = document.getElementById("entrar");
const registerStudent = document.getElementById("registrar");
const rightSide = document.getElementById("right-side");

// FORMULÁRIO DE LOGIN

function getInUser() {
  getInStudent.addEventListener("click", () => {
    // limpando o conteudo do right-side
    rightSide.innerHTML = "";

    // criando o formulário de login
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "back-end/login.php";

    //input email
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email:";
    labelEmail.setAttribute("for", "email");

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.name = "emailStudent";
    inputEmail.id = "email";
    inputEmail.placeholder = "Digite seu e-mail";

    //input senha
    const labelSenha = document.createElement("label");
    labelSenha.textContent = "Senha:";
    labelSenha.setAttribute("for", "password");

    const inputSenha = document.createElement("input");
    inputSenha.type = "password";
    inputSenha.name = "passwordStudent";
    inputSenha.id = "password";
    inputSenha.placeholder = "Digite sua senha";

    //botão submit
    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Entrar";

    // adicionando os elementos ao formulário
    form.append(
      labelEmail,
      inputEmail,
      document.createElement("br"),
      labelSenha,
      inputSenha,
      document.createElement("br"),
      btnSubmit
    );

    rightSide.append(form);
  });
}

// FORMULÁRIO DE REGISTRO

function registerUser() {
  registerStudent.addEventListener("click", () => {
    //limpando o conteudo do right-side
    rightSide.innerHTML = "";

    //criando o formulário de registro
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "back-end/register.php";

    //input nome completo
    const labelNameStudent = document.createElement("label");
    labelNameStudent.textContent = "Nome Completo:";
    labelNameStudent.setAttribute("for", "nameStudent");

    const nameStudent = document.createElement("input");
    nameStudent.type = "text";
    nameStudent.name = "nameStudent";
    nameStudent.id = "nameStudent";
    nameStudent.placeholder = "Digite seu nome completo";

    //input curso do aluno
    const labelCourse = document.createElement("label");
    labelCourse.textContent = "Curso:";
    labelCourse.setAttribute("for", "courseStudent");

    const courseStudent = document.createElement("input");
    courseStudent.type = "text";
    courseStudent.name = "courseStudent";
    courseStudent.id = "courseStudent";
    courseStudent.placeholder = "Digite seu curso";

    //input email
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email:";
    labelEmail.setAttribute("for", "email");

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.name = "emailStudent";
    inputEmail.id = "email";
    inputEmail.placeholder = "Digite seu e-mail";

    //input senha
    const labelSenha = document.createElement("label");
    labelSenha.textContent = "Senha:";
    labelSenha.setAttribute("for", "password");

    const inputSenha = document.createElement("input");
    inputSenha.type = "password";
    inputSenha.name = "passwordStudent";
    inputSenha.id = "password";
    inputSenha.placeholder = "Digite sua senha";

    //input confirmar senha
    const labelConfirm = document.createElement("label");
    labelConfirm.textContent = "Confirmar senha:";
    labelConfirm.setAttribute("for", "confirm");

    const inputConfirm = document.createElement("input");
    inputConfirm.type = "password";
    inputConfirm.name = "confirmPassword";
    inputConfirm.id = "confirm";
    inputConfirm.placeholder = "Confirme sua senha";

    //botão submit
    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Registrar";

    //adicionando os elementos ao formulário
    form.append(
      labelNameStudent,
      nameStudent,
      labelCourse,
      courseStudent,
      labelEmail,
      inputEmail,
      document.createElement("br"),
      labelSenha,
      inputSenha,
      document.createElement("br"),
      labelConfirm,
      inputConfirm,
      document.createElement("br"),
      btnSubmit
    );

    rightSide.appendChild(form);
  });
}

// Inicializa as funçoes
getInUser();
registerUser();
