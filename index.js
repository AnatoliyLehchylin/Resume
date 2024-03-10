const langButton = document.getElementById('langButton');
const pdf = document.getElementById('pdf');
const flag = document.getElementById('flag');
const name = document.getElementById('name');

const contactsTitle = document.getElementById('contacts-title');
const location = document.getElementById('location');

const hardSkillTitle = document.getElementById('hard-skill-title');

const educationTitle = document.getElementById('education-title');
const danIt = document.getElementById('dan-it');
const yearGraduated = document.getElementById('year-graduated');
const agrarnyi = document.getElementById('agrarnyi');

const softSkillTitle = document.getElementById('soft-skill-title');
const softSkill1 = document.getElementById('soft-skill-1');
const softSkill2 = document.getElementById('soft-skill-2');
const softSkill3 = document.getElementById('soft-skill-3');

const languages = document.getElementById('languages');
const uaLangText = document.getElementById('ua-lang-text');
const enLangText = document.getElementById('en-lang-text');
const ruLangText = document.getElementById('ru-lang-text');

const experienceTitle = document.getElementById('experience-title');
const experienceText = document.getElementById('experience-text');

const summaryTitle = document.getElementById('summary-title');
const summaryText = document.getElementById('summary-text');

const projectTitle = document.getElementById('project-title');

const chatDevelopment = document.getElementById('chat-development-time');
const chatTechnologies = document.getElementById('chat-technologies');
const chatDescription = document.getElementById('chat-description');
const chatRole = document.getElementById('chat-role');

const pharmacyDevelopment = document.getElementById('pharmacy-development-time');
const pharmacyTechnologies = document.getElementById('pharmacy-technologies');
const pharmacyDescription = document.getElementById('pharmacy-description');
const pharmacyRole = document.getElementById('pharmacy-role');

const carmapDevelopment = document.getElementById('carmap-development-time');
const carmapTechnologies = document.getElementById('carmap-technologies');
const carmapDescription = document.getElementById('carmap-description');

const hierarchyDevelopment = document.getElementById('hierarchy-development-time');
const hierarchyTechnologies = document.getElementById('hierarchy-technologies');
const hierarchyDescription = document.getElementById('hierarchy-description');

const commentsDevelopment = document.getElementById('comments-development-time');
const commentsTechnologies = document.getElementById('comments-technologies');
const commentsDescription = document.getElementById('comments-description');

const shopDevelopment = document.getElementById('shop-development-time');
const shopTechnologies = document.getElementById('shop-technologies');
const shopDescription = document.getElementById('shop-description');
const shopRole = document.getElementById('shop-role');

const cardsDevelopment = document.getElementById('cards-development-time');
const cardsTechnologies = document.getElementById('cards-technologies');
const cardsDescription = document.getElementById('cards-description');
const cardsRole = document.getElementById('cards-role');

const forkioDevelopment = document.getElementById('forkio-development-time');
const forkioTechnologies = document.getElementById('forkio-technologies');
const forkioDescription = document.getElementById('forkio-description');
const forkioRole = document.getElementById('forkio-role');

const humDevelopment = document.getElementById('hum-development-time');
const humTechnologies = document.getElementById('hum-technologies');
const humDescription = document.getElementById('hum-description');
const humRole = document.getElementById('hum-role');

langButton.addEventListener('click', e => {
    const queryParams = new URLSearchParams(window.location.search);
    let activeLang = queryParams.get('lang');

    activeLang === 'en' ? activeLang = 'ua' : activeLang = 'en';
    changeURLLanguage(activeLang);
});

function startLanguage() {
    const queryParams = new URLSearchParams(window.location.search);
    let lang = queryParams.get('lang');
    (lang !== 'en' && lang !== 'ua') && (lang = 'en');
    changeURLLanguage(lang);
}

function changeURLLanguage(lang) {
    const queryParams = {
        lang: lang
    };
    const searchParams = new URLSearchParams();
    for (const key in queryParams) {
        searchParams.append(key, queryParams[key]);
    }
    window.history.replaceState(null, null, window.location.pathname + '?' + searchParams.toString());

    loadLanguage(lang);
}

async function loadLanguage(lang) {
    const response = await fetch(`./Data/${lang}.json`);
    const language = await response.json();

    updateLanguage(language);
}

function updateLanguage(language) {
    flag.src = language.flag;
    pdf.textContent = language.pdfText;
    pdf.href = language.pdf;
    pdf.download = language.pdfName;
    name.textContent = language.name;

    contactsTitle.textContent = language.contactsTitle;
    location.textContent = language.location;

    hardSkillTitle.innerHTML = language.hardSkillTitle;

    educationTitle.textContent = language.educationTitle;
    danIt.textContent = language.danIt;
    yearGraduated.textContent = language.yearGraduated;
    agrarnyi.innerHTML = language.agrarnyi;

    softSkillTitle.innerHTML = language.softSkillTitle;
    softSkill1.textContent = language.softSkill1;
    softSkill2.textContent = language.softSkill2;
    softSkill3.textContent = language.softSkill3;

    languages.textContent = language.languages;
    uaLangText.textContent = language.uaLangText;
    enLangText.textContent = language.enLangText;
    ruLangText.textContent = language.ruLangText;

    experienceTitle.textContent = language.experienceTitle;
    experienceText.innerHTML = language.experienceText;

    summaryTitle.textContent = language.summaryTitle;
    summaryText.innerHTML = language.summaryText;

    projectTitle.textContent = language.projectTitle;

    chatDevelopment.innerHTML = language.chatDevelopment;
    chatTechnologies.innerHTML = language.chatTechnologies;
    chatDescription.innerHTML = language.chatDescription;
    chatRole.innerHTML = language.independentRole;

    pharmacyDevelopment.innerHTML = language.pharmacyDevelopment;
    pharmacyTechnologies.innerHTML = language.pharmacyTechnologies;
    pharmacyDescription.innerHTML = language.pharmacyDescription;
    pharmacyRole.innerHTML = language.pharmacyRole;

    carmapDevelopment.innerHTML = language.carmapDevelopment;
    carmapTechnologies.innerHTML = language.carmapTechnologies;
    carmapDescription.innerHTML = language.carmapDescription;

    hierarchyDevelopment.innerHTML = language.hierarchyDevelopment;
    hierarchyTechnologies.innerHTML = language.hierarchyTechnologies;
    hierarchyDescription.innerHTML = language.hierarchyDescription;

    commentsDevelopment.innerHTML = language.commentsDevelopment;
    commentsTechnologies.innerHTML = language.commentsTechnologies;
    commentsDescription.innerHTML = language.commentsDescription;

    shopDevelopment.innerHTML = language.shopDevelopment;
    shopTechnologies.innerHTML = language.shopTechnologies;
    shopDescription.innerHTML = language.shopDescription;
    shopRole.innerHTML = language.independentRole;

    cardsDevelopment.innerHTML = language.cardsDevelopment;
    cardsTechnologies.innerHTML = language.cardsTechnologies;
    cardsDescription.innerHTML = language.cardsDescription;
    cardsRole.innerHTML = language.independentRole;

    forkioDevelopment.innerHTML = language.forkioDevelopment;
    forkioTechnologies.innerHTML = language.forkioTechnologies;
    forkioDescription.innerHTML = language.forkioDescription;
    forkioRole.innerHTML = language.independentRole;

    humDevelopment.innerHTML = language.humDevelopment;
    humTechnologies.innerHTML = language.humTechnologies;
    humDescription.innerHTML = language.humDescription;
    humRole.innerHTML = language.independentRole;
}

startLanguage();