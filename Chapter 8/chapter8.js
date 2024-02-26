let dreamCar = {
    make: "Toyota",
    model: "Supra Mk4",
    color: "Blue",
    year: 1993,
    bodyStyle: "Coupe",
    price: 800000,

};
document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style = "background-color: " + dreamCar.color + ";";
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;