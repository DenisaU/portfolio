window.onload = function () {
    $.getJSON('https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/zakladni-prehled.json', function (data) {
        let counter = 0;
        let date = data.data[0].datum;

        let n = new Date(Date.parse(date));
        let dd = n.getDate();
        let YYYY = n.getFullYear();
        let mm = n.getMonth()+1;
        let dateToday = `${dd}. ${mm}. ${YYYY}`;

        let vacc = data.data[0].vykazana_ockovani_celkem;
        let vaccTotal = vacc.toLocaleString();

        document.getElementById("vaccNo").innerHTML = counter;
        document.getElementById("dateToday").innerHTML = dateToday;
        
        let setInt = setInterval(function () {
           if(counter > vacc*0.75){
            counter=vaccTotal;
            clearInterval(setInt);
            }else{counter=counter+12345};
            document.getElementById("vaccNo").innerHTML = counter;
        }, 1)   

    });

}


