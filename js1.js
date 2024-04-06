 const questions = [
    "The Battle of Hastings was fought in France.",
    "The French Revolution was primarily a peaceful protest.",
    "Julius Caesar was assassinated by his own senators.",
    "The Renaissance primarily occurred in Asia.",
    "The Industrial Revolution saw a decline in the use of machinery.",
    "The American Civil War ended with the Union's defeat.",
    "World War I began due to conflicts in South America.",
    "The Berlin Wall was built to unite East and West Berlin.",
    "The French Revolution resulted in the rise of Napoleon Bonaparte.",
    "The Black Death originated in the Americas.",
    "The Great Wall of China was built to keep out invading forces from Mongolia.",
    "The Boston Tea Party was a protest against taxes imposed by the British government.",
    "The Cuban Missile Crisis was resolved without any concessions.",
    "The Declaration of Independence was primarily authored by Thomas Jefferson.",
    "The Trojan War was a fictional event.",
    "The Treaty of Westphalia marked the end of the Thirty Years' War.",
    "The Declaration of the Rights of Man and of the Citizen was adopted during the French Revolution.",
    "The fall of Constantinople occurred in the 18th century.",
    "The Emancipation Proclamation freed all slaves in the United States.",
    "The Renaissance was a period of intellectual and artistic decline.",
    "The Treaty of Portsmouth ended the Russo-Japanese War.",
    "The Battle of Kosovo in 1389 marked the end of Ottoman rule in the Balkans.",
    "Croatia gained independence from Yugoslavia in 1918.",
    "Dubrovnik was an independent city-state known as the Republic of Venice.",
    "The Croatian language uses the Cyrillic alphabet.",
    "Belgrade is the capital city of Croatia.",
    "The Treaty of Trianon resulted in the establishment of the Austro-Hungarian Empire.",
    "The Croatian Parliament proclaimed independence from Yugoslavia on June 25, 1991.",
    "The city of Rijeka was a significant port under the rule of Italy.",
    "The city of Šibenik is known for its UNESCO-listed cathedral, St. Peter's Cathedral.",
    "The Croatian coast along the Adriatic Sea is known for its arid climate.",
    "The Croatian football club Dinamo Zagreb was founded in 1903.",
    "The Vikings originated from modern-day Germany.",
    "The Code of Hammurabi was the first written legal code.",
    "The Battle of Gettysburg was fought in Texas.",
    "The Renaissance saw a resurgence of interest in classical Greek and Roman literature.",
    "The Roman Empire collapsed in the 5th century AD.",
    "The Great Fire of London occurred in the 17th century.",
    "The Treaty of Versailles was signed at the end of World War II.",
    "The Great Depression began in the 1920s.",
    "The War of 1812 was fought between the United States and Mexico.",
    "The Industrial Revolution began in the 19th century.",
    "The first successful airplane flight was conducted by the Wright brothers.",
    "The construction of the Panama Canal was completed in the 20th century.",
    "The Hundred Years' War lasted for exactly one hundred years.",
    "The Inca Empire was located in present-day Mexico.",
    "The Magna Carta was signed in the 13th century.",
    "The first Olympic Games were held in ancient Rome.",
    "The Battle of the Alamo took place during the American Revolutionary War.",
    "The first humans landed on the moon in the 1960s.",
    "The Russian Revolution led to the establishment of the Soviet Union.",
    "The War of the Roses was fought between the House of York and the House of Lancaster.",
    "The Battle of Waterloo was fought in Belgium.",
    "The Black Death killed approximately one-third of Europe's population.",
    "The Taj Mahal is located in India.",
    "The Crusades were a series of religious wars fought between Christians and Muslims.",
    "The Magna Carta limited the power of the English monarch.",
    "The Cold War was primarily a military conflict between the United States and China.",
    "The Inquisition was a period of religious tolerance in medieval Europe.",
    "The Battle of Antietam was the bloodiest single-day battle in American history.",
    "The Louisiana Purchase doubled the size of the United States.",
    "The Great Wall of China is visible from space.",
    "The Renaissance originated in Italy.",
    "The Trojan War was fought over the abduction of Helen of Troy.",
    "The Treaty of Versailles led to the rise of fascism in Germany.",
    "The Battle of Midway was a decisive naval battle in the Pacific Theater of World War II.",
    "The Treaty of Paris ended the American Civil War.",
    "The fall of the Roman Empire led to the beginning of the Middle Ages.",
    "The Battle of Trafalgar was fought between Britain and France.",
    "The colonization of the Americas began in the 16th century.",
    "The Battle of Stalingrad was a turning point in World War II.",
    "The Reformation was a movement led by Martin Luther to reform the Catholic Church.",
    "The Battle of Yorktown was the final major battle of the American Revolutionary War.",
    "The Industrial Revolution led to the rise of urbanization.",
    "The Treaty of Guadalupe Hidalgo ended the Mexican-American War.",
    "The Great Depression began with the stock market crash of 1929.",
    "The Berlin Wall fell in 1989.",
    "The Salem Witch Trials took place in the 17th century.",
    "The Battle of Agincourt was fought between England and Scotland.",
    "The Treaty of Utrecht ended the War of the Spanish Succession.",
    "The French and Indian War was fought between France and Britain in North America.",
    "The Treaty of Ghent ended the War of 1812 between the United States and Britain.",
    "The Battle of Hastings resulted in William the Conqueror becoming king of England.",
    "The Treaty of Nanjing ended the Opium Wars.",
    "The Boston Massacre resulted in over a hundred casualties.",
    "The Treaty of Brest-Litovsk ended Russia's involvement in World War I.",
    "The Trail of Tears refers to the forced relocation of Native American tribes in the United States.",
    "The Battle of Tours halted the advance of the Muslim forces into Europe.",
    "The Treaty of Nanking ceded Hong Kong to Britain.",
    "The Battle of Verdun was the longest and one of the most costly battles of World War I.",
    "The Yalta Conference took place during World War II and was attended by Churchill, Roosevelt, and Stalin.",
    "The signing of the Treaty of Versailles led to widespread resentment in Germany and contributed to the outbreak of World War II.",
    "The Zimmermann Telegram was a diplomatic proposal from Germany to Mexico to join World War I against the United States.",
    "The Teapot Dome scandal involved the illegal leasing of federal oil reserves in the United States during the 1920s.",
    "The Treaty of Utrecht ended the War of the Spanish Succession.",
    "The Battle of Saratoga is considered a turning point in the American Revolutionary War.",
    "The Treaty of Portsmouth ended the Russo-Japanese War.",
    "The Treaty of San Stefano ended the Russo-Turkish War.",
    "The Battle of Kosovo in 1389 marked the end of Ottoman rule in the Balkans.",
    "Josip Broz Tito was the leader of Yugoslavia during World War II.",
    "The Srebrenica massacre occurred during the Bosnian War.",
    "The Croatian Parliament is called the Sabor.",
    "The city of Split was built around the Diocletian's Palace.",
    "The Kingdom of Croatia was in personal union with Hungary in the Middle Ages.",
    "Nikola Tesla, the inventor, was born in Croatia.",
    "The Battle of Mohács in 1526 led to the partition of the Kingdom of Hungary.",
    "The Croatian War of Independence began with the Plitvice Lakes incident.",
    "The Ban Jelačić Square is a central square in Zagreb named after a Croatian military leader.",
    "The Battle of Vukovar was one of the most significant battles during the Croatian War of Independence.",
    "The city of Zadar has a well-preserved Roman forum.",
    "The Croatian flag consists of three horizontal stripes: red, white, and blue.",
    "The Battle of Lepanto in 1571 was a naval engagement between the Holy League and the Ottoman Empire.",
    "The Neanderthals, an extinct species of human, inhabited parts of what is now Croatia.",
    "The Croatian town of Pula is known for its well-preserved Roman amphitheater.",
    "The Treaty of Trianon resulted in the disintegration of the Austro-Hungarian Empire.",
    "Croatia was part of the Socialist Federal Republic of Yugoslavia before gaining independence.",
    "The Croatian Parliament proclaimed independence from Yugoslavia on June 25, 1991.",
    "The Battle of Krbava Field in 1493 was a significant defeat for the Croatian Kingdom against the Ottoman Empire.",
    "The city of Osijek is located on the banks of the Drava River.",
    "The Croatian currency, kuna, was introduced in 1994.",
    "The city of Rijeka was a significant port under the rule of Austria-Hungary.",
    "The Battle of Varna in 1444 was a decisive Ottoman victory over the Hungarian and Polish forces.",
    "The city of Šibenik is known for its UNESCO-listed cathedral, St. James Cathedral.",
    "The Croatian coast along the Adriatic Sea is known for its picturesque towns and islands.",
    "The Banovina of Croatia was an autonomous province within the Kingdom of Yugoslavia.",
    "The city of Vukovar suffered extensive damage during the Croatian War of Independence.",
    "The Illyrians were an ancient people who inhabited parts of what is now Croatia.",
    "The Croatian football club Dinamo Zagreb was founded in 1945.",
    "The Battle of Cetate in 1595 was part of the Long War between the Habsburg Monarchy and the Ottoman Empire."
]

