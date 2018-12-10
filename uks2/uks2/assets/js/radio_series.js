function sort(){
let select1 = document.getElementById('select1').selectedIndex;
let theme = document.getElementsByTagName("option")[select1].value;
console.log(theme)
debugger
switch (theme) {
case 'all':
{
    $('.HonourKillings').show();
    $('.ViolenceAgainstWomen').show();
    $('.humanRights').show();
    $('.legalRights').show();
    $('.genderSensitiveMedia').show();
    $('.peaceBuilding').show();
    $('.WomenEmpowerment').show();
    $('.DisasterPrevention').show();
    $('.HIVAIDS').show();
    $('.CounteringViolentExtremism').show();
    break; 
}

    case 'HonourKillings':
    {
        $('.HonourKillings').show();
        $('.ViolenceAgainstWomen').hide();
        $('.humanRights').hide();
        $('.legalRights').hide();
        $('.genderSensitiveMedia').hide();
        $('.peaceBuilding').hide();
        $('.WomenEmpowerment').hide();
        $('.DisasterPrevention').hide();
        $('.HIVAIDS').hide();
        $('.CounteringViolentExtremism').hide();
        break;
    }
    case 'ViolenceAgainstWomen':
    {
        $('.HonourKillings').hide();
        $('.ViolenceAgainstWomen').show();
        $('.humanRights').hide();
        $('.legalRights').hide();
        $('.genderSensitiveMedia').hide();
        $('.peaceBuilding').hide();
        $('.WomenEmpowerment').hide();
        $('.DisasterPrevention').hide();
        $('.HIVAIDS').hide();
        $('.CounteringViolentExtremism').hide();
        break;
    }
    case 'HumanRights':
    {
        $('.HonourKillings').hide();
        $('.ViolenceAgainstWomen').hide();
        $('.HumanRights').show();
        $('.legalRights').hide();
        $('.genderSensitiveMedia').hide();
        $('.peaceBuilding').hide();
        $('.WomenEmpowerment').hide();
        $('.DisasterPrevention').hide();
        $('.HIVAIDS').hide();
        $('.CounteringViolentExtremism').hide();
        break;
    }
    case 'legalRights':
    {
        $('.HonourKillings').hide();
        $('.ViolenceAgainstWomen').hide();
        $('.HumanRights').hide();
        $('.legalRights').show();
        $('.genderSensitiveMedia').hide();
        $('.peaceBuilding').hide();
        $('.WomenEmpowerment').hide();
        $('.DisasterPrevention').hide();
        $('.HIVAIDS').hide();
        $('.CounteringViolentExtremism').hide();
        break;
    }
    case 'GenderSensitiveMedia':
    {
        $('.HonourKillings').hide();
        $('.ViolenceAgainstWomen').hide();
        $('.HumanRights').hide();
        $('.legalRights').hide();
        $('.genderSensitiveMedia').show();
        $('.peaceBuilding').hide();
        $('.WomenEmpowerment').hide();
        $('.DisasterPrevention').hide();
        $('.HIVAIDS').hide();
        $('.CounteringViolentExtremism').hide();
        break;
    }
    case 'PeaceBuilding':
    {
        $('.HonourKillings').hide();
        $('.ViolenceAgainstWomen').hide();
        $('.HumanRights').hide();
        $('.legalRights').hide();
        $('.genderSensitiveMedia').hide();
        $('.peaceBuilding').show();
        $('.WomenEmpowerment').hide();
        $('.DisasterPrevention').hide();
        $('.HIVAIDS').hide();
        $('.CounteringViolentExtremism').hide();
        break;
    }
    case 'WomenEmpowerment':
    {
        $('.HonourKillings').hide();
        $('.ViolenceAgainstWomen').hide();
        $('.HumanRights').hide();
        $('.legalRights').hide();
        $('.genderSensitiveMedia').hide();
        $('.peaceBuilding').hide();
        $('.WomenEmpowerment').show();
        $('.DisasterPrevention').hide();
        $('.HIVAIDS').hide();
        $('.CounteringViolentExtremism').hide();
        break;
    }
    case 'DisasterPrevention':
    {
        $('.HonourKillings').hide();
        $('.ViolenceAgainstWomen').hide();
        $('.HumanRights').hide();
        $('.legalRights').hide();
        $('.genderSensitiveMedia').hide();
        $('.peaceBuilding').hide();
        $('.WomenEmpowerment').hide();
        $('.DisasterPrevention').show();
        $('.HIVAIDS').hide();
        $('.CounteringViolentExtremism').hide();
        break;
    }
    case 'HIVAIDS':
    {
        $('.HonourKillings').hide();
        $('.ViolenceAgainstWomen').hide();
        $('.HumanRights').hide();
        $('.legalRights').hide();
        $('.genderSensitiveMedia').hide();
        $('.peaceBuilding').hide();
        $('.WomenEmpowerment').hide();
        $('.DisasterPrevention').hide();
        $('.HIVAIDS').show();
        $('.CounteringViolentExtremism').hide();
        break;
    }
    case 'CounteringViolentExtremism':
    {
        $('.HonourKillings').hide();
        $('.ViolenceAgainstWomen').hide();
        $('.HumanRights').hide();
        $('.legalRights').hide();
        $('.genderSensitiveMedia').hide();
        $('.peaceBuilding').hide();
        $('.WomenEmpowerment').hide();
        $('.DisasterPrevention').hide();
        $('.HIVAIDS').hide();
        $('.CounteringViolentExtremism').show();
        break;
    }
    
}

}




