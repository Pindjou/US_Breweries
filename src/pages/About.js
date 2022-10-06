import React from "react"

import NavBar from "../componenets/NavBar";
import Footer from "../componenets/Footer";

function About() {


  return (
    <div>

      <NavBar />
      <h1>About Beersourcing Project 👩‍💻</h1>
      <p>Develop a SPA (Single Page Application) based on the Javascript library React (<a href="https://reactjs.org/">https://reactjs.org/</a>). The application should be usable in mobile/ and tablet (415px to 800px).</p>
      <p>The following framework conditions are to be adhered to.</p>
      <ul>
        <li>Implementation of the application with the React Hooks API as well as custom hooks.</li>
        <li>External state management with Redux (<a href="https://redux.js.org">https://redux.js.org</a>)</li>
        <li>Graph visualisation with Plotly (<a href="https://plotly.com/javascript/">https://plotly.com/javascript/</a>)</li>
        <li>User profiles based on Express (<a href="https://expressjs.com">https://expressjs.com</a>)</li>
        <li>Routing of the application via Routes (react-router)</li>
        <li>The submission must be done by Thursday 01.09.2021 : 15:15 hrs.</li>
      </ul>
      <h2>## Background</h2>
      <ul>
        <li>The Open Brewery DB is an open data source with information about breweries in the USA.</li>
        <li>It provides an API to retrieve data including geo-location<br />(<a href="https://www.openbrewerydb.org/documentation">https://www.openbrewerydb.org/documentation</a>).<br />This data should be made accessible to the user of the app.</li>
      </ul>
      <h2>## User Story I</h2>
      <ul>
        <li>Data of a brewery can be retrieved based on location and type.</li>
      </ul>
      <h2>## User Story II</h2>
      <ul>
        <li>The user can save breweries of interest to him as favourites (list).</li>
        <li>In this view, he can also have the details displayed when selecting a brewery.</li>
      </ul>
      <h2>## Userstory III</h2>
      <ul>
        <li>The user can rate a brewery (1-5 stars) and create a comment (min 150 characters).</li>
      </ul>
      <h2>## Userstory IV</h2>
      <ul>
        <li>The system recognises at least 3 users. With the help of a login, his data (name, favourites) can be recognised.<br />can be recognised.</li>
        <li>The user profiles of the users can be read in a simplified way from a JSON file.</li>
        <li>These are delivered via Express.</li>
      </ul>
      <h2>## Userstory V</h2>
      <ul>
        <li>The user can view the ranking (Top3) of the breweries (graph for visualisation).</li>
      </ul>
      <h2>## Userstory VI</h2>
      <ul>
        <li>The user can view the developer of the app on a contact page.</li>
        <li>There he will also find a reference to the API used.</li>
      </ul>
      <h2>## Evaluation criteria</h2>
      <ul>
        <li>Structure and organisation of the source code</li>
        <li>Outsourcing in components/hooks</li>
        <li>Robustness of the component: try/except, test</li>
        <li>Documentation/comments Source code</li>
        <li>Fulfilment of the respective user story</li>
        <li>Design of the user interface (GUI):</li>
      </ul>

      <Footer />



    </div>
  )
}

export default About