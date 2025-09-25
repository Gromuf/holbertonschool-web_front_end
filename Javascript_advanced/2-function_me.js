function welcomeMessage(fullName) {
  return function () {
    alert("Welcome " + fullName);
  };
}
let guillaume = welcomeMessage("guillaume");
let alex = welcomeMessage("alex");
let fred = welcomeMessage("fred");
