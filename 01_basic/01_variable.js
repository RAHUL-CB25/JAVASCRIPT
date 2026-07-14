const accountId=1444553
let accountEmail="rahulcb.net2gmail.com"

var accountPassword="12345"  // generally var use nhi karte hai
accountCity="Patna"

let accountState;

// accountId=2 // not allowed
accountEmail ="bc.@gmail.com"
accountPassword="8873"
accountCity="BLR"




/*
 prefer not to use var
 because of issue in block scope and functional scope

 */
console.log(accountId);
console.log(accountEmail);
console.log(accountState);
console.table([accountId,accountEmail,accountPassword,accountCity])

