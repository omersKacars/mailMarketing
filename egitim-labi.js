const themeToggle = document.getElementById("themeToggle");
const pinGate = document.getElementById("pinGate");
const pinGateForm = document.getElementById("pinGateForm");
const pinInput = document.getElementById("pinInput");
const pinGateMessage = document.getElementById("pinGateMessage");
const protectedHeader = document.getElementById("protectedHeader");
const protectedMain = document.getElementById("protectedMain");
const protectedFooter = document.getElementById("protectedFooter");
const guidePlatform = document.getElementById("guidePlatform");
const guideBusiness = document.getElementById("guideBusiness");
const guideGoal = document.getElementById("guideGoal");
const guideTeam = document.getElementById("guideTeam");
const guideTraffic = document.getElementById("guideTraffic");
const guideScenarioTitle = document.getElementById("guideScenarioTitle");
const guideScenarioText = document.getElementById("guideScenarioText");
const guideWhyText = document.getElementById("guideWhyText");
const guideChecklistList = document.getElementById("guideChecklistList");
const guideStepPlanList = document.getElementById("guideStepPlanList");
const guideWeekPlanList = document.getElementById("guideWeekPlanList");
const readyScenarioButtons = document.querySelectorAll(".ready-scenario");
const roadmapCompletedCount = document.getElementById("roadmapCompletedCount");
const roadmapProgressPercent = document.getElementById("roadmapProgressPercent");
const roadmapStatusText = document.getElementById("roadmapStatusText");
const roadmapProgressBar = document.getElementById("roadmapProgressBar");
const roadmapCoachTip = document.getElementById("roadmapCoachTip");
const roadmapLevelText = document.getElementById("roadmapLevelText");
const roadmapScoreText = document.getElementById("roadmapScoreText");
const roadmapResetButton = document.getElementById("roadmapResetButton");
const roadmapStagesContainer = document.getElementById("roadmapStagesContainer");
const generateSummaryButton = document.getElementById("generateSummaryButton");
const copySummaryButton = document.getElementById("copySummaryButton");
const printSummaryButton = document.getElementById("printSummaryButton");
const summaryOutput = document.getElementById("summaryOutput");
const flowMapList = document.getElementById("flowMapList");
const stageScoreChart = document.getElementById("stageScoreChart");

const THEME_KEY = "emailgrowth-theme";
const TRAINING_LAB_PIN = "Qq123456.@";
const TRAINING_LAB_PIN_UNLOCK_KEY = "emailgrowth-training-lab-unlocked";
const GUIDE_CONFIG_KEY = "emailgrowth-training-guide-config";
const ROADMAP_PROGRESS_KEY = "emailgrowth-roadmap-stage-progress-v2";

const LABELS = {
  platform: {
    html: "HTML Tabanlı Site",
    wordpress: "WordPress",
    woocommerce: "WooCommerce",
    wix: "Wix",
    shopify: "Shopify",
  },
  business: {
    education: "Eğitim",
    marketing: "Pazarlama Ajansı",
    realestate: "Emlak",
    coaching: "Koçluk / Danışmanlık",
    saas: "SaaS / Yazılım",
  },
  goal: {
    lead: "Lead Toplama",
    sales: "Satış Artışı",
    retention: "Müşteri Tutma",
    reactivation: "Pasif Listeyi Canlandırma",
    awareness: "Marka Bilinirliği",
    appointment: "Randevu / Demo Artışı",
    upsell: "Upsell / Cross-sell",
    newsletter: "Bülten ve Topluluk Büyümesi",
    deliverability: "Teslimat Sağlığı (Deliverability)",
  },
  team: {
    solo: "Tek Kişi",
    small: "Küçük Ekip",
    medium: "Orta Ekip",
    agency: "Ajans Yapısı",
  },
  traffic: {
    low: "Düşük Trafik",
    mid: "Orta Trafik",
    high: "Yüksek Trafik",
  },
};

const PLATFORM_CHECKLIST = {
  html: [
    "Klaviyo scriptleri ve form tetikleyicileri tüm kritik sayfalarda test edilir.",
    "Popup açılma/kapama davranışı farklı cihazlarda doğrulanır.",
    "Form submit ve profile identify event eşleşmesi denetlenir.",
  ],
  wordpress: [
    "Klaviyo eklentisi ve API bağlantısı canlıda doğrulanır.",
    "WPForms/GravityForms alan-map eşleşmesi kontrol edilir.",
    "Sayfa hızı ve popup gecikme stratejisi optimize edilir.",
  ],
  woocommerce: [
    "Ürün, sepet, sipariş senkronu eksiksiz çalışır.",
    "Added to cart/checkout eventleri gerçek siparişle test edilir.",
    "Abandoned cart akışları test siparişiyle doğrulanır.",
  ],
  wix: [
    "Klaviyo uygulaması bağlanır ve veri akışı test edilir.",
    "Wix formlarının listeye düşüşü ve kaynak etiketleri doğrulanır.",
    "Popup kapanış oranına göre teaser varyasyonu hazırlanır.",
  ],
  shopify: [
    "Shopify-Klaviyo entegrasyonu ile catalog/sipariş sync doğrulanır.",
    "Product/collection davranış eventleri izlendiği doğrulanır.",
    "Checkout abandon tetikleyicileri test edilir.",
  ],
};

const BUSINESS_CHECKLIST = {
  education: [
    "Lead magnet olarak ücretsiz ders veya rehber sunulur.",
    "Welcome serisi ile eğitmen güveni ve içerik kalitesi gösterilir.",
    "Ders ilgisi ve satın alma niyetine göre segmentler kurulur.",
  ],
  marketing: [
    "Hizmet paketlerine göre teklif odaklı segment mimarisi kurulur.",
    "Case study ve dönüşüm sonuçları ile nurture akışı hazırlanır.",
    "Müşteriye aylık ROI/pipeline etkisi raporlanır.",
  ],
  realestate: [
    "Lokasyon, bütçe ve oda ihtiyacına göre segmentleme yapılır.",
    "Yeni ilan ve fiyat düşüş kampanya akışları devreye alınır.",
    "Yüksek ziyaret ama form bırakmayanlara follow-up çalıştırılır.",
  ],
  coaching: [
    "Ön görüşme rezervasyonu için teklif odaklı lead sistemi kurulur.",
    "Güven odaklı referans ve hikaye içerikleri otomasyona eklenir.",
    "Yüksek niyetli kullanıcıya birebir teklif akışı tanımlanır.",
  ],
  saas: [
    "Trial başlayan kullanıcı için onboarding serisi çalıştırılır.",
    "Özellik kullanımına göre lifecycle segmentleri oluşturulur.",
    "İnaktif trial kullanıcıları için reactivation akışı kurgulanır.",
  ],
};

