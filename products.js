let products = [];

class Product {
  constructor(id, name, category, price){
    this.id = id,
    this.name = name,
    this.category = category,
    this.price = price,
    this.numOfUnits = 1,
    this.imgSrc = `./images/${this.id}.jpg`
  }
}

function createProduct(id, name, category, price){
  products.push(new Product(id, name, category, price));
}

createProduct(0, "Espresso", "Coffee", 1.55);
createProduct(1, "Cappuccino", "Coffee", 2.7);
createProduct(2, "Caffe Americano", "Coffee", 1.95);
createProduct(3, "Caffe Latte", "Coffee", 2.95);
createProduct(4, "Croissant", "Snack", 2.25);
createProduct(5, "Bagel", "Snack", 2.15);
createProduct(6, "Avocado Toast", "Snack", 2.55);
createProduct(7, "Banana Pancakes", "Snack", 3.15);
createProduct(8, "Chocolate Brownie", "Sweet", 2.55);
createProduct(9, "Chocolate Chip Cookie", "Sweet", 1.75);
createProduct(10, "Lemon Cake", "Sweet", 2.35);
createProduct(11, "Blueberry Muffin", "Sweet", 2.45);
