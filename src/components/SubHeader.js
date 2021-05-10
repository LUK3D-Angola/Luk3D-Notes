import React from 'react';

const SubHeader = ({setdialog})=>{

  function  addDialog(){
        setdialog(true);
    }
    return (
        <div className="flex flex-col">
            
            <div className="flex flex-row py-5 justify-between">
                <p className="text-2xl font-bold text-black-200">Collecion</p>
            </div>
            <div className="flex flex-row ">
                <button onClick={addDialog} className="px-2 py-1 rounded-md focus:outline-none border border-red-600 hover:bg-black-600 transition-color duration-300 text-black-300 bg-black-500"> <i className="fas fa-plus-square"></i> New note</button>
                <button className="px-2 ml-2 py-1 rounded-md focus:outline-none border border-black-400 hover:bg-black-600 transition-color duration-300 text-black-400 bg-black-500"> <i className="fa fa-trash-alt"></i> Clear all</button>
            </div>
        </div>
    )
} 


export default SubHeader;