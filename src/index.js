//Fetch Driver's data 
function fetchData () {
    fetch('https://brianwangora.github.io/phase-1-project/db.json')
    .then(res => res.json())
    .then(drivers => drivers.forEach(driver => displayDriverCode(driver)))
}
fetchData()

//Display Driver Codes on DOM
function displayDriverCode(driver) {
    let codeTag = document.createElement('div')
    codeTag.id="driverCodes"
    codeTag.innerHTML = 
        `<p>
            <span>${driver.code}</span>
        </p>`
    document.querySelector('#driver-codes').appendChild(codeTag)
    codeTag.addEventListener('click', () => {(
        displayDriverName(driver),
        displayDriverTeam(driver),
        displayDriverImage(driver)
    )})    
}

//Display Driver Name and Number on DOM
function displayDriverName(driver) {
    let driverName = document.querySelector('#name')
    driverName.textContent=`${driver.name}, ${driver.number}`
}

//Display Driver Team
function displayDriverTeam(driver) {
    let driverTeam = document.querySelector('#team')
    driverTeam.textContent=`${driver.team}`
}

//Display Driver Image
function displayDriverImage(driver) {
    let driverImage = document.querySelector('#image')
    driverImage.src = `${driver.image}`
    driverImage.alt= `${driver.name}`
 }