class HoraBonita extends HTMLElement {
    
    constructor() {
        console.log('hora-bonita: constructor');
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.innerHTML = `<h1 id="titulo">${new Date} <slot name="titular"></slot></h1><slot></slot>`;
        this.modo='uno';
        //this.innerHTML = `<h1 id="titulo">${new Date}</h1>`;
        
    }
    connectedCallback(){
        console.log('hora-bonita conectado al DOM');
        this.render();
    }

    render(){
        console.log('hora-bonita: render en marcha');
    }

    static get observedAttributes() {
        return ['modo'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`atributo ${name} cambiando de ${oldVal} a ${newVal}`);
        //implementation
        if (name==='modo') {

            if (newVal==='dos'){
                this.modo = 'dos';
                this.shadow.getElementById('titulo').innerHTML='hola <slot name="titular"></slot>';
            }else {
                this.modo = 'uno';
                this.shadow.getElementById('titulo').innerHTML=new Date + '<slot name="titular"></slot>';
            }
           

        }
    }



}

customElements.define('hora-bonita', HoraBonita);