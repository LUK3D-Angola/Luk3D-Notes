import React, { useState } from 'react';

const AddCard = ({show,setdialog})=>{

    function closeDialog(){
        setdialog(false);
    }
    return (
        <div className={((show==true)?'fixed':'hidden')+" w-full flex flex-row justify-center items-center top-0 bg-opacity-30 h-full bg-black-900"}>
            <div className="p-5 text-black-200 shadow-2xl rounded-lg lg:w-3/6 md:w-4/6 w-5/6 bg-fg-500">
                <p cla>Add new Card</p>

                <div className="flex flex-col px-1 md:px-5 lg:px-10">
                    <select className="w-full mt-5 bg-fg-600 border-black-600 border focus:border-purple-500 py-1  px-2 rounded-md focus:outline-none">
                        <option value="" >Card Type</option>
                        <option value="" >Code</option>
                        <option value="" >Study</option>
                        <option value="" >Entertaining</option>
                    </select>

                    <input name="title"  autocomplete="off"  type="text" className="mt-5 bg-fg-600 py-1 px-2 rounded-md focus:border-purple-500  focus:outline-none border-fg-800 border" placeholder="Card Name" />
                    <textarea placeholder="Describe your card" class="mt-4 px-5 py-5 bg-fg-600 rounded-lg focus:border-purple-500  focus:outline-none border-fg-800 border" id="" cols="30" rows="5"></textarea>
                    <div className="flex fle-row  justify-between">
                    <button onClick={closeDialog} className="px-2 py-1 mt-5 rounded-md focus:outline-none border border-black-600 hover:bg-black-600 transition-color duration-300 text-black-300 bg-black-500">Cancel</button>
                    <button className="px-2 py-1 mt-5 rounded-md focus:outline-none border border-black-600 hover:bg-purple-600 transition-color duration-300 text-black-100 bg-purple-500"> <i className="fas fa-plus-square"></i> Add Card</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCard;