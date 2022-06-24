//Fetching Data
async function fetchDrivers () {
    let url =('https://brianwangora.github.io/phase-1-project/db.json')
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}
fetchDrivers()

//Display Driver Codes
async function displayDriverCode() {
    let drivers = await fetchDrivers()
    let html = ''
    drivers.forEach(driver => {
        let codeTag = `<div id="driverCodes">
                            <p>
                                <span>${driver.code}</span>
                            </p>
                        </div>`
         html += codeTag               
    })
    let driverCode = document.querySelector('#driver-codes')
    driverCode.innerHTML = html
    
    // codeTag.addEventListener('click', () => {
    //     changeDriverName(driver), changeDriverNumber(driver), changeDriverTeam(driver), changeDriverImage(driver)
    // })              
}
displayDriverCode()

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


// let drivers = await fetchDrivers()
//     let html = ''
//     drivers.forEach(driver => {
//         let codeTag = `<div id="driverCodes">
//                             <p>
//                                 <span>${driver.code}</span>
//                             </p>
//                         </div>`
//          html += codeTag               
//     })
//     let driverCode = document.querySelector('#driver-codes')
//     driverCode.innerHTML = html