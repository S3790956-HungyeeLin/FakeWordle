var box_count = 1
var box_line = 1
var response=''

window.onload = () => {
    const btn_instruction = document.querySelector('#modal_instruction')
    btn_instruction.click()

    window.setInterval((() => getNextWordleTime()), 1000);

    keypress()
    virtual_keyboard()

    unittest()
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

var isAlpha = function (ch) {
    return /^[A-Z]$/i.test(ch);
}

function warning(msg){
    document.querySelector('#warning').innerHTML=msg
    document.querySelector('#btn_warning').click()
}

function getCurrentWord(){
    currentword = document.querySelector('#b'+box_line+'1').innerHTML
    +document.querySelector('#b'+box_line+'2').innerHTML
    +document.querySelector('#b'+box_line+'3').innerHTML
    +document.querySelector('#b'+box_line+'4').innerHTML
    +document.querySelector('#b'+box_line+'5').innerHTML

    return currentword
}

function textbox_action(key) {
    if (isAlpha(key) == true) {
        // let count = `${box_line}${box_count}`
        // let currentboxvalue = document.querySelector('#b' + count).innerHTML

        // if (currentboxvalue.length == 0 && box_count < 6) {
        //     document.querySelector('#b' + count).innerHTML = key
        //     box_count += 1
        // }
        if(box_count<6){
            let count = `${box_line}${box_count}`
            let currentboxvalue = document.querySelector('#b' + count).innerHTML
            if (currentboxvalue.length==0){
                document.querySelector('#b' + count).innerHTML = key
                box_count += 1
            }
        }


    } else if (key === 'ENTER') {
        if (box_count == 6) {
            // const letter1 = document.querySelector('#b'+box_line+'1').innerHTML
            // const letter2 = document.querySelector('#b'+box_line+'2').innerHTML
            // const letter3 = document.querySelector('#b'+box_line+'3').innerHTML
            // const letter4 = document.querySelector('#b'+box_line+'4').innerHTML
            // const letter5 = document.querySelector('#b'+box_line+'5').innerHTML
            // const current_word = letter1+letter2+letter3+letter4+letter5
            current_word = getCurrentWord()

            if (current_word === 'GROUP'){
                response = 'Correct'
                warning(response)
                // alert(response)
                box_count = 1
                box_line += 1
            }else{
                response='InCorrect'
                warning(response)
                box_count = 1
                box_line += 1
            }


        
        }else{
            response='Guess cannot be less than 5 letter'
            warning(response)
        }

    } else if (key === 'BACKSPACE' && box_count > 0) {
        if (box_count - 1 != 0) {
            box_count -= 1
        }
        count = `${box_line}${box_count}`
        document.querySelector('#b' + count).innerHTML = ''

    }
}

function keypress() {
    document.addEventListener('keydown', (keycode) => {
        textbox_action(keycode.key.toUpperCase())
    })
}

function virtual_keyboard() {
    const k1 = document.querySelector('#k1')
    const k2 = document.querySelector('#k2')
    const k3 = document.querySelector('#k3')
    const k4 = document.querySelector('#k4')
    const k5 = document.querySelector('#k5')

    const k6 = document.querySelector('#k6')
    const k7 = document.querySelector('#k7')
    const k8 = document.querySelector('#k8')
    const k9 = document.querySelector('#k9')
    const k10 = document.querySelector('#k10')

    const k11 = document.querySelector('#k11')
    const k12 = document.querySelector('#k12')
    const k13 = document.querySelector('#k13')
    const k14 = document.querySelector('#k14')
    const k15 = document.querySelector('#k15')

    const k16 = document.querySelector('#k16')
    const k17 = document.querySelector('#k17')
    const k18 = document.querySelector('#k18')
    const k19 = document.querySelector('#k19')
    const k20 = document.querySelector('#k20')

    const k21 = document.querySelector('#k21')
    const k22 = document.querySelector('#k22')
    const k23 = document.querySelector('#k23')
    const k24 = document.querySelector('#k24')
    const k25 = document.querySelector('#k25')

    const k26 = document.querySelector('#k26')
    const k27 = document.querySelector('#k27')
    const k28 = document.querySelector('#k28')



    k1.addEventListener('click', () => { textbox_action('Q') })
    k2.addEventListener('click', () => { textbox_action('W') })
    k3.addEventListener('click', () => { textbox_action('E') })
    k4.addEventListener('click', () => { textbox_action('R') })
    k5.addEventListener('click', () => { textbox_action('T') })

    k6.addEventListener('click', () => { textbox_action('Y') })
    k7.addEventListener('click', () => { textbox_action('U') })
    k8.addEventListener('click', () => { textbox_action('I') })
    k9.addEventListener('click', () => { textbox_action('O') })
    k10.addEventListener('click', () => { textbox_action('P') })

    k11.addEventListener('click', () => { textbox_action('A') })
    k12.addEventListener('click', () => { textbox_action('S') })
    k13.addEventListener('click', () => { textbox_action('D') })
    k14.addEventListener('click', () => { textbox_action('F') })
    k15.addEventListener('click', () => { textbox_action('G') })

    k16.addEventListener('click', () => { textbox_action('H') })
    k17.addEventListener('click', () => { textbox_action('J') })
    k18.addEventListener('click', () => { textbox_action('K') })
    k19.addEventListener('click', () => { textbox_action('L') })
    k20.addEventListener('click', () => { textbox_action('ENTER') })

    k21.addEventListener('click', () => { textbox_action('Z') })
    k22.addEventListener('click', () => { textbox_action('X') })
    k23.addEventListener('click', () => { textbox_action('C') })
    k24.addEventListener('click', () => { textbox_action('V') })
    k25.addEventListener('click', () => { textbox_action('B') })

    k26.addEventListener('click', () => { textbox_action('N') })
    k27.addEventListener('click', () => { textbox_action('M') })
    k28.addEventListener('click', () => { textbox_action('BACKSPACE') })

}


function unittest(){
    test_No_More_5_Letter()
    test_Less_Than_5_letter()
    test_number_and_special_input()
    test_valid_word()
    test_Invalid_word()
}

function clearinput(){
    textbox_action('BACKSPACE')
    textbox_action('BACKSPACE')
    textbox_action('BACKSPACE')
    textbox_action('BACKSPACE')
    textbox_action('BACKSPACE')
}

function clearresult(){
    document.querySelector('#b11').innerHTML=''
    document.querySelector('#b12').innerHTML=''
    document.querySelector('#b13').innerHTML=''
    document.querySelector('#b14').innerHTML=''
    document.querySelector('#b15').innerHTML=''

    box_line=1
    box_count=1
}

function test_No_More_5_Letter(){
    textbox_action('G')
    textbox_action('R')
    textbox_action('O')
    textbox_action('U')
    textbox_action('N')
    textbox_action('D')

    let test_exp = getCurrentWord()
    if (test_exp==='GROUN'){
        console.log('test_no_more_than_5_letter : True')
    }else{
        console.log('test_no_more_than_5_letter : Fail')
    }
    clearinput()
}

function test_Less_Than_5_letter(){
    textbox_action('H')
    textbox_action('E')
    textbox_action('Y')

    textbox_action('ENTER')
    document.querySelector('#btn_warning').click()

    let test_exp = response
    if (test_exp === 'Guess cannot be less than 5 letter'){
        console.log('test_Less_Than_5_letter : True')
    }else{
        console.log('test_Less_Than_5_letter : Fail')
    }
    clearinput()
}

function test_number_and_special_input(){
    textbox_action('&')
    textbox_action('2')

    let test_exp = getCurrentWord()
    if (test_exp.length==0){
        console.log('test_number_and_special_input : True')
    }else{
        console.log('test_number_and_special_input : Fail')
    }
    clearinput()
}

function test_valid_word(){
    textbox_action('G')
    textbox_action('R')
    textbox_action('O')
    textbox_action('U')
    textbox_action('P')
    textbox_action('ENTER')

    let test_exp = response
    if(test_exp === 'Correct'){
        console.log('test_valid_word : True')
    }else{
        console.log('test_valid_word : Fail')
    }
    clearresult()
}
function test_Invalid_word(){
    textbox_action('A')
    textbox_action('B')
    textbox_action('C')
    textbox_action('D')
    textbox_action('S')
    textbox_action('ENTER')

    let test_exp = response
    if(test_exp === 'InCorrect'){
        console.log('test_Invalid_word : True')
    }else{
        console.log('test_Invalid_word : Fail')
    }
    clearresult()
}
