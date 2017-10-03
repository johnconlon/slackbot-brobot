// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//
var WebClient = require('@slack/client').WebClient;
var token = process.env.HUBOT_SLACK_TOKEN;
var web = new WebClient(token);

let party = ["Let's slam some brewskis!", "Bro you know I'm down!", "Let's Do this", "I don't have my wallet but I'll totally pay you tomorrow", "Kappa Sigma for life!", "Yolo"];

let bros = ["Dennis", "Barry", "Ace", "Wayne", "Ryan", "Gerald", "Big Frank", "Steve-O"];
let broPhotos = ["https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.ironmagazine.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fgym-bro-selfy.jpg&imgrefurl=http%3A%2F%2Fwww.ironmagazine.com%2F2017%2Fare-you-a-gym-bro%2F&docid=wkigxFpYKIURUM&tbnid=0qjvLwFyvLeBQM%3A&vet=10ahUKEwjX6YLy6dLWAhXIw1QKHVfVAX4QMwiHAigUMBQ..i&w=740&h=471&bih=780&biw=1440&q=bro&ved=0ahUKEwjX6YLy6dLWAhXIw1QKHVfVAX4QMwiHAigUMBQ&iact=mrc&uact=8", "https://yt3.ggpht.com/-l0_JKt1ePtM/AAAAAAAAAAI/AAAAAAAAAAA/avr3ydqBEZ0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg", "http://3.bp.blogspot.com/-S4M8rRO7QRg/UsShaSYqhhI/AAAAAAAAAoI/wm15Fp6LZ40/s1600/edm+bro.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/campaign_images/webdr04/2012/11/1/14/the-best-bro-seeks-bro-craigslist-ad-ever-1-1463-1351794792-1_big.jpg"]

module.exports = function(robot) { 
  robot.hear(/beer|shots|whiskey|keg/i, function(msg) {
    return msg.reply(msg.random(party));
  });

  robot.respond(/Do you have any friends/i, function(msg) {
    msg.reply("Yeah totally here's my boy " + msg.random(bros) + " " + msg.random(broPhotos));
  });

  robot.respond(/happy hour at(?: (.*))?/i, function(res) {
  	let happyHourTime = res.match[1];
    if (!happyHourTime) {
       res.reply("Please specify a time.");
    } else {
    	res.send(`@Channel Happy Hour at ${happyHourTime}`);
    	return robot.adapter.client.web.channels.setTopic(res.message.room, 'Happy hour at ${happyHourTime}')
    }
  });
};



