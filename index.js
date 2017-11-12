var customerName = "bob";
let favoriteCustomer = "Beth"

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


function attemptTwoFavoriteCustomers(name2) {
  favoriteCustomer = name2
}
