// let asyncFunction = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("asyncFunction has resolved");
//         }, 4000);
//     });
// };

// asyncFunction has been called from method.js

// chain promises
// let promise = asyncFunction();

// promise.then((val) => {
//     console.log(`Yeah!! ${val}`)
// });

// console.log("This is gonna be fun");

// asyncFunction()
// .then((val) => {
//     console.log(`Yeah!! ${val}`);
//     return asyncFunction2();
// })
// .then((val) => {
//     console.log(`2nd_Promise ${val}`);
// });



let url = "";

let d_risk = fetch(url)
  .then((response) => response.json())
  .then((resData) => console.log(resData))
  .then((data) =>
    data["results"].forEach((item) => {
      // console.log(item["risk_type"]=== "Terrorist Attack")
    })
  )
  .catch((err) => console.log(err));

console.log("This is gonna be fun");
