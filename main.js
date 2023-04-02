menuListArray = ["Pizza Vegetariana",
                 "Pizza de Frango",
                 "Pizza de Portuguesa",
                 "Pizza de Quatro Queijos",
                 "Pizza de Calabresa",
                 "Pizza de Extravaganza",  
                ];

function getMenu(){
    
    var htmldata="";

    menuListArray.sort();

    for(var i=0;i<menulistArray.length;i++){

    htmldata=htmldata+ menuListArray[i] +'<br>'
   }

document.getElementById("displayMenu").innerHTML = htmldata;

}

function addItem(){

var htmldata;

var imgtags='<img id="in1"  src="images/pizzaImg.png"/>'

var item=document.getElementById("addItem").value;

menuListArray.sort();

htmldata=""

for (var i=0;i<menulistArray,length;i++){

    htmldata=htmldata+imgtags+ menuListArray[i]+ '<br>' ;

}

document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function addTop(){

var item=document.getElementById("addItem").value;

menuListArray.push(item);

addItem();

}