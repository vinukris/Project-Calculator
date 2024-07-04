var sym = false;
var oldValue = 0;
var newValue = 0;
var operator;
var result;
var res = false;

// buttonclick function
function clickbtn(val) {

    if (sym) {
        var scr = document.getElementById("screen").value;
        oldValue = parseInt(scr);
        document.getElementById("screen").value = val;
        sym = false;
    } else if (res) {
        document.getElementById("screen").value = val;
        res = false;
    } else {
        document.getElementById("screen").value = document.getElementById("screen").value + val;
    }

}
// clearbutton function
function clr() {
    document.getElementById("screen").value = "";
}
function operation(opr) {

    operator = opr;
    sym = true;
}
// equalbutton function
function equalbtn() {
    var inp = document.getElementById("screen").value;
    newValue = parseInt(inp);

    if (operator == '/') {
        result = oldValue / newValue;
    } if (operator == '+') {
        result = oldValue + newValue;
    } if (operator == '*') {
        result = oldValue * newValue;
    } if (operator == "-") {
        result = oldValue-newValue;
    }

    document.getElementById("screen").value = result;
    res = true;

}





