
const API_URL = "https://crudcrud.com/api/3c099a7e32614c5290d9bd7fd7b11f81"; 
const listaServicos = document.getElementById("lista-servicos");

async function carregarServicos() {
  try {
    const resposta = await fetch(API_URL);
    if (!resposta.ok) {
      throw new Error(`Erro ao buscar serviços: ${resposta.status}`);
    }
    const servicos = await resposta.json();
    exibirServicos(servicos);
  } catch (erro) {
    console.error(erro);
    listaServicos.innerHTML = `<li>Erro ao carregar serviços.</li>`;
  }
}

function exibirServicos(servicos) {
  listaServicos.innerHTML = ""; // Limpa a lista
  servicos.forEach(servico => {
    const item = document.createElement("li");
    item.textContent = servico.nome;
    listaServicos.appendChild(item);
  });
}

// Carrega os serviços ao abrir a página
carregarServicos();
