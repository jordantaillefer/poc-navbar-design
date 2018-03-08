class Test extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let div = document.createElement('div');
    div.textContent = 'home';
    this.appendChild(div);
  }
}

customElements.define('jt-test', Test)
