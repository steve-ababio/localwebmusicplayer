menuiconConfig();
function menuiconConfig()
{
    let menuiconcontainer = document.getElementsByClassName('menu-icon-container');
    
    let menuicons = document.getElementsByClassName('menu-icon');
    let mainnav = document.querySelector("#main-nav");
    menuiconcontainer[0].addEventListener('click',()=>
    {
        if(mainnav.style.opacity === '0')
        {
            mainnav.style.opacity = '1';
            mainnav.style.width= '200px';
            menuicons[0].classList.add('menuiconschange1');
            menuicons[1].classList.add('menuiconschange2');
            menuicons[2].classList.add('menuiconschange3');

        }
        else
        {
            menuicons[0].classList.remove('menuiconschange1');
            menuicons[1].classList.remove('menuiconschange2');
            menuicons[2].classList.remove('menuiconschange3');
            mainnav.style.opacity = '0';
            mainnav.style.width = '0';
            menuiconcontainer[0].style.left = '96%';
        }
    })
}   

let playbutton = document.getElementsByClassName('play-button');
playbutton[0].addEventListener('click',()=>
{
    let playbuttonicon = document.getElementsByClassName('playicon');
    if(playbuttonicon[0].className === 'fal fa-play playicon')
            playAudio();
    else if(playbuttonicon[0].className ==='fal fa-pause playicon')
            pauseAudio()
});

function playAudio()
{
    let audiocontainer = document.getElementById('audio-container');
    if(audiocontainer.children.length >= 1)
    {
        let track = document.getElementsByTagName('audio');
        console.log(track);
        let playbuttonicon = document.getElementsByClassName('playicon');

        if(track[0].paused)
        {
            track[0].play();           
            playbuttonicon[0].classList.replace('fa-play','fa-pause');
        }
    }
}

function pauseAudio()
{
    let track = document.getElementsByTagName('audio');
    let playbuttonicon = document.getElementsByClassName('playicon');
    
    if(!track[0].paused)
    {
        track[0].pause();
        playbuttonicon[0].classList.replace('fa-pause','fa-play');
    }
}
function detemineMusicEnd()
{
    let track = document.getElementsByTagName('audio');
    let playbuttonicon = document.getElementsByClassName('playicon');
    let musicslider = document.getElementsByClassName('music-slider');
    track[0].addEventListener('ended',()=>
    {
        musicslider[0].value = 0;
        playbuttonicon[0].classList.replace('fa-pause','fa-play');        
    })
}
function moveMusicSlider()
{   
    let track = document.getElementsByTagName('audio');
    let musicslider = document.getElementsByClassName('music-slider');
    track[0].addEventListener('timeupdate',()=>
    {
        let ranges = track[0].played;
        let lengthofrange = ranges.length
        
        for(let i = 0;i < lengthofrange ; i++)
        {
            musicslider[0].max = track[0].duration;
            musicslider[0].value = track[0].currentTime;
        }
    })
}
let globaltrackname;
function displayMusicName(trackname)
{
    globaltrackname = trackname;
    let playingtrack = document.getElementById('playing-track-text');
    let musicname = trackname.slice(0,trackname.indexOf('.mp3'));
    playingtrack.innerText = musicname;
}

function muteAudio()
{
    let volumeicon = document.getElementsByClassName('vol');
    let volumeslider = document.getElementsByClassName('volume-slider');
    let track = document.getElementsByTagName('audio');
    let audiocontainer = document.getElementById('audio-container');
    let previousclassname,previousvolumevalue,previousslidervalue;

    volumeicon[0].addEventListener('click',()=>
    {
        if(audiocontainer.children.length === 1)
        {
            if(volumeicon[0].className.slice(8) != 'fa-volume-mute')
            {
                previousclassname = volumeicon[0].className.slice(8);
                previousslidervalue = volumeslider[0].value;
                previousvolumevalue = track[0].volume;
                volumeicon[0].classList.replace(previousclassname,'fa-volume-mute')
                volumeslider[0].value = 0;
                track[0].volume = 0;
            }
            else
            {
                volumeicon[0].classList.replace('fa-volume-mute',previousclassname)
                volumeslider[0].value = previousslidervalue;
                track[0].volume = previousvolumevalue;
            }
        }
        else
        {
            if(volumeicon[0].className.slice(8) != 'fa-volume-mute')
            {
                previousclassname = volumeicon[0].className.slice(8);
                previousslidervalue = volumeslider[0].value;
                volumeicon[0].classList.replace(previousclassname,'fa-volume-mute')
                volumeslider[0].value = 0;
                
            }
            else
            {
                volumeicon[0].classList.replace('fa-volume-mute',previousclassname)
                volumeslider[0].value = previousslidervalue;                
            }
        }
    })
}
function seekAudio()
{
    let track = document.getElementsByTagName('audio');
    
    let musicslider = document.getElementsByClassName('music-slider');
    
    musicslider[0].addEventListener('change',()=>
    { 
        console.log(musicslider[0].value)
        track[0].currentTime = musicslider[0].value;
    })    
}

