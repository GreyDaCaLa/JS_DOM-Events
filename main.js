/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
// BONUS: Add a link href to the <a>

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// TODO: Remove the "New Child Node"

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality










/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
var blah1 = document.getElementById("node1");
blah1.innerHTML = 'I used the getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

var blah1 = document.getElementsByClassName("node2");
for(var i=0;i<blah1.length;++i){
    blah1[i].innerHTML = 'I used the getElementByClassName("node2") method to access this';
}

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
var blah1 = document.getElementsByTagName('h3');
for(var i=0;i<blah1.length;++i){
    blah1[i].innerHTML = 'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
var newP = document.createElement("p");
newP.innerHTML = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
var theParent = document.getElementById('parent');
theParent.appendChild(newP);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
var newA = document.createElement("a");
newA.innerHTML = `I am a <p> tag`;

// BONUS: Add a link href to the <a>
newA.href= 'https://www.w3schools.com/jsref/met_node_insertbefore.asp'


// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
var theParent = document.getElementById('parent');
theParent.insertBefore(newA,newP);




/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
var theParent = document.getElementById('exercise3');
var newP = document.createElement('p');
newP.innerHTML = "New Child Node";
var oldP = document.getElementById("N1");

theParent.replaceChild(newP,oldP);



// TODO: Remove the "New Child Node"
theParent.removeChild(newP);

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left

let timer = setInterval(moveright,10);

let boxPosition = 0;

let box = document.getElementById("box");



function moveright() {
    if(boxPosition >= 150) {
        clearInterval(timer);
        boxPosition=0;
        timer = setInterval(movedown,50);
    } else{
        boxPosition += 1;
        //console.log(`MoveRight: ${boxPosition}-px`)
        box.style.left = boxPosition +"px"
    }
}
function movedown() {
    if(boxPosition >= 150) {
        clearInterval(timer);
        boxPosition=150;
        timer = setInterval(moveleft,50)
    } else{
        boxPosition += 1;
        //console.log(`MoveDown: ${boxPosition}-px`)
        box.style.top = boxPosition +"px"
    }
}
function moveleft() {
    if(boxPosition <= 0) {
        clearInterval(timer);
        boxPosition=150;
        timer = setInterval(moveup,50)
    } else{
        boxPosition -= 1;
        //console.log(`Moveleft: ${boxPosition}-px`)
        box.style.left = boxPosition +"px"
    }
}
function moveup() {
    if(boxPosition <= 0) {
        clearInterval(timer);
        boxPosition=0;
        timer = setInterval(moveright,50)
    } else{
        boxPosition -= 1;
        //console.log(`MoveUp: ${boxPosition}-px`)
        box.style.top = boxPosition +"px"
    }
}

// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
function show(){

let mess1 = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
let mess2 = "---"

var theParent = document.getElementsByClassName('main');
var looking = document.getElementById('SamiSam');
var newDiv = document.createElement('div');
newDiv.innerHTML = mess1;
newDiv.id = "SamiSam";
if(looking){
    theParent[0].removeChild(looking);
}else{
    theParent[0].appendChild(newDiv);
}
//console.log('looking:');
//console.log(looking);

//console.log('type: theParent')
//console.log(typeof(theParent))
//console.log('type: theParent[0]')
//console.log(typeof(theParent[0]))


}

// BONUS: The modal popup should be able to be closed. Refactor for this functionality


