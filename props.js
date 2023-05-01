/* NOTE:

PROPS:
    refers to the properties being passed into a component in order for it to work correctly,
    similarly to how a function receives parameters: "from above."
    A component receiving props is not allowed to modify those props.
    (i.e. they are "immutable")

*/


// ALLOWED
function addTwoNumbers(a, b) {
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))


// NOT ALLOWED
function Navbar(props) {
    props.coverImage = "something else"
}

<Navbar darkMode={true} coverImage="some-image2" />

/* dark_mode : is the property i.e. configuring the Navbar in order to display correctly */
