let day = prompt("What is your favorite day of the week?").toLowerCase();
let theResponse;

switch (day) {
    case "monday":
        theResponse = "Ack!";
        break;
    case "tuesday":
        theResponse = "Taco day!";
        break;
    case "wednesday":
        theResponse = "Half way there";
        break;
    case "thursday":
        theResponse = "Yeah!";
        break;
    case "friday":
        theResponse = "Lets go";
        break;
    case "saturday":
        theResponse = "What a day";
        break;
    case "sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "Never heard of that one"
        break;


}
alert(theResponse);
