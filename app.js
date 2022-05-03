var box_count = 1
var box_line = 1

window.onload = () => {
    const btn_instruction = document.querySelector('#modal_instruction')
    btn_instruction.click()

    window.setInterval((() => getNextWordleTime()), 1000);

    keypress()
    virtual_keyboard()
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

function textbox_action(key){
    if (isAlpha(key) == true) {
        let count = `${box_line}${box_count}`
        let currentboxvalue = document.querySelector('#b'+count).innerHTML
        
        if (currentboxvalue.length == 0 && box_count<6){
            document.querySelector('#b' + count).innerHTML = key
            box_count += 1          
        }       

    }else if(key === 'Enter' && box_count==6){
        alert('Confirm answer!')
        box_count=1
        box_line +=1
    }else if(key === 'Backspace' && box_count>0){
        if(box_count-1!=0){
            box_count-=1
        }           
        count = `${box_line}${box_count}`
        document.querySelector('#b' + count).innerHTML = ''
        
    }
}

function keypress() {
    document.addEventListener('keydown', (keycode) => {
        textbox_action(keycode.key)
    })
}

function virtual_keyboard(){
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



    k1.addEventListener('click',()=>{textbox_action('q')})
    k2.addEventListener('click',()=>{textbox_action('w')})
    k3.addEventListener('click',()=>{textbox_action('e')})
    k4.addEventListener('click',()=>{textbox_action('r')})
    k5.addEventListener('click',()=>{textbox_action('t')})

    k6.addEventListener('click',()=>{textbox_action('y')})
    k7.addEventListener('click',()=>{textbox_action('u')})
    k8.addEventListener('click',()=>{textbox_action('i')})
    k9.addEventListener('click',()=>{textbox_action('o')})
    k10.addEventListener('click',()=>{textbox_action('p')})

    k11.addEventListener('click',()=>{textbox_action('a')})
    k12.addEventListener('click',()=>{textbox_action('s')})
    k13.addEventListener('click',()=>{textbox_action('d')})
    k14.addEventListener('click',()=>{textbox_action('f')})
    k15.addEventListener('click',()=>{textbox_action('g')})

    k16.addEventListener('click',()=>{textbox_action('h')})
    k17.addEventListener('click',()=>{textbox_action('j')})
    k18.addEventListener('click',()=>{textbox_action('k')})
    k19.addEventListener('click',()=>{textbox_action('l')})
    k20.addEventListener('click',()=>{textbox_action('Enter')})

    k21.addEventListener('click',()=>{textbox_action('z')})
    k22.addEventListener('click',()=>{textbox_action('x')})
    k23.addEventListener('click',()=>{textbox_action('c')})
    k24.addEventListener('click',()=>{textbox_action('v')})
    k25.addEventListener('click',()=>{textbox_action('b')})

    k26.addEventListener('click',()=>{textbox_action('n')})
    k27.addEventListener('click',()=>{textbox_action('m')})
    k28.addEventListener('click',()=>{textbox_action('Backspace')})
    
}

