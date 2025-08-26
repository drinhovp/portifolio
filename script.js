document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault(); // Impede de recarregar a página

    // Pega os valores
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let comentario = document.getElementById("comentario").value;

    // Número do WhatsApp (substitua pelo seu número real com DDD, ex: 5511999999999)
    let numero = "5521980814388"; 

    // Mensagem formatada
    let mensagem = `Olá, meu nome é ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AComentário: ${comentario}`;

    // Abre o WhatsApp
    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
});
