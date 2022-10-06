import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from "react-redux/es/exports";
import { create_comment, create_favorite } from "../actions";

import NavBar from "../componenets/NavBar";
import Footer from "../componenets/Footer";

export default function Brewery(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [comment, setComment] = useState(null);
    const [comments, setComments] = useState([]);
    const brewery = useSelector(state => state.breweryDetails);
    const [error, setError] = useState(null);
    const allComments = useSelector(state => state.comments);
    const favorites = useSelector(state => state.favorites);
    useEffect(() => {
        console.log(allComments);
        console.log(favorites);
        async function getComments() {
            let data = [];
            allComments.forEach((commentX) => {
                if (commentX.brewery_id == brewery.id) {
                    data.push(commentX);
                }
            })
            setComments(data);
        }
        getComments()
    }, [])
    function createComment(e) {
        e.preventDefault();
        if (comment !== null || comment !== "") {
            const commentObj = {
                brewery_id: brewery.id,
                comment: comment
            }
            dispatch(create_comment(commentObj));
            alert("done!")
        } else {
            setError("Invalid comment");
        }
    }
    function addToFavorites() {
        dispatch(create_favorite(brewery));
        alert("Brewery has been added to favorites")
    }
    return (
        <div>
            <NavBar />
            <div>
                <h3>Brewery details</h3>
                <button style={{ padding: "10px", margin: "10px" }} onClick={() => {
                    navigate("/dashboard");
                }}>Back</button>
                <span>To the Brewery List</span>
            </div>
            <div className="selectedBreweryInfo">
                <div className="favContainer">
                    <h3>Name:{brewery.name}</h3>
                    <button onClick={addToFavorites}>Add to favorites</button>
                </div>
                <h3>Street:{brewery.street}</h3>
                <h3>City:{brewery.city}</h3>
                <h3>State:{brewery.state}</h3>
                <h3>Country:{brewery.country}</h3>
                <h3>Phone number:{brewery.phone}</h3>
                <h3>Website:{brewery.website_url}</h3>

            </div>
            <div style={{ padding: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <label>Rate this Brewery</label>
                    <input type="range" style={{ color: 'gold' }} />
                </div> <br/>
                <div>
                    <label>Comment</label>
                    <form>
                        <textarea style={{ width: "100%", height: "100%", margin: "10px", padding: "10px", border: "1px solid black", fontSize: "14px", margin: "10px", overflow: "hidden", overflow: "hidden", }} onChange={(event) => setComment(event.target.value)}></textarea>
                        <button style={{ padding: "10px", margin: "10px" }} onClick={createComment}>Comment</button>
                    </form>
                    <div style={{ color: 'red' }}>
                        {error}
                    </div>
                </div>
            </div>
            <div style={{ padding: '10px' }}>
                <label>Comments</label>
                {
                    comments.map((commentData, index) => (
                        <div><p>{commentData.comment}</p></div>
                    ))
                }

            </div>

            <Footer />
        </div>
    )
}