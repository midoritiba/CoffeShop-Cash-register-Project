let products = [];

class Product {
  constructor(id, name, category, price, numOfUnits){
    this.id = id,
    this.name = name,
    this.category = category,
    this.price = price,
    this.numOfUnits = numOfUnits,
    this.imgSrc = `./images/${this.id}.jpg`
  }
}

function createProduct(id, name, category, price, numOfUnits){
  products.push(new Product(id, name, category, price, numOfUnits));
}

createProduct(0, "Espresso", "Coffee", 1.55, 1);
createProduct(1, "Cappuccino", "Coffee", 2.7, 1);
createProduct(2, "Caffe Americano", "Coffee", 1.95, 1);
createProduct(3, "Caffe Latte", "Coffee", 2.95, 1);
createProduct(4, "Croissant", "Snack", 2.25, 1);
createProduct(5, "Bagel", "Snack", 2.15, 1);
createProduct(6, "Avocado Toast", "Snack", 2.55, 1);
createProduct(7, "Banana Pancakes", "Snack", 3.15, 1);
createProduct(8, "Chocolate Brownie", "Sweet", 2.55, 1);
createProduct(9, "Chocolate Chip Cookie", "Sweet", 1.75, 1);
createProduct(10, "Lemon Cake", "Sweet", 2.35, 1);
createProduct(11, "Blueberry Muffin", "Sweet", 2.45, 1);
