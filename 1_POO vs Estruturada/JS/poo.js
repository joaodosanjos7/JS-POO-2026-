// ==========================================
// PARTE 2: PROGRAMAÇÃO ORIENTADA A OBJETOS EM JS
// ==========================================

class Cachorro {

    // # Atributos privados (Encapsulado)
    // ou seja não permite acesso direto
    #nome
    #comida
    #sono

    // Construtor (executado automaticamente)
    // quando criamos um novo objeto
    // Ele recebe valores iniciais e salva
    // this é como dizer "meu próprio atributo"
    
    constructor(nome, comida, sono) {
        this.#nome = nome
        this.#comida = comida
        this.#sono = sono
    }

    // Metodo comer
    comer() {
        this.#comida += 1
    }
    
    // Metodo dormir
    dormir() {
        this.#sono = true
    }
    
    // Getters para acessar os atributos privados
    getNome() {
        return this.#nome
    }

    getComida() {
        return this.#comida
    }

    getSono() {
        return this.#sono
    }
}

//Criando instancias ou objetos
const cachorro1 = new Cachorro("Bob", 5, false)
const cachorro2 = new Cachorro("Snoop", 8, true)

// Usando os métodos
cachorro1.comer()
cachorro2.dormir()


// Digitar o código (Feito pelo Professor - AQUI)




// ==========================================
// EXIBINDO RESULTADOS NO NAVEGADOR
// ==========================================
// document.body.innerHTML altera o conteúdo
// HTML da página.
// ==========================================

// Fazer o teste trocando abaixo:

// Maneira correta de acessar a Classe encapsulada
// <strong>${cachorro1.getNome()}</strong>

//cachorro1.#nome -> ERRO (Olhar erro no Console)
// <strong>${cachorro1.#nome()}</strong>

document.body.innerHTML = `
    <h1>Resultados dos Cachorros (POO)</h1>

    <p>
        <strong>${cachorro1.getNome()}</strong>

        agora tem
        <strong>${cachorro1.getComida()}</strong>
        unidades de comida.
    </p>

    <p>
        <strong>${cachorro2.getNome()}</strong>
        está com sono?
        <strong>${cachorro2.getSono() ? "Sim" : "Não"}</strong>
    </p>
`;