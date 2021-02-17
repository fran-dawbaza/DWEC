class JsonTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.rendered = false;
    }
    connectedCallback() {
        if (!this.rendered){
            console.log('render llamado desde connected');            
            //this.render();
        }
    }

    render() {
        //implementation
        let html='<link rel="stylesheet" href="js/componentes/jsontable/styles.css"><table><thead><tr>';
        console.log('datos[0]:' + Array.isArray(this.datos[0]));
        console.log('datos:' + Array.isArray(this.datos));
        let primerObjeto;
        let arrayObjetos;
        if (Array.isArray(this.datos)) {
            primerObjeto = this.datos[0];
            arrayObjetos = this.datos;
        }
        else {
            primerObjeto = this.datos;
            arrayObjetos = [this.datos];
        }
       
        for (const propiedad of Object.keys(primerObjeto)) {
         html += `<th>${propiedad}</th>`;
        }
        html += '</tr></thead><tbody>';

        for (const usuario of arrayObjetos) {
            html += '<tr>';
            
            for (const valor of Object.values(usuario)) {
                if (typeof valor==='object') {
                    html += this.renderTable(valor);
                }
                else {
                    html += `<td>${valor}</td>`;
                }
            }

            html+='</tr>';
        }

        html += '</tbody></table>';


        this.shadowRoot.innerHTML=html;
        this.rendered=true;
    }

    renderTable(obj) {
        return `<td>un objeto</td>`;
    }


    disconnectedCallback() {
        //implementation
    }

    static get observedAttributes() {
        return ['url'];
    }

    async attributeChangedCallback(name, oldVal, newVal) {
        //implementation
        if (name==='url') {
            this.url = newVal;
            const resultado = await fetch(newVal);
            this.datos = await resultado.json();
            console.log('render llamado desde attributeChaged');
            this.render();
            this.rendered=true;
        }
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('json-table', JsonTable);