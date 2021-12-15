var bal, amount, credit, deposit, collect, collect_2, period, type, text1, text2, text3, text4, text5, text6, text7, today, deposit_d,collect_d, collect_d2, period_d, months, inputOne;

function loan() {
    var bal = document.getElementById('acc').value;
    var amount = document.getElementById('loan').value;
    var credit = document.getElementById('credit').value;
    var deposit = document.getElementById('deposit');
    var collect = document.getElementById('collection');
    var collect_2 = document.getElementById('collection_2');
    var period = document.getElementById('period');
    var type = document.getElementById('type').value;
    


    today = new Date();
    deposit_d = new Date(deposit.value);
    collect_d = new Date(collect.value);
    collect_d2 = new Date(collect_2.value);
    period_d = new Date(period.value);

    // deposit date
    months = (deposit_d.getFullYear() - today.getFullYear()) * 12;
    months = months - (today.getMonth() + 1);
    months += deposit_d.getMonth() + 1;
    // collect date
    monthc = (collect_d.getFullYear() - today.getFullYear()) * 12;
    monthc = monthc - (today.getMonth() + 1);
    monthc += collect_d.getMonth() + 1;
    // period date 
    monthp = (period_d.getFullYear() - collect_d2.getFullYear()) * 12;
    monthp = monthp - (collect_d2.getMonth() + 1);
    monthp += period_d.getMonth() + 1;

    if (bal == "" || bal == null) {
        alert("Account Balance must be filled");
        return false;
    }
    if (amount == "" || amount == null) {
        alert("Loan amount must be filled");
        return false;
    }

    if (credit == "Months" || credit == null) {
        alert("You must select one option");
        return false;
    }

    if (deposit == "" || deposit == null) {
        alert("You must enter deposit date");
        return false;
    }

    if (collect == "" || collect == null) {
        alert("You must enter collection date");
        return false;
    }

    if (collect_2 == "" || collect_2 == null) {
        alert("You must enter repayment period");
        return false;
    }

    if (period == "" || period == null) {
        alert("You must enter repayment period");
        return false;
    }

    if (type == "Account" || type == null) {
        alert("You must select an account type");
        return false;
    }



    if (amount< bal) {
        text1=10;
    } else {
        text1= -10;
    }
    if (credit < 6) {
        text2 =0;
    } else {
        text2 =10;
    }
    if (months <3 ) {
        text3= 5;
    } else {
        text3=0;
    }

    if (monthc>6) {
        text4 = 10;
    } else {
        text4 = 0;
    }

    if (monthp<6) {
        text5=5;
    } else {
        text5=0;
    }
    if (type==1) {
        text6=10;
    } else {
        text6=5;
    }
    if (text1 + text2 + text3 + text4 + text5 + text6 > 30) {
        text7='Congratulations you have been awarded a loan!'
        var text8 = text7.fontcolor('green');
    } else {
        text7='Sorry you are not eligible to collect this loan'
        var text9 = text7.fontcolor('red');
        
    }

    
    // console.log(result);
    // Output
    // document.getElementById('result1').innerHTML = bal;
    // // document.getElementById('result2').innerHTML= amount;
    // document.getElementById('result3').innerHTML = credit;
    // document.getElementById('result4').innerHTML = deposit_d;
    // document.getElementById('result5').innerHTML = collect_d;
    // document.getElementById('result6').innerHTML = monthp;
    // document.getElementById('result7').innerHTML = type;

    // Points
    // document.getElementById('result8').innerHTML = text1;
    // document.getElementById('result9').innerHTML = text2;
    // document.getElementById('result10').innerHTML = text3;
    // document.getElementById('result11').innerHTML = text4;
    // document.getElementById('result12').innerHTML = text5;
    // document.getElementById('result13').innerHTML = text6;

    // Result
    document.getElementById('result14').innerHTML = text1 + text2 + text3 + text4 + text5 + text6;

    // Comment 
    document.getElementById('total').innerHTML=text8;
    document.getElementById('total').innerHTML = text9;

    window.location.reload()

}

