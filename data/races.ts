interface Race {
  descriptionID: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    ja: string;
    ko: string;
    ru: string;
    zh: string;
  };
  iconID: number;
  nameID: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    ja: string;
    ko: string;
    ru: string;
    zh: string;
  };
  shipTypeID: number;
}
interface Races {
  [key: number]: Race;
}

export const races: Races = {
  1: {
    descriptionID: {
      de: 'Der Staat der Caldari gründet sich auf den Grundsätzen von Patriotismus und harter Arbeit, welche die Vorfahren der Caldari manch großes Elend auf ihrer unwirtlichen Heimatwelt überstehen ließen. Heute ist das Land eine Diktatur der Konzerne, angeführt von Herrschern, die fest entschlossen sind, das Land zu den alten Idealen der Leistungsgesellschaft zurückzuführen. Rücksichtslos und effizient im Konferenzraum wie auf dem Schlachtfeld, sind die Caldari ein lebendes Wahrzeichen von Kraft, Ausdauer und Erhabenheit.',
      en: 'Founded on the tenets of patriotism and hard work that carried its ancestors through hardships on an inhospitable homeworld, the Caldari State is today a corporate dictatorship, led by rulers who are determined to see it return to the meritocratic ideals of old. Ruthless and efficient in the boardroom as well as on the battlefield, the Caldari are living emblems of strength, persistence, and dignity.',
      es: 'El Estado Caldari, fundado sobre los principios del patriotismo y del trabajo duro que permitió a sus ancestros progresar en su inhóspita tierra natal, es hoy una dictadura corporativa, liderada por gobernantes cuyo objetivo es regresar a los ideales meritocráticos de antaño. Sin compasión y eficaz tanto en la sala de juntas como en el campo de batalla, los caldaris son la personificación de la fuerza, la perseverancia y la dignidad.',
      fr: "Fondé sur les principes de patriotisme et de ténacité qui ont permis à ses ancêtres de surmonter les nombreuses épreuves afférentes à leur planète d'origine inhospitalière, l'État caldari est aujourd'hui une dictature corporative administrée par des dirigeants déterminés à voir leur nation renouer avec les idéaux méritocratiques d'antan. Redoutablement efficaces en conseil comme au combat, les Caldari sont la force, la persévérance et la dignité incarnées.",
      it: "Fondato sulla dottrina del patriottismo e sul duro lavoro che aiutò i suoi avi a superare sofferenze e privazioni in una terra natia inospitale, oggi lo Stato Caldari è una dittatura sociale guidata da governanti determinati a far rivivere gli ideali meritocratici del passato. Spietati ed efficienti sia nella vita politica che sul campo di battaglia, i Caldari sono l'emblema vivente della forza, dell'ostinazione e della dignità.",
      ja: 'カルダリ連合の祖先は、この国の土台となっている愛国主義と勤勉主義を貫くことで過酷な故郷の地で苦難を乗り越えてきたが、現在国は企業独裁状態にあり、支配者たちは、古き良き時代の能力主義の理想に回帰させるという決意に燃えている。カルダリ人は会議室でも戦場でも敏腕で容赦がなく、力強さ、不屈さ、威厳の象徴のような人々だ。',
      ko: '척박한 고향에서 고충을 겪었던 선조의 노력과 애국주의를 기반으로 세워진 칼다리 연합은 현재 구시대의 이상적인 능력주의 발상으로 회귀하기를 바라는 자들이 지배하는 코퍼레이션 독재국가입니다. 이사회실에서는 물론 전장에서도 무자비하며 효율적으로 행동하는 칼다리는 힘과 끈기, 품위의 살아있는 상징입니다.',
      ru: 'Государство Калдари основано на догматах патриотизма и трудолюбия, которые позволили предкам нынешних граждан Калдари преодолеть тяготы жизни в их родном мире. Сегодня государство Калдари — это диктатура корпораций, олигархия, правители которой стремятся вернуть ее в меритократическое русло, как было в старину. Безжалостные и эффективные как в зале заседаний, так и на поле боя, граждане Калдари — воплощение силы, упорства и достоинства.',
      zh: '加达里合众国建立之初的口号是爱国与奋斗。在该口号的指引下，其早期领导人在恶劣环境下进行了艰苦卓绝的奋斗。无论是在战场还是在商场，加达里人都毫不含糊，一如既往地保持高效。他们向世人诠释着力量、坚持与尊严。'
    },
    iconID: 1439,
    nameID: {
      de: 'Caldari',
      en: 'Caldari',
      es: 'Caldari',
      fr: 'Caldari',
      it: 'Caldari',
      ja: 'カルダリ',
      ko: '칼다리',
      ru: 'Калдари',
      zh: '加达里'
    },
    shipTypeID: 601
  },
  2: {
    descriptionID: {
      de: 'Der Stamm der Minmatar war eine blühende Zivilisation, bis er vom Imperium der Amarr für mehr als 700 Jahre versklavt wurde. Eine blutige Rebellion konnte viele Minmatar befreien, einige waren jedoch als Sklaven zurückgeblieben. Heute sind die Minmatar robust, geschickt und fleißig. Viele meinen, die Demokratie habe ihnen gute Dienste erwiesen, doch könne sie nie zurückgeben, was ihnen vor langer Zeit genommen wurde. Daher bildeten sie eine Regierung, die vor allem ihre Herkunft und Wurzeln repräsentierte. Sie werden immer einen Groll gegen die Amarr hegen und sie sehnen sich nach jenen glücklichen Tagen zurück, als die verhassten Schiffe des Imperiums noch nicht angelandet waren.',
      en: "Once a thriving tribal civilization, the Minmatar were enslaved by the Amarr Empire for more than 700 years until a massive rebellion freed most, but not all, of those held in servitude. The Minmatar people today are resilient, ingenious, and hard-working. Many of them believe that democracy, though it has served them well for a long time, can never restore what was taken from them so long ago. For this reason they have formed a government truly reflective of their tribal roots. They will forever resent the Amarrians, and yearn for the days before the Empire's accursed ships ever reached their home skies.",
      es: 'Los minmatarianos, antaño una próspera civilización tribal, fueron esclavizados por el Imperio Amarr durante más de 700 años hasta que una enorme rebelión liberó a la mayoría de los esclavos, aunque no a todos. Los minmatarianos son resistentes, ingeniosos y trabajadores. Muchos creen que la democracia, aunque los ha servido bien durante mucho tiempo, no puede devolverles lo que se les arrebató en el pasado. Por este motivo, han formado un gobierno basado en sus raíces tribales. Siempre estarán resentidos contra los amarrianos, y recuerdan con añoranza los días antes de que las malditas naves del Imperio llegaran a sus cielos.',
      fr: "Autrefois une civilisation tribale florissante, les Minmatar ont été réduits en esclavage par l'Empire amarr pendant plus de 700 ans, jusqu'à ce qu'une rébellion massive libère la plupart d'entre eux du joug de l'envahisseur. Aujourd'hui, les Minmatar sont un peuple déterminé, ingénieux et travailleur. Nombre d'entre eux croient que la démocratie, même si elle a longtemps servi leurs intérêts, ne pourra jamais leur restituer ce qui leur a été dérobé jadis. C'est pour cette raison qu'ils ont formé un gouvernement à l'image de leurs racines tribales. Ils vouent une haine inextinguible au peuple amarr, et gardent un souvenir nostalgique de l'époque à laquelle les maudits vaisseaux de l'empire n'avaient encore jamais violé l'espace aérien de leur planète natale.",
      it: "Un tempo fiorente civiltà tribale, i Minmatar furono schiavi dell'Impero Amarr per più di 700 anni finché una massiccia rivolta non riuscì a liberarne gran parte, ma non tutti. Oggi i Minmatar sono un popolo in ripresa, ingegnoso e gran lavoratore. Molti di loro ritengono che la democrazia, sebbene abbia giovato al loro popolo per lungo tempo, non potrà mai restituire ciò che gli è stato sottratto molto tempo fa. Per questo motivo, hanno deciso di formare un governo che riflettesse realmente le loro radici tribali. Proveranno sempre risentimento nei confronti degli Amarriani e rimpiangeranno sempre i giorni in cui le maledette navi dell'Impero non avevano ancora raggiunto i loro cieli.",
      ja: 'かつては豊かな同族文化が築いていたが、700年以上にわたってアマー帝国に隷属させられていた。その後、大規模な反乱で国民の大半が解放されたが、今なお奴隷となっている者たちがいる。今日のミンマター人は、しなやかで独創性に富み、精力的だ。彼らの多くは、長年に渡って機能してきた民主主義の力だけでは、大昔に奪われたものを取り戻すことは決してできないと信じている。それゆえミンマター民族のルーツを忠実に反映する政府を作り上げた。彼らはアマー人を永遠に恨み、彼らの宙域に、忌まわしい帝国の船が影を落とす以前の日々を切望し続けるであろう。',
      ko: '한때 번성한 부족 문명이었던 민마타는 아마르 제국에 700년 동안 지배를 받다가 대규모 항쟁을 일으켜 노예 생활을 하던 부족 대부분이 자유를 얻었습니다. 오늘날 민마타 부족민은 굴하지 않는 원기와 기발함, 그리고 성실성을 갖추고 있습니다. 부족민들은 비록 민주주의가 오래도록 민마타 사회를 평온하게 유지해왔지만, 자신들이 오래전에 잃어버린 것을 되찾아줄 수는 없다고 믿습니다. 이런 이유로 민마타 부족은 자신들의 뿌리를 진정으로 반영하는 정부를 만들었습니다. 민마타는 영원히 아마르인을 원망할 것이며 제국의 가증스러운 함선이 자신들의 고향 하늘에 나타나기 이전의 날들을 그리워할 것입니다.',
      ru: 'Некогда процветающая племенная цивилизация Минматар была порабощена империей Амарр и находились под ее пятой более 700 лет, пока в результате массового восстания почти все племена Минматар сумели добиться освобождения. Сегодня нация Минматар — это трудолюбивые, изобретательные и крепкие духом люди. Несмотря на долгое и успешное применение принципов демократии, многие представители Минматар уверены, что демократия никогда не поможет им восстановить историческую справедливость. Поэтому они построили государство, в основу которого легла их племенная культура. Они всегда будут ненавидеть Амарр и всегда будут помнить счастливые дни до появления проклятых кораблей империи в небесах их родных миров.',
      zh: '由一个欣欣向荣的游牧民族发展至今，米玛塔尔人的顽强、聪明与勤奋帮助他们建立了一个真正代表其游牧文化的国家。'
    },
    iconID: 1440,
    nameID: {
      de: 'Minmatar',
      en: 'Minmatar',
      es: 'Minmatar',
      fr: 'Minmatar',
      it: 'Minmatar',
      ja: 'ミンマター',
      ko: '민마타',
      ru: 'Минматар',
      zh: '米玛塔尔'
    },
    shipTypeID: 588
  },
  4: {
    descriptionID: {
      de: 'Das Imperium der Amarr ist das größte und älteste der vier Imperien. Diese theokratische Gesellschaft wird von einer mächtigen Kaiserin regiert. Das Fundament des Imperiums ist die Sklavenarbeit. Zwar sind die Bürger von Amarr engagiert und gebildet, doch in kultureller Hinsicht hält sich Amarr an eine Grundthese: Was andere Sklaverei nennen, ist für sie nur ein erster Schritt auf dem Pfad geistiger Entwicklung, der zu einem unerschütterlichen Glauben führt. Trotz einiger Rückschläge in der jüngsten Geschichte bleibt das Imperium der wohl stabilste und militärisch mächtigste Nationalstaat in New Eden.',
      en: "The Amarr Empire is the largest and oldest of the four empires. Ruled by a mighty Empress, this vast theocratic society is supported by a broad foundation of slave labor. Amarr citizens tend to be highly educated and fervent individuals, and as a culture Amarr adheres to the basic tenet that what others call slavery is in fact one step on a indentured person's spiritual path toward fully embracing their faith. Despite several setbacks in recent history, the Empire remains arguably the most stable and militarily powerful nation-state in New Eden.",
      es: 'El Imperio Amarr es el más grande y antiguo de los cuatro. Esta extensa sociedad teocrática, gobernada por una poderosa emperatriz, se apoya en una gran fuerza esclava. Los ciudadanos amarrianos suelen ser muy cultos y apasionados y su filosofía se basa en que lo que otros llaman esclavitud es, en el fondo, un simple paso en el camino espiritual de la persona para abrazar la fe. A pesar de varios contratiempos en su historia reciente, siguen siendo la nación-estado más estable y militarmente poderosa de Nuevo Edén.',
      fr: "L’Empire amarr est le plus grand et le plus ancien des quatre empires. Gouvernée par une puissante impératrice, cette vaste société théocratique s'appuie sur le dur labeur d'innombrables esclaves. Les citoyens amarr bénéficient généralement d'une éducation solide servie par une grande ferveur. Sur le plan culturel, ils adhèrent au principe fondamental selon lequel ce que d'autres appellent esclavage est en réalité une étape dans le cheminement spirituel d'un individu asservi vers l'adoption totale de la foi officielle. Malgré plusieurs revers au cours de son histoire récente, l'empire reste sans doute la nation la plus stable et militairement puissante de New Eden.",
      it: "L'Impero Amarr è il più vasto e antico dei quattro imperi. Governata da una potente Imperatrice, questa vasta società teocratica è ampiamente sostenuta dal lavoro degli schiavi. I cittadini Amarr sono molto istruiti e appassionati e, dal punto di vista culturale, Amarr aderisce al principio fondamentale secondo cui ciò che gli altri chiamano schiavitù è in realtà un passo nel percorso spirituale debitorio dell'individuo verso l'abbraccio totale della propria fede. Nonostante diversi contrattempi subiti nella sua storia recente, l'Impero resta indubbiamente lo stato-nazione più stabile e militarmente più potente di New Eden.",
      ja: 'アマー帝国は、4大国のうち最大にして最古の国である。強力な力を持つ皇帝の支配下にあるこの巨大な神政社会は、奴隷の幅広い労働力基盤によって支えられている。アマー市民の多くは教育レベルが高く情熱的だ。またアマー文化には、一般に奴隷制度として知られるものを、主従関係の従の側の人間が完全な信仰に到達するための、精神修養法の一過程であると捉える信条が根底にある。現在はいくつかの停滞も見られるが、帝国がニューエデンの中で最も安定した軍事国家であることは間違いない。',
      ko: '아마르 제국은 네 국가 가운데 가장 거대하고 역사가 긴 제국입니다. 막강한 여제가 통치하는 아마르 제국은 신정국가로 노예 노동이라는 드넓은 토대 위에 자리 잡고 있습니다. 아마르 제국민은 고학력이고 열정적인 성향을 보이며, 문화적으로 다른 이들이 노예제도라고 부르는 시스템은 계약 노동자들이 자신들의 운명을 받아들이기 위해 영적인 한 걸음을 내딛는 것이라는 기본 교리를 고수합니다. 최근에는 몇 가지 고난을 겪었지만, 제국은 여전히 뉴에덴에서 가장 안정적이고 강력한 군사력을 지닌 국가입니다.',
      ru: 'Империя Амарр — крупнейшая и древнейшая из четырех держав. Управляемое могущественной императрицей, это огромное и сложное теократическое общество целиком основано на эксплуатации рабов. Граждане Амарр в своей массе хорошо образованы и занимают активную жизненную позицию. Их культура зиждется на фундаментальном принципе: то, что другие называют рабством, на самом деле является для зависимых людей шагом на духовном пути к постижению веры. Несмотря на некоторые неудачи в прошлом, империя является, пожалуй, самой стабильной и могущественной военной державой в Новом Эдеме.',
      zh: '艾玛是四大帝国中幅员最辽阔、历史最悠久的帝国。虽然在近代历史上该帝国曾遭受到一些挫折，但它依然是新伊甸中社会秩序最稳定，军事实力最强大的国家。'
    },
    iconID: 1442,
    nameID: {
      de: 'Amarr',
      en: 'Amarr',
      es: 'Amarr',
      fr: 'Amarr',
      it: 'Amarr',
      ja: 'アマー',
      ko: '아마르',
      ru: 'Амарр',
      zh: '艾玛'
    },
    shipTypeID: 596
  },
  8: {
    descriptionID: {
      de: 'Die Gallente sind Meister der Freiheit, Verteidiger der Unterdrückten und stehen der einzig wahren Demokratie in New Eden vor. Einige der fortschrittlichsten Anführer, Wissenschaftler und Geschäftsleute der Ära sind aus diesen mannigfaltigen Völkern hervorgegangen. Als Vorkämpfer der künstlichen Intelligenz verlässt sich die Föderation auf Drohnen und andere automatisierte Systeme, was jedoch nicht von den gut ausgebildeten Piloten ablenken soll. Dennoch: Die Föderation der Gallente bringt die besten und tapfersten Kämpfer hervor, die das Universum zu bieten hat.',
      en: 'Champions of liberty and defenders of the downtrodden, the Gallente play host to the only true democracy in New Eden. Some of the most progressive leaders, scientists, and businessmen of the era have emerged from its diverse peoples. A pioneer of artificial intelligence, the Federation relies heavily on drones and other automated systems. This is not to detract from the skill of their pilots, though: the Gallente Federation is known for producing some of the best and bravest the universe has to offer.',
      es: 'Campeones de la libertad y defensores de los oprimidos, los gallentes albergan la única verdadera democracia de Nuevo Edén. Algunos de los líderes, científicos y hombres de negocios más progresistas de esta era han salido de sus múltiples pueblos. La Federación, pionera en inteligencia artificial, depende mucho de los drones y otros sistemas automatizados. Sin embargo, eso no significa que sus pilotos no sean hábiles, ya que la Federación Gallente es conocida por haber dado lugar a algunos de los mejores y más valientes.',
      fr: "Champions de la liberté et défenseurs des opprimés, les Gallente sont les dépositaires de la seule véritable démocratie de New Eden. Certains des dirigeants, scientifiques et hommes d'affaires les plus progressistes de notre temps sont issus de cette mosaïque ethnique. Pionnière dans le domaine de l'intelligence artificielle, la Fédération s'en remet totalement aux drones et autres systèmes automatisés. This is not to detract from the skill of their pilots, though: the Gallente Federation is known for producing some of the best and bravest the universe has to offer.",
      it: "Campioni di libertà e difensori degli oppressi, i Gallente accolgono l'unica vera democrazia di New Eden. Il loro popolo eterogeneo ha dato i natali ad alcuni dei leader, scienziati e uomini d'affari tra i più innovativi. Pioniera dell'intelligenza artificiale, la Federazione ripone molta fiducia nei droni e nei sistemi automatizzati. Tuttavia, ciò non toglie nulla all'abilità dei loro piloti: la Federazione Gallente è nota per la formazione di alcuni dei più bravi e coraggiosi piloti dell'universo.",
      ja: '民主主義の王者であり、虐げられたものの味方であるガレンテは、ニューエデンで唯一の真の民主主義国家として機能している。その多種多様な国民からは、この時代で最も進歩的な指導者、科学者、事業家が輩出されている。人工知能の先駆者である連邦は、ドローンなどの自動システムに大きく依存している。これは連邦のパイロットの能力を軽視するものではない。ガレンテ連邦は宇宙の中で最も優秀で勇敢なパイロットを生み出すことで知られている。',
      ko: '자유의 투사이자 억압받는 사람들을 수호하는 갈란테는 뉴에덴에서 유일하게 진정한 민주주의를 실현하는 국가입니다. 한 시대를 주름잡은 급진적 지도자, 과학자, 사업가는 대부분 연방에 속한 다양한 인종 출신이었습니다. 인공지능의 선구자인 갈란테 연방은 드론과 기타 자동화 시스템에 크게 의존합니다. 그렇다고 파일럿의 능력이 뒤떨어진다는 뜻은 아닙니다. 갈란테 연방은 우주 전체를 통틀어 가장 뛰어나고 용감한 파일럿을 배출하는 것으로도 유명합니다.',
      ru: 'Федерация Галленте — единственная истинная демократия в Новом Эдеме. Ее граждане — ярые приверженцы свободы и защитники угнетенных. Из их рядов вышло много прогрессивных лидеров, ученых и дельцов нашей эпохи. Именно здесь был создан искусственный интеллект, и возможно, именно поэтому в федерации широко применяются дроны и другие автоматизированные системы. Но это не означает, что они растеряли все навыки пилотирования: федерация Галленте славится тем, что из нее вышли едва ли не самые смелые и искусные пилоты Вселенной.',
      zh: '盖伦特联邦拥有多元化的人口，为人类社会贡献了一些当代最杰出的领袖、科学家与商人，并且出了名的盛产最勇敢最优秀的飞行员。'
    },
    iconID: 1441,
    nameID: {
      de: 'Gallente',
      en: 'Gallente',
      es: 'Gallente',
      fr: 'Gallente',
      it: 'Gallente',
      ja: 'ガレンテ',
      ko: '갈란테',
      ru: 'Галленте',
      zh: '盖伦特'
    },
    shipTypeID: 606
  }
};
