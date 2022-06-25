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
    
    let driverRating =  document.querySelector('#rating-value')
    driverRating.textContent=`${driver.rating}`
    }


    //Forms
    //Rating Form
    // let ratingForm = document.querySelector('#rating-form')
    //     ratingForm.addEventListener('submit', handleRating)

    // function handleRating(e) {
    //     e.preventDefault()
    //     let driverRating  = {
    //         rating: e.target.
    //     }
    // }    

    //Comment Form
    // let commentForm = document.querySelector('#comment-form')
    // commentForm.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     handleComment(e.target.newComment.value)
    // })

    // function handleComment(comment){
    //     let p = document.createElement('p')
    //     p.textContent = comment
    //     document.querySelector('#comment-given').appendChild(p)
        
    // }

    

})
