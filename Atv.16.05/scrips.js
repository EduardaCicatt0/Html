const infoParagraph = document.getElementById('info');
infoParagraph.textContent = 'Meus paises prediletos';

const imagens = document.querySelectorAll('.pais img');


imagens.forEach((imagem, indice) => {
    console.log(`Imagem ${indice + 1}:`);
    console.log('Source:', imagem.src);
    console.log('Alt: Foto Bealty', imagem.alt);
    console.log('Imagem dos meus paises dos sonhos');
});