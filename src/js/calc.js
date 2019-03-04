(function () {
    "use strict";

    var el = function (element) {
        if (element.charAt(0) === "#") { 
            return document.querySelector(element); 
        }
        return document.querySelectorAll(element);
    };

    var viewer = el("#viewer"), 
        equals = el("#equals"), 
        numbers = el(".num"), 
        operators = el(".ops"), 
        secondNumber = "", 
        firstNumber = "", 
        resultNum, 
        operator; 

    
    var setNumber = function () {
        if (resultNum) { 
            secondNumber = this.getAttribute("data-num");
            resultNum = "";
        } else { 
            secondNumber += this.getAttribute("data-num");
        }
        viewer.innerHTML = secondNumber; // current number
    };
    
    var moveNum = function () {
        firstNumber = secondNumber;
        secondNumber = "";
        operator = this.getAttribute("data-ops");
        equals.setAttribute("data-result", ""); // Reset result
    };

    
    var displayNum = function () {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        switch (operator) {
            case "plus":
                resultNum = firstNumber + secondNumber;
                break;

            case "minus":
                resultNum = firstNumber - secondNumber;
                break;

            case "times":
                resultNum = firstNumber * secondNumber;
                break;

            case "divided by":
                resultNum = firstNumber / secondNumber;
                break;

            default:
                resultNum = secondNumber;
        }

        if (!isFinite(resultNum)) {
            if (isNaN(resultNum)) { 
                resultNum = "You broke it!";
            } else { 
                resultNum = "Look at what you've done";
                el('#calculator').classList.add("broken"); 
                el('#reset').classList.add("show"); 
            }
        }

        // Display result
        viewer.innerHTML = resultNum;
        equals.setAttribute("data-result", resultNum);

        // reset firstNumber
        firstNumber = 0;
        secondNumber = resultNum;

    };

    // Clear button
    var clearAll = function () {
        firstNumber = "";
        secondNumber = "";
        viewer.innerHTML = "0";
        equals.setAttribute("data-result", resultNum);
    };

    for (var i = 0, l = numbers.length; i < l; i++) {
        numbers[i].onclick = setNumber;
    }
   
    for (var i = 0, l = operators.length; i < l; i++) {
        operators[i].onclick = moveNum;
    }

    equals.onclick = displayNum;

    el("#clear").onclick = clearAll;

    el("#reset").onclick = function () {
        window.location = window.location;
    };

})();