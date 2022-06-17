function getVisitCounter(){
    fetch('https://4ovpv3y44m.execute-api.us-east-1.amazonaws.com/test/resume/visitors',{
        method: 'GET'
    })
  .then(response => {
    if (
        response.ok
    ) {
      return response.json()
    } else {
      throw new Error('something went wrong');
    }
  })
  .then(data => {
    body = JSON.parse(data.body);
    document.getElementById("hits").innerText = body.Visit_Count;
  })
}

function updateVisitCounter(){
    fetch('https://4ovpv3y44m.execute-api.us-east-1.amazonaws.com/test/resume/visitors',{
        method: 'PUT'
    })
  .then(response => {
    if (
        response.ok
    ) {
      return response.json()
    } else {
      throw new Error('something went wrong');
    }
  })
  .then(data => { getVisitCounter() })
}


