function setCookie(cookieName, cookieValue, expirationDays){
    const date = new Date();

    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));

    document.cookie = `${cookieName} = ${encodeURIComponent(cookieValue)}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(cookieName){
    const cookies = document.cookie.split(';');

    for(let i = 0; i < cookies.length; i++){
        const cookie = cookies[i].trim();

        if(cookie.indexOf(cookieName + '=') === 0){
            return decodeURIComponent(cookie.substring(cookieName.length + 1));
        }
    }
    return "";
}

if(document.getElementById('signupForm')){
    document.getElementById('signupForm').addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        setCookie('username', name, 7);
        setCookie('useremail', email, 7);

        window.location.href = 'index.html'
    })
}


function welcome(){
    document.getElementById("nameWelcome").textContent="Welcome " + getCookie('username');
    
    var now = new Date();
    
    var dateTime = now.toLocaleString();

    document.getElementById("dateTime").innerHTML = dateTime;
    setTimeout(welcome, 1000);
}

