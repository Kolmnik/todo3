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
        const SummMassiveFunc = (massive: usersListType) => {
            let count
            count = (massive.languages.map((m) => m.langKnowledge))
            const summMassive = (accumulator: number, currentValue: number) => accumulator + currentValue
            return count.reduce(summMassive) / count.length
        }
        if (filterredUsers === 'not') {
            return removeUsers.filter(f => SummMassiveFunc(f) <= 60)
        }
        if (filterredUsers === 'yes') {
            return removeUsers.filter(f => SummMassiveFunc(f) > 60)
        } else {
            return removeUsers
        }
    }
    const removeToDoUsers = (id: number) => {
        const newUsers = removeUsers.filter(f => f.id !== id)
        setRemoveUsers(newUsers)
    }
    // console.log(usersList)
    return (
        <div className="App">
            <StudentsFound usersList={filterUsers()} changeUsers={changefilterredUsers}
                           removeToDoUsers={removeToDoUsers}/>
        </div>
    );
}

type filterUsersType = 'all' | 'not' | 'yes'


type StudentsFoundType = {
    usersList: Array<usersListType>
    changeUsers: Function
    removeToDoUsers: Function
}


const StudentsFound = (props: StudentsFoundType) => {
    const usersFunc = props.usersList.map(t => {
        return (
            <div className={'users'}>
                <button onClick={() => props.removeToDoUsers(t.id)}>Удалить</button>
                <p>Студент - {t.name} </p>
                {t.languages.map(l => {
                    return (
                        <div>
                            <p>Изучил - <span>{l.langName}</span> на <span>{l.langKnowledge}%</span></p>
                        </div>
                    )
                })}
                <p className={'users'}>Плохая успеваемость по: {
                    t.languages.map(l => {
                        if (l.langKnowledge <= 60) {
                            return (<p><span>{l.langName},</span></p>)
                        }
                    })
                }</p>
            </div>
        )
    })
    return (
        <div className={'allusers'}>
            {usersFunc}
            <div className={'buttons'}>
                <button onClick={() => props.changeUsers('all')}>Все</button>
                <button onClick={() => props.changeUsers('not')}>Отстающие</button>
                <button onClick={() => props.changeUsers('yes')}>Успевающие</button>
            </div>
        </div>
    )
}

export default App;
