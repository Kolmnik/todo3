import React, {useState} from 'react';
import './App.css';
import {usersList, usersListType} from "./ToDo/todobase";

function App() {

    let [filterredUsers, setFilterredUsers] = useState<filterUsersType>('all')
    let [removeUsers, setRemoveUsers] = useState(usersList)

    const changefilterredUsers = (newfilterredUsers: filterUsersType) => {
        setFilterredUsers(newfilterredUsers)
    }

    const filterUsers = () => {
        if (filterredUsers === 'not') {
            return removeUsers.filter(f => {
                let count
                count =  (f.languages.map((m) => m.langKnowledge))
                console.log(count)
            })
        }
        if (filterredUsers === 'yes') {
            return removeUsers
        } else {
            return removeUsers
        }
    }

    console.log(usersList)
    return (
        <div className="App">
            <StudentsFound usersList={filterUsers() } changeUsers={changefilterredUsers}/>
        </div>
    );
}

type filterUsersType = 'all' | 'not' | 'yes'


type StudentsFoundType = {
    usersList: Array<usersListType>
    changeUsers: Function
}


const StudentsFound = (props: StudentsFoundType) => {
    const usersFunc = props.usersList.map(t => {
        return (
            <div className={'users'}>
                <p>Студент - {t.name} </p>
                {t.languages.map(l => {
                    return (
                        <div>
                            <p>Изучил - <span>{l.langName}</span> на <span>{l.langKnowledge}%</span></p>
                        </div>
                    )
                })}
            </div>
        )
    })
    return (
        <div className={'allusers'}>
            {usersFunc}
            <div className={'buttons'}>
                <button>Все</button>
                <button onClick={()=>props.changeUsers('not')}>Отстающие</button>
                <button>Успевающие</button>
            </div>
        </div>
    )
}

export default App;
