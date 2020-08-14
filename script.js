//Budget Controller Module

let budgetController = (() => {
  let x = 50;
  let add = (a) => {
    return x + a;
  };
  return {
    publicTest: (b) => {
      return add(b);
    },
  };
})();

//UI Controller Module
let UIController = (() => {})();

//App Controller Module
let AppController = ((budgetCtrl, UIContrl) => {
  let z = budgetCtrl.publicTest(5);
  return {
    anotherPublic: () => {
      console.log(z);
    },
  };
})(budgetController, UIController);
