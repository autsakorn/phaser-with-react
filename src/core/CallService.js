var CallService = function(url, formData){
  return new Promise(function(resolve, reject){
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        },
        method: "POST",
        body: formData,
        async:false
      })
      .then(function(response) {
        if(response.status===200){
            return response.text();
        }else{
            reject(Error(""));
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
export default CallService;
