// "use client"
import React from 'react'

export default function Icons(dataArr) {

    const handleDelete = (firstName) => {
        setPatientRecords(dataArr.filter(row => row.firstName !== firstName))
    }

return (
    <div>
        <div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" /><path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" /></svg>
            </button>
                {/* <Link href={{pathname: router.pathname, query: {patient: 'patient'}}} > */}
            <button key={patientRecords.id} onClick={() => router.push('/dashboard/patients/patient/')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" /></svg>
            </button>
                {/* </Link> */}
            <button onClick={handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" /><path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
            </button>
        </div>
    </div>
)
}


export const patientData = [{"id":1,"cardNumber":"#e01","firstName":"Cody","lastName":"Morter","diagnosis":"migraine","email":"cmorter0@slashdot.org","gender":"Female","age":20,"phoneNumber":"759-776-3471"},
{"id":2,"cardNumber":"#a14","firstName":"Sam","lastName":"Tuffey","diagnosis":"hypertension","email":"stuffey1@disqus.com","gender":"Male","age":19,"phoneNumber":"618-135-0171"},
{"id":3,"cardNumber":"#8bd","firstName":"Rodge","lastName":"Valett","diagnosis":"diabetes","email":"rvalett2@forbes.com","gender":"Male","age":98,"phoneNumber":"460-208-4784"},
{"id":4,"cardNumber":"#121","firstName":"Rasia","lastName":"Roistone","diagnosis":"pneumonia","email":"rroistone3@plala.or.jp","gender":"Female","age":58,"phoneNumber":"176-771-2751"},
{"id":5,"cardNumber":"#399","firstName":"Augy","lastName":"Stoffersen","diagnosis":"migraine","email":"astoffersen4@ask.com","gender":"Male","age":13,"phoneNumber":"474-293-0131"},
{"id":6,"cardNumber":"#39e","firstName":"Rosemary","lastName":"Beamont","diagnosis":"migraine","email":"rbeamont5@si.edu","gender":"Bigender","age":29,"phoneNumber":"156-102-3163"},
{"id":7,"cardNumber":"#414","firstName":"Roland","lastName":"Poynter","diagnosis":"diabetes","email":"rpoynter6@blogger.com","gender":"Male","age":40,"phoneNumber":"745-870-2372"},
{"id":8,"cardNumber":"#472","firstName":"Dom","lastName":"Rizzetti","diagnosis":"diabetes","email":"drizzetti7@friendfeed.com","gender":"Male","age":87,"phoneNumber":"413-545-7034"},
{"id":9,"cardNumber":"#233","firstName":"Skye","lastName":"Luetkemeyers","diagnosis":"diabetes","email":"sluetkemeyers8@nih.gov","gender":"Male","age":97,"phoneNumber":"755-172-0994"},
{"id":10,"cardNumber":"#230","firstName":"Cale","lastName":"Geelan","diagnosis":"hypertension","email":"cgeelan9@uiuc.edu","gender":"Male","age":30,"phoneNumber":"988-622-7687"},
{"id":11,"cardNumber":"#9a3","firstName":"Alethea","lastName":"Eatock","diagnosis":"hypertension","email":"aeatocka@blogs.com","gender":"Female","age":10,"phoneNumber":"412-794-5621"},
{"id":12,"cardNumber":"#c53","firstName":"Pavla","lastName":"Mellsop","diagnosis":"flu","email":"pmellsopb@craigslist.org","gender":"Female","age":19,"phoneNumber":"275-961-7650"},
{"id":13,"cardNumber":"#a2e","firstName":"Sher","lastName":"Leppingwell","diagnosis":"flu","email":"sleppingwellc@sogou.com","gender":"Female","age":12,"phoneNumber":"787-514-8391"},
{"id":14,"cardNumber":"#ab0","firstName":"Francine","lastName":"Deave","diagnosis":"hypertension","email":"fdeaved@foxnews.com","gender":"Female","age":68,"phoneNumber":"433-797-5297"},
{"id":15,"cardNumber":"#bab","firstName":"Cyrill","lastName":"Bladon","diagnosis":"hypertension","email":"cbladone@gizmodo.com","gender":"Male","age":61,"phoneNumber":"149-663-7836"},
{"id":16,"cardNumber":"#22a","firstName":"Doroteya","lastName":"Hamnet","diagnosis":"hypertension","email":"dhamnetf@nydailynews.com","gender":"Female","age":5,"phoneNumber":"309-527-0406"},
{"id":17,"cardNumber":"#68c","firstName":"Carly","lastName":"Wheeler","diagnosis":"diabetes","email":"cwheelerg@mayoclinic.com","gender":"Male","age":13,"phoneNumber":"193-984-2363"},
{"id":18,"cardNumber":"#05a","firstName":"Vito","lastName":"Scirman","diagnosis":"diabetes","email":"vscirmanh@miitbeian.gov.cn","gender":"Male","age":89,"phoneNumber":"560-659-1379"},
{"id":19,"cardNumber":"#886","firstName":"Conrado","lastName":"Gerleit","diagnosis":"pneumonia","email":"cgerleiti@accuweather.com","gender":"Male","age":5,"phoneNumber":"528-536-6247"},
{"id":20,"cardNumber":"#11e","firstName":"Shelli","lastName":"Gantlett","diagnosis":"flu","email":"sgantlettj@youku.com","gender":"Female","age":14,"phoneNumber":"947-893-9846"},
{"id":21,"cardNumber":"#809","firstName":"Marna","lastName":"Chuney","diagnosis":"diabetes","email":"mchuneyk@skyrock.com","gender":"Female","age":17,"phoneNumber":"836-562-8054"},
{"id":22,"cardNumber":"#023","firstName":"Consalve","lastName":"Lewing","diagnosis":"pneumonia","email":"clewingl@desdev.cn","gender":"Male","age":7,"phoneNumber":"867-927-2138"},
{"id":23,"cardNumber":"#c19","firstName":"Brit","lastName":"Burker","diagnosis":"migraine","email":"bburkerm@themeforest.net","gender":"Female","age":19,"phoneNumber":"459-678-7077"},
{"id":24,"cardNumber":"#8e0","firstName":"Phyllys","lastName":"Affron","diagnosis":"migraine","email":"paffronn@ucoz.ru","gender":"Female","age":63,"phoneNumber":"455-321-1922"},
{"id":25,"cardNumber":"#3ee","firstName":"Slade","lastName":"Thrussell","diagnosis":"migraine","email":"sthrussello@answers.com","gender":"Male","age":21,"phoneNumber":"481-174-7410"},
{"id":26,"cardNumber":"#c60","firstName":"Melonie","lastName":"Hay","diagnosis":"pneumonia","email":"mhayp@utexas.edu","gender":"Agender","age":4,"phoneNumber":"220-763-0568"},
{"id":27,"cardNumber":"#33e","firstName":"Currie","lastName":"Galbraith","diagnosis":"migraine","email":"cgalbraithq@dot.gov","gender":"Male","age":34,"phoneNumber":"504-911-2125"},
{"id":28,"cardNumber":"#2ae","firstName":"Stan","lastName":"Hackworth","diagnosis":"migraine","email":"shackworthr@hud.gov","gender":"Male","age":31,"phoneNumber":"963-535-8361"},
{"id":29,"cardNumber":"#c1b","firstName":"Viki","lastName":"Andrejs","diagnosis":"pneumonia","email":"vandrejss@hao123.com","gender":"Female","age":61,"phoneNumber":"253-727-2488"},
{"id":30,"cardNumber":"#d4d","firstName":"Marchall","lastName":"Pickworth","diagnosis":"migraine","email":"mpickwortht@mlb.com","gender":"Male","age":79,"phoneNumber":"204-428-1328"},
{"id":31,"cardNumber":"#54a","firstName":"Westleigh","lastName":"Bofield","diagnosis":"flu","email":"wbofieldu@cbsnews.com","gender":"Male","age":42,"phoneNumber":"173-545-8140"},
{"id":32,"cardNumber":"#690","firstName":"Rolando","lastName":"Boshier","diagnosis":"hypertension","email":"rboshierv@free.fr","gender":"Male","age":88,"phoneNumber":"149-640-3748"},
{"id":33,"cardNumber":"#071","firstName":"Marmaduke","lastName":"Eliaz","diagnosis":"hypertension","email":"meliazw@sun.com","gender":"Male","age":41,"phoneNumber":"441-570-7464"},
{"id":34,"cardNumber":"#9f5","firstName":"Sigismundo","lastName":"Quibell","diagnosis":"diabetes","email":"squibellx@tiny.cc","gender":"Male","age":51,"phoneNumber":"994-448-2824"},
{"id":35,"cardNumber":"#56e","firstName":"Syman","lastName":"Permain","diagnosis":"diabetes","email":"spermainy@mozilla.org","gender":"Male","age":77,"phoneNumber":"799-481-7691"},
{"id":36,"cardNumber":"#5cf","firstName":"Marieann","lastName":"Flucks","diagnosis":"migraine","email":"mflucksz@dmoz.org","gender":"Genderqueer","age":10,"phoneNumber":"796-569-0712"},
{"id":37,"cardNumber":"#4b5","firstName":"Field","lastName":"Fawcus","diagnosis":"diabetes","email":"ffawcus10@trellian.com","gender":"Male","age":86,"phoneNumber":"718-257-8175"},
{"id":38,"cardNumber":"#55f","firstName":"Ame","lastName":"Cowp","diagnosis":"hypertension","email":"acowp11@uiuc.edu","gender":"Non-binary","age":65,"phoneNumber":"883-754-8678"},
{"id":39,"cardNumber":"#f6a","firstName":"Laureen","lastName":"Kittle","diagnosis":"hypertension","email":"lkittle12@angelfire.com","gender":"Female","age":37,"phoneNumber":"692-950-7331"},
{"id":40,"cardNumber":"#332","firstName":"Herschel","lastName":"Mecozzi","diagnosis":"diabetes","email":"hmecozzi13@usa.gov","gender":"Male","age":98,"phoneNumber":"247-413-3630"},
{"id":41,"cardNumber":"#94f","firstName":"Vivyan","lastName":"Grichukhin","diagnosis":"migraine","email":"vgrichukhin14@ebay.com","gender":"Female","age":13,"phoneNumber":"303-334-2185"},
{"id":42,"cardNumber":"#ddc","firstName":"Alvin","lastName":"Schukert","diagnosis":"migraine","email":"aschukert15@usatoday.com","gender":"Male","age":57,"phoneNumber":"444-592-2826"},
{"id":43,"cardNumber":"#ff2","firstName":"Hakim","lastName":"Tyler","diagnosis":"migraine","email":"htyler16@cpanel.net","gender":"Male","age":21,"phoneNumber":"402-427-3219"},
{"id":44,"cardNumber":"#cbc","firstName":"Audry","lastName":"Penhaligon","diagnosis":"migraine","email":"apenhaligon17@slideshare.net","gender":"Female","age":11,"phoneNumber":"362-123-5300"},
{"id":45,"cardNumber":"#4be","firstName":"Giuseppe","lastName":"Elcock","diagnosis":"migraine","email":"gelcock18@cnn.com","gender":"Male","age":10,"phoneNumber":"361-865-5642"},
{"id":46,"cardNumber":"#753","firstName":"Fredi","lastName":"Banbury","diagnosis":"diabetes","email":"fbanbury19@1und1.de","gender":"Female","age":62,"phoneNumber":"540-147-2287"},
{"id":47,"cardNumber":"#faa","firstName":"Ripley","lastName":"Wase","diagnosis":"flu","email":"rwase1a@eventbrite.com","gender":"Male","age":94,"phoneNumber":"810-297-6653"},
{"id":48,"cardNumber":"#b48","firstName":"Artemas","lastName":"Gillmore","diagnosis":"hypertension","email":"agillmore1b@youtube.com","gender":"Male","age":91,"phoneNumber":"218-939-6439"},
{"id":49,"cardNumber":"#57a","firstName":"Franky","lastName":"Crann","diagnosis":"hypertension","email":"fcrann1c@wix.com","gender":"Female","age":19,"phoneNumber":"329-419-8098"},
{"id":50,"cardNumber":"#04e","firstName":"Pail","lastName":"Cocke","diagnosis":"hypertension","email":"pcocke1d@cnbc.com","gender":"Male","age":41,"phoneNumber":"988-914-2267"}]