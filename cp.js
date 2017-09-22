/*
Dev: Kalin Bowden
Date:   
*/

// Class level variables
var custName = "John Smith";
var custPhone;
var subTotal = 0.0;
var taxRate = 0.06;
var orderTotal = 0.0;


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

// add the different falvors of pizza
function addFlavors()
{
    for (var index = 0; index < pizzaTypes.length; index++)
    {
        testString += pizzaTypes[index] + " - " + pizzaPrices[index];
    }
}

// Add the number of choices;
function addNumChoices()
{
    for (var index = 0; index < 10; index++)
    {
        testString += '<option>' + (index + 1) +'</opyion>';
    }
}