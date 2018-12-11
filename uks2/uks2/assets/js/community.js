function sort() {
    let select = document.getElementById('select').selectedIndex;
    let theme = document.getElementsByTagName('option')[select].value;
    console.log(theme)

    switch (theme) {
        case 'all':
            {
                $('.GenderJustMedia').show();
                $('.ViolenceAgainstWomen').show();
                $('.legalRights').show();
                $('.peaceBuilding').show();
                $('.womenEmpowerment').show();
                break;
            }
        case 'GenderJustMedia':
            {
                $('.GenderJustMedia').show();
                $('.ViolenceAgainstWomen').hide();
                $('.legalRights').hide();
                $('.peaceBuilding').hide();
                $('.womenEmpowerment').hide();
                break;
            }
        case 'ViolenceAgainstWomen':
            {
                $('.GenderJustMedia').hide();
                $('.ViolenceAgainstWomen').show();
                $('.legalRights').hide();
                $('.peaceBuilding').hide();
                $('.womenEmpowerment').hide();
                break;
            }
        case 'legalRights':
            {
                $('.GenderJustMedia').hide();
                $('.ViolenceAgainstWomen').hide();
                $('.legalRights').show();
                $('.peaceBuilding').hide();
                $('.womenEmpowerment').hide();
                break;
            }
        case 'peaceBuilding':
            {
                $('.GenderJustMedia').hide();
                $('.ViolenceAgainstWomen').hide();
                $('.legalRights').hide();
                $('.peaceBuilding').show();
                $('.womenEmpowerment').hide();
                break;
            }
        case 'womenEmpowerment':
            {
                $('.GenderJustMedia').hide();
                $('.ViolenceAgainstWomen').hide();
                $('.legalRights').hide();
                $('.peaceBuilding').hide();
                $('.womenEmpowerment').show();
                break;
            }
    }
}
function year(){
    let selects =document.getElementById('selects').selectedIndex;
    let year = document.getElementsByClassName('all')[selects].value;
    console.log(year)
    switch (year) {
        case 'all':
        {
            $('.2017').show();
            $('.2016').show();
            $('.2015').show();
            $('.2014').show();
            $('.2012').show();
            break;
        }
        case '2017':
        {
            $('.2017').show();
            $('.2016').hide();
            $('.2015').hide();
            $('.2014').hide();
            $('.2012').hide();
            break;
        }
        case '2016':
        {
            $('.2017').hide();
            $('.2016').show();
            $('.2015').hide();
            $('.2014').hide();
            $('.2012').hide();
            break;
        }
        case '2015':
        {
            $('.2017').hide();
            $('.2016').hide();
            $('.2015').show();
            $('.2014').hide();
            $('.2012').hide();
            break;
        }
        case '2014':
        {
            $('.2017').hide();
            $('.2016').hide();
            $('.2015').hide();
            $('.2014').show();
            $('.2012').hide();
            break;
        }
        case '2012':
        {
            $('.2017').hide();
            $('.2016').hide();
            $('.2015').hide();
            $('.2014').hide();
            $('.2012').show();
            break;
        }
       
            
    
        
    }
}