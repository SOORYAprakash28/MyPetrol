
$(document).ready(function() {
    var currentStep = 0;
    var steps = $(".step");

    function showStep(step) {
        steps.removeClass("active");
        steps.eq(step).addClass("active");
        var progress = (step + 1) / steps.length * 100;
        $("#progressBar").css("width", progress + "%");
    }

    $(".next").click(function() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    $(".previous").click(function() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    $("#multiStepForm").submit(function(event) {
        event.preventDefault();
        let p11= parseFloat(document.getElementById('Pnum11').value);
        let p12= parseFloat(document.getElementById('Pnum12').value);
        let p21= parseFloat(document.getElementById('Pnum21').value);
        let p22= parseFloat(document.getElementById('Pnum22').value);

        let p_diff_1 = Math.abs(p11 - p12);
        let p_diff_2 = Math.abs(p21 - p22);
        let p_sum = p_diff_1 + p_diff_2;
        
        let p_price = parseFloat(document.getElementById('p_price').value);

        let p = p_sum * p_price;

        let d11= parseFloat(document.getElementById('Dnum11').value);
        let d12= parseFloat(document.getElementById('Dnum12').value);
        let d21= parseFloat(document.getElementById('Dnum21').value);
        let d22= parseFloat(document.getElementById('Dnum22').value);

        let d_diff_1 = Math.abs(d11 - d12);
        let d_diff_2 = Math.abs(d21 - d22);
        let d_sum =d_diff_1 + d_diff_2;
        
        let d_price = parseFloat(document.getElementById('d_price').value);

        let d = d_sum * d_price;

        let total_cal = d + p;


        let card = parseFloat(document.getElementById('card').value);
        let paytm = parseFloat(document.getElementById('paytm').value);
        let cash = parseFloat(document.getElementById('cash').value);
        let other = parseFloat(document.getElementById('other').value);

        let amount = card + paytm + cash + other;
        console.log(amount);
        console.log(total_cal);
        let loss = amount - total_cal;
        document.getElementById('result').textContent = total_cal;
        document.getElementById('cresult').textContent = amount;
        document.getElementById('loss').textContent = loss;
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    showStep(currentStep);
});