const GOAL_RATIONALES = {
  lead: "Bu plana göre ilk odak form dönüşüm oranı, yeni abone maliyeti ve nitelikli lead oranıdır.",
  sales: "Bu planda temel öncelik e-posta kaynaklı gelir, sepet dönüşümü ve kampanya ROI artışıdır.",
  retention: "Bu plana göre tekrar satın alım sıklığı, müşteri yaşam boyu değeri ve churn düşüşü izlenir.",
  reactivation: "Bu planda inaktif listenin geri kazanımı, açılma artışı ve unsubscribe düşüşü hedeflenir.",
  awareness: "Bu planda marka görünürlüğü, içerik tüketimi ve kaliteli etkileşim artışı hedeflenir.",
  appointment: "Bu planda asıl hedef görüşme/demo takvimine giren kullanıcı sayısını artırmaktır.",
  upsell: "Bu planda mevcut müşteriden daha yüksek sepet değeri ve ek ürün satışı hedeflenir.",
  newsletter: "Bu planda düzenli içerik takibi yapan sadık bülten topluluğu büyütülür.",
  deliverability: "Bu planda spam riski düşürülür, inbox yerleşimi ve gönderim sağlığı güçlendirilir.",
};

const TEAM_RHYTHM = {
  solo: "Haftalık ritim: 1 ana flow optimizasyonu + 1 kampanya + 1 mini rapor.",
  small: "Haftalık ritim: teknik/içerik/rapor rolleri paylaştırılarak sprint yapılır.",
  medium: "Haftalık ritim: A/B test backlog'u ve görev panosu ile ilerlenir.",
  agency: "Haftalık ritim: müşteri bazlı SOP, dashboard ve rutin toplantı standardize edilir.",
};

const TRAFFIC_NOTES = {
  low: "Düşük trafikte öncelik kaliteli lead toplama ve teklif netliğidir.",
  mid: "Orta trafikte segmentasyon + otomasyon optimizasyonu hızlı kazanç üretir.",
  high: "Yüksek trafikte gönderim frekansı ve deliverability kontrolü kritikleşir.",
};

const STAGE_LIBRARY = [
  {
    id: 1,
    title: "Aşama 1: Keşif ve Teknik Kurulum",
    scoreWeight: 18,
    problem: "Trafik var ama satışa dönmüyor, gönderimler spam riskinde.",
    why: "Veri akışı düzgün kurulmazsa sonraki tüm aşamalar yanlış veriyle çalışır.",
    actions: [
      "Platform entegrasyonunu tamamla ve veri akışını canlı test et.",
      "Gönderici domain DNS kayıtlarını doğrula.",
      "Varsa eski listeleri temizleyip etiketli şekilde içeri aktar.",
    ],
    requiredChecklist: [
      "Temel eventler (view, form, add-to-cart) doğru aktarılıyor.",
      "Profil alan eşleşmeleri doğru adlarla tanımlandı.",
    ],
    optionalChecklist: [
      "Spam/deliverability kontrol listesi dokümante edildi.",
      "UTM standartları belirlendi.",
    ],
    kpiTargets: ["Event doğruluğu: %95+", "Bounce oranı: <%2"],
    commonMistakes: ["Yanlış alan eşlemesi", "Test etmeden canlıya geçiş"],
    learningTip: "İlk kez kurulum yapıyorsan önce sadece temel eventleri doğrula, sonra ileri ayarlara geç.",
  },
  {
    id: 2,
    title: "Aşama 2: Liste Büyütme (Lead Gen)",
    scoreWeight: 14,
    problem: "Liste büyümüyor, ziyaretçiler dönüşmeden çıkıyor.",
    why: "Liste büyümezse otomasyon ve kampanya hacmi dar kalır.",
    actions: [
      "Welcome popup + exit intent + teaser kombinasyonu kur.",
      "Teklif metnini iş koluna göre netleştir.",
      "Form alanlarını minimum sürtünme ile düzenle.",
    ],
    requiredChecklist: [
      "Welcome popup tetikleme süresi test edildi.",
      "Exit intent popup dönüşüm oranı ölçülüyor.",
    ],
    optionalChecklist: [
      "Farklı teklif metni A/B testi tanımlandı.",
      "Mobil popup görünüm kontrolü tamamlandı.",
    ],
    kpiTargets: ["Form dönüşüm oranı: %2-6", "Aylık abone artışı: +%10"],
    commonMistakes: ["Aşırı uzun form", "Belirsiz teklif metni"],
    learningTip: "Önce tek bir teklif metniyle başla; veri geldikçe A/B testi ekle.",
  },
  {
    id: 3,
    title: "Aşama 3: Otomasyonlar (Flows)",
    scoreWeight: 24,
    problem: "Sepetler terk ediliyor, yeni ve eski müşteri akışı zayıf.",
    why: "Gelirin sürdürülebilirliği için otomasyon omurgası şarttır.",
    actions: [
      "Welcome, Abandoned Cart, Browse Abandonment ve Win-Back akışlarını kur.",
      "Her flow için gecikme ve teklif mantığını test et.",
      "Açılma-tıklama-gelir kırılımını flow bazında izlemeye al.",
    ],
    requiredChecklist: [
      "4 temel flow aktif ve test edildi.",
      "Flow tetikleyici/filtre koşulları doğrulandı.",
    ],
    optionalChecklist: [
      "Flow içi konu satırı testi başlatıldı.",
      "Flow email sırası davranışa göre kişiselleştirildi.",
    ],
    kpiTargets: ["Flow kaynaklı gelir: toplamın %20+", "Abandoned cart geri dönüş: %8+"],
    commonMistakes: ["Çakışan tetikleyiciler", "Aynı kişiye aşırı gönderim"],
    learningTip: "Flow kurarken tek seferde 4 akış yerine önce 1 akışı canlıya alıp test etmen daha güvenli olur.",
  },
  {
    id: 4,
    title: "Aşama 4: Segmentasyon",
    scoreWeight: 16,
    problem: "Herkese aynı mesaj gidiyor, açılma ve tıklama düşüyor.",
    why: "Segmentasyon, aynı bütçeyle daha yüksek etki üretir.",
    actions: [
      "Engaged, VIP, Window Shoppers, Unengaged segmentlerini kur.",
      "Mesaj tonunu ve teklifi segment bazlı farklılaştır.",
      "Pasif segmentte gönderim baskısını azalt.",
    ],
    requiredChecklist: [
      "4 ana segment canlı listede mevcut.",
      "Unengaged için gönderim sınır kuralı aktif.",
    ],
    optionalChecklist: [
      "RFM benzeri ek segment üretildi.",
      "Segment bazlı kampanya takvimi hazırlandı.",
    ],
    kpiTargets: ["Açılma oranı artışı: +%15", "Unsubscribe düşüşü: -%20"],
    commonMistakes: ["Segment koşullarını güncellememek", "Aşırı dar segment"],
    learningTip: "Segment sayısını başta az tut; her segmentin ne işe yaradığını net anlayınca genişlet.",
  },
  {
    id: 5,
    title: "Aşama 5: Kampanyalar (Manuel)",
    scoreWeight: 14,
    problem: "Özel dönem kampanyaları sistematik yürümüyor.",
    why: "Kampanyalar kısa vadede nakit akışını hızlandırır.",
    actions: [
      "Mobil uyumlu kampanya şablonu oluştur.",
      "Konu satırı ve teklif kopyasında A/B test başlat.",
      "Smart send time ile gönderim zamanlamasını optimize et.",
    ],
    requiredChecklist: [
      "Kampanya şablonu mobil uyum testinden geçti.",
      "En az 1 A/B test aktif.",
    ],
    optionalChecklist: [
      "Segment bazlı kampanya varyasyonu hazırlandı.",
      "Görsel/CTA ısı haritası değerlendirmesi yapıldı.",
    ],
    kpiTargets: ["Kampanya gelir katkısı: +%10", "CTR: %2+"],
    commonMistakes: ["Tek başlığa bağımlı kalma", "Gönderim sıklığını kontrol etmemek"],
    learningTip: "Kampanya gönderirken önce küçük bir segmente test gönderip sonra tüm listeye aç.",
  },
  {
    id: 6,
    title: "Aşama 6: Raporlama ve Optimizasyon",
    scoreWeight: 14,
    problem: "Yapılan işin ölçülebilir iş etkisi net görünmüyor.",
    why: "Ölçüm yoksa optimizasyon sürdürülebilir olmaz.",
    actions: [
      "Aylık dashboard ile kanal katkılarını netleştir.",
      "Yeni abone, flow geliri, kampanya geliri KPI seti oluştur.",
      "Düşen metrikler için sonraki ay test planı çıkar.",
    ],
    requiredChecklist: [
      "Aylık rapor şablonu oluşturuldu.",
      "Sonraki ay için en az 3 test hipotezi yazıldı.",
    ],
    optionalChecklist: [
      "Müşteri toplantı notu standardı oluşturuldu.",
      "Karşılaştırmalı aylık trend raporu çıkarıldı.",
    ],
    kpiTargets: ["E-posta gelir payı: %20-%40", "Aksiyon alınan test sayısı: 3+"],
    commonMistakes: ["Sadece vanity metric takip etmek", "Öğrenimleri dokümante etmemek"],
    learningTip: "Her raporun sonunda tek bir iyileştirme kararı yaz; ilerleme daha görünür olur.",
  },
];

