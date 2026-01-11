// Substitua pelo link do seu formulário (Google Forms, Typeform, etc.)
const FORM_URL = "https://forms.gle/u1SVNttfD4FiTbFT9"; 

function abrirFormulario(){
  window.open(FORM_URL, "_blank", "noopener");
}

// atualiza ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
