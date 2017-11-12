var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "Magneto"

function changeLeastFavoriteCustomer(string) {
  leastFavoriteCustomer = string
}

let favoriteCustomer = "Beth"
  
function attemptTwoFavoriteCustomers("name2") {
  favoriteCustomer = "name2"
}
