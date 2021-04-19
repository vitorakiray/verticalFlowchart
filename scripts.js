alert("Explicação do site no \"saiba mais\"")

const Fluxograma = {
    all: [
        {
            ordem: 1,
            simbolo: "https://i.pinimg.com/originals/95/3d/6c/953d6c0a8026ae79e81a689692428c6f.png",
            unidade: "Almox",
            descricao: "Recebe os pedidos de material",
        },
        {
            ordem: 2,
            simbolo: "https://imagepng.org/wp-content/uploads/2017/10/circulo-preto.png",
            unidade: "Almox",
            descricao: "Verifica necessidade de aquisição de material",
        },

    ],

    add(fluxograma) {
        Fluxograma.all.push(fluxograma)

        App.reload()
    },

    remove(index) {
        Fluxograma.all.splice(index, 1)

        App.reload()
    }
}

const App = {
    init() {
        Fluxograma.all.forEach(DOM.addFluxograma)

    },

    reload() {
        DOM.clearFluxograma()
        App.init()
    }
}

const DOM = {
    fluxogramaContainer: document.querySelector('#data-table tbody'),

    addFluxograma(fluxograma, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLFluxograma(fluxograma, index)
        tr.dataset.index = index

        DOM.fluxogramaContainer.appendChild(tr)
    },

    innerHTMLFluxograma(fluxograma, index) {
        const html = `
            <td> <textarea rows="1" cols="5"></textarea> </td>
            <td><img src=${fluxograma.simbolo} alt="Transporte"></td>
            <td> <textarea rows="1" cols="5"></textarea> </td>
            <td> <textarea rows="1" cols="5"> </textarea></td>
            <td class="delete" onclick="Fluxograma.remove(${index})">
            <img  src="https://th.bing.com/th/id/R2ad5bb181357b12b759a83f534af9224?rik=Zs3B%2bV18btJsxw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f256%2fsign-delete-icon.png&ehk=oe7oaHK8rFmxWHmgJ9paE3LhFNWdwoxiq3O9Drqkvjk%3d&risl=&pid=ImgRaw" alt="Deletar">
            </td>
        `
        return html
    },

    clearFluxograma() {
        DOM.fluxogramaContainer.innerHTML = ""
    }
}

const Button = {
    click() {
        Fluxograma.add({
        })
    }
}

App.init()




