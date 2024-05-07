let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function wrapInParentheses(parentheses) {
  // Kunin yung current value ng display
  let currentValue = display.value;

  // Check kung may ongoing expression na
  if (currentValue !== '') {
    // I-wrap yung current expression in parentheses
    currentValue = `(${currentValue})`;
  } else {
    // Kapag yung display is walang laman, simply append yung parentheses
    currentValue = parentheses;
  }

  // I-set yung binagong value pabalik sa display
  display.value = currentValue;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}


function clearDisplay() {
  display.value = '';
}
