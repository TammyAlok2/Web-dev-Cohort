

const formData = {
    grant_type: 'authorization_code',
    client_id: '65814017-0991-4100-8d35-1880e7f145cb',
    client_secret: '47b781eb-3716-4e10-9cb6-04ef60951b58',
    redirect_uri: 'http://localhost',
    code: 'na2-c929-3fa9-4a3a-84be-5de6eacfbeb1'
};

fetch('https://api.hubapi.com/oauth/v1/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formData)
})
.then(response => response.json())
.then(data => {
    // Handle the returned tokens
    console.log(data);
})
.catch(error => {
    // Handle the error
    console.error(error);
});