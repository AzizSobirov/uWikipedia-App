const url = (code) => (`https://${code}.wikipedia.org/api/rest_v1/page/summary/`)

        let select = document.getElementById('select')
        let inp = document.getElementById('as_input')

        async function getCode(){
            let res = await fetch('./country_code.json')
            let data = await res.json()
            console.log(data);
            for(country of data){
                select.innerHTML+= `
                <option value='${country.code}'>${country.name}</option>`
            }
        }getCode()

        function login(){
            document.querySelector(".login").style.display="none"
            let code = url(select.value)
            console.log(code);
            getInfo(code)
        }

        async function getInfo(url){
            let res = await fetch(url + inp.value)
            let data = await res.json()
            console.log(data);
            if(res.status == 404){
                as_error404.style.display="flex"
            }
            document.querySelector(".info_bx").innerHTML=`
            <h2>uWikipedia App</h2>
            <div class='info_bx-about'>
            <img src="${data.originalimage.source}">
            ${data.extract_html}
            </div>
            <div class='info_bx-follow'>
                <h3>Follow Me</h3>
            <div class="for_follow">
                <a href="https://www.facebook.com/aziz.webdev" class="fab fa-facebook"></a>
                <a href="https://www.instagram.com/aziz.webdev" class="fab fa-instagram"></a>
                <a href="https://t.me//Portfolio_AzizSobirov" class="fab fa-telegram"></a>
                <a href="https://github.com/AzizSobirov" class="fab fa-github"></a>
            </div>
            <b>&copy Aziz Sobirov</b>    
            </div>`
        }