function sortByTheme(){
    let select1 = document.getElementById('select1').selectedIndex;
    let ab = document.getElementsByTagName("option")[select1].value;
    switch (ab) {
        case 'GenderSensitive':
        {
            $(".Gender_sensitive_media").show();
            $(".Media_ethics").hide();
            $(".Women_empowerment").hide();
            $(".Gender_based_violence").hide();
            break;

        }
      
        case 'media':
        {
            $(".Gender_sensitive_media").hide();
            $(".Media_ethics").show();
            $(".Women_empowerment").hide();
            $(".Gender_based_violence").hide();
            break;

        }
        case 'women':
        {
            $(".Gender_sensitive_media").hide();
            $(".Media_ethics").hide();
            $(".Women_empowerment").show();
            $(".Gender_based_violence").hide();
            break;

        }
        case 'GenderBased': 
        {

            $(".Gender_sensitive_media").hide();
            $(".Media_ethics").hide();
            $(".Women_empowerment").hide();
            $(".Gender_based_violence").show();
            break;

        }
        case 'all': 
        {
            $(".Gender_sensitive_media").show();
            $(".Media_ethics").show();
            $(".Women_empowerment").show();
            $(".Gender_based_violence").show();
            break;
        }
    }

  

}
function number(){
    
    let select2 = document.getElementById('select2').selectedIndex;
    let abc = document.getElementsByClassName('alls')[select2].value;
    console.log(abc)

    debugger
    switch (abc) {
        case 'all':
        {
            $(".2018").show();
            $(".2015").show();
            $(".2016").show();
            $(".2012").show();
            $(".1998").show();

            break;
        }

        case '2018':
        {
            $(".2018").show();
            $(".2015").hide();
            $(".2016").hide();
            $(".2012").hide();
            $(".1998").hide();

            break;
        }
        case '2016':
        {
            $(".2018").hide();
            $(".2015").hide();
            $(".2016").show();
            $(".2012").hide();
            $(".1998").hide();   
            break;
        }
        case '2015':
        {
            $(".2018").hide();
            $(".2015").show();
            $(".2016").hide();
            $(".2012").hide();
            $(".1998").hide();
            break;
        }
        case '2012':
        {
            $(".2018").hide();
            $(".2015").hide();
            $(".2016").hide();
            $(".2012").show();
            $(".1998").hide();
            break;
        }
        case '1998':
        {
            $(".2018").hide();
            $(".2015").hide();
            $(".2016").hide();
            $(".2012").hide();
            $(".1998").show();
            break;
        }
    }

}

