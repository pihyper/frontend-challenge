## Goal

Create a single web page rendering search results similar to https://www.zizoo.com/en/search/

## Tasks

- Create simple react component for a search listing card based located in this repo.
- Request search results from a GraphQL API for all **active** boats.
- Render the results using the API response and the react component.
- Create a basic filtering solution for boat length (< 15 OR >= 15) and boat year (< 2010 OR >= 2010).
- Bonus (not mandatory): Instead of a static boat photo, implement a photo-slider.

## GraphQL details

- Schema: [playground](https://sls-sandbox.zizoo.com/graphql)
- Endpoint: https://sls-sandbox.zizoo.com/graphql

## Test submission process and evaluation

- Upload a zip file containing the solution’s source code to Greenhouse.
- The solution should be built and run using `npm run`.
- The search result page should be accessible using the path http://localhost:[PORT]/search
- The solution will be evaluated for functionality, coding style and UX *In that order*.
- *Important* Pixel perfect implementation is not a priority.

## Estimated solution Time

4-6 hours

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Solution

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
