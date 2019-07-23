function print1() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("1");
    }, 1000);
  });
}

function print2() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject("error in print2");
    //   resolve("2");
    }, 500);
  });
}

function print3() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("3");
    }, 2000);
  });
}

// print1()
// .then(data => {console.log(data); return print2();})
// .then(data => {console.log(data); return print3();})
// .then(data => console.log(data))
// .catch(error => console.error(error));

// async-await

async function print() {
  try {
    const data1 = await print1();
    console.log(data1);
    const data2 = await print2();
    console.log(data2);
    const data3 = await print3();
    console.log(data3);

    console.log("Some Text");
  } catch (ex) {
    console.error("Error", ex);
  }
}
print();

// (async function() {
//     console.log("before print");
//     await print();
//     console.log("after print");
// })();

(async () => {
    console.log("before print");
     await print();
     console.log("after print");
})();
console.log("end of code");