let contador = 1; 
function generateUniqueId(prefix) { 
    const uniqueId = prefix + contador; contador++; return uniqueId; }

//FORMAÇÃO
document.addEventListener("DOMContentLoaded", function() {
    var adicionarFormacaoButton = document.querySelector("#adicionar-formacao");
    var formacaoContainer = document.querySelector("#formacao-container");
    var contadorFormacao = 1;
  
    adicionarFormacaoButton.addEventListener("click", function() {
        var novaFormacao = document.createElement("div");
        novaFormacao.innerHTML = `
            <div id="formacao-container">
                Curso: <input class="texto" type="text" id="curso${contadorFormacao}" name="curso${contadorFormacao}"><br>
                Instituição: <input class="texto" type="text" id="instituição${contadorFormacao}" name="instituição${contadorFormacao}"><br>
                Grau: <select name="grau${contadorFormacao}" id="grau${contadorFormacao}">
                    <option value="" disabled selected>Selecione uma opção</option>
                    <option value="EnsinoMédio">Ensino Médio</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Graduação">Graduação</option>
                    <option value="Especialização">Especialização</option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutorado">Doutorado</option>
                    </select><br>
                Data de Início: <input type="date" id="início${contadorFormacao}" name="início${contadorFormacao}">
                Data de Término: <input type="date" id="término${contadorFormacao}" name="término${contadorFormacao}">
                <input type="checkbox" id="cursando${contadorFormacao}" name="cursando${contadorFormacao}" value="Cursando">Cursando<br>
            </div>
        `;
        formacaoContainer.appendChild(novaFormacao);
        contadorFormacao++;
    });
  
  });

//EXPERIÊNCIA
document.addEventListener("DOMContentLoaded", function () {
    var adicionarExperienciaButton = document.querySelector("#adicionar-experiencia");
    var experienciaContainer = document.querySelector("#experiencia-container");
    var contadorExperiencias = 1;
    adicionarExperienciaButton.addEventListener("click", function () {
        var novaExperiencia = document.createElement("div");
        novaExperiencia.innerHTML = `    
            <div id="experiencia-container"> 
                Cargo: <input class="texto" type="text" id="cargo${contadorExperiencias}" name="Cargo${contadorExperiencias}"><br>
                Empresa: <input class="texto" type="text" id="empresa${contadorExperiencias}" name="Empresa${contadorExperiencias}"><br>
                Data de Início: <input type="date" id="começo${contadorExperiencias}" name="Início${contadorExperiencias}">
                Data de Saída: <input type="date" id="saída${contadorExperiencias}" name="Saída${contadorExperiencias}">
                <input type="checkbox" id="atual${contadorExperiencias}" name="atual${contadorExperiencias}" value="Atual">Atual<br>
                Descrição das atividades: <br><textarea id="descrição${contadorExperiencias}" name="texto${contadorExperiencias}" rows="10" cols="80"></textarea><br>
            </div>
        `;
        experienciaContainer.appendChild(novaExperiencia);
        contadorExperiencias++;
    });
});

// LINKS
document.addEventListener("DOMContentLoaded", function () {
    var adicionarLinkButton = document.querySelector("#adicionar-link");
    var linkContainer = document.querySelector("#link-container");
    var contadorLinks = 1;
    adicionarLinkButton.addEventListener("click", function () {
        var novoLink = document.createElement("div");
        novoLink.innerHTML = `
            <div class="link-container">
                Outro: <input class="texto" type="url" id="links${contadorLinks}" name="links${contadorLinks}"><br>   
            </div>
        `;
        linkContainer.appendChild(novoLink);
        contadorLinks++;
    });
});

//COMPETÊNCIAS
document.addEventListener("DOMContentLoaded", function () {
    var adicionarCompetenciaButton = document.querySelector("#adicionar-competencia");
    var competenciaContainer = document.querySelector("#competencia-container");
    var contadorCompetencias = 1;
    adicionarCompetenciaButton.addEventListener("click", function () {
        var novaCompetencia = document.createElement("div");
        novaCompetencia.innerHTML = `
        <div class="competencia-container">
            <input type="text" id="competência1${contadorCompetencias}" name="competência1${contadorCompetencias}">
            <input type="text" id="competência2${contadorCompetencias}" name="competência2${contadorCompetencias}">
            <input type="text" id="competência3${contadorCompetencias}" name="competência3${contadorCompetencias}">
            <input type="text" id="competência4${contadorCompetencias}" name="competência4${contadorCompetencias}">
            <input type="text" id="competência5${contadorCompetencias}" name="competência5${contadorCompetencias}"><br>
        </div>
        `;
        competenciaContainer.appendChild(novaCompetencia);
        contadorCompetencias++;
    });
});

//CURSOS E CERTIFICAÇÕES
document.addEventListener("DOMContentLoaded", function () {
    var adicionarCursoButton = document.querySelector("#adicionar-curso");
    var cursoContainer = document.querySelector("#curso-container");
    var contadorCursos = 1;
    adicionarCursoButton.addEventListener("click", function () {
        var novoCurso = document.createElement("div");
        novoCurso.innerHTML = `
            <div clas="curso-container">
                <input class="texto" type="text" id="cursos${contadorCursos}" name="cursos${contadorCursos}"><br>
            </div>
        `;
        cursoContainer.appendChild(novoCurso);
        contadorCursos++;
    });
});