let currentGuideConfig = {
  platform: "html",
  business: "education",
  goal: "lead",
  team: "solo",
  traffic: "low",
};
let stageState = {};
const STAGE_COLORS = [
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-teal-500",
  "from-indigo-500 to-violet-500",
  "from-fuchsia-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-red-500",
];

const SCENARIO_STAGE_OVERRIDES = {
  platform: {
    html: {
      1: {
        actions: ["Özel kod yerleşimleri için event scriptlerini şablon dosyalarda merkezi yönet."],
      },
    },
    wordpress: {
      1: {
        requiredChecklist: ["WordPress eklenti ayar ekranında API bağlantı testi başarılı."],
        actions: ["WP eklentileri çakışma riskini kontrol etmek için staging ortamında test yap."],
      },
      2: {
        actions: ["WPForms/GravityForms lead alanlarını Klaviyo özellikleriyle eşleştir."],
      },
    },
    woocommerce: {
      3: {
        requiredChecklist: ["Terk edilmiş sepet akışı canlı test siparişi ile doğrulandı."],
        actions: ["Ürün varyasyonları için sepet event payload doğruluğunu kontrol et."],
      },
    },
    wix: {
      2: {
        actions: ["Wix popup tetikleyicilerini mobil/desktop için ayrı optimize et."],
      },
    },
    shopify: {
      3: {
        actions: ["Shopify checkout abandon ve browse abandon akışlarını koleksiyon bazında ayrıştır."],
      },
      5: {
        actions: ["Shopify kampanya takvimini koleksiyon sezonluluğuna göre planla."],
      },
    },
  },
  business: {
    education: {
      2: { actions: ["Lead magnet olarak ücretsiz mini ders veya PDF rehber kullan."] },
      3: { actions: ["Welcome serisine eğitim müfredatı ve başarı hikayesi ekle."] },
    },
    marketing: {
      3: { actions: ["Case study odaklı otomasyon email serisi oluştur."] },
      6: { actions: ["Aylık raporda müşteriye pipeline ve ROI etkisini net göster."] },
    },
    realestate: {
      4: { actions: ["Lokasyon, bütçe ve oda tipine göre segmentleri alt gruplara ayır."] },
      5: { actions: ["Yeni ilan / fiyat düşüş kampanyalarını tetikleyici bazlı gönder."] },
      1: {
        actions: [
          "Site formlarında semt, bütçe ve oda sayısı alanlarını standartlaştır.",
          "Lead kaynaklarını (ilan sayfası, ana sayfa, kampanya) ayrı etiketle.",
        ],
        requiredChecklist: [
          "Emlak lead formlarında zorunlu alanlar sadeleştirildi.",
          "Lead kaynağı etiketi CRM/Klaviyo tarafında görünür.",
        ],
      },
      2: {
        actions: [
          "Popupta ücretsiz bölge analiz raporu veya yeni ilan bildirimi teklifi sun.",
          "Çıkış niyeti popup'ında tek CTA kullan: 'Bana Uygun İlanları Gönder'.",
        ],
        kpiTargets: ["Lead form dönüşümü: %3-8", "Yeni emlak lead artışı: +%12"],
      },
      3: {
        actions: [
          "Yeni lead için 3 adımlı tanışma serisi kur: ihtiyaç, bölge, uygun portföy.",
          "İlan görüntüleyip başvurmayan kişilere hatırlatma akışı tanımla.",
        ],
      },
      6: {
        actions: [
          "Aylık raporda: yeni lead, randevuya dönüşen lead, satışa giden lead metriklerini ayır.",
          "Düşük dönüşen bölge/segment için yeni hipotez belirle.",
        ],
        learningTip: "Öğrenen için kritik metrik: lead sayısı değil, randevuya dönen lead oranıdır.",
      },
    },
    coaching: {
      2: { actions: ["Ön görüşme randevusu toplayan kısa form kurgusu kullan."] },
      5: { actions: ["Koçluk kampanyalarında güven unsuru (yorum/sonuç) vurgusunu artır."] },
      1: {
        actions: [
          "Koçluk teklifini tek cümlede netleştir: kim için, hangi sonuç?",
          "Form alanlarını minimumda tut: ad, e-posta, hedef.",
        ],
      },
      3: {
        actions: [
          "Lead geldikten sonra 3 maillik güven serisi oluştur: hikaye, yöntem, sonuç.",
          "Randevu alıp katılmayanlara nazik hatırlatma akışı ekle.",
        ],
        requiredChecklist: [
          "Ön görüşme linki tüm ilgili maillerde görünür.",
          "No-show hatırlatma akışı aktif.",
        ],
      },
      4: {
        actions: [
          "Hedefe göre segmentle: kariyer, iş kurma, performans, yaşam dengesi.",
          "Yüksek niyetli segmentte birebir davet mesajı kullan.",
        ],
      },
      6: {
        actions: [
          "Aylık raporda: ön görüşme talebi, görüşmeye katılım, programa kayıt metriklerini takip et.",
          "Kayıt dönüşümü düşükse teklif netliğini ve sosyal kanıtı güncelle.",
        ],
      },
    },
    saas: {
      3: { actions: ["Trial onboarding adımlarını ürün içi kullanım davranışına bağla."] },
      6: { actions: ["Activation ve conversion metriklerini aylık raporda ayrı takip et."] },
      1: {
        actions: [
          "Signup, activation, paywall ve upgrade eventlerini standart isimlerle tanımla.",
          "Plan türü ve kullanıcı rolü gibi profil alanlarını map et.",
        ],
        requiredChecklist: [
          "Activation eventi net tanımlandı (örn. ilk proje oluşturma).",
          "Trial kullanıcılar ve ücretli kullanıcılar ayrı segmentlenebilir durumda.",
        ],
      },
      2: {
        actions: [
          "Landing sayfasında ürün demosu veya trial teklifi ile lead popup kur.",
          "Çıkış popup'ında '14 gün ücretsiz dene' gibi düşük riskli teklif kullan.",
        ],
      },
      4: {
        actions: [
          "Segmentleri kullanım davranışına göre ayır: aktif trial, pasif trial, power user.",
          "Ürün özelliği bazlı ipucu mailleriyle segmentlere farklı mesaj ver.",
        ],
      },
      5: {
        actions: [
          "Kampanyalarda özellik lansmanı ve kullanım senaryosu odaklı içerik kullan.",
          "Konu satırı testinde ürün faydası + sonuç kombinasyonlarını dene.",
        ],
      },
    },
  },
  goal: {
    lead: {
      2: { kpiTargets: ["Lead form dönüşüm oranı: %3-7", "Nitelikli lead oranı: %40+"], },
    },
    sales: {
      3: { kpiTargets: ["Flow kaynaklı satış katkısı: %25+", "Sepet geri kazanım: %10+"], },
      5: { kpiTargets: ["Kampanya gelir artışı: +%15", "Kampanya dönüşüm oranı: %1.5+"], },
    },
    retention: {
      4: { kpiTargets: ["Tekrar satın alım oranı: +%12", "Pasifleşme oranı: -%15"], },
      6: { actions: ["Retention cohort takibiyle segment yenileme planı oluştur."] },
    },
    reactivation: {
      3: { actions: ["Win-back akışına geri dönüş teklif varyasyonları ekle."] },
      6: { kpiTargets: ["Reaktivasyon açılma artışı: +%20", "İnaktif listeden dönüş: %5+"], },
    },
  },
};

