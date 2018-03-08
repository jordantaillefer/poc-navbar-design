class AboutComponent extends HTMLElement {
  constructor() {
    super();
    this._styles = `jt-about {
        color: red;
      }
    `
  }

  connectedCallback() {
    let style = document.createElement('style');
    style.innerHTML = this._styles;
    this.appendChild(style);
    let div = document.createElement('div');
    div.textContent = 'about';
    this.appendChild(div);
  }
}

customElements.define('jt-about', AboutComponent)
