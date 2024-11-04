const translations = {
    en: {
        home: "Home",
        services: "Services",
        about: "About Us",
        contact: "Contact Us",
        carouselTitle1: "B.I.M Visualization Co., Ltd",
        carouselText1: "We provide BIM cost management, design, and construction services.",
        aboutTitle: "Welcome to B.I.M Visualization",
        aboutText: "We aim to provide BIM solutions between Japan and Vietnam.",
        footerText: "Contact us now to receive special prices and high-quality services.",
        about12:"Providing excellent talent to meet industry needs."
    },
    ja: {
        home: "ホームページ",
        services: "サービス",
        about: "会社概要",
        contact: "お問い合わせ",
        carouselTitle1: "B.I.Mビジュアライゼーション株式会社",
        carouselText1: "私たちはBIMのコスト管理・設計・施工図に関するサービスを提供しています。",
        aboutTitle: "B.I.Mビジュアライゼーションへようこそ",
        aboutText: "日本とベトナムの間でBIMソリューションを提供することを目指しています。",
        footerText: "今すぐお問い合わせいただき、特別価格と質の高いサービスをお受け取りください。",
        about12:"業界のニーズに応える優れた人材を提供"
    }
};

let currentLang = 'ja';

function changeLanguage() {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';

    // Cập nhật navbar
    document.querySelector('.nav-link.active').textContent = translations[currentLang].home;
    document.querySelector('.nav-item:nth-child(2)').textContent = translations[currentLang].services;
    document.querySelector('.nav-item:nth-child(3)').textContent = translations[currentLang].about;
    document.querySelector('.nav-item:nth-child(4)').textContent = translations[currentLang].contact;

    // Cập nhật carousel
    document.querySelector('.carousel-item.active h1').textContent = translations[currentLang].carouselTitle1;
    document.querySelector('.carousel-item.active p').textContent = translations[currentLang].carouselText1;

    // Cập nhật phần giới thiệu
    document.querySelector('.display-6').textContent = translations[currentLang].aboutTitle;
    document.querySelector('.bg-light p').textContent = translations[currentLang].aboutText;

    // Cập nhật footer
    document.querySelector('.footer p').textContent = translations[currentLang].footerText; // Cập nhật selector cho footer nếu cần
}

document.getElementById('langToggle').addEventListener('click', changeLanguage);