const TEAM_STAGE_OVERRIDES = {
  solo: {
    1: { actions: ["Tek kişi çalışıyorsan kurulum adımlarını kontrol listesiyle sıraya koy ve tek tek ilerle."] },
    2: { actions: ["Lead toplama varlıklarını önce tek popup ile başlat, sonra ikinci varyasyonu ekle."] },
    3: { actions: ["İlk hafta sadece 1 kritik flow'u canlıya al, sonraki hafta diğerlerini ekle."] },
    4: { actions: ["Segment sayısını düşük tut (en fazla 3-4 segment) ve yönetilebilir kal."] },
    5: { actions: ["Aylık kampanya sayısını azaltıp kaliteyi artır: az ama net mesaj gönder."] },
    6: { actions: ["Raporu kısa tut: 3 metrik + 3 aksiyon kuralı uygula."] },
  },
  small: {
    1: { actions: ["Teknik, içerik ve rapor sorumluluğunu ekip içinde açıkça paylaştır."] },
    2: { actions: ["Popup metin testlerini içerik sorumlusu haftalık takip etsin."] },
    3: { actions: ["Flow kontrolü için ekip içi haftalık kalite kontrol toplantısı yap."] },
    4: { actions: ["Segment bakım sorumlusu belirleyip aylık güncelleme takvimi oluştur."] },
    5: { actions: ["Kampanya yayın öncesi ekip içi kontrol (başlık, link, mobil) uygula."] },
    6: { actions: ["Haftalık mini dashboard, aylık detay rapor düzeni kur."] },
  },
  medium: {
    1: { actions: ["Staging > canlı geçiş sürecini kontrol kapılarıyla standartlaştır."] },
    2: { actions: ["Lead form/popup testlerini sprint backlog'una KPI ile yaz."] },
    3: { actions: ["Her flow için owner ata ve SLA belirle (hata düzeltme süresi)."] },
    4: { actions: ["Segment performansını iki haftada bir karşılaştırmalı analiz et."] },
    5: { actions: ["A/B test sonuçlarını merkezi bir test kayıt tablosunda tut."] },
    6: { actions: ["Yönetim özeti + operasyon özeti şeklinde iki katmanlı raporlama yap."] },
  },
  agency: {
    1: { actions: ["Müşteri onboarding SOP'si ile tüm teknik kurulumu şablonlaştır."] },
    2: { actions: ["Lead toplama teklif setlerini sektör bazlı reusable paketlere ayır."] },
    3: { actions: ["Flow mimarisini müşteri tipine göre playbook olarak standardize et."] },
    4: { actions: ["Tüm müşterilerde ortak segment isimlendirme standardı uygula."] },
    5: { actions: ["Kampanya kalite kontrolünü ajans içi yayın checklist'i ile yönet."] },
    6: { actions: ["Müşteri raporlarını tek formatta üret: performans + aksiyon + risk."] },
  },
};

