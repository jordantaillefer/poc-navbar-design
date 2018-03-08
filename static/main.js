class Main extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback () {
    let jtTest = document.createElement('jt-test');
    let jtTesta = document.createElement('jt-testa');
    this.appendChild(jtTest);
    setTimeout(() => this.removeChild(jtTest), 1000);
    setTimeout(() => this.appendChild(jtTesta), 2000);
  }
}

customElements.define('jt-main', Main)
