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



function getCustomerInfo()
{
    custName = document.getElementById("custName").value;
    custPhone = document.getElementById("custPhone").value;

    alert(custName + " " + custPhone);
}