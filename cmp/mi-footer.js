class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        Rodrigo Nicolas Zavala Detor
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
