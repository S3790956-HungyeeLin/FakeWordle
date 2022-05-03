var box_count = 1
var box_line = 1

window.onload = () => {
    const btn_instruction = document.querySelector('#modal_instruction')
    btn_instruction.click()

    window.setInterval((() => getNextWordleTime()), 1000);

    keypress()
}


function getNextWordleTime() {
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    const time_to_second = (hour * 3600) + (minute * 60) + second
    const nextWordle = 86400 - time_to_second
    const final_hour = Math.floor(nextWordle / 3600)
    const final_minutes = Math.floor((nextWordle - (final_hour * 3600)) / 60)
    const final_second = nextWordle - (final_hour * 3600) - (final_minutes * 60)

    const nextwordle_time = document.querySelector('#next_wordle_time')
    nextwordle_time.innerHTML = final_hour + ' : ' + final_minutes + ' : ' + final_second
    // console.log(final_hour+' '+final_minutes+' '+final_second)
}

function keypress() {
    var isAlpha = function (ch) {
        return /^[A-Z]$/i.test(ch);
    }
    document.addEventListener('keydown', (keycode) => {
        if (isAlpha(keycode.key) == true) {
            let count = `${box_line}${box_count}`
            let currentboxvalue = document.querySelector('#b'+count).innerHTML
            
            if (currentboxvalue.length == 0 && box_count<6){
                document.querySelector('#b' + count).innerHTML = keycode.key
                box_count += 1          
            }

            

        }else if(keycode.key === 'Enter' && box_count==6){
            alert('Confirm answer!')
            box_count=1
            box_line +=1
        }else if(keycode.key === 'Backspace' && box_count>0){
            if(box_count-1!=0){
                box_count-=1
            }           
            count = `${box_line}${box_count}`
            document.querySelector('#b' + count).innerHTML = ''
            
        }
    })
}

