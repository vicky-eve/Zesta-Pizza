//creating the pizza constructor
function Pizza (flavour, size, toppings, crust,total, order) {
    this.flavour = flavour;
    this.size = size;
    this.toppings = toppings;
    this.crust=crust;
    this.total=total;
    this.order=order;
  } 
  //new instance of Pizza
  let firstPizza = new Pizza(vegetarian, large, tomato, thin, 1200);
  let secondPizza =new  Pizza()

  Pizza.prototype.orderDetails = function() {
     console.log("Your order has been received for" + this.flavour+ "," + this.size +"," + this.toppings + "," + this.crust + "." + "The total is " + this.total) 
  }