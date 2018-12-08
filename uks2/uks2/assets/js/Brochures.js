// articles start
function sortByTheme() {
    let select1 = document.getElementById('select1').selectedIndex;
    let theme = document.getElementsByTagName("option")[select1].value;
    console.log(theme)
    switch (theme) {

        case 'all':
            {
                $(".Gender_sensitive_media").show();
                $(".Violence_against_women").show();
                $(".Legal_rights").show();
                $(".Human_Rights").show();

                break;
            }

        case 'GenderSensitive':
            {
                $(".Gender_sensitive_media").show();
                $(".Violence_against_women").hide();
                $(".Legal_rights").hide();
                $(".Human_Rights").hide();
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

        case 'ViolenceAgainstWomen':
            {

                $(".Gender_sensitive_media").hide();
                $(".Violence_against_women").show();
                $(".Legal_rights").hide();
                $(".Human_Rights").hide();
                break;

            }


        case 'DisasterPreventionRehabilitation':
            {

                $(".Gender_sensitive_media").hide();
                $(".Disaster_Prevention_Rehabilitation").show();
                $(".HIV_AIDS").hide();
                $(".Human_Rights").hide();
                $(".Women_empowerment").hide();


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

        case 'LegalRights':
            {
                $(".Gender_sensitive_media").hide();
                $(".Violence_against_women").hide();
                $(".Legal_rights").show();
                $(".Human_Rights").hide();


                break;

            }

        case 'womenEmpowerment':
            {
                $(".Gender_sensitive_media").hide();
                $(".Disaster_Prevention_Rehabilitation").hide();
                $(".HIV_AIDS").hide();
                $(".Human_Rights").hide();
                $(". women_Empowerment").show();

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

        case 'HumanRights':
            {

                $(".Gender_sensitive_media").hide();
                $(".Violence_against_women").hide();
                $(".Legal_rights").hide();
                $(".Human_Rights").show();

                break;

            }
        case 'HIVAIDS':

            {
                $(".Gender_sensitive_media").hide();
                $(".Disaster_Prevention_Rehabilitation").hide();
                $(".Women_empowerment").hide();
                $(".Human_Rights").hide();
                $(".HIV_AIDS").show();
            }

    }



}
function number() {

    let select2 = document.getElementById('select2').selectedIndex;
    let years = document.getElementsByClassName('alls')[select2].value;
    console.log(years)


    switch (years) {
        case 'all':
            {
                $(".2018").show();
                $(".2015").show();
                $(".2016").show();
                $(".2012").show();
                $(".1998").show();
                $(".2013").show();
                $(".2015").show();
                $(".2016").show();
                $(".2007").show();
                $(".2009").show();

                break;
            }

        case '2018' || '2013':
            {
                $(".2018").show();
                $(".2015").hide();
                $(".2016").hide();
                $(".2012").hide();
                $(".1998").hide();

                $(".2013").show();
                $(".2015").hide();
                $(".2016").hide();
                $(".2007").hide();
                $(".2009").hide();

                break;
            }
        case '2016':
            {
                $(".2018").hide();
                $(".2015").hide();
                $(".2016").show();
                $(".2012").hide();
                $(".1998").hide();

                $(".2013").hide();
                $(".2015").hide();
                $(".2016").show();
                $(".2007").hide();
                $(".2009").hide();
                break;
            }
        case '2015':
            {
                $(".2018").hide();
                $(".2015").show();
                $(".2016").hide();
                $(".2012").hide();
                $(".1998").hide();

                $(".2013").hide();
                $(".2015").show();
                $(".2016").hide();
                $(".2007").hide();
                $(".2009").hide();
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

        case '2007':
            {

                $(".2013").hide();
                $(".2015").hide();
                $(".2016").hide();
                $(".2007").show();
                $(".2009").hide();
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

        case '2009':
            {


                $(".2013").hide();
                $(".2015").hide();
                $(".2016").hide();
                $(".2007").hide();
                $(".2009").show();
                break;
            }
    }

}

// articles end

// brochures&poster Start


function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var ul = document.getElementById('test');
ul.onclick = function (event) {
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

// media toolkit
function numbers() {

    let select2 = document.getElementById('select2').selectedIndex;
    let years = document.getElementsByClassName('alls')[select2].value;
    console.log(years)
    switch (years) {
        case 'all':
            {

                $(".2016").show();
                $(".2013").show();
                $(".2012").show();
                $(".2009").show();
                $(".2008").show();
                $(".2007").show();

                break;
            }

        case '2016':
            {
                $(".2016").show();
                $(".2013").hide();
                $(".2012").hide();
                $(".2009").hide();
                $(".2008").hide();
                $(".2007").hide();

                break;
            }
        case '2013':
            {
                $(".2016").hide();
                $(".2013").show();
                $(".2012").hide();
                $(".2009").hide();
                $(".2008").hide();
                $(".2007").hide();
                break;
            }
        case '2012':
            {
                $(".2016").hide();
                $(".2013").hide();
                $(".2012").show();
                $(".2009").hide();
                $(".2008").hide();
                $(".2007").hide();
                break;
            }
        case '2009':
            {
                $(".2016").hide();
                $(".2013").hide();
                $(".2012").hide();
                $(".2009").show();
                $(".2008").hide();
                $(".2007").hide();
                break;
            }
        case '2008':
            {
                $(".2016").hide();
                $(".2013").hide();
                $(".2012").hide();
                $(".2009").hide();
                $(".2008").show();
                $(".2007").hide();
                break;
            }
        case '2007':
            {
                $(".2016").hide();
                $(".2013").hide();
                $(".2012").hide();
                $(".2009").hide();
                $(".2008").hide();
                $(".2007").show();
                break;
            }
    }

}


