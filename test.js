const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
    params: { url: 'https://vm.tiktok.com/ZSeQS6B5k/', hd: '0' },
    headers: {
        'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
        'X-RapidAPI-Key': 'e029be8030msh618c63937555372p1bb3ccjsn6262f03d6b6f'
    }
};

axios.request(options).then(function(response) {
    console.log(response.data.data.play);
}).catch(function(error) {
    console.error(error);
});