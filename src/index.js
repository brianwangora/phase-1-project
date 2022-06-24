//Naming Variables



// //Fetching Data
// function allDriverInfo (driver) {
//     fetch('https://brianwangora.github.io/phase-1-project/db.json')
//     .then(response => response.json())
//     .then(driverData => driverData.forEach(driver => (driverCodes)))
// }

//document.addEventListener('DOMContentLoaded', () => {

    //Fetching Data
    function allDriverInfo () {
        fetch('https://brianwangora.github.io/phase-1-project/db.json')
        .then(response => response.json())
        .then(drivers =>
            driverCodes(drivers))
        }
    allDriverInfo()    
     
    //Add received Driver Codes to DOM
    function driverCodes (drivers) {
        for (let elements of drivers){
            let codeList = document.getElementById('driver-codes')    
            let codeTag = document.createElement('span')
            codeTag.id= 'driverCodes'
            codeTag.textContent=elements.code
            codeList.append(codeTag)
            //codeTag.addEventListener('click', () => {

            //})             
        }
    }

       


//}
