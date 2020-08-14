//Budget Controller Module

let budgetController = (() => {
  let Expense = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let Income = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  let data = {
    allItems: {
      expenses: [],
      income: [],
    },
    totals: {
      expenses: 0,
      income: 0,
    },
  };
  return {
    addItem: function (type, des, val) {
      let newItem, ID;

      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },
  };
})();

//UI Controller Module
let UIController = (() => {
  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list',
  };
  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // income or expense
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    addListItem: (obj, type) => {
      let html, newHtml;
      //create html string with placeholder text
      if (type === 'income') {
        element.DOMstrings.incomeContainer;
        html =
          ' <div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">+%value%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i> </button></div></div></div>';
      } else if (type === 'expense') {
        element.DOMstrings.expenseContainer;
        html =
          '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%decription%</div> <div class="right clearfix"><div class="item__value">- 900.00</div> <div class="item__percentage">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div> </div>';
      }

      //replace placeholder text with data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%decription%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      //insert the html into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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
    let input, newItem;
    //1. Get input data from field
    input = UIController.getInput();

    //2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    //3. Add the item to the UI
    UIContrl.addListItem(newItem, input.type);
    //4. Calculate the budget
    //5. Display budget to UI
  };

  return {
    init: () => {
      setupEventListener();
    },
  };
})(budgetController, UIController);

AppController.init();
