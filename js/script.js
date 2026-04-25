// Quran verses data
const ayahs = [
    { id: 1, text: "<span class='g' onclick='show(\"غنة\",\"ميم مشددة\")'>عَمَّ</span> يَتَسَا<span class='m' onclick='show(\"مد متصل\",\"يمد 4-5 حركات\")'>ٓءَ</span>لُونَ", tafsir: "عن أي شيء يسأل كفار قريش بعضهم بعضاً؟" },
    { id: 2, text: "عَنِ <span class='g' onclick='show(\"إظهار\",\"نون ساكنة بعدها همزة\")'>ٱلنَّبَإِ</span> ٱلْعَظِيمِ", tafsir: "يسألون عن الخبر العظيم وهو القرآن أو البعث." },
    { id: 3, text: "ٱلَّذِي هُمْ فِيهِ مُخْتَلِفُونَ", tafsir: "الذي اختلفوا فيه بين مصدق ومكذب." },
    { id: 4, text: "كَلَّا سَيَعْلَمُونَ", tafsir: "ليس الأمر كما يزعمون، وسيعرفون عاقبة تكذيبهم." },
    { id: 5, text: "ثُمَّ <span class='g' onclick='show(\"غنة\",\"ميم مشددة\")'>كَلَّا</span> سَيَعْلَمُونَ", tafsir: "تأكيد للوعيد السابق." },
    { id: 6, text: "أَلَمْ نَجْعَلِ ٱلْأَرْضَ مِهَٰدًا", tafsir: "ألم نجعل الأرض ممهدة لكم كالفراش؟" },
    { id: 7, text: "وَٱلْجِبَالَ أَوْ<span class='q' onclick='show(\"قلقلة\",\"التاء ساكنة\")'>تَ</span>ادًا", tafsir: "وجعلنا الجبال كالأوتاد لتثبيت الأرض." },
    { id: 8, text: "وَخَلَقْنَاكُمْ أَزْوَاجًا", tafsir: "وخلقناكم ذكوراً وإناثاً." },
    { id: 9, text: "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا", tafsir: "وجعلنا النوم راحة لأبدانكم وانقطاعاً عن العمل." },
    { id: 10, text: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا", tafsir: "وجعلنا الليل ساتراً لكم بظلامه كاللباس." },
    { id: 11, text: "وَجَعَلْنَا النَّهَارَ مَعَاشًا", tafsir: "وجعلنا النهار وقتاً لكسب المعيشة." },
    { id: 12, text: "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا <span class='g' onclick='show(\"إخفاء\",\"تنوين بعدها شين\")'>شِدَادًا</span>", tafsir: "وبنينا فوقكم سبع سماوات قوية الخلق." },
    { id: 13, text: "وَجَعَلْنَا سِرَاجًا <span class='g' onclick='show(\"إدغام\",\"تنوين بعدها واو\")'>وَهَّاجًا</span>", tafsir: "وجعلنا الشمس سراجاً مضيئاً شديد الحرارة." },
    { id: 14, text: "وَأَنزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً <span class='g' onclick='show(\"إخفاء\",\"تنوين بعدها ثاء\")'>ثَجَّاجًا</span>", tafsir: "وأنزلنا من السحاب مطراً غزيراً." },
    { id: 15, text: "لِّنُخْرِجَ بِهِ حَبًّا <span class='g' onclick='show(\"إدغام\",\"تنوين بعدها واو\")'>وَنَبَاتًا</span>", tafsir: "لنخرج بهذا الماء حبوباً ونباتات." },
    { id: 16, text: "وَجَنَّاتٍ <span class='g' onclick='show(\"إظهار\",\"تنوين بعدها همزة\")'>أَلْفَافًا</span>", tafsir: "وبساتين ملتفة الأشجار لكثرتها." },
    { id: 17, text: "إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا", tafsir: "إن يوم القيامة موعد محدد للفصل بين الخلائق." },
    { id: 18, text: "يَوْمَ يُنفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا", tafsir: "يوم ينفخ في الصور فتبحثون وتأتون جماعات." },
    { id: 19, text: "وَفُتِحَتِ السَّمَا<span class='m' onclick='show(\"مد متصل\",\"4-5 حركات\")'>ٓءُ</span> فَكَانَتْ أَبْوَابًا", tafsir: "وشققت السماء فصارت كالأبواب المفتوحة." },
    { id: 20, text: "وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا", tafsir: "ونسفت الجبال حتى لم يبق لها أثر." },
    { id: 21, text: "إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا", tafsir: "إن جهنم كانت تترصد وتنتظر الكافرين." },
    { id: 22, text: "لِّلطَّاغِينَ مَآبًا", tafsir: "للذين تجاوزوا الحدود، هي مرجع ومأوى." },
    { id: 23, text: "لَّابِثِينَ فِيهَا أَحْقَابًا", tafsir: "ماكثين فيها أزماناً طويلة لا نهاية لها." },
    { id: 24, text: "لَّا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا", tafsir: "لا يجدون ما يبرد حرهم ولا ماءً يروي عطشهم." },
    { id: 25, text: "إِلَّا حَمِيمًا وَغَسَّاقًا", tafsir: "إلا ماءً حاراً وصديداً يسيل من جلودهم." },
    { id: 26, text: "جَزَاءً وِفَاقًا", tafsir: "جزاء عادلاً يوافق أعمالهم السيئة." },
    { id: 27, text: "إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا", tafsir: "لأنهم كانوا لا يؤمنون بالبعث ولا يخافون الحساب." },
    { id: 28, text: "وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا", tafsir: "وكذبوا بآيات الله تكذيباً شديداً." },
    { id: 29, text: "وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا", tafsir: "وكل شيء فعلوه سجلناه في كتاب." },
    { id: 30, text: "فَذُوقُوا فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا", tafsir: "يقال لهم: ذوقوا العذاب فلن نزيدكم إلا عذاباً فوق عذابكم." },
    { id: 31, text: "إِنَّ لِلْمُتَّقِينَ مَفَازًا", tafsir: "إن للذين خافوا الله فوزاً بالجنة." },
    { id: 32, text: "حَدَائِقَ وَأَعْنَابًا", tafsir: "لهم فيها بساتين وأعناب." },
    { id: 33, text: "وَكَوَاعِبَ أَتْرَابًا", tafsir: "وزوجات مطهرات متساويات في السن." },
    { id: 34, text: "وَكَأْسًا دِهَاقًا", tafsir: "وكأساً مملوءة بالشراب الصافي." },
    { id: 35, text: "لَّا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّابًا", tafsir: "لا يسمعون في الجنة كلاماً باطلاً ولا كذباً." },
    { id: 36, text: "جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا", tafsir: "هذا هو جزاؤهم وعطاء الله الكافي لهم." },
    { id: 37, text: "رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الرَّحْمَٰنِ لَا يَمْلِكُونَ مِنْهُ خِطَابًا", tafsir: "خالق السماوات والأرض، لا يجرؤ أحد على سؤاله إلا بإذنه." },
    { id: 38, text: "يَوْمَ يَقُومُ الرُّوحُ وَالْمَلَائِكَةُ صَفًّا لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ الرَّحْمَنُ وَقَالَ صَوَابًا", tafsir: "يوم يقف جبريل والملائكة صفوفاً خاشعين لله." },
    { id: 39, text: "ذَلِكَ الْيَوْمُ الْحَقُّ فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا", tafsir: "ذلك هو اليوم الذي لابد من وقوعه، فليعمل كل إنسان للرجوع لله." },
    { id: 40, text: "إِنَّا أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا يَوْمَ يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنتُ تُرَابًا", tafsir: "حذّرناكم من عذاب يوم القيامة القريب، حيث يتمنى الكافر لو كان تراباً من شدة الندم." }
];

// Entry to the app
function enterApp() {
    console.log('Button clicked!');
    const entryPage = document.getElementById('entry-page');
    const mainApp = document.getElementById('mainApp');
    
    if (!entryPage || !mainApp) {
        console.error('Required elements not found');
        return;
    }
    
    entryPage.style.opacity = '0';
    entryPage.style.pointerEvents = 'none';
    
    setTimeout(() => {
        entryPage.style.display = 'none';
        mainApp.style.display = 'flex';
        renderAyahs();
    }, 800);
}

// Render all Quran verses
function renderAyahs() {
    const container = document.getElementById('quranBody');
    ayahs.forEach(a => {
        const div = document.createElement('div');
        div.className = 'ayah-box';
        div.innerHTML = `
            <div class="ayah-text">${a.text} <small style="color:var(--gold)">(${a.id})</small></div>
            <button class="btn" onclick="show('التفسير', '${a.tafsir.replace(/'/g, "\\'")}')">📖 التفسير</button>
            <button class="btn" onclick="playAudio(${a.id})">🔊 استماع</button>
        `;
        container.appendChild(div);
    });
}

// Show modal with info
function show(title, body) {
    if (event) event.stopPropagation();
    document.getElementById('mTitle').innerText = title;
    document.getElementById('mBody').innerText = body;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Open an image in the modal
function openImage(src) {
    document.getElementById('mTitle').innerText = '';
    document.getElementById('mBody').innerHTML = '<img src="' + src + '" style="max-width:100%;height:auto;border-radius:10px;">';
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Audio player
let audio = null;
function playAudio(id) {
    if (audio) audio.pause();
    // Files are named with zero-padded numbers: 001.ogg, 002.ogg, ...
    const num = String(id).padStart(3, '0');
    const filename = `audio/${num}.ogg`;
    audio = new Audio(filename);
    audio.play().catch(err => console.error('Audio play failed:', err));
}
