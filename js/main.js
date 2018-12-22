/* eslint-env jquery */

// newJason created from myjson.com using myObj bellow
// var newJason = "https://api.myjson.com/bins/1dango";

var bigData = "https://randomuser.me/api/?results=5";
var xhr = new XMLHttpRequest();
var btn = document.getElementById("loadMore");
btn.addEventListener("click", function() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            parseData(JSON.parse(xhr.response));
        }
    };
    xhr.open("GET", bigData);
    xhr.send();
});
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        parseData(JSON.parse(xhr.response));
    }
};
xhr.open("GET", bigData);
xhr.send();

// var myObj = {
//     "people": [
//         {
//             "firstName": "Ernest",
//             "lastName": "Peterson",
//             "age": 48,
//             "pass": true
//         },
//         {
//             "firstName": "John",
//             "lastName": "Smith",
//             "age": 21,
//             "pass": false
//         },
//         {
//             "firstName": "Benjamin",
//             "lastName": "Peterson",
//             "age": 15,
//             "pass": false
//         }
//     ]
// };

function parseData(data) {
    for (var i = 0; i < data.results.length; i++) {
        myfunc(
            `<picture>
                <source media=('min-width: 650px') srcset='${data.results[i].picture.medium}'>
                <source media=('min-width: 465') srcset='${data.results[i].picture.thumbnail}'>
                <img src='${data.results[i].picture.large}' alt='Profile Picture' style='width:auto;'>
            </picture>` + "<br>" + 
            data.results[i].name.first + "<br>" + 
            data.results[i].name.last + "<br>" +
            "Age: " + data.results[i].dob.age
        );
    }
}

function myfunc(somevar) {
    $("#output").append("<div>" + somevar + "</div>");

}

$("#theHeader").html("<h1>Udemy AJAX</h1>");
$("#theFooter").html("<h3>My Lovely Footer Text</h3>");