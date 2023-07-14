// promises anuj bhiaya
const ticket = new Promise(function (resolve, reject) {
  const isBoarded = true;
  if (isBoarded) {
    resolve("You are not in the Flight");
  } else {
    reject("Your Flight has been cancelled");
  }
});

ticket
  .then((data) => {
    console.log("wohoo", data);
  })
  .catch((data) => {
    console.log("oh no", data);
  });
