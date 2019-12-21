const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.arcadia

const PREFIX = '?';

const ytdl = require("ytdl-core");

var version = '1.0.1';

var servers = {};

name = '히디';

bot.on('ready', ()=>{
    console.log('Hi I Am Online');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'play':

            function play(connection, message){
                var server = servers[message.guild.id];

                server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly "}));
                
                server.queue.shift();

                server.dispatcher.on("끝", function(){
                    if(server.queue[0]){
                        play(connection, message);
                    }else {
                        connection.disconnect();
                    }
                });
            }


            if(!args[1]){
                message.channel.send("노래의 링크를 넣어 주세요!");
                return;
            }

            if(!message.member.voiceChannel){
                message.channel.send("VoiceChannel에 들어간 후 봇을 실행해 주세요!");
                return; 
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if(message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
               play (connection, message);
            })
 
        break;
    }   

    switch(args[0]){
        case 'CloTiZen':
           message.reply('M-loTiZen');
        break;

        case '닌별':
            message.reply('ㅗ');
        break;
                
        case '개발자':
            message.reply('북극곰'+name);
        break;
        
        case '피카츄':
           message.reply('귀여운 쇅');
        break;   

    
        case '명령어':
            message.reply('흠 귀찮');
        break;        
    
        case '앙랑께띠':
            message.reply('앙랑강두');
        break;   
        
        case '버전':
            message.reply('버전' + version);
        break;
        
        case '청소':
            if(!args[1]) return message.reply('삭제할 채팅의 양을 정해주세요')
            message.channel.bulkDelete(args[1]);
            break;

        case '탄이형':
           message.reply('M-탄이형');
        break; 

        case '임승화':
           message.reply('노답ㅇㅈ?');


        
        case '히빈':
           message.reply('노답');
        break;
        
        case '히디':
           if(!args[1]) return message.reply('정확한 양식으로 써주세요')
           switch(args[1]){
               case '노답':
                   message.reply('디져');
                break;   
           }
        case '히빈.':
            if(!args[1]) return message.reply('? 노답 아님?')
            switch(args[1]){
                case '노답':
                    message.reply('ㅇㅈ');
                break; 
            }

        case '지윤':
            if(!args[1]) return message.reply('미친넘 맞겠지?')
            switch(args[1]){
                case '미친넘':
                    message.reply('ㄴㄴ 야동 링크 외우고 다니는애임');
                break;    
            } 
    }
    
    switch(args[0]){
    case '정보' :
            const embed = new Discord.RichEmbed()
            .setTitle('유저 정보')
            .addField('유저 닉네임', message.author.username, true)
            .addField('봇 버전', version, true)
            .addField('현제 서버', message.guild.name, true)
            .setColor(0xA2FF44)
            .setThumbnail(message.author.avatarURL)
            .setFooter('이게 너님 정보 이십니다')
            message.channel.sendEmbed(embed);
        break;
    } 
   
})
bot.login(process.env.token);