// IDIOMA
document.addEventListener("DOMContentLoaded", function () {
    var adicionarIdiomaButton = document.querySelector("#adicionar-idioma");
    var idiomaContainer = document.querySelector("#idioma-container");
    var contadorIdioma = 1;
    adicionarIdiomaButton.addEventListener("click", function () {
        var novoIdioma = document.createElement("div");
        novoIdioma.innerHTML = `
            <div class="idioma-container">
                Idioma: <input type="text" id="idioma${contadorIdioma}" name="idioma${contadorIdioma}">
                Proficiência:
                <select name="proficiência${contadorIdioma}" id="proficiência${contadorIdioma}">
                    <option value="" disabled selected>Selecione uma opção</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                    <option value="Fluente">Fluente</option>
                </select>
            </div>
        `;
        idiomaContainer.appendChild(novoIdioma);
        contadorIdioma++;
    });
});

// DADOS FORMULÁRIO
const formCV = document.getElementById('fazer-curriculo-container');
const curso = document.getElementById('curso');
const instituicao = document.getElementById('instituição');
const grau = document.getElementById('grau');
const inicio = document.getElementById('início');
const termino = document.getElementById('término');
const cursando = document.getElementById('cursando');
const cargo = document.getElementById('cargo');
const empresa = document.getElementById('empresa');
const comeco = document.getElementById('começo');
const saida = document.getElementById('saída');
const atual = document.getElementById('atual');
const descricao = document.getElementById('descrição');
const linkedin = document.getElementById('linkedin');
const links = document.getElementById('links');
const competencia1 = document.getElementById('competência1');
const competencia2 = document.getElementById('competência2');
const competencia3 = document.getElementById('competência3');
const competencia4 = document.getElementById('competência4');
const competencia5 = document.getElementById('competência5');
const cursos = document.getElementById('cursos');
const idioma = document.getElementById('idioma');
const proficiencia = document.getElementById('proficiência');
const resumo = document.getElementById('resumo');
const funcao = document.getElementById('funcao');

const btsalvar = document.getElementById('salvar');

formCV.addEventListener('submit', function () {
    let usuarioString = sessionStorage.getItem('usuario');
    let usuariojson = JSON.parse(usuarioString);

    const dataCriacao = new Date()
    let dia = String(dataCriacao.getDate()).padStart(2, "0");
    let mes = String(dataCriacao.getMonth()+1).padStart(2, "0");
    let ano = dataCriacao.getFullYear();
    const curriculoJson = {
        "resumo": resumo.value,
        "funcao": funcao.value,
        "curso": curso.value,
        "instituicao": instituicao.value,
        "grau": grau.value,
        "inicio": inicio.value,
        "termino": termino.value,
        "cursando": cursando.value,
        "empresa": empresa.value,
        "cargo": cargo.value,
        "comeco": comeco.value,
        "saida": saida.value,
        "atual": atual.value,
        "descricao": descricao.value,
        "linkedin": linkedin.value,
        "links": links.value,
        "competencia1": competencia1.value,
        "competencia2": competencia2.value,
        "competencia3": competencia3.value,
        "competencia4": competencia4.value,
        "competencia5": competencia5.value,
        "cursos": cursos.value,
        "idioma": idioma.value,
        "proficiencia": proficiencia.value,
        "dataCriacao": `${dia}/${mes}/${ano}`
    }
    usuariojson.curriculo = curriculoJson; 
    sessionStorage.setItem('usuario', JSON.stringify(usuariojson))

    let usuariosJson = JSON.parse(localStorage.getItem('db_usuarios'))
    usuariosJson.usuarios.forEach(usuario => {
        if (usuario.email == usuariojson.email && usuario.senha == usuariojson.senha) {
            usuario.curriculo = curriculoJson;
        }
    })

    localStorage.setItem('db_usuarios', JSON.stringify(usuariosJson));
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

// BOTÃO DE DICA
function showConteudo(){
    let conteudo = document.querySelector(".conteudo");
    conteudo.style.display = "inline-grid";
}

function hideConteudo(){
    let conteudo = document.querySelector(".conteudo");
    conteudo.style.display = "none";
}

function showConteudoLink (){
    let conteudoLink = document.querySelector(".conteudo-link");
    conteudoLink.style.display = "inline-grid";
}

function hideConteudoLink(){
    let conteudoLink = document.querySelector(".conteudo-link");
    conteudoLink.style.display = "none";
}

function showConteudoCargo(){
    let conteudoCargo = document.querySelector(".conteudo-cargo");
    conteudoCargo.style.display = "inline-grid";
}

function hideConteudoCargo(){
    let conteudoCargo = document.querySelector(".conteudo-cargo");
    conteudoCargo.style.display = "none";
}