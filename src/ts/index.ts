(function() {
    function greeter(person: string) {
      return "Hello, " + person;
    }

    let user = "Ise Yoshitaka";

    window.addEventListener('load', function() {
        alert(greeter(user));
    });
})();
