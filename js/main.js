/* eslint-env jquery */

var myObj = {
    'people': [
        {
            'firstName': 'Ernest',
            'lastName': 'Peterson',
            'age': 48
        },
        {
            'firstName': 'John',
            'lastName': 'Smith',
            'age': 21
        }
    ]
};

for (var i = 0; i < myObj.people.length; i++) {
    myfunc(
        myObj.people[i].firstName + '<br>' + 
        myObj.people[i].lastName
    );
}

function myfunc(somevar) {
    $('#output').append(somevar + '<br><br>');

}

$('#theHeader').html('<h1>Udemy AJAX</h1>');
$('#theFooter').html('<h3>Some Stuff In The Footer</h3>');