const TRAFFIC_STAGE_OVERRIDES = {
  low: {
    1: { kpiTargets: ["Event doğruluğu: %95+", "Veri kaybı: <%3"] },
    2: { actions: ["Düşük trafikte teklif netliğini artırmak için tek güçlü CTA kullan."] },
    3: { actions: ["Az trafik için kısa ve net flow serileri kurgula (2-3 mail)."] },
    4: { actions: ["Çok dar segmentlerden kaçın, yeterli hacim oluştur."] },
    5: { actions: ["Daha az gönderim, daha yüksek içerik kalitesi prensibini uygula."] },
    6: { actions: ["Haftalık yerine iki haftalık trend bakarak yanıltıcı dalgalanmadan kaçın."] },
  },
  mid: {
    1: { actions: ["Orta trafikte event kalitesi yanında veri zenginliğini de artır."] },
    2: { actions: ["Popup varyasyonlarını düzenli test ederek dönüşüm farkını ölç."] },
    3: { actions: ["Flow dallanmalarını temel davranışlara göre artır (tıklayan/tıklamayan)."] },
    4: { actions: ["Segment bazlı teklif farklılaştırmasını aktif kullan."] },
    5: { actions: ["Gönderim saatini segment davranışına göre optimize et."] },
    6: { actions: ["Aylık raporda segment performansını ayrı tabloyla göster."] },
  },
  high: {
    1: { actions: ["Yüksek trafikte veri governance kuralları ve naming standardı zorunlu olmalı."] },
    2: { actions: ["Frekans sınırı olmadan popup kullanma; kullanıcı yorgunluğunu önle."] },
    3: { actions: ["Flow çakışmalarını önlemek için öncelik sırası ve bastırma kuralları tanımla."] },
    4: { actions: ["Yüksek hacimde segmentleri yaşam döngüsü + değer bazında katmanlandır."] },
    5: { actions: ["Kampanya frekans cap uygula, deliverability riskini azalt."] },
    6: { actions: ["Inbox placement ve spam şikayetlerini rapora dahil et."] },
    kpiTargets: ["Spam şikayeti: <%0.1", "Inbox yerleşimi: %90+"],
  },
};

function setTheme(mode) {
  const isDark = mode === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️ Aydınlık" : "🌙 Koyu";
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    setTheme(savedTheme);
    return;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach((item) => observer.observe(item));
}

function toggleProtectedTrainingContent(isUnlocked) {
  if (protectedHeader) protectedHeader.classList.toggle("hidden", !isUnlocked);
  if (protectedMain) protectedMain.classList.toggle("hidden", !isUnlocked);
  if (protectedFooter) protectedFooter.classList.toggle("hidden", !isUnlocked);
  if (pinGate) pinGate.classList.toggle("hidden", isUnlocked);
}

function setupPinGate() {
  if (!pinGate || !pinGateForm) return;
  const alreadyUnlocked = sessionStorage.getItem(TRAINING_LAB_PIN_UNLOCK_KEY) === "true";
  toggleProtectedTrainingContent(alreadyUnlocked);
  if (alreadyUnlocked) return;

  pinGateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredPin = String(pinInput?.value || "");
    if (enteredPin === TRAINING_LAB_PIN) {
      sessionStorage.setItem(TRAINING_LAB_PIN_UNLOCK_KEY, "true");
      if (pinGateMessage) pinGateMessage.textContent = "";
      if (pinInput) pinInput.value = "";
      toggleProtectedTrainingContent(true);
      return;
    }
    if (pinGateMessage) pinGateMessage.textContent = "PIN hatalı. Lütfen tekrar dene.";
  });
}

function getConfig() {
  return {
    platform: guidePlatform?.value || "html",
    business: guideBusiness?.value || "education",
    goal: guideGoal?.value || "lead",
    team: guideTeam?.value || "solo",
    traffic: guideTraffic?.value || "low",
  };
}

function saveGuideConfig() {
  localStorage.setItem(GUIDE_CONFIG_KEY, JSON.stringify(currentGuideConfig));
}

function loadGuideConfig() {
  const raw = localStorage.getItem(GUIDE_CONFIG_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (guidePlatform && parsed.platform) guidePlatform.value = parsed.platform;
    if (guideBusiness && parsed.business) guideBusiness.value = parsed.business;
    if (guideGoal && parsed.goal) guideGoal.value = parsed.goal;
    if (guideTeam && parsed.team) guideTeam.value = parsed.team;
    if (guideTraffic && parsed.traffic) guideTraffic.value = parsed.traffic;
  } catch (_error) {
    localStorage.removeItem(GUIDE_CONFIG_KEY);
  }
}

function computeChecklist() {
  return [
    ...PLATFORM_CHECKLIST[currentGuideConfig.platform],
    ...BUSINESS_CHECKLIST[currentGuideConfig.business],
    GOAL_RATIONALES[currentGuideConfig.goal],
    TEAM_RHYTHM[currentGuideConfig.team],
    TRAFFIC_NOTES[currentGuideConfig.traffic],
  ];
}

