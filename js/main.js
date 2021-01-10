'use strict';
// WOW initialization
(function () {
  new WOW().init();
})();

//type of steaks
(function () {
const part3 = document.querySelector(".types-of-steaks__part3");
const part4 = document.querySelector(".types-of-steaks__part4");
const part5 = document.querySelector(".types-of-steaks__part5");
const part6 = document.querySelector(".types-of-steaks__part6");
const part7 = document.querySelector(".types-of-steaks__part7");
const part8 = document.querySelector(".types-of-steaks__part8");
const redCircle = document.querySelector(".types-of-steaks__red");
const redText = document.querySelector(".types-of-steaks__text");
const typeSteak = [

  {
    part: part3,
    text: 'Стейк Ковбой, стейк Рибай'
  },
  {
    part: part4,
    text: 'Фланк стейк'
  },
  {
    part: part5,
    text: 'Cтейк Нью Йорк, Тибон'
  },
  {
    part: part6,
    text: 'Cтейк Нью Йорк, Тибон'
  },
  {
    part: part7,
    text: 'стейк Портерхаус'
  },
  {
    part: part8,
    text: 'Филе Миньон, стейк Шатобриан',
  },
];

const onPartOver = (part) => {
  return function() {
    redCircle.classList.add("types-of-steaks__red--show");
    const infoInRed = typeSteak.find((it) =>it.part === part);
    if(redText.firstChild) {
      redText.firstChild.remove();
    }

    redText.insertAdjacentText('afterbegin', infoInRed.text);
  }
};

const onPartOut = () => {
  if (redCircle.classList.contains("types-of-steaks__red--show")) {
    redCircle.classList.remove("types-of-steaks__red--show");
  }
};

part3.addEventListener('mouseover', onPartOver(part3));
part4.addEventListener('mouseover', onPartOver(part4));
part5.addEventListener('mouseover', onPartOver(part5));
part6.addEventListener('mouseover', onPartOver(part6));
part7.addEventListener('mouseover', onPartOver(part7));
part8.addEventListener('mouseover', onPartOver(part8));
part3.addEventListener('mouseout', onPartOut);
part4.addEventListener('mouseout', onPartOut);
part5.addEventListener('mouseout', onPartOut);
part6.addEventListener('mouseout', onPartOut);
part7.addEventListener('mouseout', onPartOut);
part8.addEventListener('mouseout', onPartOut);
})();

