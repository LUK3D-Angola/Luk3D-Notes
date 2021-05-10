const TodoCard = ({card})=>{

    return(
        <div className="p-5 flex flex-col rounded-lg text-left  bg-fg-700 todo-card hover:shadow-2xl transition-all cursor-pointer  shadow-lg" >
            <div className="flex flex-row mb-10">
                <div className="p-2 bg-purple-500 text-black-100 rounded-lg px-3">
                    <i className="fa fa-code"></i>
                </div>
            </div>
            <p className="text-2xl font-bold text-black-200">{card['title']}</p>
            <p className="text-1xl font-light text-black-300 mt-5">
                Grupo de tarefas que devo fazer relativamente  a programação e algumas cenas fixes por agora.  </p>
            <p className="text-1xl font-light text-black-300 mt-5">
                3/5 -Feito
             </p>
        </div>
    )
}


export default TodoCard;