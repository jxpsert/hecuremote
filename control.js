let powered = false; // whether or not the system is on
let greenOn = false; // whether or not the 'on' texture is shown. goes from here
let amberOn = false;
let blueOn = false;
let sirenOn = false;

let stopFOn = false;
let stopBOn = false;
let volgOn = false;

let lightLOn = false;
let lightFOn = false;
let lightROn = false; 

let headlights = true; // to here. this one is on by default.

let siren = false; // whether the siren is on or not
let beeping = false; // whether a continuous beeping sound should be played

let greenFlashing = false; // whether or not this button is flashing. goes from here
let amberFlashing = false;
let blueFlashing = false;
let sirenFlashing = false;

let stopFrontFlashing = false;
let stopBackFlashing = false;
let volgFlashing = false;

let lightLFlashing = false;
let lightFFlashing = false;
let lightRFlashing = false; // to here

let wasBlueFlashing = false; // saves if the blue lights were on before engaging siren, and keeps them on when siren is turned off

const buttons = ['siren', 'blue', 'leftlight', 'rightlight', 'frontlight', 'green', 'amber', 'headlight', 'power', 'stopfront', 'volg', 'stopback'];
const buttonImages = [
    {
        'name': 'siren',
        'on': 'img/siren-01.png',
        'off': 'img/siren_off-01.png'
    },
    {
        'name': 'blue',
        'on': 'img/blue-01.png',
        'off': 'img/light_off-01.png'
    },
    {
        'name': 'green',
        'on': 'img/green-01.png',
        'off': 'img/light_off-01.png'
    },
    {
        'name': 'amber',
        'on': 'img/amber-01.png',
        'off': 'img/light_off-01.png'
    },
    {
        'name': 'headlight',
        'on': 'img/headlight-01.png',
        'off': 'img/headlight_off-01.png'
    },
    {
        'name': 'leftlight',
        'on': 'img/leftlight-01.png',
        'off': 'img/leftlight_off-01.png'
    },
    {
        'name': 'rightlight',
        'on': 'img/rightlight-01.png',
        'off': 'img/rightlight_off-01.png'
    },
    {
        'name': 'frontlight',
        'on': 'img/frontlight-01.png',
        'off': 'img/frontlight_off-01.png'
    },
    {
        'name': 'stopfront',
        'on': 'img/stopfront-01.png',
        'off': 'img/stopfront_off-01.png'
    },
    {
        'name': 'stopback',
        'on': 'img/stopback-01.png',
        'off': 'img/stopback_off-01.png'
    },
    {
        'name': 'volg',
        'on': 'img/volg-01.png',
        'off': 'img/volg_off-01.png'
    },
    {
        'name': 'power',
        'on': 'img/power-01.png',
        'off': 'img/power_off-01.png'
    }
]

function beep() {
    let beep = document.getElementById('beep');
    beep.play(); // beep
}

function longbeep() {
    let beep = document.getElementById('longbeep');
    beep.play(); // beeeeeeeep
}

function button(type) {
    if (powered || type == "power") beep(); // || type == "power" because it would not play a beep on activation otherwise
    switch (type) { // fairly obvious what this does
        case 'power':
            togglePower();
            break;
        case 'blue':
            toggleBlue();
            break;
        case 'green':
            toggleGreen();
            break;
        case 'amber':
            toggleAmber();
            break;
        case 'siren':
            toggleSiren();
            break;
        case 'stopfront':
            toggleStopF();
            break;
        case 'stopback':
            toggleStopB();
            break;
        case 'volg':
            toggleVolg();
            break;
        case 'leftlight':
            toggleLightL();
            break;
        case 'frontlight':
            toggleLightF();
            break;
        case 'rightlight':
            toggleLightR();
            break;
        case 'headlight':
            toggleHeadlight();
            break;
    }
}

setInterval(function () {
    flashSiren();
    flashBlue();
    flashGreen();
    flashAmber();

    flashStopF();
    flashStopB();
    flashVolg();

    flashLightL();
    flashLightF();
    flashLightR();
}, 750)

setInterval(function () {
    if(beeping) {
        longbeep(); // long beep every 1000 milliseconds, if beeping is true
    }
}, 1000)

// headlights
function toggleHeadlight() {
    if (headlights) { // if on, turn off
        headlights = false;
        let image = buttonImages.filter(obj => { return obj.name == 'headlight' });
        document.getElementById('headlight').firstElementChild.src = image[0].off;
    } else { // if off, turn on
        headlights = true;
        let image = buttonImages.filter(obj => { return obj.name == 'headlight' });
        document.getElementById('headlight').firstElementChild.src = image[0].on;
    }
}


