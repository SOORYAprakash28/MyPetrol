
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
        var p11= parseFloat(document.getElementById('Pnum11').value);
        var p12= parseFloat(document.getElementById('Pnum12').value);
        var p21= parseFloat(document.getElementById('Pnum21').value);
        var p22= parseFloat(document.getElementById('Pnum22').value);

        var p_diff_1 = Math.abs(p11 - p12);
        var p_diff_2 = Math.abs(p21 - p22);
        var p_sum = p_diff_1 + p_diff_2;
        
        var p_price = parseFloat(document.getElementById('p_price').value);

        var p = p_sum * p_price;

        var d11= parseFloat(document.getElementById('Dnum11').value);
        var d12= parseFloat(document.getElementById('Dnum12').value);
        var d21= parseFloat(document.getElementById('Dnum21').value);
        var d22= parseFloat(document.getElementById('Dnum22').value);

        var d_diff_1 = Math.abs(d11 - d12);
        var d_diff_2 = Math.abs(d21 - d22);
        var d_sum =d_diff_1 + d_diff_2;
        
        var d_price = parseFloat(document.getElementById('d_price').value);

        var d = d_sum * d_price;

        var total_cal = d + p;


        var card = parseFloat(document.getElementById('card').value);
        var paytm = parseFloat(document.getElementById('paytm').value);
        var cash = parseFloat(document.getElementById('cash').value);
        var other = parseFloat(document.getElementById('other').value);

        var amount = card + paytm + cash + other;
        console.log(amount);
        console.log(total_cal);
        var loss = amount - total_cal;

// passing petrol values
        document.getElementById('p11').textContent = p11;
        document.getElementById('p12').textContent = p12;
        document.getElementById('p21').textContent = p21;
        document.getElementById('p22').textContent = p22;
        document.getElementById('pp').textContent = p_price;
        document.getElementById('pa').textContent = p_sum;
        document.getElementById('p').textContent = p;
        document.getElementById('pr1').textContent = p_diff_1;
        document.getElementById('pr2').textContent = p_diff_2;
// passing desile

        document.getElementById('d11').textContent = d11;
        document.getElementById('d12').textContent = d12;
        document.getElementById('d21').textContent = d21;
        document.getElementById('d22').textContent = d22;
        document.getElementById('dp').textContent = d_price;
        document.getElementById('da').textContent = d_sum;
        document.getElementById('d').textContent = d;
        document.getElementById('dr1').textContent = d_diff_1;
        document.getElementById('dr2').textContent = d_diff_2;

        document.getElementById('cala').textContent = total_cal;


        document.getElementById('cd').textContent = card;
        document.getElementById('pm').textContent = paytm;
        document.getElementById('ca').textContent = cash;
        document.getElementById('os').textContent = other;
        document.getElementById('pam').textContent = amount;


        document.getElementById('loss').textContent = loss;
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    showStep(currentStep);
});
