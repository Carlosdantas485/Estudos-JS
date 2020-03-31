axios.get('https://api.github.com/users/Carlosdantas485')

    .then(function(response){
        console.log(response);
    })

    .catch(function(error){
        console.log(error);
    });
    