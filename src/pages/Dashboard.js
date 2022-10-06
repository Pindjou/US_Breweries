import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Map from '../componenets/Map';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from "react-router-dom";
import { view_brewery_details } from '../actions';
import { useDispatch } from 'react-redux/es/exports';

import NavBar from "../componenets/NavBar";
import Footer from "../componenets/Footer";


export default function Dashboard(props) {
    const selectedBrewery = useSelector(state => state.breweryDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector(state => state.userInfo);
    const users = useSelector(state => state.users);
    const [breweries, setBreweries] = useState(null);
    const [cities, setCities] = useState(null);
    const [types, setTypes] = useState(null);
    const [mapMarkers, setMapMarkers] = useState(null);
    //
    const [sortedData, setSortedData] = useState([]);
    useEffect(() => {
        async function get_brewries() {
            axios.get('https://api.openbrewerydb.org/breweries')
                .then(response => {
                    setBreweries(response.data);
                    //console.log(response.data);
                    let allCities = [];
                    let allCityObj = [];
                    let allBreweryTypes = [];
                    let allBreweryTypesObj = [];
                    let markers = [];
                    response.data.forEach(brewery => {
                        const cityObj = { value: brewery.city, label: brewery.city.toUpperCase() }
                        const typeObj = { value: brewery.brewery_type, label: brewery.brewery_type.toUpperCase() }
                        const markerObj = {
                            type: 'scattermapbox',
                            lat: [brewery.latitude],
                            lon: [brewery.longitude],
                            mode: 'markers',
                            marker: {
                                size: 14
                            },
                            text: [brewery.name]
                        }
                        //create cities
                        if (allCities.indexOf(brewery.city) === -1) {
                            allCities.push(brewery.city);
                            allCityObj.push(cityObj);
                            //push map marker
                            markers.push(markerObj);
                        }
                        //create brewery types
                        if (allBreweryTypes.indexOf(brewery.brewery_type) === -1) {
                            allBreweryTypes.push(brewery.brewery_type);
                            allBreweryTypesObj.push(typeObj);
                        }
                    })
                    //update state of cities and types
                    setCities(allCityObj);
                    setTypes(allBreweryTypesObj);
                    setMapMarkers(markers);
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
        if (!breweries) {
            get_brewries();
        }
    }, []);
    function sortByCity(city) {
        let cityBreweries = [];
        const allBreweries = breweries;
        allBreweries.forEach((breweryData) => {
            if (breweryData.city.toUpperCase() === city.value.toUpperCase()) {
                cityBreweries.push(breweryData);
            }
        })
        setSortedData(cityBreweries);
    }
    function sortByType(type) {
        const sortType = type.value;
        const allBreweries = breweries;
        const typeBreweries = [];
        allBreweries.forEach((breweryData) => {
            if (breweryData.brewery_type.toUpperCase() === sortType.toUpperCase()) {
                typeBreweries.push(breweryData);
            }
        })
        setSortedData(typeBreweries);
    }
    function viewBrewery(breweryInfo) {
        dispatch(view_brewery_details(breweryInfo));
        navigate("/brewery");
    }
    return (
        <div className='dashboard'>
            <NavBar />
            <h2>Welcome {userInfo.name},</h2>
            <div className='brewry-form'>
                <h3>Select brewry</h3>
                <div className='boxContainer'>
                    <div className='box'>
                        <label>by City</label>
                        <Select options={cities} onChange={(data) => sortByCity(data)} />
                    </div>
                    <div className='box'>
                        <label>by Type</label>
                        <Select options={types} onChange={(data) => sortByType(data)} />
                    </div>
                </div>
            </div>
            <div className='maps'>
                <h4>Breweries in the US</h4>
                {
                    /**<Map markers={mapMarkers}/> */
                }
                <div className='breweries-container'>
                    {
                        sortedData.map((brewery, index) => (
                            <div key={index} onClick={() => {
                                viewBrewery(brewery);
                            }}><p>{brewery.name}</p></div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}