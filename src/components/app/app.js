import React  from 'react';

import CalendarWidget from '../calendar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

import './app.scss';





const App = () =>{

    const calendar = [
        {
            id:1,
            date:['01','04',2019,'12:35'], //день, месяц, год
            info:{
                title:'12-18',
                description:'description waiting',
            },
            status:'waiting',
            ico:'fa-bell'
        },
        {
            id:88,
            date:['01','04',2019,'12:35'], //день, месяц, год
            info:{
                title:'title waiting 01-01',
                description:'description waiting',
            },
            status:'waiting',
            ico:'fa-bell'
        },
        {
            id:2,
            date:['02','04',2019,'11:35'],
            info:{
                title:'title error 1',
                description:'description error'
            },
            status:'error',
            ico:'fa-bell'
        },
        {
            id:3,
            date:['01','05',2019,'12:35'], //день, месяц, год
            info:{
                title:'title waiting',
                description:'description waiting',
            },
            status:'waiting',
            ico:'fa-bell'
        },
        {
            id:4,
            date:['02','05',2019,'11:35'],
            info:{
                title:'title error 1',
                description:'description error'
            },
            status:'error',
            ico:'fa-bell'
        },
        {
            id:5,
            date:['02','05',2019,'10:35'],
            info:{
                title:'title error 5',
                description:'description error'
            },
            status:'error',
            ico:'fa-bell'
        },
        {
            id:6,
            date:['02','05',2019,'21:35'],
            info:{
                title:'title error 4',
                description:'description error'
            },
            status:'error',
            ico:'fa-bell'
        },
        {
            id:7,
            date:['02','05',2019,'19:35'],
            info:{
                title:'title error 2',
                description:'description error'
            },
            status:'error',
            ico:'fa-bell'
        },
        {
            id:8,
            date:['02','05',2019,'11:30'],
            info:{
                title:'title error 23',
                description:'description error'
            },
            status:'error',
            ico:'fa-bell'
        },
        {
            id:9,
            date:['02','05',2019,'11:00'],
            info:{
                title:'ok title ok 3',
                description:'ok description ok'
            },
            status:'ok',
            ico:'fa-bell'
        },
        {
            id:10,
            date:[18,'05',2019,'13:35'],
            info:{
                title:'title',
                description:'description'
            },
            status:'ok',
            ico:'fa-bell'
        },
        {
            id:11,
            date:[28,'05',2019,'16:35'],
            info:{
                title:'error title',
                description:'error description'
            },
            status:'error',
            ico:'fa-bell'
        },
        {
            id:12,
            date:['01','06',2019,'16:35'],
            info:{
                title:'error title',
                description:'error description'
            },
            status:'error',
            ico:'fa-bell'
        },
        {
            id:13,
            date:[10,'06',2019,'13:35'],
            info:{
                title:'title',
                description:'description'
            },
            status:'ok',
            ico:'fa-bell'
        },

    ];

    return (
        <div className={`wrapper`}>
            <CalendarWidget
                locale={`ru`}
                contentPlan={calendar}
                openPostInfo={e=>console.log(e)}
                writeNewPost={e=>console.log(e)}/>

        </div>
            );
};


export default  App;

