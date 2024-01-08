class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        & 2024
        Rodrigo Nicolas Zavala Detor
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
