var object1 = {
    name: 'person 1',
    age: 5
  };
      
  var object2 = {
    age: 5,
    name:" person 1"
  };
      
  let b =JSON.stringify(object1) === JSON.stringify(object2)
  // false
      console.log(b);
  let a = isEqual(obj1, obj2)
  // true
  console.log(a);