

export default (req, res) => {
  res.statusCode = 200
  fetch(encodeURI("https://opendata.corona.go.jp/api/Covid19JapanAll?dataName=愛知県"))
    .then(r => r.json())
    .then(data => res.json(data)) 
}

