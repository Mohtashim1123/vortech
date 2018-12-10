function sort(){
    let select = document.getElementById('select').selectedIndex;
    let theme = document.getElementsByTagName('option')[select].value;
    console.log(theme)
    switch (theme) {
        case 'all':
        {
            $('.WomenEmpowerment').show()
            $('.GendersensitiveMedia').show()
            $('.Energyjournalism').show()
            $('.CounteringViolentExtremism').show()
            $('.WomenMedia').show()
            break;
        }
        case 'WomenEmpowerment':
        {
            $('.WomenEmpowerment').show()
            $('.GendersensitiveMedia').hide()
            $('.Energyjournalism').hide()
            $('.CounteringViolentExtremism').hide()
            $('.WomenMedia').hide()
            break;
        }
        case 'GendersensitiveMedia':
        {
            $('.WomenEmpowerment').hide()
            $('.GendersensitiveMedia').show()
            $('.Energyjournalism').hide()
            $('.CounteringViolentExtremism').hide()
            $('.WomenMedia').hide()
            break;
        }
        case 'Energyjournalism':
        {
            $('.WomenEmpowerment').hide()
            $('.GendersensitiveMedia').hide()
            $('.Energyjournalism').show()
            $('.CounteringViolentExtremism').hide()
            $('.WomenMedia').hide()
            break;
        }
        case 'CounteringViolentExtremism':
        {
            $('.WomenEmpowerment').hide()
            $('.GendersensitiveMedia').hide()
            $('.Energyjournalism').hide()
            $('.CounteringViolentExtremism').show()
            $('.WomenMedia').hide()
            break;
        }
        case 'WomenMedia':
        {
            $('.WomenEmpowerment').hide()
            $('.GendersensitiveMedia').hide()
            $('.Energyjournalism').hide()
            $('.CounteringViolentExtremism').hide()
            $('.WomenMedia').show()
            break;
        }
    }
}
function sortYear(){
    let select = document.getElementById('test').selectedIndex;
    let year = document.getElementsByClassName('alls')[select].value;
    console.log(year)

    switch (year) {
        case 'all':
        {
            $('.2017').show();
            $('.2016').show();
            $('.2015').show();
            $('.2014').show();
            $('.2010').show();
            break;
        }
        case '2017':
        {
            $('.2017').show();
            $('.2016').hide();
            $('.2015').hide();
            $('.2014').hide();
            $('.2010').hide();
            break;
        }
        case '2016':
        {
            $('.2017').hide();
            $('.2016').show();
            $('.2015').hide();
            $('.2014').hide();
            $('.2010').hide();
            break;
        }
        case '2015':
        {
            $('.2017').hide();
            $('.2016').hide();
            $('.2015').show();
            $('.2014').hide();
            $('.2010').hide();
            break;
        }
        case '2014':
        {
            $('.2017').hide();
            $('.2016').hide();
            $('.2015').hide();
            $('.2014').show();
            $('.2010').hide();
            break;
        }
        case '2010':
        {
            $('.2017').hide();
            $('.2016').hide();
            $('.2015').hide();
            $('.2014').hide();
            $('.2010').show();
            break;
        }
            
    
       
    }
}