// コロナデータを取得
type Data = {
    itemList:{date:string, name_jp:string, npatients:string}[]
}



export function GetCovidData() {

    const fetchData = async () => {
        try {
            const url = '/api/covid-data';
            const res = await fetch(url)
            const data: Data = await res.json()
            console.log("posts:");
            console.log(data);

            return data
        } catch(error){
            console.log(error);
        }
    }

    return fetchData()


}


// fetch("/api/covid-data") // ここをProxyしたAPIにする
// .then((r) => r.json())
// .then((data) => {
//   console.log(data);
// });