class JsonTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.rendered = false;
    }
    connectedCallback() {
        if (!this.rendered) { // Aún no se ha terminado el fetch en attributeChangedCallback, por lo que aún no se ha renderizado
            //console.log('render llamado desde connected');
            //this.render();
            this.shadowRoot.innerHTML = '<img src="https://media.tenor.com/images/965beb93fefb499a174d45bfcef23c30/tenor.gif"/>';
        }
    }

    render() {
        //implementation
        let html = '<link rel="stylesheet" href="js/componentes/jsontable/styles.css"><table><thead><tr>';
        //console.log('datos[0]:' + Array.isArray(this.datos[0]));
        //console.log('datos:' + Array.isArray(this.datos));
        let primerObjeto;
        let arrayObjetos;
        if (Array.isArray(this.datos)) {
            primerObjeto = this.datos[0];
            arrayObjetos = this.datos;
        } else {
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
                if (typeof valor === 'object') {
                    html += `<td>${this.renderTable(valor)}</td>`;
                } else {
                    html += `<td>${valor}</td>`;
                }
            }

            html += '</tr>';
        }

        html += '</tbody></table>';


        this.shadowRoot.innerHTML = html;
        this.rendered = true;
    }

    renderTable(obj) {
            let primerObjeto;
            let arrayObjetos;
            if (Array.isArray(obj)) {
                primerObjeto = obj[0];
                arrayObjetos = obj;
            } else {
                primerObjeto = obj;
                arrayObjetos = [obj];
            }
            return `
            <button 
                onclick=
                "this.textContent==='+' ?
                    this.textContent='-'
                    :this.textContent='+';
                this.nextElementSibling.classList.toggle('hidden')"
            >+</button>${Object.values(primerObjeto)[0]}
            <table class="hidden">
                <thead>
                    <tr>
                        ${Object.keys(primerObjeto).map(key => `<th>${key}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${arrayObjetos.map(
                        obj => `<tr>${
                            Object.values(obj).map(
                                value => `<td>${
        typeof value === 'object' ? this.renderTable(value) : value
                                                }
                                        </td>`).join('')
                                    }
                                </tr>`).join('')
                    }
                </tbody>
            </table>`;
    }


    disconnectedCallback() {
        //implementation
    }

    static get observedAttributes() {
        return ['url','data','img'];
    }

    async attributeChangedCallback(name, oldVal, newVal) {
        //implementation
        if (name==='data') {
            this.datosNombre=newVal;
            if (this.datos && this.datos[this.datosNombre]) {
                this.datos = this.datos[this.datosNombre];
                this.datosRevisados=true;
            }
            else {
                this.datosRevisados=false;
            }
            
        }
        if (name==='url') {
            this.url = newVal;
            await new Promise((resolve,reject)=>{
                            setTimeout(()=>resolve('hola'),1000)
                            });
            
            try {
                const resultado = await fetch(newVal);
                this.datos = await resultado.json();
                //console.log('render llamado desde attributeChaged');

                console.log(this.datosNombre + ' -> ' + this.datosRevisados);
                if (!this.datosRevisados && this.datosNombre) {
                    this.datos = this.datos[this.datosNombre];
                    this.datosRevisados=true;                    
                }
                this.render();
                this.rendered=true;
            }
            catch (e) {
                console.log(e);
            }
        }
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('json-table', JsonTable);