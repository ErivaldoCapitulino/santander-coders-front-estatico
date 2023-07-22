const formData = document.querySelector('.formData');

formData.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.querySelector('#name').value;
    const telefone = document.querySelector('#telefone').value;
    const mensagem = document.querySelector('#mensagem').value;

    alert(`
       Nome: ${nome}
       Telefone: ${telefone}
       Mensagem: ${mensagem}
    `);
})