class HomeComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let div = document.createElement('div');
    div.textContent = 'home';
    this.appendChild(div);
  }
}

customElements.define('jt-home', HomeComponent)
