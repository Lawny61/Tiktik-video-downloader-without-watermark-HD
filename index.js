const Telegraf = require('telegraf').Telegraf

const bot = new Telegraf('1801613186:AAGa2COCpOH1MWkz4USvpdNcjmCFkaSqK_Q')

const axios = require('axios')



bot.start(ctx => {
    bot.telegram.sendMessage(-1001629127444, 'New User\nUsername @' + ctx.from.username + '\nName: ' + ctx.from.first_name + '\nUserid: ' + ctx.from.id);
    ctx.reply('<i>Hello ' + ctx.from.first_name + ' 🎉\nWelcome to our  tiktok bot here you can download any tiktok video without watermark\nJust forward the tiktok link/url</i>', {
        parse_mode: 'HTML'
    })
})
bot.on('text', (ctx) => {
    let vido = ctx.message.text
    const options = {
        method: 'GET',
        url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
        params: { url: vido, hd: '0' },
        headers: {
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
            'X-RapidAPI-Key': '0msh618c63937555372p1bb3ccjsn6262f03d6b6f'
        }
    }

    axios.request(options).then(res => {
        console.log(res.data.data.play)
        ctx.replyWithChatAction('upload_video')
        ctx.replyWithVideo(res.data.data.play, {
            caption: '<i>If you like our bot kindly \nshare it with your friends\nlink: https://t.me/tiktokflix_bot\nJoin our Channel @socialflix</i>',
            parse_mode: 'HTML'
        }).catch(function(error) {
            ctx.replyWithMarkdown('_‼Please send only a tiktok link/url_')
        })
    })
})
bot.launch()


// exports.handler = (event, context, callback) => {
//     const tmp = JSON.parse(event.body);
//     bot.handleUpdate(tmp);
//     return callback(null, {
//         statusCode: 200,
//         body: ''

//     });
//     };
//.catch(function(error) {
//     ctx.replyWithMarkdown('_‼️ Please send tiktok https link/url_')
