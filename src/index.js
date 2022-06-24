//Fetch Driver's data 
function fetchData () {
    fetch('https://brianwangora.github.io/phase-1-project/db.json')
    .then(res => res.json())
    .then(drivers => drivers.forEach(driver => driverCode(driver)))
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
    codeTag.addEventListener('click', () => {

    })    
}

//