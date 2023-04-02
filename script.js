
async function datas(){
    try {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries")
        const data = await response.json()
        data.forEach(ele =>{
            const createCountryObject = {
                ...ele,
                name : ele.name,
                brewery_type : ele.brewery_type,
                address_1 : ele.address_1,
                phone : ele.phone,
                website_url : ele.website_url
            }
             createCountry(createCountryObject)
        });
    } catch (error) {
        document.body.innerHTML += `<h1>Error occured</h1>` 
          
    }
}

function createCountry(ele){
    document.body.innerHTML += `
        <div class="content">
        <div class="card">
        <div class="pos1">
        <img class="png" src="obdb-og.png"></img>
        </div>
        <div class="pos2">
            <div class="companyName"><h2 class="name">${ele.name}</h2></div> 
            <div class="details">
    <div class="icon"><span class="material-symbols-outlined">
        storefront
        </span>
    </div>
    <div class="values"><div class="address">${ele.brewery_type}</div></div>
</div>
            <div class="details">
            <div class="icon"><span class="material-symbols-outlined">
                location_on
                </span>
            </div>
            <div class="values"><div class="address">${ele.address_1}</div></div>
        </div>
        <div class="details">
            <div class="icon"><span class="material-symbols-outlined">
                globe_asia
                </span>
            </div>
            <div class="values"><div class="website">${ele.website_url}</div></div>
        </div>
        <div class="details">
            <div class="icon"><span class="material-symbols-outlined">
                call
                </span>
            </div>
            <div class="values"><div class="phone">${ele.phone}</div></div>
        </div>
    
        </div>
    </div>
    </div>
    `
}
datas()


