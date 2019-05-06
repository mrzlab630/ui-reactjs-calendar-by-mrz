import React,{useState} from 'react';
import PropTypes from 'prop-types';

import './calendar.scss';

import moment from "moment";
import 'moment/locale/ru';


const CalendarWidget = ({locale,contentPlan,openPostInfo,writeNewPost}) =>{

    moment.locale(locale);


    const [thisMonthNum,setThisMonthNum] = useState(0);

    const scrollСalendarAction = (m) =>{

        switch (m) {
            case 'previousMonth':
                return setThisMonthNum(thisMonthNum - 1);
            case 'nextMonth':
                return setThisMonthNum(thisMonthNum + 1);
            default:
                return  setThisMonthNum(0);
        }
    };


    const thisMonth     = moment().add(thisMonthNum, 'months').format('MMMM YYYY');//заголовок с месяцем и годом
    const daysOfWeek    = moment.weekdaysShort(true);//дни недели



    const getDaysArrayByMonth = (monthNum = 0 ) => {

        const momentMonth = moment().add(monthNum, 'months'); //месяц который нужно показать


        let daysInMonth = momentMonth.daysInMonth();
        let arrDays = [];

        while(daysInMonth) {

            const momentDate = momentMonth.date(daysInMonth);
            let weekday = momentDate.weekday();

            let current = [
                weekday, // номер дня недели
                moment.weekdaysShort(true,weekday), //краткое название дня недели
                momentDate.format('DD'), // номер день
                momentDate.format('MM'), // номер месяц
                momentDate.format('YYYY'), // номер год
                momentDate.format('DD-MM-YYYY'), // полная дата
                momentDate.format('MMMM'), // название месяц
            ];

            arrDays.push(current);
            daysInMonth--;
        }

        return arrDays.reverse();
    };


    const MonthRender = (MonthCalendar = getDaysArrayByMonth(),contentPlanForMonth=[]) =>{

        /**
         * если месяц начинается не с понедельника
         * добавим в массив пустых дней
         */
        let startDayWeekInMonth =  MonthCalendar[0][0];
        let endDayWeekInMonth =  MonthCalendar[MonthCalendar.length-1][0];

        if(startDayWeekInMonth !== 0){

            while(startDayWeekInMonth) {

                MonthCalendar.splice(0, 0, []);

                startDayWeekInMonth--;
            }

        }

        /**
         * если месяц заканчивается не в воскр
         * добавим в массив пустых дней
         */
        if(endDayWeekInMonth !== 6){

            let endDayWeekInMonthF = 6-endDayWeekInMonth;
            while(endDayWeekInMonthF) {

                MonthCalendar.splice(MonthCalendar.length, 0, []);

                endDayWeekInMonthF--;
            }
        }



        let res = MonthCalendar.map((val,idx)=>{

            /**
             * найдем публикации за текущий день
             */
            const contentPlanForThisDay = contentPlanForMonth.filter((valContentPlan)=>{

                if(parseInt(valContentPlan.date[0]) === parseInt(val[2])
                    &&
                    parseInt(valContentPlan.date[1]) === parseInt(val[3])
                    &&
                    parseInt(valContentPlan.date[2]) === parseInt(val[4])){
                    return valContentPlan;
                }else{
                    return false;
                }

            });


            const dayInfoRender = (dayInfo = {}) => {

                if(!dayInfo || dayInfo.length === 0 || !dayInfo.status || !dayInfo.info){
                    return false;
                }

                let keyId = Math.floor(Math.random() * 10000000000000001) + new Date();

                    let dayInfoStyle   = (dayInfo.status && dayInfo.status === 'error') ? dayInfo.status : 'error';
                    const dayMuted       = (!dayInfo.status) ?  'd-none d-sm-inline-block bg-light text-muted' : '';

                    switch (dayInfo.status) {
                        case 'error':
                            dayInfoStyle =  'bg-danger';
                            break;
                        case 'waiting':
                            dayInfoStyle =  'bg-warning';
                            break;
                        default:
                            dayInfoStyle =  'bg-danger';
                    }
/*
                let socNetIco = false;
                    switch (dayInfo.socNet) {
                        case 'vk':
                            socNetIco = 'fa-vk';
                            break;
                        default:
                            socNetIco = 'fa-child';
                            break;
                    }
*/
                    return(
                        <React.Fragment key={`dayInfoRender-day-${dayInfo.id}-${dayInfo.date[0]}-${dayInfo.date[1]}-${dayInfo.date[2]}-${dayInfo.date[3]}-${keyId}`}>
                            <div className={`event mb-1 rounded text-white ${dayMuted}`}>
                                <button type="button" className={`btn ${dayInfoStyle} text-white btn-sm btn-block event-btm`} onClick={()=>{openPostInfo({openPost:dayInfo})}}>
                                  <div className={'row'}>
                                    <div className={'col-1 text-left'}>
                                      {dayInfo.date[3]}
                                  </div>
                                      <div className={'col text-right'}>
                                          <i className={`fa ${dayInfo.ico}`} aria-hidden="true"></i>
                                      </div>
                                  </div>
                                    <div className={'row'}>
                                        <div className={'col text-center'}>
                                            {dayInfo.info.title}
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className={''}>
                                {/*dayInfo.info.description*/}
                            </div>
                        </React.Fragment>

                    )
                };

            const dayInfoRenderMass = (contentPlanForThisDay) =>{

              let res =  contentPlanForThisDay.map((val)=>{

               return   dayInfoRender(val);

              });


              return res;
            };


            return (
                <React.Fragment key={`MonthCalendar-day-${idx}`}>
                <div
                     className={`day col-sm p-2 border border-left-0 border-top-0 text-truncate `}>
                    <h5 className="row calendar-bg align-items-center">
                        <span className="date col-1">{val[2]}</span>
                        <small className="col-6 d-sm-none float-right text-right text-muted">{val[1]}</small>
                        <span className="col-1"></span>
                        {
                            (val[2]) ?
                                        <span className={'col float-right text-right'}>

                                        <button type="button" className="btn btn-outline-light btn-sm"
                                                data-toggle="tooltip"
                                                data-placement="right"
                                                title="Добавить публикацию"
                                        onClick={e => writeNewPost({writeNewPost:{date:val}})}>

                                            <i className="fa  fa-pencil" aria-hidden="true"></i>
                                        </button>

                                        </span>
                                    : false
                        }


                    </h5>
                    <div className={'day-data scrollbar-style'}>
                    {dayInfoRenderMass(contentPlanForThisDay)}
                    </div>

                    <p className="d-sm-none"></p>
                </div>
                    {(val[0] && val[0] === 6) ? <div className="w-100"></div> : false}
                </React.Fragment>
            );


        });

        return res;





    };

    return (
        <div className={'CalendarWidget'}>



            <div className="container-fluid">
                <header>
                    <div className="row display-4 mb-4">
                        <div className={'col-6 text-left'}>
                            <ul className={'сalendar-navigation-btm'}>
                                <li>
                                    <button type="button" onClick={()=>{scrollСalendarAction("previousMonth")}} className="btn calendar-bg text-white btn-lg">
                                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                                </button>
                                </li>
                                <li>
                                    <button type="button" onClick={()=>{scrollСalendarAction("nextMonth")}} className="btn calendar-bg text-white btn-lg">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </button>
                                </li>
                            </ul>
                        </div>
                        <div className={'col-6 text-right'}>{thisMonth}</div>
                    </div>

                    <div className="row d-none d-sm-flex p-1 calendar-bg text-white">
                        {
                            daysOfWeek.map((val,idx)=>{

                                return(
                                    <h5 key={`Calendar-daysOfWeek-${idx}`} className="col-sm p-1 text-center">{val}</h5>
                                );
                            })
                        }
                    </div>
                </header>
                <div className="row border border-right-0 border-bottom-0">
                    {
                        MonthRender(getDaysArrayByMonth(thisMonthNum),contentPlan)
                    }
                    <div className="w-100"></div>
                </div>
            </div>



        </div>
    );
};

CalendarWidget.prototype = {
                                locale:PropTypes.string,
                                contentPlan:PropTypes.array.isRequired,
                                openPostInfo:PropTypes.func,
                                writeNewPost:PropTypes.func,
                            };

export default CalendarWidget;
