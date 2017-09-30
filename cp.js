/*
Dev: Kalin Bowden
Date:   
*/

// Class level variables
var custName = "John Smith";
var custPhone;
var subTotal = 0.0;
var taxRate = 0.076;
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
    
    var myDoc = document.getElementById("orderSec").innerHTML += testString;


    //
    var temp = document.getElementById("rec").style.height = document.getElementById("ord").style.height;

}



// This function has been removed
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


// This function will calculate the order totals, tax and subtotal.
// Then diplay tha  information on the screen
function calculateOrder()
{
    //
    var choice = document.getElementById("select" + count).selectedIndex;
    var rec = document.getElementById("rec");
    amtOfPizzas = document.getElementById("amt" + count).value;

    //
    getCustomerInfo();
    rec.innerHTML += ('<div class="col-md-6 text-left">Name</div><div class="col-md-6 text-right">' + custName + '</div>');
    rec.innerHTML += ('<div class="col-md-6 text-left">Phone</div><div class="col-md-6 text-right">' + custPhone + '</div>');
    
    //
    rec.innerHTML += ('<div class="col-md-6 text-left">Flavor</div><div class="col-md-6 text-right">' + pizzaTypes[choice] + '</div>');
    rec.innerHTML += ('<div class="col-md-6 text-left">Pizzas Ordered</div><div class="col-md-6 text-right">' + amtOfPizzas + '</div>');

    //
    getSubTotal(choice);
    rec.innerHTML += ('<div class="col-md-6 text-left">Sub Total</div><div class="col-md-6 text-right">' + subTotal + '.00</div>');

    //
    totalTax = subTotal * taxRate;
    rec.innerHTML += ('<div class="col-md-6 text-left">Tax</div><div class="col-md-6 text-right">' + totalTax + '</div>');

    //
    orderTotal = subTotal + totalTax;
    rec.innerHTML += ('<div class="col-md-6 text-left">Total</div><div class="col-md-6 text-right">$' + orderTotal + '</div>');
}


// Gets the subtaol of the order based on the user selection
function getSubTotal(choice)
{
    subTotal = pizzaPrices[choice] * amtOfPizzas;
}

// The event listeners of the scripting page
window.addEventListener("load",buildSelectionRow, false);
document.getElementById("btnOrder").addEventListener("click", calculateOrder, false);