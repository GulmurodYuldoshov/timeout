let clock =document.querySelector('.clock')

function newData() {
    let data = new Date()
    let hour = data.getHours();
    if (hour <10) {
        hour = '0' + hour
    }
    let minut = data.getMinutes();
    if (minut <10) {
        minut = '0' + minut
    }
    
    let second = data.getSeconds()
    if(second < 10){
        second = '0'+ second;
    }
    
    clock.innerHTML =hour +" : " + minut + " : " + second;

    setTimeout(newData,1000)
}
