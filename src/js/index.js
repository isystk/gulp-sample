(function () {
  function greeter(person) {
    return "Hello, " + person;
  }

  var user = "Ise Yoshitaka";
  window.addEventListener('load', function () {
    alert(greeter(user));
  });
})();