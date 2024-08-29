let sumcash = 0;
let arrayproducts=[
    {
        "id":1,
        "name": "java",
        "image": "images/java.jpg"  ,
        "price": "1000"  
    },
    {
        "id":2,
        "name":"python" ,
        "image": "images/python.jpg","price": "1000"  
    },
    {
        
        "id":3,
        "name": "html" ,
        "image": "images/html.jpg","price": "1000"  
    },
    {
        "id":4,
        "name": "c++" ,
        "image": "images/cplus.jpg",   "price": "1000"  
     },
    {
        "id":5,
        "name": "javascript" ,
        "image": "images/js.jpg","price": "1000"  
       },
    {
        "id":6,
        "name": "sql",
        "image": "images/sql.jpg" , "price": "1000"  
     },

    {
        "id":7,
        "name": "ai" ,
        "image": "images/ai.jpg","price": "1000"  
    },
    {
        "id":8,
        "name":  "machine learning",
        "image": "images/ml.jpg","price": "1000"  
    },
    {
        "id":9,
        "name": "data science" ,
        "image": "images/datasci.jpg","price": "1000"  
    }
]
let checkoutlist=[]
function showcart() {
    let cart = document.getElementById("shopping-cart");
    
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "block"; // Show the shopping cart
    } else {
        cart.style.display = "none"; // Hide the shopping cart
    }
}

function addtocart(value)
{
    var cash =0
   
    if(value=='python')
    {   
        
        displaypython()
    }
}




function displaypython()
{
    sumcash= sumcash+2000;
       
        var image = document.createElement("img");
        image.src = "../course/images/python.jpg"
        document.getElementById("list-items").appendChild(image)
        image.width = 120; 
        image.height = 70;


        var textElement = document.createElement("span");
        textElement.textContent = "PYTHON";
        textElement.style.color = "white"; 
        textElement.classList.add("text-element");
        document.getElementById("list-items").appendChild(textElement);
        cash+=20000

        var textCash = document.createElement("cash");
        textCash.textContent="2000";
        textCash.style.color = "white"; 
        textCash.classList.add("text-element");
        document.getElementById("list-items").appendChild(textCash);
        var listItems = document.getElementById("list-items");
        listItems.appendChild(image);
        listItems.appendChild(textElement);
        listItems.appendChild(textCash);
        
}


// function displayjava()
// {
//     sumcash= sumcash+2000;
       
//         var image = document.createElement("img");
//         image.src = "../course/images/js.jpg"
//         document.getElementById("list-items").appendChild(image)
//         image.width = 120; 
//         image.height = 70;


//         var textElement = document.createElement("span");
//         textElement.textContent = "J A V A";
//         textElement.style.color = "white"; 
//         textElement.classList.add("text-element");
//         document.getElementById("list-items").appendChild(textElement);
//         cash+=20000

//         var textCash = document.createElement("cash");
//         textCash.textContent="2000";
//         textCash.style.color = "white"; 
//         textCash.classList.add("text-element");
//         document.getElementById("list-items").appendChild(textCash);
// }

// function displaysql()
// {
//     sumcash+=2000;
       
//         var image = document.createElement("img");
//         image.src = "../course/images/sql.jpg"
//         document.getElementById("list-items").appendChild(image)
//         image.width = 120; 
//         image.height = 70;


//         var textElement = document.createElement("span");
//         textElement.textContent = "SQL";
//         textElement.style.color = "white"; 
//         textElement.classList.add("text-element");
//         document.getElementById("list-items").appendChild(textElement);
//         cash+=20000

//         var textCash = document.createElement("cash");
//         textCash.textContent="2000";
//         textCash.style.color = "white"; 
//         textCash.classList.add("text-element");
//         document.getElementById("list-items").appendChild(textCash);
// }
// function displayjavascript()
// {
     
//     sumcash+=2000;
       
//     var image = document.createElement("img");
//     image.src = "../course/images/js.jpg"
//     document.getElementById("list-items").appendChild(image)
//     image.width = 120; 
//     image.height = 70;


//     var textElement = document.createElement("span");
//     textElement.textContent = "javascript";
//     textElement.style.color = "white"; 
//     textElement.classList.add("text-element");
//     document.getElementById("list-items").appendChild(textElement);
//     cash+=20000

//     var textCash = document.createElement("cash");
//     textCash.textContent="2000";
//     textCash.style.color = "white"; 
//     textCash.classList.add("text-element");
//     document.getElementById("list-items").appendChild(textCash);
// }
// function displayc++()
// {
//     sumcash+=2000;
       
//         var image = document.createElement("img");
//         image.src = "../course/images/cplus.jpg"
//         document.getElementById("list-items").appendChild(image)
//         image.width = 120; 
//         image.height = 70;


//         var textElement = document.createElement("span");
//         textElement.textContent = "C++";
//         textElement.style.color = "white"; 
//         textElement.classList.add("text-element");
//         document.getElementById("list-items").appendChild(textElement);
//         cash+=20000

//         var textCash = document.createElement("cash");
//         textCash.textContent="2000";
//         textCash.style.color = "white"; 
//         textCash.classList.add("text-element");
//         document.getElementById("list-items").appendChild(textCash);
// }
// function displayhtml()
// {
//     sumcash+=2000;
       
//         var image = document.createElement("img");
//         image.src = "../course/images/html.jpg"
//         document.getElementById("list-items").appendChild(image)
//         image.width = 120; 
//         image.height = 70;


//         var textElement = document.createElement("span");
//         textElement.textContent = "HTML";
//         textElement.style.color = "white"; 
//         textElement.classList.add("text-element");
//         document.getElementById("list-items").appendChild(textElement);
//         cash+=20000

//         var textCash = document.createElement("cash");
//         textCash.textContent="2000";
//         textCash.style.color = "white"; 
//         textCash.classList.add("text-element");
//         document.getElementById("list-items").appendChild(textCash);
// }