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
        // Lo usuaremos sobre todo para definir los eventos asociados a nuestro elemento
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
        if (!this.rendered) 
            this.render();
        this.colorAleatorio=this.colorAleatorio.bind(this);
        this.contenido.addEventListener('click', this.colorAleatorio);
        console.log('MiSaludo añadido al documento');
    }

    disconnectedCallback() {
        this.contenido.removeEventListener('click', this.colorAleatorio);
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
        this.rendered=true;
        this.render();
    }

    adoptedCallback() {
        console.log('MiSaludo se ha cambiado de documento');
    }

    render() {
        //console.dir(this.contenido);
        this.estilo.textContent = `
        :host {
          display: inline-block;
          border: 1px solid ${this.color};
          padding: 10px;
        }
        div {
            color: ${this.color};
          }`;
        this.contenido.innerHTML = `
        <h1>
            Hola ${this.nombre}
        </h1>
        <slot></slot>`;
        console.log('MiSaludo vista actualzada');
    }
    colorAleatorio(e) {
        //console.log(this);
        const letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let numero;
        let color = '';

        for (var i = 0; i < 6; i++) {
            numero = (Math.random() * 15).toFixed(0);
            color = color + letras[numero];
        }
        this.color = '#'+color;
        //console.log(this.color);
        this.render();
    }
}

customElements.define('mi-saludo', MiSaludo);