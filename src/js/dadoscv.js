let usuarioString = sessionStorage.getItem('usuario');
let usuariojson = JSON.parse(usuarioString);

window.addEventListener('load', function(){
    document.getElementById("cargo").innerHTML = usuariojson.cargo;
    document.getElementById("telefone").innerHTML = usuariojson.telefone;
    document.getElementById("email").innerHTML = usuariojson.email;
    document.getElementById("nome").innerHTML = usuariojson.nome;
    document.getElementById("idioma").innerHTML = usuariojson.curriculo.idioma;
    document.getElementById("proficiencia").innerHTML = usuariojson.curriculo.proficiencia;
    document.getElementById("curso").innerHTML = usuariojson.curriculo.curso;
    document.getElementById("grau").innerHTML = usuariojson.curriculo.grau;
    document.getElementById("instituicao").innerHTML = usuariojson.curriculo.instituicao;
    document.getElementById("inicio").innerHTML = usuariojson.curriculo.inicio;
    document.getElementById("termino").innerHTML = usuariojson.curriculo.termino;
    document.getElementById("cargo").innerHTML = usuariojson.curriculo.cargo;
    document.getElementById("empresa").innerHTML = usuariojson.curriculo.empresa;
    document.getElementById("descricao").innerHTML = usuariojson.curriculo.descricao;
    document.getElementById("comeco").innerHTML = usuariojson.curriculo.comeco;
    document.getElementById("saida").innerHTML = usuariojson.curriculo.saida;
    document.getElementById("competencia1").innerHTML = usuariojson.curriculo.competencia1;
    document.getElementById("competencia2").innerHTML = usuariojson.curriculo.competencia2;
    document.getElementById("competencia3").innerHTML = usuariojson.curriculo.competencia3;
    document.getElementById("competencia4").innerHTML = usuariojson.curriculo.competencia4;
    document.getElementById("competencia5").innerHTML = usuariojson.curriculo.competencia5;
    document.getElementById("linkedin").innerHTML = usuariojson.curriculo.linkedin;
    document.getElementById("links").innerHTML = usuariojson.curriculo.links;
    document.getElementById("atual").innerHTML = usuariojson.curriculo.atual;
    document.getElementById("cursando").innerHTML = usuariojson.curriculo.cursando;
    document.getElementById("cursos").innerHTML = usuariojson.curriculo.cursos;
    document.getElementById("resumo").innerHTML = usuariojson.curriculo.resumo;
    document.getElementById("funcao").innerHTML = usuariojson.curriculo.funcao;
});

// RESPONSIVIDADE
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

// DOWNLOAD
const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () => {
    const container = document.querySelector("#container")
    const options = {
        margin: [0, 0, 0, 0],
        filename: "currículo.pdf",
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"},
    };

    html2pdf().set(options).from(container).save();
});