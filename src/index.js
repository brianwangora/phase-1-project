//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    //Fetch Driver's data 
    let fetchData= function () {
        fetch('https://brianwangora.github.io/phase-1-project/db.json')
        .then(res => res.json())
        .then(drivers => drivers.forEach(driver => displayDriverCode(driver)))
    }
    fetchData()

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
            displayDriverName(driver), displayDriverTeam(driver), displayDriverImage(driver),
            showRaceStarts(driver), showPolePositions (driver), showPodiums (driver), showWins(driver), showWorldChampionships(driver)
        )})    
    }

    //Display Driver Name and Number on DOM
    let displayDriverName = function (driver) {
        let driverName = document.querySelector('#name')
        driverName.textContent=`${driver.name}, ${driver.number}`
    }

    //Display Driver Team
    let displayDriverTeam = function(driver) {
        let driverTeam = document.querySelector('#team')
        driverTeam.textContent=`${driver.team}`
    }

    //Display Driver Image
    let displayDriverImage = function (driver) {
        let driverImage = document.querySelector('#image')
        driverImage.src = `${driver.image}`
        driverImage.alt= `${driver.name}`
    }

//STATS Table
    let showRaceStarts = function (driver) {
        let raceStarts = document.querySelector('#starts-value')
        raceStarts.textContent= `${driver.starts}`
    }
    let showPolePositions = function (driver) {
        let polePositions = document.querySelector('#pole-value')
        polePositions.textContent= `${driver.poles}`
    }
    let showPodiums = function (driver) {
        let podiums = document.querySelector('#podiums-value')
        podiums.textContent=`${driver.podiums}`
    }
    let showWins = function (driver) {
        let wins = document.querySelector('#wins-value')
        wins.textContent=`${driver.wins}`
    }
    let showWorldChampionships = function (driver) {
        let championships = document.querySelector('#championships-value')
        championships.textContent=`${driver.championships}`
    }

//Forms
//Rating Form
})
