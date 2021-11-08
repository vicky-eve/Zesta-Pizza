//creating the pizza constructor
function Pizza ( size, toppings, crust,total, order) {
    this.size = size;
    this.toppings = toppings;
    this.crust=crust;
    this.total=total;
    this.order=order;
  } 
  //new instance of Pizza
  let firstPizza = new Pizza(large, tomato, thin, 1000);
  let secondPizza =new  Pizza()

  Pizza.prototype.orderDetails = function() {
     console.log("Your order has been received for"+ this.size +"," + this.toppings + "," + this.crust + "." + "The total is " + this.total) 
  }