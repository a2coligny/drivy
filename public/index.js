'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

// calcul of the price of rentals - Ex 1 



  rentals.forEach(function(rental){
    cars.forEach(function(car){

        if ( car.id == rental.carId)
        {

        var date1 = new Date(rental.pickupDate);
        var date2 = new Date(rental.returnDate);

        var time = date2.getDate() - date1.getDate()+1;

        var priceTime = time * car.pricePerDay;

        var priceDistance = rental.distance * car.pricePerKm;

        rental.price = priceTime + priceDistance;
        }
       })
       
  });

// EX 2 calcul of the rules for price 

 rentals.forEach(function(rental){
    cars.forEach(function(car){

        if ( car.id == rental.carId)
        {

        var date1 = new Date(rental.pickupDate);
        var date2 = new Date(rental.returnDate);

        var time = date2.getDate() - date1.getDate()+1;

        var priceTime = time * car.pricePerDay;
    
    if ((time > 10))
    {
      priceTime = 0.5 * priceTime; 
    }
    else if ((time > 4))
    {
      priceTime = 0.7 * priceTime; 
    }
    else if (time > 1) 
    {
      priceTime = 0.9 * priceTime; 
    }

        var priceDistance = rental.distance * car.pricePerKm;

        rental.price = priceTime + priceDistance;
    
        }
       })
       
  });

//EX 3  Calcul of commmssions 
function calculCommission(var price){
 var commission = 0.3 * price; // définir var à l'extérieur de la function ? 
 return commission;
}

function calculInsurance(var commission){
 var insurance = 0.5 * commission ; 
 retrun insurance; 
}

function calculAssistance ( var returnDate, var pickupDate ){
var assistance = 1* (returnDate - pickupDate );
return assistance;
}

function calculDrivy(// à r){
var drivy = commision - (insurance + assistance);
return drivy;
}

// EX 4 - The deductible 

function deductible (var price, var drivy)
{
  if (deductibleReduction == true )
  {
     additionalCharge = (returnDate - pickupDate) * 4; 
  }
 drivy += additionalCharge;
 price = price + additionalCharge;
  return price;
}

// Ex 5 - pay the actor 



//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];




console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
