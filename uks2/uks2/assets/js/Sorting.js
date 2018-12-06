// articles start
function sortByTheme(){
    let select1 = document.getElementById('select1').selectedIndex;
    let theme = document.getElementsByTagName("option")[select1].value;
    switch (theme) {
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
    let years = document.getElementsByClassName('alls')[select2].value;
    console.log(abc)

    debugger
    switch (years) {
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

// articles end

// brochures&poster Start
// function tabToggle(){
//     console.log('assjn')
// let tab = document.getElementsByClassName('TabSelect').selectedIndex;
// let tabActive = document.getElementsByClassName('TabSelect')[tab]
// console.log(tab)
// }

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var ul = document.getElementById('test');
ul.onclick = function(event) {
    var target = getEventTarget(event);
    console.log(target.innerHTML);

switch (target.innerHTML) {
    case 'Brochures':
    {
        $(".brochure-sec").show();
        $(".poster-sec").hide();
        $(".flyer-sec").hide();
        break;
    }
    
    case 'Posters':
    {
        $(".brochure-sec").hide();
        $(".poster-sec").show();
        $(".flyer-sec").hide();
        break;
    }

    case 'Flyer':
    {
        $(".brochure-sec").hide();
        $(".poster-sec").hide();
        $(".flyer-sec").show();
        break;
    }
    case 'All':
    {
        $(".brochure-sec").show();
        $(".poster-sec").show();
        $(".flyer-sec").show();
        break;
    }
}

}

// brochures&poster end