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
import React from 'react';<br/>
import ReactDOM from 'react-dom';<br/>
import CalendarWidget from 'ui-reactjs-calendar-by-mrz';<br/>
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

## На кофе
Если этот проект поможет вам сократить время на разработку, вы можете купить мне чашку кофе :)

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="3FYLY9YVBTSEL" />
<input type="image" src="https://www.paypalobjects.com/en_US/RU/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_RU/i/scr/pixel.gif" width="1" height="1" />
</form>



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
import React from 'react';<br/>
import ReactDOM from 'react-dom';<br/>
import CalendarWidget from 'ui-reactjs-calendar-by-mrz';<br/>
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

## Donation
If this project help you reduce time to develop, you can give me a cup of coffee :)

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="3FYLY9YVBTSEL" />
<input type="image" src="https://www.paypalobjects.com/en_US/RU/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_RU/i/scr/pixel.gif" width="1" height="1" />
</form>


### `By`
**mrZ** - mrzlab630@gmail.com

## License

The MIT License.



