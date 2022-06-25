//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    //Fetch Driver's data 
    let fetchData= function () {
        fetch('https://brianwangora.github.io/phase-1-project/db.json')
        .then(res => res.json())
        .then(drivers => drivers.forEach(driver => displayDriverCode(driver)))
    }
    fetchData()

    let postDriverInfo= function (driverEntry) {
        
        fetch('https://brianwangora.github.io/phase-1-project/db.json', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(driverEntry)
    })
    .then(res => res.json())
    .then(entry => console.log(entry))
}


    //Display Driver Codes on DOM
    let displayDriverCode = function (driver) {
        let codeTag = document.createElement('div')
        codeTag.id="driverCodes"
        codeTag.innerHTML = 
            `<p>
                <span>${driver.code}</span>
            </p>`
        document.querySelector('#driver-codes').appendChild(codeTag)
        codeTag.addEventListener('click', () => {(
            displayAllInformation(driver)
        )})    
    }

    //Displaying all Information
    let displayAllInformation = function (driver) {

    //Display Driver Name and Number on DOM
    let driverName = document.querySelector('#name')
    driverName.textContent=`${driver.name}, ${driver.number}`

    //Display Driver Team
    let driverTeam = document.querySelector('#team')
    driverTeam.textContent=`${driver.team}`

    //Display Driver Image
    let driverImage = document.querySelector('#image')
    driverImage.src = `${driver.image}`
    driverImage.alt= `${driver.name}`

    //STATS Table
    let raceStarts = document.querySelector('#starts-value')
    raceStarts.textContent= `${driver.starts}`

    let polePositions = document.querySelector('#pole-value')
    polePositions.textContent= `${driver.poles}`
    
    let podiums = document.querySelector('#podiums-value')
    podiums.textContent=`${driver.podiums}`
    
    let wins = document.querySelector('#wins-value')
    wins.textContent=`${driver.wins}`
    
    let championships = document.querySelector('#championships-value')
    championships.textContent=`${driver.championships}`
    
    }


    //Forms
    document.querySelector('#driver-form').addEventListener('submit', handleEntry)

    function handleEntry (e) {
        e.preventDefault()
        let driverEntry = {
            name: e.target.driver_name.value,
            number: e.target.driver_number.value,
            code: e.target.driver_code.value,
            team: e.target.driver_team.value,
            nationality: e.target.driver_nationality.value,
            image: e.target.driver_image.value,
            starts: e.target.driver_starts.value,
            poles: e.target.driver_poles.value,
            podiums: e.target.driver_podiums.value,
            wins: e.target.driver_wins.value,
            championships: e.target.driver_championships.value
        }
        displayDriverCode(driverEntry)
        displayAllInformation(driverEntry)
        postDriverInfo(driverEntry)
    }

    

})
