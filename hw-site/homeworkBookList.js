class Book{
    constructor(title, genre, author){
        this.title=title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.read_date = null;
    }
}

class BookList{
    constructor(){
        this.bookShelf = [];
        this.booksRead = 0;
        this.booksNotRead = this.bookShelf.length - this.booksRead;
        this.nextBook = null;
        this.currBook = null;
        this.lastBook = null;
    }
    
    add(book){
        if(book instanceof Book){
            this.bookShelf.push(book)
            if(this.currBook)
            {
                for (let i = 0; i < this.bookShelf.length; i++) {
                    if(!this.bookShelf[i].read)
                    {
                        this.currBook = this.bookShelf[i]
                        if(this.bookShelf[i + 1]){
                            this.nextBook = this.bookShelf[i + 1]
                        }
                        else{
                            this.nextBook = null
                        }
                    }
                    break;
                }
            }
        }
        else{
            console.log("invalid argument type")
        }
    }
    finishCurrentBook(){
        for(let i=0;i<this.bookShelf.length; i++)
        {
            const book = this.bookShelf[i]
            if(book.title = this.bookShelf.title)
            {
                this.bookShelf[i].read= true;
                this.bookShelf[i].read = new Date().now();
                this.lastBook = this.currBook;
                this.currBook = this.nextBook;
                if(this.bookShelf[i + 1]) 
                {
                    this.nextBook = this.bookShelf[i + 2];
                }
                break;
            }
        }
    }
}

b1 = new Book("HP1", "magic", "JKR")
b2 = new Book("HP2", "magic", "JKR")
b3 = new Book("HP3", "magic", "JKR")
b4 = new Book("HP4", "magic", "JKR")
b5 = new Book("HP5", "magic", "JKR")

bookList = new BookList();

bookList.add(b1);
bookList.add(b2);
bookList.add(b3);

console.log(b1.lastBook)
console.log(b1.currBook)
console.log(b1.nextBook)

bookList.finishCurrentBook();
