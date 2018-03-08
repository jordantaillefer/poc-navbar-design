class Main extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback () {
    const routes = [];
    let HomeComponent = document.createElement('jt-home');
    let AboutComponent = document.createElement('jt-about');

    let arrayNavigation = document.querySelector('#navigation-bar').querySelectorAll('li > a');

    Array.from(arrayNavigation).forEach( a => console.log(a.getAttribute('route')))

    this.appendChild(HomeComponent);
    setTimeout(() => this.removeChild(HomeComponent), 1000);
    setTimeout(() => this.appendChild(AboutComponent), 2000);
  }
}

customElements.define('jt-main', Main)
