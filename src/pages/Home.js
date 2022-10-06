import {React,useEffect, useState} from 'react';
import NavBar from "../componenets/NavBar";
import Footer from '../componenets/Footer';
import Map from '../componenets/Map';
import axios from 'axios';

export default function Home(){
    const [breweries,setBreweries]=useState(null);
    const [cities,setCities]=useState(null);
    const [types,setTypes]=useState(null);
    const [mapMarkers,setMapMarkers]=useState(null);
    //
    useEffect(() => {
        async function get_brewries(){
            axios.get('https://api.openbrewerydb.org/breweries')
            .then(response=>{
                setBreweries(response.data);
                //console.log(response.data);
                let allCities=[];
                let allCityObj=[];
                let allBreweryTypes=[];
                let allBreweryTypesObj=[];
                let markers=[];
                response.data.forEach(brewery=>{
                    const cityObj={value:brewery.city,label:brewery.city.toUpperCase()}
                    const typeObj={value:brewery.brewery_type,label:brewery.brewery_type.toUpperCase()}
                    const markerObj={
                        type:'scattermapbox',
                        lat:[brewery.latitude],
                        lon:[brewery.longitude],
                        mode:'markers',
                        marker: {
                          size:14
                        },
                        text:[brewery.name]
                      }
                    //create cities
                   if(allCities.indexOf(brewery.city)===-1){
                        allCities.push(brewery.city);
                        allCityObj.push(cityObj);
                        //push map marker
                        markers.push(markerObj);
                   }
                   //create brewery types
                   if(allBreweryTypes.indexOf(brewery.brewery_type)===-1){
                        allBreweryTypes.push(brewery.brewery_type);
                        allBreweryTypesObj.push(typeObj);
                   }
                })
                //update state of cities and types
                setCities(allCityObj);
                setTypes(allBreweryTypesObj);
                setMapMarkers(markers);
            })
            .catch(error=>{
                console.log(error.message);
            })
        }
       if(!breweries){
        get_brewries();
       }
    }, []);
    return(
        <div>
            <NavBar/>
            <h2>You are Welcome,</h2>
            <div>
                <h3 style={{margin:"10px 10px",color:"brown"}}>Start explore US Breweries by first register</h3>
            </div>            
            <div className='mapContainer'>
                <Map markers={mapMarkers}/>
            </div>

            

            <Footer/>
        </div>
    )
}