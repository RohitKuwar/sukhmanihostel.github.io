function validation1() {

    var first = document.getElementById('fname').value;
    var upattern = /^[A-Za-z]{2,20}$/;

    if (upattern.test(first)) {
        document.getElementById('fname').style = "background-color:green;color:yellow";
    } else {
        document.getElementById('fname').style.backgroundColor = 'red';
    }

}

function validation2() {

    var last = document.getElementById('lname').value;
    var upattern = /^[A-Za-z]{2,20}$/;

    if (upattern.test(last)) {
        document.getElementById('lname').style = "background-color:green;color:yellow";
    } else {
        document.getElementById('lname').style.backgroundColor = 'red';
    }

}

function funmail() {

    var mail = document.getElementById('email').value;
    var upattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,}$/;

    if (upattern.test(mail)) {
        document.getElementById('email').style = "background-color:green;color:yellow";
    } else {
        document.getElementById('email').style.backgroundColor = 'red';
    }
}

function funmobile() {

    var mob = document.getElementById('mobile').value;
    var upattern = /^[0-9]{10}$/;

    if (upattern.test(mob)) {
        document.getElementById('mobile').style = "background-color:green;color:yellow";
    } else {
        document.getElementById('mobile').style.backgroundColor = 'red';
    }

}

function funcollege() {

    var clg = document.getElementById('colleges').value;
    var selection = "SGGSIE&T" || "SRTMUN" || "Sahyog" || "Gramin Polytechnic" || "Other";

    if (selection == clg) {
        document.getElementById('colleges').style = "background-color:green;color:yellow";
    }

}