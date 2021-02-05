if(message.channel.type !== 'dm') {

       if(message.content === "q m"){
        const embed = new MessageEmbed()
        .setTitle("Member Count")
        .setColor("RANDOM")
        .setDescription(`This server has \`${message.guild.members.cache.size}\` members.`)
        message.channel.send(embed);
       }
     
}
