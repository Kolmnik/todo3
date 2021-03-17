import React from 'react';

type languagesType = {
    langName: string
    langKnowledge: number
}

export type usersListType = {
    id: number
    name: string
    years: number
    languages: Array<languagesType>
}

export const usersList = [
    {
        id: 1,
        name: 'Yaroslav ',
        years: 18,
        languages: [{langName: 'Eng ', langKnowledge: 50}, {langName: 'Rus ', langKnowledge: 90}, {
            langName: 'Fr',
            langKnowledge: 60
        },],
    },
    {
        id: 2,
        name: 'Nikita ',
        years: 18,
        languages: [{langName: 'Eng ', langKnowledge: 63}, {langName: 'Rus ', langKnowledge: 85}, {
            langName: 'Fr',
            langKnowledge: 10
        },],
    },
    {
        id: 3,
        name: 'Shasha ',
        years: 18,
        languages: [{langName: 'Eng ', langKnowledge: 75}, {langName: 'Rus ', langKnowledge: 100},],
    }
]

