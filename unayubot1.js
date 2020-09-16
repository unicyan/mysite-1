const http = require('http');
const querystring = require('querystring');
const discord = require('discord.js');
const client = new discord.Client();
const dispatcher = 

http.createServer(function(req, res){
  if (req.method == 'POST'){
    var data = "";
    req.on('data', function(chunk){
      data += chunk;
    });
    req.on('end', function(){
      if(!data){
        res.end("No post data");
        return;
      }
      var dataObject = querystring.parse(data);
      console.log("post:" + dataObject.type);
      if(dataObject.type == "wake"){
        console.log("Woke up in post");
        res.end();
        return;
      }
      res.end();
    });
  }
  else if (req.method == 'GET'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Discord Bot is active now\n');
  }
}).listen(3000);

client.on('ready', message =>{
  console.log('Bot準備完了～');
  client.user.setPresence({ game: { name: 'https://twitter.com/285taina' } });
});

client.login('NzU1Njg0NTAzNjgyNDE2Njkx.X2G4CQ.jE9nX4eZ_6bSKyH9tPqjfbY7xWs');

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('通話行くわー');
        })
        .catch(console.log);
    } else {
      message.reply('おまえがまずはいれ');
    }
  }
});



client.on('message', message =>{
  if (message.author.id == client.user.id || message.author.bot){
    return;
  }

  if (message.content.match(/たいな鉄道旅行チャンネル|うなゆう|タイナ/)){
    let text = "...だるいからやめてくんない？";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/うるさい|やだ|だめ|キモ/)){
    let text = "...";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/お絵かきしよ/)){
    let text = "え！俺もやる!!!";
    sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/ヤマト/)){
    let text = "こちらがヤマトです https://youtu.be/smiOqGT8UOY";
    sendMsg(message.channel.id, text);
    return;
  }
  
    if (message.content === "原谷優"){
    let reply_text = "やめろ";
    message.reply(reply_text)
      .then(message => console.log("Sent message: " + reply_text))
      .catch(console.error);
    return;
  }

  
  if (message.content.match(/ざこおつ/)){
    let text = ":emoji_17:";
    sendMsg(message.channel.id, text);
    return;
  }
  
   if (message.content.match(/シージしよ/)){
    let text = "ランクキャリーしてよおおおおおおおおおおおおおおおおお";
    sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/教えて/)){
    let text = "@everyone まりも教えてよー";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/顔見せて/)){
    let text = "@everyone :emoji_1::emoji_2: :emoji_3: :emoji_4: :emoji_5: :emoji_6: :emoji_7: :emoji_8: :emoji_9: :emoji_10:  ";
    sendMsg(message.channel.id, text);
    return;
  }
    if (message.content.match(/ふうや/)){
    let text = "@ふうぴー#6866 これまりも？";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/ロシア/)){
    let text = "@everyone @here СукаБлядь"
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/5月5日/)){
    let text = "@everyone https://cdn.discordapp.com/attachments/755795135706431588/755796264398094376/image2.jpg"
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/ぴくしぶ/)){
    let text = "https://www.pixiv.net/users/43402242";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/ありませんせい/)){
    let text = "@everyone マジでだるいからやめろ、日本語わかる？障害者？？？？";
    sendMsg(message.channel.id, text);
    return;
  }
      if (message.content.match(/しーじ/)){
    let text = "しーじしよしーじしよしーじしよしーじしよしーじしよしーじしよしーじしよしーじしよしーじしよしーじしよしーじしよしーじしよしーじしよしーじしよしーじしよ";
    sendMsg(message.channel.id, text);
    return;
  }
      if (message.content.match(/dennsha/)){
    let text = "https://media.discordapp.net/attachments/673741133670514700/755783741363847258/unknown.png";
    sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/宣伝/)){
    let text = "ブログ https://yus1e.crayonsite.net ようつべ https://www.youtube.com/channel/UCs9vvLz2wQQOAll5SDj6wGg Twitter https://twitter.com/285taina insuta https://www.instagram.com/qawsedrftgyhujikolp467/?hl=ja t i k t o k https://www.youtube.com/channel/UCs9vvLz2wQQOAll5SDj6wGg";
    sendMsg(message.channel.id, text);
    return;
  }
    if (message.content.match(/自己紹介/)){
    let text = "48歳、無職、日本語不自由、精神不安定、しーじしよ！ですが、新しい出会いを求めています。若い女と仲良くなりたいのでメッセージください。せふれいいですよ。";
    sendMsg(message.channel.id, text);
    return;
  }
  
      if (message.content.match(/友達を紹介/)){
    let text = "I'm going to introduce my friends. His name is Masahiko Yoshimura. His nickname is Masahiko. His birthday 4/27. He doesn't have any brothers and sisters. He belongs to the Japanese archery club. His favorite sports is swim. He doesn't have favorite song and singer. His personality is Chu2 byou and Inkya chigyu.";
    sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/絵描けよ/)){
    let text = "描きます描きます描きます描きます描きます描きます";
    sendMsg(message.channel.id, text);
    return;
  }
  
  
  if (message.content.match(/起きろ/)){
    let text = "９時まで起きる鵜ウ鵜う鵜ウ鵜う鵜ウ鵜う鵜ウ鵜う鵜ウ鵜う";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/stats sufyeee3/)){
    let text = "９時まで起きる鵜ウ鵜う鵜ウ鵜う鵜ウ鵜う鵜ウ鵜う鵜ウ鵜う";
    sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/ウナスパム/)){
    let text = "俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう俺はうなゆう";
    sendMsg(message.channel.id, text);
    return;
  }
  
    if (message.content.match(/ENGまりも/)){
    let text = "Aegagropila linnaei (Cladophorales) is a filamentous multicellular freshwater green alga. The detailed life history has not been revealed. The recent phylogenetic analyses based on 18S rRNA gene sequences suggest that freshwater Cladophorales species have adapted from a marine habitat independently at least in the two lineages1. A. linnaei has an important status as a special natural monument in Japan, is strictly protected as an endangered species in Lake Myvatn, Iceland as well as Lake Akan, Japan1,2,3. Both lakes are freshwater, shallow, naturally eutrophic and are situated at higher latitudes in the northern hemisphere2,4,5. A. linnaei forms spherical, filamentous aggregations of colonies in these lakes known as Lake Ball in English and Marimo in Japanese. However, virtually nothing is known about why they form ball-like aggregations, which may be a key to the conservation of this very rare species.Field studies of A. linnaei have yielded three important observations. First, the ball-like aggregations can grow up to 40 cm in diameter in nature6. Large balls (>10 cm in diameter) have a hollow in the centre1, because the thickness of the alga is limited to 5 cm from its surface, for photosynthesis7. Second, the ball-like aggregations usually form closely packed colonies in a well-defined patch on the bottom of the lake3 (see also Fig. 1). Several layers (of smaller balls) are sometimes formed reaching 50 cm in depth7. Third, they also form two-dimensional mat-like aggregations on the bottom of the lakes2,8. Ball-like aggregations and mat-like ones are the same species: it has been confirmed that small pieces of filaments can form either ones2,8.";
    sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content === `!server`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}
  
});

