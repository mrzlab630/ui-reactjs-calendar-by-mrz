## UI-Calendar-mrZ


## RU

### `React.js компонент - календарь`
На основе дизайна [OOybam](https://codepen.io/chrisdpratt/pen/OOybam) 
<br/>

### `В компоненте используется`
* [Bootstrap v.4.3.1](https://getbootstrap.com/docs/4.0/getting-started/introduction/) 
* [Font-awesome](https://fontawesome.ru) 
* [Moment](http://momentjs.com/) 
* [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) 
* [SCSS](https://sass-lang.com/) 
<br/>

### `Подключение`
import CalendarWidget from 'ui-calendar-mrz';<br/>
import React from 'react';<br/>
import ReactDOM from 'react-dom';<br/>
<br/>

ReactDOM.render(<><br/>
                <CalendarWidget
                locale={`ru`};<br/>
                 contentPlan={calendar};<br/>
                 openPostInfo={e=>console.log(e)};<br/>
                 writeNewPost={e=>console.log(e)};<br/>
                 /><br/>
                 </>, container);<br/>
                 <br/>
                 
### `Запуск`
yarn install / npm install<br/>
yarn start / npm start<br/>
<br/>


## API

### `props`

локальное время - **locale** string *en* / *ru*
<br/>
<br/>
информация - **contentPlan** array [ {
                                   id:1,<br/>
                                   date:['01','04',2019,'12:35'], //день, месяц, год, время<br/>
                                   info:{<br/>
                                       title:'Заголовок',<br/>
                                       description:'Описание',<br/>
                                   },<br/>
                                   status:'waiting', // ok,waiting,error<br/>
                                   ico:'fa-bell' // fontawesome иконка<br/>
                               },<br/>
                               ...]
<br/>
<br/>
**openPostInfo** calback функция для вывода записи по клику на нее
<br/>
<br/>
**writeNewPost** calback функция для создания записи по клику на иконку карандаша
<br/>


## EN


### `React.js component - calendar`
Based on design [OOybam](https://codepen.io/chrisdpratt/pen/OOybam) 
<br/>

### `The component uses`
* [Bootstrap v.4.3.1](https://getbootstrap.com/docs/4.0/getting-started/introduction/) 
* [Font-awesome](https://fontawesome.ru) 
* [Moment](http://momentjs.com/) 
* [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) 
* [SCSS](https://sass-lang.com/) 
<br/>

### `Usage`
import CalendarWidget from 'ui-calendar-mrz';<br/>
import React from 'react';<br/>
import ReactDOM from 'react-dom';<br/>
<br/>

ReactDOM.render(<><br/>
                <CalendarWidget
                locale={`en`};<br/>
                 contentPlan={calendar};<br/>
                 openPostInfo={e=>console.log(e)};<br/>
                 writeNewPost={e=>console.log(e)};<br/>
                 /><br/>
                 </>, container);<br/>
                 <br/>
                 
### `Development`
yarn install / npm install<br/>
yarn start / npm start<br/>
<br/>


## API

### `props`

local time - **locale** string *en* / *ru*
<br/>
<br/>
information - **contentPlan** array [ {
                                   id:1,<br/>
                                   date:['01','04',2019,'12:35'], //day, month, year, time<br/>
                                   info:{<br/>
                                       title:'Headline',<br/>
                                       description:'Description',<br/>
                                   },<br/>
                                   status:'waiting', // ok,waiting,error<br/>
                                   ico:'fa-bell' // fontawesome icon<br/>
                               },<br/>
                               ...]
<br/>
<br/>
**openPostInfo** calback function to display a record by clicking on it
<br/>
<br/>
**writeNewPost** calback function to create a record by clicking on the pencil icon
<br/>



### `By`
**mrZ** - mrzlab630@gmail.com

## License

The MIT License.

