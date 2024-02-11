const accountId = 144533
let accountEmail = "manish@google.com"
var accountPassword = "12345" // not used as js does not know of scope both functional and block
accountCity = "Jaipur" // this also creates a reserved memory of variable but not at all recommended
let accountState; // its value is currently undefined

accountEmail = "manish@microsoft.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
// accountId = 2 // not allowed

console.log (accountId);

console.table ([accountId, accountEmail , accountPassword , accountCity, accountState ])

// {} these curly braces are scope