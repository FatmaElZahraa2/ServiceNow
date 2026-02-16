

var BooksArr = [];

function Number_Validation(msg) {
    while (true) {
        let value = Number(prompt(msg));
        if (!isNaN(value) && value > 0) {
            return value;
        } else {
            alert("Please enter a number greater than 0!");
        }
    }
}

function Text_Validation(msg) {
    while (true) {
        let value = prompt(msg);
        if (value !== "" && value !== null) {
            return value;
        } else {
            alert("Please enter a valid value!");
        }
    }
}

function Add_Book() {
    let bookTitle = Text_Validation("Please Enter the Book's Title:");
    let authorName = Text_Validation("Please Enter the Author's Name:");
    let noOfCopies = Number_Validation("Please Enter the Number of Copies:");

    let Book = {
        Title: bookTitle,
        AuthorName: authorName,
        AvailableCopies: noOfCopies,
        BorrowedCopies: 0
    };

    BooksArr.push(Book);
    alert("Book was added successfully!");
}


function Borrow_Book() {
    let bookTitle = Text_Validation("Please Enter the Book's Title:");
    let found = false;

    for (let b of BooksArr) {
        if (b.Title === bookTitle) {
            found = true;
            if (b.AvailableCopies > 0) {
                b.AvailableCopies--;
                b.BorrowedCopies++;
                alert("Book was borrowed successfully!");
            } else {
                alert("There are no available copies!");
            }
            break;
        }
    }

    if (!found) {
        alert("This book does not exist!");
    }
}


function Return_Book() {
    let bookTitle = Text_Validation("Please Enter the Book's Title:");
    let found = false;

    for (let b of BooksArr) {
        if (b.Title === bookTitle) {
            found = true;
            if (b.BorrowedCopies > 0) {
                b.BorrowedCopies--;
                b.AvailableCopies++;
                alert("Book was returned successfully!");
            } else {
                alert("No borrowed copies to return!");
            }
            break;
        }
    }

    if (!found) {
        alert("This book does not exist!");
    }
}


function calculateTotalBooks() {
    let totalAvailable = 0;
    let totalBorrowed = 0;

    for (let b of BooksArr) {
        totalAvailable += b.AvailableCopies;
        totalBorrowed += b.BorrowedCopies;
    }

    alert("Total Available Copies: " + totalAvailable);
    alert("Total Borrowed Copies: " + totalBorrowed);
}


function Library_Report() {

    for (let b of BooksArr) {
        alert(
            "Book Title: " + b.Title +
            "/ Author: " + b.AuthorName +
            "/ Available Copies: " + b.AvailableCopies +
            "/ nBorrowed Copies: " + b.BorrowedCopies +"\n"
        );
    }

    calculateTotalBooks();
}


let cycle = true;

while (cycle) {
    let Option = prompt(
        "Choose an option: " +
        "1 → Add New Book " +
        "2 → Borrow Book " +
        "3 → Return Book " +
        "4 → Show Library Report " +
        "5 → Exit"
    );

    switch (Option) {
        case "1":
            Add_Book();
            break;
        case "2":
            Borrow_Book();
            break;
        case "3":
            Return_Book();
            break;
        case "4":
            Library_Report();
            break;
        case "5":
            cycle = false;
            alert("Exit!\nIt was nice to have you with us!");
            break;
        default:
            alert("Invalid option, please try again!");
    }
}
