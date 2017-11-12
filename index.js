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

function attemptTwoFavoriteCustomers() {
  const favoriteCustomer = "Beth"
  favoriteCustomer = "Aki"
}
