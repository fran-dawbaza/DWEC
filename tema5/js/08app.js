/*
A continuación se muestra un plantilla con la que generar */

class MyElement extends HTMLElement {
    constructor() {
        super(); // Es importante llamar a super(), 
        // así llamamos al constructor de la clase de la que se hereda, 
        // en este caso HTMLElement
        // Después de llamar a super() podemos hacer más cosas
    }

    connectedCallback() {
        // El navegador llama a este método cuando el elemento se añade al documento
        // Puede ser invocado varias veces si el elemento se añade varias veces
    }

    disconnectedCallback() {
        // El navegador llama a este métodos cuando el elemento se elimina del documento
        // Puede ser invocado varias veces si el elemento se elimina varias veces
        // Aquí debéis eliminar los eventos añadidos
    }

    static get observedAttributes() {
        return [ /* nombres de atributos para monitorizar si cambian  */ ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // El navegador llama a este método cuando cambia alguno de los atributos monitorizados
    }

    adoptedCallback() {
        //  Se invoca cada vez que el elemento se mueve a un nuevo documento
        // (ocurre cuando usamos document.adoptNode)
    }

    // Además puedes declarar los metodos y las propiedades que necesites
}

class MiSaludo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        this.estilo = document.createElement('style');
        this.contenido = document.createElement('div');
        shadow.appendChild(this.estilo);
        shadow.appendChild(this.contenido);
        this.color = 'black';
        this.nombre = '';
        console.log('Constructor de MiSaludo llamado');
    }

    connectedCallback() {
        this.render();
        console.log('MiSaludo añadido al documento');
    }

    disconnectedCallback() {
        console.log('MiSaludo eliminado del documento');
    }

    static get observedAttributes() {
        console.log('MiSaludo monitoriza nombre y color');
        return ['nombre', 'color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Ha cambiado ${name}, pasa de ${oldValue} a ${newValue}`);
        if (name === 'nombre') this.nombre = newValue;
        if (name === 'color') this.color = newValue;
        this.render();
    }

    adoptedCallback() {
        console.log('MiSaludo se ha cambiado de documento');
    }

    render() {
        console.dir(this.contenido);
        this.estilo.textContent = `div {
            color: ${this.color};
          }`;
        this.contenido.innerHTML = `
        <h1>
            Hola ${this.nombre}
        </h1>
        <slot></slot>`;
        console.log('MiSaludo vista actualzada');
    }
}

customElements.define('mi-saludo', MiSaludo);