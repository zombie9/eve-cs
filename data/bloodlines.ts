interface Bloodline {
  charisma: number;
  corporationID: number;
  descriptionID: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it?: string;
    ja: string;
    ko: string;
    ru: string;
    zh: string;
  };
  iconID?: number;
  intelligence: number;
  memory: number;
  nameID: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it?: string;
    ja: string;
    ko: string;
    ru: string;
    zh: string;
  };
  perception: number;
  raceID: number;
  willpower: number;
}

interface Bloodlines {
  [key: number]: Bloodline;
}

export const bloodlines: Bloodlines = {
  1: {
    charisma: 6,
    corporationID: 1000006,
    descriptionID: {
      de: 'Führungsstärke hat in der Gesellschaft der Caldari ein Gesicht: das der Deteis. Ihr scharfer Verstand und ihre Beredsamkeit haben ihnen hohe Positionen beim Militär und in der Politik verschafft. Getrieben von der Prämisse, das Wohl der Gemeinschaft stets über die Bedürfnisse des Einzelnen zu stellen, haben sie es sich zur Aufgabe gemacht, die Integrität des Staates Caldari zu wahren.',
      en: 'The Deteis are regarded as the face of leadership in Caldari society. Commonly possessed of sharp, ordered minds and articulate tongues, they are mostly found in positions of authority within military and political spheres. Driven by the cultural premise that the good of the whole must come before the needs of the individual, they have made the responsibility of upholding the integrity of the entire Caldari State their own.',
      es: 'Los deteis se consideran la personificación del liderazgo en la sociedad caldari. Gracias a sus mentes agudas y ordenadas y a su facilidad de palabra, ocupan sobre todo cargos de autoridad en las esferas militares y políticas. Motivados por la premisa cultural de que el bien común debe estar por encima de las necesidades individuales, han asumido la responsabilidad de mantener la integridad del Estado Caldari.',
      fr: "Les Deteis sont un symbole d'autorité au sein de la société caldari. Vifs d'esprit et ordonnés, ces brillants orateurs occupent pour la plupart des postes à responsabilité dans les hautes sphères politiques et militaires. Conformément au principe qui veut que le bien de la communauté passe avant les besoins individuels, ils se font un devoir de préserver l'intégrité de l'ensemble de l'État caldari.",
      it: "I Deteis sono considerati come la faccia del potere nella società Caldari. Notoriamente dotati di mente ingegnosa e di favella arguta, ricoprono principalmente posizioni autorevoli nella sfera militare e politica. Guidati dal principio culturale secondo il quale il bene di tutti deve venire prima dei bisogni individuali, si sono assunti la responsabilità di innalzare il livello di integrità dell'intero Stato Caldari.",
      ja: 'ディティス人は、カルダリ社会の主導者層を占有する存在と見られている。一般に、頭脳明晰で理路整然また能弁な彼らは、ほとんどが軍や政界で権威ある地位に就いている。個々のニーズよりも全体の利益を優先すべきであるという文化的基盤に立つ彼らは、カルダリ連合全体の秩序を保つことは自分たちの使命であると考えている。',
      ko: '칼다리 사회에서는 디타이즈를 지도자상으로 여깁니다. 디타이즈는 일반적으로 날카롭고 정돈된 사고와 뛰어난 언변을 가지고 있으며 주로 군사와 정치 영역에서 권력자의 자리에 앉습니다. 전체의 이익을 개인의 욕구보다 우선한다는 문화를 따라 디타이즈는 칼다리 연합 전체의 완벽함을 유지하는 책임을 수행하고 있습니다.',
      ru: 'Представители Детеис рассмотрены как верхушка лидеров в обществе Калдари. Благодаря острому уму и способности доходчиво формулировать мысль они идеально подходят на высокие военные и политические должности. Ведомые императивом своей культуры, согласно которому благо всех выше блага каждого, они возложили на себя одних ответственность за поддержание целостности всего государства Калдари.',
      zh: '蒂泰斯人代表了加达里的领导阶层。凭借着敏锐清晰的思路与巧舌如簧的演讲，蒂泰斯人通常担任军事或政治领域中的权力职位。他们坚信集体利益高于个人诉求，将维护加达里名誉作为己任。'
    },
    iconID: 1633,
    intelligence: 7,
    memory: 7,
    nameID: {
      de: 'Deteis',
      en: 'Deteis',
      es: 'Deteis',
      fr: 'Deteis',
      it: 'Deteis',
      ja: 'ディティス',
      ko: '데테이스',
      ru: 'Детеис',
      zh: '蒂泰斯'
    },
    perception: 5,
    raceID: 1,
    willpower: 5
  },
  2: {
    charisma: 6,
    corporationID: 1000009,
    descriptionID: {
      de: 'Ob im Kampf oder Handel, die Civire sind Meister der konzentrierten Aggression. Als starke Wettkämpfer sind sie erst in ihrem Element, wenn die Lage unübersichtlich und hektisch ist. Sie verfügen über die angeborene Fähigkeit, blitzschnell zu denken und verlieren auch unter größter Anspannung niemals die Fassung.',
      en: 'Whether engaged in trade or combat, the Civire are absolute masters of focused aggression. Highly competitive individuals, they thrive under chaotic circumstances and frenetic activity. They are often employed in highly stressful industrial and military professions due to an innate ability to think quickly on their feet and remain composed under pressure.',
      es: 'Ya sea en el comercio o el combate, los civires son maestros del enfrentamiento. De espíritu altamente competitivo, se desenvuelven con soltura en circunstancias caóticas y frenéticas. Suelen trabajar en profesiones industriales y militares de gran estrés debido a su agilidad mental innata y a su capacidad para mantener la compostura bajo presión.',
      fr: "Qu'ils soient engagés dans le commerce ou un combat, les Civire sont les maîtres absolus de l'agression ciblée. Dotés d'un esprit de compétition surdéveloppé, ils prospèrent dans le chaos et l'effervescence. Ils occupent souvent des postes industriels et militaires particulièrement stressants en raison de leur capacité innée à garder les pieds sur terre et à rester calmes sous la pression.",
      it: "Sia durante le trattative commerciali che in battaglia, i Civire sono dei maestri indiscussi nell'aggressione focalizzata. Fortemente competitivi, rendono al massimo in situazioni o attività stressanti e frenetiche. Sono spesso impiegati in mansioni industriali e militari altamente stressanti per la loro innata capacità di pensare e reagire rapidamente, rimanendo calmi anche sotto pressione.",
      ja: 'シバー人は、商売であれ戦闘であれ、的を絞った攻撃に関しては完全無欠だ。競争心が強く、混沌とした状況や熱狂的な混乱をうまく乗り越えることができる。その場その場で機転を利かせ、プレッシャーの中でも冷静さを保つ天賦の才能を持つことから、ストレスの多い産業界や軍事職に就くことが多い。',
      ko: '시비레는 무역에서든 전투에서는 집중 공격에 매우 능합니다. 경쟁심이 강한 탓에 혼란하고도 부산하기 그지없는 환경 속에서 매우 번성합니다. 시비레는 때때로 고강도 산업 및 군사직에 고용되는데, 사고가 빠르고 압박받는 상황에서도 침착함을 유지하는 능력을 타고났기 때문입니다.',
      ru: 'В бою и бизнесе представители расы сивире, как никто другой, способны сконцентрироваться на достижении поставленной цели. Будучи профессионалами высшей квалификации, они способны работать в суровых обстоятельствах и под сильным давлением. В промышленности и армии их часто ставят на должности, которые предполагают работу в сложных условиях, благодаря их способности принимать правильные решения на ходу и оставаться собранными под давлением.',
      zh: '无论是在战场还商场，赛维勒人都显得咄咄逼人。他们自身竞争力极强，在激烈混乱的状况下能有出色的表现。凭着与身俱来的快速反应能力及在高压下保持镇定的心理素质，赛维勒人经常在商业与军事两大领域获得成功。'
    },
    iconID: 1631,
    intelligence: 5,
    memory: 4,
    nameID: {
      de: 'Civire',
      en: 'Civire',
      es: 'Civire',
      fr: 'Civire',
      it: 'Civire',
      ja: 'シバー',
      ko: '시비레',
      ru: 'Цивире',
      zh: '赛维勒'
    },
    perception: 9,
    raceID: 1,
    willpower: 6
  },
  3: {
    charisma: 6,
    corporationID: 1000046,
    descriptionID: {
      de: 'Die Sebiestor werden als innovative Denker respektiert und verfügen über ein angeborenes Interesse für Technologie. Trotz chronischer Materialknappheit war es ihnen im letzten Jahrtausend gelungen, wichtige Pionierarbeit in den angewandten Wissenschaften zu leisten. Auch wenn die Umstände noch so aussichtslos erscheinen, die Sebiestor finden immer eine Lösung. Ihre Ingenieure sind davon überzeugt, aus einem beliebigen Material alles entwickeln zu können, wonach ihnen gerade der Sinn steht.',
      en: "Widely respected as some of the cluster's most innovative thinkers, the Sebiestor are an ingenious people with a natural fondness for engineering. For the last millennium they have pioneered advances in applied sciences, despite laboring under chronic material shortages. Masters of deriving solutions from impossible circumstances, Sebiestor engineers believe they can build anything, with anything, out of anything.",
      es: 'Los sebiestors son respetados, ya que se encuentran entre los pensadores más innovadores del cúmulo. Son un pueblo inventivo y amante de la ingeniería por naturaleza. Durante el último milenio, han sido pioneros en el avance de las ciencias aplicadas, a pesar de sufrir una escasez crónica de materiales. Los ingenieros sebiestors son expertos en hallar soluciones en circunstancias imposibles, y creen que pueden construir lo que sea con cualquier cosa.',
      fr: "Généralement considérés comme les penseurs les plus novateurs de la galaxie, les Sebiestor sont un peuple ingénieux, avec un penchant naturel pour l'ingénierie. Depuis un millénaire, ils jouent un rôle de pionnier dans le domaine des sciences appliquées, en dépit de pénuries chroniques de matériaux. Ils n'ont pas leur pareil pour trouver des solutions à des problèmes en apparence inextricables, et les ingénieurs sebiestor ne se laissent jamais décourager, persuadés que rien ne leur est impossible.",
      it: "Ampiamente rispettati come alcuni dei pensatori più innovativi del cluster, i Sebiestor sono davvero all'avanguardia e sono dotati di un'innata passione per l'ingegneria. Nell'ultimo millennio, hanno introdotto nuovi metodi e tecniche nelle scienze applicate, nonostante abbiano lavorato in condizioni di grave carenza di materiali. Maestri nel ricavare soluzioni da situazioni impossibili, gli ingegneri Sebiestor sono convinti di poter creare qualsiasi cosa, con qualsiasi cosa e da qualsiasi cosa.",
      ja: 'セビエスターは、生来工学技術を好む独創的な人々で、地域内で最も革新的な思想家として広く尊敬を集めている。慢性的な資源不足状態で働いてきたにもかかわらず、過去千年にわたり、応用科学の最先端でパイオニアの役割を果たしてきた。セビエスターのエンジニアたちは難局にあって解決法を導き出すことに長けており、どんなものからも、どんなものとでも、何でも作り出せると信じている。',
      ko: '클러스터에서 가장 혁신적인 사상가로 널리 존경받는 세비에스터는 선천적으로 공학을 좋아하는 독창적인 사람들입니다. 지난 천 년 동안 세비에스터는 지독한 자원 부족에 시달리면서도 응용과학의 발전을 선도했습니다. 불가능한 환경에서도 해결책을 도출하는 천재들, 세비에스터 공학자들은 그 어떤 자원으로도 무엇이든 만들어 낼 수 있다고 믿습니다.',
      ru: 'Представители народа Себьестор снискали всеобщее уважение как одни из самых передовых мыслителей галактики; они — истинные новаторы с естественной склонностью к инженерной деятельности. В течение последнего тысячелетия именно они определяют прогресс в прикладных науках, несмотря на постоянный дефицит сырья и ресурсов. Истинные мастера находить решение вопреки всем обстоятельствам, инженеры народа Себьестор уверены, что они смогут построить все, что угодно, из чего угодно, с применением любых инструментов.',
      zh: '作为广为世人推崇的创新者，赛毕斯托人是一个天生热爱工程机械的智慧民族。在过去的一千年里，赛毕斯托人经常能在物资短缺的情况下，不断创造出应用科学领域的新成就。赛毕斯托工程师们经常能在旁人认为不可能的情况下找出问题的解决方法，他们坚信他们无所不能。'
    },
    iconID: 1634,
    intelligence: 7,
    memory: 6,
    nameID: {
      de: 'Sebiestor',
      en: 'Sebiestor',
      es: 'Sebiestor',
      fr: 'Sebiestor',
      it: 'Sebiestor',
      ja: 'セビエスター',
      ko: '세비에스터',
      ru: 'Себьестор',
      zh: '赛毕斯托'
    },
    perception: 5,
    raceID: 2,
    willpower: 6
  },
  4: {
    charisma: 6,
    corporationID: 1000049,
    descriptionID: {
      de: 'Die Brutor sind ein martialisches, willensstarkes Volk. Ihr Stammeserbe liegt ihnen sehr am Herzen und sie sind für ihre organisierte und disziplinierte Lebensweise bekannt. Obwohl sie sich willensstark und geradlinig geben, erscheinen sie oft in sich gekehrt und nehmen jede noch so kleine Einzelheit wahr. Eingebettet in eine uralte Kriegstradition, die bereits im Kindesalter ihren Tribut fordert, gelten sie als körperlich robuste Individuen, die einen Gegner sehr einschüchtern können.',
      en: 'A martial, strong-willed people, the Brutor hold their tribal heritage close to their hearts, and are renowned for living regimented, disciplined lives. Despite presenting a tough, no-nonsense exterior, they are deeply introspective, aware of even the smallest detail at all times. Immersed in ancient martial traditions that begin at childhood, they are physically robust individuals and intimidating to face in the flesh.',
      es: 'La tribu Brutor, un pueblo marcial y fuerte, tiene su legado en gran estima y es célebre porque sus ciudadanos llevan vidas disciplinadas y reglamentadas. Pese a su fachada rígida y directa, son profundamente introspectivos y conscientes en todo momento del más mínimo detalle. Están inmersos en antiguas tradiciones marciales que dan comienzo en la infancia, por lo que gozan de un físico robusto que los vuelve intimidantes en persona.',
      fr: "Peuple guerrier obstiné, les Brutor tiennent énormément à leur héritage tribal et sont réputés pour leur mode de vie enrégimenté où la discipline fait loi. Durs et pragmatiques de prime abord, ils sont profondément introspectifs et toujours attentifs aux moindres détails. Immergés dès l'enfance dans les traditions martiales ancestrales, les Brutor bénéficient d'une robuste constitution qui force le respect.",
      it: "Dotati di forte volontà ed esperti nelle arti marziali, i Brutor restano attaccati alle loro origini tribali e sono noti per il loro modo di vivere rigido e inflessibile. Nonostante il loro aspetto arcigno e rigoroso, sono profondamente introspettivi e sempre consapevoli di ogni minimo dettaglio. Immersi nell'antica tradizione marziale fin dall'infanzia, sono fisicamente robusti e incutono timore se affrontati faccia a faccia.",
      ja: '武芸に優れ、強い意志を持つブルートーは民族の伝統を胸に抱き、統制の取れた規則正しい生活を送ることで知られている。力強く堅物という印象を与える外見だが、実際はかなり内省的で、常にどんな細かいことにも意識を行き届かせている。子供の頃から古代武道の伝統に浸っている彼らは、体つきがたくましく、対面した者に威圧感を与える。',
      ko: '호전적이고 의지가 강한 브루터는 대대로 물려받은 부족 전통을 가슴 깊이 간직하고 있으며 엄격한 규율로 가득 찬 삶을 산다고 알려져 있습니다. 겉으로는 거칠고 매사에 진지한 행동과는 달리 매우 내성적이며 언제나 아주 사소한 일까지 전부 꿰고 있습니다. 어릴 때부터 고대 전통 무술을 익히는 브루터는 신체가 매우 튼튼하며 실제로 만날 경우 꽤 위협적인 신체를 지녔습니다.',
      ru: 'Люди народности Брутор воинственны, обладают сильной волей и преданны своему племенному наследию. Они известны систематизированным и строго дисциплинированным образом жизни. Несмотря на суровую внешность и сдержанное поведение, они склонны сосредотачиваться на внутренних ощущениях, и всегда замечают все до мельчайших деталей. С самого детства они перенимают древние военные традиции и являются физически крепкими людьми, с которыми лучше не сходиться в ближнем бою.',
      zh: '布鲁特人身强体壮、意志坚定且严于律己，他们秉承其祖先的游牧文化。尽管外表上给人以粗旷、严肃之感，布鲁特人内心还是善于自省，非常敏锐。由于自小便受武力熏陶，他们的身体非常粗壮，能给他人造成压迫感。'
    },
    iconID: 1635,
    intelligence: 4,
    memory: 4,
    nameID: {
      de: 'Brutor',
      en: 'Brutor',
      es: 'Brutor',
      fr: 'Brutor',
      it: 'Brutor',
      ja: 'ブルートー',
      ko: '브루터',
      ru: 'Брутор',
      zh: '布鲁特'
    },
    perception: 9,
    raceID: 2,
    willpower: 7
  },
  5: {
    charisma: 3,
    corporationID: 1000066,
    descriptionID: {
      de: 'Wahre Amarr sind stolz, hochmütig und verfügen über einen ausgeprägten Sinn für Tradition und Herkunft. Sie gelten als arrogant und tyrannisch. Die Niederlage gegen die geheimnisvollen Jovianer und die anschließende Rebellion der Minmatar haben ihre Kultur für immer geprägt. Diese zweifache Niederlage gilt heute als Wendepunkt in ihrer Geschichte und prägte eine ganze Generation von Politikern und Philosophen unter der kaiserlichen Elite.',
      en: "True Amarrians are proud and supercilious, with a great sense of tradition and ancestry. They are considered arrogant and tyrannical by most others. The Empire's defeat at the hands of the mysterious Jovians, and the Minmatar uprising that followed, left an indelible mark on Amarrian culture. This double failure, a turning point in their history, has shaped an entire generation of policy and philosophy among the imperial elite.",
      es: 'Los amarrianos verdaderos son orgullosos y soberbios, y poseen un gran sentido de la tradición y la ascendencia. Suelen ser considerados arrogantes y tiranos. La derrota del Imperio a manos de los misteriosos jovianos, y el levantamiento minmatariano que se produjo a continuación, dejaron una marca indeleble en la cultura amarriana. Este doble fracaso, un punto de inflexión en su historia, ha dado forma a toda una generación política y filosófica entre la élite imperial.',
      fr: "Fiers et hautains, les Amarr de souche possèdent un sens aigu de la tradition et du lignage. Ils sont considérés par une vaste majorité comme des despotes arrogants. La défaite de l'empire aux mains des mystérieux Jove et le soulèvement minmatar subséquent ont laissé une marque indélébile sur la culture amarr. Ce double échec, un tournant dans leur histoire, a façonné une génération entière de politique et de philosophie au sein de l'élite impériale.",
      it: "Gli Amarr veri sono orgogliosi e altezzosi e hanno uno spiccato senso della tradizione e dell'identità. Quasi tutti li considerano arroganti e tiranni. La sconfitta dell'Impero per mano dei misteriosi Jovian, e la successiva rivolta Minmatar, lasciò un segno indelebile nella cultura Amarr. Questo doppio fallimento, punto di svolta nella loro storia, ha forgiato un'intera generazione di politici e filosofi tra l'élite imperiale.",
      ja: '真のアマー人は伝統と先祖を重んじ、誇り高く尊大な民族である。他の者たちからは、横柄で抑圧的だと見られている。謎の民族ジョビ人に喫した敗北と、その後のミンマターの台頭は、アマー文化に拭い難い汚点を残し​た。彼らの歴史を大きく変えることになったこの2つの失態を受けて、帝国のエリートたちの間で新時代における政策と理念が形成された。',
      ko: '진정한 아마르인은 전통과 조상을 중시하며 자존심이 세고 거만합니다. 다른 인종은 이런 아마르인이 오만하고 폭력적이라고 생각합니다. 불가사의한 조브인에게 당한 제국의 패배, 그리고 뒤이은 민마타의 봉기는 아마르 문화에 잊을 수 없는 흠집을 남겼습니다. 이 두 번의 실패라는 아마르 역사의 전환점은 이후 제국 엘리트 계층의 정책과 철학 형성에 영향을 끼쳤습니다.',
      ru: 'Истинные представители Амарр гордые и высокомерные, с глубоко приверженными традициями и наследием предков. Многие считают, что они надменны и деспотичны. Поражение Империи от рук таинственной расы Джоув, и последовавшее затем восстание расы Минматар, оставили неизгладимый след в культуре империи Амарр. Это двойное поражение стало поворотным моментом в истории и определило дальнейшую политику и философию имперской элиты.',
      zh: '正统艾玛人骄傲自大，有着强烈的传统与血统意识。多数人都认为正统艾玛人高傲且专横。与神秘朱庇特人交战失败及后续的米玛塔尔人抗争成了艾玛人心中一道抹不去的伤口。作为艾玛历史上的转折点，这两次大败对整个一代帝王领袖的政策与理念都产生了深远影响。'
    },
    iconID: 1628,
    intelligence: 7,
    memory: 6,
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
    perception: 4,
    raceID: 4,
    willpower: 10
  },
  6: {
    charisma: 8,
    corporationID: 1000072,
    descriptionID: {
      de: 'Abgesehen von den Khanid haben sich die Ni-Kunni wesentlich besser in die Gesellschaft der Amarr integriert als der Großteil der von den Amarr unterworfenen Völker. Vor über 1.000 Jahren waren sie vom Imperium der Amarr erobert worden. Doch längst sind sie keine Sklaven mehr, sondern gehen einer Arbeit als Händler oder Kunsthandwerker nach – traditionellen Berufen, die von den wahren Amarr gemieden werden, doch noch immer wesentlicher Bestandteil der Gesellschaft sind.',
      en: 'With the exception of the Khanid, the Ni-Kunni were assimilated into Amarr society far more easily than the majority of Amarrian conquests. Conquered more than 1000 years ago by the Amarr Empire, they are not generally considered “enslaved” anymore. Most Ni-Kunni are tradesmen and artisans - occupations traditionally eschewed by true Amarrians, but still considered a vital part of their society.',
      es: 'A excepción de los Khanid, los ni-kunnis se integraron en la sociedad de Amarr con mucha más facilidad que la mayoría de conquistas amarrianas. Como fueron invadidos hace más de 1000 años por el Imperio, ya no se les considera «esclavizados». Gran parte de los ni-kunnis se dedica al comercio y a la artesanía; ocupaciones que los verdaderos amarrianos han procurado evitar, pero que siguen considerándose una parte vital de su sociedad.',
      fr: "À l'exception des Khanid, les Ni-Kunni se sont intégrés à la société amarr beaucoup plus facilement que la majorité des peuplades colonisées par l'empire. Envahis il y a plus de 1 000 ans par l'Empire amarr, ils ne sont généralement plus considérés comme des « esclaves ». La plupart des Ni-Kunni font carrière dans le commerce et l'artisanat, des professions vitales à la société amarr certes, mais néanmoins dédaignées par les Amarr de souche.",
      it: 'Eccezion fatta per il popolo Khanid, i Ni-Kunni si integrarono nella società Amarr molto più facilmente rispetto alla maggioranza degli altri popoli che gli Amarr sottomisero. Conquistati più di 1000 anni fa dall\'Impero Amarr, non vengono generalmente più considerati come "schiavi". Gran parte dei Ni-Kunni sono commercianti e artigiani; occupazioni tradizionalmente evitate dai veri Amarriani, sebbene considerate come una parte vitale della loro società.',
      ja: 'ニクンニ人は、アマー人に征服された中では、クー二ッドを除けば極めて容易にアマー社会に同化した民族である。アマー帝国に1000年以上前に征服された彼らにとって、「奴隷にされた」という概念はない。ニクンニ人のほとんどは商人か職人である。純粋なアマー人は伝統的にこれらの職業を避けてきたが、アマー社会を形成する重要な職種である。',
      ko: '카니드를 제외한 니쿠니는 다른 아마르 점령 국가들보다 훨씬 빠르게 아마르에 동화되었습니다. 정복 후 아마르 제국에 1,000여 년 동안 지배를 받은 니쿠니는 이제 "노예"로 취급받지 않습니다. 니쿠니 대부분은 무역업자와 장인으로 살아가고 있습니다. 이 두 직종은 아마르인들이 전통적으로 피하는 직업이지만 사회가 유지되는데 없어서는 안되는 중요한 한 부분입니다.',
      ru: 'Если не считать Ханид, народ Ни-Кунни ассимилировался в общество империи Амарр легче, нежели другие нации, завоеванные империей. Завоевание произошло более тысячи лет назад, и их уже никто не воспринимает как «порабощенных». Большинство представителей Ни-Кунни торговцы и ремесленники: этот род занятий, истинные представители Амарр традиционно не одобряют, но он является жизненно важной частью общества.',
      zh: '与其他被艾玛人征服的族人相比，尼库恩纳人像卡尼迪人一样，更好地融入了艾玛社会。尼库恩纳在一千多年之前被艾玛征服，如今已基本不再被看作“劳工”了。大部分尼库恩纳人都是商人和工匠——虽然艾玛人瞧不起这些行当，但它们却仍是艾玛社会中不可或缺的部分。'
    },
    iconID: 1632,
    intelligence: 5,
    memory: 6,
    nameID: {
      de: 'Ni-Kunni',
      en: 'Ni-Kunni',
      es: 'Ni-Kunni',
      fr: 'Ni-Kunni',
      it: 'Ni-Kunni',
      ja: 'ニクンニ',
      ko: '니쿠니',
      ru: 'Ни-Кунни',
      zh: '尼库恩纳'
    },
    perception: 7,
    raceID: 4,
    willpower: 4
  },
  7: {
    charisma: 8,
    corporationID: 1000107,
    descriptionID: {
      de: 'Die Gallente schätzen Freiheit und persönliche Unabhängigkeit über alles. Sie haben die einzig wahre Demokratie von New Eden gegründet und damit eine ethnisch vielfältige, kulturell reiche und fortschrittliche Gesellschaft ins Leben gerufen. Stets ermutigen sie ihre Bürger, die Initiative zu ergreifen und Unternehmergeist zu zeigen. Ihr Zorn hält sich in Grenzen, bisweilen wirken sie sogar unentschlossen. Doch wenn es darauf ankommt, bekommen Gegner ihre ganze militärische und wirtschaftliche Entschlossenheit zu spüren.',
      en: 'The Gallente value freedom and individual liberty above all else. Founders of the only true democracy of New Eden, they have created an ethnically diverse, culturally rich, progressive society that encourages enterprise and initiative in its citizens. While slow to anger and occasionally indecisive, they are also capable of harnessing enormous military and economic resolve when truly tested.',
      es: 'Los gallentes valoran la libertad, tanto común como individual, por encima de todo. Los fundadores de la única auténtica democracia de Nuevo Edén han creado una sociedad étnicamente variada, progresiva y de gran riqueza cultural, que fomenta el emprendimiento y la iniciativa de sus ciudadanos. Aunque tardan en enfadarse y a veces son algo indecisos, también son capaces de explotar una enorme resolución militar y económica cuando se les pone a prueba.',
      fr: "Aux yeux des Gallente, l'indépendance et la liberté individuelle passent avant tout le reste. Fondateurs de la seule véritable démocratie de New Eden, ils ont créé une société progressiste, véritable mosaïque ethnique à la culture foisonnante, qui encourage la libre entreprise et l'esprit d'initiative chez ses citoyens. Privilégiant la diplomatie au conflit et parfois quelque peu indécis, ils sont néanmoins capables de décréter une mobilisation militaire et économique massive lorsque le besoin s'en fait sentir.",
      it: "I Gallenteani considerano la libertà come il valore più importante. Fondatori dell'unica vera democrazia di New Eden, hanno sviluppato una società multietnica, progressista e culturalmente ricca che incoraggia l'intraprendenza e l'iniziativa dei suoi cittadini. Sebbene poco collerici e talvolta indecisi, sono comunque capaci di prendere importanti decisioni economiche e militari se messi davvero alla prova.",
      ja: 'ガレンテ人は、自由と独立を何よりも重んじる。ニューエデン唯一の真の民主主義の創設者である彼らは、民族的に多様で、文化的に豊かかつ進歩的な社会を作り上げた。そしてこの社会が市民の間で企業とイニシアティブを促したのである。怒りに駆られるには時間がかかり時折優柔不断である一方、十分なテストが行われた場合には、非常に大きな軍隊と経済的な解決法を利用することもある。',
      ko: '갈란테는 무엇보다 자유와 개인의 자유를 중요하게 여깁니다. 뉴에덴에서 유일하게 진정한 민주주의를 창시한 갈란테는 다양한 민족들이 모여 풍부한 문화를 이룬, 코퍼레이션을 장려하고 시민들의 진취성을 독려하는 진보적인 사회를 만들었습니다. 갈란테는 쉽게 분노하지 않고 어떨 때는 우유부단하기까지 하지만, 진정한 시련이 닥쳤을 때 막대한 군사력이나 경제력을 그 해결책으로 동원할 능력이 있습니다.',
      ru: 'Представители Галленте ценят независимость и личную свободу превыше всего. Основатели единственного, по-настоящему демократического строя в Новом Эдеме, создали этнически разнообразное, культурно богатое, прогрессивное общество, поощряющее предпринимательство и инициативность своих граждан. Они не скоро приходят в гнев и иногда проявляют нерешительность, но при необходимости они способны мобилизовать огромные экономические и военные ресурсы.',
      zh: '盖伦特极度推崇个人自由。在新伊甸中，盖伦特人是真正的民主开创者，他们建立了一个在人口上具备多样性、在文化上蕴含丰富性的进步型社会，政府鼓励人民养成敢为天下先的开创意识。虽然盖伦特人性格较温柔，且有时会带点优柔寡断，但当他们在经受真正考验时，盖伦特人都会迸发出惊人的军事经济实力。'
    },
    iconID: 1629,
    intelligence: 6,
    memory: 4,
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
    perception: 8,
    raceID: 8,
    willpower: 4
  },
  8: {
    charisma: 6,
    corporationID: 1000111,
    descriptionID: {
      de: 'Die Intaki sind eine der größten ethnischen Volksgruppen in der Föderation. Sie sind sprachlich sehr begabt und nehmen eine wichtige Stellung in der föderalen Bürokratie ein. Sie haben sich der Kultur der Gallente größtenteils angepasst, halten jedoch weiterhin an ihrer Identität und ihrem Glauben fest, vor allem, was das Thema Geburt und Wiederauferstehung angeht. Ihre Theorien schenken ihnen eine einzigartige Sichtweise auf das Leben und die Lebenden und viele halten die unerschütterliche Natur der Intaki für einen wesentlichen Bestandteil dieser Philosophie.',
      en: "The Intaki are one of the largest ethnicities of the Federation. Exceedingly gifted communicators, they are prominent among the Federal bureaucracy. Though mostly assimilated into Gallente culture, they still cling to their own identities and beliefs, most notably their unusual theories regarding death and rebirth. These theories give them a unique outlook on life and the living, and many attribute the Intaki's stoic nature to this philosophy.",
      es: 'Los intakis son una de las etnias más numerosas de la Federación. Se trata de comunicadores muy hábiles, de modo que es fácil encontrarlos en los altos cargos de la burocracia federal. Aunque en su mayoría están integrados en la cultura gallente, siguen aferrándose a sus propias identidades y creencias, y sobre todo a sus inusuales teorías sobre la muerte y el renacimiento. Estas teorías aportan una visión única sobre la vida y los seres vivos, y muchos le atribuyen la naturaleza estoica de los intaki.',
      fr: "Les Intaki sont l'un des plus grands groupes ethniques de la Fédération. Orateurs hors pair, ils occupent une place importante au sein de la bureaucratie fédérale. Bien qu'ils soient parfaitement intégrés à la culture gallente, ils s'accrochent encore et toujours à leurs propres identités et croyances, et plus particulièrement à leurs théories insolites sur la mort et la réincarnation. Celles-ci leur confèrent une conception unique de la vie et des êtres vivants, et beaucoup imputent le stoïcisme naturel des Intaki à cette philosophie.",
      it: "L'Intaki è una delle etnie più numerose della Federazione. Comunicatori di straordinaria bravura, rivestono ruoli importanti nella burocrazia federale. Sebbene largamente integrati nella cultura Gallente, restano comunque attaccati alla loro identità e alle credenze religiose, in particolare alle loro teorie insolite sulla morte e sulla rinascita. Queste teorie hanno consentito loro di sviluppare una visione particolare sulla vita e sul modo di viverla, e in molti attribuiscono la natura stoica degli Intaki a questa filosofia.",
      ja: 'インタキは連邦で最大の民族のひとつである。並々ならぬコミュニケーション能力を持ち、連邦官僚の中でも目を引く存在だ。ほとんどはガレンテ文化に同化されてしまったが、それでもインタキ独自のアイデンティティと信念には固執しており、なかでも彼らの死と再生に関する奇抜な理論は有名である。そうした理論を持つ彼らは、生命や生活について独自の見方をしている。インタキのストイックな性質はこの独自の哲学に起因すると多くの者たちは考えている。',
      ko: '인타키는 연방 내 규모가 가장 큰 민족 중 하나입니다. 의사소통에 뛰어난 재능이 있는 인타키는 연방 관료들 가운데에서 매우 눈에 띕니다. 대부분은 갈란테 문화에 동화되었지만, 여전히 자신들의 정체성과 믿음, 그중에서도 특히 죽음과 부활에 대한 독특한 이론에 애착 있습니다. 이로 인해 자신들만의 인생관과 생활관을 형성하며, 대다수는 인타키의 금욕주의적 성향이 이런 철학에서 비롯된다고 생각합니다.',
      ru: 'Интаки — одна из крупнейших народностей федерации Галленте. Они наделены огромным талантом к ведению переговоров и занимают важные посты в федеральном бюрократическом аппарате. Несмотря на то, что культура Галленте оказала сильное влияние на их общество, они все еще придерживаются традиционных ценностей и убеждений, в частности необычных теорий жизненного цикла человека, его смерти и перерождения. Благодаря этим теориям, у них сформировалось уникальное мировоззрение на жизнь и на живущих; многие приписывают стоическую натуру Интаки именно этой философии.',
      zh: '印塔基是联邦中人口最多的民族之一。印塔基人具备处理人际关系的天分，在官场上表现十分显眼。虽然盖伦特文化已部分渗透了印塔基社会，但印塔基人依然秉承着自己的文化理念，其中最值一提的便是他们独特的生死论。此理念让印塔基人对生死持有独到的见解。许多人认为印塔基人淡泊的性格正是源于这种理念。'
    },
    iconID: 1630,
    intelligence: 8,
    memory: 7,
    nameID: {
      de: 'Intaki',
      en: 'Intaki',
      es: 'Intaki',
      fr: 'Intaki',
      it: 'Intaki',
      ja: 'インタキ',
      ko: '인타키',
      ru: 'Интаки',
      zh: '印塔基'
    },
    perception: 3,
    raceID: 8,
    willpower: 6
  },
  9: {
    charisma: 5,
    corporationID: 1000177,
    descriptionID: {
      de: 'Die verschiedenen existierenden Stämme der Jovianer sind nicht das Ergebnis geografisch oder klimatisch bedingter Unterschiede, sondern der Gentechnologie geschuldet, die über viele Jahrhunderte weiterentwickelt wurde. Die Statics gehören zu einem der beiden größten Stämme. Statics gelten als introvertiert und möchten weder die sozialen Strukturen noch ihrem biologischen Status ändern. Sie sehen sich als Beobachter, die so wenig wie möglich mit der Welt in Kontakt treten möchten. Sie halten sich für genetisch hochentwickelt und missbilligen groß angelegte Programme der Gentechnologie.',
      en: 'The different branches of Jovians that exist are not the result of variations in geographical or climatic differences, but rather that of genetic engineering through the centuries. The Statics are one of the two main branches. Statics are generally introvert and prefer status quo, both socially and biologically. The Statics regard themselves as observers that should interfere as little as possible with the world. They believe that they are as genetically evolved as can be and generally frown upon large-scale genetic engineering programs.',
      es: 'Las distintas ramas de jovianos no son el resultado de variaciones en las diferencias geográficas o climáticas, sino producto de la ingeniería genética a lo largo de los siglos. Los estáticos, generalmente introvertidos y con preferencia por el status quo social y biológico, son una de las dos ramas principales. Se consideran individuos observadores que deben interferir lo menos posible en el mundo. Creen que están tan evolucionados genéticamente como es posible y, por lo general, no ven con buenos ojos los programas de ingeniería genética a gran escala.',
      fr: "Les différentes factions jove actuelles ne sont pas le résultat de modifications géographiques ou climatiques, mais plutôt l'œuvre de plusieurs siècles de manipulations génétiques. Les Statics sont l'une des deux branches principales. Ils sont généralement introvertis et partisans du statu quo, à la fois social et biologique. Les Statics se considèrent comme des observateurs extérieurs et, en tant que tels, ils évitent autant que possible de s'immiscer dans les affaires du monde. Persuadés d'être à la pointe de l'évolution biologique, ils voient généralement d'un mauvais œil les programmes de génie génétique à grande échelle.",
      it: 'Le diverse tipologie dei gioviani esistenti non sono il risultato di variazioni geografiche o climatiche, ma piuttosto di mutazioni genetiche avvenute nel corso dei secoli. Gli Statics rappresentano uno dei due rami principali. Gli Statics sono generalmente introversi e preferiscono mantenere lo status quo, sia livello sociale che biologico. Gli Statics si definiscono degli osservatori che devono interferire il meno possibile con il mondo. Ritengono di aver raggiunto il massimo livello di evoluzione genetica e, in genere, si accigliano di fronte a programmi di ingegneria genetica su larga scala.',
      ja: 'ジョビ人にはさまざまなタイプがいるが、これは地理や気候の違いによるものではなく、何世紀もにわたる遺伝子組み換えの結果だ。スタティックは、主要な2タイプのうちの1つである。スタティックは一般的に内気で、社会的にも生物学的にも現状維持を望む。スタティックは自分たちのことを、できるだけ世界と関わらない観察者と見なしている。彼らは遺伝子的進化の究極に至っていると信じ、大規模な遺伝子組み換えプログラムには難色を示す。',
      ko: '조브인 분파가 여럿인 이유는 지형이나 기후의 차이 때문이 아닌, 수 세기에 걸친 유전 공학의 결과라고 할 수 있습니다. 주요 분파 둘 가운데 하나는 스태틱입니다. 스태틱은 보통 내성적이며 사회적, 생물학적으로 현상을 유지하는 것을 선호합니다. 또한 자신들은 관찰자이므로 세계에 최소한으로만 간섭해야 한다고 생각합니다. 스태틱은 자신들이 유전적으로 진화할 만큼 진화했다고 믿으며 대규모 유전 공학 프로그램을 못마땅해합니다.',
      ru: 'Разница между представителями народа Джоув является результатом не географических или климатических различий, а вековой генной инженерии. Статики являются одним из двух основных ответвлений. Статики, как правило, являются интровертами и предпочитают сохранять существующее положение вещей, как в социальном аспекте, так и в биологическом. Статики считают себя наблюдателями, которые должны вмешиваться в окружающий мир как можно реже. Они верят, что достигли генетического предела совершенства, и с подозрением относятся к масштабным программам генной инженерии.',
      zh: '不同分支朱庇特人的存在不是地理或气候差异造成的结果，而是由于长达数世纪的基因工程。斯塔蒂克人是朱庇特人的是两支主要分支之一。斯塔蒂克人一般性格内向，喜欢维持目前的社会和生理状态。斯塔蒂克人认为自己是旁观者，应该尽可能少地参与世事。他们认为自己的基因进化程度已经达到极限，因此常对大型基因工程项目表示不悦。'
    },
    iconID: 0,
    intelligence: 10,
    memory: 10,
    nameID: {
      de: 'Static',
      en: 'Static',
      es: 'Estáticos',
      fr: 'Static',
      it: 'Statico',
      ja: 'スタティック',
      ko: '스태틱',
      ru: 'Статик',
      zh: '斯塔蒂克'
    },
    perception: 7,
    raceID: 16,
    willpower: 8
  },
  10: {
    charisma: 7,
    corporationID: 1000178,
    descriptionID: {
      de: 'Die verschiedenen existierenden Stämme der Jovianer sind nicht das Ergebnis geografisch oder klimatisch bedingter Unterschiede, sondern der Gentechnologie geschuldet, die über viele Jahrhunderte weiterentwickelt wurde. Modifier sind die Enthusiasten der jovianischen Familie. Sie sind neugierig und stets bereit, Neues zu erleben und zu erforschen. Modifier sterben früher als andere Jovianer und sind anfälliger für die gefürchtete jovianische Krankheit. Anscheinend liegt es an ihrer rasanten Lebensweise, dass sich ihre Kräfte schneller erschöpfen.',
      en: 'The different branches of Jovians that exist are not the result of variations in geographical or climatic differences, but rather that of genetic engineering through the centuries. The Modifiers are the enthusiasts of the Jovian family. They are curious and constantly willing to try or experience something new and fresh. Modifiers have lower life expectancy that other Jovians and are more susceptible to the dreaded Jovian Disease. It seems that by constantly living on the edge makes them burn out faster.',
      es: 'Las distintas ramas de jovianos no son el resultado de variaciones en las diferencias geográficas o climáticas, sino producto de la ingeniería genética a lo largo de los siglos. Los modificadores son los entusiastas de la familia joviana. Son curiosos y siempre están dispuestos a probar o experimentar cosas nuevas e inéditas. Tienen una menor esperanza de vida que sus congéneres y son más susceptibles de padecer la temida enfermedad joviana. Parece que el hecho de vivir constantemente al límite hace que se consuman más rápido.',
      fr: "Les différentes factions jove actuelles ne sont pas le résultat de modifications géographiques ou climatiques, mais plutôt l'œuvre de plusieurs siècles de manipulations génétiques. Les Modifiers sont les plus enthousiastes de toutes. D'un naturel curieux, ils sont constamment prêts à tenter de nouvelles expériences. Les Modifiers ont une espérance de vie inférieure à leurs concitoyens et sont plus sensibles au redoutable syndrome jove. Il semblerait que leur vie trépidante épuise plus rapidement leur énergie vitale.",
      it: "Le diverse tipologie dei gioviani esistenti non sono il risultato di variazioni geografiche o climatiche, ma piuttosto di mutazioni genetiche avvenute nel corso dei secoli. I Modificatori sono gli entusiasti della famiglia dei gioviani. Sono curiosi e sempre disposti a provare qualcosa di nuovo e diverso. I Modificatori hanno un'aspettativa di vita inferiore a quella degli altri gioviani e sono maggiormente soggetti alla temuta Malattia Gioviana. Pare che la loro inclinazione a vivere al limite li porti a logorarsi precocemente.",
      ja: 'ジョビ人にはさまざまなタイプがいるが、これは地理や気候の違いによるものではなく、何世紀もにわたる遺伝子組み換えの結果だ。モディファイヤーは、ジョビ人の中でも熱心なタイプである。好奇心旺盛で、常に新しいことを試す意欲にあふれている。モディファイヤーは他のジョビ人よりも平均寿命が短く、ジョビアン感染症にかかる可能性が高い。いつも危険な生き方をする彼らは消耗も激しいようだ。',
      ko: '조브인 분파가 여럿인 이유는 지형이나 기후의 차이 때문이 아닌, 수 세기에 걸친 유전 공학의 결과라고 할 수 있습니다. 모디파이어는 조브인 계열 가운데 가장 열정적입니다. 이들은 호기심이 많고 끊임없이 뭔가 새롭고 신선한 것을 시도하거나 경험하려고 합니다. 모디파이어는 다른 조브인보다 기대 수명이 낮고 끔찍한 조브 질병에 걸릴 확률이 높습니다. 모험을 즐기며 사는 성정 탓에 수명이 짧은 것일지도 모릅니다.',
      ru: 'Разница между представителями народа Джоув является результатом не географических или климатических различий, а вековой генной инженерии. Модификаторы ― это энтузиасты народа Джоув. Их отличает любопытство и стремление постоянно испытывать что-то новое и неизведанное. Модификаторы отличаются меньшей продолжительностью жизни и более подвержены риску заболеть ужасной «джовианской болезнью». Видимо, жизнь в постоянном напряжении истощает их быстрее, чем других представителей этого народа.',
      zh: '不同分支朱庇特人的存在不是地理或气候差异造成的结果，而是由于长达数世纪的基因工程。莫迪菲人是朱庇特族系中的狂热者。他们好奇心很重，总是想要尝试或体验新鲜事物。莫迪菲人的寿命比其他朱庇特人要短，而且更容易受到可怕的朱庇特综合症的侵害。看来，总是处于兴奋状态使他们更快燃烧了自己的生命。'
    },
    iconID: 0,
    intelligence: 7,
    memory: 7,
    nameID: {
      de: 'Modifier',
      en: 'Modifier',
      es: 'Modificadores',
      fr: 'Modifier',
      it: 'Modificatore',
      ja: 'モディファイヤー',
      ko: '모디파이어',
      ru: 'Модификатор',
      zh: '莫迪菲'
    },
    perception: 10,
    raceID: 16,
    willpower: 9
  },
  11: {
    charisma: 3,
    corporationID: 1000014,
    descriptionID: {
      de: 'Seit mehr als drei Jahrhunderten gehören die Achura zum Staat Caldari, doch gibt ihre Kultur noch immer Rätsel auf. Sie stammen aus dem Saisio-System, sind von Natur aus introvertierte Einsiedler, zeigen wenig Interesse an den kurzlebigen Erscheinungen der materiellen Welt und sind spirituell veranlagt. Erst vor Kurzem sind Piloten der Achura zu den Sternen aufgebrochen, von dem Wunsch beseelt, die Geheimnisse des Universums zu ergründen.',
      en: 'Achura has been part of the Caldari State for three centuries, and yet their culture has always remained something of a mystery. Originally from the Saisio System, they are reclusive and introverted, and show little interest in the ephemeral phenomena of the material world. Intensely spiritual, Achura pilots have only recently taken to the stars, driven in large part by a desire to unlock the secrets of the universe.',
      es: 'Pese a que los achuras forman parte del Estado Caldari desde hace tres siglos, su cultura siempre ha estado envuelta en un halo de misterio. Oriundos del sistema Saisio, son huraños e introvertidos, y muestran poco interés por los fenómenos efímeros del mundo material. Al tratarse de individuos sumamente espirituales, no hace tanto que sus pilotos se hicieron a las estrellas, motivados en gran parte por el deseo de desvelar los secretos del universo.',
      fr: "Achura fait partie de l'État caldari depuis trois siècles, mais la culture autochtone est toujours nimbée de mystère. Originaires du système Saisio, les Achura, solitaires et introvertis, se désintéressent des phénomènes éphémères du monde matériel. Versés dans la spiritualité, les pilotes achura ne se sont que récemment lancés dans l'exploration spatiale, aiguillonnés par leur désir de percer les secrets de l'univers.",
      it: "Nonostante Achura faccia parte dello Stato Caldari da tre secoli, la sua cultura è sempre rimasta piuttosto misteriosa. Originari del Sistema Saisio, gli Achura sono solitari e introversi e mostrano poco interesse nei fenomeni effimeri del mondo materiale. Fortemente spirituali, i piloti achuriani hanno conquistato le stelle solo di recente, spinti per lo più dal desiderio di scoprire i segreti dell'universo.",
      ja: 'アチュラがカルダリ連合の一部となって3世紀が経つが、アチュラの文化は常に謎であり続けていた。元々はサイシオシステムの出身で、閉鎖的で内向的な彼らは、物質界のつかの間の現象にはほとんど興味を持っていない。精神的な世界を重んじるアチュラのパイロットたちが、主に宇宙の秘密を解き明かしたいという欲求から星に興味を抱くようになったのは、つい最近のことである。',
      ko: '아츄라는 3세기 넘게 칼다리 연합에 속해있었지만 이들의 문화는 지금까지도 미스터리로 남아 있습니다. 사이시오 항성계에서 기원한 아츄라는 은둔하길 좋아하고 내성적이며, 물질계의 덧없는 현상에 대해서는 거의 관심을 보이지 않습니다. 아츄라의 파일럿들은 최근에서야 우주의 신비를 풀고 싶다는 소망을 가지고 항성 시대에 편입되었습니다.',
      ru: 'Вот уже более трех веков представители народа Ачура являются частью государства Калдари, но их культура так и остается загадкой. Родом из системы Сайсио, они замкнуты и сосредоточены на своем внутреннем мире. Их мало волнуют преходящие ценности материального мира. Глубоко одухотворенные пилоты Ачура только недавно начали свои странствия к звездам, преимущественно ведомые желанием постичь таинства Вселенной.',
      zh: '虽然加入加达里合众国已有三百年，但在外人看来，他们依然是个难以揣摩的民族。阿赫尔人最早来自赛西奥星系，他们保守、内向，对其认为的昙花一现的物质世界没什么兴趣。阿赫尔人非常注重精神世界的建设，直到最近，他们才在探求宇宙秘密的动力下，开始了星际征程。'
    },
    iconID: 3022,
    intelligence: 8,
    memory: 6,
    nameID: {
      de: 'Achura',
      en: 'Achura',
      es: 'Achura',
      fr: 'Achura',
      it: 'Achura',
      ja: 'アチュラ',
      ko: '아츄라',
      ru: 'Ачура',
      zh: '阿赫尔'
    },
    perception: 7,
    raceID: 1,
    willpower: 6
  },
  12: {
    charisma: 7,
    corporationID: 1000114,
    descriptionID: {
      de: 'Die Nation der Jin-Mei wurde erst kürzlich von der Föderation aufgenommen. Sie sind vergleichsweise spät zu den Sternen aufgebrochen. Es hatte Generationen gedauert, das strenge Kastensystem so zu verändern, dass qualifizierte Bewerber nicht aufgrund von Klassendiskriminierung ausgeschlossen wurden. Obwohl es immer wieder mit der freiheitsliebenden Kultur der Gallente in Konflikt gerät, kann das Kastensystem nicht vollständig abgeschafft werden. Aufgrund dieser kulturellen Verwicklungen lehnt es die Föderationsregierung auch ab, weitere Reformen voranzutreiben.',
      en: 'The nation of Jin-Mei is the latest addition to the Federation. They took to the stars comparatively late, as it took generations for them to transform their rigorous caste system enough for qualified people not to be excluded through class-based discrimination. Despite being at odds with the libertarian culture of the Gallente, the caste system has not been completely eliminated, nor is it likely to be further discouraged by the Federal government due to its cultural implications.',
      es: 'La nación de Jin-Mei es la última incorporación a la Federación. Se aventuraron a las estrellas relativamente tarde, pues hicieron falta varias generaciones para transformar su riguroso sistema de castas lo suficiente para que las personas cualificadas no fuesen discriminadas. Pese a no compartir la cultura libertaria de los gallentes, el sistema de castas no se ha eliminado por completo, y tampoco es probable que el gobierno federal ayude a desmontarlo debido a sus implicaciones culturales.',
      fr: "La nation des Jin-Mei est la dernière à avoir rejoint la Fédération. Ils se sont lancés dans les voyages spatiaux relativement tard, car plusieurs générations leur ont été nécessaires pour transcender la rigidité de leur système de castes et mettre un terme à la discrimination sociale affectant jusque-là les personnes qualifiées. Bien qu'il soit contraire à la culture libertaire des Gallente, le système de castes n'a pas été complètement éliminé, et force est de constater que ses implications culturelles font le jeu du gouvernement fédéral.",
      it: "La nazione di Jin-Mei è l'ultima acquisizione della Federazione. Hanno conquistato le stelle relativamente tardi e impiegato più generazioni per trasformare il loro rigoroso sistema di caste affinché coloro che erano qualificati non venissero esclusi per motivi di discriminazione di classe. Sebbene contrastato dalla cultura libertaria Gallente, il sistema di caste non è ancora stato completamente eliminato, né pare venga scoraggiato dal governo federale a causa delle sue implicazioni culturali.",
      ja: 'ジンメイは一番最近連邦に加盟した国である。彼らが比較的遅く宇宙に登場したのは、有能な人物が階級差別のために排除されることのないよう、厳格なカースト制度を変革するのに幾世代にも渡る月日を要したからである。ガレンテの自由な文化に反するものの、カースト制度は完全になくなったわけではない。また、連邦政府も、その文化的な影響を危惧し、制度の廃止を強く奨励することはないと考えられている。',
      ko: '진메이 국가는 가장 최근에 연방에 편입된 국가입니다. 비교적 늦게 항성 시대에 들어섰는데, 계급 차별 때문에 자격을 갖춘 사람들이 배제되지 않도록 엄격한 계급제를 바꾸는 데 수 세대가 걸렸기 때문입니다. 갈란테의 자유주의 문화와 대립하는 제도인데도 계급제는 완전히 사라지지 않았으며 문화적 영향력 때문에라도 이 이상 연방 정부에 의해 계급제가 수그러들 것 같지는 않습니다.',
      ru: 'Народность Цзинь-Мэй вступила в Федерацию одной из последних. Цзинь-мэй сравнительно поздно вышли в космос, так как на преобразование их жесткой кастовой системы потребовалось много поколений. До этой реформы многие одаренные личности не имели никакого будущего в обществе по классовым причинам. Несмотря на то, что кастовая система входит в противоречие с либеральной культурой Галленте, она не была полностью преодолена. Маловероятно также, что федеральное правительство будет с ней бороться, поскольку это может привести к межкультурным осложнениям.',
      zh: '梅京人是最近才加入盖伦特联邦的一个民族。他们的宇宙开拓历程相对较短。在很大程度上，这都是因为该群体施行非常严格的等级制度，许多能人巧匠仅仅因为出身原因便被排除在外。尽管与盖伦特的自由主义有相冲突的地方，梅京人的等级制度并没有完全被消灭。事实上，由于该制度本身所具有的文化影响，联邦政府不大可能再对其进行抵制。'
    },
    iconID: 3024,
    intelligence: 5,
    memory: 5,
    nameID: {
      de: 'Jin-Mei',
      en: 'Jin-Mei',
      es: 'Jin-Mei',
      fr: 'Jin-Mei',
      it: 'Jin-Mei',
      ja: 'ジンメイ',
      ko: '진메이',
      ru: 'Цзинь-мэй',
      zh: '梅京'
    },
    perception: 6,
    raceID: 8,
    willpower: 7
  },
  13: {
    charisma: 5,
    corporationID: 1000080,
    descriptionID: {
      de: 'Über viele Jahrhunderte waren die Khanid begeisterte Mitglieder der Gesellschaft der Amarr, angezogen von ihrer Glaubensbotschaft in der Zeit der ursprünglichen "Rückforderung". Eine bittere Fehde zwischen dem Imperium und einem Erben der Khanid führte zu einer Sezession, die in der Gründung des unabhängigen Königreichs Khanid endete. Mittlerweile in ihre Heimat zurückgekehrt, bringen sie seitdem ihr kulturelles und technologisches Wissen in ihr angestammtes Imperium ein.',
      en: "Swept up by the Amarr's message of faith during the original Reclaiming, the Khanid were for centuries exalted members of Amarr society, until a bitter feud between the Empire and a Khanid heir forced a secession which led to the creation of the independent Khanid Kingdom. The Khanid have since come back into the fold, bringing an infusion of cultural and technological knowledge into their ancestral Empire.",
      es: 'Influenciados por el mensaje de fe de los amarrianos durante la Recuperación original, los Khanid fueron miembros exaltados de la sociedad de Amarr durante siglos, hasta que una amarga disputa entre el Imperio y un heredero Khanid forzó una secesión que llevó a la creación del Reino Khanid independiente. Desde entonces, los Khanid han recuperado sus tradiciones, aportando una infusión de conocimientos culturales y tecnológicos a su imperio ancestral.',
      fr: "Emballés par la profession de foi amarr dans le cadre de la Reconquête initiale, les Khanid restèrent pendant des siècles des membres exaltés de la société amarr, jusqu'à ce qu'une virulente querelle entre l'empire et un héritier khanid provoque leur sécession, aboutissant ainsi à la création du Royaume khanid indépendant. Depuis, ils ont fini par renouer avec l'empire, lui insufflant au passage leurs connaissances culturelles et technologiques.",
      it: "Spazzati via dal messaggio di fede di Amarr durante la Rivendicazione originale, per secoli i Khanid furono considerati come membri eminenti della società Amarr, finché un'aspra contesa tra l'Impero e un erede al trono Khanid constrinse ad una secessione che portò alla creazione dell'indipendente Khanid Kingdom.  Da allora i Khanid sono tornati a casa, portando una miscela di conoscenze tecnologiche e culturali nel loro Impero ancestrale.",
      ja: '最初の「大いなる開放の日」時代、アマーの信仰観に激しく共感したクーニッドは、何世紀にも渡りアマー社会において賞賛される構成員であった。しかし帝国とクーニッドが苦い紛争に突入したことで、独立したクーニッド王国が誕生する。以来クーニッドは本来の一族の根源に立ち返り、文化と技術を先祖の帝国と融合させた。',
      ko: '최초의 교화 혁명이 진행되는 동안 아마르가 전한 믿음의 메시지에 휩쓸리고만 카니드는 수 세기 동안 아마르 사회에 내 고위층으로 살아왔습니다. 하지만 제국과 카니드 후계자 사이에 격렬한 불화가 일어나 결국 분리 독립을 강행했고, 독립국인 카니드 왕국이 탄생했습니다. 그 이후 카니드는 문화 및 기술 지식을 그들의 선조 격인 아마르 제국에 불어 넣으며 원래 위치로 돌아왔습니다.',
      ru: 'Народ Ханид был увлечен религиозными идеалами Aмарр еще во время первого Освоения. В течение веков он являлся самым преданным и религиозным народом в обществе Амарр, пока непримиримая вражда между Империей и наследником-ханидом не породила раскол, который привел к образованию Королевства Ханид. С тех пор народ Ханид вернулся и принес новые культурные традиции и технологические достижения своей наследственной Империи Амарр.',
      zh: '在艾玛归御的鼎盛时期，卡尼迪人深受艾玛人信仰的感化，最终归为艾玛。他们在艾玛社会中享有至高地位。后来在卡尼迪继嗣与艾玛帝国之间爆发了一场纠葛，直接导致两者分道扬镳。卡尼迪随后自建一个王国。从此之后，越来越多的卡尼迪人回归了自己的王国，为国家带去科技与文化。'
    },
    iconID: 3023,
    intelligence: 5,
    memory: 4,
    nameID: {
      de: 'Khanid',
      en: 'Khanid',
      es: 'Khanid',
      fr: 'Khanid',
      it: 'Khanid',
      ja: 'クーニッド',
      ko: '카니드',
      ru: 'Ханид',
      zh: '卡尼迪'
    },
    perception: 8,
    raceID: 4,
    willpower: 8
  },
  14: {
    charisma: 8,
    corporationID: 1000060,
    descriptionID: {
      de: 'Ursprünglich lebten die Vherokior in der weiten und unwirtlichen Wüste von Matar. Von allen Völkern der Republik haben sie die vielfältigsten Talente. So reicht ihre Berufswahl vom Arzt bis zum Mystiker, vom Gelehrten bis zum Händler. Ihre unauffällige Arbeitsweise und ihre weit verzweigten Familienklane ermöglichen ihnen eine unbegrenzte soziale Mobilität, die ihnen Zugang zu den besten, aber auch schlechtesten Aspekten der Gesellschaft gewährt.',
      en: "Originally nomads in Matar's vast and inhospitable desert regions, the Vherokior are among the most diverse individuals of the Republic. They can be found in professions ranging from doctors to mystics, scholars to merchants. Their quiet work ethic and widespread family clans allow them unlimited social mobility in the Republic, with access to both the best and the worst that society has to offer.",
      es: 'Los vherokiors, originalmente nómadas en los vastos e inhóspitos páramos de Matar, se encuentran entre los individuos más diversos de la República. Se dedican a profesiones que van desde médicos a místicos, pasando por eruditos o comerciantes. Su discreta ética de trabajo y sus amplios clanes familiares les proporcionan una movilidad social ilimitada en la República, con acceso tanto a lo mejor como a lo peor que la sociedad puede ofrecer.',
      fr: "Issus des clans nomades sillonnant les régions désertiques et inhospitalières de Matar, les Vherokior font partie des tribus les plus bigarrées de la République. Médecins, mystiques, universitaires ou encore commerçants, ils occupent des postes divers et variés. Leurs facultés d'adaptation et l'éparpillement des clans familiaux leur confèrent une mobilité sociale illimitée au sein de la République, pour le meilleur comme pour le pire.",
      it: "Originariamente nomadi nelle inospitali e vaste regioni desertiche di Matar, i Vherokior sono tra le etnie più eterogenee della Repubblica. Possono svolgere svariate professioni, dal medico al religioso, dallo studioso al mercante. La pacifica etica professionale e i loro numerosi clan familiari consentono loro di avere una mobilità sociale illimitata all'interno della Repubblica e di poter accedere al meglio e al peggio della società.",
      ja: 'ヴェロキュオール人は、元来マタールの広漠荒涼とした砂漠地帯を渡り歩く流浪人であり、現在ミンマター共和国で最も多種多様な民族である。彼らは医師、神秘家、学者、商人など、幅広い職種に就いている。職種を問わず勤勉で、一族が広域に散らばるため、彼らは共和国社会を、その上層部と底辺の双方に触れながら渡り歩くことが可能だ。',
      ko: '본래 마타르의 광활하고 혹독한 사막 지역 떠돌이였던 베로키오르는 공화국에서도 가장 특성이 다양한 인종입니다. 이들은 의사에서 비술사, 학자에서 상인까지 갖가지 전문 분야에 종사합니다. 묵묵히 일에 집중하는 노동관을 가졌고 가족 집단이 널리 퍼진 덕분에 공화국 사회가 제공하는 최고와 최악의 면을 포함해 자유롭게 직업과 계층을 오고 갑니다.',
      ru: 'Народ Верокьор, некогда кочевавший в негостеприимных пустынях планеты Матар, сейчас является одним из самых разносторонне развитых народов республики. Они способны освоить любую специальность: от врача до шамана, от ученого до коммерсанта. Их непоказное трудолюбие и широко распространенная семейно-клановая структура дают им неограниченную социальную мобильность в пределах республики, как в высших, так и низших слоях общества.',
      zh: '维洛奇亚人的祖先是玛塔利大片不毛之地上的流浪一族，如今已是共和国里最具多样性的民族之一。维洛奇亚人的职业种类丰富，有医生，有占卜家，也有学者及商人等。他们安静的工作方式及错综的家庭关系给他们带来了极大的社会机动性，能够让他们接触到社会的各个方面。'
    },
    iconID: 3021,
    intelligence: 7,
    memory: 8,
    nameID: {
      de: 'Vherokior',
      en: 'Vherokior',
      es: 'Vherokior',
      fr: 'Vherokior',
      it: 'Vherokior',
      ja: 'ヴェロキュオール',
      ko: '베로키오르',
      ru: 'Верокьор',
      zh: '维洛奇亚'
    },
    perception: 4,
    raceID: 2,
    willpower: 3
  },
  19: {
    charisma: 0,
    corporationID: 1000274,
    descriptionID: {
      de: 'Ihrem Aussehen und Anschein nach gehören die Drifter zum Volk der Jove, obgleich weit entfernt und mit einer merkwürdig veränderten Phsysiologie. Der hohe Grad an kybernetischen Modifikationen, die Drifter zur Schau stellen, scheint mit unerbittlichem Starrsinn und völliger Unbarmherzigkeit beim Verfolgen ihrer mysteriösen Ziele einherzugehen. Was auch immer ihre Ziele sind, die Technologie, die ihnen zur Verfügung steht, kann es ohne Frage mit der aufnehmen, die andere Jove benutzen, und sie vielleicht sogar übertreffen.',
      en: 'By all appearances and indications the Drifters are members of the Jove race, albeit far removed and with a strangely altered physiology. The high degree of cybernetic modification that Drifters exhibit seems to go hand in hand with an implacable single-mindedness and utter ruthlessness while pursuing their mysterious goals. Whatever their ends may be, the technology at their command unquestionably rivals and perhaps even surpasses that which other Jove have been seen to use.',
      es: 'Todo parece indicar que los drifters son miembros de la raza Jove, aunque muy lejanos y con una fisiología extrañamente alterada. El alto grado de modificación cibernética que exhiben los drifters parece ir de la mano de una implacable determinación y una absoluta crueldad a la hora de perseguir sus misteriosos objetivos. Sean cuales sean sus propósitos, está claro que la tecnología que tienen a su disposición rivaliza —e incluso supera— a la de otros Jove.',
      fr: "Étant donné leur apparence et les signes qu'ils portent, les Drifters font partie de la race jove, quoique très éloignés avec un physique étrangement altéré. Le haut degré de modification cybernétique des Drifters semble aller de pair avec leur détermination et leur rigueur implacable lorsqu'il s'agit de poursuivre leurs objectifs mystérieux. Quels que soient leurs objectifs, la technologie qu'ils possèdent rivalise et peut-être même surpasse celle des Jove.",
      ja: '遠く離れ、全く異なった生体を持ったにも関わらず、その外見やしぐさのすべてが漂流者がジョヴ族の一派であることを示している。謎に包まれた目的地を目指す中で、執念深い一心不乱さと徹底的な非情さが相まって、漂流者に高度な知能変異が起こったのだろう。目的が何であろうと、彼らの駆使する技術は紛れもなくジョヴ族の技術に匹敵し、もしかするとそれを上回りさえするかもしれない。',
      ko: '드리프터들은 그 외모와 여러 가지 모습들로 보아 조브인으로 추정됩니다. 물론, 조브인과 굉장히 다른 특징을 보이고 생리학도 괴상하게 변경되긴 했지만요. 드리프터들이 고도의 사이버네틱스 기술로 개조된 모습은 외곬수적이면서도 무자비한 성격을 그대로 보여주는 듯합니다. 동시에 뭔가 미스테리한 목표를 추구하고 있다는 것도 말이죠. 그 목표가 무엇이든, 드리프터들이 사용하는 그 기술은 지금까지 조브가 사용한 기술 수준에 필적하거나 아마도 그보다 더 뛰어난 것 같습니다.',
      ru: 'По всем прямым и косвенным признакам Скитальцы относятся к джовианам, но являются их побочной ветвью с сильно изменённой физиологией. Достигнутый Скитальцами уровень киборгизации в полной мере соответствует их неумолимой целеустремлённости и абсолютной безжалостности на пути к неведомой цели. Однако, какими бы ни были их намерения, технология в распоряжении Скитальцев как минимум не уступает той,  которую используют прочие джовиане — или превосходит её.',
      zh: '纵使流浪者远离人们视线太久，而且在生理上发生了奇怪的变化，但是不论外观还是其它种种特征都表明他们是朱庇特势力的一员。尽管已经展示出对控制论的高度化改良，他们在不懈追求不为人知的目标的过程中无处不在的执拗和彻头彻尾的冷酷却似乎并没有任何改变。不管他们的终极目标是什么，流浪者所掌握的科技毫无疑问已经达到甚至超过了其他朱庇特人的水准。'
    },
    iconID: 21404,
    intelligence: 0,
    memory: 0,
    nameID: {
      de: 'Drifter',
      en: 'Drifter',
      es: 'Drifters',
      fr: 'Drifter',
      ja: '漂流者',
      ko: '드리프터',
      ru: 'Drifter',
      zh: '流浪者'
    },
    perception: 0,
    raceID: 16,
    willpower: 0
  },
  25: {
    charisma: 9,
    corporationID: 1000293,
    descriptionID: {
      de: 'Die Narodnya scheinen eine der drei rätselhaften Untergruppen des Triglavia-Volks zu sein, in die Individuen neben ihrer Mitgliedschaft in den sogenannten Kladen eingeordnet werden können.',
      en: 'The Narodnya appear to be one of the three mysterious subdivisions of the Triglavian race that individuals can fall into alongside their membership of the so-called Clades.',
      es: 'Los narodnyas parecen ser una de las tres misteriosas subdivisiones de la raza triglaviana en las que se pueden clasificar a los individuos junto con su afiliación a los llamados clados.',
      fr: 'Les Narodnya semblent être une des trois sous-divisions mystérieuses de la race Triglavian dans laquelle les individus peuvent être répartis en plus de leur appartenance aux Clades.',
      ja: 'ナロドニャはトリグラビアン種族を3つに分ける謎の下位区分の1つである。各個人はいわゆるクレードのメンバーになると共に、どこかの下位区分に所属する。',
      ko: '나로드니야는 트리글라비안의 베일에 싸인 세 분파 중 하나로 보이며 클레이드라고 불리는 집단의 일원이 될 수 있었던 듯합니다.',
      ru: 'Судя по всему, «Народная» — это название одной из трёх таинственных подгрупп Триглава, на которые подразделяется этот народ наряду с так называемыми «кладами».',
      zh: '纳罗迪亚是三神裔种族中的三个神秘分枝之一，个体可以保留自己之前的所谓“演化枝”的身份而加入它。'
    },
    intelligence: 9,
    memory: 9,
    nameID: {
      de: 'Narodnya',
      en: 'Narodnya',
      es: 'Narodnya',
      fr: 'Narodnya',
      ja: 'ナロドニャ',
      ko: '나로드니아',
      ru: 'Народная',
      zh: '纳罗迪亚'
    },
    perception: 9,
    raceID: 135,
    willpower: 9
  },
  26: {
    charisma: 9,
    corporationID: 1000293,
    descriptionID: {
      de: 'Die Koschoi scheinen eine der drei rätselhaften Untergruppen des Triglavia-Volks zu sein, in die Individuen neben ihrer Mitgliedschaft in den sogenannten Kladen eingeordnet werden können.',
      en: 'The Koschoi appear to be one of the three mysterious subdivisions of the Triglavian race that individuals can fall into alongside their membership of the so-called Clades.',
      es: 'Los koschois parecen ser una de las tres misteriosas subdivisiones de la raza triglaviana en las que se pueden clasificar a los individuos junto con su afiliación a los llamados clados.',
      fr: 'Les Koschoi semblent être une des trois sous-divisions mystérieuses de la race Triglavian dans laquelle les individus peuvent être répartis en plus de leur appartenance aux Clades.',
      ja: 'コショイはトリグラビアン種族を3つに分ける謎の下位区分の1つである。各個人はいわゆるクレードのメンバーになると共に、どこかの下位区分に所属する。',
      ko: '코쇼이는 트리글라비안의 베일에 싸인 세 분파 중 하나로 보이며 클레이드라고 불리는 집단의 일원이 될 수 있었던 듯합니다.',
      ru: 'Судя по всему, «Кащей» — это название одной из трёх таинственных подгрупп Триглава, на которые подразделяется этот народ наряду с так называемыми «кладами».',
      zh: '科斯奇是三神裔种族中的三个神秘分枝之一，个体可以保留自己之前的所谓“演化枝”的身份而加入它。'
    },
    intelligence: 9,
    memory: 9,
    nameID: {
      de: 'Koschoi',
      en: 'Koschoi',
      es: 'Koschoi',
      fr: 'Koschoi',
      ja: 'コショイ',
      ko: '코쇼이',
      ru: 'Кащей',
      zh: '科斯奇'
    },
    perception: 9,
    raceID: 135,
    willpower: 9
  },
  27: {
    charisma: 9,
    corporationID: 1000293,
    descriptionID: {
      de: 'Die Navka scheinen eine der drei rätselhaften Untergruppen des Triglavia-Volks zu sein, in die Individuen neben ihrer Mitgliedschaft in den sogenannten Kladen eingeordnet werden können.',
      en: 'The Navka appear to be one of the three mysterious subdivisions of the Triglavian race that individuals can fall into alongside their membership of the so-called Clades.',
      es: 'Los navkas parecen ser una de las tres misteriosas subdivisiones de la raza triglaviana en las que se pueden clasificar a los individuos junto con su afiliación a los llamados clados.',
      fr: 'Les Navka semblent être une des trois sous-divisions mystérieuses de la race Triglavian dans laquelle les individus peuvent être répartis en plus de leur appartenance aux Clades.',
      ja: 'ナフカはトリグラビアン種族を3つに分ける謎の下位区分の1つである。各個人はいわゆるクレードのメンバーになると共に、どこかの下位区分に所属する。',
      ko: '나브카는 트리글라비안의 베일에 싸인 세 분파 중 하나로 보이며 클레이드라고 불리는 집단의 일원이 될 수 있었던 듯합니다.',
      ru: 'Судя по всему, «Навка» — это название одной из трёх таинственных подгрупп Триглава, на которые подразделяется этот народ наряду с так называемыми «кладами».',
      zh: '纳夫卡是三神裔种族中的三个神秘分枝之一，个体可以保留自己之前的所谓“演化枝”的身份而加入它。'
    },
    intelligence: 9,
    memory: 9,
    nameID: {
      de: 'Navka',
      en: 'Navka',
      es: 'Navka',
      fr: 'Navka',
      ja: 'ナフカ',
      ko: '나브카',
      ru: 'Навка',
      zh: '纳夫卡'
    },
    perception: 9,
    raceID: 135,
    willpower: 9
  }
};