if(process.env.DISCORD_BOT_TOKEN == undefined){
 console.log('DISCORD_BOT_TOKENが設定されていません。');
 process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );

function sendReply(message, text){
  message.reply(text)
    .then(console.log("リプライ送信: " + text))
    .catch(console.error);
}

function sendMsg(channelId, text, option={}){
  client.channels.get(channelId).send(text, option)
    .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
    .catch(console.error);
}

client.on('message', message =>{
  if (message.author.id == client.user.id || message.author.bot){
    return;
  }
  
  if (message.content.match(/おみくじ/) ||
      (message.isMemberMentioned(client.user) && message.content.match(/おみくじ/))){
    let arr = ["大吉", "吉", "凶", "大凶", "うんこ"];
    let weight = [5, 10, 10, 30, 15];
    lotteryByWeight(message.channel.id, arr, weight);
  
  }
  
  if (message.content.match(/!una/) ||
      (message.isMemberMentioned(client.user) && message.content.match(/うなしね/))){
    let arr = ["キモチェ", "ドピュ", "きしょ", "ひど", "うわ"];
    let weight = [10, 15, 10, 20, 15];
    lotteryByWeight(message.channel.id, arr, weight);
  }
  
    if (message.content.match(/おばにー/) ||
      (message.isMemberMentioned(client.user) && message.content.match(/おばにー/))){
    let arr = ["おなか", "キモチェ", "ゆか", "ドピュ", "アナ雪\\ https://youtu.be/OncEK9j-9VY"];
    let weight = [50, 10, 5, 10, 5];
    lotteryByWeight(message.channel.id, arr, weight);
 
  }
});

 

function lotteryByWeight(channelId, arr, weight){
  let totalWeight = 0;
  for (var i = 0; i < weight.length; i++){
    totalWeight += weight[i];
  }
  let random = Math.floor(Math.random() * totalWeight);
  for (var i = 0; i < weight.length; i++){
    if (random < weight[i]){
      sendMsg(channelId, arr[i]);
      return;
    }else{
      random -= weight[i];
    }
  }
  console.log("lottery error");
}
