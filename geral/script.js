
console.log("*****")
document.getElementById('inscricaoForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const categoria = document.getElementById('categoria').value;
  
    const mensagem = `Nome: ${nome}%0A` +
                     `Telefone: ${telefone}%0A` +
                     `Email: ${email}%0A` +
                     `Categoria: ${categoria}`;
  
    const whatsappURL = `https://wa.me/5515996385701?text=${mensagem}`;
  
    window.open(whatsappURL, '_blank');
  });
  // ****utilizar API para enviar a mensagem direto ****