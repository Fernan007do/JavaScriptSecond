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
        alert(`El stock de "${this.title}" fue actualizado`)
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
        offeredBooks += ` \n ${book.id} - ${book.title} de ${book.year} y queda ${book.stock} ejemplar`
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
            case 5:
                bookCart.push(books[5])
                alert(`Agregamos al carrito el Libro ${books[5].title}`)
                books[5].restaStock()
                break
            case 6:
                bookCart.push(books[6])
                alert(`Agregamos al carrito el Libro ${books[6].title}`)
                books[6].restaStock()
                break
            case 7:
                bookCart.push(books[7])
                alert(`Agregamos al carrito el Libro ${books[7].title}`)
                books[7].restaStock()
                break
            case 8:
                bookCart.push(books[8])
                alert(`Agregamos al carrito el Libro ${books[8].title}`)
                books[8].restaStock()
                break
            case 9:
                bookCart.push(books[9])
                alert(`Agregamos al carrito el Libro ${books[9].title}`)
                books[9].restaStock()
                break
            case 10:
                bookCart.push(books[10])
                alert(`Agregamos al carrito el Libro ${books[10].title}`)
                books[10].restaStock()
                break
            default:
                alert(`No tenemos ese libro :)`)
                break
        }

        offeredBooks = `Tenemos los siguientes libros: \n`

        for (const book of books) {
            if (book.stock === 0){
                offeredBooks += ` \n ${book.id} - ${book.title} de ${book.year}- NO QUEDAN EJEMPLARES`

            }else{
                offeredBooks += ` \n ${book.id} - ${book.title} de ${book.year} y queda ${book.stock} ejemplar `
            }
            
        }
    
        offeredBooks += `\n Ingrese el número de Libro que desee llevarse (97 para salir)`

        userAction = parseInt(prompt(offeredBooks))
    }

    bookCart.sort((a,b) => (a.title > b.title) ? 1 : -1)
    alert(`Al fin terminó de elegir! `)
    showBookCart()
}

let returnLibrito = () => {

    const aDevolver = books.filter(book => book.stock == 0)

    let list = `\n Los libros que puedes devolver son: `

    for (const book of aDevolver) {
        list += `\n ${book.id} - ${book.title}`        
    }

    list += `Escribe el Id del producto para devolver... (99 para salir)`


    let ansDevolver = parseInt(prompt("Desea devolver algún librito? si = 1 , no = 2"))

    while(isNaN(ansDevolver)){
        alert("Solo números!")
        ansDevolver = parseInt(prompt("Desea devolver algún librito? si = 1 , no = 2"))
    }

    switch(ansDevolver){
        case 1:
            let id = parseInt(prompt(list))
            let ind = books.findIndex(element => element.id === id)
            books[ind].stock = 1;
            alert(`Gracias por devolver el Libro ${books[ind].title}, ${books[ind].author} estaría muy contento/a`)
            break
        case 2:
            alert("Ahhh Pero sos alto delincuente")
            break

        default: 
            alert("No era un opción!")
            break
    }
}

let showFilterResult = array =>{
    let available = "Los libros disponibles son: "
    for (const element of array) {
        available += `\n - ${element.title} del año ${element.year}...${element.gender} `  
    }
    
    alert(available)

}

let genderFilter = () => {
    const policialG = books.filter( book => book.gender === "Policial")
    const adventureG = books.filter( book => book.gender === "Aventura")
    const terrorG = books.filter( book => book.gender === "Terror")

    let ansGender = parseInt(prompt("Tenemos los siguientes géneros: 1- Policial, 2-Aventura, 3-Terror... Elija uno ingresando el número:"))
    switch (ansGender) {
        case 1:
            alert("Buscará todos los libros de género policial! ")
            showFilterResult(policialG)
            break
        case 2: 
            alert("Buscará todos los libros de género aventura! ")
            showFilterResult(adventureG)
            break
        case 3: 
            alert("Buscará todos los libros de género Terror! ")
            showFilterResult(terrorG)
            break
        default:
            alert("No es una opción válida!... intente nuevamente")
    }
}

const book0 = new Book(0, "Vampire Kickers", "Edgado Alan Oboe", 1992, "Terror", 1)
const book1 = new Book(1, "Lalaland", "Jeremy Zucher", 1993, "Aventura", 1)
const book2 = new Book(2, "80 ninjas, un pollito", "Ernest Saturdábato", 1900, "Policial", 1)
const book3 = new Book(3, "Randrew", "Jhon Cenna", 2000, "Aventura", 1)
const book4 = new Book(4, "Iguana del Arco", "María Walt", 1983, "Aventura", 1)
const book5 = new Book(5, "Anestesia Nikolaievich", "Rasper Glover Trotter", 1852, "Policial", 1)
const book6 = new Book(6, "Flying Tomatoes", "Willie Joncaster", 1853, "Aventura", 1)
const book7 = new Book(7, "Mufasa", "Simbalister Arnolds", 1854, "Terror", 1)
const book8 = new Book(8, "Tronks", "Alan Mur", 1993, "Aventura", 1)
const book9 = new Book(9, "Asynchronous", "JhonK Rabellium", 2017, "Policial", 1)
const book10 = new Book(10, "CoderMouse", "Jerry Tomlinson", 2011, "Aventura", 1)

const books= [book0, book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];

const bookCart = []

let offeredBooks = `Tenemos los siguientes libros: \n`

takeLibrito()
returnLibrito()
genderFilter()