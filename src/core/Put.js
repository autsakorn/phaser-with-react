var Put = function(url, formData){
  return new Promise(function(resolve, reject){
      fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
        method: "POST",
        body: formData
      })
      .then(function(response) {
        if(response.status===200){
            return response.text();
        }else{
            reject();
        }
      })
      .then(function(text){
        resolve(JSON.parse(text));
      })
      .catch(function(error) {
          console.log('Request failed', error)
      })
  });
}
export default Put;
