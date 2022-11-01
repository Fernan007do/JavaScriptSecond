class Book{

    constructor(id, title, author, year, gender, stock) {
        this.id = id;
        this.title = title;
        this.author = author;   
        this.year = year;
        this.gender = gender;
        this.stock = stock
    }

    restaStock(){
        this.stock = this.stock - 1;
        console.log(`El stock de "${this.title}" fue actualizado`)
    }


    showData(){
        return `Este libro fue creado en ${this.year}, por ${this.author}, y es del género ${this.gender}`
    }

}

let showBookCart = () => {
    let booksInCart = `Vas a llevar: \n`

    for (const book of bookCart) {
        booksInCart += ` \n ${book.id} - ${book.title} de ${book.year}`
    }

    alert(`Te estás llevando los siguientes libros: ${booksInCart}`)
}

let takeLibrito = () =>{

    for (const book of books) {
        offeredBooks += ` \n ${book.id} - ${book.title} de ${book.year} y queda/n ${book.stock} ejemplar/es `
    }

    offeredBooks += `\n Ingrese el número de Libro que desee llevarse (97 para salir)`

    let userAction = parseInt(prompt(offeredBooks))

    while(isNaN(userAction)){
        alert("Solo números!")
        userAction = parseInt(prompt(offeredBooks))
    }

    while(userAction != 99){
        switch (userAction){
            case 0:
                bookCart.push(books[0])
                alert(`Agregamos al carrito el Libro ${books[0].title}`)
                books[0].restaStock()
                break
            case 1:
                bookCart.push(books[1])
                alert(`Agregamos al carrito el Libro ${books[1].title}`)
                books[1].restaStock()
                break
            case 2:
                bookCart.push(books[2])
                alert(`Agregamos al carrito el Libro ${books[2].title}`)
                books[2].restaStock()
                break
            case 3:
                bookCart.push(books[3])
                alert(`Agregamos al carrito el Libro ${books[3].title}`)
                books[3].restaStock()
                break
            case 4:
                bookCart.push(books[4])
                alert(`Agregamos al carrito el Libro ${books[4].title}`)
                books[4].restaStock()
                break
            default:
                alert(`No tenemos ese libro :)`)
                break
        }

        offeredBooks = `Tenemos los siguientes libros: \n`

        for (const book of books) {
            offeredBooks += ` \n ${book.id} - ${book.title} de ${book.year} y queda/n ${book.stock} ejemplar/es `
        }
    
        offeredBooks += `\n Ingrese el número de Libro que desee llevarse (97 para salir)`

        userAction = parseInt(prompt(offeredBooks))
    }
    alert(`Al fin terminó de elegir! `)
    showBookCart()

    
}

const book0 = new Book(0, "Vampire Kickers", "Edgado Alan Oboe", 1992, "Terror", 1)
const book1 = new Book(1, "Lalaland", "Jeremy Zucher", 1993, "Aventura", 1)
const book2 = new Book(2, "80 ninjas, un pollito", "Ernest Saturdábato", 1900, "Policial", 1)
const book3 = new Book(3, "Randrew", "Jhon Cenna", 2000, "Aventura", 1)
const book4 = new Book(4, "Iguana del Arco", "María Walt", 1983, "Aventura", 1)

const books= [book0, book1, book2, book3, book4];

const bookCart = []

let offeredBooks = `Tenemos los siguientes libros: \n`
takeLibrito()
