# The 2022 Formula 1 Drivers

This web application enables the user to view information about the current 2022 formula 1 drivers and give them a rating as well as a comment.

## API 

The API used to obtain the divers' information is : 
    https://brianwangora.github.io/phase-1-project/db.json

## Deliverables

As a user I can:

1. See all drivers codes (for example; HAM, BOT, VER) in a `div` with the id of `"driver-codes"`. 
This requires creating a `span` tag with the driver's code and add it to the `div#driver-codes`.

2. Click on any of the span tags which will make a GET request to the API and display the data listed in `section#driverInfo` and `section#driverStats`.

3. Use a form to add a driver to the API using POST and it being accessible on the DOM.