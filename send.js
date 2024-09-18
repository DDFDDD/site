$(document).ready(function() {
    $("#form").submit(function() { }).done(function() {
        $(this).find("input").val("");
        alert("Ваша заявка принята! Спасибо.");
        $("#form").trigger("reset");
        });
            return false;
          });
        ;