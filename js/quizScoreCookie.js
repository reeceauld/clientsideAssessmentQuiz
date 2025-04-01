function setCookie1(cookieName1, cookieValue1, expirationDays1){
    const date1 = new Date();

    date1.setTime(date1.getTime() + (expirationDays1 * 24 * 60 * 60 * 1000));

    document.cookie = `${cookieName1} = ${encodeURIComponent(cookieValue1)}; expires=${date1.toUTCString()}; path=/`;


}

function getCookie1(cookieName1){
    const cookies1 = document.cookie.split(';');

    for(let i = 0; i < cookies1.length; i++){
        const cookie1 = cookies1[i].trim();

        if(cookie1.indexOf(cookieName1 + '=') === 0){
            return decodeURIComponent(cookie1.substring(cookieName1.length + 1));
        }
    }
    return "";
    
}

if(document.getElementById('keepScore')){
    document.getElementById('keepScore').addEventListener('submit', function(event){
        event.preventDefault();
            const geoScore = document.getElementById('quizScoreCounterGeo').value;
           
        
        setCookie1('geoScore', geoScore, 7);

    })
}

function displayScore1(){
    if(getCookie1('geoScore') == ""){
        document.getElementById("quizScoreStickerGeo").style.display = "none";
        document.getElementById("quizScoreStickerGeo2").style.display = "none";
    }
    else{
        if(getCookie1('geoScore') >=3){
            document.getElementById("quizScoreStickerGeo").style.display = "flex";
            document.getElementById("quizScoreStickerGeo").textContent = getCookie1('geoScore') + "/5";
            document.getElementById("quizScoreStickerGeo").style.backgroundColor = "rgb(24, 194, 24)";
            document.getElementById("quizScoreStickerGeo2").style.display = "flex";
            document.getElementById("quizScoreStickerGeo2").textContent = getCookie1('geoScore') + "/5";
            document.getElementById("quizScoreStickerGeo2").style.backgroundColor = "rgb(24, 194, 24)";
        }
        else{
            document.getElementById("quizScoreStickerGeo").style.display = "flex";
            document.getElementById("quizScoreStickerGeo").textContent= getCookie1('geoScore') + "/5";
            document.getElementById("quizScoreStickerGeo").style.backgroundColor = "red";
            document.getElementById("quizScoreStickerGeo2").style.display = "flex";
            document.getElementById("quizScoreStickerGeo2").textContent= getCookie1('geoScore') + "/5";
            document.getElementById("quizScoreStickerGeo2").style.backgroundColor = "red";
        }
    }
}


function setCookie2(cookieName2, cookieValue2, expirationDays2){
    const date2 = new Date();

    date2.setTime(date2.getTime() + (expirationDays2 * 24 * 60 * 60 * 1000));

    document.cookie = `${cookieName2} = ${encodeURIComponent(cookieValue2)}; expires=${date2.toUTCString()}; path=/`;


}

function getCookie2(cookieName2){
    const cookies2 = document.cookie.split(';');

    for(let i = 0; i < cookies2.length; i++){
        const cookie2 = cookies2[i].trim();

        if(cookie2.indexOf(cookieName2 + '=') === 0){
            return decodeURIComponent(cookie2.substring(cookieName2.length + 1));
        }
    }
    return "";
    
}

if(document.getElementById('keepScore2')){
    document.getElementById('keepScore2').addEventListener('submit', function(event){
        event.preventDefault();
            const hisScore = document.getElementById('quizScoreCounterHis').value;
           
        
        setCookie2('hisScore', hisScore, 7);

    })
}

function displayScore2(){
    if(getCookie2('hisScore') == ""){
        document.getElementById("quizScoreStickerHis").style.display = "none";
        document.getElementById("quizScoreStickerHis2").style.display = "none";
    }
    else{
        if(getCookie2('hisScore') >=3){
            document.getElementById("quizScoreStickerHis").style.display = "flex";
            document.getElementById("quizScoreStickerHis").textContent = getCookie2('hisScore') + "/5";
            document.getElementById("quizScoreStickerHis").style.backgroundColor = "rgb(24, 194, 24)";
            document.getElementById("quizScoreStickerHis2").style.display = "flex";
            document.getElementById("quizScoreStickerHis2").textContent = getCookie2('hisScore') + "/5";
            document.getElementById("quizScoreStickerHis2").style.backgroundColor = "rgb(24, 194, 24)";
        }
        else{
            document.getElementById("quizScoreStickerHis").style.display = "flex";
            document.getElementById("quizScoreStickerHis").textContent= getCookie2('hisScore') + "/5";
            document.getElementById("quizScoreStickerHis").style.backgroundColor = "red";
            document.getElementById("quizScoreStickerHis2").style.display = "flex";
            document.getElementById("quizScoreStickerHis2").textContent= getCookie2('hisScore') + "/5";
            document.getElementById("quizScoreStickerHis2").style.backgroundColor = "red";
        }
    }
}



