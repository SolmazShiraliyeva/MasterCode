
let userName = prompt("Who's there?", '');
if (userName == 'Admin') {

 
// *PASSWORD
let pass = prompt('Password?', '');
if (pass == 'TheMaster') {
alert( 'Welcome!' );
} else if (pass == 'Cancel' || pass == null) {
alert( 'Canceled.' );
} else {
alert( 'Wrong password.' );
}

 

} else if (userName == 'Cancel' || userName == null) {
alert( 'Canceled.' );
} else {
alert( "I don't know you." );
}