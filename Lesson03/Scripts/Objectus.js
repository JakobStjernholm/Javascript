//Detta är ett objekt i JS och har JSON-syntax
var kaffeMugg =
{
    volume: 156,
    diameter: 12.9,
    height: "14",
    array: [5, 4, 5, "kalle"],
    drink: function () { alert('Du dricker'); }
}
kaffeMugg.drink();
kaffeMugg.volyym = 123; // felstavning innebär skapat en ny egenskap på objektet

//Function skapad med constructor notation
//kan återanvändas för att skapa flera objekt
function Dinner(timeToCook, grades,name,duration) {
    this.timeToCook = timeToCook;
    this.grades = grades;
    this.name = name;
    this.duration = duration;
    this.CheckHowCoolItIs = function () { return this.grades * this.duration; }
}

var potatismos = new Dinner(55, 5, "Potatismos", 5);
var spagetti = new Dinner(15, 8, "Spageti", 7);

//---------------Literal Notation--------------------
var hotel = {
    name: "Grand",
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}
//---------------------------------------------------

//--------------Object Contructor Notation-----------------
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

var plazaHotel = new Hotel('Marina Plaza', 20, 12);
var grandHotel = new Hotel('Grand Hotel', 50, 10);
//-----------------------------------------------------------

//-----------------Literal Notation------------------------
var hotel = {};
hotel.name = "Grand";
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
}
//------------------------------------------------------------

//-----------------Object Contructor Notation-----------------
var hotel = new Object();
hotel.name = "Grand";
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function () {
    return this.rooms - this.booked;
}
//------------------------------------------------------------