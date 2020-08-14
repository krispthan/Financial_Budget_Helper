//Budget Controller Module

let budgetController = (() => {})();

//UI Controller Module
let UIController = (() => {
  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  };
  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // income or expense
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDomStrings: () => {
      return DOMstrings;
    },
  };
})();

//App Controller Module
let AppController = ((budgetCtrl, UIContrl) => {
  let setupEventListener = () => {
    let DOM = UIContrl.getDomStrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', (event) => {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  let ctrlAddItem = () => {
    //1. Get input data from field
    let input = UIController.getInput();
    console.log(input);

    //2. Add the item to the budget controller
    //3. Add the item to the UI
    //4. Calculate the budget
    //5. Display budget to UI
  };

  return {
    init: () => {
      console.log('START');
      setupEventListener();
    },
  };
})(budgetController, UIController);

AppController.init();