const answers = [
    "F",
    "F",
    "T",
    "F",
    "F",
    "F",
    "F",
    "F",
    "T",
    "F",
    "T",
    "T",
    "F",
    "T",
    "T",
    "T",
    "T",
    "F",
    "F",
    "F",
    "T",
    "T",
    "F",
    "F",
    "F",
    "F",
    "F",
    "T",
    "T",
    "T",
    "F",
    "T",
    "F",
    "T",
    "F",
    "T",
    "T",
    "T",
    "T",
    "F",
    "F",
    "T",
    "T",
    "T",
    "T",
    "F",
    "T",
    "F",
    "F",
    "F",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "F",
    "F",
    "F",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "F",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "F",
    "T",
    "T",
    "T",
    "T",
    "F",
    "F",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "F",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
]

let br = 0

var a = Math.floor(Math.random() * questions.length)
let n = questions[a];
document.getElementById("rijec").innerHTML = n

function tocno() {
  if (answers[a] == "T") {
    br += 1
  }
  else {
    document.getElementById("rijec").innerHTML = "Krivo, igra svršena ඞ " + br
    return
  }
    
  a = Math.floor(Math.random() * questions.length)
  n = questions[a];
  document.getElementById("rijec").innerHTML = n; 
}

function lazno() {
  if (answers[a] == "F") {
    br += 1
  }
  else {
    document.getElementById("rijec").innerHTML = "Krivo, igra svršena ඞ " + br
    return
  }
  
  a = Math.floor(Math.random() * questions.length)
  n = questions[a];
  document.getElementById("rijec").innerHTML = n; 
}

function DarkMode() {
  try {
  var white = document.querySelector('.white');
  var className = white.className;
  }catch(e){

  }
  if (className == 'white'){
    document.getElementById("body").classList.remove('white');
    document.getElementById("body").classList.add('Dark-mode');
    document.getElementById("github-logo").src = "github_logo_dark.png";
  }
  else {
    document.getElementById("body").classList.remove('Dark-mode');
    document.getElementById("body").classList.add('white');
    document.getElementById("github-logo").src = "github_logo.png";
  }
}

function restart() {
  br = -1
  Math.floor(Math.random() * lista.length)
  n = questions[a];
  document.getElementById("rijec").innerHTML = n;
}
