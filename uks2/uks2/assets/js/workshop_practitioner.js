function sort() {
    let select = document.getElementById('select').selectedIndex;
    let theme = document.getElementsByTagName('option')[select].value;
    console.log(theme)

    switch (theme) {
        case 'All':
            {
                $('.ViolenceAgainstWomen').show();
                $('.genderjustmedia').show();
                $('.energyJournalism').show();
                $('.peaceBuilding').show();
                $('.humanRights').show();
                $('.disasterPrevention').show();
                $('.HIVAIDS').show();

                break;
            }
        case 'ViolenceAgainstWomen':
            {
                $('.ViolenceAgainstWomen').show();
                $('.genderjustmedia').hide();
                $('.energyJournalism').hide();
                $('.peaceBuilding').hide();
                $('.humanRights').hide();
                $('.disasterPrevention').hide();
                $('.HIVAIDS').hide();

                break;
            }
        case 'genderjustmedia':
            {
                $('.ViolenceAgainstWomen').hide();
                $('.genderjustmedia').show();
                $('.energyJournalism').hide();
                $('.peaceBuilding').hide();
                $('.humanRights').hide();
                $('.disasterPrevention').hide();
                $('.HIVAIDS').hide();

                break;
            }
        case 'energyJournalism':
            {
                $('.ViolenceAgainstWomen').hide();
                $('.genderjustmedia').hide();
                $('.energyJournalism').show();
                $('.peaceBuilding').hide();
                $('.humanRights').hide();
                $('.disasterPrevention').hide();
                $('.HIVAIDS').hide();

                break;
            }
        case 'peaceBuilding':
            {
                $('.ViolenceAgainstWomen').hide();
                $('.genderjustmedia').hide();
                $('.energyJournalism').hide();
                $('.peaceBuilding').show();
                $('.humanRights').hide();
                $('.disasterPrevention').hide();
                $('.HIVAIDS').hide();

                break;
            }
        case 'humanRights':
            {
                $('.ViolenceAgainstWomen').hide();
                $('.genderjustmedia').hide();
                $('.energyJournalism').hide();
                $('.peaceBuilding').hide();
                $('.humanRights').show();
                $('.disasterPrevention').hide();
                $('.HIVAIDS').hide();

                break;
            }
        case 'disasterPrevention':
            {
                $('.ViolenceAgainstWomen').hide();
                $('.genderjustmedia').hide();
                $('.energyJournalism').hide();
                $('.peaceBuilding').hide();
                $('.humanRights').hide();
                $('.disasterPrevention').show();
                $('.HIVAIDS').hide();

                break;
            }
        case 'HIVAIDS':
            {
                $('.ViolenceAgainstWomen').hide();
                $('.genderjustmedia').hide();
                $('.energyJournalism').hide();
                $('.peaceBuilding').hide();
                $('.humanRights').hide();
                $('.disasterPrevention').hide();
                $('.HIVAIDS').show();

                break;
            }


        
    }
}
function year(){
    let select =  document.getElementById('selectYear').selectedIndex;
    let year = document.getElementsByClassName('all')[select].value;
    console.log(year)

    switch (year) {
        case 'all':
        {
            $('.2016').show()
            $('.2015').show()
            $('.2013').show()
            $('.2012').show()
            $('.2009').show()
            $('.2007').show()
            $('.2006').show()
            $('.2001').show()
            $('.2000').show()
            $('.1999').show()
            $('.1998').show()
            break;
        }
        case '2016':
        {
            $('.2016').show()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2006').hide()
            $('.2001').hide()
            $('.2000').hide()
            $('.1999').hide()
            $('.1998').hide()
            break;
        }
        case '2015':
        {
            $('.2016').hide()
            $('.2015').show()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2006').hide()
            $('.2001').hide()
            $('.2000').hide()
            $('.1999').hide()
            $('.1998').hide()
            break;
        }
        case '2013':
        {
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').show()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2006').hide()
            $('.2001').hide()
            $('.2000').hide()
            $('.1999').hide()
            $('.1998').hide()
            break;
        }
        case '2012':
        {
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').show()
            $('.2009').hide()
            $('.2007').hide()
            $('.2006').hide()
            $('.2001').hide()
            $('.2000').hide()
            $('.1999').hide()
            $('.1998').hide()
            break;
        }
        case '2009':
        {
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').show()
            $('.2007').hide()
            $('.2006').hide()
            $('.2001').hide()
            $('.2000').hide()
            $('.1999').hide()
            $('.1998').hide()
            break;
        }
        case '2007':
        {
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').show()
            $('.2006').hide()
            $('.2001').hide()
            $('.2000').hide()
            $('.1999').hide()
            $('.1998').hide()
            break;
        }
        case '2006':
        {
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2006').show()
            $('.2001').hide()
            $('.2000').hide()
            $('.1999').hide()
            $('.1998').hide()
            break;
        }
        case '2001':
        {
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2006').hide()
            $('.2001').show()
            $('.2000').hide()
            $('.1999').hide()
            $('.1998').hide()
            break;
        }
        case '2000':
        {
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2006').hide()
            $('.2001').hide()
            $('.2000').show()
            $('.1999').hide()
            $('.1998').hide()
            break;
        }
        case '1999':
        {
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2006').hide()
            $('.2001').hide()
            $('.2000').hide()
            $('.1999').show()
            $('.1998').hide()
            break;
        }
        case '1998':
        {
            $('.2016').hide()
            $('.2015').hide()
            $('.2013').hide()
            $('.2012').hide()
            $('.2009').hide()
            $('.2007').hide()
            $('.2006').hide()
            $('.2001').hide()
            $('.2000').hide()
            $('.1999').hide()
            $('.1998').show()
            break;
        }
       
            
    
       
    }
}