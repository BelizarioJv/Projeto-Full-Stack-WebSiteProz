/*Crinado funçao para criar dinamicamente a lista de caracteristicas e imagem da qualificaçao especifica */
function chooseQualification() {
  const selectQualification = document.getElementById("qualificationInput");

  const qualifications = {
    enfermagem: {
      itens: [
        "Trabalhe antes de se formar com ensino modular e certificações intermediárias",
        "5 Certificados extras",
        "Aulas práticas semanais",
        "Salas equipadas como um hospital real",
        "Estágio curricular garantido pela Proz",
        "100% professores atuantes no mercado",
        "+1600 materiais incluídos para aulas práticas",
        "90% dos alunos empregados nos hospitais que atuamos",
        "Ampla rede de atuação",
        "Reconhecido pelo MEC",
      ],
      img: "assets/img/Enfermagem-1-min.webp",
    },
    desenvolvimento: {
      itens: [
        "Aulas práticas desde o 1º dia",
        "Salas de aula equipadas com computadores (não precisa ter um)",
        "Crie sites, apps e sistemas do zero",
        "Além do diploma, tenha mais 4 qualificações profissionais",
        "Salários acima da média logo no início da carreira",
        "Área em crescimento no Brasil e no mundo",
        "Maiores chances de trabalhar de casa",
        "Aprenda segurança digital e as linguagens mais pedidas",
        "Habilidades técnicas + soft skills pra se destacar",
        "Reconhecido pelo MEC",
      ],
      img: "assets/img/Dev-de-Sistemas-1-min.webp",
    },
  };

  selectQualification.addEventListener("change", function () {
    const selected = this.value;
    const listContent = document.getElementById("list-content");
    const midiaContent = document.getElementById("midia-content");

    if (listContent) listContent.innerHTML = "";
    if (midiaContent) midiaContent.innerHTML = "";

    if (!qualifications[selected]) return;

    const { itens, img } = qualifications[selected];

    const ul = document.createElement("ul");
    itens.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    listContent.appendChild(ul);

    const image = document.createElement("img");
    image.src = img;
    midiaContent.appendChild(image);
  });
}

chooseQualification();
