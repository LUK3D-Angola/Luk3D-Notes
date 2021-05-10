import React, { useEffect, useState } from "react";
import SubHeader from './SubHeader';
import TodoCard from './TodoCard';

const Body = ({todoCards,setdialog})=>{

    
    return (

        <div className="grid-cols-6 grid">
            <div>
            </div>
           <div className="col-span-4">
            <p className="text-3xl p-0 text-black-200 mt-10">Welcome to Luk-notes</p>
            <p className="text-sm text-black-200 mt-3">Create a new note to start</p>

            <SubHeader setdialog={setdialog}></SubHeader>
                <div className="grid grid-cols-3 gap-1 py-5">
                    {
                        todoCards.map((card)=> (
                            <TodoCard card={card} key={card.title}></TodoCard>

                        ))
                    }

                </div>

           <div>
           </div>

            </div>

        </div>

    );
}


export default Body;