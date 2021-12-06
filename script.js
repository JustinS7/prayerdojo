const startingMinutes = 5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown')

setInterval(updateCoutdown, 1000);

/* 5 min countdown */
function updateCoutdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
}

const textlist = ["Thankful", "Hear God", "Forgiveness", "Strength", "The Kingdom"];

const cycle = document.getElementById("cycle1")
let i = 0;
const cycleText = () => {
  cycle.innerHTML = textlist[i];
  i = ++i % textlist.length;
};
cycleText();
setInterval(cycleText, 60000)

const verseList = ["1 Thessalonians 5:16-18 Rejoice always, pray continually, give thanks in ALL circumstances for this is God’s will for you in Christ Jesus.", "Proverbs 4:20-22 My son, pay attention to what I say; turn your ear to my words. Do not let them out of your sight, keep them within your heart for they are life to those who find them and health to one’s whole body.", "Joel 2:13 Rend your heart and not your garments. Return to the Lord your God, for he is gracious and compassionate, slow to anger and abounding in love, and he relents from sending calamity.", "Psalm 27:1 The LORD is my light and my salvation whom shall I fear? The Lord is the stronghold of my life of whom shall I be afraid?", "Acts 1-8 But you will receive power when the Holy Spirit comes on you and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth." ]

const cycleTwo = document.getElementById('verse')
let j = 0;
const cycleVerse = () => {
  verse.innerHTML = verseList[j];
  j = ++j % verseList.length;
};

cycleVerse();
setInterval(cycleVerse, 60000)

const prayList = ["Pray: Thank you Lord for another day, Thank you Lord for being with me! Please let your will be done in my life.", "Pray: Lord speak to me, let your Holy Word nourish my spirit and body.", "Pray: Your love is matchless and wonderful please Lord help me for I have sinned.", "Nothing is impossible with you Lord! Give me strength no matter what the future holds.", "Pray: Lord use me for your Kingdom! I will speak of Jesus and your love everywhere! Give me courage, strength and passion to boldy uphold and share your word."]

const cycleThree = document.getElementById('pray')
let m = 0;
const cyclePray = () => {
  pray.innerHTML = prayList[m];
  m = ++m % prayList.length;
};

cyclePray();
setInterval(cyclePray, 60000)