//Wine choosing
(function () {
 const ESC_KEYCODE = 27;
 const steakForm = document.querySelector('.wine-type__form');
 const resultContainer = document.querySelector('.wine-type__result');

 const allSelects = [];
 const selects = document.querySelectorAll('.wine-type__select');
 const selectsArray = Array.from(document.querySelectorAll('.wine-type__select'));
 const steakType = document.querySelector('.wine-type__select1');
 const roastingLevel = document.querySelector('.wine-type__select2');
 let formInfo = {};

 const resultInfo = [
   {
     name: "Свинина",
     id: 1,
     titleLeft: "Пино",
     titleRight: "Гри",
     description: "Также хорошо подойдут Шардоне и другие белые вина.",
     imgLink: "img/white-wine.png",
     alt: "белое вино",

   },
   {
     name: "Курица",
     id: 2,
     titleLeft: "Пино",
     titleRight: "Гри",
     description: "Также хорошо подойдут Шардоне, Syrah и другие белые вина.",
     imgLink: "img/white-wine.png",
     alt: "белое вино"
   },
   {
     name: "Лосось",
     id: 3,
     titleLeft: "Sauvignon",
     titleRight: "Blanc",
     description: "Хорошо подойдут Syrah и другие белые вина. А также Merlo.",
     imgLink: "img/white-wine.png",
     alt: "белое вино",
     textPadding: {
       paddingLeft: "0",
       paddingRight: "85px"
     }
   },
 ];

  const textRoasting = [
 {
   id: 0,
   text: "Для стейка с кровью лучше всего подходят вина с бархатистой, нежной структурой."
 },
 {
   id: 1,
   text: "Стейки прожарки medium rare могут дополнить выдержанные образцы с землистыми оттенками."
 },
 {
   id: 2,
   text: "Стейк прожарки medium оптимально сочетается с сочными винами с цветочно-ягодным ароматом. "
 },
 {
   id: 3,
   text: "С прожаренными стейками превосходно уживаются высокотанинные вина с богатым, сложным вкусом."
 },
];

  const steakInfo = [
    {
      name: "Филе миньон",
      id: 0,
      titleLeft: "Сabernet",
      titleRight: "Sauvignon",
      imgLink: "img/red-wine.png",
      alt: "красное вино"
    },
    {
      name: "Тибон",
      id: 1,
      titleLeft: "Сabernet",
      titleRight: "Sauvignon",
      imgLink: "img/red-wine.png",
      alt: "красное вино"
    },
    {
      name: "Портерхаус",
      id: 2,
      titleLeft: "Мерло",
      /*titleRight: "",*/
      imgLink: "img/red-wine.png",
      alt: "красное вино",
      paddingRight: "250px",


    },
    {
      name: "Рибай без кости",
      id: 3,
      titleLeft: "Мерло",
      /*titleRight: "",*/
      imgLink: "img/red-wine.png",
      alt: "красное вино",
      paddingRight: "250px",
    },
    {
      name: "Шатобриан",
      id: 4,
      titleLeft: "Сabernet",
      titleRight: "Sauvignon",
      imgLink: "img/red-wine.png",
      alt: "красное вино"
    },
    {
      name: "Стейк Рибай",
      id: 5,
      titleLeft: "Сabernet",
      titleRight: "Sauvignon",
      imgLink: "img/red-wine.png",
      alt: "красное вино"
    },




  ];


  const createSelectInfo = () => {
    for (let i = 0; i < selects.length; i++) {
      //let selectSingleTitle = selects[i].querySelector('.wine-type__title');
      let selectSingleLabels = selects[i].querySelectorAll('.wine-type__label');
      const selectInfo = {};
      selectInfo.div = selects[i];
      selectInfo.title = selects[i].querySelector('.wine-type__title');
      selectInfo.labels = Array.from(selects[i].querySelectorAll('.wine-type__label'));
      allSelects.push(selectInfo);
    }
  };
  createSelectInfo();

  //State "active" and "disabled" for selects
  for (let j = 0; j < allSelects.length; j++) {
    allSelects[j].title.addEventListener('click', () => {
      if ('disabled' === allSelects[j].div.getAttribute('data-state')) {
        return true;
      } else {
        if ('active' === allSelects[j].div.getAttribute('data-state')) {
          allSelects[j].div.setAttribute('data-state', '');
        } else {
          allSelects[j].div.setAttribute('data-state', 'active');
          document.addEventListener('keydown', isEscSelect);
          document.addEventListener('click', onBodyClick());

          for (let m = 0; m < allSelects.length; m++) {
            if (allSelects[m] !== allSelects[j]) {
              allSelects[m].div.setAttribute('data-state', '');
            }
          }
        }
      }

    });

    for (let k = 0; k < allSelects[j].labels.length; k++) {
      allSelects[j].labels[k].addEventListener('click', (evt) => {
        allSelects[j].title.textContent = evt.target.textContent;
        allSelects[j].div.setAttribute('data-state', '');
      });
    }
  }



  const closeAllSelect = () => {
    for (let i = 0; i < selects.length; i++) {
      if ('active' === selects[i].getAttribute('data-state')) {
        selects[i].setAttribute('data-state', '')
      }
    }
    document.removeEventListener('click', onBodyClick, true);
    document.removeEventListener('keydown', isEscSelect, true);
  };

  const onBodyClick = () => {
    return function (evt) {
      const selectRoot = evt.target.closest('.wine-type__select');

      if (selectRoot) {
        return true;
      }
      closeAllSelect();
    }
  };


  const isEscSelect  = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === ESC_KEYCODE) {
        closeAllSelect();
    }
  };

  const parseForm = () => {
    console.log(
      {meat: steakForm.meat.value,
        steak: steakForm.steak.value,
        roasting: steakForm.roasting.value}
    );
    formInfo = {
      meat: +steakForm.meat.value,
      steak: +steakForm.steak.value,
      roasting: +steakForm.roasting.value
    };
    return formInfo
  };

  const renderResultTemplate = (formObject) => {

    const resultTemplate = document.querySelector('#result')
      .content
      .querySelector('.wine-type__container');
    const resultElement = resultTemplate.cloneNode(true);
    const resultTextBlock = resultElement.querySelector('.wine-type__name');
    const resultTitleLeft = resultElement.querySelector('.wine-type__name-left');
    const resultTitleRight = resultElement.querySelector('.wine-type__name-right');
    const resultDescription = resultElement.querySelector('.wine-type__description');
    const resultDescriptionMobile = resultElement.querySelector('.wine-type__description-mobile');
    const resultNameMobile  = resultElement.querySelector('.wine-type__name-mobile');
    const resultImg = resultElement.querySelector('.wine-type__img');
    //для говядины
    if (formObject.meat !== 0) {
      const result = resultInfo.find((it) => it.id === formObject.meat);
      console.log(result.titleRight);
      resultTitleLeft.textContent = result.titleLeft;
      resultTitleRight.textContent = result.titleRight;
      resultDescriptionMobile.textContent = result.description;
      resultImg.setAttribute('src', result.imgLink);
      resultImg.setAttribute('alt', result.alt);
      resultDescription.style.bottom = "140px"; //смещение доп подписи для белых вин
      resultDescriptionMobile.classList.add("wine-type__description-white");
      //resultTextBlock.style.paddingLeft = "100px";
      resultNameMobile.style.marginLeft = "0";
      if (result.textPadding) {
        resultTextBlock.style.paddingLeft = result.textPadding.paddingLeft;
        resultTextBlock.style.paddingRight = result.textPadding.paddingRight;
      }

    } else {
      const roastingText = textRoasting.find((it) => it.id === formObject.roasting);
      const steakAbout = steakInfo.find((it) => it.id === formObject.steak);

      resultTitleLeft.textContent = steakAbout.titleLeft;
      resultTitleRight.textContent = steakAbout.titleRight;
      resultDescription.textContent = roastingText.text;
      resultImg.setAttribute('src', steakAbout.imgLink);
      resultImg.setAttribute('alt', steakAbout.alt);

      resultTextBlock.style.paddingLeft = "100px";
      if (steakAbout.paddingRight) {
        resultTitleLeft.style.paddingRight = steakAbout.paddingRight;
      }
      //для названий из одного слова
      if (!steakAbout.titleRight) {
        console.log(steakAbout.titleRight);
        resultTitleLeft.classList.add("wine-type__name-left--one");
      }
    }
    return   resultElement;

};


  const checkFeatures = (formObject) => {
    if (formObject.meat !== 0) {
      steakType.setAttribute('data-state', 'disabled');
      roastingLevel.setAttribute('data-state', 'disabled');
    } else {
      steakType.setAttribute('data-state', '');
      roastingLevel.setAttribute('data-state', '');
    }
  };

  const renderResult = (formObject) => {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(renderResultTemplate(formObject));
    resultContainer.appendChild(fragment);
  };

  const cleanOldResult = () => {
    while (resultContainer.firstChild) {
      resultContainer.removeChild(resultContainer.firstChild);
    }
  };

  const onFormChange = () => {
    cleanOldResult();
    parseForm();
    //checkFeatures(evt);
    checkFeatures(formInfo);
    renderResult(formInfo);
  };

  steakForm.addEventListener('change', onFormChange);
})();