function setCookie3(cookieName3, cookieValue3, expirationDays3){
    const date3 = new Date();

    date3.setTime(date3.getTime() + (expirationDays3 * 24 * 60 * 60 * 1000));

    document.cookie = `${cookieName3} = ${encodeURIComponent(cookieValue3)}; expires=${date3.toUTCString()}; path=/`;


}

function getCookie3(cookieName3){
    const cookies3 = document.cookie.split(';');

    for(let i = 0; i < cookies3.length; i++){
        const cookie3 = cookies3[i].trim();

        if(cookie3.indexOf(cookieName3 + '=') === 0){
            return decodeURIComponent(cookie3.substring(cookieName3.length + 1));
        }
    }
    return "";
    
}

if(document.getElementById('keepScore3')){
    document.getElementById('keepScore3').addEventListener('submit', function(event){
        event.preventDefault();
            const matScore = document.getElementById('quizScoreCounterMat').value;
           
        
        setCookie3('matScore', matScore, 7);

    })
}

function displayScore3(){
    if(getCookie3('matScore') == ""){
        document.getElementById("quizScoreStickerMat").style.display = "none";
        document.getElementById("quizScoreStickerMat2").style.display = "none";
    }
    else{
        if(getCookie3('matScore') >=3){
            document.getElementById("quizScoreStickerMat").style.display = "flex";
            document.getElementById("quizScoreStickerMat").textContent = getCookie3('matScore') + "/5";
            document.getElementById("quizScoreStickerMat").style.backgroundColor = "rgb(24, 194, 24)";
            document.getElementById("quizScoreStickerMat2").style.display = "flex";
            document.getElementById("quizScoreStickerMat2").textContent = getCookie3('matScore') + "/5";
            document.getElementById("quizScoreStickerMat2").style.backgroundColor = "rgb(24, 194, 24)";
        }
        else{
            document.getElementById("quizScoreStickerMat").style.display = "flex";
            document.getElementById("quizScoreStickerMat").textContent= getCookie3('matScore') + "/5";
            document.getElementById("quizScoreStickerMat").style.backgroundColor = "red";
            document.getElementById("quizScoreStickerMat2").style.display = "flex";
            document.getElementById("quizScoreStickerMat2").textContent= getCookie3('matScore') + "/5";
            document.getElementById("quizScoreStickerMat2").style.backgroundColor = "red";
        }
    }
}



function setCookie4(cookieName4, cookieValue4, expirationDays4){
    const date4 = new Date();

    date4.setTime(date4.getTime() + (expirationDays4 * 24 * 60 * 60 * 1000));

    document.cookie = `${cookieName4} = ${encodeURIComponent(cookieValue4)}; expires=${date4.toUTCString()}; path=/`;


}

function getCookie4(cookieName4){
    const cookies4 = document.cookie.split(';');

    for(let i = 0; i < cookies4.length; i++){
        const cookie4 = cookies4[i].trim();

        if(cookie4.indexOf(cookieName4 + '=') === 0){
            return decodeURIComponent(cookie4.substring(cookieName4.length + 1));
        }
    }
    return "";
    
}

if(document.getElementById('keepScore4')){
    document.getElementById('keepScore4').addEventListener('submit', function(event){
        event.preventDefault();
            const phyScore = document.getElementById('quizScoreCounterPhy').value;
           
        
        setCookie4('phyScore', phyScore, 7);

    })
}

function displayScore4(){
    if(getCookie4('phyScore') == ""){
        document.getElementById("quizScoreStickerPhy").style.display = "none";
        document.getElementById("quizScoreStickerPhy2").style.display = "none";
    }
    else{
        if(getCookie4('phyScore') >=3){
            document.getElementById("quizScoreStickerPhy").style.display = "flex";
            document.getElementById("quizScoreStickerPhy").textContent = getCookie4('phyScore') + "/5";
            document.getElementById("quizScoreStickerPhy").style.backgroundColor = "rgb(24, 194, 24)";
            document.getElementById("quizScoreStickerPhy2").style.display = "flex";
            document.getElementById("quizScoreStickerPhy2").textContent = getCookie4('phyScore') + "/5";
            document.getElementById("quizScoreStickerPhy2").style.backgroundColor = "rgb(24, 194, 24)";
        }
        else{
            document.getElementById("quizScoreStickerPhy").style.display = "flex";
            document.getElementById("quizScoreStickerPhy").textContent= getCookie4('phyScore') + "/5";
            document.getElementById("quizScoreStickerPhy").style.backgroundColor = "red";
            document.getElementById("quizScoreStickerPhy2").style.display = "flex";
            document.getElementById("quizScoreStickerPhy2").textContent= getCookie4('phyScore') + "/5";
            document.getElementById("quizScoreStickerPhy2").style.backgroundColor = "red";
        }
    }
}



