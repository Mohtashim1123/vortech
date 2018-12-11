function sort(){
    let select = document.getElementById('select').selectedIndex;
    let theme = document.getElementsByTagName('option')[select].value
    console.log(theme)
    switch (theme) {
        case 'GenderjustMedia':
        {
            $('.GenderjustMedia').show();
            $('.GenderbasedViolence').hide();

            break;
        }
        case 'GenderbasedViolence':
        {
            $('.GenderjustMedia').hide();
            $('.GenderbasedViolence').show();

            break;
        }
    }
}
function year(){
    let select = document.getElementById('selects').selectedIndex;
    let year = document.getElementsByClassName('all')[select].value;
    console.log(year)
    switch (year) {
        case 'all':
        {
            $('.2018').show()
            $('.2017').show()
            $('.2016').show()
            $('.2013').show()
            $('.2011').show()
            $('.2010').show()
            $('.2009').show()
            break;
        }
        case '2018':
        {
            $('.2018').show()
            $('.2017').hide()
            $('.2016').hide()
            $('.2013').hide()
            $('.2011').hide()
            $('.2010').hide()
            $('.2009').hide()
            break;
        }
        case '2017':
        {
            $('.2018').hide()
            $('.2017').show()
            $('.2016').hide()
            $('.2013').hide()
            $('.2011').hide()
            $('.2010').hide()
            $('.2009').hide()
            break;
        }
        case '2016':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').show()
            $('.2013').hide()
            $('.2011').hide()
            $('.2010').hide()
            $('.2009').hide()
            break;
        }
        case '2013':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2013').show()
            $('.2011').hide()
            $('.2010').hide()
            $('.2009').hide()
            break;
        }
        case '2011':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2013').hide()
            $('.2011').show()
            $('.2010').hide()
            $('.2009').hide()
            break;
        }
        case '2010':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2013').hide()
            $('.2011').hide()
            $('.2010').show()
            $('.2009').hide()
            break;
        }
        case '2009':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2013').hide()
            $('.2011').hide()
            $('.2010').hide()
            $('.2009').show()
            break;
        }
            
    }
}