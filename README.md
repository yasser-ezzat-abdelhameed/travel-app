# Travel App

Travel app is a simple web app which allows you to plan and save your trips.
This is the fifth project in the [Front End Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)

## Project setup

- Download or clone the project
- Run `npm i`
- Create a [Geonames](http://www.geonames.org/export/web-services.html) dev account, then get the username
- Create a [Weatherbit](https://www.weatherbit.io/account/create) dev account, then get the api key
- Create a [Pixabay](https://pixabay.com/api/docs/) dev account, then get the api key
- Create an `.env` file at the project's root directory, then add GEONAMES_USERNAME, WEATHERBIT_API_KEY, PIXABAY_API_KEY, and PORT
- To run a dev build run `npm run build-dev`
- To run a production build run `npm run build-prod`
- To start the backend server run `npm start`

## How it works

- When you launch the web app with a web browser, you are going to see a web page with a text and a floating add button.
- The floating add button should take you to create trip form.
- When you submit the form, the backend should pull data from Geonames, Weatherbit, and Pixabay using the destination and save the data locally.
- Then you should be navigated back to the home screen and the trip you have just added should be there.
- You can use the controls at the right section of the trip card to view/edit/delete the trip.
- You can still add more trips with the floating add button.
- You can find a working demo at [FEND-Travel-App](https://fend-tavel-app.herokuapp.com/)

## Resources used

- Geonames api to get info about the destination like lat and lng from [Geonames](http://www.geonames.org/export/web-services.html).
- Weatherbit api to get info about the weather from [Weatherbit](https://www.weatherbit.io/account/create).
- Pixabay api to get images from [Pixabay](https://pixabay.com/api/docs/).
- Poppins font family from [GoogleFonts](https://fonts.google.com/).
- Font Awesome Icons from [FontAwesome](https://fontawesome.com/).