function skipAudioBackward()
{
    let backicon = document.getElementsByClassName('back');
    let track = document.getElementsByTagName('audio');
    let volumeslider = document.getElementsByClassName('volume-slider');

    backicon[0].addEventListener('click',()=>
    {
        track[0].currentTime = 0;
    })
}

function repeatAudioInfinite()
{
    let repeaticon = document.getElementsByClassName('repeat');
    let audiocontainer = document.getElementById('audio-container');
    let track = document.getElementsByTagName('audio');
    repeaticon[0].addEventListener('click',()=>
    {
        if(audiocontainer.children.length === 1)
        {
            if(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatenabled")) === 'repeatenabled')
            {
                if(track[0].loop)
                {
                    track[0].loop = false;
                }
                repeaticon[0].classList.replace(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatenabled")),'repeatdisabled')
            }
            else if(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatdisabled")) === 'repeatdisabled')
            {
                if(!track[0].loop)
                {
                    track[0].loop = true;
                }
                repeaticon[0].classList.replace(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatdisabled")),'repeatenabled')
            }
        }
        else
        {
            if(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatenabled")) == 'repeatenabled')
            {
                repeaticon[0].classList.replace(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatenabled")),'repeatdisabled')
            }
            else if(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatdisabled")) == 'repeatdisabled')
            {
                repeaticon[0].classList.replace(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatdisabled")),'repeatenabled')
            }
        }
    });
}
function detectloop()
{
    let track = document.getElementsByTagName('audio');
    let repeaticon = document.getElementsByClassName('repeat');
    if(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatenabled")) == 'repeatenabled')
        track[0].loop = true;
    else if(repeaticon[0].className.slice(repeaticon[0].className.indexOf("repeatdisabled")) == 'repeatdisabled')
        track[0].loop = false;
}
function handleVolume()
{
    let audiocontainer = document.getElementById('audio-container');
    let volumeslider = document.getElementsByClassName('volume-slider');
    let volumeicon = document.getElementsByClassName('vol');
    if(audiocontainer.children.length === 1)
    {
        volumeicon[0].classList.replace(volumeicon[0].className.slice(8),'fa-volume-up');
        let track = document.getElementsByTagName('audio');
        volumeslider[0].value = 100;
        volumeslider[0].addEventListener('change',()=>
        {
            track[0].volume = volumeslider[0].value/100;
            if(volumeslider[0].value > 0 && volumeslider[0].value <= 30)
                volumeicon[0].classList.replace(volumeicon[0].className.slice(8),'fa-volume-down')
            else if(volumeslider[0].value > 30 && volumeslider[0].value <= 65)
                volumeicon[0].classList.replace(volumeicon[0].className.slice(8),'fa-volume');
            else if(volumeslider[0].value > 65 && volumeslider[0].value <= 100)
                volumeicon[0].classList.replace(volumeicon[0].className.slice(8),'fa-volume-up');
            else if(volumeslider[0].value == 0)
                volumeicon[0].classList.replace(volumeicon[0].className.slice(8),'fa-volume-off');

        })
    }
    else
    {
        volumeslider[0].addEventListener('change',()=>
        {
            if(volumeslider[0].value > 0 && volumeslider[0].value <= 35)
                volumeicon[0].classList.replace(volumeicon[0].className.slice(8),'fa-volume-down')
            else if(volumeslider[0].value > 35 && volumeslider[0].value <= 65)
                volumeicon[0].classList.replace(volumeicon[0].className.slice(8),'fa-volume');
            else if(volumeslider[0].value > 65 && volumeslider[0].value <= 100)
                volumeicon[0].classList.replace(volumeicon[0].className.slice(8),'fa-volume-up');
            else if(volumeslider[0].value == 0)
                volumeicon[0].classList.replace(volumeicon[0].className.slice(8),'fa-volume-off');
        })
    }

}

let bodyelement = document.body;
bodyelement.addEventListener('drop',event=>
{
    performDrop(event);
})
bodyelement.addEventListener('dragover',event=>
{
    event.preventDefault();
})

function performDrop(event)
{
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    handemusicfilecreation(file);
}

function handemusicfilecreation(file)
{
    let source = document.createElement('source');
    let music = document.createElement('audio');
    let playbuttonicon = document.getElementsByClassName('playicon');
    let audiocontainer = document.getElementById('audio-container');

    if(audiocontainer.children.length === 1)
    {
        let firstmusic = audiocontainer.firstChild;
        audiocontainer.removeChild(firstmusic);
        music= document.createElement('audio');
        source = document.createElement('source');
    }
    music.appendChild(source);
    audiocontainer.appendChild(music);
    source.setAttribute('src',window.URL.createObjectURL(file));
    music.setAttribute('class','track-audio');
    source.setAttribute('type','audio/mp3');

    enterKeyFunction();
    playAudio();
    moveMusicSlider();
    handleVolume();
    detemineMusicEnd();
    detectloop();
    skipAudioBackward();
    seekAudio();
}   
repeatAudioInfinite();
handleVolume();
muteAudio();
let fileinput = document.getElementById('fileselect');
fileinput.addEventListener('change',()=>
{
    if(fileinput.files.length >= 1)
        selectmusicfile()
})
function selectmusicfile()
{
    handemusicfilecreation(fileinput.files[0]);
}
let Index = 0;

function selectTracks()
{
    let selectedtracks = document.getElementsByClassName('find-music');
    let fileinput = document.getElementById('file2');
    let selectedtrackscontainer = document.getElementById('selected-tracks');
    selectedtracks[0].addEventListener('click',()=>
    {
        fileinput.click();
        fileinput.addEventListener('change',()=>
        {
            if(fileinput.files.length >= 1)
            {
                 Array.from(fileinput.files).forEach(files=>
                {
                    let parentmusicontainer = document.createElement('div');
                    parentmusicontainer.setAttribute('class','select-track-container')
                    let musiccontainer = document.createElement('div');
                    musiccontainer.setAttribute('class','select-track');
                    let musictext = document.createElement('p');
                    musictext.setAttribute('class','selected-track-text');
                    let playbutton = document.createElement('i');
                    playbutton.setAttribute('class','fal fa-play playicon1');
                    musiccontainer.appendChild(playbutton)
                    parentmusicontainer.appendChild(musiccontainer);
                    parentmusicontainer.appendChild(musictext);
                    musictext.innerText = (files.name.slice(0,files.name.indexOf('.mp3')));
                    selectedtrackscontainer.appendChild(parentmusicontainer);
                })
            }
        })
    })
}
selectTracks();
function enterKeyFunction()
{
    let track = document.getElementsByTagName('audio');
    let playbuttonicon = document.getElementsByClassName('playicon');
    window.addEventListener('keydown', event=>{
        event.preventDefault();
        if(event.key == ' ')
        {
            if(track[0].paused)
            {
                track[0].play();
                playbuttonicon[0].classList.replace('fa-play','fa-pause');
            }
            else
            {
                track[0].pause();
                playbuttonicon[0].classList.replace('fa-pause','fa-play');
            }
        }
    })
}
function detectDevicePlaying()
{
    let devices = document.getElementById('devices');
    if(navigator.userAgent.match(/BlackBerry/i))
    {
        devices.innerText = "Blackberry device"
    }
    else if(navigator.userAgent.match(/iphone/i))
    {
        devices.innerText = "iphone";
    }
    else if(navigator.userAgent.match(/ipad/i))
    {
        devices.innerText = "ipad";
    }
    else if(navigator.userAgent.match(/ipod/i))
    {
        devices.innerText = "ipod";
    }
    else if(navigator.userAgent.match(/SM-/i))
    {
        devices.innerText = "samsung phone"
    }
    else if(navigator.userAgent.match(/pixel/i))
    {
        devices.innerText = "Pixel phone"
    }
    else if(navigator.userAgent.match(/Nexus/i))
    {
        devices.innerText = "Nexus phone"
    }
    else if(navigator.userAgent.match(/HTC/i))
    {
        devices.innerText = "HTC phone"
    }
    else if(navigator.userAgent.match(/Infinix/i))
    {
        devices.innerText = "Infinix phone"
    }
    else if(navigator.userAgent.match(/Tecno/i))
    {
        devices.innerText = "Techno phone"
    }
    else if(navigator.userAgent.match(/Windows NT/i))
    {
        devices.innerText = "windows PC";
    }
}
detectDevicePlaying();
// function securePages()
// {
//     if(window.location.pathname == '/profile.html')
//     {
//         if((localStorage.getItem('pl889/') === null && localStorage.getItem('us44/|') === null ))
//         {
//             if(document.cookie === '')
//             {
//                 window.location.href="/login.html";
//             }
//         }
//     }
// }
// securePages();

