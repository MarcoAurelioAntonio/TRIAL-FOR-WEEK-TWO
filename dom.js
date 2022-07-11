var element = document.createElement("li")
element.textContent = "Now, i create element with its content. YODA IS THE BEST" //element created
element.setAttribute("class", "class_1") //setting new class

var parent = document.getElementById("text") //parent inside a variable
parent.appendChild(element) // put the child into its parent, rigth to bottom.


// In need put it between the first and the second item.
var secondItem = document.getElementById("text_2") //firt we need to put in to a variable the "before" item
parent.insertBefore(element, secondItem) // now we move our "element" in the position before "text_2"

// in this we put some text with style "NEGRITA" ó bold.
var listThree = document.getElementById("text_2")// we get the list n° 2
listThree.innerHTML = "<b>THIS IS A BOLD TEXT INTO THE 2nd LIST </b><br>" + "<b>THIS IS A BOLD TEXT INTO THE 2nd LIST </b><br>" +"<b>THIS IS A BOLD TEXT INTO THE 2nd LIST </b><br>" + "<b>THIS IS A BOLD TEXT INTO THE 2nd LIST </b><br>"


const padre = element.parentNode; // the same result (var parent = document.getElementById("text")) LINE 5


//New element created
var element_1 = document.createElement("li")
element_1.textContent = "Obi-Wan Kenobi" //element created
element_1.setAttribute("class", "class_2")//setting new class again.

//Other way to modify a child selecting from an array.
var collections = document.querySelectorAll("li") // this is a collection of nodeList. Its a array of childrens
padre.replaceChild(element_1, collections[0]) //replacing the first element of the array with the new "element_1"


// removing a child.
padre.removeChild(collections[3])




