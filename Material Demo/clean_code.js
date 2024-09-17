// Nama Variabel yang tidak deskriptif
let x = 45;
let y = calculate(x);

// Nama Variabel yang deskriptif
let orderAmount = 42;
let discountAmount = calculateDiscount(orderAmount);

// SOLID

// S - Fungdi yang terlalu panjang
function processOrder(order) {
  //  Banyak Sekali logika disini
  // ...
  // ...
  // ...
  // Akhirnya selesai
}

// S - Fungsi yang pendek dan jelas
function processOrder(order) {
  validateOrder(order);
  applyDiscount(order);
  finalizeOrder(order);
}

function validateOrder(order) {
  // logika validasi
}

function applyDiscount(order) {
  // logika diskon
}

function finalizeOrder(order) {
  // logika penyelesaian
}

// O - Kelas yang tidak mengikuti OCP
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    if (this.type === 'discounted') {
      return this.price * 0.9; // 10% discount
    }
    return this.price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let total = 0;
    for (let product of this.products) {
      total += product.getPrice();
    }
    return total;
  }
}

const cart = new ShoppingCart();
cart.addProduct(new Product('Laptop', 1000));
cart.addProduct(new Product('Phone', 500));

console.log(cart.getTotalPrice()); // Output: 1500

// O - Kelas dengan OCP
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class DiscountedProduct extends Product {
  getPrice() {
    return this.price * 0.9; // 10% discount
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let total = 0;
    for (let product of this.products) {
      total += product.getPrice();
    }
    return total;
  }
}

const cart = new ShoppingCart();
cart.addProduct(new Product('Laptop', 1000));
cart.addProduct(new DiscountedProduct('Phone', 500));

console.log(cart.getTotalPrice()); // Output: 1450

// ISP
class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Flyable {
  fly() {
    console.log(`${this.name} is flying.`);
  }
}

class Swimmable {
  swim() {
    console.log(`${this.name} is swimming.`);
  }
}

class Duck extends Entity {
  constructor(name) {
    super(name);
    Object.assign(this, new Flyable());
    Object.assign(this, new Swimmable());
  }
}

const duck = new Duck("Donald");
duck.fly();
duck.swim();

// DIP
class Database {
  connect() {
    throw new Error("Method 'connect()' must be implemented.");
  }
}

class MongoDB extends Database {
  connect() {
    console.log("Connected to MongoDB.");
  }
}

class MySQL extends Database {
  connect() {
    console.log("Connected to MySQL.");
  }
}

class App {
  constructor(database) {
    this.database = database;
  }

  start() {
    this.database.connect();
  }
}

const mongoDB = new MongoDB();
const app = new App(mongoDB);
app.start();

// Komentar yang jelas dan singkat
// Function to fetch data from API and return as JSON
async function fetchData(apiUrl) {
  // Fetch data from the provided URL
  const response = await fetch(apiUrl);

  // Check if response is successful
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  // Parse and return the JSON data
  return await response.json();
}


// Koding yang konsisten
// Nama variabel dan fungsi menggunakan camelCase
let totalAmount = 100;
let discountRate = 0.1;

// Nama kelas menggunakan PascalCase
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Fungsi menggunakan camelCase
  addItem(item) {
    this.items.push(item);
  }

  getTotalAmount() {
    let total = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
  }
}

// Error Handling yang baik -> Catching & Throwing Error
async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error for debugging
    console.error('Fetch data failed:', error);

    // Provide a user-friendly error message
    throw new Error('Unable to fetch data at this time. Please try again later.');
  }
}

// Usage
fetchData('https://api.example.com/data')
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


// Logging error
// Error handling middleware
app.use((err, req, res, next) => {
  // Log the error for debugging
  console.error('Error occurred:', err);

  // Respond with a generic message
  res.status(500).json({ message: 'Internal Server Error' });
});


// User Friendly message
function validateUserInput(userInput) {
  try {
    if (!userInput.username) {
      throw new Error('Username is required');
    }

    if (userInput.password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    // All checks passed
    return true;
  } catch (error) {
    // Log the error for debugging
    console.error('Validation error:', error.message);

    // Provide a user-friendly error message
    throw new Error('Invalid user input. Please check the form and try again.');
  }
}

// Usage
try {
  validateUserInput({ username: 'JohnDoe', password: '12345' });
} catch (error) {
  console.error('Error:', error.message);
}


// Fail Gracefully
app.use((err, req, res, next) => {
  // Log the error for debugging
  console.error('Error occurred:', err.message);

  // Respond with a generic message
  res.status(500).json({ message: err.message });
});

// YAGNI
// Misalnya, kita hanya membuat fungsi untuk menghitung luas persegi dan lingkaran
class Geometry {
  // Fungsi untuk menghitung luas persegi
  calculateSquareArea(side) {
    return side * side;
  }

  // Fungsi untuk menghitung luas lingkaran
  calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
}

// Penggunaan kode
const geometry = new Geometry();
console.log(geometry.calculateSquareArea(4)); // Dibutuhkan
console.log(geometry.calculateCircleArea(5)); // Dibutuhkan


// KISS
// Terlalu rumit
// Algoritma bubble sort untuk menyortir daftar angka
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Tukar elemen
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Penggunaan kode
let numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); // [2, 3, 4, 5, 8]

// Sederhana
// Menggunakan fungsi sorting bawaan JavaScript
let numbers = [5, 3, 8, 4, 2];
numbers.sort((a, b) => a - b);

console.log(numbers); // [2, 3, 4, 5, 8]


// DRY
// Fungsi untuk menghitung luas persegi panjang
function calculateRectangleArea(length, width) {
  return length * width;
}

// Penggunaan fungsi untuk menghitung luas
let length1 = 5;
let width1 = 3;
let area1 = calculateRectangleArea(length1, width1);
console.log('Area 1:', area1);

let length2 = 7;
let width2 = 2;
let area2 = calculateRectangleArea(length2, width2);
console.log('Area 2:', area2);

let length3 = 4;
let width3 = 6;
let area3 = calculateRectangleArea(length3, width3);
console.log('Area 3:', area3);

