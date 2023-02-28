
const city=document.getElementById('cityname')
const submit = document.getElementById('submitbtn')
const city_name=document.getElementById('city_name')
const temp = document.getElementById('temp')
const tempstatus= document.getElementById('temp_status')
const middle_layer=document.querySelector('.middle_layer')


let myfun = async(e)=>{
  e.preventDefault();
  let cityval= city.value; 
  if(cityval==="")
  {
    city_name.innerText = `Please write something before search`
    temp.innerText="";
    tempstatus.innerText="";
  }
  else
  { 
    try{
      
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=e850b03175e366bef355c385c2ee564c`;
    const response= await fetch(url);
    const data = await response.json();
    
    
    
    city_name.innerText=`${data.name}, ${data.sys.country}`;
   
    temp.innerText=data.main.temp;
    
    const tempmood = data.weather[0].main;
    if(tempmood=='Clear')
    {
       tempstatus.innerHTML=`<i class="fa-solid fa-sun"></i>`;
    }
    else if(tempmood=='Cloud'){
      tempstatus.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
    }
    else if(tempmood=="Rain")
    {
      tempstatus.innerHTML=`<i class="fa-sharp fa-solid fa-cloud-rain"></i>`;
    }
    else
    {
      tempstatus.innerHTML=`<i class="fa-solid fa-sun"></i>`;
    }
    
    
    }
    catch
    {
      city_name.innerText = `Please enter the city name properly`
      temp.innerText="";
      tempstatus.innerText="";
    }

    }

  }



submit.addEventListener('click',myfun)
