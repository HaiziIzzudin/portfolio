const scripts = [
    'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
];

scripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    document.head.append(script);
});





// CUSTOM ELEMENTS DEFINITION


class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <!-- START COPY FROM HERE -->
        
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" 
        href="https://fonts.googleapis.com/css?family=Playfair+Display:b|JetBrains+Mono:b|Open+Sans">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
        
        
        
        
        <!-- ==================
        HEADER HTML STARTS HERE
        =================== -->
        <header>
        
        <div class="header-margining">
        
            <a href="index.html"><h6>HAIZI IZZUDIN</h6></a>
            
            <nav>
                <a href="about.html">About</a>
                <a href="portfolio-creative.html">Creative</a>
                <a href="portfolio-technical.html">Technical</a>
                <a href="experiences.html">Experiences</a>
                <a href="education.html">Education</a>
                <a href="contacts.html">Contacts</a>
            </nav>    
        
        </div>
        </header>    
        <!-- AND PASTE IT INSIDE MAIN.JS ON EVERYTIME HEADER ELEMENT IS UPDATED -->
        `
    }
}



class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer id="myFooter">
        Copyright © Haizi Izzudin (2023). All Rights Reserved. Problems with website? Email to <a href="mailto:webmaster@iziizz.com">webmaster@iziizz.com</a>
        </footer>
        `
    }
}


class FiveRating extends HTMLElement {
    connectedCallback() {
        const rate = this.getAttribute('rate') || 0;
        
        let starsHTML = '';
        for (let i = 0; i < rate; i++) {
            starsHTML += `<span class="star material-symbols-outlined">star</span>`;
        }
        for (let i = 0; i < (5 - rate); i++) {
            starsHTML += `<span class="star material-symbols-outlined non-filled">star</span>`;
        }
        this.innerHTML = starsHTML;
    }
}


class MyButton extends HTMLElement {
    connectedCallback() {
        const link = this.getAttribute('link');
        const label = this.getAttribute('label');
        const icons = this.getAttribute('icons');
        const openNewTab = this.getAttribute('openNewTab') === 'true';
        const isSocMed = this.getAttribute('isSocMed');

        let buttonHTML = '';
        
        
        if (openNewTab) {
            buttonHTML += `<a href="` + link + `" target="_blank">`;
            console.log('redirection: true')
        }
        else {
            buttonHTML += `<a href="` + link + `"/>`;
            console.log('redirection: false')
        }
        
        
        
        if (isSocMed === "true") {
            buttonHTML += `    <span class="`+ icons +`"></span>`;
            console.log("isSocMed = true")
            buttonHTML += `    <label>`+ label +`</label>`;
        }
        else {
            buttonHTML += `    <label>`+ label +`</label>`;
            console.log("isSocMed = false")
            buttonHTML += `    <span class="material-symbols-outlined">`+ icons +`</span>`;
        }
        
        buttonHTML += 
        `
        </a>
        `

        this.innerHTML = buttonHTML;
    }
}




customElements.define ('five-star', FiveRating)

customElements.define ('my-header', MyHeader)

customElements.define ('my-footer', MyFooter)

customElements.define ('my-button', MyButton)




// HEADER ANIMATION

// const clickableElement = document.querySelector('.material-symbols-outlined');
// const menuExpanded = document.querySelector('nav');


// clickableElement.addEventListener('click', function () {
//     const isOpen = menuExpanded.classList.contains('open');
//     if (isOpen) {
//         gsap.to(menuExpanded, { height: 0});
//         menuExpanded.classList.remove('open');
//     } else {
//         gsap.to(menuExpanded, { height: 'auto'});
//         menuExpanded.classList.add('open');
//     }
// });