// searchlights

// left
function toggleLightL() {
    if (!powered) return;
    if (lightLFlashing) { // if on, turn off. also turns the image back to on, in case it was deactivated when the texture was off
        lightLFlashing = false;
        let image = buttonImages.filter(obj => { return obj.name == 'leftlight' }); // getting the right images for this button
        document.getElementById('leftlight').firstElementChild.src = image[0].on; // sets the button's src
    } else { // if off, turn it on!
        lightLFlashing = true;
    }
}

function flashLightL() {
    if (!lightLFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'leftlight'
    }) // getting the images
    if (lightLOn) { // if on, turn off
        lightLOn = false;
        document.getElementById('leftlight').firstElementChild.src = image[0].off
    } else { // if off, turn on
        lightLOn = true;
        document.getElementById('leftlight').firstElementChild.src = image[0].on
    }
}

// above functions repeat for every button except power

// front
function toggleLightF() {
    if (!powered) return;
    if (lightLFlashing) {
        lightFFlashing = false;
        let image = buttonImages.filter(obj => { return obj.name == 'frontlight' });
        document.getElementById('frontlight').firstElementChild.src = image[0].on;
    } else {
        lightFFlashing = true;
    }
}

function flashLightF() {
    if (!lightFFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'frontlight'
    })
    if (lightFOn) {
        lightFOn = false;
        document.getElementById('frontlight').firstElementChild.src = image[0].off
    } else {
        lightFOn = true;
        document.getElementById('frontlight').firstElementChild.src = image[0].on
    }
}

// right
function toggleLightR() {
    if (!powered) return;
    if (lightRFlashing) {
        lightRFlashing = false;
        let image = buttonImages.filter(obj => { return obj.name == 'rightlight' });
        document.getElementById('rightlight').firstElementChild.src = image[0].on;
    } else {
        lightRFlashing = true;
    }
}

function flashLightR() {
    if (!lightRFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'rightlight'
    })
    if (lightROn) {
        lightROn = false;
        document.getElementById('rightlight').firstElementChild.src = image[0].off
    } else {
        lightROn = true;
        document.getElementById('rightlight').firstElementChild.src = image[0].on
    }
}

// volg, stop

function toggleVolg() {
    if (!powered || stopBackFlashing || stopFrontFlashing) return;
    if (volgFlashing) {
        volgFlashing = false;
        beeping = false;
        let image = buttonImages.filter(obj => { return obj.name == 'volg' });
        document.getElementById('volg').firstElementChild.src = image[0].on;
    } else {
        volgFlashing = true;
        beeping = true;
    }
}

function flashVolg() {
    if (!volgFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'volg'
    })
    if (volgOn) {
        volgOn = false;
        document.getElementById('volg').firstElementChild.src = image[0].off
    } else {
        volgOn = true;
        document.getElementById('volg').firstElementChild.src = image[0].on
    }
}

function toggleStopB() {
    if (!powered || volgFlashing || stopFrontFlashing) return;
    if (stopBackFlashing) {
        stopBackFlashing = false;
        beeping = false;
        let image = buttonImages.filter(obj => { return obj.name == 'stopback' });
        document.getElementById('stopback').firstElementChild.src = image[0].on;
    } else {
        stopBackFlashing = true;
        beeping = true;
    }
}

function flashStopB() {
    if (!stopBackFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'stopback'
    })
    if (stopBOn) {
        stopBOn = false;
        document.getElementById('stopback').firstElementChild.src = image[0].off
    } else {
        stopBOn = true;
        document.getElementById('stopback').firstElementChild.src = image[0].on
    }
}

function toggleStopF() {
    if (!powered || volgFlashing || stopBackFlashing) return;
    if (stopFrontFlashing) {
        stopFrontFlashing = false;
        beeping = false;
        let image = buttonImages.filter(obj => { return obj.name == 'stopfront' });
        document.getElementById('stopfront').firstElementChild.src = image[0].on;
    } else {
        stopFrontFlashing = true;
        beeping = true;
    }
}

function flashStopF() {
    if (!stopFrontFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'stopfront'
    })
    if (stopFOn) {
        stopFOn = false;
        document.getElementById('stopfront').firstElementChild.src = image[0].off
    } else {
        stopFOn = true;
        document.getElementById('stopfront').firstElementChild.src = image[0].on
    }
}

// blue

