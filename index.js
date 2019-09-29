const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjI0OTY1ODc3NzQxMTI1NjQz.XZAzEQ.QugiFPaeZxgIU8lXO7c6w2bOpxY';

const PREFIX = '!';

var version = '1.0.1';

name = '히디';

bot.on('ready', ()=>{
    console.log('Hi I Am Online');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

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
