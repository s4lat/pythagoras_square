function sum_of_digits(n){
	n = n.toString();
	s = 0;
	for (let i = 0; i < n.length; i++) s += parseInt(n[i]);

	return s;
}

function calculate_sqr(d, m, y){
	let dm_sum = sum_of_digits(d.toString() + m.toString())
	let y_sum = sum_of_digits(y)

	let work_n1 = y_sum + dm_sum
	let work_n2 = sum_of_digits(work_n1)
	let work_n3 = work_n1 - parseInt(d.toString()[0])*2
	let work_n4 = sum_of_digits(work_n3)

	let seq = (d.toString() + m.toString() + y.toString()
		 + work_n1.toString() + work_n2.toString() + work_n3.toString()
		 + work_n4.toString())

	let sqr = []

	for (let i = 1; i < 10; i++){
		sqr[i-1] = i.toString().repeat(seq.split(i.toString()).length-1)
	}

	return sqr
}

function update(){
	let date = document.getElementById("date-input").value.split('-')
	let d = parseInt(date[2]);
	let m = parseInt(date[1]);
	let y = parseInt(date[0]);

	let sqr = calculate_sqr(d, m, y);

	let table = document.getElementsByTagName("table")[0];
	let cells = table.getElementsByTagName("td");

	cells[0].innerHTML = "<strong>" + (sqr[0] ? sqr[0]: "Нет") + "</strong><br> Характер";
	cells[1].innerHTML = "<strong>" + (sqr[3] ? sqr[3]: "Нет") + "</strong><br> Здоров'я";
	cells[2].innerHTML = "<strong>" + (sqr[6] ? sqr[6]: "Нет") + "</strong><br> Удача";
	cells[3].innerHTML = "<strong>" + (sqr[1] ? sqr[1]: "Нет") + "</strong><br> Біоенергія";
	cells[4].innerHTML = "<strong>" + (sqr[4] ? sqr[4]: "Нет") + "</strong><br> Логіка";
	cells[5].innerHTML = "<strong>" + (sqr[7] ? sqr[7]: "Нет") + "</strong><br> Борг";
	cells[6].innerHTML = "<strong>" + (sqr[2] ? sqr[2]: "Нет") + "</strong><br> Пізнання";
	cells[7].innerHTML = "<strong>" + (sqr[5] ? sqr[5]: "Нет") + "</strong><br> Праця";
	cells[8].innerHTML = "<strong>" + (sqr[8] ? sqr[8]: "Нет") + "</strong><br> Розум";

	let anal = document.getElementById("analysis").children;
	anal[1].innerText = "Характер: " + (sqr[0] ? sqr[0]:"Нет 1") + " - " + decoder[sqr[0] ? sqr[0]: "01"];
	anal[3].innerText = (sqr[3] ? sqr[3]:"Нет 2") + " - " + decoder[sqr[3] ? sqr[3]: "02"];
	anal[5].innerText = (sqr[6] ? sqr[6]:"Нет 3") + " - " + decoder[sqr[6] ? sqr[6]: "03"];
	anal[7].innerText = (sqr[1] ? sqr[1]:"Нет 4") + " - " + decoder[sqr[1] ? sqr[1]: "04"];
	anal[9].innerText = (sqr[4] ? sqr[4]:"Нет 5") + " - " + decoder[sqr[4] ? sqr[4]: "05"];
	anal[11].innerText = (sqr[7] ? sqr[7]:"Нет 6") + " - " + decoder[sqr[7] ? sqr[7]: "06"];
	anal[13].innerText = (sqr[2] ? sqr[2]:"Нет 7") + " - " + decoder[sqr[2] ? sqr[2]: "07"];
	anal[15].innerText = (sqr[5] ? sqr[5]:"Нет 8") + " - " + decoder[sqr[5] ? sqr[5]: "08"];
	anal[17].innerText = (sqr[8] ? sqr[8]:"Нет 9") + " - " + decoder[sqr[8] ? sqr[8]: "09"];

	for (let i = 0; i < 9; i++){
		if (anal[i].innerText.indexOf("undefined") !== -1){
			anal[i].innerText = anal[i].innerText.replace("undefined", "лох квітковий, соре :D");
		}
	}

}

