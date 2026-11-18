import { useState, useEffect } from "react";
import SinglePage from "./SinglePage.js";
import About from "./About.js";
import './../styles/main.css'
import pages from './../assets/pages.json'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

function Main({cat, dropDown}) {

    const [currentPage, setCurrentPage] = useState(pages[cat][0]);
    
    //function to set the page idx upon refresh or click
    function findNeightbor(bool){
        let currIdx = pages[cat].findIndex(item => item.title === currentPage.title)
        let catLength = Object.keys(pages[cat]).length - 1;
        if (bool){
            setCurrentPage(currIdx < catLength ? pages[cat][currIdx+1] : pages[cat][0])
        } else {
            setCurrentPage(currIdx > 0 ? pages[cat][currIdx-1] : pages[cat][catLength])
        }
    }

    

    //page click listener
    const changePageClick = (e) => {
        e.preventDefault()
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight'){
            findNeightbor(true)
        }
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            findNeightbor(false)
        }
    }

    useEffect(() => {
        //add and remove eventListener for keydown click
        window.addEventListener('keydown', changePageClick);
        return () => {
          window.removeEventListener('keydown', changePageClick);
        };
    });

    useEffect(() => {
        //set first page on catagory refresh
        setCurrentPage(pages[cat][0])
    }, [cat]);
    
    return (cat !== "about") ? (
        //list pages
        <div className={dropDown ? "mainLower" : "main"}>
            <div id="catButtons" >
                {pages[cat].map(page=>{
                    return page.last ? (
                        <div key={page.title} className="catButton" id="lastCatBtn" onClick={()=>{setCurrentPage(page)}} >
                            <img src={page.imageRef} alt={page.title}/>
                        </div>
                    ) : <>
                        <div key={page.title} className="catButton" id={page === currentPage ? "selected" : ""} onClick={()=>{setCurrentPage(page)}}>
                            <img src={page.imageRef} alt={page.title}/>
                        </div>
                        <div className="catSeperator" id={page === currentPage ? "selectedSeperator" : ""}/>
                    </>
                })}
            </div>
            <div id="textBox">
                <SinglePage page={currentPage}/> 
                <div id="leftRightBtns">
                    <h1 onClick={()=>{findNeightbor(false)}}><MdKeyboardArrowLeft /></h1>
                    <h1 onClick={()=>{findNeightbor(true)}}><MdKeyboardArrowRight /></h1>
                </div>
            </div>
        </div>
    ) : (
        //about page
        <div className={dropDown ? "mainLower" : "main"}>
            <About/>
        </div>
    )
}

export default Main;