function sortNumber(){
    let select2 = document.getElementById('select2').selectedIndex;
    let years = document.getElementsByClassName('alls')[select2].value;
    console.log(years)
switch (years) {
    case 'All':
    {
        $('.2017').show()
        $('.2016').show()
        $('.2015').show()
        $('.2013').show()
        $('.2012').show()
        $('.2010').show()
        $('.2009').show()
        $('.2007').show()
        $('.2006').show()
        $('.2004').show()
        break;
    }
    case '2017':
    {
        $('.2017').show()
        $('.2016').hide()
        $('.2015').hide()
        $('.2013').hide()
        $('.2012').hide()
        $('.2010').hide()
        $('.2009').hide()
        $('.2007').hide()
        $('.2006').hide()
        $('.2004').hide()
        break;
    }
    case '2016':
    {
        $('.2017').hide()
        $('.2016').show()
        $('.2015').hide()
        $('.2013').hide()
        $('.2012').hide()
        $('.2010').hide()
        $('.2009').hide()
        $('.2007').hide()
        $('.2006').hide()
        $('.2004').hide()
        break;
    }
    case '2015':
    {
        $('.2017').hide()
        $('.2016').hide()
        $('.2015').show()
        $('.2013').hide()
        $('.2012').hide()
        $('.2010').hide()
        $('.2009').hide()
        $('.2007').hide()
        $('.2006').hide()
        $('.2004').hide()
        break;
    }
    case '2013':
    {
        $('.2017').hide()
        $('.2016').hide()
        $('.2015').hide()
        $('.2013').show()
        $('.2012').hide()
        $('.2010').hide()
        $('.2009').hide()
        $('.2007').hide()
        $('.2006').hide()
        $('.2004').hide()
        break;
    }
    case '2012':
    {
        $('.2017').hide()
        $('.2016').hide()
        $('.2015').hide()
        $('.2013').hide()
        $('.2012').show()
        $('.2010').hide()
        $('.2009').hide()
        $('.2007').hide()
        $('.2006').hide()
        $('.2004').hide()
        break;
    }
    case '2010':
    {
        $('.2017').hide()
        $('.2016').hide()
        $('.2015').hide()
        $('.2013').hide()
        $('.2012').hide()
        $('.2010').show()
        $('.2009').hide()
        $('.2007').hide()
        $('.2006').hide()
        $('.2004').hide()
        break;
    }
    case '2009':
    {
        $('.2017').hide()
        $('.2016').hide()
        $('.2015').hide()
        $('.2013').hide()
        $('.2012').hide()
        $('.2010').hide()
        $('.2009').show()
        $('.2007').hide()
        $('.2006').hide()
        $('.2004').hide()
        break;
    }
    case '2007':
    {
        $('.2017').hide()
        $('.2016').hide()
        $('.2015').hide()
        $('.2013').hide()
        $('.2012').hide()
        $('.2010').hide()
        $('.2009').hide()
        $('.2007').show()
        $('.2006').hide()
        $('.2004').hide()
        break;
    }
    case '2006':
    {
        $('.2017').hide()
        $('.2016').hide()
        $('.2015').hide()
        $('.2013').hide()
        $('.2012').hide()
        $('.2010').hide()
        $('.2009').hide()
        $('.2007').hide()
        $('.2006').show()
        $('.2004').hide()
        break;
    }
    case '2004':
    {
        $('.2017').hide()
        $('.2016').hide()
        $('.2015').hide()
        $('.2013').hide()
        $('.2012').hide()
        $('.2010').hide()
        $('.2009').hide()
        $('.2007').hide()
        $('.2006').hide()
        $('.2004').show()
        break;
    }
    
}




}