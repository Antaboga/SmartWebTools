// Daftar Nama Acak
const randomNames = [
    "Aveline Setiawan", "Mahesa Wijaya", "Dimas Rahardjo", "Alisha Ramadhan", 
    "Aveline Anggraini", "Fikri Wardhana", "Raditya Santoso", "Anya Rahardjo", 
    "Ilona Suryadi", "Shania Wardhana", "Alisha Rahardjo", "Kirana Susanto", 
    "Arya Kusuma", "Arya Hasan", "Tegar Lestari", "Alisha Suryadi", "Zulfikar Ramadhan",
    "Alisha Setiawan", "Farah Hasan", "Rizky Wardhana", "Ilona Lestari", "Zahra Wijaya", 
    "Rizky Kusuma", "Anya Lestari", "Fikri Wardhana", "Reyhan Nugroho", "Cassandra Rahardjo", 
    "Dewi Rahardjo", "Tegar Lestari", "Dimas Suryadi", "Bima Rahardjo", "Tegar Kusuma", 
    "Leon Firmansyah", "Taufik Wardhana", "Kirana Fauzan", "Leon Suryadi", "Aveline Susanto", 
    "Shania Saputra", "Anya Putri", "Akmal Fauzan", "Alisha Hasan", "Hafiz Nuraini", 
    "Aveline Kusuma", "Farah Ramadhan", "Rizky Wardhana", "Ilona Kusuma", "Arya Rahardjo"
];

const coolNames = [
    "Shadowblade", "Frostfang", "Phoenixflame", "Thunderclaw", "Nightshade", 
    "Ironfang", "Crimsonflare", "Stormshade", "Silverfang", "Darkbane", 
    "Lunarfrost", "Blazeheart", "Nightwing", "Stormstrike", "Ironclaw", 
    "Firestorm", "Darksoul", "Shadowfang", "Emberblade", "Thunderstrike", 
    "Ravenclaw", "Nightflare", "Vortexstorm", "Frostbite", "Ashenstrike", 
    "Soulreaver", "Flamewhisper", "Darkshadow", "Wolfbane", "Steelshade", 
    "Viperfang", "Ironheart", "Fireclaw", "Phantomstrike", "Thunderfury", 
    "Stormbender", "Shadowwhisper", "Frostfire", "Darkflame", "Silverclaw", 
    "Bloodfang", "Stormblade", "Nightwrath", "Shadowstorm", "Blazeclaw", 
    "Thunderwolf", "Ironblade", "Phantomfang", "Darkwind", "Crimsonstorm", 
    "Starstrike", "Silverstorm", "Nightblade", "Voidflare", "Blazebane", 
    "Frostclaw", "Thunderheart", "Mysticblade", "Ironstorm", "Vortexflame", 
    "Flamefury", "Ravenflame", "Stormfang", "Phoenixstrike", "Lunarflare", 
    "Crimsonfang", "Vortexblade", "Shadowfury", "Nightfire", "Stormraven", 
    "Emberstrike", "Ironwhisper", "Phantomfire", "Thunderbane", "Darkflare", 
    "Soulfire", "Crimsonclaw", "Silverstrike", "Frostbane", "Nightfang", 
    "Ironfury", "Flamefang", "Stormfire", "Shadowraven", "Thunderstrike", 
    "Ironshadow", "Phantomstrike", "Stormwolf", "Nightwhisper", "Blazewing", 
    "Stormclaw", "Crimsonflame", "Shadowflare", "Frostheart", "Nightbane", 
    "Blazewind", "Viperblade", "Emberfang", "Stormwhisper", "Shadowlight"
    // Tambahkan nama keren lainnya yang Anda miliki di sini
];

