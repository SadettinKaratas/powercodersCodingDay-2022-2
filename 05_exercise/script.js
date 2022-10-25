var books = [
  {
    title: "Lord Of Rings",
    author: "Sadettin",
    sold: false,
    price: 10,
  },
  {
    title: "Ailence of Sheeps",
    author: "Anthony Hopkins",
    sold: true,
    price: 29,
  },
  {
    title: "Mathematic",
    author: "Anyone",
    sold: true,
    price: 6,
  },
];

//Creating Variables
let bookTitle;
let bookAuthor;
let soldOrNot;
let ulList;
let price;
let bookContainer;

let container = document.getElementById("container");

let heading = document.createElement("h1");
container.appendChild(heading);
heading.textContent = "My Books List";

for (var i = 0; i <= books.length - 1; i++) {

  bookContainer = document.createElement("div");
  bookContainer.setAttribute("id", "bookContainer")
  container.appendChild(bookContainer);
  bookTitle = document.createElement("h3");
  bookContainer.appendChild(bookTitle);
  bookTitle.textContent = "Title " + books[i].title;
  ulList = document.createElement("ul");
  bookContainer.appendChild(ulList);
 
  
  bookAuthor=document.createElement("li");
  ulList.appendChild(bookAuthor)
  bookAuthor.textContent = "Author : " + books[i].author;
    
       soldOrNot=document.createElement("li");
      ulList.appendChild(soldOrNot);
      if (books[i].sold==true){
          soldOrNot.textContent= "Stock :" + " " + "Not Available"
         
      }else{ 
          soldOrNot.textContent=  " Stock :" + " " + "Available";
  
      }

      price = document.createElement("li")
      ulList.appendChild(price)
      price.textContent = "Price: " + books[i].price;
  
}

let addBook 