function getWeekPlan() {
  return [
    "Gün 1: Teknik kurulum ve event kalite testi.",
    "Gün 2: Lead toplama varlıkları (popup/form/teaser).",
    "Gün 3: Welcome + Abandoned Cart akış kurulumu.",
    "Gün 4: Segment oluşturma ve mesaj planı.",
    "Gün 5: Kampanya şablonu + A/B test kurgusu.",
    "Gün 6: KPI paneli ve rapor şablonu.",
    "Gün 7: Sonuç gözden geçirme ve sonraki sprint planı.",
  ];
}

function renderSimpleList(container, items) {
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `- ${item}`;
    container.appendChild(li);
  });
}

function stageVariantText(stageId) {
  const variant = `${LABELS.platform[currentGuideConfig.platform]} / ${LABELS.business[currentGuideConfig.business]} / ${LABELS.goal[currentGuideConfig.goal]} / ${LABELS.team[currentGuideConfig.team]} / ${LABELS.traffic[currentGuideConfig.traffic]}`;
  return `Senaryo varyantı: ${variant}.`;
}

function uniqueTextItems(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

function mergeStageField(baseItems, overrideItems) {
  return uniqueTextItems([...(overrideItems || []), ...(baseItems || [])]);
}

function getScenarioStage(stage) {
  const platformOverrides =
    SCENARIO_STAGE_OVERRIDES.platform[currentGuideConfig.platform]?.[stage.id] || {};
  const businessOverrides =
    SCENARIO_STAGE_OVERRIDES.business[currentGuideConfig.business]?.[stage.id] || {};
  const goalOverrides =
    SCENARIO_STAGE_OVERRIDES.goal[currentGuideConfig.goal]?.[stage.id] || {};
  const teamOverrides = TEAM_STAGE_OVERRIDES[currentGuideConfig.team]?.[stage.id] || {};
  const trafficOverrides = TRAFFIC_STAGE_OVERRIDES[currentGuideConfig.traffic]?.[stage.id] || {};

  return {
    ...stage,
    actions: mergeStageField(
      mergeStageField(stage.actions, platformOverrides.actions),
      mergeStageField(
        mergeStageField(businessOverrides.actions, goalOverrides.actions),
        mergeStageField(teamOverrides.actions, trafficOverrides.actions)
      )
    ),
    requiredChecklist: mergeStageField(
      mergeStageField(stage.requiredChecklist, platformOverrides.requiredChecklist),
      mergeStageField(
        mergeStageField(businessOverrides.requiredChecklist, goalOverrides.requiredChecklist),
        mergeStageField(teamOverrides.requiredChecklist, trafficOverrides.requiredChecklist)
      )
    ),
    optionalChecklist: mergeStageField(
      mergeStageField(stage.optionalChecklist, platformOverrides.optionalChecklist),
      mergeStageField(
        mergeStageField(businessOverrides.optionalChecklist, goalOverrides.optionalChecklist),
        mergeStageField(teamOverrides.optionalChecklist, trafficOverrides.optionalChecklist)
      )
    ),
    kpiTargets: mergeStageField(
      mergeStageField(stage.kpiTargets, platformOverrides.kpiTargets),
      mergeStageField(
        mergeStageField(businessOverrides.kpiTargets, goalOverrides.kpiTargets),
        mergeStageField(teamOverrides.kpiTargets, trafficOverrides.kpiTargets)
      )
    ),
    commonMistakes: mergeStageField(
      mergeStageField(stage.commonMistakes, platformOverrides.commonMistakes),
      mergeStageField(
        mergeStageField(businessOverrides.commonMistakes, goalOverrides.commonMistakes),
        mergeStageField(teamOverrides.commonMistakes, trafficOverrides.commonMistakes)
      )
    ),
    learningTip:
      goalOverrides.learningTip ||
      businessOverrides.learningTip ||
      platformOverrides.learningTip ||
      teamOverrides.learningTip ||
      trafficOverrides.learningTip ||
      stage.learningTip,
  };
}

function getScenarioStorageKey(config = currentGuideConfig) {
  return [
    config.platform,
    config.business,
    config.goal,
    config.team,
    config.traffic,
  ].join("|");
}

function readProgressMap() {
  const raw = localStorage.getItem(ROADMAP_PROGRESS_KEY);
  if (!raw) {
    return {};
  }
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_error) {
    localStorage.removeItem(ROADMAP_PROGRESS_KEY);
    return {};
  }
}

function writeProgressMap(mapData) {
  localStorage.setItem(ROADMAP_PROGRESS_KEY, JSON.stringify(mapData));
}

function renderStages() {
  if (!roadmapStagesContainer) return;
  roadmapStagesContainer.innerHTML = "";

  STAGE_LIBRARY.forEach((stage) => {
    const scenarioStage = getScenarioStage(stage);
    const state = stageState[scenarioStage.id] || { required: [], optional: [] };
    const requiredItems = scenarioStage.requiredChecklist
      .map((item, idx) => {
        const checked = Array.isArray(state.required) && state.required.includes(idx);
        return `<label class="flex items-start gap-2"><input type="checkbox" data-stage="${scenarioStage.id}" data-type="required" data-index="${idx}" ${checked ? "checked" : ""} class="mt-1 rounded border-slate-300 dark:border-slate-600" /><span>${item}</span></label>`;
      })
      .join("");
    const optionalItems = scenarioStage.optionalChecklist
      .map((item, idx) => {
        const checked = Array.isArray(state.optional) && state.optional.includes(idx);
        return `<label class="flex items-start gap-2"><input type="checkbox" data-stage="${scenarioStage.id}" data-type="optional" data-index="${idx}" ${checked ? "checked" : ""} class="mt-1 rounded border-slate-300 dark:border-slate-600" /><span>${item}</span></label>`;
      })
      .join("");

    const card = document.createElement("article");
    const colorClass = STAGE_COLORS[(scenarioStage.id - 1) % STAGE_COLORS.length];
    card.className = "rounded-2xl border border-slate-200 p-5 dark:border-slate-700 bg-white dark:bg-slate-900";
    card.innerHTML = `
      <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">${scenarioStage.title}</h3>
        <p class="rounded-full bg-gradient-to-r ${colorClass} px-3 py-1 text-xs font-semibold text-white">${scenarioStage.scoreWeight} puan</p>
      </div>
      <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">Müşteri sorunu:</p>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">${scenarioStage.problem}</p>
      <p class="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200">Neden kritik?</p>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">${scenarioStage.why}</p>
      <p class="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-brand-600 dark:text-brand-400">${stageVariantText(scenarioStage.id)}</p>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <div class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">Yeni başlayan için adım adım</p>
          <ol class="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300 list-decimal pl-5">${scenarioStage.actions.map((a) => `<li>${a}</li>`).join("")}</ol>
          <p class="mt-3 rounded-lg bg-slate-50 px-2 py-2 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"><strong>Öğrenen notu:</strong> ${scenarioStage.learningTip}</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">Kontrol listesi</p>
          <p class="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">Zorunlu</p>
          <div class="mt-1 space-y-2 text-sm text-slate-600 dark:text-slate-300">${requiredItems}</div>
          <p class="mt-3 text-xs font-semibold text-slate-500 dark:text-slate-400">Opsiyonel</p>
          <div class="mt-1 space-y-2 text-sm text-slate-600 dark:text-slate-300">${optionalItems}</div>
        </div>
        <div class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">Başarı ölçümü</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">${scenarioStage.kpiTargets.map((k) => `<li>- ${k}</li>`).join("")}</ul>
          <p class="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-100">Sık hata / düzeltme</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">${scenarioStage.commonMistakes.map((m) => `<li>- ${m}</li>`).join("")}</ul>
        </div>
      </div>
    `;
    roadmapStagesContainer.appendChild(card);
  });
}

