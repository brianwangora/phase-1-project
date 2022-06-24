//Fetching Data
function fetchDrivers () {
    fetch('https://brianwangora.github.io/phase-1-project/db.json')
    .then(res => res.json)
    .then(data => console.log(data))
        // .forEach(driver => (
        // driverCode(driver), 
        // driverName(driver),
        // driverNumber(driver),
        // driverTeam(driver),
        // driverImage(driver)
        //  )));
}
fetchDrivers()

// //Display Driver Codes
// function driverCode(driver) {
//     let codeTag = document.createElement('div')
//     codeTag.id = 'driverCodes'
//     codeTag.innerHTML=
//         `<p>
//             <span>${driver.code}</span>
//          <p>`
//     document.querySelector('#driver-codes').appendChild(codeTag)
//     codeTag.addEventListener('click', () => {
//         changeDriverName(driver), changeDriverNumber(driver), changeDriverTeam(driver), changeDriverImage(driver)
//     })              
// }

// //Display Driver Name
// function changeDriverName(driver) {
//     let driverName = document.querySelector('#name')
//     driverName.textContent=`${driver.name}`
// }

// //Display Driver Number
// function changeDriverNumber(driver) {

// }

// //Display Driver Team
// function changeDriverTeam(driver) {

// }

// //Display Driver Image
// function changeDriverImage(driver) {

// }