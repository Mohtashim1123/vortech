sortByYear();
sortByThemeRR();
function numberTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
var a = document.getElementById('test');
a.onclick = function (event) {
    var target = numberTarget(event);
    console.log(target.innerHTML)
debugger
    switch (target.innerHTML) {
        case 'All' :
        {
            $(".1").show();
            $(".2").show();
            $(".3").show();
            $(".4").show();
            $(".5").show();
            $(".6").show();
            break;
           
        }
        case '1':
            {
                $(".1").show();
                $(".2").hide();
                $(".3").hide();
                $(".4").hide();
                $(".5").hide();
                $(".6").hide();
                break;
            }

        case '2':
            {
                $(".1").hide();
                $(".2").show();
                $(".3").hide();
                $(".4").hide();
                $(".5").hide();
                $(".6").hide();
                break;
            }

        case '3':
            {
                $(".1").hide();
                $(".2").hide();
                $(".3").show();
                $(".4").hide();
                $(".5").hide();
                $(".6").hide();
                break;
            }
        case '4':
            {
                $(".1").hide();
                $(".2").hide();
                $(".3").hide();
                $(".4").show();
                $(".5").hide();
                $(".6").hide();
                break;
            }
        case '5':
            {
                $(".1").hide();
                $(".2").hide();
                $(".3").hide();
                $(".4").hide();
                $(".5").show();
                $(".6").hide();
                break;
            }
        case '6':
            {
                $(".1").hide();
                $(".2").hide();
                $(".3").hide();
                $(".4").hide();
                $(".5").hide();
                $(".6").show();
                break;
            }
           
           
        }
    }
    
    function sortByThemeRR() {
        let select1 = document.getElementById('select1').selectedIndex;
        let theme = document.getElementsByTagName("option")[select1].value;
        console.log(theme)
        switch (theme) {
            case 'sortAll':
            {
                $('.sortAll').show()
                $('.GenderSensitives').hide()
                $('.legalRight').hide()
                $('.womenEmpowerments').hide()
                $('.ViolenceAgainstWomens').hide()
               
                break;
            }
        }
    }
        function sort(){
            let select1 = document.getElementById('select1').selectedIndex;
            let theme = document.getElementsByTagName("option")[select1].value;
            console.log(theme)
          debugger
            switch (theme) {

                case 'sortAll':
                {
                $('.sortAll').show()
                $('.GenderSensitives').hide()
                $('.legalRight').hide()
                $('.womenEmpowerments').hide()
                $('.ViolenceAgainstWomens').hide()
              
                    break;
                }

            case 'GenderSensitives':
            {
                $('.sortAll').hide()
                $('.GenderSensitives').show()
                $('.legalRight').hide()
                $('.womenEmpowerments').hide()
                $('.ViolenceAgainstWomens').hide()
                break;
            }
            case 'legalRight':
            {
                $('.sortAll').hide()
                $('.GenderSensitives').hide()
                $('.legalRight').show()
                $('.womenEmpowerments').hide()
                $('.ViolenceAgainstWomens').hide()
                break;
            }
            case 'womenEmpowerments':
            {
                $('.sortAll').hide()
                $('.GenderSensitives').hide()
                $('.legalRight').hide()
                $('.womenEmpowerments').show()
                $('.ViolenceAgainstWomens').hide()
                break;
            }
            case 'ViolenceAgainstWomens':
            {
                $('.sortAll').hide()
                $('.GenderSensitives').hide()
                $('.legalRight').hide()
                $('.womenEmpowerments').hide()
                $('.ViolenceAgainstWomens').show()
                break;
            }
           
        }
    }

    
    function sortByYear() {
        let select2 = document.getElementById('select2').selectedIndex;
        let years = document.getElementsByClassName('alls')[select2].value;
        console.log(years)
        switch (years) {
            case 'sortAll':
            {
                $('.sortAll').show()
                $('.2018y').hide()
                $('.2016y').hide()
                $('.2015y').hide()
                $('.2014y').hide()
                $('.2013y').hide()
                $('.2011y').hide()
                $('.2010y').hide()
                $('.2009y').hide()
                $('.2003y').hide()
                break;
            }
        }
    }
    function numbersRR() {

        let select2 = document.getElementById('select2').selectedIndex;
        let years = document.getElementsByClassName('alls')[select2].value;
        console.log(years)
        debugger
        switch (years) {
            case 'sortAll':
            {
                $('.sortAll').show()
                $('.2018y').hide()
                $('.2016y').hide()
                $('.2015y').hide()
                $('.2014y').hide()
                $('.2013y').hide()
                $('.2011y').hide()
                $('.2010y').hide()
                $('.2009y').hide()
                $('.2003y').hide()
                break;
            }

            case '2018y':
            {
                $('.sortAll').hide()
                $('.2018y').show()
                $('.2016y').hide()
                $('.2015y').hide()
                $('.2014y').hide()
                $('.2013y').hide()
                $('.2011y').hide()
                $('.2010y').hide()
                $('.2009y').hide()
                $('.2003y').hide()
                break;
            }
            case '2016y':
            {
                $('.sortAll').hide()
                $('.2018y').hide()
                $('.2016y').show()
                $('.2015y').hide()
                $('.2014y').hide()
                $('.2013y').hide()
                $('.2011y').hide()
                $('.2010y').hide()
                $('.2009y').hide()
                $('.2003y').hide()
                break;
            }
            case '2015y':
            {
                $('.sortAll').hide()
                $('.2018y').hide()
                $('.2016y').hide()
                $('.2015y').show()
                $('.2014y').hide()
                $('.2013y').hide()
                $('.2011y').hide()
                $('.2010y').hide()
                $('.2009y').hide()
                $('.2003y').hide()
                break;
            }
            case '2014y':
            {
                $('.sortAll').hide()
                $('.2018y').hide()
                $('.2016y').hide()
                $('.2015y').hide()
                $('.2014y').show()
                $('.2013y').hide()
                $('.2011y').hide()
                $('.2010y').hide()
                $('.2009y').hide()
                $('.2003y').hide()
                break;
            }
            case '2013y':
            {
                $('.sortAll').hide()
                $('.2018y').hide()
                $('.2016y').hide()
                $('.2015y').hide()
                $('.2014y').hide()
                $('.2013y').show()
                $('.2011y').hide()
                $('.2010y').hide()
                $('.2009y').hide()
                $('.2003y').hide()
                break;
            }
            case '2011y':
            {
                $('.sortAll').hide()
                $('.2018y').hide()
                $('.2016y').hide()
                $('.2015y').hide()
                $('.2014y').hide()
                $('.2013y').hide()
                $('.2011y').show()
                $('.2010y').hide()
                $('.2009y').hide()
                $('.2003y').hide()
                break;
            }
            case '2010y':
            {
                $('.sortAll').hide()
                $('.2018y').hide()
                $('.2016y').hide()
                $('.2015y').hide()
                $('.2014y').hide()
                $('.2013y').hide()
                $('.2011y').hide()
                $('.2010y').show()
                $('.2009y').hide()
                $('.2003y').hide()
                break;
            }
            case '2009y':
            {
                $('.sortAll').hide()
                $('.2018y').hide()
                $('.2016y').hide()
                $('.2015y').hide()
                $('.2014y').hide()
                $('.2013y').hide()
                $('.2011y').hide()
                $('.2010y').hide()
                $('.2009y').show()
                $('.2003y').hide()
                break;
            }
            case '2003y':
            {
                $('.sortAll').hide()
                $('.2018y').hide()
                $('.2016y').hide()
                $('.2015y').hide()
                $('.2014y').hide()
                $('.2013y').hide()
                $('.2011y').hide()
                $('.2010y').hide()
                $('.2009y').hide()
                $('.2003y').show()
                break;
            }
        }
    }