function getStageCompletion(stage) {
  const state = stageState[stage.id] || { required: [], optional: [] };
  const reqRatio = stage.requiredChecklist.length ? state.required.length / stage.requiredChecklist.length : 0;
  const optRatio = stage.optionalChecklist.length ? state.optional.length / stage.optionalChecklist.length : 0;
  return Math.min(1, reqRatio * 0.8 + optRatio * 0.2);
}

function getScoreAndProgress() {
  let score = 0;
  let completedStages = 0;
  STAGE_LIBRARY.forEach((baseStage) => {
    const scenarioStage = getScenarioStage(baseStage);
    const ratio = getStageCompletion(scenarioStage);
    score += Math.round(scenarioStage.scoreWeight * ratio);
    if (ratio >= 0.99) completedStages += 1;
  });
  const progress = Math.round((score / 100) * 100);
  return { score, progress, completedStages };
}

function levelFromScore(score) {
  if (score >= 85) return "Pro";
  if (score >= 55) return "Orta";
  return "Başlangıç";
}

function saveStageState() {
  const progressMap = readProgressMap();
  progressMap[getScenarioStorageKey()] = stageState;
  writeProgressMap(progressMap);
}

function loadStageState() {
  const progressMap = readProgressMap();
  const scenarioState = progressMap[getScenarioStorageKey()];
  stageState = scenarioState && typeof scenarioState === "object" ? scenarioState : {};
}

function updateScoreboard() {
  const { score, progress, completedStages } = getScoreAndProgress();
  if (roadmapCompletedCount) roadmapCompletedCount.textContent = `${completedStages} / ${STAGE_LIBRARY.length}`;
  if (roadmapProgressPercent) roadmapProgressPercent.textContent = `%${progress}`;
  if (roadmapScoreText) roadmapScoreText.textContent = String(score);
  if (roadmapLevelText) roadmapLevelText.textContent = levelFromScore(score);
  if (roadmapProgressBar) {
    roadmapProgressBar.style.width = `${progress}%`;
    roadmapProgressBar.setAttribute("aria-valuenow", String(progress));
  }
  if (roadmapStatusText) {
    roadmapStatusText.textContent =
      completedStages === STAGE_LIBRARY.length
        ? "Tüm aşamalar tamamlandı. Şimdi raporu üretip operasyon rutinine geçebilirsin."
        : `${completedStages}. aşama seviyesindesin. Sıradaki aşamayı tamamlamak için zorunlu checklist maddelerini bitir.`;
  }
  if (roadmapCoachTip) {
    roadmapCoachTip.textContent =
      completedStages >= 4
        ? "Koç Notu: Artık ölçüm ve optimizasyona odaklan. En güçlü kaldıraç, düzenli test ritmidir."
        : "Koç Notu: Önce zorunlu checklist maddelerini tamamla, sonra opsiyonel iyileştirmelere geç.";
  }
  renderFlowMap();
  renderStageScoreChart();
}

function renderFlowMap() {
  if (!flowMapList) {
    return;
  }
  flowMapList.innerHTML = "";
  STAGE_LIBRARY.forEach((baseStage, index) => {
    const stage = getScenarioStage(baseStage);
    const completion = Math.round(getStageCompletion(stage) * 100);
    const item = document.createElement("div");
    const colorClass = STAGE_COLORS[index % STAGE_COLORS.length];
    item.className = "rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950/60";
    item.innerHTML = `
      <div class="flex items-center justify-between gap-2">
        <p class="text-sm font-bold text-slate-900 dark:text-white">${stage.title}</p>
        <span class="rounded-full bg-gradient-to-r ${colorClass} px-2 py-1 text-xs font-semibold text-white">%${completion}</span>
      </div>
      <p class="mt-2 text-xs text-slate-600 dark:text-slate-300">${stage.actions[0]}</p>
      ${index < STAGE_LIBRARY.length - 1 ? '<p class="mt-2 text-center text-xs font-semibold text-slate-400">↓ Sonraki Aşamaya Geçiş</p>' : ""}
    `;
    flowMapList.appendChild(item);
  });
}

function renderStageScoreChart() {
  if (!stageScoreChart) {
    return;
  }
  stageScoreChart.innerHTML = "";
  STAGE_LIBRARY.forEach((baseStage, index) => {
    const stage = getScenarioStage(baseStage);
    const completion = getStageCompletion(stage);
    const stageScore = Math.round(stage.scoreWeight * completion);
    const maxWidth = Math.max(4, Math.round(completion * 100));
    const row = document.createElement("div");
    const colorClass = STAGE_COLORS[index % STAGE_COLORS.length];
    row.innerHTML = `
      <div class="mb-1 flex items-center justify-between text-xs">
        <span class="font-semibold text-slate-700 dark:text-slate-200">${stage.title}</span>
        <span class="text-slate-500 dark:text-slate-400">${stageScore}/${stage.scoreWeight}</span>
      </div>
      <div class="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div class="h-full rounded-full bg-gradient-to-r ${colorClass}" style="width:${maxWidth}%"></div>
      </div>
    `;
    stageScoreChart.appendChild(row);
  });
}

