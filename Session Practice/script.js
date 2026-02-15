
//JS Task

//Library Management System by using JS

var BooksArr = []

let Book = {
    Title: "",
    AuthorName: "",
    AvailableCopies: 0,
    BorrowedCopies: 0

}
function Number_Validation(msg) {
    while (true) {
        var ProperValue = prompt(msg)
        if (ProperValue > 0)
            break;
        else
            alert("Please Entar The needed Value!")
    }
    return ProperValue;
}

function Text_Validation(msg) {
    while (true) {
        var ProperValue = prompt(msg)
        if (ProperValue != "" || ProperValue != null)
            break;
        else
            alert("Please Entar The needed Value!")
    }
    return ProperValue;
}

function Add_Book() {
    let bookTitle = Text_Validation("Please Enter the Book's Title :")
    let authorName = Text_Validation("Please Enter the Author's Name :")
    let noOfCopies = Number_Validation("Please Enter the Number of Copies :")

    Book.Title = bookTitle
    Book.AuthorName = authorName
    Book.AvailableCopies = noOfCopies

    BooksArr.push(Book);
}

function Borrow_Book() {

    let bookTitle = Text_Validation("Please Enter the Book's Title :")

    for(let b in BooksArr){
        if(b.Title == bookTitle){
            
        }
    }

}
function Return_Book() {

}
function Library_Report() {

}


while (true) {
    let Option = prompt("Choose from the following options\n1 → Add New Book 2 → Borrow Book 3 → Return Book 4 → Show Library Report5 → Exit")

    switch (Option) {
        case "1":
            Add_Book();
            break;
        case "2":
            Borrow_Book();
            break;
        case "3":
            Return_Book()
            break;
    }
}




