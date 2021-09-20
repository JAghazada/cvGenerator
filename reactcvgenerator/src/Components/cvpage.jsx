import React from 'react'
import './css/cvpage.style.css'
import { Preview, print } from 'react-html2pdf';
import Header from './common.elements/Header';

function cvpage() { 
    return (
        <div id="rooted">
            <Header/>
            <div className="row row-cvpage main my-5 mx-5">
                <div className="d-flex">
                    <span className="h1-cvpage">CV -lərim </span><div className="create-cvpage mx-4 my-1  d-flex align-items-center"><span>+ Create New</span></div>
                </div>
            </div>
            <section className="d-flex" style={{flexWrap:'wrap'}}>
            <div className="row row-cvpage col-4 d-flex my-5 mx-5">
                <div className="cvpreview "></div>
                <div className="mx-5">
                    <div className="circle px-0 mr-2">
                        <div className="incircle d-flex justify-content-center align-items-center">0%</div>
                    </div>
                    <div className="cvname mt-3">loco</div>
                    <div className="date mt-2">Sep 19, 2021 1:14:24 PM</div>
                    <div className="edit mt-3 py-2">Edit</div>
                    <div className="edit py-2">Duplicate</div>
                    <div className="edit py-2">Delete</div>
                    <div className="twopdf py-3">Download</div>
                </div>
            </div>
            
            </section>
        </div>
    )
}

export default cvpage