function setupStageInteractions() {
  if (!roadmapStagesContainer) return;
  roadmapStagesContainer.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.type !== "checkbox") return;

    const stageId = Number(target.dataset.stage);
    const type = String(target.dataset.type || "required");
    const index = Number(target.dataset.index);
    if (Number.isNaN(stageId) || Number.isNaN(index)) return;
    if (!stageState[stageId]) stageState[stageId] = { required: [], optional: [] };
    const bucket = type === "optional" ? "optional" : "required";
    const values = new Set(stageState[stageId][bucket] || []);
    if (target.checked) values.add(index);
    else values.delete(index);
    stageState[stageId][bucket] = Array.from(values);
    saveStageState();
    updateScoreboard();
  });
}

function updateGuideViews() {
  if (!guideScenarioTitle || !guideScenarioText || !guideWhyText) return;
  const platform = LABELS.platform[currentGuideConfig.platform];
  const business = LABELS.business[currentGuideConfig.business];
  const goal = LABELS.goal[currentGuideConfig.goal];
  const team = LABELS.team[currentGuideConfig.team];
  const traffic = LABELS.traffic[currentGuideConfig.traffic];

  guideScenarioTitle.textContent = `${platform} + ${business} senaryosu`;
  guideScenarioText.textContent = `${goal} odaklı plan, ${team} kapasitesine ve ${traffic} temposuna göre optimize edildi.`;
  guideWhyText.textContent = `${GOAL_RATIONALES[currentGuideConfig.goal]} ${TEAM_RHYTHM[currentGuideConfig.team]} ${TRAFFIC_NOTES[currentGuideConfig.traffic]}`;

  renderSimpleList(guideChecklistList, computeChecklist());
  renderSimpleList(guideWeekPlanList, getWeekPlan());
  renderSimpleList(
    guideStepPlanList,
    STAGE_LIBRARY.map((stage) => {
      const scenarioStage = getScenarioStage(stage);
      return `${scenarioStage.title}: ${scenarioStage.actions.slice(0, 2).join(" | ")}`;
    })
  );
}

function setupGuideInputs() {
  loadGuideConfig();
  currentGuideConfig = getConfig();
  updateGuideViews();

  [guidePlatform, guideBusiness, guideGoal, guideTeam, guideTraffic].forEach((field) => {
    field?.addEventListener("change", () => {
      currentGuideConfig = getConfig();
      saveGuideConfig();
      updateGuideViews();
      loadStageState();
      renderStages();
      updateScoreboard();
    });
  });

  readyScenarioButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (guidePlatform) guidePlatform.value = String(button.dataset.platform || "html");
      if (guideBusiness) guideBusiness.value = String(button.dataset.business || "education");
      if (guideGoal) guideGoal.value = String(button.dataset.goal || "lead");
      if (guideTeam) guideTeam.value = String(button.dataset.team || "solo");
      if (guideTraffic) guideTraffic.value = String(button.dataset.traffic || "low");
      currentGuideConfig = getConfig();
      saveGuideConfig();
      updateGuideViews();
      loadStageState();
      renderStages();
      updateScoreboard();
    });
  });
}

function buildSummaryText() {
  const { score, completedStages } = getScoreAndProgress();
  const lines = [];
  lines.push("E-POSTA PAZARLAMA EĞİTİM LABI - SOP ÖZETİ");
  lines.push("");
  lines.push(`Senaryo: ${LABELS.platform[currentGuideConfig.platform]} | ${LABELS.business[currentGuideConfig.business]} | ${LABELS.goal[currentGuideConfig.goal]}`);
  lines.push(`Ekip/Trafik: ${LABELS.team[currentGuideConfig.team]} | ${LABELS.traffic[currentGuideConfig.traffic]}`);
  lines.push(`Genel skor: ${score}/100 (${levelFromScore(score)})`);
  lines.push(`Tamamlanan aşama: ${completedStages}/6`);
  lines.push("");
  lines.push("Aşama Durumu:");
  STAGE_LIBRARY.forEach((baseStage) => {
    const scenarioStage = getScenarioStage(baseStage);
    const ratio = getStageCompletion(scenarioStage);
    lines.push(`- ${scenarioStage.title}: %${Math.round(ratio * 100)}`);
  });
  lines.push("");
  lines.push("Sonraki Sprint Önceliği:");
  lines.push(`- ${TEAM_RHYTHM[currentGuideConfig.team]}`);
  lines.push(`- ${TRAFFIC_NOTES[currentGuideConfig.traffic]}`);
  lines.push("");
  lines.push("Müşteri Toplantı Notu Şablonu:");
  lines.push("- Bu ay yapılanlar:");
  lines.push("- Elde edilen etkiler:");
  lines.push("- Gelecek ay test hipotezleri:");
  return lines.join("\n");
}

function setupSummaryPanel() {
  generateSummaryButton?.addEventListener("click", () => {
    if (summaryOutput) summaryOutput.value = buildSummaryText();
  });
  copySummaryButton?.addEventListener("click", async () => {
    if (!summaryOutput) return;
    try {
      await navigator.clipboard.writeText(summaryOutput.value);
      summaryOutput.setAttribute("aria-label", "SOP özeti kopyalandı");
    } catch (_error) {
      summaryOutput.focus();
      summaryOutput.select();
      document.execCommand("copy");
    }
  });
  printSummaryButton?.addEventListener("click", () => {
    if (summaryOutput && summaryOutput.value.trim().length === 0) {
      summaryOutput.value = buildSummaryText();
    }
    window.print();
  });
}

function resetProgress() {
  const progressMap = readProgressMap();
  const scenarioKey = getScenarioStorageKey();
  delete progressMap[scenarioKey];
  writeProgressMap(progressMap);
  stageState = {};
  renderStages();
  updateScoreboard();
}

function setupReset() {
  roadmapResetButton?.addEventListener("click", resetProgress);
}

function bootstrap() {
  initializeTheme();
  setupPinGate();
  setupRevealAnimations();
  setupGuideInputs();
  loadStageState();
  renderStages();
  setupStageInteractions();
  updateScoreboard();
  setupSummaryPanel();
  setupReset();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      const nextMode = isDarkMode ? "light" : "dark";
      setTheme(nextMode);
      localStorage.setItem(THEME_KEY, nextMode);
    });
  }
}

bootstrap();
