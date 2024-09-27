//accessing all elements
const locEle=document.querySelector(".search-location")
const searchBtn=document.querySelector(".search-btn")
const iconEle=document.querySelector(".weather-icon")
const deseEle=document.querySelector(".description")
const tempEle=document.querySelector(".temperature")
const windEle=document.querySelector(".windspeed")
const placeEle=document.querySelector(".location")


let apikey=`2c1212ec930d150cd5f63da28746304f`

searchBtn.addEventListener("click",(e)=>{
    let locval=locEle.value
    console.log(locval)
    if(locval===""){

        alert("Enter proper location")
    }else{
        //logic for getting the data form api

        url=`https://api.openweathermap.org/data/2.5/weather?q=${locval}&appid=${apikey}`
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            const {icon ,description}=data.weather[0]
            const {temp}=data.main
            const {speed}=data.wind

            iconEle.src=`https://openweathermap.org/img/wn/${icon}@2x.png`

            deseEle.innerText=description
            tempEle.innerHTML=`<p>${temp}<sup>&deg;</sup>c</p>`
            windEle.innerHTML=`<p>${speed}km/h</p>`
            placeEle.innerText=data.name








        }).catch((err)=>{
            alert("Not a valid location")
        })
    }


})



//using keyboard events
locEle.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        let locval=locEle.value
     console.log(locval)
     if(locval===""){

        alert("Enter proper location")
     }else{
            //logic for getting the data form api

         url=`https://api.openweathermap.org/data/2.5/weather?q=${locval}&appid=${apikey}`
         fetch(url)
         .then((res)=>res.json())
         .then((data)=>{
             console.log(data)
             const {icon ,description}=data.weather[0]
             const {temp}=data.main
             const {speed}=data.wind

             iconEle.src=`https://openweathermap.org/img/wn/${icon}@2x.png`

             deseEle.innerText=description
             tempEle.innerHTML=`<p>${temp}<sup>&deg;</sup>c</p>`
             windEle.innerHTML=`<p>${speed}km/h</p>`
             placeEle.innerText=data.name
            }).catch((err)=>{
                alert("Not a valid location")
             })









         
        }
    }
    


    
})

