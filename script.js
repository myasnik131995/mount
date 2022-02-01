
let botsAll = document.querySelector('#greeting_navigation');


let Bots = [
    {
        id: 1,
        avatar: '/img/exampleTeory.png',
        name: 'Теоретический материал'
    },
    {
        id: 2,
        avatar: '/img/examplePoroductTead.png',
        name: 'Product Team'
    },
    {
        id: 3,
        avatar: '/img/exxampleJohn.png',
        name: 'John_Teammate'
    },
    {
        id: 4,
        avatar: '/img/exampleRon.png',
        name: 'Ron_Teammate'
    },
    {
        id: 5,
        avatar: '/img/exampleJane.png',
        name: 'Jane_Teammate'
    },
    {
        id: 6,
        avatar: '/img/exampleCEO.png',
        name: 'Alex_CEO'
    },
    {
        id: 7,
        avatar: '/img/exampleNews.png',
        name: 'Company News'
    }

];

class Bot {
    constructor(Bots, botsAll) {
        this.Bots = Bots;
        this.botsAll = botsAll;
    }
    showBots(){ 
        Bots.forEach(function(id){
            let botDiv = document.createElement('div');
            botDiv.classList = 'greeting_bot_div';
            botDiv.innerHTML = `<img src="${id.avatar}" class="greeting_bot_avatar"> <div class="greeting_bot_name">${id.name}</div>`;
            botsAll.appendChild(botDiv);
        });

    }
}

let allBots = new Bot(Bot);
allBots.showBots();




// let btnStart = document.querySelector('#btn_start'); 
// let contentStart = document.querySelector('#greeting_start');
// let partStart = document.querySelector('#part_one');
// let messengerStart = document.querySelector('#messenger_start');
// let btnTraining = document.querySelector('#btn_training');
// let buttonNext = document.querySelector('#button_next');
// let answerTeamlead = document.querySelector('#answer_teamlead');
// let messageCounterFirst = document.querySelector('#circle_first');
// let messageCounterSecond = document.querySelector('#circle_second');
// let selection = document.querySelector('#click_selection');
// let changeColor = document.querySelector('#change_color');

// btnStart.addEventListener('click', function () {
//     contentStart.classList.toggle('none');
//     partStart.classList.toggle('none');
// });
// btnTraining.addEventListener('click', function () {
//     partStart.classList.toggle('none');
//     messengerStart.classList.toggle('none');
// });
// buttonNext.addEventListener('click', function(){
//     buttonNext.remove();
//     answerTeamlead.classList.toggle('none');
//     messageCounterFirst.remove();
//     messageCounterSecond.remove();
// });




// function showNavigation (){
//     let greetingNav = document.querySelector('#greeting_navigation');
    
//     let greetingProfiles = document.createElement('div');
//     greetingProfiles.className = 'greeting_Profiles';

    
//     state.profiles.forEach((profiles) => {
    
//         let cont = document.createElement('div');
//         cont.className = 'greeting_navigation_profiles_item';
    
//         let avatar = document.createElement('img');
//         avatar.className = 'greeting_navigation_profiles_item_avatar';
//         avatar.src = profiles.avatar;
//         avatar.innerHTML = profiles.avatar.src;
//         cont.append(avatar);
    
//         let name = document.createElement('div');
//         name.className = 'greeting_navigation_profiles_item_name';
//         name.innerText = profiles.name;
//         cont.append(name);
    
//         greetingProfiles.append(cont);
    
//     });

//     greetingNav.append(greetingProfiles);
// }
    



