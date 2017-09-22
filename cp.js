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
var pizzaPrices = ["$5.00","$7.00","$10,00","$6.00", "$9.00"];
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
        testString += '<option>' + pizzaTypes[index] + ' - ' + pizzaPrices[index] + '</option>';
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

    testString = '<select class="form-control">' + addFlavors() + '</select>';

    return testString;
}


// Build the coloumn for number of pizzas
function buildNumberColoumn()
{
    var testString = "";
    
    testString = '<select class="form-control">' + addNumChoices() + '</select>';
    
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
                        '<span class="glyphicon glyphicon-plus glify" aria-hidden="true"></span>' +
                    '</div>' +
                '</div>';

    alert(testString);
    
    var myDoc = document.getElementById("orderSec").innerHTML += testString;

}