function setCookie5(cookieName5, cookieValue5, expirationDays5){
    const date5 = new Date();

    date5.setTime(date5.getTime() + (expirationDays5 * 24 * 60 * 60 * 1000));

    document.cookie = `${cookieName5} = ${encodeURIComponent(cookieValue5)}; expires=${date5.toUTCString()}; path=/`;


}

function getCookie5(cookieName5){
    const cookies5 = document.cookie.split(';');

    for(let i = 0; i < cookies5.length; i++){
        const cookie5 = cookies5[i].trim();

        if(cookie5.indexOf(cookieName5 + '=') === 0){
            return decodeURIComponent(cookie5.substring(cookieName5.length + 1));
        }
    }
    return "";
    
}

if(document.getElementById('keepScore5')){
    document.getElementById('keepScore5').addEventListener('submit', function(event){
        event.preventDefault();
            const cheScore = document.getElementById('quizScoreCounterChe').value;
           
        
        setCookie5('cheScore', cheScore, 7);

    })
}

function displayScore5(){
    if(getCookie5('cheScore') == ""){
        document.getElementById("quizScoreStickerChe").style.display = "none";
        document.getElementById("quizScoreStickerChe2").style.display = "none";
    }
    else{
        if(getCookie5('cheScore') >=3){
            document.getElementById("quizScoreStickerChe").style.display = "flex";
            document.getElementById("quizScoreStickerChe").textContent = getCookie5('cheScore') + "/5";
            document.getElementById("quizScoreStickerChe").style.backgroundColor = "rgb(24, 194, 24)";
            document.getElementById("quizScoreStickerChe2").style.display = "flex";
            document.getElementById("quizScoreStickerChe2").textContent = getCookie5('cheScore') + "/5";
            document.getElementById("quizScoreStickerChe2").style.backgroundColor = "rgb(24, 194, 24)";
        }
        else{
            document.getElementById("quizScoreStickerChe").style.display = "flex";
            document.getElementById("quizScoreStickerChe").textContent= getCookie5('cheScore') + "/5";
            document.getElementById("quizScoreStickerChe").style.backgroundColor = "red";
            document.getElementById("quizScoreStickerChe2").style.display = "flex";
            document.getElementById("quizScoreStickerChe2").textContent= getCookie5('cheScore') + "/5";
            document.getElementById("quizScoreStickerChe2").style.backgroundColor = "red";
        }
    }
}



function setCookie6(cookieName6, cookieValue6, expirationDays6){
    const date6 = new Date();

    date6.setTime(date6.getTime() + (expirationDays6 * 24 * 60 * 60 * 1000));

    document.cookie = `${cookieName6} = ${encodeURIComponent(cookieValue6)}; expires=${date6.toUTCString()}; path=/`;


}

function getCookie6(cookieName6){
    const cookies6 = document.cookie.split(';');

    for(let i = 0; i < cookies6.length; i++){
        const cookie6 = cookies6[i].trim();

        if(cookie6.indexOf(cookieName6 + '=') === 0){
            return decodeURIComponent(cookie6.substring(cookieName6.length + 1));
        }
    }
    return "";
    
}

if(document.getElementById('keepScore6')){
    document.getElementById('keepScore6').addEventListener('submit', function(event){
        event.preventDefault();
            const staScore = document.getElementById('quizScoreCounterSta').value;
           
        
        setCookie6('staScore', staScore, 7);

    })
}

function displayScore6(){
    if(getCookie6('staScore') == ""){
        document.getElementById("quizScoreStickerSta").style.display = "none";
        document.getElementById("quizScoreStickerSta2").style.display = "none";
    }
    else{
        if(getCookie6('staScore') >=3){
            document.getElementById("quizScoreStickerSta").style.display = "flex";
            document.getElementById("quizScoreStickerSta").textContent = getCookie6('staScore') + "/5";
            document.getElementById("quizScoreStickerSta").style.backgroundColor = "rgb(24, 194, 24)";
            document.getElementById("quizScoreStickerSta2").style.display = "flex";
            document.getElementById("quizScoreStickerSta2").textContent = getCookie6('staScore') + "/5";
            document.getElementById("quizScoreStickerSta2").style.backgroundColor = "rgb(24, 194, 24)";
        }
        else{
            document.getElementById("quizScoreStickerSta").style.display = "flex";
            document.getElementById("quizScoreStickerSta").textContent= getCookie6('staScore') + "/5";
            document.getElementById("quizScoreStickerSta").style.backgroundColor = "red";
            document.getElementById("quizScoreStickerSta2").style.display = "flex";
            document.getElementById("quizScoreStickerSta2").textContent= getCookie6('staScore') + "/5";
            document.getElementById("quizScoreStickerSta2").style.backgroundColor = "red";
        }
    }
}
