// RESPONSIVIDADE
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

//FOTO
const previewImage = document.getElementById('previewImage');
const customUpload = document.getElementById('customUpload');

uploadInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    previewImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

customUpload.addEventListener('click', function() {
  uploadInput.click();
});


//RETORNO DADOS CADASTRO
let usuarioString = sessionStorage.getItem('usuario');
let usuariojson = JSON.parse(usuarioString);

window.addEventListener('load', carregarInfosRecrutador());

//FORMULARIO MODAL
const modal = document.getElementById("modal-form-recrutador");
const btnEditRecrutador = document.getElementById("edit");
const btnFecharModal = document.getElementsByClassName("close")[0];
const formEditRecrutador = document.getElementById("form-edit-recrutador");

let formTelefone = document.getElementById("form-phone");
let formCargo = document.getElementById("form-cargo");
let formLinkedin = document.getElementById("form-linkedin");
let formEmpresa = document.getElementById("form-empresa");
let formCnpj = document.getElementById("form-cnpj");
let formSite = document.getElementById("form-site");

btnEditRecrutador.addEventListener('click', function() {
  modal.style.display = "block";
  carregarCamposForm();
});

btnFecharModal.addEventListener('click', function() {
  modal.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

formEditRecrutador.addEventListener('submit', function() {
  usuariojson.cargo = formCargo.value;
  usuariojson.telefone = formTelefone.value;
  usuariojson.linkedin = formLinkedin.value;
  usuariojson.empresa = formEmpresa.value;
  usuariojson.cnpj = formCnpj.value;
  usuariojson.site = formSite.value;

  usuarioString = JSON.stringify(usuariojson);
  sessionStorage.setItem("usuario", usuarioString);

  let banco = JSON.parse(localStorage.getItem("db_usuarios"));
  banco.usuarios.forEach(usuario => {
    if (usuario.email == usuariojson.email && usuario.senha == usuariojson.senha) {
      usuario = usuariojson;
    }
  });
  localStorage.setItem("db_usuarios", JSON.stringify(banco));

  document.getElementById("form-edit-candidato").reset();
  modal.style.display = "none";
  carregarInfosRecrutador();
});

function carregarInfosRecrutador() {
  document.getElementById("nome").innerHTML = usuariojson.nome;
  document.getElementById("email").innerHTML = usuariojson.email;
  document.getElementById("cargo").innerHTML = usuariojson.cargo;
  document.getElementById("phone").innerHTML = usuariojson.telefone;
  document.getElementById("linkedin").innerHTML = usuariojson.linkedin;
  document.getElementById("empresa").innerHTML = usuariojson.empresa;
  document.getElementById("cnpj").innerHTML = usuariojson.cnpj;
  document.getElementById("site").innerHTML = usuariojson.site;
}

function carregarCamposForm() {
  formCargo.value = usuariojson.cargo;
  formTelefone.value = usuariojson.telefone;
  formLinkedin.value = usuariojson.linkedin;
  formEmpresa.value = usuariojson.empresa;
  formCnpj.value = usuariojson.cnpj;
  formSite.value = usuariojson.site;
}