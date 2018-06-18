let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// map: Imperative version
function imperativeMap(states) {
  let urlStates = [];
  states.forEach(function(state) {
    urlStates.push(urlify(state));
  });
  return urlStates;
}

console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
  return states.map(state => urlify(state));
}

console.log(functionalMap(states));

function imperativeFilter(states) {
  let singleWordStates = [];
  states.forEach(function(state) {
    if (state.split(/\s+/).length === 1) {
      singleWordStates.push(state);
    }
  });
  return singleWordStates;
}

console.log(imperativeFilter(states));

function functionalFilter(states) {
  return states.filter(n => n.split(/\s+/).length === 1);
};

console.log(functionalFilter(states));

function functionalFilterE1(states) {
  return states.filter(n => n.split(/\s+/).length === 2);
};

console.log(functionalFilterE1(states));

function functionalFilterE2(states) {
  return states.filter(n => n.includes("Dakota"));
};

console.log(functionalFilterE2(states));

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function iterativeSum(array) {
  let total = 0; array.forEach(function(n) {
    total += n;
  });
  return total;
}

console.log(iterativeSum(a));

// reduce: Functional solution
function functionalSum(array) {
return array.reduce((total, n) => { return total += n });
}
console.log(functionalSum(a));

// reduce object: Imperative solution function imperativeLengths(states) {
let lengths = {};

function imperativeLengths(states) {
  states.forEach(function(state) {
    lengths[state] = state.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

function functionalLengths(states) {
  return states.reduce((lengths, state) => {
      lengths[state] = state.length;
      return lengths;
    }, {});
}

console.log(functionalLengths(states));

function functionalE1(array) {
  return array.reduce((total, n) => { return total *= n });
}
console.log(functionalE1(a));

function functionalE2(states) {
  return states.reduce((lengths, state) => {lengths[state] = state.length; return lengths; }, {});
}

console.log(functionalE2(states));