const decoder = {
	"01" : "альтруїст або близький до альтруїзму.",
	"1" : "витончений егоїст.",
	"11" : "близький до егоїзму.",
	"111" : "хороший характер.",
	"1111" : "дуже вольовий, сильний.",
	"11111" : "диктатор, самодур.",
	"111111" : "людина жорстка, в той же час для близької людини може зробити неможливе, з ним дуже важко",
	"02" : "немає біоенергії, канал біоенергії відкритий для інтенсивного набору, ці люди люблять старі речі, непогано ставляться до оточуючих, намагаючись цим самим підживитися від інших, виховані від природи.",
	"2" : "біоенергії досить для життя, але зараз, на даному етапі замало. Спорт обязятелен, чутливий до змін в атмосфері.",
	"22" : "біоенергії досить (вже може лікувати інших).",
	"222" : "хороший екстрасенс",
	"2222" : "цих людей любить протилежну стать і дуже люблять люди зі знаком 666, вони підживлюються.",

	"03" : "дуже охайний або пунктуальний, щось виділяє їх з навколишнього середовища своєю мовою.",
	"3" : "цих людей не турбує порядок, але відносно (хочу роблю, хочу немає), все залежить від настрою.",
	"33" : "схильність до наук, хороші математики, фізики, хіміки, вчені.",
	"333" : "схильність до наук зі збільшеною силою, неможлива педантичність.",

	"04" : "ця людина буде хворіти дуже сильно.",
	"4" : "болітиме, але не сильно, до старості як все.",
	"44" : "дуже міцний чоловік або підвищеного темперамета (сексуальні нахили).",
	"444" : "те ж саме, але з подвоєною енергією.",

	"05" : "відкритий канал при народженні, тому ця людина завжди намагається щось зробити, щось довести, завжди голова в роздумах, сам в експерименті, в розрахунку. Життєвий досвід показує, що з цією людиною важко жити. Все дістається (пробиває) своєю головою.",
	"5" : "канал відкритий, ці люди помилки роблять менше і в житті і взагалі.",
	"55" : "сильно розвинена інтуїція - слідчий і юрист.",
	"555" : "майже ясновидці, помилок не допускають, точно знають, що роблять.",
	"5555" : "ясновидці, все, що відбувається навколо їм ясно. Є моменти, коли вони поза простором і поза просторового часу.",

	"06" : "людина прийшла придбати ремесло, фізична праця необхідний, але він його не любить.",
	"6" : "заземлений, фізична праця є необхідною, можна подумати про навчання.",
	"66" : "дуже заземлений, фізична праця не потрібен, але вони його люблять.",
	"666" : "дуже обов'язкові, темперамент підвищений, партнер, на кому одружений, має бути з великою кількістю двійок, тому що він підживлюється від свого партнера і часто, насосала енергію йде до іншого партнера.",
	"6666" : "ця людина в своїх попередніх втіленнях набрав багато заземленности, він дуже багато працює. Для нього не існує тяжкості праці (фізичної), він завжди працює. Обов'язково потрібен інститут, якщо в розрахунку є 9-ки.",

	"07" : "ця людина народилася, щоб заробляти сімки, а заробити їх можна тільки стараннями. Дуже важке життя. У більшості випадків призведе до релігії.",
	"7" : "божа іскра. Людина живе на багато легше, ніж без трійки, є талант, але неяскраво виражений.",
	"77" : "це дуже сильний знак ангелоподобія, якщо його розвивати повністю. Людина музичний, має художній смак, зможе малювати. Якщо в розрахунку одна-дві сімки, то його егоїзм може керувати ним і його талантом. Він нікому не потрібний. Людина ходить по лезу бритви, йому вдається все, хороше і погане. Для нього немає закритих дверей. Якщо він буде судитися, то йому обов'язково допоможуть виграти процес або витягнути з ями. З дитинства потрібно вчитися альтруїзму.",
	"777" : "знак особливий. Ці люди, як правило, ненадовго прийшли на землю, а якщо ж з жізнедостаткамі, їх чекає в старості паралізація.",
	"7777" : "знак ангела. Люди з цим знаком помирають в дитинстві, якщо залишаються жити, то їхньому життю загрожує смертельна небезпека.",

	"08" : "людина щось візьме, але не поспішає віддавати.",
	"8" : "людина з розвиненим почуттям обов'язку.",
	"88" : "дуже розвинене почуття обов'язку. Завжди бажає допомагати.",
	"888" : "як служіння народу, великий знак.",
	"8888" : "знак буде тільки в 88 році. Діти народжуються з парапсихологическими здібностями, зі знанням точних наук.",

	"09" : "людина не дуже розумний, але готовий до розвитку.",
	"9" : "людина повинна обов'язково розвивати другу дев'ятку.",
	"99" : "у людини з народження розумна голова. Необхідно вчитися.",
	"999" : "людина розумна від природи, слабо вчиться (все дається).",
	"9999" : "прихована істина, зі станом різкого розуму (грубі, немилосердний)."
}