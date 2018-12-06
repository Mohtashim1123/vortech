
console.log('in js js')
function sort(){
    let GenderSensitive = document.getElementById('GenderSensitive')
    let select1 = document.getElementById('select1').selectedIndex;
    // let x = document.getElementsByClassName(Gender_sensitive_media)
    let ab = document.getElementsByTagName("option")[select1].value;
    console.log(ab)
   let Gender_sensitive_media = document.getElementsByClassName('Gender_sensitive_media')
   let head = document.getElementsByClassName('heading')
   let x =document.querySelectorAll('head.h2')
   console.log(head)
   console.log(x)
   let panal = document.getElementsByClassName('panel-body-content')
    let main = document.getElementById('main')
    console.log(panal)
  
panal.innerHTML = 'jllo'
}

