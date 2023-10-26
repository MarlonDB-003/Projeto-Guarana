/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');// Isso seleciona o elemento que possui o atributo id igual a "menu-icon" na página e armazena esse elemento na variável menuIcon
let navbar = document.querySelector('.navbar');// Isso seleciona o primeiro elemento na página que possui a classe CSS "navbar" e armazena esse elemento na variável navbar

menuIcon.onclick = () => {//Isso define um evento de clique no elemento com a classe menuIcon. Quando esse elemento for clicado, a função entre as chaves { ... } será executada.
    menuIcon.classList.toggle('bx-x');//Isso adiciona ou remove a classe 'bx-x' ao elemento com a classe menuIcon. Se o elemento já possui a classe 'bx-x', ela será removida; se não tiver, será adicionada.
    navbar.classList.toggle('active');//Isso adiciona ou remove a classe 'active' ao elemento com a classe navbar. Novamente, se o elemento já possui a classe 'active', ela será removida; se não tiver, será adicionada.
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');// Isso seleciona todos os elementos HTML <section> na página
let navLinks = document.querySelectorAll('header nav a');// Isso seleciona todos os elementos <a> que estão dentro de elementos <nav> que estão dentro de um elemento <header>

window.onscroll = () => {
    sections.forEach(sec => {//Isso percorre todos os elementos <section> na variável sections usando um loop forEach. Para cada seção, o código dentro das chaves { ... } será executado
        let top = window.scrollY;// Isso obtém a posição vertical da barra de rolagem da janela do navegador e a armazena na variável top. Isso indica a posição atual de rolagem da página.
        let offset = sec.offsetTop - 150;// Isso obtém a posição vertical do topo da seção atual (sec) e subtrai 150 pixels. Isso cria uma margem superior para a verificação de quando a seção está visível no topo da página.
        let height = sec.offsetHeight;//Isso obtém a altura da seção atual (sec). Isso representa a altura da seção na página.
        let id = sec.getAttribute('id');// Isso obtém o atributo "id" da seção atual e o armazena na variável id. Isso é geralmente usado para identificar seções específicas na página.

        //Isso significa que, à medida que o usuário rola a página, o código verifica qual seção está visível na tela e adiciona a classe 'active' ao link de navegação correspondente a essa seção, destacando-o para indicar a posição atual na página 
        if (top >= offset && top < offset + height) {// verifica se a posição de rolagem (top) está dentro dos limites da seção atual
            navLinks.forEach(links => {//tera sobre todos os links de navegação (navLinks) usando um loop forEach
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');// Isso seleciona o elemento <header> na página e o armazena na variável header.

    header.classList.toggle('sticky', window.scrollY > 100);// Isso utiliza o método toggle da propriedade classList para adicionar ou remover a classe 'sticky' do elemento header com base em uma condição


    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

    menuIcon.classList.remove('bx-x');//Isso remove a classe 'bx-x' do elemento com a classe menuIcon
    navbar.classList.remove('active');//Isso remove a classe 'active' do elemento com a classe navbar

};


/*==================== scroll reveal ====================*/

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// esse trecho de código diz respeito ao surgimento dos textos e das imagens, note que o título vem da parte superior da página(top), os textos vem da parte direita (right) e as imagens vem da parte esquerda(left) 
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });//aqui se refere apenas a seção home, onde a imagem surge da parte inferior(bottom)
ScrollReveal().reveal('.home-content h1, .about-img, .festa-img, .guarana-img, .economia-img, .beneficios-img, .culinaria-img, .preservacao-img, .impacto-img', { origin: 'left' });//imagens surgindo da parte esquerda
ScrollReveal().reveal('.home-content p, .about-content, .festa-content, .guarana-content, .economia-content, .beneficios-content, .culinaria-content, .preservacao-content, .impacto-content', { origin: 'right' });//textos surgindo da parte direita

/*==================== typed js ====================*/
//essa função que é responsável por fazer os textos da seção home ficarem surgundo e desaparecendo
const typed = new Typed('.multiple-text', {
    strings: ['Cidade de Belas praias', 'Cidade de Belos Pontos Turísticos', 'Terra do Guaraná'],//esses são os textos. se você remover ou acrescentar mais, eles irão se alterar na página
    //os trechos abaixo de referem ao tempo de aparecimento e desaparecimento, altere eles e isso afetará a essa parte na página
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});