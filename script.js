


const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const api='e23c5126b76c0d5ae40bb7dd7712f727';
const searchb=document.querySelector('.sbox');

const search=document.querySelector('.fa.fa-search');
const weathera=document.querySelector('.mainimg');


async function checkbox(cname){
    const response=await fetch(apiurl+cname+`&appid=${api}`);
    if(response.status==404){
        weathera.src='/error.png';
        document.querySelector('.temp').innerHTML='ERROR';
        document.querySelector('.cname').innerHTML ='ERROR';
        document.querySelector('.hium').innerHTML ='XXXX';
        document.querySelector('.win').innerHTML ='XXXX';
    }else{
    var data=await response.json();
    
    
    console.log(data);

document.querySelector('.cname').innerHTML =data.name;
document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'⁰C';
document.querySelector('.hium').innerHTML =data.main.humidity+'%';
document.querySelector('.win').innerHTML = data.wind.speed+'Km/h';
    
if(data.weather[0].main=='Clouds'){
    weathera.src='/sunny.png';
}
else if(data.weather[0].main=='Rain'){
    weathera.src='/rain.png';
}
else if(data.weather[0].main=='Clear'){
    weathera.src='/sun.png';
}
else if(data.weather[0].main=='Thunderstorm'){
    weathera.src='/thunder.png';
} 
else if(data.weather[0].main=='Haze'){
    weathera.src='/haze.png';
}    
    
}
}


search.addEventListener('click',()=>{
    checkbox(searchb.value);
});
