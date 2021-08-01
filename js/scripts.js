//business logic
function Order (size,crust,topping,number,acquisition){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.number = number;
  this.acquisition = acquisition;
}

var sizePrice = {
  small : 550,
  medium : 800,
  large : 1000,
  extraLarge : 1200,
};

var crustPrice = {
  cheeseStuffed : 100,
  flatBread : 50,
  thin : 80,
  glutenFree : 140,
};

var toppingPrice = {
  chickenHawaiian : 160,
  cheeseBurger : 67,
  pepperoni : 80,
  veggie : 120,
};

let totalPrice = function(size,crust,topping,number) {
  return (size + crust + topping)*number;
}

String.prototype.addSign = function () {
  return "Ksh." + this;
}

//user interface
$(document).ready(function(){
  $("form#ordered").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("#pizza-size").val();
    var pizzaCrust = $("#pizza-crust").val();
    var pizzaTopping = $("#pizza-topping").val();
    var numberOrdered = parseInt($("#number-of-pizza").val());
    var acquisitionMethod = $("#acquisition-method").val();

    var orderMade = new Order (pizzaSize,pizzaCrust,pizzaTopping,numberOrdered,acquisitionMethod);

    var price = totalPrice(sizePrice[orderMade.size],crustPrice[orderMade.crust],toppingPrice[orderMade.topping],orderMade.number);

    $("#total-charge").text(price.toString().addSign());

    resetFields();

  });

  function resetFields () {
    $("#pizza-size").val("");
    $("#pizza-crust").val("");
    $("#pizza-topping").val("");
    $("#number-of-pizza").val("");
    $("#acquisition-method").val("");
  }

});