function flashBlue() {
    if (!blueFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'blue'
    })
    if (blueOn) {
        blueOn = false;
        document.getElementById('blue').firstElementChild.src = image[0].off
    } else {
        blueOn = true;
        document.getElementById('blue').firstElementChild.src = image[0].on
    }
}

function toggleBlue() {
    if (!powered) return;
    if (blueFlashing) {
        blueFlashing = false;
        wasBlueFlashing = false;
        let image = buttonImages.filter(obj => { return obj.name == 'blue' });
        document.getElementById('blue').firstElementChild.src = image[0].on;
    } else {
        blueFlashing = true;
        wasBlueFlashing = false;
    }
}

// green

function flashGreen() {
    if (!greenFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'green'
    })
    if (greenOn) {
        greenOn = false;
        document.getElementById('green').firstElementChild.src = image[0].off
    } else {
        greenOn = true;
        document.getElementById('green').firstElementChild.src = image[0].on
    }
}

function toggleGreen() {
    if (!powered) return;
    if (greenFlashing) {
        greenFlashing = false;
        let image = buttonImages.filter(obj => { return obj.name == 'green' });
        document.getElementById('green').firstElementChild.src = image[0].on;
    } else {
        greenFlashing = true;
    }
}

// amber

function flashAmber() {
    if (!amberFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'amber'
    })
    if (amberOn) {
        amberOn = false;
        document.getElementById('amber').firstElementChild.src = image[0].off
    } else {
        amberOn = true;
        document.getElementById('amber').firstElementChild.src = image[0].on
    }
}

function toggleAmber() {
    if (!powered) return;
    if (amberFlashing) {
        amberFlashing = false;
        let image = buttonImages.filter(obj => { return obj.name == 'amber' });
        document.getElementById('amber').firstElementChild.src = image[0].on;
    } else {
        amberFlashing = true;
    }
}

// siren

function flashSiren() {
    if (!sirenFlashing) return;
    let image = buttonImages.filter(obj => {
        return obj.name == 'siren'
    })
    let image2 = buttonImages.filter(obj => {
        return obj.name == 'blue'
    })
    if (sirenOn) {
        sirenOn = false;
        blueOn = false;
        document.getElementById('siren').firstElementChild.src = image[0].off
        document.getElementById('blue').firstElementChild.src = image2[0].off
    } else {
        sirenOn = true;
        blueOn = true;
        document.getElementById('siren').firstElementChild.src = image[0].on
        document.getElementById('blue').firstElementChild.src = image2[0].on
    }
}

function toggleSiren() {
    let sirenAudio = document.getElementById('sirenaudio');
    if (!powered) return;
    if (sirenFlashing) {
        sirenFlashing = false;
        sirenAudio.pause();
        sirenAudio.currentTime = 0;
        if (wasBlueFlashing) blueFlashing = true;
        let image = buttonImages.filter(obj => { return obj.name == 'siren' });
        document.getElementById('siren').firstElementChild.src = image[0].on;
        let image2 = buttonImages.filter(obj => { return obj.name == 'blue' });
        document.getElementById('blue').firstElementChild.src = image2[0].on;
    } else {
        sirenFlashing = true;
        sirenAudio.play();
        if (blueFlashing) {
            wasBlueFlashing = true;
            blueFlashing = false;
        }
    }
}

// power

function togglePower() {
    if (powered) {
        buttons.forEach(button => {
            let image = buttonImages.filter(obj => {
                return obj.name == button
            })
            document.getElementById(button).firstElementChild.src = image[0].off;
        })
        powered = false; // turning all buttons off and disabling system
        blueOn = false;
        amberOn = false;
        greenOn = false;
        stopBOn = false;
        stopFOn = false;
        volgOn = false;
        lightFOn = false;
        lightROn = false;
        lightLOn = false;
        
        beeping = false;  // disable everything
        blueFlashing = false;
        wasBlueFlashing = false;
        sirenFlashing = false;
        stopBackFlashing = false;
        stopFrontFlashing = false;
        volgFlashing = false;
        lightFFlashing = false;
        lightRFlashing = false;
        lightLFlashing = false;
        greenFlashing = false;
        amberFlashing = false;
        siren = false;

    } else {
        buttons.forEach(button => {
            let image = buttonImages.filter(obj => {
                return obj.name == button
            })
            document.getElementById(button).firstElementChild.src = image[0].on;
        })
        powered = true; // turning all buttons on and activating system
        blueOn = true;
        amberOn = true;
        greenOn = true;
        stopBOn = true;
        stopFOn = true;
        volgOn = true;
        lightFOn = true;
        lightROn = true;
        lightLOn = true;
    }
}