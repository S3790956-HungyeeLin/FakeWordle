window.onload=()=>{
    const btn_instruction = document.querySelector('#modal_instruction')
    btn_instruction.click()
    window.setInterval(( () => getNextWordleTime() ), 1000);
}


function getNextWordleTime(){
    const time = new Date()
    const hour = time.getHours()
    const minute=time.getMinutes()
    const second = time.getSeconds()

    const time_to_second = (hour*3600)+(minute*60)+second
    const nextWordle = 86400-time_to_second
    const final_hour = Math.floor(nextWordle/3600) 
    const final_minutes = Math.floor( (nextWordle-(final_hour*3600))/60)
    const final_second = nextWordle-(final_hour*3600)-(final_minutes*60)

    const nextwordle_time = document.querySelector('#next_wordle_time')
    nextwordle_time.innerHTML = final_hour+' : '+final_minutes+' : '+final_second
    // console.log(final_hour+' '+final_minutes+' '+final_second)
}