// Nama Khodam
const khodamNames = [
    "Macan pemarah", "Buaya sunda", "Beruang sunda", "Harimau birahi", "Tutup odol", 
    "Tutup panci", "Kaleng kejepit", "Kanebo kering", "Kapal karam", "Gergaji mesin", 
    "Nyi blorong", "Jin rawa rontek", "Kucing Israel", "Capung gila", "Tumis kangkung", 
    "Jam Dinding Rusak", "Gunting Tumpul", "Kasur Empuk", "Payung Robek", "Kulkas Kosong", 
    "Piring Pecah", "Meja Berdecit", "Koper Berat", "Topi Melorot", "Lem Super Lengket", 
    "Keripik Garing", "Senter Mati", "Kue Kering", "Bantal Empuk", "Kendi Air", 
    "Penggaris Melengkung", "Tali Jemuran", "Kancut badak", "Rayap gendut", "Pagar besi", 
    "Kunci gembok", "LC karaoke", "Cicak kawin", "Cupang Betina", "Sundel Bolong", 
    "Tuyul Kesandung", "Genderuwo TikTok", "Jin Susu Kental Manis", "Si Lontong Lumer", 
    "Setan Payung Bocor", "Jin Es Krim Leleh", "Pocong Bersepeda", "Kuntilanak Selfie", 
    "Tuyul Main PS5", "Batu Bata", "Remote TV", "Kompor Meledak", "Helm Nyasar", 
    "Gitar Putus Senar", "Si Sate Klathak", "Genderuwo Tertawa", "Jin Penjual Cilok", 
    "Setan Jualan Online", "Kuntilanak Kecanduan Kopi", "Pocong Nyanyi Dangdut", 
    "Jin Martabak Telor", "Tuyul Kerja Part-Time", "Handuk Basah", "Kipas Rusak", 
    "Jemuran Penuh", "Tisu Gulung", "Gelas Plastik", "Si Bakso Urat", "Setan Suka Drama Korea", 
    "Genderuwo Nonton Netflix", "Jin Donat Kentang", "Kuntilanak Pake Kacamata", 
    "Pocong Mainan Kucing", "Jin Peminum Boba", "Tuyul Bersepatu Roda", "Si Keripik Pedas", 
    "Setan Kolektor Komik", "Genderuwo Pemain Basket", "Jin Sate Madura", "Kuntilanak Nge-Gym", 
    "Pocong Ngantor", "Tuyul Jago Coding", "Si Pizza Keju", "Setan Pemilik Cafe", "Genderuwo Seniman", 
    "Jin Coklat Batangan", "Kuntilanak Hobi Makeup", "Pocong Main TikTok", "Tuyul Kuliah Online", 
    "Si Rambutan Manis", "Sendal Jepit", "Panci Gosong", "Guling Gembung", "Sarung Bantal", 
    "Kaos Oblong", "Jin Kipas Angin", "Setan Pembeli Pulsa", "Kuntilanak Karaoke", 
    "Pocong Joget", "Ember Bocor", "Celana Sobek", "Sepeda Tua", "Telepon Jadul", "Tas Plastik", 
    "Kalender Bekas", "Pensil Inul", "Buku Kusut", "Korek Macet", "Mangkok Retak", "Lemari Penuh"
];

// Fungsi Generator Nama Acak
function generateRandomName() {
    const name = randomNames[Math.floor(Math.random() * randomNames.length)];
    document.getElementById('random-name').textContent = name;
}

// Fungsi Generator Nama Keren
function generateCoolName() {
    const coolName = coolNames[Math.floor(Math.random() * coolNames.length)];
    document.getElementById('cool-name').textContent = coolName;
}

// Fungsi Generator Khodam
function generateKhodam() {
    const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
    document.getElementById('khodam-name').textContent = khodamName;
}

// Fungsi Kalkulator
function appendToScreen(value) {
    document.getElementById('calc-screen').value += value;
}

function clearScreen() {
    document.getElementById('calc-screen').value = '';
}

function calculateResult() {
    const screen = document.getElementById('calc-screen');
    screen.value = eval(screen.value);
}

// Fungsi Cek Baterai
navigator.getBattery().then(function(battery) {
    const batteryStatus = document.getElementById('battery-status');
    batteryStatus.textContent = `Baterai: ${Math.round(battery.level * 100)}% - ${battery.charging ? 'Sedang Mengisi' : 'Tidak Mengisi'}`;
});
