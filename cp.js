/*
Dev: Kalin Bowden
Date:   
*/

// Class level variables
var custName = "John Smith";
var custPhone;
var subTotal = 0.0;
var taxRate = 7.6;
var orderTotal = 0.0;
var count = 0;


// Content Arrays
var pizzaTypes = ["Cheese", "Pereroni", "Meat", "Veggie", "Hawaiian"];
var pizzaPrices = [5.00,7.00,10.00,6.00, 9.00];
var orderedPizzas;
var amtOfPizzas;


// Get the customers name and phone number.
function getCustomerInfo()
{
    custName = document.getElementById("custName").value;
    custPhone = document.getElementById("custPhone").value;
}


// Add the different falvors of pizza
function addFlavors()
{
    var testString;

    for (var index = 0; index < pizzaTypes.length; index++)
    {
        testString += '<option>' + pizzaTypes[index] + ' - $' + pizzaPrices[index] + '.00</option>';
    }

    return testString;
}


// Add the number of choices;
function addNumChoices()
{
    var testString = "";

    for (var index = 0; index < 10; index++)
    {
        testString += '<option>' + (index + 1) +'</option>';
    }

    return testString;
}


// Build the coloumn for the pizzaOptions
function buildPizzaColoumn()
{
    var testString = "";

    testString = '<select class="form-control" id="select' + count + '">' + addFlavors() + '</select>';

    return testString;
}


// Build the coloumn for number of pizzas
function buildNumberColoumn()
{
    var testString = "";
    
    testString = '<select class="form-control" id="amt' + count +'">' + addNumChoices() + '</select>';
    
    return testString;
}


// Write a pizza selection row to the page
function buildSelectionRow()
{
    var testString = "";

    testString = '<div class="row pizzaBox" id="row' + (count++) + '">' +
                    '<div class="col-md-8">' +
                        buildPizzaColoumn() +
                    '</div>' +
                    '<div class="col-md-3">' +
                        buildNumberColoumn() +
                    '</div>' +
                    '<div class="col-md-1">' +
                        '<span class="glyphicon glyphicon-plus glify" aria-hidden="true"  id="act' + count + '" onclick="removeRowSelection(' + (count - 1) + ')" ></span>' +
                    '</div>' +
                '</div>';

    if (count > 1)
    {
        var prevSelection = document.getElementById("act" + (count - 1)).className = "glyphicon glyphicon-minus glify";
    }

    alert(testString);
    
    var myDoc = document.getElementById("orderSec").innerHTML += testString;

}

function removeRowSelection(row)
{
    var myRow = document.getElementById("row" + row).innerHTML = '';
}

function addMinusSwitch(row)
{
    if(row === count)
    {
        buildSelectionRow();
    }
    else
    {
        removeRowSelection(row);
    }
}

//=====================================================================================


function calculateOrder()
{
    getCustomerInfo();

    var testString = document.getElementById("select" + count).value;
    testString += " ";
    testString += document.getElementById("amt" + count).value;

    amtOfPizzas = document.getElementById("amt" + count).value;
    orderedPizzas = document.getElementById("select" + count).selectedIndex;

    alert(custName + " " + custPhone + " " + testString + " " + orderedPizzas );
}

//
window.addEventListener("load",buildSelectionRow, false)