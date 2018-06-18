let a = [8, 17, 99, 42];
a.sort(function(a, b) { return a - b; });

a.forEach(element => {
  console.log(element);
});
