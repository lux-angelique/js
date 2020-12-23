$(document).ready(function() {
    $('.to-count').click(function() {
        let a = $('.val-a').val();
        let b = $('.val-b').val();
        let c = $('.val-c').val();

        let discr = b * b - 4 * a * c;
        let answer = '';

        if (discr < 0) {
            answer = "Вещественных значений нет!";
        }
        else {
            if (discr == 0) {
                answer = "Два одинаковых вещественных корня:<br>";
                answer += "x<sub>1</sub> = x<sub>2</sub> = ";
                answer += -b / (2 * a);
            }
            else {
                answer = "Два различных вещественных корня:<br>";
                answer += "x<sub>1</sub> = ";
                answer += -b / (2 * a) - Math.sqrt(discr) / (2 * a);
                answer += "x<sub>2</sub> = ";
                answer += -b / (2 * a) + Math.sqrt(discr) / (2 * a);
            }
        }

        $('.answer').html(answer);
    });
});