const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck == "string") {
      this._meal = mealToCheck;
    }
  },
  set price(pricetoCheck) {
    if (typeof pricetoCheck == "number") {
      this._price = pricetoCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}`
    }
    else {
      return 'Meal or price was not set correctly!';
    }
  }
}

menu.meal = "burger";
menu.price = 20;

console.log(menu.todaysSpecial);