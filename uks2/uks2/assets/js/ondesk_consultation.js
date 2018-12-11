function sort(){
    let select = document.getElementById('select').selectedIndex;
    let theme = document.getElementsByTagName('option')[select].value;
    console.log(theme)

    switch (theme) {
        case 'All':
        {
            $('.genderJustMedia').show();
            $('.HIVAIDS').show();
            $('.humanRight').show();
            break;
        }
        
        case 'genderJustMedia':
        {
            $('.genderJustMedia').show();
            $('.HIVAIDS').hide();
            $('.humanRight').hide();
            break;
        }
        case 'HIVAIDS':
        {
            $('.genderJustMedia').hide();
            $('.HIVAIDS').show();
            $('.humanRight').hide();
            break;
        }
        case 'humanRight':
        {
            $('.genderJustMedia').hide();
            $('.HIVAIDS').hide();
            $('.humanRight').show();
            break;
        }
    }
}

function year(){
    let select = document.getElementById('selectYear').selectedIndex;
    let year = document.getElementsByClassName('all')[select].value;
    console.log(year);

    switch (year) {
        case 'all':
        {
            $('.2018').show()
            $('.2017').show()
            $('.2016').show()
            $('.2015').show()
            $('.2013').show()
            $('.2012').show()
            $('.2009').show()
            $('.2007').show()
            $('.2005').show()
            $('.2003').show()
            $('.2002').show()
            break;
        }
        case '2018':
        {
            $('.2018').show()
            $('.2017').hide()
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2005').hide()
            $('.2003').hide()
            $('.2002').hide()
            break;
        }
        case '2017':
        {
            $('.2018').hide()
            $('.2017').show()
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2005').hide()
            $('.2003').hide()
            $('.2002').hide()
            break;
        }
        case '2016':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').show()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2005').hide()
            $('.2003').hide()
            $('.2002').hide()
            break;
        }
        case '2015':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2015').show()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2005').hide()
            $('.2003').hide()
            $('.2002').hide()
            break;
        }
        case '2013':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').show()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2005').hide()
            $('.2003').hide()
            $('.2002').hide()
            break;
        }
        case '2012':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').show()
            $('.2009').hide()
            $('.2007').hide()
            $('.2005').hide()
            $('.2003').hide()
            $('.2002').hide()
            break;
        }
        case '2009':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').show()
            $('.2007').hide()
            $('.2005').hide()
            $('.2003').hide()
            $('.2002').hide()
            break;
        }
        case '2007':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').show()
            $('.2005').hide()
            $('.2003').hide()
            $('.2002').hide()
            break;
        }
        case '2005':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2005').show()
            $('.2003').hide()
            $('.2002').hide()
            break;
        }
        case '2003':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2005').hide()
            $('.2003').show()
            $('.2002').hide()
            break;
        }
        case '2002':
        {
            $('.2018').hide()
            $('.2017').hide()
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2005').hide()
            $('.2003').hide()
            $('.2002').show()
            break;
        }
            
    
    }
}