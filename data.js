// data.js - FoxyVocab Data Layer
// Diagnostic logging for old iPad compatibility
console.log('[FoxyVocab] data.js: loading started');

/**
 * @typedef {Object} VocabularyWord
 * @property {string} definition - English definition
 * @property {'noun'|'verb'|'adj'|'adv'|'prep'|'conj'|'pron'|'idiom'|'phrase'} pos - Part of speech
 * @property {string} pron - IPA pronunciation
 * @property {string} example - English example sentence
 * @property {string} vietnamese - Vietnamese translation
 * @property {string} vietnamese_example - Vietnamese translation of example
 * @property {string} cefr - CEFR level (e.g. A1, A2, B1, B2, C1, C2)
 */

/**
 * Global dictionary of all words.
 * @type {Object.<string, VocabularyWord>}
 */
var dictionary = {
    "consignment": {
        "definition": "Goods sent to someone to sell.",
        "pos": "noun",
        "pron": "/kənˈsaɪn.mənt/",
        "example": "The consignment arrived yesterday.",
        "vietnamese": "Hàng ký gửi",
        "vietnamese_example": "Lô hàng ký gửi đã đến hôm qua.",
        "cefr": "C1"
    },
    "procurement": {
        "definition": "The process of obtaining goods or services.",
        "pos": "noun",
        "pron": "/prəˈkjʊə.mənt/",
        "example": "Procurement takes time.",
        "vietnamese": "Sự thu mua",
        "vietnamese_example": "Thu mua tốn thời gian.",
        "cefr": "C1"
    },
    "fulfillment": {
        "definition": "Completing and delivering an order.",
        "pos": "noun",
        "pron": "/fʊlˈfɪl.mənt/",
        "example": "Order fulfillment is faster now.",
        "vietnamese": "Sự hoàn tất đơn hàng",
        "vietnamese_example": "Hoàn tất đơn hàng giờ nhanh hơn.",
        "cefr": "B2"
    },
    "lead time": {
        "definition": "Time between ordering and receiving goods.",
        "pos": "noun",
        "pron": "/liːd taɪm/",
        "example": "Lead time is about five days.",
        "vietnamese": "Thời gian chờ",
        "vietnamese_example": "Thời gian chờ khoảng năm ngày.",
        "cefr": "B2"
    },
    "backorder": {
        "definition": "An order that cannot be filled immediately.",
        "pos": "noun",
        "pron": "/ˈbækˌɔː.dər/",
        "example": "It is currently on backorder.",
        "vietnamese": "đơn hàng chờ cung ứng",
        "vietnamese_example": "Mặt hàng này hiện đang ở tình trạng chờ cung ứng.",
        "cefr": "C1"
    },
    "amortization": {
        "definition": "Gradual reduction of a loan value.",
        "pos": "noun",
        "pron": "/ˌæm.ər.taɪˈzeɪ.ʃən/",
        "example": "Check the amortization schedule.",
        "vietnamese": "Sự khấu hao",
        "vietnamese_example": "Kiểm tra lịch trình khấu hao.",
        "cefr": "C2"
    },
    "collateral": {
        "definition": "Property pledged as security for a loan.",
        "pos": "noun",
        "pron": "/kəˈlæt.ər.əl/",
        "example": "They demanded collateral.",
        "vietnamese": "Tài sản thế chấp",
        "vietnamese_example": "Họ yêu cầu tài sản thế chấp.",
        "cefr": "C1"
    },
    "diversification": {
        "definition": "Varying investments to reduce risk.",
        "pos": "noun",
        "pron": "/daɪˌvɜː.sɪ.fɪˈkeɪ.ʃən/",
        "example": "Diversification is key.",
        "vietnamese": "Sự đa dạng hóa",
        "vietnamese_example": "Đa dạng hóa là chìa khóa.",
        "cefr": "C1"
    },
    "liquidity": {
        "definition": "Availability of liquid assets.",
        "pos": "noun",
        "pron": "/lɪˈkwɪd.ə.ti/",
        "example": "High liquidity is good.",
        "vietnamese": "Thanh khoản",
        "vietnamese_example": "Thanh khoản cao là tốt.",
        "cefr": "C1"
    },
    "merger": {
        "definition": "Combination of two companies.",
        "pos": "noun",
        "pron": "/ˈmɜː.dʒər/",
        "example": "The merger was announced.",
        "vietnamese": "Sự sáp nhập",
        "vietnamese_example": "Việc sáp nhập đã được công bố.",
        "cefr": "C1"
    },
    "biodegradable": {
        "definition": "Capable of being decomposed.",
        "pos": "adj",
        "pron": "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/",
        "example": "Use biodegradable packaging.",
        "vietnamese": "Có thể phân hủy sinh học",
        "vietnamese_example": "Sử dụng bao bì phân hủy sinh học.",
        "cefr": "C1"
    },
    "ecosystem": {
        "definition": "Biological community of organisms.",
        "pos": "noun",
        "pron": "/ˈiː.kəʊ.sɪs.təm/",
        "example": "The marine ecosystem.",
        "vietnamese": "Hệ sinh thái",
        "vietnamese_example": "Hệ sinh thái biển.",
        "cefr": "B2"
    },
    "renewable": {
        "definition": "Able to be replaced naturally and used again.",
        "pos": "adj",
        "pron": "/rɪˈnjuː.ə.bəl/",
        "example": "Solar power is a renewable energy source.",
        "vietnamese": "có thể tái tạo",
        "vietnamese_example": "Năng lượng mặt trời là một nguồn năng lượng có thể tái tạo.",
        "cefr": "B2"
    },
    "sustainability": {
        "definition": "Avoidance of depletion of resources.",
        "pos": "noun",
        "pron": "/səˌsteɪ.nəˈbɪl.ə.ti/",
        "example": "Focus on sustainability.",
        "vietnamese": "Tính bền vững",
        "vietnamese_example": "Tập trung vào tính bền vững.",
        "cefr": "C1"
    },
    "conservation": {
        "definition": "Prevention of wasteful use of resources.",
        "pos": "noun",
        "pron": "/ˌkɒn.səˈveɪ.ʃən/",
        "example": "Wildlife conservation.",
        "vietnamese": "Sự bảo tồn",
        "vietnamese_example": "Bảo tồn động vật hoang dã.",
        "cefr": "B2"
    },
    "freight": {
        "definition": "Goods transported in bulk by truck, train, ship, or aircraft.",
        "pos": "noun",
        "pron": "/freɪt/",
        "example": "The freight arrives by ship tomorrow.",
        "vietnamese": "hàng vận chuyển",
        "vietnamese_example": "Lô hàng vận chuyển sẽ đến bằng tàu vào ngày mai.",
        "cefr": "B2"
    },
    "air freight": {
        "definition": "The transportation of goods by aircraft.",
        "pos": "noun",
        "pron": "/er freɪt/",
        "example": "Air freight is fast but expensive.",
        "vietnamese": "Vận tải hàng không",
        "vietnamese_example": "Vận tải hàng không nhanh nhưng đắt đỏ.",
        "cefr": "B1"
    },
    "train freight": {
        "definition": "The transportation of goods by train.",
        "pos": "noun",
        "pron": "/treɪn freɪt/",
        "example": "Train freight is efficient for long distances.",
        "vietnamese": "Hàng hóa vận chuyển bằng đường sắt",
        "vietnamese_example": "Hàng hóa vận chuyển bằng đường sắt rất hiểu quả cho khoảng cách xa.",
        "cefr": "B1"
    },
    "airway bill": {
        "definition": "A document accompanying goods shipped by an international air courier.",
        "pos": "noun",
        "pron": "/ˈer.weɪ bɪl/",
        "example": "Please sign the airway bill.",
        "vietnamese": "vận đơn hàng không",
        "vietnamese_example": "Vui lòng ký tên vào văn bản vận chuyển.",
        "cefr": "C1"
    },
    "ocean freight": {
        "definition": "The transportation of goods by sea.",
        "pos": "noun",
        "pron": "/ˈoʊ.ʃən freɪt/",
        "example": "Ocean freight is cost-effective for large shipments.",
        "vietnamese": "Vận tải đường biển",
        "vietnamese_example": "Vận tải đường biển tiết kiệm chi phí cho các lô hàng lớn.",
        "cefr": "B2"
    },
    "land freight": {
        "definition": "The transportation of goods by road.",
        "pos": "noun",
        "pron": "/lænd freɪt/",
        "example": "Land freight is commonly used for domestic deliveries.",
        "vietnamese": "Vận tải đường bộ",
        "vietnamese_example": "Vận tải đường bộ thường được sử dụng cho giao hàng nội địa.",
        "cefr": "B1"
    },
    "courier": {
        "definition": "A company or employee that transports packages and documents.",
        "pos": "noun",
        "pron": "/ˈkʊr.i.ər/",
        "example": "The courier will deliver the package today.",
        "vietnamese": "Chuyển phát nhanh",
        "vietnamese_example": "Bưu tá sẽ giao gói hàng hôm nay.",
        "cefr": "B2"
    },
    "forwarder": {
        "definition": "A firm specializing in arranging storage and shipping of merchandise.",
        "pos": "noun",
        "pron": "/ˈfɔːr.wər.dər/",
        "example": "We hired a forwarder to handle international shipping.",
        "vietnamese": "Đại lý vận tải",
        "vietnamese_example": "Chúng tôi đã thuê một đại lý vận tải để lo việc vận chuyển quốc tế.",
        "cefr": "C1"
    },
    "customs clearance": {
        "definition": "The documented permission to pass that a national customs authority grants to imported goods.",
        "pos": "noun",
        "pron": "/ˈkʌs.təmz ˈklɪr.əns/",
        "example": "The goods are delayed at customs clearance.",
        "vietnamese": "thông quan hải quan",
        "vietnamese_example": "Hàng hóa bị trễ ở khâu thông quan hải quan.",
        "cefr": "C1"
    },
    "incoterms": {
        "definition": "A set of rules which define the responsibilities of sellers and buyers.",
        "pos": "noun",
        "pron": "/ˈɪn.koʊ.tɜːrmz/",
        "example": "Make sure you understand the Incoterms before signing.",
        "vietnamese": "bộ quy tắc thương mại quốc tế",
        "vietnamese_example": "Hãy đảm bảo bạn hiểu rõ các điều khoản thương mại quốc tế trước khi ký kết.",
        "cefr": "C2"
    },
    "bill of lading": {
        "definition": "A detailed list of a shipment of goods in the form of a receipt given by the carrier.",
        "pos": "noun",
        "pron": "/ˌbɪl əv ˈleɪ.dɪŋ/",
        "example": "The captain signed the bill of lading.",
        "vietnamese": "Vận đơn",
        "vietnamese_example": "Thuyền trưởng đã ký tên vào vận đơn.",
        "cefr": "C2"
    },
    "letter of credit": {
        "definition": "A letter issued by a bank to another bank to serve as a guarantee for payments.",
        "pos": "noun",
        "pron": "/ˌlet.ər əv ˈkred.ɪt/",
        "example": "We require a letter of credit for international trades.",
        "vietnamese": "Tín dụng thư",
        "vietnamese_example": "Chúng tôi yêu cầu tín dụng thư cho các giao dịch quốc tế.",
        "cefr": "C2"
    },
    "container": {
        "definition": "A large metal box of standard design used for transporting goods.",
        "pos": "noun",
        "pron": "/kənˈteɪ.nər/",
        "example": "The container was loaded onto the ship.",
        "vietnamese": "Thùng container",
        "vietnamese_example": "Thùng container đã được xếp lên tàu.",
        "cefr": "B1"
    },
    "pallet": {
        "definition": "A flat wooden structure that heavy goods are put onto so that they can be moved.",
        "pos": "noun",
        "pron": "/ˈpæl.ɪt/",
        "example": "The boxes are stacked on a pallet.",
        "vietnamese": "Kệ hàng",
        "vietnamese_example": "Các hộp được xếp chồng lên một kệ hàng.",
        "cefr": "B2"
    },
    "demurrage": {
        "definition": "A charge payable to the owner of a chartered ship on failure to load or discharge the ship within the time agreed.",
        "pos": "noun",
        "pron": "/dɪˈmɜːr.ɪdʒ/",
        "example": "We had to pay demurrage because the port was congested.",
        "vietnamese": "Phí lưu kho",
        "vietnamese_example": "Chúng tôi phải trả phí lưu kho vì cảng bị tắc nghẽn.",
        "cefr": "C2"
    },
    "carrier": {
        "definition": "A person or company that undertakes the professional conveyance of goods or people.",
        "pos": "noun",
        "pron": "/ˈkær.i.ər/",
        "example": "The airline is our primary carrier.",
        "vietnamese": "đơn vị vận chuyển",
        "vietnamese_example": "Hãng hàng không là đơn vị vận chuyển chính của chúng tôi.",
        "cefr": "B2"
    },
    "shipping": {
        "definition": "The transport of goods by sea or some other means.",
        "pos": "noun",
        "pron": "/ˈʃɪp.ɪŋ/",
        "example": "The shipping cost is calculated by weight.",
        "vietnamese": "Giao hàng",
        "vietnamese_example": "Chi phí giao hàng được tính theo trọng lượng.",
        "cefr": "B2"
    },
    "delivery": {
        "definition": "The carrying and turning over of letters, goods, or services.",
        "pos": "noun",
        "pron": "/dɪˈlɪv.ər.i/",
        "example": "We guarantee fast delivery.",
        "vietnamese": "Giao hàng",
        "vietnamese_example": "Chúng tôi đảm bảo giao hàng nhanh.",
        "cefr": "B2"
    },
    "routing": {
        "definition": "The process of selecting a path for traffic or transport.",
        "pos": "noun",
        "pron": "/ˈruː.tɪŋ/",
        "example": "The routing of the delivery truck changed due to traffic.",
        "vietnamese": "Lộ trình",
        "vietnamese_example": "Lộ trình của xe tải giao hàng thay đổi do tắc đường.",
        "cefr": "B2"
    },
    "tracking": {
        "definition": "The monitoring of the progress of an item through a network.",
        "pos": "noun",
        "pron": "/ˈtræk.ɪŋ/",
        "example": "You can use the tracking number to locate your package.",
        "vietnamese": "Theo dõi",
        "vietnamese_example": "Bạn có thể sử dụng mã theo dõi để định vị gói hàng của mình.",
        "cefr": "B1"
    },
    "freight forwarder": {
        "definition": "A company that organizes shipments for individuals or corporations.",
        "pos": "noun",
        "pron": "/freɪt ˈfɔːr.wər.dər/",
        "example": "The freight forwarder consolidated our shipments.",
        "vietnamese": "công ty giao nhận vận tải",
        "vietnamese_example": "Công ty giao nhận vận tải đã gom các lô hàng của chúng tôi.",
        "cefr": "C1"
    },
    "third-party logistics": {
        "definition": " (3PL) The use of third-party businesses to outsource elements of distribution.",
        "pos": "noun",
        "pron": "/θɜːrd ˈpɑːr.ti ləˈdʒɪs.tɪks/",
        "example": "Many companies use third-party logistics to reduce costs.",
        "vietnamese": "dịch vụ logistics bên thứ ba",
        "vietnamese_example": "Nhiều công ty sử dụng dịch vụ logistics của bên thứ ba để giảm chi phí.",
        "cefr": "C2"
    },
    "last mile": {
        "definition": "The final stage of a product's journey to the end user.",
        "pos": "noun",
        "pron": "/læst maɪl/",
        "example": "The last mile is often the most expensive part of delivery.",
        "vietnamese": "chặng cuối",
        "vietnamese_example": "Chặng cuối cùng thường là phần đắt đỏ nhất của việc giao hàng.",
        "cefr": "C1"
    },
    "combustion": {
        "definition": "The process of burning something.",
        "pos": "noun",
        "pron": "/kəmˈbʌs.tʃən/",
        "example": "The combustion of fossil fuels produces greenhouse gases.",
        "vietnamese": "Sự đốt cháy",
        "vietnamese_example": "Sự đốt cháy nhiên liệu hóa thạch tạo ra khí nhà kính.",
        "cefr": "C1"
    },
    "greenhouse gases": {
        "definition": "Gases in the earth's atmosphere that trap heat.",
        "pos": "noun",
        "pron": "/ˈɡriːn.haʊs ˌɡæs.ɪz/",
        "example": "We must reduce emissions of greenhouse gases.",
        "vietnamese": "Khí nhà kính",
        "vietnamese_example": "Chúng ta phải giảm lượng phát thải khí nhà kính.",
        "cefr": "B2"
    },
    "exacerbate": {
        "definition": "To make a problem, bad situation, or negative feeling worse.",
        "pos": "verb",
        "pron": "/ɪɡˈzæs.ə.beɪt/",
        "example": "This attack will exacerbate the already tense relations.",
        "vietnamese": "Làm trầm trọng thêm",
        "vietnamese_example": "Cuộc tấn công này sẽ làm trầm trọng thêm mối quan hệ vốn dĩ căng thẳng.",
        "cefr": "C1"
    },
    "exponential": {
        "definition": "Growing or increasing very rapidly.",
        "pos": "adj",
        "pron": "/ˌek.spəˈnen.ʃəl/",
        "example": "There has been an exponential increase in world population.",
        "vietnamese": "Theo cấp số nhân",
        "vietnamese_example": "Dân số thế giới đã có sự gia tăng theo cấp số nhân.",
        "cefr": "C1"
    },
    "methane": {
        "definition": "A colorless, odorless, flammable gas that is a greenhouse gas.",
        "pos": "noun",
        "pron": "/ˈmiː.θeɪn/",
        "example": "Methane is released during the decay of organic substances.",
        "vietnamese": "Khí mê-tan",
        "vietnamese_example": "Khí mê-tan được giải phóng trong quá trình phân hủy của các chất hữu cơ.",
        "cefr": "C1"
    },
    "intensity": {
        "definition": "The quality of being felt strongly or having a very strong effect.",
        "pos": "noun",
        "pron": "/ɪnˈten.sə.ti/",
        "example": "The storm resumed with even greater intensity.",
        "vietnamese": "Cường độ",
        "vietnamese_example": "Cơn bão tiếp tục với cường độ lớn hơn nữa.",
        "cefr": "B2"
    },
    "glacier": {
        "definition": "A slowly moving mass or river of ice formed by the accumulation and compaction of snow.",
        "pos": "noun",
        "pron": "/ˈɡlæs.i.ər/",
        "example": "The glacier is melting rapidly due to climate change.",
        "vietnamese": "Sông băng",
        "vietnamese_example": "Sông băng đang tan chảy nhanh do biến đổi khí hậu.",
        "cefr": "B2"
    },
    "erosion": {
        "definition": "The process of eroding or being eroded by wind, water, or other natural agents.",
        "pos": "noun",
        "pron": "/ɪˈrəʊ.ʒən/",
        "example": "Soil erosion is a serious problem in this area.",
        "vietnamese": "Sự xói mòn",
        "vietnamese_example": "Sự xói mòn đất là một vấn đề nghiêm trọng ở khu vực này.",
        "cefr": "B2"
    },
    "mitigate": {
        "definition": "To make something less severe, harmful, or painful.",
        "pos": "verb",
        "pron": "/ˈmɪt.ɪ.ɡeɪt/",
        "example": "We need to mitigate the effects of the disaster.",
        "vietnamese": "Giảm nhẹ",
        "vietnamese_example": "Chúng ta cần giảm nhẹ ảnh hưởng của thảm họa.",
        "cefr": "C1"
    },
    "precision": {
        "definition": "The quality, condition, or fact of being exact and accurate.",
        "pos": "noun",
        "pron": "/prɪˈsɪʒ.ən/",
        "example": "His work was done with extreme precision.",
        "vietnamese": "Sự chính xác",
        "vietnamese_example": "Công việc của anh ấy được thực hiện với độ chính xác cực cao.",
        "cefr": "B2"
    },
    "over-crowding": {
        "definition": "The presence of more people or things in a space than is comfortable, safe, or permissible.",
        "pos": "noun",
        "pron": "/ˌəʊ.vəˈkraʊd.ɪŋ/",
        "example": "Over-crowding in cities leads to many social problems.",
        "vietnamese": "Sự đông đúc quá mức",
        "vietnamese_example": "Sự đông đúc quá mức ở các thành phố dẫn đến nhiều vấn đề xã hội.",
        "cefr": "B2"
    },
    "competent": {
        "definition": "Having the necessary ability, knowledge, or skill to do something successfully.",
        "pos": "adj",
        "pron": "/ˈkɒm.pɪ.tənt/",
        "example": "Make sure the staff are fully competent.",
        "vietnamese": "Có năng lực",
        "vietnamese_example": "Bảo đảm các nhân viên được đào tạo đủ năng lực.",
        "cefr": "C1"
    },
    "carcinogen": {
        "definition": "A substance capable of causing cancer in living tissue.",
        "pos": "noun",
        "pron": "/kɑːˈsɪn.ə.dʒən/",
        "example": "Tobacco smoke contains numerous carcinogens.",
        "vietnamese": "Chất gây ung thư",
        "vietnamese_example": "Khói thuốc lá chứa hàng tá chất gây ung thư.",
        "cefr": "C1"
    },
    "deleterious": {
        "definition": "Causing harm or damage.",
        "pos": "adj",
        "pron": "/ˌdel.ɪˈtɪə.ri.əs/",
        "example": "The chemical is deleterious to the environment.",
        "vietnamese": "Có hại",
        "vietnamese_example": "Hóa chất này gây hại cho môi trường.",
        "cefr": "C2"
    },
    "perishable": {
        "definition": "Likely to decay or go bad quickly.",
        "pos": "adj",
        "pron": "/ˈper.ɪ.ʃə.bəl/",
        "example": "Perishable foods must be kept refrigerated.",
        "vietnamese": "Dễ ôi thiu",
        "vietnamese_example": "Thực phẩm dễ ôi thiu phải được giữ lạnh.",
        "cefr": "C1"
    },
    "surveillance": {
        "definition": "Close observation, especially of a suspected spy or criminal.",
        "pos": "noun",
        "pron": "/səˈveɪ.ləns/",
        "example": "They were under constant surveillance.",
        "vietnamese": "Sự giám sát",
        "vietnamese_example": "Họ bị đặt dưới sự giám sát liên tục.",
        "cefr": "C1"
    },
    "intrusion": {
        "definition": "The action of intruding or invading.",
        "pos": "noun",
        "pron": "/ɪnˈtruː.ʒən/",
        "example": "He resented the intrusion into his private life.",
        "vietnamese": "Sự xâm nhập",
        "vietnamese_example": "Anh ta bực mình trước sự xâm phạm vào đời sống riêng tư.",
        "cefr": "C1"
    },
    "conformist": {
        "definition": "A person who conforms to accepted behavior or established practices.",
        "pos": "noun",
        "pron": "/kənˈfɔː.mɪst/",
        "example": "She was too much of a conformist to challenge the rules.",
        "vietnamese": "Người tuân thủ",
        "vietnamese_example": "Cô ấy quá tuân thủ nên không dám phản đối những luật lệ đó.",
        "cefr": "C1"
    },
    "tyrannized": {
        "definition": "Ruled or treated cruelly and unjustly.",
        "pos": "verb",
        "pron": "/ˈtɪr.ə.naɪzd/",
        "example": "The people were tyrannized by a dictator.",
        "vietnamese": "Bị áp bức",
        "vietnamese_example": "Những người dân bị đàn áp bởi một nhà độc tài.",
        "cefr": "C2"
    },
    "reintegrate": {
        "definition": "To integrate someone back into society.",
        "pos": "verb",
        "pron": "/ˌriːˈɪn.tɪ.ɡreɪt/",
        "example": "They help former inmates reintegrate into society.",
        "vietnamese": "Tái hòa nhập",
        "vietnamese_example": "Họ giúp những phạm nhân cũ tái hòa nhập vào cộng đồng.",
        "cefr": "C1"
    },
    "aesthetic": {
        "definition": "Concerned with beauty or the appreciation of beauty.",
        "pos": "adj",
        "pron": "/esˈθet.ɪk/",
        "example": "The building has great aesthetic appeal.",
        "vietnamese": "Thẩm mỹ",
        "vietnamese_example": "Tòa nhà này có giá trị thẩm mỹ cao.",
        "cefr": "B2"
    },
    "distinctive": {
        "definition": "Characteristic of one person or thing.",
        "pos": "adj",
        "pron": "/dɪˈstɪŋk.tɪv/",
        "example": "She has a very distinctive voice.",
        "vietnamese": "Đặc biệt",
        "vietnamese_example": "Cô ấy có một giọng nói rất đặc trưng.",
        "cefr": "B2"
    },
    "refurbish": {
        "definition": "To renovate and redecorate something.",
        "pos": "verb",
        "pron": "/ˌriːˈfɜː.bɪʃ/",
        "example": "We plan to refurbish the old building.",
        "vietnamese": "Tân trang",
        "vietnamese_example": "Chúng tôi dự kiến sẽ tân trang tòa nhà cũ.",
        "cefr": "C1"
    },
    "autonomy": {
        "definition": "The right or condition of self-government.",
        "pos": "noun",
        "pron": "/ɔːˈtɒn.ə.mi/",
        "example": "The region has a degree of autonomy.",
        "vietnamese": "Quyền tự trị",
        "vietnamese_example": "Vùng này có một mức độ tự trị.",
        "cefr": "C1"
    },
    "intrinsic": {
        "definition": "Belonging naturally; essential.",
        "pos": "adj",
        "pron": "/ɪnˈtrɪn.zɪk/",
        "example": "Art has an intrinsic value.",
        "vietnamese": "Bản chất",
        "vietnamese_example": "Nghệ thuật có một giá trị bản chất.",
        "cefr": "C2"
    },
    "interpersonal": {
        "definition": "Relating to relationships or communication between people.",
        "pos": "adj",
        "pron": "/ˌɪn.təˈpɜː.sən.əl/",
        "example": "You need good interpersonal skills for this job.",
        "vietnamese": "Giữa các cá nhân",
        "vietnamese_example": "Bạn cần các kỹ năng giao tiếp giữa các cá nhân tốt.",
        "cefr": "B2"
    },
    "nuance": {
        "definition": "A subtle difference in or shade of meaning.",
        "pos": "noun",
        "pron": "/ˈnjuː.ɑːns/",
        "example": "He watched her face intently to catch every nuance of expression.",
        "vietnamese": "Sắc thái",
        "vietnamese_example": "Anh ta đã chăm chú quan sát mọi sắc thái của cô ấy.",
        "cefr": "C2"
    },
    "influx": {
        "definition": "An arrival or entry of large numbers of people or things.",
        "pos": "noun",
        "pron": "/ˈɪn.flʌks/",
        "example": "There has been a massive influx of tourists.",
        "vietnamese": "Sự chảy vào",
        "vietnamese_example": "Đã có một lượng lớn du khách tràn vào.",
        "cefr": "C1"
    },
    "infrastructure": {
        "definition": "The basic physical and organizational structures and facilities.",
        "pos": "noun",
        "pron": "/ˈɪn.frəˌstrʌk.tʃər/",
        "example": "The country's infrastructure is crumbling.",
        "vietnamese": "Cơ sở hạ tầng",
        "vietnamese_example": "Cơ sở hạ tầng của quốc gia đang dần xuống cấp.",
        "cefr": "B2"
    },
    "indigenous": {
        "definition": "Originating or occurring naturally in a particular place; native.",
        "pos": "adj",
        "pron": "/ɪnˈdɪdʒ.ɪ.nəs/",
        "example": "The area is home to many indigenous people.",
        "vietnamese": "Bản địa",
        "vietnamese_example": "Khu vực này là nơi sinh sống của nhiều người dân bản địa.",
        "cefr": "C1"
    },
    "insolvency": {
        "definition": "The state of being unable to pay the money owed.",
        "pos": "noun",
        "pron": "/ɪnˈsɒl.vən.si/",
        "example": "The company was facing insolvency.",
        "vietnamese": "Sự vỡ nợ",
        "vietnamese_example": "Công ty đó đang đối mặt với sự vỡ nợ.",
        "cefr": "C2"
    },
    "redundant": {
        "definition": "Not or no longer needed or useful.",
        "pos": "adj",
        "pron": "/rɪˈdʌn.dənt/",
        "example": "Many workers were made redundant.",
        "vietnamese": "Dư thừa",
        "vietnamese_example": "Rất nhiều công nhân đã bị cho nghỉ việc do dư thừa nhân sự.",
        "cefr": "C1"
    },
    "recession": {
        "definition": "A period of economic decline with reduced business activity.",
        "pos": "noun",
        "pron": "/rɪˈseʃ.ən/",
        "example": "Many businesses closed during the recession.",
        "vietnamese": "suy thoái kinh tế",
        "vietnamese_example": "Nhiều doanh nghiệp đóng cửa trong thời kỳ suy thoái.",
        "cefr": "C1"
    },
    "automate": {
        "definition": "Convert to largely automatic operation.",
        "pos": "verb",
        "pron": "/ˈɔː.tə.meɪt/",
        "example": "The factory has been fully automated.",
        "vietnamese": "Tự động hóa",
        "vietnamese_example": "Nhà máy này đã được tự động hóa hoàn toàn.",
        "cefr": "C1"
    },
    "optimal": {
        "definition": "Best or most favorable.",
        "pos": "adj",
        "pron": "/ˈɒp.tɪ.məl/",
        "example": "We seek the optimal solution.",
        "vietnamese": "Tối ưu",
        "vietnamese_example": "Chúng tôi đang tìm một biện pháp giải quyết tối ưu.",
        "cefr": "C1"
    },
    "sedentary": {
        "definition": "Tending to spend much time seated; somewhat inactive.",
        "pos": "adj",
        "pron": "/ˈsed.ən.tər.i/",
        "example": "He has a very sedentary job.",
        "vietnamese": "Ít vận động",
        "vietnamese_example": "Anh ấy có công việc rất ít vận động.",
        "cefr": "C1"
    },
    "abide by": {
        "definition": "To follow or obey rules, laws, or guidelines.",
        "pos": "phrase",
        "pron": "/əˈbaɪd baɪ/",
        "example": "All employees must abide by company policies.",
        "vietnamese": "tuân theo",
        "vietnamese_example": "Tất cả nhân viên phải tuân theo các chính sách của công ty.",
        "cefr": "C1"
    },
    "obligate": {
        "definition": "To require someone to do something by law or duty.",
        "pos": "verb",
        "pron": "/ˈɑː.blɪ.ɡeɪt/",
        "example": "The contract obligates him to complete the work.",
        "vietnamese": "bắt buộc",
        "vietnamese_example": "Hợp đồng bắt buộc anh ấy hoàn thành công việc.",
        "cefr": "C1"
    },
    "obligation": {
        "definition": "A duty or responsibility that you must fulfill.",
        "pos": "noun",
        "pron": "/ˌɑː.blɪˈɡeɪ.ʃən/",
        "example": "Employees have an obligation to follow safety rules.",
        "vietnamese": "nghĩa vụ",
        "vietnamese_example": "Nhân viên có nghĩa vụ tuân thủ các quy tắc an toàn.",
        "cefr": "B2"
    },
    "provision": {
        "definition": "The act of supplying something or a reserve set aside for future use.",
        "pos": "noun",
        "pron": "/prəˈvɪʒ.ən/",
        "example": "The provision of resources ensured smooth progress.",
        "vietnamese": "sự cung cấp; khoản dự trữ",
        "vietnamese_example": "Việc cung cấp tài nguyên đảm bảo tiến độ suôn sẻ.",
        "cefr": "C1"
    },
    "stipulation": {
        "definition": "A specific condition or requirement in an agreement.",
        "pos": "noun",
        "pron": "/ˌstɪp.jəˈleɪ.ʃən/",
        "example": "One stipulation is that payment must be made in advance.",
        "vietnamese": "điều kiện ràng buộc",
        "vietnamese_example": "Một điều kiện là phải thanh toán trước.",
        "cefr": "C1"
    },
    "clause": {
        "definition": "A particular part of a legal document or contract.",
        "pos": "noun",
        "pron": "/klɔːz/",
        "example": "The cancellation clause protects both parties.",
        "vietnamese": "điều khoản (cụ thể)",
        "vietnamese_example": "Điều khoản hủy bỏ bảo vệ cả hai bên.",
        "cefr": "B2"
    },
    "comply with": {
        "definition": "To act according to rules, laws, or requests.",
        "pos": "verb",
        "pron": "/kəmˈplaɪ wɪð/",
        "example": "You must comply with all safety regulations.",
        "vietnamese": "tuân thủ",
        "vietnamese_example": "Bạn phải tuân thủ tất cả các quy định an toàn.",
        "cefr": "B2"
    },
    "conform to": {
        "definition": "To behave according to rules or standards.",
        "pos": "verb",
        "pron": "/kənˈfɔːrm tuː/",
        "example": "The product must conform to industry standards.",
        "vietnamese": "phù hợp với",
        "vietnamese_example": "Sản phẩm phải phù hợp với tiêu chuẩn ngành.",
        "cefr": "B2"
    },
    "liable": {
        "definition": "Legally responsible for something.",
        "pos": "adj",
        "pron": "/ˈlaɪ.ə.bəl/",
        "example": "The company is liable for any damages caused.",
        "vietnamese": "chịu trách nhiệm pháp lý",
        "vietnamese_example": "Công ty chịu trách nhiệm pháp lý cho mọi thiệt hại.",
        "cefr": "C1"
    },
    "mediator": {
        "definition": "A person who helps resolve a dispute between parties.",
        "pos": "noun",
        "pron": "/ˈmiː.di.eɪ.tər/",
        "example": "A mediator was hired to settle the dispute.",
        "vietnamese": "người hòa giải",
        "vietnamese_example": "Một người hòa giải đã được thuê để giải quyết tranh chấp.",
        "cefr": "C1"
    },
    "settlement": {
        "definition": "An agreement that resolves a dispute.",
        "pos": "noun",
        "pron": "/ˈset.əl.mənt/",
        "example": "They reached a settlement after negotiations.",
        "vietnamese": "dàn xếp",
        "vietnamese_example": "Họ đã đạt được thỏa thuận sau các cuộc đàm phán.",
        "cefr": "B2"
    },
    "negotiation": {
        "definition": "Discussion aimed at reaching an agreement.",
        "pos": "noun",
        "pron": "/nɪˌɡoʊ.ʃiˈeɪ.ʃən/",
        "example": "The negotiation took several weeks.",
        "vietnamese": "đàm phán",
        "vietnamese_example": "Cuộc đàm phán kéo dài vài tuần.",
        "cefr": "B2"
    },
    "determine": {
        "definition": "To decide or discover something.",
        "pos": "verb",
        "pron": "/dɪˈtɜː.mɪn/",
        "example": "Price is determined by demand.",
        "vietnamese": "quyết định",
        "vietnamese_example": "Giá cả được quyết định bởi nhu cầu.",
        "cefr": "C1"
    },
    "establish": {
        "definition": "To set up or create something officially.",
        "pos": "verb",
        "pron": "/ɪˈstæb.lɪʃ/",
        "example": "The company was established in 2010.",
        "vietnamese": "thành lập",
        "vietnamese_example": "Công ty được thành lập vào năm 2010.",
        "cefr": "B2"
    },
    "specification": {
        "definition": "Detailed description of requirements or standards.",
        "pos": "noun",
        "pron": "/ˌspes.ɪ.fɪˈkeɪ.ʃən/",
        "example": "The product meets all technical specifications.",
        "vietnamese": "thông số kỹ thuật",
        "vietnamese_example": "Sản phẩm đáp ứng tất cả các thông số kỹ thuật.",
        "cefr": "C1"
    },
    "terminate": {
        "definition": "To end something formally or officially.",
        "pos": "verb",
        "pron": "/ˈtɝː.mɪ.neɪt/",
        "example": "The company decided to terminate the contract.",
        "vietnamese": "chấm dứt",
        "vietnamese_example": "Công ty quyết định chấm dứt hợp đồng.",
        "cefr": "C1"
    },
    "representative": {
        "definition": "A person who acts on behalf of others.",
        "pos": "noun",
        "pron": "/ˌrep.rɪˈzen.tə.tɪv/",
        "example": "A union representative attended the meeting.",
        "vietnamese": "đại diện",
        "vietnamese_example": "Một đại diện công đoàn đã tham dự cuộc họp.",
        "cefr": "B2"
    },
    "assurance": {
        "definition": "A promise or confidence about something.",
        "pos": "noun",
        "pron": "/əˈʃʊr.əns/",
        "example": "She gave her assurance that the work would be done.",
        "vietnamese": "sự đảm bảo",
        "vietnamese_example": "Cô ấy đảm bảo rằng công việc sẽ được hoàn thành.",
        "cefr": "C1"
    },
    "resolve": {
        "definition": "To solve a problem or deal with a situation successfully.",
        "pos": "verb",
        "pron": "/rɪˈzɑːlv/",
        "example": "They worked together to resolve the conflict.",
        "vietnamese": "giải quyết",
        "vietnamese_example": "Họ cùng nhau giải quyết xung đột.",
        "cefr": "B2"
    },
    "pertaining to": {
        "definition": "Relating to or concerning something.",
        "pos": "phrase",
        "pron": "/pərˈteɪ.nɪŋ tuː/",
        "example": "The document contains rules pertaining to safety.",
        "vietnamese": "liên quan đến",
        "vietnamese_example": "Tài liệu chứa các quy định liên quan đến an toàn.",
        "cefr": "C1"
    },
    "semiconductor": {
        "definition": "A material that partially conducts electricity, used in electronic devices.",
        "pos": "noun",
        "pron": "/ˌsem.i.kənˈdʌk.tər/",
        "example": "Semiconductors are essential for making computer chips.",
        "vietnamese": "chất bán dẫn",
        "vietnamese_example": "Chất bán dẫn rất quan trọng trong việc sản xuất chip máy tính.",
        "cefr": "C1"
    },
    "dominance": {
        "definition": "The state of having control or power over others.",
        "pos": "noun",
        "pron": "/ˈdɒm.ɪ.nəns/",
        "example": "The company achieved dominance in the global market.",
        "vietnamese": "sự thống trị",
        "vietnamese_example": "Công ty đạt được sự thống trị trên thị trường toàn cầu.",
        "cefr": "C1"
    },
    "productivity": {
        "definition": "The rate at which work or goods are produced.",
        "pos": "noun",
        "pron": "/ˌprɒd.ʌkˈtɪv.ə.ti/",
        "example": "Improving productivity can increase profits.",
        "vietnamese": "năng suất",
        "vietnamese_example": "Cải thiện năng suất có thể tăng lợi nhuận.",
        "cefr": "C1"
    },
    "executive": {
        "definition": "A person with high responsibility in a business organization.",
        "pos": "noun",
        "pron": "/ɪɡˈzek.jʊ.tɪv/",
        "example": "The executive made an important decision.",
        "vietnamese": "giám đốc / lãnh đạo",
        "vietnamese_example": "Vị lãnh đạo đã đưa ra một quyết định quan trọng.",
        "cefr": "B2"
    },
    "comprehension": {
        "definition": "The ability to understand something.",
        "pos": "noun",
        "pron": "/ˌkɒm.prɪˈhen.ʃən/",
        "example": "Reading improves comprehension skills.",
        "vietnamese": "sự hiểu",
        "vietnamese_example": "Đọc sách giúp cải thiện khả năng hiểu.",
        "cefr": "C1"
    },
    "innovation": {
        "definition": "A new idea, method, or product.",
        "pos": "noun",
        "pron": "/ˌɪn.əˈveɪ.ʃən/",
        "example": "Innovation drives business growth.",
        "vietnamese": "sự đổi mới",
        "vietnamese_example": "Sự đổi mới thúc đẩy tăng trưởng kinh doanh.",
        "cefr": "B2"
    },
    "analysis": {
        "definition": "A detailed examination of something.",
        "pos": "noun",
        "pron": "/əˈnæl.ə.sɪs/",
        "example": "The report includes a careful analysis of the data.",
        "vietnamese": "phân tích",
        "vietnamese_example": "Báo cáo bao gồm phân tích chi tiết dữ liệu.",
        "cefr": "C1"
    },
    "manufacturers": {
        "definition": "Companies that produce goods in large quantities.",
        "pos": "noun",
        "pron": "/ˌmæn.jʊˈfæk.tʃər.ərz/",
        "example": "Manufacturers are increasing production.",
        "vietnamese": "nhà sản xuất",
        "vietnamese_example": "Các nhà sản xuất đang tăng sản lượng.",
        "cefr": "C1"
    },
    "consumption": {
        "definition": "The use of goods or resources.",
        "pos": "noun",
        "pron": "/kənˈsʌmp.ʃən/",
        "example": "Energy consumption has risen this year.",
        "vietnamese": "sự tiêu thụ",
        "vietnamese_example": "Mức tiêu thụ năng lượng đã tăng năm nay.",
        "cefr": "B2"
    },
    "advertising": {
        "definition": "The activity of promoting products or services.",
        "pos": "noun",
        "pron": "/ˈæd.və.taɪ.zɪŋ/",
        "example": "Advertising helps attract customers.",
        "vietnamese": "quảng cáo",
        "vietnamese_example": "Quảng cáo giúp thu hút khách hàng.",
        "cefr": "B2"
    },
    "strategies": {
        "definition": "Plans designed to achieve a goal.",
        "pos": "noun",
        "pron": "/ˈstræt.ə.dʒiz/",
        "example": "They developed new strategies to increase sales.",
        "vietnamese": "chiến lược",
        "vietnamese_example": "Họ phát triển các chiến lược mới để tăng doanh số.",
        "cefr": "C1"
    },
    "competitors": {
        "definition": "People or companies that try to achieve the same goal as others.",
        "pos": "noun",
        "pron": "/kəmˈpet.ɪ.tərz/",
        "example": "The company faces strong competitors.",
        "vietnamese": "đối thủ cạnh tranh",
        "vietnamese_example": "Công ty đối mặt với nhiều đối thủ mạnh.",
        "cefr": "C1"
    },
    "significant": {
        "definition": "Important or noticeable.",
        "pos": "adj",
        "pron": "/sɪɡˈnɪf.ɪ.kənt/",
        "example": "There was a significant increase in sales.",
        "vietnamese": "đáng kể / quan trọng",
        "vietnamese_example": "Có sự tăng trưởng đáng kể về doanh số.",
        "cefr": "B2"
    },
    "convey": {
        "definition": "To communicate or express something.",
        "pos": "verb",
        "pron": "/kənˈveɪ/",
        "example": "The message was clearly conveyed.",
        "vietnamese": "truyền đạt",
        "vietnamese_example": "Thông điệp đã được truyền đạt rõ ràng.",
        "cefr": "B2"
    },
    "recommend": {
        "definition": "To suggest something as good or suitable.",
        "pos": "verb",
        "pron": "/ˌrek.əˈmend/",
        "example": "I recommend this product to customers.",
        "vietnamese": "đề xuất",
        "vietnamese_example": "Tôi đề xuất sản phẩm này cho khách hàng.",
        "cefr": "B2"
    },
    "established": {
        "definition": "Having existed for a long time and recognized.",
        "pos": "adj",
        "pron": "/ɪˈstæb.lɪʃt/",
        "example": "They are an established company.",
        "vietnamese": "lâu đời / có uy tín",
        "vietnamese_example": "Họ là một công ty có uy tín lâu năm.",
        "cefr": "C1"
    },
    "packaging": {
        "definition": "Materials used to wrap or protect products.",
        "pos": "noun",
        "pron": "/ˈpæk.ɪ.dʒɪŋ/",
        "example": "The packaging is environmentally friendly.",
        "vietnamese": "bao bì",
        "vietnamese_example": "Bao bì thân thiện với môi trường.",
        "cefr": "C1"
    },
    "ingredients": {
        "definition": "The different foods or materials used to make something.",
        "pos": "noun",
        "pron": "/ɪnˈɡriː.di.ənts/",
        "example": "Fresh ingredients improve the taste.",
        "vietnamese": "nguyên liệu",
        "vietnamese_example": "Nguyên liệu tươi giúp món ăn ngon hơn.",
        "cefr": "C1"
    },
    "promoting": {
        "definition": "Encouraging people to buy or support something.",
        "pos": "verb",
        "pron": "/prəˈməʊ.tɪŋ/",
        "example": "They are promoting a new product.",
        "vietnamese": "quảng bá",
        "vietnamese_example": "Họ đang quảng bá sản phẩm mới.",
        "cefr": "C1"
    },
    "continually": {
        "definition": "Happening again and again over time.",
        "pos": "adv",
        "pron": "/kənˈtɪn.ju.ə.li/",
        "example": "The company is continually improving.",
        "vietnamese": "liên tục",
        "vietnamese_example": "Công ty đang liên tục cải thiện.",
        "cefr": "C1"
    },
    "extensive": {
        "definition": "Large in amount or range.",
        "pos": "adj",
        "pron": "/ɪkˈsten.sɪv/",
        "example": "They conducted extensive research.",
        "vietnamese": "rộng lớn / toàn diện",
        "vietnamese_example": "Họ đã tiến hành nghiên cứu toàn diện.",
        "cefr": "B2"
    },
    "features": {
        "definition": "Important parts or characteristics of something.",
        "pos": "noun",
        "pron": "/ˈfiː.tʃərz/",
        "example": "This phone has many useful features.",
        "vietnamese": "tính năng",
        "vietnamese_example": "Chiếc điện thoại này có nhiều tính năng hữu ích.",
        "cefr": "C1"
    },
    "priority": {
        "definition": "Something that is more important than others.",
        "pos": "noun",
        "pron": "/praɪˈɒr.ə.ti/",
        "example": "Safety is our top priority.",
        "vietnamese": "ưu tiên",
        "vietnamese_example": "An toàn là ưu tiên hàng đầu.",
        "cefr": "B2"
    },
    "characteristic": {
        "definition": "A typical feature or quality that something has.",
        "pos": "noun",
        "pron": "/ˌkær.ək.təˈrɪs.tɪk/",
        "example": "One characteristic of the brand is its durability.",
        "vietnamese": "đặc điểm",
        "vietnamese_example": "Một đặc điểm của thương hiệu là độ bền.",
        "cefr": "B2"
    },
    "consequence": {
        "definition": "A result or effect of an action.",
        "pos": "noun",
        "pron": "/ˈkɒn.sɪ.kwəns/",
        "example": "Failure to follow instructions may have serious consequences.",
        "vietnamese": "hậu quả",
        "vietnamese_example": "Không làm theo hướng dẫn có thể gây hậu quả nghiêm trọng.",
        "cefr": "B2"
    },
    "consideration": {
        "definition": "Careful thought about something before making a decision.",
        "pos": "noun",
        "pron": "/kənˌsɪd.əˈreɪ.ʃən/",
        "example": "After careful consideration, she accepted the offer.",
        "vietnamese": "sự cân nhắc",
        "vietnamese_example": "Sau khi cân nhắc kỹ, cô ấy đã chấp nhận lời đề nghị.",
        "cefr": "B2"
    },
    "expiration": {
        "definition": "The end of a period of validity.",
        "pos": "noun",
        "pron": "/ˌek.spəˈreɪ.ʃən/",
        "example": "Check the expiration date before using the product.",
        "vietnamese": "sự hết hạn",
        "vietnamese_example": "Hãy kiểm tra ngày hết hạn trước khi sử dụng sản phẩm.",
        "cefr": "C1"
    },
    "frequently": {
        "definition": "Often; happening many times.",
        "pos": "adv",
        "pron": "/ˈfriː.kwənt.li/",
        "example": "Customers frequently ask about warranties.",
        "vietnamese": "thường xuyên",
        "vietnamese_example": "Khách hàng thường xuyên hỏi về bảo hành.",
        "cefr": "B2"
    },
    "imply": {
        "definition": "To suggest something without stating it directly.",
        "pos": "verb",
        "pron": "/ɪmˈplaɪ/",
        "example": "His words imply that the product is unreliable.",
        "vietnamese": "ám chỉ",
        "vietnamese_example": "Lời nói của anh ấy ám chỉ sản phẩm không đáng tin cậy.",
        "cefr": "B2"
    },
    "implication": {
        "definition": "A possible effect or meaning that is suggested.",
        "pos": "noun",
        "pron": "/ˌɪm.plɪˈkeɪ.ʃən/",
        "example": "The implication of the report is serious.",
        "vietnamese": "hàm ý / hệ quả",
        "vietnamese_example": "Hàm ý của báo cáo là nghiêm trọng.",
        "cefr": "B2"
    },
    "implicit": {
        "definition": "Suggested but not directly stated.",
        "pos": "adj",
        "pron": "/ɪmˈplɪs.ɪt/",
        "example": "There was an implicit agreement between them.",
        "vietnamese": "ngầm hiểu",
        "vietnamese_example": "Có một thỏa thuận ngầm giữa họ.",
        "cefr": "C1"
    },
    "promise": {
        "definition": "A commitment to do or provide something.",
        "pos": "noun",
        "pron": "/ˈpɒm.ɪs/",
        "example": "The warranty is a promise from the manufacturer.",
        "vietnamese": "lời hứa",
        "vietnamese_example": "Bảo hành là lời hứa từ nhà sản xuất.",
        "cefr": "B2"
    },
    "protective": {
        "definition": "Providing protection against harm or damage.",
        "pos": "adj",
        "pron": "/prəˈtek.tɪv/",
        "example": "The case has a protective layer.",
        "vietnamese": "bảo vệ",
        "vietnamese_example": "Vỏ có lớp bảo vệ.",
        "cefr": "C1"
    },
    "reputation": {
        "definition": "The general opinion people have about someone or something.",
        "pos": "noun",
        "pron": "/ˌrep.jʊˈteɪ.ʃən/",
        "example": "The company has a strong reputation.",
        "vietnamese": "danh tiếng",
        "vietnamese_example": "Công ty có danh tiếng tốt.",
        "cefr": "B2"
    },
    "reputable": {
        "definition": "Having a good reputation.",
        "pos": "adj",
        "pron": "/ˈrep.jʊ.tə.bəl/",
        "example": "Buy from a reputable seller.",
        "vietnamese": "uy tín",
        "vietnamese_example": "Hãy mua từ người bán uy tín.",
        "cefr": "C1"
    },
    "reputed": {
        "definition": "Generally believed to be something.",
        "pos": "adj",
        "pron": "/rɪˈpjuː.tɪd/",
        "example": "He is reputed to be an expert.",
        "vietnamese": "được cho là",
        "vietnamese_example": "Anh ấy được cho là một chuyên gia.",
        "cefr": "C1"
    },
    "requirement": {
        "definition": "Something that is necessary or must be done.",
        "pos": "noun",
        "pron": "/rɪˈkwaɪə.mənt/",
        "example": "This is a legal requirement.",
        "vietnamese": "yêu cầu",
        "vietnamese_example": "Đây là một yêu cầu pháp lý.",
        "cefr": "B2"
    },
    "requisite": {
        "definition": "Officially required or necessary.",
        "pos": "adj",
        "pron": "/ˈrek.wɪ.zɪt/",
        "example": "He has the requisite skills for the job.",
        "vietnamese": "cần thiết",
        "vietnamese_example": "Anh ấy có những kỹ năng cần thiết cho công việc.",
        "cefr": "C1"
    },
    "coverage": {
        "definition": "The protection provided by an insurance or warranty.",
        "pos": "noun",
        "pron": "/ˈkʌv.ər.ɪdʒ/",
        "example": "The warranty offers full coverage.",
        "vietnamese": "phạm vi bảo hiểm",
        "vietnamese_example": "Bảo hành cung cấp phạm vi bảo vệ đầy đủ.",
        "cefr": "B2"
    },
    "invalidate": {
        "definition": "To make something no longer valid or acceptable.",
        "pos": "verb",
        "pron": "/ɪnˈvæl.ɪ.deɪt/",
        "example": "The results were invalidated due to errors.",
        "vietnamese": "làm mất hiệu lực",
        "vietnamese_example": "Kết quả bị làm mất hiệu lực do lỗi.",
        "cefr": "C1"
    },
    "malfunction": {
        "definition": "A failure to function properly.",
        "pos": "noun",
        "pron": "/ˌmælˈfʌŋk.ʃən/",
        "example": "The machine stopped due to a malfunction.",
        "vietnamese": "trục trặc",
        "vietnamese_example": "Máy đã dừng do trục trặc.",
        "cefr": "C1"
    },
    "defective": {
        "definition": "Not working properly or having faults.",
        "pos": "adj",
        "pron": "/dɪˈfek.tɪv/",
        "example": "They returned a defective product.",
        "vietnamese": "bị lỗi",
        "vietnamese_example": "Họ đã trả lại sản phẩm bị lỗi.",
        "cefr": "C1"
    },
    "liability": {
        "definition": "Legal responsibility for something.",
        "pos": "noun",
        "pron": "/ˌlaɪ.əˈbɪl.ə.ti/",
        "example": "The company denied liability for the damage.",
        "vietnamese": "trách nhiệm pháp lý",
        "vietnamese_example": "Công ty phủ nhận trách nhiệm pháp lý cho thiệt hại.",
        "cefr": "C1"
    },
    "discretion": {
        "definition": "The freedom to decide what should be done.",
        "pos": "noun",
        "pron": "/dɪˈskreʃ.ən/",
        "example": "The decision is left to your discretion.",
        "vietnamese": "quyền quyết định",
        "vietnamese_example": "Quyết định được để cho bạn toàn quyền.",
        "cefr": "C1"
    },
    "refurbished": {
        "definition": "Repaired and restored to good condition.",
        "pos": "adj",
        "pron": "/ˌriːˈfɜː.bɪʃt/",
        "example": "He bought a refurbished laptop.",
        "vietnamese": "tân trang",
        "vietnamese_example": "Anh ấy mua một chiếc laptop đã được tân trang.",
        "cefr": "C1"
    },
    "consequently": {
        "definition": "As a result of something.",
        "pos": "adv",
        "pron": "/ˈkɒn.sɪ.kwənt.li/",
        "example": "The product failed; consequently, it was recalled.",
        "vietnamese": "do đó",
        "vietnamese_example": "Sản phẩm bị lỗi; do đó, nó đã bị thu hồi.",
        "cefr": "B2"
    },
    "arrangement": {
        "definition": "A plan or agreement.",
        "pos": "noun",
        "pron": "/əˈreɪndʒ.mənt/",
        "example": "They made an arrangement for replacement.",
        "vietnamese": "sắp xếp / thỏa thuận",
        "vietnamese_example": "Họ đã sắp xếp việc thay thế.",
        "cefr": "B2"
    },
    "satisfactory": {
        "definition": "Good enough to meet expectations.",
        "pos": "adj",
        "pron": "/ˌsæt.ɪsˈfæk.tər.i/",
        "example": "The solution was satisfactory.",
        "vietnamese": "thỏa đáng",
        "vietnamese_example": "Giải pháp là thỏa đáng.",
        "cefr": "B2"
    },
    "alleviate": {
        "definition": "To make something less severe or painful.",
        "pos": "verb",
        "pron": "/əˈliː.vi.eɪt/",
        "example": "The government introduced measures to alleviate poverty.",
        "vietnamese": "làm giảm",
        "vietnamese_example": "Chính phủ đưa ra các biện pháp để giảm nghèo.",
        "cefr": "C1"
    },
    "arbitrary": {
        "definition": "Based on random choice rather than reason or system.",
        "pos": "adj",
        "pron": "/ˈɑː.bɪ.trər.i/",
        "example": "The decision seemed arbitrary and unfair.",
        "vietnamese": "tùy ý",
        "vietnamese_example": "Quyết định đó có vẻ tùy ý và không công bằng.",
        "cefr": "C1"
    },
    "ascertain": {
        "definition": "To find something out for certain.",
        "pos": "verb",
        "pron": "/ˌæs.əˈteɪn/",
        "example": "The police tried to ascertain the facts.",
        "vietnamese": "xác định",
        "vietnamese_example": "Cảnh sát cố gắng xác định sự thật.",
        "cefr": "C1"
    },
    "blatant": {
        "definition": "Very obvious and intentional, often in a bad way.",
        "pos": "adj",
        "pron": "/ˈbleɪ.tənt/",
        "example": "It was a blatant lie.",
        "vietnamese": "trắng trợn",
        "vietnamese_example": "Đó là một lời nói dối trắng trợn.",
        "cefr": "C1"
    },
    "coherent": {
        "definition": "Logical and well-organized; easy to understand.",
        "pos": "adj",
        "pron": "/kəʊˈhɪə.rənt/",
        "example": "She gave a coherent explanation.",
        "vietnamese": "mạch lạc",
        "vietnamese_example": "Cô ấy đưa ra lời giải thích mạch lạc.",
        "cefr": "C1"
    },
    "coincide": {
        "definition": "To happen at the same time or agree exactly.",
        "pos": "verb",
        "pron": "/ˌkəʊ.ɪnˈsaɪd/",
        "example": "The events coincided with the festival.",
        "vietnamese": "trùng hợp",
        "vietnamese_example": "Sự kiện trùng với lễ hội.",
        "cefr": "C1"
    },
    "commence": {
        "definition": "To begin something.",
        "pos": "verb",
        "pron": "/kəˈmens/",
        "example": "The meeting will commence at noon.",
        "vietnamese": "bắt đầu",
        "vietnamese_example": "Cuộc họp sẽ bắt đầu vào buổi trưa.",
        "cefr": "C1"
    },
    "compelling": {
        "definition": "Very interesting or persuasive.",
        "pos": "adj",
        "pron": "/kəmˈpel.ɪŋ/",
        "example": "The argument was compelling.",
        "vietnamese": "thuyết phục",
        "vietnamese_example": "Lập luận rất thuyết phục.",
        "cefr": "C1"
    },
    "comply": {
        "definition": "To obey a rule or request.",
        "pos": "verb",
        "pron": "/kəmˈplaɪ/",
        "example": "You must comply with the regulations.",
        "vietnamese": "tuân theo",
        "vietnamese_example": "Bạn phải tuân theo quy định.",
        "cefr": "C1"
    },
    "comprehensive": {
        "definition": "Including everything that is needed.",
        "pos": "adj",
        "pron": "/ˌkɒm.prɪˈhen.sɪv/",
        "example": "He wrote a comprehensive report.",
        "vietnamese": "toàn diện",
        "vietnamese_example": "Anh ấy viết một báo cáo toàn diện.",
        "cefr": "B2"
    },
    "conceivable": {
        "definition": "Possible to imagine or believe.",
        "pos": "adj",
        "pron": "/kənˈsiː.və.bəl/",
        "example": "It is conceivable that prices will rise.",
        "vietnamese": "có thể tưởng tượng",
        "vietnamese_example": "Có thể tưởng tượng giá sẽ tăng.",
        "cefr": "C1"
    },
    "constrain": {
        "definition": "To limit something.",
        "pos": "verb",
        "pron": "/kənˈstreɪn/",
        "example": "Budget limits constrain our options.",
        "vietnamese": "hạn chế",
        "vietnamese_example": "Ngân sách hạn chế lựa chọn của chúng ta.",
        "cefr": "C1"
    },
    "contradict": {
        "definition": "To say the opposite of something.",
        "pos": "verb",
        "pron": "/ˌkɒn.trəˈdɪkt/",
        "example": "His actions contradict his words.",
        "vietnamese": "mâu thuẫn",
        "vietnamese_example": "Hành động của anh ta mâu thuẫn với lời nói.",
        "cefr": "C1"
    },
    "crucial": {
        "definition": "Extremely important.",
        "pos": "adj",
        "pron": "/ˈkruː.ʃəl/",
        "example": "Education is crucial for success.",
        "vietnamese": "quan trọng",
        "vietnamese_example": "Giáo dục rất quan trọng cho thành công.",
        "cefr": "B2"
    },
    "deliberate": {
        "definition": "Done intentionally.",
        "pos": "adj",
        "pron": "/dɪˈlɪb.ər.ət/",
        "example": "It was a deliberate attempt.",
        "vietnamese": "có chủ ý",
        "vietnamese_example": "Đó là một nỗ lực có chủ ý.",
        "cefr": "B2"
    },
    "denote": {
        "definition": "To represent or indicate something.",
        "pos": "verb",
        "pron": "/dɪˈnəʊt/",
        "example": "The symbol denotes danger.",
        "vietnamese": "biểu thị",
        "vietnamese_example": "Ký hiệu biểu thị nguy hiểm.",
        "cefr": "C1"
    },
    "deprive": {
        "definition": "To take something away from someone.",
        "pos": "verb",
        "pron": "/dɪˈpraɪv/",
        "example": "They were deprived of basic rights.",
        "vietnamese": "tước đoạt",
        "vietnamese_example": "Họ bị tước quyền cơ bản.",
        "cefr": "C1"
    },
    "differentiate": {
        "definition": "To recognize or show differences.",
        "pos": "verb",
        "pron": "/ˌdɪf.əˈren.ʃi.eɪt/",
        "example": "It is hard to differentiate the two.",
        "vietnamese": "phân biệt",
        "vietnamese_example": "Khó phân biệt hai cái.",
        "cefr": "C1"
    },
    "disclose": {
        "definition": "To make information known.",
        "pos": "verb",
        "pron": "/dɪsˈkləʊz/",
        "example": "He refused to disclose details.",
        "vietnamese": "tiết lộ",
        "vietnamese_example": "Anh ấy từ chối tiết lộ chi tiết.",
        "cefr": "C1"
    },
    "disrupt": {
        "definition": "To interrupt or cause problems.",
        "pos": "verb",
        "pron": "/dɪsˈrʌpt/",
        "example": "The storm disrupted travel plans.",
        "vietnamese": "làm gián đoạn",
        "vietnamese_example": "Cơn bão làm gián đoạn kế hoạch đi lại.",
        "cefr": "C1"
    },
    "hardware": {
        "definition": "the machines and electronic parts in a computer or other electronic system",
        "pos": "noun",
        "pron": "/ˈhɑːdweə(r)/",
        "example": "We supply computer hardware to businesses.",
        "vietnamese": "phần cứng",
        "vietnamese_example": "Chúng tôi cung cấp phần cứng máy tính cho doanh nghiệp.",
        "cefr": "C1"
    },
    "interactive": {
        "definition": "that allows information to be passed continuously and in both directions between a computer or other device and the person who uses it",
        "pos": "adj",
        "pron": "/ˌɪntərˈæktɪv/",
        "example": "interactive displays/video",
        "vietnamese": "tương tác",
        "vietnamese_example": "màn hình/video tương tác",
        "cefr": "C1"
    },
    "simulate": {
        "definition": "to create particular conditions that exist in real life using computers, models, etc., usually for study or training purposes",
        "pos": "verb",
        "pron": "/ˈsɪmjuleɪt/",
        "example": "Computer software can be used to simulate conditions on the seabed.",
        "vietnamese": "mô phỏng",
        "vietnamese_example": "Phần mềm máy tính có thể được sử dụng để mô phỏng các điều kiện dưới đáy biển.",
        "cefr": "C1"
    },
    "broadband": {
        "definition": "a way of connecting to the internet that allows you to receive information, including pictures, etc., very quickly and that is always active (so that the user does not have to connect each time)",
        "pos": "noun",
        "pron": "/ˈbrɔːdbænd/",
        "example": "plans to provide rural areas with fast broadband",
        "vietnamese": "băng thông rộng",
        "vietnamese_example": "có kế hoạch cung cấp cho khu vực nông thôn băng thông rộng nhanh",
        "cefr": "C1"
    },
    "browser": {
        "definition": "a computer program that lets you look at or read documents on the World Wide Web",
        "pos": "noun",
        "pron": "/ˈbraʊzə(r)/",
        "example": "What do you use as your default browser?",
        "vietnamese": "trình duyệt",
        "vietnamese_example": "Bạn sử dụng gì làm trình duyệt mặc định của mình?",
        "cefr": "C1"
    },
    "interface": {
        "definition": "the way a computer program presents information to a user or receives information from a user, in particular the layout of the screen and the menus",
        "pos": "noun",
        "pron": "/ˈɪntəfeɪs/",
        "example": "the user interface",
        "vietnamese": "giao diện",
        "vietnamese_example": "giao diện người dùng",
        "cefr": "C1"
    },
    "upgrade": {
        "definition": "the act of making a machine, computer system, etc. more powerful and efficient; the more powerful and efficient machine, computer system, etc.",
        "pos": "noun",
        "pron": "/ˈʌpɡreɪd/",
        "example": "instructions for installing an upgrade to the existing system",
        "vietnamese": "nâng cấp",
        "vietnamese_example": "hướng dẫn cài đặt nâng cấp lên hệ thống hiện có",
        "cefr": "C1"
    },
    "activation": {
        "definition": "the act of making something such as a device or chemical process start working",
        "pos": "noun",
        "pron": "/ˌæktɪˈveɪʃn/",
        "example": "The activation of several target genes results in two major effects.",
        "vietnamese": "kích hoạt",
        "vietnamese_example": "Việc kích hoạt một số gen mục tiêu dẫn đến hai tác động chính.",
        "cefr": "C1"
    },
    "default": {
        "definition": "what happens or appears if you do not make any other choice or change, especially in a computer program",
        "pos": "noun",
        "pron": "/dɪˈfɔːlt/",
        "example": "The default is fifty lines.",
        "vietnamese": "mặc định",
        "vietnamese_example": "Mặc định là năm mươi dòng.",
        "cefr": "C1"
    },
    "desktop": {
        "definition": "a screen on a computer that shows the icons of programs and files that can be used",
        "pos": "noun",
        "pron": "/ˈdesktɒp/",
        "example": "desktop icons",
        "vietnamese": "máy tính để bàn",
        "vietnamese_example": "biểu tượng máy tính để bàn",
        "cefr": "C1"
    },
    "directory": {
        "definition": "a book or electronic resource containing lists of information, usually in alphabetical order, for example people’s phone numbers or the names and addresses of businesses in a particular area",
        "pos": "noun",
        "pron": "/dəˈrektəri/",
        "example": "a telephone/trade directory",
        "vietnamese": "thư mục",
        "vietnamese_example": "danh bạ điện thoại/thương mại",
        "cefr": "C1"
    },
    "explosive": {
        "definition": "easily able or likely to explode/ Rapid and dramatic growth",
        "pos": "adj",
        "pron": "/ɪkˈspləʊsɪv/",
        "example": "The factory stores explosive materials.",
        "vietnamese": "dễ nổ, bùng nổ",
        "vietnamese_example": "Nhà máy lưu trữ các chất dễ nổ.",
        "cefr": "C1"
    },
    "filter": {
        "definition": "a device containing paper, sand, chemicals, etc. that a liquid or gas is passed through in order to remove any materials that are not wanted",
        "pos": "noun",
        "pron": "/ˈfɪltə(r)/",
        "example": "an air/oil filter",
        "vietnamese": "lọc",
        "vietnamese_example": "bộ lọc không khí/dầu",
        "cefr": "C1"
    },
    "gambling": {
        "definition": "the activity of playing games of chance for money and of betting on horses, etc.",
        "pos": "noun",
        "pron": "/ˈɡæmblɪŋ/",
        "example": "online/internet gambling",
        "vietnamese": "cờ bạc",
        "vietnamese_example": "cờ bạc trực tuyến/trên mạng",
        "cefr": "C1"
    },
    "laser": {
        "definition": "a device that gives out light in which all the waves oscillate (= change direction and strength) together, typically producing a powerful beam of light that can be used for cutting metal, in medical operations, etc.",
        "pos": "noun",
        "pron": "/ˈleɪzə(r)/",
        "example": "a laser beam",
        "vietnamese": "tia laze",
        "vietnamese_example": "một chùm tia laser",
        "cefr": "C1"
    },
    "simulation": {
        "definition": "a situation in which a particular set of conditions is created artificially in order to study or experience something that could exist in reality",
        "pos": "noun",
        "pron": "/ˌsɪmjuˈleɪʃn/",
        "example": "a computer simulation of how the planet functions",
        "vietnamese": "mô phỏng",
        "vietnamese_example": "một mô phỏng máy tính về cách hành tinh này hoạt động",
        "cefr": "C1"
    },
    "spam": {
        "definition": "advertising material sent by email to people who have not asked for it; advertising material on the internet that is not wanted ",
        "pos": "noun",
        "pron": "/spæm/",
        "example": "to send/block spam",
        "vietnamese": "thư rác",
        "vietnamese_example": "để gửi/chặn thư rác",
        "cefr": "C1"
    },
    "configuration": {
        "definition": "an arrangement of the parts of something or a group of things; the form or shape that this arrangement produces",
        "pos": "noun",
        "pron": "/kənˌfɪɡəˈreɪʃn/",
        "example": "configuration of something, The design is based on four configurations of squares.",
        "vietnamese": "cấu hình",
        "vietnamese_example": "cấu hình của một cái gì đó, Thiết kế dựa trên bốn cấu hình hình vuông.",
        "cefr": "C1"
    },
    "documentation": {
        "definition": "the documents that are required for something, or that give evidence or proof of something",
        "pos": "noun",
        "pron": "/ˌdɒkjumenˈteɪʃn/",
        "example": "I couldn't enter the country because I didn't have all the necessary documentation.",
        "vietnamese": "tài liệu",
        "vietnamese_example": "Tôi không thể nhập cảnh vì không có đủ giấy tờ cần thiết.",
        "cefr": "C1"
    },
    "functional": {
        "definition": "practical and useful; with little or no decoration",
        "pos": "adj",
        "pron": "/ˈfʌŋkʃənl/",
        "example": "Bathrooms don't have to be purely functional.",
        "vietnamese": "chức năng",
        "vietnamese_example": "Phòng tắm không nhất thiết phải có chức năng thuần túy.",
        "cefr": "C1"
    },
    "operational": {
        "definition": "connected with the way in which a business, machine, system, etc. works",
        "pos": "adj",
        "pron": "/ˌɒpəˈreɪʃənl/",
        "example": "operational activities/costs/difficulties",
        "vietnamese": "hoạt động",
        "vietnamese_example": "hoạt động/chi phí/khó khăn vận hành",
        "cefr": "C1"
    },
    "diplomat": {
        "definition": "a person whose job is to represent his or her country in a foreign country, for example, in an embassy",
        "pos": "noun",
        "pron": "/ˈdɪpləmæt/",
        "example": "Washington's top diplomat in Havana",
        "vietnamese": "nhà ngoại giao",
        "vietnamese_example": "Nhà ngoại giao hàng đầu của Washington ở Havana",
        "cefr": "C1"
    },
    "embassy": {
        "definition": "a group of officials led by an ambassador who represent their government in a foreign country",
        "pos": "noun",
        "pron": "/ˈembəsi/",
        "example": "embassy officials",
        "vietnamese": "đại sứ quán",
        "vietnamese_example": "quan chức đại sứ quán",
        "cefr": "C1"
    },
    "diplomatic": {
        "definition": "connected with managing relations between countries (= diplomacy)",
        "pos": "adj",
        "pron": "/ˌdɪpləˈmætɪk/",
        "example": "a diplomatic crisis",
        "vietnamese": "ngoại giao",
        "vietnamese_example": "một cuộc khủng hoảng ngoại giao",
        "cefr": "C1"
    },
    "foreigner": {
        "definition": "a person who comes from a different country",
        "pos": "noun",
        "pron": "/ˈfɒrənə(r)/",
        "example": "The fact that I was a foreigner was a big disadvantage.",
        "vietnamese": "người nước ngoài",
        "vietnamese_example": "Việc tôi là người nước ngoài là một bất lợi lớn.",
        "cefr": "C1"
    },
    "integration": {
        "definition": "the act or process of combining two or more things so that they work together",
        "pos": "noun",
        "pron": "/ˌɪntɪˈɡreɪʃn/",
        "example": "The aim is to promote closer economic integration.",
        "vietnamese": "hội nhập",
        "vietnamese_example": "Mục đích là để thúc đẩy hội nhập kinh tế chặt chẽ hơn.",
        "cefr": "C1"
    },
    "migration": {
        "definition": "the movement every year of large numbers of birds or animals from one place to another",
        "pos": "noun",
        "pron": "/maɪˈɡreɪʃn/",
        "example": "the seasonal migration of blue whales",
        "vietnamese": "di cư",
        "vietnamese_example": "sự di cư theo mùa của cá voi xanh",
        "cefr": "C1"
    },
    "trademark": {
        "definition": "a name, symbol or design that a company uses for its products and that cannot be used by anyone else",
        "pos": "noun",
        "pron": "/ˈtreɪdmɑːk/",
        "example": "‘Big Mac’ is McDonald's best-known trademark.",
        "vietnamese": "nhãn hiệu",
        "vietnamese_example": "‘Big Mac’ là nhãn hiệu nổi tiếng nhất của McDonald.",
        "cefr": "C1"
    },
    "sanction": {
        "definition": "an official order that limits trade, contact, etc. with a particular country, in order to make it do something, such as obeying international law",
        "pos": "noun",
        "pron": "/ˈsæŋkʃn/",
        "example": "Trade sanctions were imposed against any country that refused to sign the agreement.",
        "vietnamese": "sự trừng phạt",
        "vietnamese_example": "Các biện pháp trừng phạt thương mại được áp dụng đối với bất kỳ quốc gia nào từ chối ký thỏa thuận.",
        "cefr": "C1"
    },
    "ambassador": {
        "definition": "an official who lives in a foreign country as the senior representative there of their own country",
        "pos": "noun",
        "pron": "/æmˈbæsədə(r)/",
        "example": "the British Ambassador to Italy/in Rome",
        "vietnamese": "đại sứ",
        "vietnamese_example": "Đại sứ Anh tại Ý/ở Rome",
        "cefr": "C1"
    },
    "boom": {
        "definition": "a sudden increase in trade and economic activity; a period of wealth and success",
        "pos": "noun",
        "pron": "/buːm/",
        "example": "Living standards improved rapidly during the post-war boom.",
        "vietnamese": "bùng nổ",
        "vietnamese_example": "Mức sống được cải thiện nhanh chóng trong thời kỳ bùng nổ sau chiến tranh.",
        "cefr": "C1"
    },
    "commerce": {
        "definition": "trade, especially between countries; the buying and selling of goods and services",
        "pos": "noun",
        "pron": "/ˈkɒmɜːs/",
        "example": "Leaders of industry and commerce met at the summit in Paris.",
        "vietnamese": "thương mại",
        "vietnamese_example": "Các nhà lãnh đạo công nghiệp và thương mại đã gặp nhau tại hội nghị thượng đỉnh ở Paris.",
        "cefr": "C1"
    },
    "counterpart": {
        "definition": "a person or thing that has the same position or function as somebody/something else in a different place or situation",
        "pos": "noun",
        "pron": "/ˈkaʊntəpɑːt/",
        "example": "The Foreign Minister held talks with his Chinese counterpart.",
        "vietnamese": "đối tác",
        "vietnamese_example": "Bộ trưởng Ngoại giao hội đàm với người đồng cấp Trung Quốc.",
        "cefr": "C1"
    },
    "deficit": {
        "definition": "the amount by which money spent or owed is greater than money earned in a particular period of time",
        "pos": "noun",
        "pron": "/ˈdefɪsɪt/",
        "example": "a budget/trade deficit",
        "vietnamese": "thâm hụt",
        "vietnamese_example": "thâm hụt ngân sách/thương mại",
        "cefr": "C1"
    },
    "donor": {
        "definition": "a person or an organization that makes a gift of money, clothes, food, etc. to a charity, etc.",
        "pos": "noun",
        "pron": "/ˈdəʊnə(r)/",
        "example": "international aid donors (= countries that give money, etc. to help other countries)",
        "vietnamese": "nhà tài trợ",
        "vietnamese_example": "các nhà tài trợ viện trợ quốc tế (= các quốc gia cung cấp tiền, v.v. để giúp đỡ các quốc gia khác)",
        "cefr": "C1"
    },
    "establishment": {
        "definition": "an organization, a large institution or a hotel",
        "pos": "noun",
        "pron": "/ɪˈstæblɪʃmənt/",
        "example": "The visa is for foreign nationals wishing to study at a university, college or similar educational establishment.",
        "vietnamese": "thành lập",
        "vietnamese_example": "Thị thực dành cho người nước ngoài muốn học tại một trường đại học, cao đẳng hoặc cơ sở giáo dục tương tự.",
        "cefr": "C1"
    },
    "facilitate": {
        "definition": "to make an action or a process possible or easier",
        "pos": "verb",
        "pron": "/fəˈsɪlɪteɪt/",
        "example": "The new trade agreement should facilitate more rapid economic growth.",
        "vietnamese": "tạo điều kiện",
        "vietnamese_example": "Hiệp định thương mại mới sẽ tạo điều kiện cho tăng trưởng kinh tế nhanh hơn.",
        "cefr": "C1"
    },
    "interference": {
        "definition": "the act of getting involved in and trying to influence a situation that should not really involve you, in a way that annoys other people ",
        "pos": "noun",
        "pron": "/ˌɪntəˈfɪərəns/",
        "example": "interference (in something), They resent foreign interference in the internal affairs of their country.",
        "vietnamese": "sự can thiệp",
        "vietnamese_example": "can thiệp (vào việc gì đó), Họ phẫn nộ sự can thiệp của nước ngoài vào công việc nội bộ của đất nước họ.",
        "cefr": "C1"
    },
    "monopoly": {
        "definition": "the complete control of trade in particular goods or the supply of a particular service; a type of goods or a service that is controlled in this way",
        "pos": "noun",
        "pron": "/məˈnɒpəli/",
        "example": "In the past central government had a monopoly on television broadcasting.",
        "vietnamese": "sự độc quyền",
        "vietnamese_example": "Trước đây, chính quyền trung ương độc quyền phát sóng truyền hình.",
        "cefr": "C1"
    },
    "obsession": {
        "definition": "the state in which a person’s mind is completely filled with thoughts of one particular thing or person in a way that is not reasonable or normal",
        "pos": "noun",
        "pron": "/əbˈseʃn/",
        "example": "Her fear of flying is bordering on obsession.",
        "vietnamese": "nỗi ám ảnh",
        "vietnamese_example": "Nỗi sợ bay của cô gần như là nỗi ám ảnh.",
        "cefr": "C1"
    },
    "refuge": {
        "definition": "shelter or protection from danger, trouble, etc.",
        "pos": "noun",
        "pron": "/ˈrefjuːdʒ/",
        "example": "A further 300 people have taken refuge in the US embassy.",
        "vietnamese": "nơi trú ẩn",
        "vietnamese_example": "Hơn 300 người khác đã trú ẩn trong đại sứ quán Mỹ.",
        "cefr": "C1"
    },
    "experimental": {
        "definition": "based on new ideas, forms or methods that are used to find out what effect they have",
        "pos": "adj",
        "pron": "/ɪkˌsperɪˈmentl/",
        "example": "The school's experimental teaching methods include letting the children decide what to study.",
        "vietnamese": "thử nghiệm",
        "vietnamese_example": "Phương pháp giảng dạy thử nghiệm của trường bao gồm việc để trẻ quyết định sẽ học gì.",
        "cefr": "C1"
    },
    "empirical": {
        "definition": "based on experiments or experience rather than ideas or theories",
        "pos": "adj",
        "pron": "/ɪmˈpɪrɪkl/",
        "example": "empirical evidence/knowledge/research",
        "vietnamese": "thực nghiệm",
        "vietnamese_example": "bằng chứng thực nghiệm/kiến thức/nghiên cứu",
        "cefr": "C1"
    },
    "conscience": {
        "definition": "the part of your mind that tells you whether your actions are right or wrong",
        "pos": "noun",
        "pron": "/ˈkɒnʃəns/",
        "example": "to have a clear/guilty conscience (= to feel that you have done right/wrong)",
        "vietnamese": "lương tâm",
        "vietnamese_example": "có lương tâm trong sáng/có tội (= cảm thấy rằng bạn đã làm đúng/sai)",
        "cefr": "C1"
    },
    "agricultural": {
        "definition": "connected with the science or practice of farming",
        "pos": "adj",
        "pron": "/ˌæɡrɪˈkʌltʃərəl/",
        "example": "agricultural policy/land/production/development",
        "vietnamese": "nông nghiệp",
        "vietnamese_example": "chính sách nông nghiệp/đất đai/sản xuất/phát triển",
        "cefr": "C1"
    },
    "aluminium": {
        "definition": "a chemical element. Aluminium is a light, silver-grey metal used for making pans, etc.",
        "pos": "noun",
        "pron": "/ˌæljəˈmɪniəm/",
        "example": "aluminium saucepans/window frames",
        "vietnamese": "nhôm",
        "vietnamese_example": "chảo nhôm/khung cửa sổ",
        "cefr": "C1"
    },
    "apparatus": {
        "definition": "the tools or other pieces of equipment that are needed for a particular activity or task",
        "pos": "noun",
        "pron": "/ˌæpəˈreɪtəs/",
        "example": "The experiment requires special apparatus.",
        "vietnamese": "thiết bị (khoa học, kỹ thuật)",
        "vietnamese_example": "Thí nghiệm này cần thiết bị đặc biệt.",
        "cefr": "C1"
    },
    "aspire": {
        "definition": "to have a strong desire to achieve or to become something",
        "pos": "verb",
        "pron": "/əˈspaɪə(r)/",
        "example": "aspire (to something), She aspired to a scientific career.",
        "vietnamese": "khao khát",
        "vietnamese_example": "khao khát (điều gì đó), Cô khao khát sự nghiệp khoa học.",
        "cefr": "C1"
    },
    "clinical": {
        "definition": "relating to the examination and treatment of patients and their illnesses",
        "pos": "adj",
        "pron": "/ˈklɪnɪkl/",
        "example": "The hospital is conducting clinical research.",
        "vietnamese": "lâm sàng",
        "vietnamese_example": "Bệnh viện đang tiến hành nghiên cứu lâm sàng.",
        "cefr": "C1"
    },
    "composition": {
        "definition": "the different parts that something is made of; the way in which the different parts are organized",
        "pos": "noun",
        "pron": "/ˌkɒmpəˈzɪʃn/",
        "example": "the chemical composition of the soil",
        "vietnamese": "thành phần",
        "vietnamese_example": "thành phần hóa học của đất",
        "cefr": "C1"
    },
    "copper": {
        "definition": "a chemical element. Copper is a soft red-brown metal used for making electric wires, pipes and coins.",
        "pos": "noun",
        "pron": "/ˈkɒpə(r)/",
        "example": "a copper mine",
        "vietnamese": "đồng",
        "vietnamese_example": "một mỏ đồng",
        "cefr": "C1"
    },
    "endeavour": {
        "definition": "an attempt to do something, especially something new or difficult",
        "pos": "noun",
        "pron": "/ɪnˈdevə(r)/",
        "example": "There have been great advances in the field of scientific endeavour.",
        "vietnamese": "nỗ lực",
        "vietnamese_example": "Đã có những tiến bộ to lớn trong lĩnh vực nỗ lực khoa học.",
        "cefr": "C1"
    },
    "enrich": {
        "definition": "to improve the quality of something, often by adding something to it",
        "pos": "verb",
        "pron": "/ɪnˈrɪtʃ/",
        "example": "The study of science has enriched all our lives.",
        "vietnamese": "làm giàu",
        "vietnamese_example": "Việc nghiên cứu khoa học đã làm phong phú thêm cuộc sống của chúng ta.",
        "cefr": "C1"
    },
    "evolutionary": {
        "definition": "connected with evolution; connected with slow steady development and change",
        "pos": "adj",
        "pron": "/ˌiːvəˈluːʃənri/",
        "example": "evolutionary theory",
        "vietnamese": "tiến hóa",
        "vietnamese_example": "thuyết tiến hóa",
        "cefr": "C1"
    },
    "extract": {
        "definition": "to remove or obtain a substance from something, for example by using an industrial or a chemical process",
        "pos": "verb",
        "pron": "/ɪkˈstrækt/",
        "example": "a machine that extracts excess moisture from the air",
        "vietnamese": "chiết xuất",
        "vietnamese_example": "một cỗ máy hút độ ẩm dư thừa từ không khí",
        "cefr": "C1"
    },
    "formulate": {
        "definition": "to create or prepare something carefully, giving particular attention to the details",
        "pos": "verb",
        "pron": "/ˈfɔːmjuleɪt/",
        "example": "formulate something, to formulate a policy/theory/plan/proposal",
        "vietnamese": "xây dựng",
        "vietnamese_example": "hình thành một cái gì đó, hình thành một chính sách/lý thuyết/kế hoạch/đề xuất",
        "cefr": "C1"
    },
    "linear": {
        "definition": "of or in lines",
        "pos": "adj",
        "pron": "/ˈlɪniə(r)/",
        "example": "In his art he broke the laws of scientific linear perspective.",
        "vietnamese": "tuyến tính",
        "vietnamese_example": "Trong nghệ thuật của mình, ông đã phá vỡ các quy luật về quan điểm tuyến tính khoa học.",
        "cefr": "C1"
    },
    "minute": {
        "definition": "extremely small",
        "pos": "adj",
        "pron": "/maɪˈnjuːt/",
        "example": "minute amounts of chemicals in the water",
        "vietnamese": "phút",
        "vietnamese_example": "lượng nhỏ hóa chất trong nước",
        "cefr": "C1"
    },
    "petition": {
        "definition": "a written document signed by a large number of people that asks somebody in a position of authority to do or change something",
        "pos": "noun",
        "pron": "/pəˈtɪʃn/",
        "example": "Would you like to sign our petition against animal testing?",
        "vietnamese": "đơn kiến ​​nghị",
        "vietnamese_example": "Bạn có muốn ký vào đơn kiến nghị phản đối việc thử nghiệm trên động vật của chúng tôi không?",
        "cefr": "C1"
    },
    "theoretical": {
        "definition": "connected with the ideas and principles on which a particular subject is based, rather than with practice and experiment",
        "pos": "adj",
        "pron": "/ˌθɪəˈretɪkl/",
        "example": "The plan is still theoretical.",
        "vietnamese": "lý thuyết",
        "vietnamese_example": "Kế hoạch này vẫn chỉ là trên lý thuyết.",
        "cefr": "C1"
    },
    "toxic": {
        "definition": "containing poison; poisonous",
        "pos": "adj",
        "pron": "/ˈtɒksɪk/",
        "example": "toxic chemicals/fumes/gases/substances",
        "vietnamese": "độc hại",
        "vietnamese_example": "hóa chất/khói/khí/chất độc hại",
        "cefr": "C1"
    },
    "methodology": {
        "definition": "a set of methods and principles used to perform a particular activity",
        "pos": "noun",
        "pron": "/ˌmeθəˈdɒlədʒi/",
        "example": "recent changes in the methodology of language teaching",
        "vietnamese": "phương pháp luận",
        "vietnamese_example": "Những thay đổi gần đây trong phương pháp giảng dạy ngôn ngữ",
        "cefr": "C1"
    },
    "statistical": {
        "definition": "connected with or based on statistics",
        "pos": "adj",
        "pron": "/stəˈtɪstɪkl/",
        "example": "statistical analysis",
        "vietnamese": "thống kê",
        "vietnamese_example": "phân tích thống kê",
        "cefr": "C1"
    },
    "variable": {
        "definition": "often changing; likely to change",
        "pos": "adj",
        "pron": "/ˈveəriəbl/",
        "example": "variable temperatures",
        "vietnamese": "biến",
        "vietnamese_example": "nhiệt độ thay đổi",
        "cefr": "C1"
    },
    "collaborate": {
        "definition": "to work together with somebody in order to produce or achieve something",
        "pos": "verb",
        "pron": "/kəˈlæbəreɪt/",
        "example": "Researchers around the world are collaborating to develop a new vaccine.",
        "vietnamese": "cộng tác",
        "vietnamese_example": "Các nhà nghiên cứu trên khắp thế giới đang hợp tác để phát triển một loại vắc-xin mới.",
        "cefr": "C1"
    },
    "commissioner": {
        "definition": "a member of a commission (= an official group of people who are responsible for controlling something or finding out about something)",
        "pos": "noun",
        "pron": "/kəˈmɪʃənə(r)/",
        "example": "the Church Commissioners (= the group of people responsible for controlling the financial affairs of the Church of England)",
        "vietnamese": "ủy viên",
        "vietnamese_example": "các Ủy viên Giáo hội (= nhóm người chịu trách nhiệm kiểm soát các vấn đề tài chính của Giáo hội Anh)",
        "cefr": "C1"
    },
    "conviction": {
        "definition": "Strong belief or persuasive force",
        "pos": "noun",
        "pron": "/kənˈvɪkʃn/",
        "example": "She spoke with conviction.",
        "vietnamese": "niềm tin mạnh mẽ, sự thuyết phục",
        "vietnamese_example": "Cô ấy nói với niềm tin mạnh mẽ.",
        "cefr": "C1"
    },
    "inherent": {
        "definition": "that is a basic or permanent part of somebody/something and that cannot be removed",
        "pos": "adj",
        "pron": "/ɪnˈherənt/",
        "example": "the difficulties inherent in a study of this type",
        "vietnamese": "vốn có",
        "vietnamese_example": "những khó khăn cố hữu trong việc nghiên cứu loại hình này",
        "cefr": "C1"
    },
    "overwhelming": {
        "definition": "very great or very strong; so powerful that you cannot resist it or decide how to react",
        "pos": "adj",
        "pron": "/ˌəʊvəˈwelmɪŋ/",
        "example": "The evidence against him was overwhelming.",
        "vietnamese": "áp đảo",
        "vietnamese_example": "Bằng chứng chống lại anh ta quá nhiều.",
        "cefr": "C1"
    },
    "pioneer": {
        "definition": "a person who is the first to study and develop a particular area of knowledge, culture, etc. that other people then continue to develop",
        "pos": "noun",
        "pron": "/ˌpaɪəˈnɪə(r)/",
        "example": "a pioneer in the field of microsurgery",
        "vietnamese": "người tiên phong",
        "vietnamese_example": "người tiên phong trong lĩnh vực vi phẫu",
        "cefr": "C1"
    },
    "regime": {
        "definition": "political system or system or set of rules",
        "pos": "noun",
        "pron": "/reɪˈʒiːm/",
        "example": "The new tax regime affects businesses.",
        "vietnamese": "chế độ",
        "vietnamese_example": "Hệ thống thuế mới ảnh hưởng đến doanh nghiệp.",
        "cefr": "C1"
    },
    "supervisor": {
        "definition": "a person who supervises somebody/something",
        "pos": "noun",
        "pron": "/ˈsuːpəvaɪzə(r)/",
        "example": "I have a meeting with my supervisor about my research topic.",
        "vietnamese": "người giám sát",
        "vietnamese_example": "Tôi có một cuộc họp với người giám sát của tôi về chủ đề nghiên cứu của tôi.",
        "cefr": "C1"
    },
    "tactic": {
        "definition": "the particular method you use to achieve something",
        "pos": "noun",
        "pron": "/ˈtæktɪk/",
        "example": "They tried all kinds of tactics to get us to go.",
        "vietnamese": "chiến thuật",
        "vietnamese_example": "Họ đã tìm mọi cách để dụ chúng tôi đi.",
        "cefr": "C1"
    },
    "tactical": {
        "definition": "connected with the particular method you use to achieve something",
        "pos": "adj",
        "pron": "/ˈtæktɪkl/",
        "example": "tactical planning",
        "vietnamese": "chiến thuật",
        "vietnamese_example": "hoạch định chiến thuật",
        "cefr": "C1"
    },
    "theology": {
        "definition": "the study of religion and beliefs",
        "pos": "noun",
        "pron": "/θiˈɒlədʒi/",
        "example": "a degree in theology",
        "vietnamese": "thần học",
        "vietnamese_example": "bằng cấp về thần học",
        "cefr": "C1"
    },
    "undergraduate": {
        "definition": "a university or college student",
        "pos": "noun",
        "pron": "/ˌʌndəˈɡrædʒuət/",
        "example": "She is an undergraduate at Oxford.",
        "vietnamese": "sinh viên đại học",
        "vietnamese_example": "Cô ấy là sinh viên đại học tại Oxford.",
        "cefr": "C1"
    },
    "warfare": {
        "definition": "the activity of fighting a war, especially using particular weapons or methods",
        "pos": "noun",
        "pron": "/ˈwɔːfeə(r)/",
        "example": "air/naval/guerrilla warfare",
        "vietnamese": "chiến tranh",
        "vietnamese_example": "chiến tranh trên không/hải quân/du kích",
        "cefr": "C1"
    },
    "willingness": {
        "definition": "the quality of being happy and ready to do something",
        "pos": "noun",
        "pron": "/ˈwɪlɪŋnəs/",
        "example": "Success in studying depends on a willingness to learn.",
        "vietnamese": "sự tự nguyện",
        "vietnamese_example": "Thành công trong học tập phụ thuộc vào sự sẵn lòng học hỏi.",
        "cefr": "C1"
    },
    "columnist": {
        "definition": "a journalist who writes regular articles for a newspaper or magazine",
        "pos": "noun",
        "pron": "/ˈkɒləmnɪst/",
        "example": "a newspaper columnist",
        "vietnamese": "người viết chuyên mục",
        "vietnamese_example": "một người phụ trách chuyên mục của tờ báo",
        "cefr": "C1"
    },
    "correspondent": {
        "definition": "A journalist reporting from a specific place or on a specific topic.",
        "pos": "noun",
        "pron": "/ˌkɒrəˈspɒndənt/",
        "example": "He is a foreign correspondent in Tokyo.",
        "vietnamese": "phóng viên thường trú",
        "vietnamese_example": "Anh ấy là phóng viên thường trú ở Tokyo.",
        "cefr": "C1"
    },
    "newsletter": {
        "definition": "a report containing news of the activities of a club or organization that is sent regularly to all its members",
        "pos": "noun",
        "pron": "/ˈnjuːzletə(r)/",
        "example": "Our sailing club produces a monthly newsletter.",
        "vietnamese": "bản tin",
        "vietnamese_example": "Câu lạc bộ chèo thuyền của chúng tôi sản xuất một bản tin hàng tháng.",
        "cefr": "C1"
    },
    "suppress": {
        "definition": "to prevent information from being known.",
        "pos": "verb",
        "pron": "/səˈpres/",
        "example": "The report was suppressed by officials.",
        "vietnamese": "che giấu / kiểm duyệt",
        "vietnamese_example": "Báo cáo đã bị che giấu / kiểm duyệt bởi quan chức.",
        "cefr": "C1"
    },
    "commentary": {
        "definition": "a spoken description of an event that is given while it is happening, especially on the radio or television",
        "pos": "noun",
        "pron": "/ˈkɒməntri/",
        "example": "a sports commentary",
        "vietnamese": "bình luận",
        "vietnamese_example": "bình luận thể thao",
        "cefr": "C1"
    },
    "simultaneously": {
        "definition": "at the same time as something else",
        "pos": "adv",
        "pron": "/ˌsɪmlˈteɪniəsli/",
        "example": "The game will be broadcast simultaneously on TV and radio.",
        "vietnamese": "đồng thời",
        "vietnamese_example": "Trận đấu sẽ được phát sóng đồng thời trên TV và đài phát thanh.",
        "cefr": "C1"
    },
    "accomplishment": {
        "definition": "an impressive thing that is done or achieved after a lot of work",
        "pos": "noun",
        "pron": "/əˈkʌmplɪʃmənt/",
        "example": "It was one of the President's greatest accomplishments.",
        "vietnamese": "thành tựu",
        "vietnamese_example": "Đó là một trong những thành tựu lớn nhất của Tổng thống.",
        "cefr": "C1"
    },
    "allegedly": {
        "definition": "expressed as though something is a fact but without giving any proof",
        "pos": "adv",
        "pron": "/əˈledʒɪdli/",
        "example": "crimes allegedly committed during the war",
        "vietnamese": "được cho là",
        "vietnamese_example": "tội ác được cho là đã xảy ra trong chiến tranh",
        "cefr": "C1"
    },
    "array": {
        "definition": "a group or collection of things or people, often one that is large or impressive",
        "pos": "noun",
        "pron": "/əˈreɪ/",
        "example": "a vast array of bottles of different shapes and sizes",
        "vietnamese": "mảng",
        "vietnamese_example": "một loạt các chai có hình dạng và kích cỡ khác nhau",
        "cefr": "C1"
    },
    "articulate": {
        "definition": "to express or explain your thoughts or feelings clearly in words",
        "pos": "verb",
        "pron": "/ɑːˈtɪkjuleɪt/",
        "example": "She struggled to articulate her thoughts.",
        "vietnamese": "nói rõ ràng",
        "vietnamese_example": "Cô cố gắng diễn đạt suy nghĩ của mình.",
        "cefr": "C1"
    },
    "burst": {
        "definition": "to break open or apart, especially because of pressure from inside; to make something break in this way",
        "pos": "verb",
        "pron": "/bɜːst/",
        "example": "That balloon will burst if you blow it up any more.",
        "vietnamese": "nổ tung",
        "vietnamese_example": "Quả bóng đó sẽ nổ nếu bạn thổi nó lên nữa.",
        "cefr": "C1"
    },
    "clarity": {
        "definition": "the quality of being expressed clearly",
        "pos": "noun",
        "pron": "/ˈklærəti/",
        "example": "a lack of clarity in the law",
        "vietnamese": "sự rõ ràng",
        "vietnamese_example": "sự thiếu rõ ràng trong luật pháp",
        "cefr": "C1"
    },
    "copyright": {
        "definition": "if a person or an organization holds the copyright on a piece of writing, music, etc., they are the only people who have the legal right to publish, broadcast, perform it, etc., and other people must ask their permission to use it or any part of it",
        "pos": "noun",
        "pron": "/ˈkɒpiraɪt/",
        "example": "Copyright expires seventy years after the death of the author.",
        "vietnamese": "bản quyền",
        "vietnamese_example": "Bản quyền hết hạn bảy mươi năm sau khi tác giả qua đời.",
        "cefr": "C1"
    },
    "discard": {
        "definition": "to get rid of something that you no longer want or need",
        "pos": "verb",
        "pron": "/dɪˈskɑːd/",
        "example": "discard somebody/something, The room was littered with discarded newspapers.",
        "vietnamese": "vứt bỏ",
        "vietnamese_example": "vứt bỏ ai/thứ gì đó, Căn phòng ngổn ngang những tờ báo bỏ đi.",
        "cefr": "C1"
    },
    "disclosure": {
        "definition": "the act of making something known or public that was previously secret or private",
        "pos": "noun",
        "pron": "/dɪsˈkləʊʒə(r)/",
        "example": "the newspaper’s disclosure of defence secrets",
        "vietnamese": "tiết lộ",
        "vietnamese_example": "báo chí làm lộ bí mật quốc phòng",
        "cefr": "C1"
    },
    "distress": {
        "definition": "a feeling of great worry or unhappiness; great mental pain",
        "pos": "noun",
        "pron": "/dɪˈstres/",
        "example": "The newspaper article caused the actor considerable distress.",
        "vietnamese": "đau khổ",
        "vietnamese_example": "Bài báo đã khiến nam diễn viên đau khổ đáng kể.",
        "cefr": "C1"
    },
    "disturbing": {
        "definition": "making you feel anxious and upset or shocked",
        "pos": "adj",
        "pron": "/dɪˈstɜːbɪŋ/",
        "example": "a disturbing piece of news",
        "vietnamese": "làm phiền",
        "vietnamese_example": "một tin tức đáng lo ngại",
        "cefr": "C1"
    },
    "dub": {
        "definition": "to give somebody/something a particular name, often in a humorous or critical way",
        "pos": "verb",
        "pron": "/dʌb/",
        "example": "The media dubbed anorexia ‘the slimming disease’.",
        "vietnamese": "lồng tiếng",
        "vietnamese_example": "Các phương tiện truyền thông gọi chứng biếng ăn là “căn bệnh giảm béo”.",
        "cefr": "C1"
    },
    "embody": {
        "definition": "to express or represent an idea or a quality",
        "pos": "verb",
        "pron": "/ɪmˈbɒdi/",
        "example": "embody something, a politician who embodied the hopes of black youth",
        "vietnamese": "hiện thân",
        "vietnamese_example": "thể hiện điều gì đó, một chính trị gia thể hiện niềm hy vọng của thanh niên da đen",
        "cefr": "C1"
    },
    "favourable": {
        "definition": "making people have a good opinion of somebody/something",
        "pos": "adj",
        "pron": "/ˈfeɪvərəbl/",
        "example": "She made a favourable impression on his parents.",
        "vietnamese": "thuận lợi",
        "vietnamese_example": "Cô đã gây ấn tượng tốt với bố mẹ anh.",
        "cefr": "C1"
    },
    "glance": {
        "definition": "a quick look",
        "pos": "noun",
        "pron": "/ɡlɑːns/",
        "example": "to take/have a glance at the newspaper headlines",
        "vietnamese": "liếc nhìn",
        "vietnamese_example": "nhìn/nhìn qua các tiêu đề của tờ báo",
        "cefr": "C1"
    },
    "grave": {
        "definition": "very serious and important; giving you a reason to feel worried",
        "pos": "adj",
        "pron": "/ɡreɪv/",
        "example": "The police have expressed grave concern about the missing child's safety.",
        "vietnamese": "phần mộ",
        "vietnamese_example": "Cảnh sát bày tỏ quan ngại sâu sắc về sự an toàn của đứa trẻ mất tích.",
        "cefr": "C1"
    },
    "grind": {
        "definition": "to break or press something into very small pieces between two hard surfaces or using a special machine",
        "pos": "verb",
        "pron": "/ɡraɪnd/",
        "example": "to grind coffee/corn",
        "vietnamese": "xay",
        "vietnamese_example": "để xay cà phê/ngô",
        "cefr": "C1"
    },
    "hail": {
        "definition": "to describe somebody/something as being very good or special, especially in newspapers, etc.",
        "pos": "verb",
        "pron": "/heɪl/",
        "example": "be hailed (as) something, The conference was hailed as a great success.",
        "vietnamese": "kêu",
        "vietnamese_example": "được ca ngợi (như) một cái gì đó, Hội nghị được ca ngợi là một thành công lớn.",
        "cefr": "C1"
    },
    "handling": {
        "definition": "the way that somebody deals with or treats a situation, a person, an animal, etc.",
        "pos": "noun",
        "pron": "/ˈhændlɪŋ/",
        "example": "I was impressed by his handling of the affair.",
        "vietnamese": "xử lý",
        "vietnamese_example": "Tôi rất ấn tượng với cách xử lý vụ việc của anh ấy.",
        "cefr": "C1"
    },
    "harassment": {
        "definition": "the act of annoying or worrying somebody by putting pressure on them or saying or doing unpleasant things to them",
        "pos": "noun",
        "pron": "/ˈhærəsmənt/",
        "example": "sexual/racial harassment",
        "vietnamese": "quấy rối",
        "vietnamese_example": "quấy rối tình dục/chủng tộc",
        "cefr": "C1"
    },
    "high-profile": {
        "definition": "receiving or involving a lot of attention and discussion in the media",
        "pos": "adj",
        "pron": "/ˌhaɪ ˈprəʊfaɪl/",
        "example": "a high-profile campaign",
        "vietnamese": "cao cấp",
        "vietnamese_example": "một chiến dịch nổi bật",
        "cefr": "C1"
    },
    "hostile": {
        "definition": "aggressive or unfriendly and ready to argue or fight",
        "pos": "adj",
        "pron": "/ˈhɒstaɪl/",
        "example": "The speaker got a hostile reception from the audience.",
        "vietnamese": "thù địch",
        "vietnamese_example": "Diễn giả đã nhận được sự đón nhận thù địch từ khán giả.",
        "cefr": "C1"
    },
    "instruct": {
        "definition": "to tell somebody to do something, especially in a formal or official way",
        "pos": "verb",
        "pron": "/ɪnˈstrʌkt/",
        "example": "instruct somebody to do something, The letter instructed him to report to headquarters immediately.",
        "vietnamese": "hướng dẫn",
        "vietnamese_example": "chỉ thị ai đó làm việc gì, lá thư dặn anh phải báo cáo về trụ sở ngay.",
        "cefr": "C1"
    },
    "ironic": {
        "definition": "showing that you really mean the opposite of what you are saying; expressing irony",
        "pos": "adj",
        "pron": "/aɪˈrɒnɪk/",
        "example": "an ironic comment",
        "vietnamese": "mỉa mai",
        "vietnamese_example": "một bình luận mỉa mai",
        "cefr": "C1"
    },
    "line-up": {
        "definition": "the people who are going to take part in a particular event",
        "pos": "noun",
        "pron": "/ˈlaɪn ʌp/",
        "example": "an impressive line-up of speakers",
        "vietnamese": "xếp hàng",
        "vietnamese_example": "một dàn diễn giả ấn tượng",
        "cefr": "C1"
    },
    "manipulation": {
        "definition": "behaviour that controls or influences somebody/something, often in a dishonest way so that they do not realize it",
        "pos": "noun",
        "pron": "/məˌnɪpjuˈleɪʃn/",
        "example": "Advertising like this is a cynical manipulation of the elderly.",
        "vietnamese": "thao tác",
        "vietnamese_example": "Quảng cáo như thế này là một sự thao túng đầy hoài nghi của người già.",
        "cefr": "C1"
    },
    "march": {
        "definition": "To walk in a steady, rhythmic way (often in a group).",
        "pos": "verb",
        "pron": "/mɑːtʃ/",
        "example": "The soldiers marched through the city.",
        "vietnamese": "diễu hành",
        "vietnamese_example": "Những người lính đã hành quân / diễu hành qua thành phố.",
        "cefr": "B1"
    },
    "discourse": {
        "definition": "a long and serious treatment or discussion of a subject in speech or writing",
        "pos": "noun",
        "pron": "/ˈdɪskɔːs/",
        "example": "discourse on something, a discourse on issues of gender and sexuality",
        "vietnamese": "diễn ngôn",
        "vietnamese_example": "diễn ngôn về điều gì đó, diễn ngôn về các vấn đề về giới tính và tình dục",
        "cefr": "C1"
    },
    "acquisition": {
        "definition": "the act of getting something, especially knowledge, a skill, etc.",
        "pos": "noun",
        "pron": "/ˌækwɪˈzɪʃn/",
        "example": "theories of child language acquisition",
        "vietnamese": "sự mua lại",
        "vietnamese_example": "lý thuyết về việc tiếp thu ngôn ngữ của trẻ",
        "cefr": "C1"
    },
    "amid": {
        "definition": "in the middle of or during something, especially something that causes excitement or fear",
        "pos": "prep",
        "pron": "/əˈmɪd/",
        "example": "He finished his speech amid tremendous applause.",
        "vietnamese": "ở giữa",
        "vietnamese_example": "Ông kết thúc bài phát biểu của mình trong tiếng vỗ tay vang dội.",
        "cefr": "C1"
    },
    "banner": {
        "definition": "a long piece of cloth with a message on it that is carried between two poles or hung in a public place to show support for something",
        "pos": "noun",
        "pron": "/ˈbænə(r)/",
        "example": "A huge banner over the street said ‘Welcome home’.",
        "vietnamese": "ngọn cờ",
        "vietnamese_example": "Một biểu ngữ lớn trên đường có dòng chữ “Chào mừng về nhà”.",
        "cefr": "C1"
    },
    "boast": {
        "definition": "to talk in a way that shows you are too proud of something that you have or can do",
        "pos": "verb",
        "pron": "/bəʊst/",
        "example": "I don't want to boast, but I can actually speak six languages.",
        "vietnamese": "khoe khoan",
        "vietnamese_example": "Tôi không muốn khoe khoang nhưng tôi thực sự có thể nói được sáu thứ tiếng.",
        "cefr": "C1"
    },
    "complexity": {
        "definition": "the state of being formed of many parts; the state of being difficult to understand",
        "pos": "noun",
        "pron": "/kəmˈpleksəti/",
        "example": "the increasing complexity of modern telecommunication systems",
        "vietnamese": "sự phức tạp",
        "vietnamese_example": "sự phức tạp ngày càng tăng của hệ thống viễn thông hiện đại",
        "cefr": "C1"
    },
    "concede": {
        "definition": "to admit that something is true, logical, etc. after first denying it or resisting it",
        "pos": "verb",
        "pron": "/kənˈsiːd/",
        "example": "+ speech, ‘Not bad,’ she conceded grudgingly.",
        "vietnamese": "thừa nhận",
        "vietnamese_example": "+ lời nói, ‘Không tệ,’ cô thừa nhận một cách miễn cưỡng.",
        "cefr": "C1"
    },
    "dispute": {
        "definition": "an argument between two people, groups or countries; discussion about a subject on which people disagree",
        "pos": "noun",
        "pron": "/dɪˈspjuːt/",
        "example": "industrial/pay disputes",
        "vietnamese": "tranh luận",
        "vietnamese_example": "tranh chấp công nghiệp/tiền lương",
        "cefr": "C1"
    },
    "imagery": {
        "definition": "language that produces pictures in the minds of people reading or listening",
        "pos": "noun",
        "pron": "/ˈɪmɪdʒəri/",
        "example": "poetic imagery",
        "vietnamese": "hình ảnh",
        "vietnamese_example": "hình ảnh thơ mộng",
        "cefr": "C1"
    },
    "inappropriate": {
        "definition": "not suitable or appropriate in a particular situation",
        "pos": "adj",
        "pron": "/ˌɪnəˈprəʊpriət/",
        "example": "inappropriate behaviour/language",
        "vietnamese": "không phù hợp",
        "vietnamese_example": "hành vi/ngôn ngữ không phù hợp",
        "cefr": "C1"
    },
    "induce": {
        "definition": "to persuade or influence somebody to do something",
        "pos": "verb",
        "pron": "/ɪnˈdjuːs/",
        "example": "Nothing would induce me to take the job.",
        "vietnamese": "xúi giục",
        "vietnamese_example": "Không có gì có thể thuyết phục tôi nhận công việc này.",
        "cefr": "C1"
    },
    "intensive": {
        "definition": "involving a lot of work or activity done in a short time",
        "pos": "adj",
        "pron": "/ɪnˈtensɪv/",
        "example": "an intensive language course",
        "vietnamese": "căng",
        "vietnamese_example": "một khóa học ngôn ngữ chuyên sâu",
        "cefr": "C1"
    },
    "meaningful": {
        "definition": "serious and important",
        "pos": "adj",
        "pron": "/ˈmiːnɪŋfl/",
        "example": "a meaningful relationship/discussion/experience",
        "vietnamese": "có ý nghĩa",
        "vietnamese_example": "một mối quan hệ/cuộc thảo luận/trải nghiệm có ý nghĩa",
        "cefr": "C1"
    },
    "pronounced": {
        "definition": "very obvious, easy to notice or strongly expressed",
        "pos": "adj",
        "pron": "/prəˈnaʊnst/",
        "example": "He walked with a pronounced limp.",
        "vietnamese": "phát âm",
        "vietnamese_example": "Anh ta bước đi với giọng khập khiễng.",
        "cefr": "C1"
    },
    "query": {
        "definition": "a question, especially one asking for information or expressing a doubt about something",
        "pos": "noun",
        "pron": "/ˈkwɪəri/",
        "example": "Our assistants will be happy to answer your queries.",
        "vietnamese": "truy vấn",
        "vietnamese_example": "Trợ lý của chúng tôi sẽ sẵn lòng trả lời các câu hỏi của bạn.",
        "cefr": "C1"
    },
    "rhetoric": {
        "definition": "speech or writing that is intended to influence people, but that is not completely honest or sincere",
        "pos": "noun",
        "pron": "/ˈretərɪk/",
        "example": "the rhetoric of political slogans",
        "vietnamese": "hùng biện",
        "vietnamese_example": "sự hùng biện của các khẩu hiệu chính trị",
        "cefr": "C1"
    },
    "enterprise": {
        "definition": "a company or business",
        "pos": "noun",
        "pron": "/ˈentəpraɪz/",
        "example": "He is in charge of an enterprise with a turnover of $26 billion.",
        "vietnamese": "doanh nghiệp",
        "vietnamese_example": "Ông đang phụ trách một doanh nghiệp có doanh thu 26 tỷ USD.",
        "cefr": "C1"
    },
    "profitable": {
        "definition": "that makes or is likely to make money",
        "pos": "adj",
        "pron": "/ˈprɒfɪtəbl/",
        "example": "a highly profitable business",
        "vietnamese": "có lợi nhuận",
        "vietnamese_example": "một doanh nghiệp có lợi nhuận cao",
        "cefr": "C1"
    },
    "capitalism": {
        "definition": "an economic system in which a country’s businesses and industry are controlled and run for profit by private owners rather than by the government",
        "pos": "noun",
        "pron": "/ˈkæpɪtəlɪzəm/",
        "example": "the growth of industrial capitalism in the West",
        "vietnamese": "chủ nghĩa tư bản",
        "vietnamese_example": "sự phát triển của chủ nghĩa tư bản công nghiệp ở phương Tây",
        "cefr": "C1"
    },
    "marketplace": {
        "definition": "the activity of competing with other companies to buy and sell goods, services, etc.",
        "pos": "noun",
        "pron": "/ˈmɑːkɪtpleɪs/",
        "example": "Companies must be able to survive in the marketplace.",
        "vietnamese": "thị trường",
        "vietnamese_example": "Doanh nghiệp phải có khả năng tồn tại trên thị trường.",
        "cefr": "C1"
    },
    "non-profit": {
        "definition": "without the aim of making a profit",
        "pos": "adj",
        "pron": "/ˌnɒn ˈprɒfɪt/",
        "example": "an independent non-profit organization",
        "vietnamese": "phi lợi nhuận",
        "vietnamese_example": "một tổ chức phi lợi nhuận độc lập",
        "cefr": "C1"
    },
    "outlet": {
        "definition": "a shop or an organization that sells goods made by a particular company or of a particular type",
        "pos": "noun",
        "pron": "/ˈaʊtlet/",
        "example": "The business has 34 retail outlets in this state alone.",
        "vietnamese": "chỗ thoát",
        "vietnamese_example": "Doanh nghiệp này có 34 cửa hàng bán lẻ chỉ riêng ở bang này.",
        "cefr": "C1"
    },
    "productive": {
        "definition": "making goods or growing crops, especially in large quantities",
        "pos": "adj",
        "pron": "/prəˈdʌktɪv/",
        "example": "highly productive farming land",
        "vietnamese": "năng suất",
        "vietnamese_example": "đất nông nghiệp có năng suất cao",
        "cefr": "C1"
    },
    "reproduction": {
        "definition": "the act or process of producing babies, young animals or plants",
        "pos": "noun",
        "pron": "/ˌriːprəˈdʌkʃn/",
        "example": "sexual reproduction",
        "vietnamese": "sinh sản",
        "vietnamese_example": "sinh sản hữu tính",
        "cefr": "C1"
    },
    "administrator": {
        "definition": "a person whose job is to manage and organize the public or business affairs of a company or an institution, or a person who works in an office dealing with records, accounts, etc.",
        "pos": "noun",
        "pron": "/ədˈmɪnɪstreɪtə(r)/",
        "example": "Such organizational decisions are made by the hospital administrators.",
        "vietnamese": "quản trị viên",
        "vietnamese_example": "Các quyết định tổ chức như vậy được đưa ra bởi các nhà quản lý bệnh viện.",
        "cefr": "C1"
    },
    "franchise": {
        "definition": "formal permission given by a company to somebody who wants to sell its goods or services in a particular area; formal permission given by a government to somebody who wants to operate a public service as a business",
        "pos": "noun",
        "pron": "/ˈfræntʃaɪz/",
        "example": "a franchise agreement/company",
        "vietnamese": "nhượng quyền thương mại",
        "vietnamese_example": "một thỏa thuận nhượng quyền thương mại/công ty",
        "cefr": "C1"
    },
    "governance": {
        "definition": "the activity of governing a country or controlling a company or an organization; the way in which a country is governed or a company or institution is controlled",
        "pos": "noun",
        "pron": "/ˈɡʌvənəns/",
        "example": "He emphasized the company's commitment to high standards of corporate governance.",
        "vietnamese": "quản trị",
        "vietnamese_example": "Ông nhấn mạnh cam kết của công ty đối với các tiêu chuẩn cao về quản trị doanh nghiệp.",
        "cefr": "C1"
    },
    "privatization": {
        "definition": "the act of selling a business or an industry so that it is no longer owned by the government",
        "pos": "noun",
        "pron": "/ˌpraɪvətaɪˈzeɪʃn/",
        "example": "There were fears that privatization would lead to job losses.",
        "vietnamese": "tư nhân hóa",
        "vietnamese_example": "Đã có những lo ngại rằng tư nhân hóa sẽ dẫn đến mất việc làm.",
        "cefr": "C1"
    },
    "regulator": {
        "definition": "a person or an organization that officially controls an area of business or industry and makes sure that it is operating fairly",
        "pos": "noun",
        "pron": "/ˈreɡjuleɪtə(r)/",
        "example": "Ofgas, the gas industry regulator",
        "vietnamese": "bộ điều chỉnh",
        "vietnamese_example": "Ofgas, cơ quan quản lý ngành khí đốt",
        "cefr": "C1"
    },
    "regulatory": {
        "definition": "having the power to control an area of business or industry and make sure that it is operating fairly",
        "pos": "adj",
        "pron": "/ˈreɡjələtəri/",
        "example": "regulatory bodies/authorities/agencies",
        "vietnamese": "quy định",
        "vietnamese_example": "cơ quan quản lý/cơ quan/cơ quan",
        "cefr": "C1"
    },
    "shareholder": {
        "definition": "an owner of shares in a company or business",
        "pos": "noun",
        "pron": "/ˈʃeəhəʊldə(r)/",
        "example": "the major shareholders in the company",
        "vietnamese": "cổ đông",
        "vietnamese_example": "các cổ đông lớn trong công ty",
        "cefr": "C1"
    },
    "stake": {
        "definition": "money that somebody invests in a company",
        "pos": "noun",
        "pron": "/steɪk/",
        "example": "a 20 per cent stake in the business",
        "vietnamese": "cổ phần",
        "vietnamese_example": "20% cổ phần trong doanh nghiệp",
        "cefr": "C1"
    },
    "administer": {
        "definition": "to manage and organize the affairs of a company, an organization, a country, etc.",
        "pos": "verb",
        "pron": "/ədˈmɪnɪstə(r)/",
        "example": "to administer a charity/fund/school",
        "vietnamese": "quản lý",
        "vietnamese_example": "quản lý một tổ chức từ thiện/quỹ/trường học",
        "cefr": "C1"
    },
    "administrative": {
        "definition": "connected with organizing the work of a business or an institution",
        "pos": "adj",
        "pron": "/ədˈmɪnɪstrətɪv/",
        "example": "an administrative job/assistant/error",
        "vietnamese": "hành chính",
        "vietnamese_example": "một công việc/trợ lý/lỗi hành chính",
        "cefr": "C1"
    },
    "audit": {
        "definition": "an official examination of business and financial records to see that they are true and correct",
        "pos": "noun",
        "pron": "/ˈɔːdɪt/",
        "example": "an annual audit",
        "vietnamese": "kiểm toán",
        "vietnamese_example": "kiểm toán hàng năm",
        "cefr": "C1"
    },
    "commodity": {
        "definition": "a product or a raw material that can be bought and sold",
        "pos": "noun",
        "pron": "/kəˈmɒdəti/",
        "example": "rice, flour and other basic commodities",
        "vietnamese": "hàng hóa",
        "vietnamese_example": "gạo, bột mì và các mặt hàng cơ bản khác",
        "cefr": "C1"
    },
    "contractor": {
        "definition": "a person or company that has a contract to do work or provide goods or services for another company",
        "pos": "noun",
        "pron": "/kənˈtræktə(r)/",
        "example": "a building/roofing/electrical contractor ",
        "vietnamese": "Nhà thầu",
        "vietnamese_example": "một nhà thầu xây dựng/lợp mái/điện",
        "cefr": "C1"
    },
    "conversion": {
        "definition": "the act or process of changing something from one form, use or system to another",
        "pos": "noun",
        "pron": "/kənˈvɜːʃn/",
        "example": "Their main business is the conversion of farm buildings into family homes.",
        "vietnamese": "chuyển đổi",
        "vietnamese_example": "Hoạt động kinh doanh chính của họ là chuyển đổi các tòa nhà trang trại thành nhà ở gia đình.",
        "cefr": "C1"
    },
    "deputy": {
        "definition": "a person who is the next most important person below a business manager, a head of a school, a political leader, etc. and who does that person’s job when they are away",
        "pos": "noun",
        "pron": "/ˈdepjuti/",
        "example": "I'm acting as deputy till the manager returns.",
        "vietnamese": "phó",
        "vietnamese_example": "Tôi sẽ giữ chức phó cho đến khi người quản lý quay lại.",
        "cefr": "C1"
    },
    "forge": {
        "definition": "to put a lot of effort into making something successful or strong so that it will last",
        "pos": "verb",
        "pron": "/fɔːdʒ/",
        "example": "a move to forge new links between management and workers",
        "vietnamese": "rèn",
        "vietnamese_example": "một động thái nhằm tạo mối liên kết mới giữa ban quản lý và người lao động",
        "cefr": "C1"
    },
    "intervention": {
        "definition": "action taken to improve or help a situation",
        "pos": "noun",
        "pron": "/ˌɪntəˈvenʃn/",
        "example": "calls for government intervention to save the steel industry",
        "vietnamese": "sự can thiệp",
        "vietnamese_example": "kêu gọi chính phủ can thiệp để cứu ngành thép",
        "cefr": "C1"
    },
    "kidnap": {
        "definition": "to take somebody away illegally and keep them as a prisoner, especially in order to get money or something else for returning them",
        "pos": "verb",
        "pron": "/ˈkɪdnæp/",
        "example": "Two businessmen have been kidnapped by terrorists.",
        "vietnamese": "bắt cóc",
        "vietnamese_example": "Hai doanh nhân đã bị bọn khủng bố bắt cóc.",
        "cefr": "C1"
    },
    "landlord": {
        "definition": "a person or company from whom you rent a room, a house, an office, etc.",
        "pos": "noun",
        "pron": "/ˈlændlɔːd/",
        "example": "a buy-to-let landlord (= who buys houses and flats in order to rent them out)",
        "vietnamese": "chủ nhà",
        "vietnamese_example": "chủ nhà mua để cho thuê (= người mua nhà và căn hộ để cho thuê)",
        "cefr": "C1"
    },
    "maximize": {
        "definition": "to increase something as much as possible",
        "pos": "verb",
        "pron": "/ˈmæksɪmaɪz/",
        "example": "to maximize efficiency/fitness/profits",
        "vietnamese": "tối đa hóa",
        "vietnamese_example": "để tối đa hóa hiệu quả/sự phù hợp/lợi nhuận",
        "cefr": "C1"
    },
    "mining": {
        "definition": "the process of getting coal and other minerals from under the ground; the industry involved in this",
        "pos": "noun",
        "pron": "/ˈmaɪnɪŋ/",
        "example": "coal/diamond/gold/tin mining",
        "vietnamese": "khai thác mỏ",
        "vietnamese_example": "khai thác than/kim cương/vàng/thiếc",
        "cefr": "C1"
    },
    "net": {
        "definition": "a net amount of money is the amount that remains when nothing more is to be taken away",
        "pos": "adj",
        "pron": "/net/",
        "example": "a net profit of £500",
        "vietnamese": "mạng lưới",
        "vietnamese_example": "lợi nhuận ròng là £500",
        "cefr": "C1"
    },
    "patent": {
        "definition": "an official right to be the only person to make, use or sell a product or an invention; a document that proves this",
        "pos": "noun",
        "pron": "/ˈpætnt/",
        "example": "patent on something, to apply for/obtain/take out a patent on an invention",
        "vietnamese": "bằng sáng chế",
        "vietnamese_example": "bằng sáng chế về cái gì đó, nộp đơn xin/có được/lấy bằng sáng chế cho một phát minh",
        "cefr": "C1"
    },
    "persistent": {
        "definition": "determined to do something despite difficulties, especially when other people are against you and think that you are being annoying or unreasonable",
        "pos": "adj",
        "pron": "/pəˈsɪstənt/",
        "example": "How do you deal with persistent salesmen who won't take no for an answer?",
        "vietnamese": "kiên trì",
        "vietnamese_example": "Làm thế nào để bạn đối phó với những người bán hàng kiên trì không chấp nhận câu trả lời từ chối?",
        "cefr": "C1"
    },
    "probe": {
        "definition": "a complete and careful investigation of something",
        "pos": "noun",
        "pron": "/prəʊb/",
        "example": "a police probe into the financial affairs of the company",
        "vietnamese": "thăm dò",
        "vietnamese_example": "cảnh sát điều tra vấn đề tài chính của công ty",
        "cefr": "C1"
    },
    "proceeds": {
        "definition": "the money that you receive when you sell something or organize a performance, etc.; profits",
        "pos": "noun",
        "pron": "/ˈprəʊsiːdz/",
        "example": "She sold her car and bought a piano with the proceeds.",
        "vietnamese": "tiền thu được",
        "vietnamese_example": "Cô đã bán chiếc ô tô của mình và mua một cây đàn piano bằng số tiền thu được.",
        "cefr": "C1"
    },
    "processing": {
        "definition": "the treatment of raw material, food, etc. in order to change it, preserve it, etc.",
        "pos": "noun",
        "pron": "/ˈprəʊsesɪŋ/",
        "example": "the food processing industry",
        "vietnamese": "xử lý",
        "vietnamese_example": "ngành chế biến thực phẩm",
        "cefr": "C1"
    },
    "processor": {
        "definition": "a machine, person or company that processes things",
        "pos": "noun",
        "pron": "/ˈprəʊsesə(r)/",
        "example": "The company is Ireland's largest dairy processor.",
        "vietnamese": "bộ xử lý",
        "vietnamese_example": "Công ty này là nhà chế biến sữa lớn nhất Ireland.",
        "cefr": "C1"
    },
    "subsidy": {
        "definition": "money that is paid by a government or an organization to reduce the costs of services or of producing goods so that their prices can be kept low",
        "pos": "noun",
        "pron": "/ˈsʌbsədi/",
        "example": "agricultural subsidies",
        "vietnamese": "trợ cấp",
        "vietnamese_example": "trợ cấp nông nghiệp",
        "cefr": "C1"
    },
    "prosperity": {
        "definition": "the state of being successful, especially in making money",
        "pos": "noun",
        "pron": "/prɒˈsperəti/",
        "example": "Our future prosperity depends on economic growth.",
        "vietnamese": "sự phồn vinh",
        "vietnamese_example": "Sự thịnh vượng trong tương lai của chúng ta phụ thuộc vào tăng trưởng kinh tế.",
        "cefr": "C1"
    },
    "costly": {
        "definition": "costing a lot of money, especially more than you want to pay",
        "pos": "adj",
        "pron": "/ˈkɒstli/",
        "example": "Buying new furniture may prove too costly.",
        "vietnamese": "tốn kém",
        "vietnamese_example": "Mua đồ nội thất mới có thể tỏ ra quá tốn kém.",
        "cefr": "C1"
    },
    "fundraising": {
        "definition": "the activity of collecting money for a charity or organization, often by organizing social events or entertainments",
        "pos": "noun",
        "pron": "/ˈfʌndreɪzɪŋ/",
        "example": "The hospice is planning a major fundraising event for June.",
        "vietnamese": "gây quỹ",
        "vietnamese_example": "Viện chăm sóc cuối đời đang lên kế hoạch tổ chức một sự kiện gây quỹ lớn vào tháng Sáu.",
        "cefr": "C1"
    },
    "taxpayer": {
        "definition": "a person who pays tax to the government, especially on the money that they earn",
        "pos": "noun",
        "pron": "/ˈtækspeɪə(r)/",
        "example": "Hundreds of thousands of pounds of taxpayers' money (= money paid in taxes) have been spent on the project.",
        "vietnamese": "người đóng thuế",
        "vietnamese_example": "Hàng trăm ngàn bảng tiền của người nộp thuế (= tiền nộp thuế) đã được chi cho dự án.",
        "cefr": "C1"
    },
    "accountable": {
        "definition": "responsible for your decisions or actions and expected to explain them when you are asked",
        "pos": "adj",
        "pron": "/əˈkaʊntəbl/",
        "example": "The state spends taxpayers’ money and should be held accountable.",
        "vietnamese": "chịu trách nhiệm",
        "vietnamese_example": "Nhà nước chi tiền của người nộp thuế và phải chịu trách nhiệm.",
        "cefr": "C1"
    },
    "beneficiary": {
        "definition": "a person who gains as a result of something",
        "pos": "noun",
        "pron": "/ˌbenɪˈfɪʃəri/",
        "example": "Who will be the main beneficiary of the cuts in income tax?",
        "vietnamese": "người thụ hưởng",
        "vietnamese_example": "Ai sẽ là người hưởng lợi chính từ việc cắt giảm thuế thu nhập?",
        "cefr": "C1"
    },
    "soar": {
        "definition": "if the value, amount or level of something soars, it rises very quickly",
        "pos": "verb",
        "pron": "/sɔː(r)/",
        "example": "soaring costs/prices/temperatures",
        "vietnamese": "bay lên",
        "vietnamese_example": "chi phí/giá cả/nhiệt độ tăng vọt",
        "cefr": "C1"
    },
    "abolish": {
        "definition": "to officially end a law, a system or an institution",
        "pos": "verb",
        "pron": "/əˈbɒlɪʃ/",
        "example": "This tax should be abolished.",
        "vietnamese": "bãi bỏ",
        "vietnamese_example": "Thuế này nên được bãi bỏ.",
        "cefr": "C1"
    },
    "accelerate": {
        "definition": "to happen faster or earlier; to make something happen faster or earlier",
        "pos": "verb",
        "pron": "/əkˈseləreɪt/",
        "example": "Inflation continues to accelerate.",
        "vietnamese": "tăng tốc",
        "vietnamese_example": "Lạm phát tiếp tục tăng tốc.",
        "cefr": "C1"
    },
    "allocation": {
        "definition": "The process of distributing resources or duties.",
        "pos": "noun",
        "pron": "/ˌæl.əˈkeɪ.ʃən/",
        "example": "The allocation of funds was carefully planned.",
        "vietnamese": "sự phân bổ",
        "vietnamese_example": "Việc phân bổ ngân sách được lên kế hoạch cẩn thận.",
        "cefr": "C1"
    },
    "allowance": {
        "definition": "an amount of money that is given to somebody regularly or for a particular purpose",
        "pos": "noun",
        "pron": "/əˈlaʊəns/",
        "example": "an allowance of $20 a day",
        "vietnamese": "trợ cấp",
        "vietnamese_example": "trợ cấp 20$ một ngày",
        "cefr": "C1"
    },
    "backing": {
        "definition": "help and support from somebody to do something; financial support for something",
        "pos": "noun",
        "pron": "/ˈbækɪŋ/",
        "example": "The police gave the proposals their full backing.",
        "vietnamese": "ủng hộ",
        "vietnamese_example": "Cảnh sát đã ủng hộ hoàn toàn các đề xuất của họ.",
        "cefr": "C1"
    },
    "bail": {
        "definition": "money that somebody agrees to pay if a person accused of a crime does not appear at their trial. When bail has been arranged, the accused person is allowed to go free until the trial.",
        "pos": "noun",
        "pron": "/beɪl/",
        "example": "Can anyone put up bail for you?",
        "vietnamese": "tại ngoại",
        "vietnamese_example": "Có ai có thể bảo lãnh cho bạn được không?",
        "cefr": "C1"
    },
    "betray": {
        "definition": "to give information about somebody/something to an enemy",
        "pos": "verb",
        "pron": "/bɪˈtreɪ/",
        "example": "betray somebody/something, He was offered money to betray his colleagues.",
        "vietnamese": "phản bội",
        "vietnamese_example": "phản bội ai/cái gì, Anh ta được cho tiền để phản bội đồng nghiệp của mình.",
        "cefr": "C1"
    },
    "bonus": {
        "definition": "an extra amount of money that is added to a payment, especially to somebody’s wages or salary as a reward",
        "pos": "noun",
        "pron": "/ˈbəʊnəs/",
        "example": "a £100 Christmas bonus",
        "vietnamese": "thưởng",
        "vietnamese_example": "tiền thưởng Giáng sinh £100",
        "cefr": "C1"
    },
    "capitalist": {
        "definition": "based on the principles of capitalism",
        "pos": "adj",
        "pron": "/ˈkæpɪtəlɪst/",
        "example": "a capitalist society/system/economy",
        "vietnamese": "nhà tư bản",
        "vietnamese_example": "một xã hội/hệ thống/nền kinh tế tư bản chủ nghĩa",
        "cefr": "C1"
    },
    "chaos": {
        "definition": "a complete lack of order",
        "pos": "noun",
        "pron": "/ˈkeɪɒs/",
        "example": "economic/political/domestic chaos",
        "vietnamese": "sự hỗn loạn",
        "vietnamese_example": "sự hỗn loạn về kinh tế/chính trị/trong nước",
        "cefr": "C1"
    },
    "compensation": {
        "definition": "something, especially money, that somebody gives you because they have hurt you, or damaged something that you own; the act of giving this to somebody",
        "pos": "noun",
        "pron": "/ˌkɒmpenˈseɪʃn/",
        "example": "to claim/award/receive compensation",
        "vietnamese": "đền bù",
        "vietnamese_example": "yêu cầu/trao thưởng/nhận tiền bồi thường",
        "cefr": "C1"
    },
    "confront": {
        "definition": "to appear and need to be dealt with by somebody",
        "pos": "verb",
        "pron": "/kənˈfrʌnt/",
        "example": "What is to be done about the economic problems confronting the country?",
        "vietnamese": "đối đầu",
        "vietnamese_example": "Phải làm gì trước những vấn đề kinh tế mà đất nước đang phải đối mặt?",
        "cefr": "C1"
    },
    "constituency": {
        "definition": "a district that elects its own representative to parliament",
        "pos": "noun",
        "pron": "/kənˈstɪtʃuənsi/",
        "example": "Unemployment is high in her constituency.",
        "vietnamese": "khu vực bầu cử",
        "vietnamese_example": "Tỷ lệ thất nghiệp ở khu vực bầu cử của cô ấy rất cao.",
        "cefr": "C1"
    },
    "constraint": {
        "definition": "a thing that limits something, or limits your freedom to do something",
        "pos": "noun",
        "pron": "/kənˈstreɪnt/",
        "example": "constraints of time/money/space",
        "vietnamese": "hạn chế",
        "vietnamese_example": "những hạn chế về thời gian/tiền bạc/không gian",
        "cefr": "C1"
    },
    "corresponding": {
        "definition": "matching or connected with something that you have just mentioned",
        "pos": "adj",
        "pron": "/ˌkɒrəˈspɒndɪŋ/",
        "example": "A change in the money supply brings a corresponding change in expenditure.",
        "vietnamese": "tương ứng",
        "vietnamese_example": "Sự thay đổi trong cung tiền sẽ dẫn đến sự thay đổi tương ứng trong chi tiêu.",
        "cefr": "C1"
    },
    "corrupt": {
        "definition": "willing to use their power to do dishonest or illegal things in return for money or to get an advantage",
        "pos": "adj",
        "pron": "/kəˈrʌpt/",
        "example": "It was seen as the only way to overthrow a corrupt regime.",
        "vietnamese": "tham nhũng",
        "vietnamese_example": "Nó được coi là cách duy nhất để lật đổ một chế độ tham nhũng.",
        "cefr": "C1"
    },
    "counsellor": {
        "definition": "a person who has been trained to advise people with problems, especially personal problems",
        "pos": "noun",
        "pron": "/ˈkaʊnsələ(r)/",
        "example": "I went to see a debt counsellor and she agreed to come to the bank with me.",
        "vietnamese": "cố vấn",
        "vietnamese_example": "Tôi đến gặp chuyên gia tư vấn nợ và cô ấy đồng ý đến ngân hàng với tôi.",
        "cefr": "C1"
    },
    "deposit": {
        "definition": "to put money into a bank account",
        "pos": "verb",
        "pron": "/dɪˈpɒzɪt/",
        "example": "Millions were deposited in Swiss bank accounts.",
        "vietnamese": "tiền gửi",
        "vietnamese_example": "Hàng triệu người đã được gửi vào tài khoản ngân hàng Thụy Sĩ.",
        "cefr": "C1"
    },
    "domain": {
        "definition": "an area of knowledge or activity; especially one that somebody is responsible for",
        "pos": "noun",
        "pron": "/dəˈmeɪn/",
        "example": "Financial matters are her domain.",
        "vietnamese": "lãnh địa",
        "vietnamese_example": "Vấn đề tài chính là lĩnh vực của cô ấy.",
        "cefr": "C1"
    },
    "earnings": {
        "definition": "the money that you earn for the work that you do",
        "pos": "noun",
        "pron": "/ˈɜːnɪŋz/",
        "example": "a rise in average earnings",
        "vietnamese": "thu nhập",
        "vietnamese_example": "sự gia tăng thu nhập trung bình",
        "cefr": "C1"
    },
    "encouraging": {
        "definition": "that gives somebody support, courage or hope",
        "pos": "adj",
        "pron": "/ɪnˈkʌrɪdʒɪŋ/",
        "example": "This month's unemployment figures are not very encouraging.",
        "vietnamese": "đáng khích lệ",
        "vietnamese_example": "Số liệu thất nghiệp trong tháng này không đáng khích lệ lắm.",
        "cefr": "C1"
    },
    "escalate": {
        "definition": "to become greater, worse, more serious, etc.; to make something greater, worse, more serious, etc.",
        "pos": "verb",
        "pron": "/ˈeskəleɪt/",
        "example": "the escalating costs of healthcare",
        "vietnamese": "leo thang",
        "vietnamese_example": "chi phí chăm sóc sức khỏe ngày càng tăng",
        "cefr": "C1"
    },
    "expenditure": {
        "definition": "the act of spending or using money; an amount of money spent",
        "pos": "noun",
        "pron": "/ɪkˈspendɪtʃə(r)/",
        "example": "a reduction in public/government/military expenditure",
        "vietnamese": "chi tiêu",
        "vietnamese_example": "giảm chi tiêu công/chính phủ/quân sự",
        "cefr": "C1"
    },
    "exploitation": {
        "definition": "a situation in which somebody treats somebody else in an unfair way, especially in order to make money from their work",
        "pos": "noun",
        "pron": "/ˌeksplɔɪˈteɪʃn/",
        "example": "the exploitation of children",
        "vietnamese": "bóc lột",
        "vietnamese_example": "bóc lột trẻ em",
        "cefr": "C1"
    },
    "fine": {
        "definition": "a sum of money that must be paid as punishment for breaking a law or rule",
        "pos": "noun",
        "pron": "/faɪn/",
        "example": "I got a parking fine for parking on double yellow lines.",
        "vietnamese": "khỏe",
        "vietnamese_example": "Tôi bị phạt đậu xe vì đậu xe trên vạch đôi màu vàng.",
        "cefr": "C1"
    },
    "flaw": {
        "definition": "a mistake in something that means that it is not correct or does not work correctly",
        "pos": "noun",
        "pron": "/flɔː/",
        "example": "The argument is full of fundamental flaws.",
        "vietnamese": "khiếm khuyết",
        "vietnamese_example": "Lập luận này chứa đầy những sai sót cơ bản.",
        "cefr": "C1"
    },
    "flawed": {
        "definition": "having a flaw; not perfect or correct",
        "pos": "adj",
        "pron": "/flɔːd/",
        "example": "seriously/fundamentally/fatally flawed",
        "vietnamese": "thiếu sót",
        "vietnamese_example": "thiếu sót nghiêm trọng/cơ bản/cực kỳ nghiêm trọng",
        "cefr": "C1"
    },
    "ideology": {
        "definition": "a set of ideas that an economic or political system is based on",
        "pos": "noun",
        "pron": "/ˌaɪdiˈɒlədʒi/",
        "example": "Marxist/capitalist ideology",
        "vietnamese": "hệ tư tưởng",
        "vietnamese_example": "hệ tư tưởng Marxist/tư bản chủ nghĩa",
        "cefr": "C1"
    },
    "indicator": {
        "definition": "a sign that shows you what something is like or how a situation is changing",
        "pos": "noun",
        "pron": "/ˈɪndɪkeɪtə(r)/",
        "example": "The economic indicators are better than expected.",
        "vietnamese": "chỉ báo",
        "vietnamese_example": "Các chỉ số kinh tế tốt hơn mong đợi.",
        "cefr": "C1"
    },
    "personnel": {
        "definition": "the people who work for an organization or one of the armed forces",
        "pos": "noun",
        "pron": "/ˌpɜːsəˈnel/",
        "example": "There is a severe shortage of skilled personnel.",
        "vietnamese": "nhân viên",
        "vietnamese_example": "Nhân lực có tay nghề đang thiếu trầm trọng.",
        "cefr": "C1"
    },
    "workout": {
        "definition": "a period of physical exercise that you do to keep fit",
        "pos": "noun",
        "pron": "/ˈwɜːkaʊt/",
        "example": "She does a 20-minute workout every morning.",
        "vietnamese": "tập luyện",
        "vietnamese_example": "Cô ấy tập thể dục 20 phút mỗi sáng.",
        "cefr": "C1"
    },
    "counselling": {
        "definition": "professional advice about a problem",
        "pos": "noun",
        "pron": "/ˈkaʊnsəlɪŋ/",
        "example": "The couple decided to go for relationship counselling.",
        "vietnamese": "tư vấn",
        "vietnamese_example": "Cặp đôi quyết định đi tư vấn mối quan hệ.",
        "cefr": "C1"
    },
    "feat": {
        "definition": "an action or a piece of work that needs skill, strength or courage",
        "pos": "noun",
        "pron": "/fiːt/",
        "example": "The tunnel is a remarkable feat of engineering.",
        "vietnamese": "kỳ công",
        "vietnamese_example": "Đường hầm là một kỳ công đáng chú ý của kỹ thuật.",
        "cefr": "C1"
    },
    "integrity": {
        "definition": "the quality of being honest and having strong moral principles",
        "pos": "noun",
        "pron": "/ɪnˈteɡrəti/",
        "example": "personal/professional/artistic integrity",
        "vietnamese": "chính trực",
        "vietnamese_example": "tính toàn vẹn cá nhân/nghề nghiệp/nghệ thuật",
        "cefr": "C1"
    },
    "mobility": {
        "definition": "the ability to move easily from one place, social class or job to another",
        "pos": "noun",
        "pron": "/məʊˈbɪləti/",
        "example": "social/geographical/career mobility",
        "vietnamese": "tính di động",
        "vietnamese_example": "sự di chuyển xã hội/địa lý/nghề nghiệp",
        "cefr": "C1"
    },
    "practitioner": {
        "definition": "a person who works in a profession, especially medicine or law",
        "pos": "noun",
        "pron": "/prækˈtɪʃənə(r)/",
        "example": "dental practitioners",
        "vietnamese": "người hành nghề",
        "vietnamese_example": "bác sĩ nha khoa",
        "cefr": "C1"
    },
    "sack": {
        "definition": "to dismiss somebody from a job",
        "pos": "verb",
        "pron": "/sæk/",
        "example": "She was sacked for refusing to work on Sundays.",
        "vietnamese": "bao",
        "vietnamese_example": "Cô ấy bị sa thải vì từ chối làm việc vào ngày chủ nhật.",
        "cefr": "C1"
    },
    "verbal": {
        "definition": "relating to words",
        "pos": "adj",
        "pron": "/ˈvɜːbl/",
        "example": "The job applicant must have good verbal skills.",
        "vietnamese": "bằng lời nói",
        "vietnamese_example": "Người xin việc phải có kỹ năng nói tốt.",
        "cefr": "C1"
    },
    "whereby": {
        "definition": "by which; because of which",
        "pos": "adv",
        "pron": "/weəˈbaɪ/",
        "example": "They have introduced a new system whereby all employees must undergo regular training.",
        "vietnamese": "theo đó",
        "vietnamese_example": "Họ đã giới thiệu một hệ thống mới, theo đó tất cả nhân viên phải trải qua đào tạo thường xuyên.",
        "cefr": "C1"
    },
    "absent": {
        "definition": "not in a place because of illness, etc.",
        "pos": "adj",
        "pron": "/ˈæbsənt/",
        "example": "He was absent from work for two weeks.",
        "vietnamese": "vắng mặt",
        "vietnamese_example": "Anh ấy đã vắng mặt ở nơi làm việc trong hai tuần.",
        "cefr": "C1"
    },
    "academy": {
        "definition": "a school or college for special training",
        "pos": "noun",
        "pron": "/əˈkædəmi/",
        "example": "She trained at the Royal Academy of Music.",
        "vietnamese": "học viện",
        "vietnamese_example": "Cô được đào tạo tại Học viện Âm nhạc Hoàng gia.",
        "cefr": "C1"
    },
    "activist": {
        "definition": "a person who works to achieve political or social change, especially as a member of an organization with particular aims",
        "pos": "noun",
        "pron": "/ˈæktɪvɪst/",
        "example": "human/civil/animal rights activists",
        "vietnamese": "nhà hoạt động",
        "vietnamese_example": "nhà hoạt động nhân quyền/dân sự/động vật",
        "cefr": "C1"
    },
    "advocate": {
        "definition": "a person who supports or speaks in favour of somebody or of a public plan or action",
        "pos": "noun",
        "pron": "/ˈædvəkət/",
        "example": "advocate for something/somebody, an advocate for hospital workers",
        "vietnamese": "người bào chữa",
        "vietnamese_example": "biện hộ cho cái gì/ai đó, biện hộ cho nhân viên bệnh viện",
        "cefr": "C1"
    },
    "aide": {
        "definition": "a person who helps another person, especially a politician, in their job",
        "pos": "noun",
        "pron": "/eɪd/",
        "example": "White House aides",
        "vietnamese": "phụ tá",
        "vietnamese_example": "trợ lý Nhà Trắng",
        "cefr": "C1"
    },
    "alliance": {
        "definition": "an agreement between countries, political parties, etc. to work together in order to achieve something that they all want",
        "pos": "noun",
        "pron": "/əˈlaɪəns/",
        "example": "to form/make an alliance",
        "vietnamese": "liên minh",
        "vietnamese_example": "thành lập/thành lập một liên minh",
        "cefr": "C1"
    },
    "amateur": {
        "definition": "doing something for pleasure or interest, not as a job",
        "pos": "adj",
        "pron": "/ˈæmətə(r)/",
        "example": "an amateur photographer",
        "vietnamese": "nghiệp dư",
        "vietnamese_example": "một nhiếp ảnh gia nghiệp dư",
        "cefr": "C1"
    },
    "appoint": {
        "definition": "to choose somebody for a job or position of responsibility",
        "pos": "verb",
        "pron": "/əˈpɔɪnt/",
        "example": "appoint somebody, They have appointed a new head teacher at my son's school.",
        "vietnamese": "bổ nhiệm",
        "vietnamese_example": "bổ nhiệm ai đó, Họ đã bổ nhiệm một hiệu trưởng mới ở trường của con trai tôi.",
        "cefr": "C1"
    },
    "breakdown": {
        "definition": "an occasion when a vehicle or machine stops working",
        "pos": "noun",
        "pron": "/ˈbreɪkdaʊn/",
        "example": "a breakdown on the motorway",
        "vietnamese": "sự cố",
        "vietnamese_example": "sự cố trên đường cao tốc",
        "cefr": "C1"
    },
    "burden": {
        "definition": "a duty, responsibility, etc. that causes worry, difficulty or hard work",
        "pos": "noun",
        "pron": "/ˈbɜːdn/",
        "example": "to bear/carry/ease/reduce/share the burden",
        "vietnamese": "gánh nặng",
        "vietnamese_example": "chịu/mang/dễ dàng/giảm bớt/chia sẻ gánh nặng",
        "cefr": "C1"
    },
    "cater": {
        "definition": "to provide food and drinks for a social event",
        "pos": "verb",
        "pron": "/ˈkeɪtə(r)/",
        "example": "(British English), cater for somebody/something, Most of our work now involves catering for weddings.",
        "vietnamese": "phục vụ",
        "vietnamese_example": "(tiếng Anh Anh), phục vụ cho ai đó/thứ gì đó, Hầu hết công việc của chúng tôi hiện nay liên quan đến việc cung cấp dịch vụ ăn uống cho đám cưới.",
        "cefr": "C1"
    },
    "cease": {
        "definition": "to stop happening or existing; to stop something from happening or existing",
        "pos": "verb",
        "pron": "/siːs/",
        "example": "Welfare payments cease as soon as an individual starts a job.",
        "vietnamese": "ngưng",
        "vietnamese_example": "Các khoản thanh toán phúc lợi chấm dứt ngay khi một cá nhân bắt đầu làm việc.",
        "cefr": "C1"
    },
    "charter": {
        "definition": "a written statement describing the rights that a particular group of people should have",
        "pos": "noun",
        "pron": "/ˈtʃɑːtə(r)/",
        "example": "the European Social Charter of workers’ rights",
        "vietnamese": "điều lệ",
        "vietnamese_example": "Hiến chương Xã hội Châu Âu về quyền của người lao động",
        "cefr": "C1"
    },
    "coalition": {
        "definition": "a government formed by two or more political parties working together",
        "pos": "noun",
        "pron": "/ˌkəʊəˈlɪʃn/",
        "example": "The two parties have formed a coalition.",
        "vietnamese": "liên minh",
        "vietnamese_example": "Hai bên đã thành lập một liên minh.",
        "cefr": "C1"
    },
    "collaboration": {
        "definition": "the act of working with another person or group of people to create or produce something",
        "pos": "noun",
        "pron": "/kəˌlæbəˈreɪʃn/",
        "example": "It was a collaboration that produced extremely useful results.",
        "vietnamese": "sự hợp tác",
        "vietnamese_example": "Đó là sự hợp tác mang lại kết quả cực kỳ hữu ích.",
        "cefr": "C1"
    },
    "compile": {
        "definition": "to produce a book, list, report, etc. by bringing together different items, articles, songs, etc.; to collect information in order to produce a book, list, etc.",
        "pos": "verb",
        "pron": "/kəmˈpaɪl/",
        "example": "We are trying to compile a list of suitable people for the job.",
        "vietnamese": "biên soạn",
        "vietnamese_example": "Chúng tôi đang cố gắng lập danh sách những người phù hợp cho công việc.",
        "cefr": "C1"
    },
    "confine": {
        "definition": "to keep somebody/something inside the limits of a particular activity, subject, area, etc.",
        "pos": "verb",
        "pron": "/kənˈfaɪn/",
        "example": "be confined to (doing) something, The work will not be confined to the Glasgow area.",
        "vietnamese": "hạn chế",
        "vietnamese_example": "bị giới hạn (làm) điều gì đó, Công việc sẽ không bị giới hạn ở khu vực Glasgow.",
        "cefr": "C1"
    },
    "consensus": {
        "definition": "an opinion that all members of a group agree with",
        "pos": "noun",
        "pron": "/kənˈsensəs/",
        "example": "consensus (about/on something), She is skilled at achieving consensus on sensitive issues.",
        "vietnamese": "sự đồng thuận",
        "vietnamese_example": "sự đồng thuận (về/về điều gì đó), Cô ấy có kỹ năng đạt được sự đồng thuận về các vấn đề nhạy cảm.",
        "cefr": "C1"
    },
    "cooperate": {
        "definition": "to work together with somebody else in order to achieve something",
        "pos": "verb",
        "pron": "/kəʊˈɒpəreɪt/",
        "example": "The two groups agreed to cooperate with each other.",
        "vietnamese": "hợp tác",
        "vietnamese_example": "Hai nhóm đã đồng ý hợp tác với nhau.",
        "cefr": "C1"
    },
    "cooperative": {
        "definition": "involving doing something together or working together with others towards a shared aim",
        "pos": "adj",
        "pron": "/kəʊˈɒpərətɪv/",
        "example": "Cooperative activity is essential to effective community work.",
        "vietnamese": "hợp tác xã",
        "vietnamese_example": "Hoạt động hợp tác là cần thiết để làm việc cộng đồng hiệu quả.",
        "cefr": "C1"
    },
    "coordinate": {
        "definition": "to organize the different parts of an activity and the people involved in it so that it works well",
        "pos": "verb",
        "pron": "/kəʊˈɔːdɪneɪt/",
        "example": "coordinate something, They appointed a new manager to coordinate the work of the team.",
        "vietnamese": "điều phối",
        "vietnamese_example": "phối hợp điều gì đó, Họ bổ nhiệm một người quản lý mới để điều phối công việc của nhóm.",
        "cefr": "C1"
    },
    "coordination": {
        "definition": "the act of making parts of something, groups of people, etc. work together in an efficient and organized way",
        "pos": "noun",
        "pron": "/kəʊˌɔːdɪˈneɪʃn/",
        "example": "The aim was to improve the coordination of services.",
        "vietnamese": "phối hợp",
        "vietnamese_example": "Mục đích là để cải thiện sự phối hợp của các dịch vụ.",
        "cefr": "C1"
    },
    "coordinator": {
        "definition": "a person who organizes the different parts of an activity and the people involved in it so that it works well",
        "pos": "noun",
        "pron": "/kəʊˈɔːdɪneɪtə(r)/",
        "example": "The campaign needs an effective coordinator.",
        "vietnamese": "điều phối viên",
        "vietnamese_example": "Chiến dịch cần một người điều phối hiệu quả.",
        "cefr": "C1"
    },
    "courtesy": {
        "definition": "polite behaviour that shows respect for other people",
        "pos": "noun",
        "pron": "/ˈkɜːtəsi/",
        "example": "I was treated with the utmost courtesy by the staff.",
        "vietnamese": "lịch sự",
        "vietnamese_example": "Tôi đã được nhân viên đối xử lịch sự nhất.",
        "cefr": "C1"
    },
    "craft": {
        "definition": "to make something using special skills, especially with your hands",
        "pos": "verb",
        "pron": "/krɑːft/",
        "example": "be crafted (from something), All the furniture is crafted from natural materials.",
        "vietnamese": "thủ công",
        "vietnamese_example": "được chế tạo (từ thứ gì đó), Tất cả đồ nội thất đều được chế tác từ vật liệu tự nhiên.",
        "cefr": "C1"
    },
    "critique": {
        "definition": "a piece of written criticism of a set of ideas, a work of art, etc.",
        "pos": "noun",
        "pron": "/krɪˈtiːk/",
        "example": "She wrote a feminist critique of Freud's theories.",
        "vietnamese": "phê bình",
        "vietnamese_example": "Cô đã viết một bài phê bình nữ quyền về lý thuyết của Freud.",
        "cefr": "C1"
    },
    "dawn": {
        "definition": "the time of day when light first appears",
        "pos": "noun",
        "pron": "/dɔːn/",
        "example": "at dawn, They start work at dawn.",
        "vietnamese": "bình minh",
        "vietnamese_example": "lúc bình minh, Họ bắt đầu công việc lúc bình minh.",
        "cefr": "C1"
    },
    "faculty": {
        "definition": "a department or group of related departments in a college or university",
        "pos": "noun",
        "pron": "/ˈfæklti/",
        "example": "the Faculty of Law",
        "vietnamese": "khoa",
        "vietnamese_example": "Khoa Luật",
        "cefr": "C1"
    },
    "enrol": {
        "definition": "to arrange for yourself or for somebody else to officially join a course, school, etc.",
        "pos": "verb",
        "pron": "/ɪnˈrəʊl/",
        "example": "You need to enrol before the end of August.",
        "vietnamese": "tham gia",
        "vietnamese_example": "Bạn cần đăng ký trước cuối tháng 8.",
        "cefr": "C1"
    },
    "ratio": {
        "definition": "the relationship between two groups of people or things that is represented by two numbers showing how much larger one group is than the other",
        "pos": "noun",
        "pron": "/ˈreɪʃiəʊ/",
        "example": "The school has a very high teacher-student ratio.",
        "vietnamese": "tỷ lệ",
        "vietnamese_example": "Trường có tỷ lệ giáo viên-học sinh rất cao.",
        "cefr": "C1"
    },
    "attain": {
        "definition": "to succeed in getting something, usually after a lot of effort",
        "pos": "verb",
        "pron": "/əˈteɪn/",
        "example": "Most of our students attained five ‘A’ grades in their exams.",
        "vietnamese": "đạt được",
        "vietnamese_example": "Hầu hết học sinh của chúng tôi đều đạt được 5 điểm ‘A’ trong kỳ thi của mình.",
        "cefr": "C1"
    },
    "attendance": {
        "definition": "the act of being present at a place, for example at school",
        "pos": "noun",
        "pron": "/əˈtendəns/",
        "example": "Attendance at these lectures is not compulsory.",
        "vietnamese": "sự tham dự",
        "vietnamese_example": "Việc tham dự các bài giảng này là không bắt buộc.",
        "cefr": "C1"
    },
    "institutional": {
        "definition": "connected with a large important organization, for example a university or bank",
        "pos": "adj",
        "pron": "/ˌɪnstɪˈtjuːʃənl/",
        "example": "institutional investors",
        "vietnamese": "thể chế",
        "vietnamese_example": "nhà đầu tư tổ chức",
        "cefr": "C1"
    },
    "integral": {
        "definition": "being an essential part of something",
        "pos": "adj",
        "pron": "/ˈɪntɪɡrəl/",
        "example": "Music is an integral part of the school's curriculum.",
        "vietnamese": "tích phân",
        "vietnamese_example": "Âm nhạc là một phần không thể thiếu trong chương trình giảng dạy của trường.",
        "cefr": "C1"
    },
    "principal": {
        "definition": "the person who is in charge of a college or (in Scotland and Canada) a university",
        "pos": "noun",
        "pron": "/ˈprɪnsəpl/",
        "example": "Peter Brown, principal of St John’s College",
        "vietnamese": "hiệu trưởng",
        "vietnamese_example": "Peter Brown, hiệu trưởng trường St John's College",
        "cefr": "C1"
    },
    "reconstruction": {
        "definition": "the process of changing or improving the condition of something or the way it works; the process of putting something back into the state it was in before",
        "pos": "noun",
        "pron": "/ˌriːkənˈstrʌkʃn/",
        "example": "the reconstruction of the educational system",
        "vietnamese": "tái thiết",
        "vietnamese_example": "tái thiết hệ thống giáo dục",
        "cefr": "C1"
    },
    "analogy": {
        "definition": "a comparison of one thing with another thing that has similar features; a feature that is similar",
        "pos": "noun",
        "pron": "/əˈnælədʒi/",
        "example": "analogy (between A and B), The teacher drew an analogy between the human heart and a pump.",
        "vietnamese": "sự tương tự",
        "vietnamese_example": "tương tự (giữa A và B), Giáo viên vẽ sự tương tự giữa trái tim con người và một cái bơm.",
        "cefr": "C1"
    },
    "assemble": {
        "definition": "to come together as a group; to bring people or things together as a group",
        "pos": "verb",
        "pron": "/əˈsembl/",
        "example": "All the students were asked to assemble in the main hall.",
        "vietnamese": "tập hợp",
        "vietnamese_example": "Tất cả học sinh được yêu cầu tập trung tại sảnh chính.",
        "cefr": "C1"
    },
    "attribute": {
        "definition": "a quality or feature of somebody/something",
        "pos": "noun",
        "pron": "/ˈætrɪbjuːt/",
        "example": "Patience is one of the most important attributes in a teacher.",
        "vietnamese": "thuộc tính",
        "vietnamese_example": "Kiên nhẫn là một trong những đức tính quan trọng nhất ở một giáo viên.",
        "cefr": "C1"
    },
    "benchmark": {
        "definition": "something that can be measured and used as a standard that other things can be compared with",
        "pos": "noun",
        "pron": "/ˈbentʃmɑːk/",
        "example": "Tests at the age of seven provide a benchmark against which the child's progress at school can be measured.",
        "vietnamese": "điểm chuẩn",
        "vietnamese_example": "Các bài kiểm tra ở tuổi bảy cung cấp một tiêu chuẩn để đo lường sự tiến bộ của trẻ ở trường.",
        "cefr": "C1"
    },
    "buddy": {
        "definition": "a friend",
        "pos": "noun",
        "pron": "/ˈbʌdi/",
        "example": "an old college buddy of mine",
        "vietnamese": "bạn bè",
        "vietnamese_example": "một người bạn đại học cũ của tôi",
        "cefr": "C1"
    },
    "catalogue": {
        "definition": "a complete list of items, for example of things that people can look at or buy",
        "pos": "noun",
        "pron": "/ˈkætəlɒɡ/",
        "example": "a mail-order catalogue (= a book showing goods for sale to be sent to people’s homes)",
        "vietnamese": "danh mục",
        "vietnamese_example": "một danh mục đặt hàng qua thư (= một cuốn sách trưng bày hàng hóa để bán sẽ được gửi đến nhà của người dân)",
        "cefr": "C1"
    },
    "closure": {
        "definition": "the situation when a factory, school, hospital, etc. shuts permanently",
        "pos": "noun",
        "pron": "/ˈkləʊʒə(r)/",
        "example": "factory closures",
        "vietnamese": "đóng cửa",
        "vietnamese_example": "đóng cửa nhà máy",
        "cefr": "C1"
    },
    "dedicated": {
        "definition": "working hard at something because it is very important to you",
        "pos": "adj",
        "pron": "/ˈdedɪkeɪtɪd/",
        "example": "a dedicated teacher",
        "vietnamese": "tận tụy",
        "vietnamese_example": "một giáo viên tận tâm",
        "cefr": "C1"
    },
    "defy": {
        "definition": "to refuse to obey or show respect for somebody in authority, a law, a rule, etc.",
        "pos": "verb",
        "pron": "/dɪˈfaɪ/",
        "example": "I wouldn't have dared to defy my teachers.",
        "vietnamese": "thách thức",
        "vietnamese_example": "Tôi sẽ không dám thách thức thầy cô của mình.",
        "cefr": "C1"
    },
    "dimension": {
        "definition": "a measurement in space, for example how high, wide or long something is",
        "pos": "noun",
        "pron": "/daɪˈmenʃn/",
        "example": "We measured the dimensions of the kitchen.",
        "vietnamese": "kích thước",
        "vietnamese_example": "Chúng tôi đo kích thước của nhà bếp.",
        "cefr": "C1"
    },
    "dismissal": {
        "definition": "the act of dismissing somebody from their job; an example of this",
        "pos": "noun",
        "pron": "/dɪsˈmɪsl/",
        "example": "He still hopes to win his claim against unfair dismissal.",
        "vietnamese": "sa thải",
        "vietnamese_example": "Anh ấy vẫn hy vọng giành được đơn kiện trước việc sa thải không công bằng.",
        "cefr": "C1"
    },
    "ease": {
        "definition": "lack of difficulty",
        "pos": "noun",
        "pron": "/iːz/",
        "example": "with ease, He passed the exam with ease.",
        "vietnamese": "xoa dịu",
        "vietnamese_example": "một cách dễ dàng, Anh ấy đã vượt qua kỳ thi một cách dễ dàng.",
        "cefr": "C1"
    },
    "equation": {
        "definition": "a statement showing that two amounts or values are equal, for example 2x + y = 54",
        "pos": "noun",
        "pron": "/ɪˈkweɪʒn/",
        "example": "the numbers on the right-hand side of the equation",
        "vietnamese": "phương trình",
        "vietnamese_example": "các số ở vế phải của phương trình",
        "cefr": "C1"
    },
    "excellence": {
        "definition": "the quality of being extremely good",
        "pos": "noun",
        "pron": "/ˈeksələns/",
        "example": "a reputation for academic excellence",
        "vietnamese": "sự xuất sắc",
        "vietnamese_example": "danh tiếng về sự xuất sắc trong học tập",
        "cefr": "C1"
    },
    "fluid": {
        "definition": "a liquid; a substance that can flow",
        "pos": "noun",
        "pron": "/ˈfluːɪd/",
        "example": "body fluids (= for example, blood)",
        "vietnamese": "dịch",
        "vietnamese_example": "chất lỏng cơ thể (= ví dụ, máu)",
        "cefr": "C1"
    },
    "guidance": {
        "definition": "help or advice that is given to somebody, especially by somebody older or with more experience",
        "pos": "noun",
        "pron": "/ˈɡaɪdns/",
        "example": "guidance for teachers on how to use video in the classroom",
        "vietnamese": "hướng dẫn",
        "vietnamese_example": "hướng dẫn giáo viên cách sử dụng video trong lớp học",
        "cefr": "C1"
    },
    "ignorance": {
        "definition": "Lack of knowledge or information.",
        "pos": "noun",
        "pron": "/ˈɪɡ.nər.əns/",
        "example": "Ignorance of the law is not an excuse.",
        "vietnamese": "sự thiếu hiểu biết",
        "vietnamese_example": "Sự thiếu hiểu biết về luật pháp không phải là lý do bào chữa.",
        "cefr": "C1"
    },
    "injustice": {
        "definition": "the fact of a situation being unfair and of people not being treated equally; an unfair act or an example of unfair treatment",
        "pos": "noun",
        "pron": "/ɪnˈdʒʌstɪs/",
        "example": "We are committed to fighting against poverty and injustice.",
        "vietnamese": "sự bất công",
        "vietnamese_example": "Chúng tôi cam kết đấu tranh chống lại nghèo đói và bất công.",
        "cefr": "C1"
    },
    "insertion": {
        "definition": "the act of putting something inside something else; a thing that is put inside something else",
        "pos": "noun",
        "pron": "/ɪnˈsɜːʃn/",
        "example": "An examination is carried out before the insertion of the tube.",
        "vietnamese": "chèn",
        "vietnamese_example": "Việc kiểm tra được thực hiện trước khi đưa ống vào.",
        "cefr": "C1"
    },
    "inspect": {
        "definition": "to look closely at something/somebody, especially to check that everything is as it should be",
        "pos": "verb",
        "pron": "/ɪnˈspekt/",
        "example": "inspect something/somebody, The teacher walked around inspecting their work.",
        "vietnamese": "thanh tra",
        "vietnamese_example": "kiểm tra cái gì/ai đó, Giáo viên đi vòng quanh kiểm tra công việc của họ.",
        "cefr": "C1"
    },
    "inspection": {
        "definition": "an official visit to a school, factory, etc. in order to check that rules are being obeyed and that standards are acceptable",
        "pos": "noun",
        "pron": "/ɪnˈspekʃn/",
        "example": "Regular inspections are carried out at the prison.",
        "vietnamese": "điều tra",
        "vietnamese_example": "Việc kiểm tra thường xuyên được thực hiện tại nhà tù.",
        "cefr": "C1"
    },
    "instinct": {
        "definition": "a natural quality that makes people and animals tend to behave in a particular way using the knowledge and abilities that they were born with rather than thought or training",
        "pos": "noun",
        "pron": "/ˈɪnstɪŋkt/",
        "example": "She did not seem to have any of the usual maternal instincts.",
        "vietnamese": "bản năng",
        "vietnamese_example": "Cô ấy dường như không có bất kỳ bản năng làm mẹ thông thường nào.",
        "cefr": "C1"
    },
    "investigator": {
        "definition": "a person who examines a situation such as an accident or a crime to find out the truth",
        "pos": "noun",
        "pron": "/ɪnˈvestɪɡeɪtə(r)/",
        "example": "air safety investigators",
        "vietnamese": "người điều tra",
        "vietnamese_example": "điều tra viên an toàn hàng không",
        "cefr": "C1"
    },
    "maintenance": {
        "definition": "the act of keeping something in good condition by checking or repairing it regularly",
        "pos": "noun",
        "pron": "/ˈmeɪntənəns/",
        "example": "The school pays for heating and the maintenance of the buildings.",
        "vietnamese": "BẢO TRÌ",
        "vietnamese_example": "Nhà trường trả tiền sưởi ấm và bảo trì các tòa nhà.",
        "cefr": "C1"
    },
    "moderate": {
        "definition": "that is neither very good, large, hot, etc. nor very bad, small, cold, etc.",
        "pos": "adj",
        "pron": "/ˈmɒdərət/",
        "example": "students of moderate ability",
        "vietnamese": "vừa phải",
        "vietnamese_example": "học sinh có khả năng trung bình",
        "cefr": "C1"
    },
    "notable": {
        "definition": "deserving to be noticed or to receive attention; important",
        "pos": "adj",
        "pron": "/ˈnəʊtəbl/",
        "example": "a notable success/achievement/example",
        "vietnamese": "đáng chú ý",
        "vietnamese_example": "một thành công/thành tựu/ví dụ đáng chú ý",
        "cefr": "C1"
    },
    "notably": {
        "definition": "used for giving a good or the most important example of something",
        "pos": "adv",
        "pron": "/ˈnəʊtəbli/",
        "example": "The house had many drawbacks, most notably its price.",
        "vietnamese": "đáng chú ý",
        "vietnamese_example": "Ngôi nhà có nhiều nhược điểm, đáng chú ý nhất là giá của nó.",
        "cefr": "C1"
    },
    "nursery": {
        "definition": "a place where young children are cared for while their parents are at work; a day nursery or nursery school",
        "pos": "noun",
        "pron": "/ˈnɜːsəri/",
        "example": "at nursery, Her youngest child is at nursery now.",
        "vietnamese": "vườn ươm",
        "vietnamese_example": "ở nhà trẻ, đứa con út của cô hiện đang ở nhà trẻ.",
        "cefr": "C1"
    },
    "oblige": {
        "definition": "to force somebody to do something, by law, because it is a duty, etc.",
        "pos": "verb",
        "pron": "/əˈblaɪdʒ/",
        "example": "Parents are obliged by law to send their children to school.",
        "vietnamese": "bắt buộc",
        "vietnamese_example": "Luật pháp buộc cha mẹ phải cho con đi học.",
        "cefr": "C1"
    },
    "pad": {
        "definition": "a thick piece of soft material that is used, for example, for cleaning or protecting something or for holding liquid",
        "pos": "noun",
        "pron": "/pæd/",
        "example": "medicated cleansing pads for sensitive skin",
        "vietnamese": "đệm",
        "vietnamese_example": "miếng làm sạch thuốc dành cho da nhạy cảm",
        "cefr": "C1"
    },
    "syndrome": {
        "definition": "a set of physical conditions that show you have a particular disease or medical problem",
        "pos": "noun",
        "pron": "/ˈsɪndrəʊm/",
        "example": "PMS or premenstrual syndrome",
        "vietnamese": "hội chứng",
        "vietnamese_example": "PMS hoặc hội chứng tiền kinh nguyệt",
        "cefr": "C1"
    },
    "epidemic": {
        "definition": "a large number of cases of a particular disease or medical condition happening at the same time in a particular community",
        "pos": "noun",
        "pron": "/ˌepɪˈdemɪk/",
        "example": "the outbreak of a flu epidemic",
        "vietnamese": "bệnh dịch",
        "vietnamese_example": "sự bùng phát của dịch cúm",
        "cefr": "C1"
    },
    "physician": {
        "definition": "a doctor, especially one who is a specialist in general medicine and not surgery",
        "pos": "noun",
        "pron": "/fɪˈzɪʃn/",
        "example": "Dr Dennett is a practicing family physician in Atlanta.",
        "vietnamese": "bác sĩ",
        "vietnamese_example": "Bác sĩ Dennett là bác sĩ gia đình đang hành nghề ở Atlanta.",
        "cefr": "C1"
    },
    "diagnose": {
        "definition": "to say exactly what an illness or the cause of a problem is",
        "pos": "verb",
        "pron": "/ˈdaɪəɡnəʊz/",
        "example": "diagnose something, The test is used to diagnose a variety of diseases.",
        "vietnamese": "chẩn đoán",
        "vietnamese_example": "chẩn đoán điều gì đó, Xét nghiệm được sử dụng để chẩn đoán nhiều loại bệnh.",
        "cefr": "C1"
    },
    "misery": {
        "definition": "great physical or mental pain",
        "pos": "noun",
        "pron": "/ˈmɪzəri/",
        "example": "Fame brought her nothing but misery.",
        "vietnamese": "khốn khổ",
        "vietnamese_example": "Sự nổi tiếng không mang lại cho cô điều gì ngoài sự đau khổ.",
        "cefr": "C1"
    },
    "prescribe": {
        "definition": "to tell somebody to take a particular medicine or have a particular treatment; to write a prescription for a particular medicine, etc.",
        "pos": "verb",
        "pron": "/prɪˈskraɪb/",
        "example": "prescribe something, Valium is usually prescribed to treat anxiety.",
        "vietnamese": "quy định",
        "vietnamese_example": "kê toa một cái gì đó, Valium thường được kê toa để điều trị chứng lo âu.",
        "cefr": "C1"
    },
    "prescription": {
        "definition": "an official piece of paper on which a doctor writes the type of medicine you should have, and which enables you to get it from a chemist's ",
        "pos": "noun",
        "pron": "/prɪˈskrɪpʃn/",
        "example": "prescription for something, The doctor gave me a prescription for antibiotics.",
        "vietnamese": "toa thuốc",
        "vietnamese_example": "đơn thuốc cho một cái gì đó, Bác sĩ đã cho tôi một đơn thuốc kháng sinh.",
        "cefr": "C1"
    },
    "vulnerability": {
        "definition": "the fact of being weak and easily hurt physically or emotionally",
        "pos": "noun",
        "pron": "/ˌvʌlnərəˈbɪləti/",
        "example": "the vulnerability of newborn babies to disease",
        "vietnamese": "tính dễ bị tổn thương",
        "vietnamese_example": "tính dễ bị tổn thương của trẻ sơ sinh trước bệnh tật",
        "cefr": "C1"
    },
    "ward": {
        "definition": "a separate room or area in a hospital for people with the same type of medical condition",
        "pos": "noun",
        "pron": "/wɔːd/",
        "example": "a maternity/surgical/psychiatric/children’s ward",
        "vietnamese": "phường",
        "vietnamese_example": "khoa sản/phẫu thuật/tâm thần/trẻ em",
        "cefr": "C1"
    },
    "well-being": {
        "definition": "general health and happiness",
        "pos": "noun",
        "pron": "/ˈwel biːɪŋ/",
        "example": "emotional/physical/psychological well-being",
        "vietnamese": "hạnh phúc",
        "vietnamese_example": "tình trạng khỏe mạnh về cảm xúc/thể chất/tâm lý",
        "cefr": "C1"
    },
    "admission": {
        "definition": "the act of accepting somebody into an institution, organization, etc.; the right to enter a place or to join an institution or organization",
        "pos": "noun",
        "pron": "/ədˈmɪʃn/",
        "example": "Hospital admission is not necessary in most cases.",
        "vietnamese": "nhập học",
        "vietnamese_example": "Nhập viện là không cần thiết trong hầu hết các trường hợp.",
        "cefr": "C1"
    },
    "appetite": {
        "definition": "physical desire for food",
        "pos": "noun",
        "pron": "/ˈæpɪtaɪt/",
        "example": "He suffered from headaches and loss of appetite.",
        "vietnamese": "thèm ăn",
        "vietnamese_example": "Anh ấy bị đau đầu và chán ăn.",
        "cefr": "C1"
    },
    "assault": {
        "definition": "the crime of attacking somebody physically",
        "pos": "noun",
        "pron": "/əˈsɔːlt/",
        "example": "Both men were charged with assault.",
        "vietnamese": "tấn công",
        "vietnamese_example": "Cả hai người đàn ông đều bị buộc tội tấn công.",
        "cefr": "C1"
    },
    "cognitive": {
        "definition": "connected with mental processes of understanding",
        "pos": "adj",
        "pron": "/ˈkɒɡnətɪv/",
        "example": "a child’s cognitive development",
        "vietnamese": "nhận thức",
        "vietnamese_example": "sự phát triển nhận thức của trẻ",
        "cefr": "C1"
    },
    "consciousness": {
        "definition": "the state of being able to use your senses and mental powers to understand what is happening",
        "pos": "noun",
        "pron": "/ˈkɒnʃəsnəs/",
        "example": "I can't remember any more—I must have lost consciousness.",
        "vietnamese": "ý thức",
        "vietnamese_example": "Tôi không thể nhớ được nữa - chắc là tôi đã bất tỉnh.",
        "cefr": "C1"
    },
    "detain": {
        "definition": "to keep somebody in an official place, such as a police station, a prison or a hospital, and prevent them from leaving",
        "pos": "verb",
        "pron": "/dɪˈteɪn/",
        "example": "One man has been detained for questioning.",
        "vietnamese": "giam",
        "vietnamese_example": "Một người đàn ông đã bị bắt giữ để thẩm vấn.",
        "cefr": "C1"
    },
    "deteriorate": {
        "definition": "to become worse",
        "pos": "verb",
        "pron": "/dɪˈtɪəriəreɪt/",
        "example": "Her health deteriorated rapidly, and she died shortly afterwards.",
        "vietnamese": "xấu đi",
        "vietnamese_example": "Sức khỏe của bà suy giảm nhanh chóng và bà qua đời ngay sau đó.",
        "cefr": "C1"
    },
    "dose": {
        "definition": "an amount of a medicine or a drug that is taken once, or regularly over a period of time",
        "pos": "noun",
        "pron": "/dəʊs/",
        "example": "a high/low/lethal dose",
        "vietnamese": "liều lượng",
        "vietnamese_example": "liều cao/thấp/gây chết người",
        "cefr": "C1"
    },
    "fibre": {
        "definition": "the part of food that helps to keep a person healthy by keeping the bowels working and moving other food quickly through the body",
        "pos": "noun",
        "pron": "/ˈfaɪbə(r)/",
        "example": "dietary fibre",
        "vietnamese": "chất xơ",
        "vietnamese_example": "chất xơ",
        "cefr": "C1"
    },
    "frustrated": {
        "definition": "feeling annoyed and impatient because you cannot do or achieve what you want",
        "pos": "adj",
        "pron": "/frʌˈstreɪtɪd/",
        "example": "It's very easy to get frustrated in this job.",
        "vietnamese": "bực bội",
        "vietnamese_example": "Rất dễ nản lòng trong công việc này.",
        "cefr": "C1"
    },
    "frustrating": {
        "definition": "causing you to feel annoyed and impatient because you cannot do or achieve what you want",
        "pos": "adj",
        "pron": "/frʌˈstreɪtɪŋ/",
        "example": "It's frustrating to have to wait so long.",
        "vietnamese": "làm nản lòng",
        "vietnamese_example": "Thật khó chịu khi phải chờ đợi lâu như vậy.",
        "cefr": "C1"
    },
    "infect": {
        "definition": "to make a disease or an illness spread to a person, an animal or a plant",
        "pos": "verb",
        "pron": "/ɪnˈfekt/",
        "example": "infect somebody/something (with something), It is not possible to infect another person through kissing.",
        "vietnamese": "lây nhiễm",
        "vietnamese_example": "lây nhiễm cho ai đó/thứ gì đó (với thứ gì đó), Không thể lây nhiễm cho người khác qua hôn.",
        "cefr": "C1"
    },
    "inmate": {
        "definition": "one of the people living in an institution such as a prison or a psychiatric hospital",
        "pos": "noun",
        "pron": "/ˈɪnmeɪt/",
        "example": "The jail has 500 inmates.",
        "vietnamese": "tù nhân",
        "vietnamese_example": "Nhà tù có 500 tù nhân.",
        "cefr": "C1"
    },
    "integrated": {
        "definition": "in which many different parts are closely connected and work successfully together",
        "pos": "adj",
        "pron": "/ˈɪntɪɡreɪtɪd/",
        "example": "an integrated programme of patient care",
        "vietnamese": "tích hợp",
        "vietnamese_example": "chương trình chăm sóc bệnh nhân tích hợp",
        "cefr": "C1"
    },
    "liver": {
        "definition": "a large organ in the body that cleans the blood and produces bile",
        "pos": "noun",
        "pron": "/ˈlɪvə(r)/",
        "example": "liver disease",
        "vietnamese": "gan",
        "vietnamese_example": "bệnh gan",
        "cefr": "C1"
    },
    "originate": {
        "definition": "to happen or appear for the first time in a particular place or situation",
        "pos": "verb",
        "pron": "/əˈrɪdʒɪneɪt/",
        "example": "The disease is thought to have originated in the tropics.",
        "vietnamese": "bắt nguồn",
        "vietnamese_example": "Căn bệnh này được cho là có nguồn gốc ở vùng nhiệt đới.",
        "cefr": "C1"
    },
    "outbreak": {
        "definition": "the sudden start of something unpleasant, especially violence or a disease",
        "pos": "noun",
        "pron": "/ˈaʊtbreɪk/",
        "example": "the outbreak of war",
        "vietnamese": "sự bùng phát",
        "vietnamese_example": "chiến tranh bùng nổ",
        "cefr": "C1"
    },
    "psychiatric": {
        "definition": "relating to psychiatry or to mental illnesses",
        "pos": "adj",
        "pron": "/ˌsaɪkiˈætrɪk/",
        "example": "psychiatric disorders",
        "vietnamese": "tâm thần",
        "vietnamese_example": "rối loạn tâm thần",
        "cefr": "C1"
    },
    "rehabilitation": {
        "definition": "the process of helping somebody to return to a normal, healthy life after they have been in prison or very ill",
        "pos": "noun",
        "pron": "/ˌriːəˌbɪlɪˈteɪʃn/",
        "example": "a drug rehabilitation centre",
        "vietnamese": "phục hồi chức năng",
        "vietnamese_example": "một trung tâm cai nghiện ma túy",
        "cefr": "C1"
    },
    "revive": {
        "definition": "to become, or to make somebody/something become, conscious or healthy and strong again",
        "pos": "verb",
        "pron": "/rɪˈvaɪv/",
        "example": "The flowers soon revived in water.",
        "vietnamese": "hồi sinh",
        "vietnamese_example": "Những bông hoa sớm hồi sinh trong nước.",
        "cefr": "C1"
    },
    "robust": {
        "definition": "strong and healthy",
        "pos": "adj",
        "pron": "/rəʊˈbʌst/",
        "example": "She was almost 90, but still very robust.",
        "vietnamese": "khỏe mạnh",
        "vietnamese_example": "Bà đã gần 90 nhưng vẫn còn rất khỏe mạnh.",
        "cefr": "C1"
    },
    "stabilize": {
        "definition": "to become or to make something become steady and unlikely to change; to make something stable",
        "pos": "verb",
        "pron": "/ˈsteɪbəlaɪz/",
        "example": "The patient's condition stabilized.",
        "vietnamese": "ổn định",
        "vietnamese_example": "Tình trạng bệnh nhân ổn định.",
        "cefr": "C1"
    },
    "thrive": {
        "definition": "to become, and continue to be, successful, strong, healthy, etc.",
        "pos": "verb",
        "pron": "/θraɪv/",
        "example": "New businesses thrive in this area.",
        "vietnamese": "phát triển mạnh",
        "vietnamese_example": "Các doanh nghiệp mới phát triển mạnh trong lĩnh vực này.",
        "cefr": "C1"
    },
    "transmission": {
        "definition": "the act or process of passing something from one person, place or thing to another",
        "pos": "noun",
        "pron": "/trænzˈmɪʃn/",
        "example": "the transmission of the disease",
        "vietnamese": "quá trình lây truyền",
        "vietnamese_example": "sự lây truyền của bệnh",
        "cefr": "C1"
    },
    "trauma": {
        "definition": "a mental condition caused by severe shock, stress or fear, especially when the harmful effects last for a long time",
        "pos": "noun",
        "pron": "/ˈtrɔːmə/",
        "example": "the effects of trauma and stress on the body",
        "vietnamese": "tổn thương",
        "vietnamese_example": "ảnh hưởng của chấn thương và căng thẳng lên cơ thể",
        "cefr": "C1"
    },
    "unveil": {
        "definition": "to remove a cover or curtain from a painting, statue, etc. so that it can be seen in public for the first time",
        "pos": "verb",
        "pron": "/ˌʌnˈveɪl/",
        "example": "The Queen unveiled a plaque to mark the official opening of the hospital.",
        "vietnamese": "tiết lộ",
        "vietnamese_example": "Nữ hoàng đã khánh thành tấm bảng đánh dấu ngày chính thức khai trương bệnh viện.",
        "cefr": "C1"
    },
    "vulnerable": {
        "definition": "weak and easily hurt physically or emotionally",
        "pos": "adj",
        "pron": "/ˈvʌlnərəbl/",
        "example": "These offices are highly vulnerable to terrorist attack.",
        "vietnamese": "dễ bị tổn thương",
        "vietnamese_example": "Những văn phòng này rất dễ bị tấn công khủng bố.",
        "cefr": "C1"
    },
    "brutal": {
        "definition": "violent and cruel",
        "pos": "adj",
        "pron": "/ˈbruːtl/",
        "example": "a brutal attack/murder/rape/killing",
        "vietnamese": "tàn bạo",
        "vietnamese_example": "một cuộc tấn công/giết người/hiếp dâm/giết người tàn bạo",
        "cefr": "C1"
    },
    "custody": {
        "definition": "the legal right or duty to take care of or keep somebody/something; the act of taking care of something/somebody",
        "pos": "noun",
        "pron": "/ˈkʌstədi/",
        "example": "Who will have custody of the children?",
        "vietnamese": "quyền giám hộ",
        "vietnamese_example": "Ai sẽ có quyền nuôi con?",
        "cefr": "C1"
    },
    "imprison": {
        "definition": "to put somebody in a prison or another place from which they cannot escape",
        "pos": "verb",
        "pron": "/ɪmˈprɪzn/",
        "example": "be imprisoned (for something), They were imprisoned for possession of drugs.",
        "vietnamese": "bỏ tù",
        "vietnamese_example": "bị bỏ tù (vì điều gì đó), Họ bị bỏ tù vì tội tàng trữ ma túy.",
        "cefr": "C1"
    },
    "imprisonment": {
        "definition": "the act of putting somebody in a prison or another place from which they cannot escape; the state of being there",
        "pos": "noun",
        "pron": "/ɪmˈprɪznmənt/",
        "example": "to be sentenced to life imprisonment for murder",
        "vietnamese": "bỏ tù",
        "vietnamese_example": "phải lĩnh án chung thân về tội giết người",
        "cefr": "C1"
    },
    "prosecution": {
        "definition": "the process of trying to prove in court that somebody is guilty of a crime (= of prosecuting them); the process of being officially charged with a crime in court",
        "pos": "noun",
        "pron": "/ˌprɒsɪˈkjuːʃn/",
        "example": "Prosecution for a first minor offence rarely leads to imprisonment.",
        "vietnamese": "truy tố",
        "vietnamese_example": "Việc truy tố một tội nhỏ lần đầu hiếm khi dẫn đến phạt tù.",
        "cefr": "C1"
    },
    "squad": {
        "definition": "a section of a police force that deals with a particular type of crime",
        "pos": "noun",
        "pron": "/skwɒd/",
        "example": "the drugs/fraud/bomb/riot squad ",
        "vietnamese": "đội hình",
        "vietnamese_example": "đội ma túy/lừa đảo/đánh bom/bạo loạn",
        "cefr": "C1"
    },
    "confession": {
        "definition": "a statement that a person makes, admitting that they are guilty of a crime; the act of making such a statement",
        "pos": "noun",
        "pron": "/kənˈfeʃn/",
        "example": "After hours of questioning by police, she made a full confession.",
        "vietnamese": "sự xưng tội",
        "vietnamese_example": "Sau nhiều giờ bị cảnh sát thẩm vấn, cô đã khai nhận toàn bộ hành vi của mình.",
        "cefr": "C1"
    },
    "constitute": {
        "definition": "to be considered to be something",
        "pos": "verb",
        "pron": "/ˈkɒnstɪtjuːt/",
        "example": "Does such an activity constitute a criminal offence?",
        "vietnamese": "cấu thành",
        "vietnamese_example": "Hoạt động như vậy có cấu thành tội phạm hình sự không?",
        "cefr": "C1"
    },
    "convict": {
        "definition": "to decide and state officially in court that somebody is guilty of a crime",
        "pos": "verb",
        "pron": "/kənˈvɪkt/",
        "example": "be convicted (of something), He was convicted of fraud.",
        "vietnamese": "kết án",
        "vietnamese_example": "bị kết án (về điều gì đó), Anh ta bị kết án về tội lừa đảo.",
        "cefr": "C1"
    },
    "coup": {
        "definition": "a sudden change of government that is illegal and often violent",
        "pos": "noun",
        "pron": "/kuː/",
        "example": "He seized power in a military coup in 2008.",
        "vietnamese": "cuộc đảo chính",
        "vietnamese_example": "Ông lên nắm quyền trong một cuộc đảo chính quân sự năm 2008.",
        "cefr": "C1"
    },
    "extremist": {
        "definition": "a person whose opinions, especially about religion or politics, are extreme, and who may do things that are violent or illegal for what they believe",
        "pos": "noun",
        "pron": "/ɪkˈstriːmɪst/",
        "example": "left-wing/right-wing/political/religious extremists",
        "vietnamese": "cực đoan",
        "vietnamese_example": "những kẻ cực đoan cánh tả/cánh hữu/chính trị/tôn giáo",
        "cefr": "C1"
    },
    "presently": {
        "definition": "at the time you are speaking or writing; now",
        "pos": "adv",
        "pron": "/ˈprezntli/",
        "example": "The crime is presently being investigated by the police.",
        "vietnamese": "hiện tại",
        "vietnamese_example": "Hiện vụ án đang được cảnh sát điều tra làm rõ.",
        "cefr": "C1"
    },
    "prosecute": {
        "definition": "to officially charge somebody with a crime in court",
        "pos": "verb",
        "pron": "/ˈprɒsɪkjuːt/",
        "example": "The police decided not to prosecute.",
        "vietnamese": "truy tố",
        "vietnamese_example": "Cảnh sát quyết định không truy tố.",
        "cefr": "C1"
    },
    "riot": {
        "definition": "a situation in which a group of people behave in a violent way in a public place, often as a protest",
        "pos": "noun",
        "pron": "/ˈraɪət/",
        "example": "One prison guard was killed when a riot broke out in the jail.",
        "vietnamese": "cuộc náo loạn",
        "vietnamese_example": "Một cai ngục đã thiệt mạng khi bạo loạn nổ ra trong nhà tù.",
        "cefr": "C1"
    },
    "suspicious": {
        "definition": "feeling that somebody has done something wrong, illegal or dishonest, without having any proof",
        "pos": "adj",
        "pron": "/səˈspɪʃəs/",
        "example": "They became suspicious of his behaviour and contacted the police.",
        "vietnamese": "khả nghi",
        "vietnamese_example": "Họ trở nên nghi ngờ về hành vi của anh ta và liên lạc với cảnh sát.",
        "cefr": "C1"
    },
    "accountability": {
        "definition": "the fact of being responsible for your decisions or actions and expected to explain them when you are asked",
        "pos": "noun",
        "pron": "/əˌkaʊntəˈbɪləti/",
        "example": "proposals for greater police accountability",
        "vietnamese": "trách nhiệm giải trình",
        "vietnamese_example": "Đề xuất nâng cao trách nhiệm của cảnh sát",
        "cefr": "C1"
    },
    "accusation": {
        "definition": "a statement saying that you think a person is guilty of doing something wrong or illegal; the fact of accusing somebody",
        "pos": "noun",
        "pron": "/ˌækjuˈzeɪʃn/",
        "example": "I don't want to make an accusation until I have some proof.",
        "vietnamese": "lời buộc tội",
        "vietnamese_example": "Tôi không muốn buộc tội cho đến khi tôi có bằng chứng.",
        "cefr": "C1"
    },
    "accused": {
        "definition": "a person who is on trial for committing a crime",
        "pos": "noun",
        "pron": "/ði əˈkjuːzd/",
        "example": "The accused was found innocent.",
        "vietnamese": "bị buộc tội",
        "vietnamese_example": "Bị cáo được tuyên vô tội.",
        "cefr": "C1"
    },
    "allegation": {
        "definition": "a public statement that is made without giving proof, accusing somebody of doing something that is wrong or illegal",
        "pos": "noun",
        "pron": "/ˌæləˈɡeɪʃn/",
        "example": "to investigate/deny/withdraw an allegation",
        "vietnamese": "lời cáo buộc",
        "vietnamese_example": "điều tra/phủ nhận/rút lại lời cáo buộc",
        "cefr": "C1"
    },
    "await": {
        "definition": "to wait for somebody/something",
        "pos": "verb",
        "pron": "/əˈweɪt/",
        "example": "He is in custody awaiting trial.",
        "vietnamese": "chờ đợi",
        "vietnamese_example": "Anh ta đang bị giam chờ xét xử.",
        "cefr": "C1"
    },
    "backup": {
        "definition": "extra help or support that you can get if necessary",
        "pos": "noun",
        "pron": "/ˈbækʌp/",
        "example": "The police had backup from the army.",
        "vietnamese": "hỗ trợ",
        "vietnamese_example": "Cảnh sát đã có sự hỗ trợ từ quân đội.",
        "cefr": "C1"
    },
    "civilian": {
        "definition": "connected with people who are not members of the armed forces or the police",
        "pos": "adj",
        "pron": "/səˈvɪliən/",
        "example": "He left the army and returned to civilian life.",
        "vietnamese": "dân sự",
        "vietnamese_example": "Anh rời quân ngũ và trở lại cuộc sống dân sự.",
        "cefr": "C1"
    },
    "clash": {
        "definition": "a short fight between two groups of people",
        "pos": "noun",
        "pron": "/klæʃ/",
        "example": "Clashes broke out between police and demonstrators.",
        "vietnamese": "xung đột",
        "vietnamese_example": "Đụng độ đã nổ ra giữa cảnh sát và người biểu tình.",
        "cefr": "C1"
    },
    "corruption": {
        "definition": "dishonest or illegal behaviour, especially of people in authority",
        "pos": "noun",
        "pron": "/kəˈrʌpʃn/",
        "example": "allegations of bribery and corruption",
        "vietnamese": "tham nhũng",
        "vietnamese_example": "cáo buộc hối lộ và tham nhũng",
        "cefr": "C1"
    },
    "denial": {
        "definition": "a statement that something is not true or does not exist; the action of denying something",
        "pos": "noun",
        "pron": "/dɪˈnaɪəl/",
        "example": "denial (of something), the prisoner’s repeated denials of the charges against him",
        "vietnamese": "phủ nhận",
        "vietnamese_example": "phủ nhận (về điều gì đó), việc tù nhân liên tục phủ nhận những cáo buộc chống lại anh ta",
        "cefr": "C1"
    },
    "denounce": {
        "definition": "to strongly criticize somebody/something that you think is wrong, illegal, etc.",
        "pos": "verb",
        "pron": "/dɪˈnaʊns/",
        "example": "denounce somebody/something, She publicly denounced the government's handling of the crisis.",
        "vietnamese": "tố cáo",
        "vietnamese_example": "tố cáo ai/cái gì, Bà công khai tố cáo cách chính phủ xử lý khủng hoảng.",
        "cefr": "C1"
    },
    "detection": {
        "definition": "the process of discovering or noticing something, especially something that is not easy to see, hear, etc.; the fact of being discovered or noticed ",
        "pos": "noun",
        "pron": "/dɪˈtekʃn/",
        "example": "crime prevention and detection",
        "vietnamese": "phát hiện",
        "vietnamese_example": "phòng ngừa và phát hiện tội phạm",
        "cefr": "C1"
    },
    "detention": {
        "definition": "the state of being kept in a place, especially a prison, and prevented from leaving",
        "pos": "noun",
        "pron": "/dɪˈtenʃn/",
        "example": "They were sentenced to 12 months' detention in a young offender institution.",
        "vietnamese": "giam giữ",
        "vietnamese_example": "Họ bị kết án 12 tháng giam giữ trong trại giam dành cho phạm nhân trẻ tuổi.",
        "cefr": "C1"
    },
    "discharge": {
        "definition": "to give somebody official permission to leave the police or the armed forces; to make somebody leave the police or the armed forces",
        "pos": "verb",
        "pron": "/dɪsˈtʃɑːdʒ/",
        "example": "be discharged from something, He was discharged from the army following his injury.",
        "vietnamese": "phóng điện",
        "vietnamese_example": "được giải ngũ khỏi một cái gì đó, Anh ấy đã được giải ngũ sau khi bị thương.",
        "cefr": "C1"
    },
    "empower": {
        "definition": "to give somebody the power or authority to do something",
        "pos": "verb",
        "pron": "/ɪmˈpaʊə(r)/",
        "example": "be empowered (to do something), The courts were empowered to impose the death sentence for certain crimes.",
        "vietnamese": "trao quyền",
        "vietnamese_example": "được trao quyền (để làm điều gì đó), Tòa án được trao quyền để áp dụng hình phạt tử hình đối với một số tội phạm nhất định.",
        "cefr": "C1"
    },
    "enforce": {
        "definition": "to make sure that people obey a particular law or rule",
        "pos": "verb",
        "pron": "/ɪnˈfɔːs/",
        "example": "enforce something, It's the job of the police to enforce the law.",
        "vietnamese": "thi hành",
        "vietnamese_example": "thực thi điều gì đó, công việc của cảnh sát là thực thi pháp luật.",
        "cefr": "C1"
    },
    "evacuate": {
        "definition": "to move people from a place of danger to a safer place",
        "pos": "verb",
        "pron": "/ɪˈvækjueɪt/",
        "example": "evacuate something, Police evacuated nearby buildings.",
        "vietnamese": "sơ tán",
        "vietnamese_example": "sơ tán một cái gì đó, Cảnh sát sơ tán các tòa nhà gần đó.",
        "cefr": "C1"
    },
    "firearm": {
        "definition": "a gun that can be carried",
        "pos": "noun",
        "pron": "/ˈfaɪərɑːm/",
        "example": "The police were issued with firearms.",
        "vietnamese": "súng cầm tay",
        "vietnamese_example": "Cảnh sát đã được cấp súng.",
        "cefr": "C1"
    },
    "fit": {
        "definition": "a sudden attack of an illness, such as epilepsy, in which somebody becomes unconscious and their body may make violent movements",
        "pos": "noun",
        "pron": "/fɪt/",
        "example": "to have an epileptic fit",
        "vietnamese": "phù hợp",
        "vietnamese_example": "mắc chứng động kinh",
        "cefr": "C1"
    },
    "hostage": {
        "definition": "a person who is captured and held prisoner by a person or group, and who may be injured or killed if people do not do what the person or group is asking",
        "pos": "noun",
        "pron": "/ˈhɒstɪdʒ/",
        "example": "Three children were taken hostage during the bank robbery.",
        "vietnamese": "con tin",
        "vietnamese_example": "Ba đứa trẻ bị bắt làm con tin trong vụ cướp ngân hàng.",
        "cefr": "C1"
    },
    "humanity": {
        "definition": "people in general",
        "pos": "noun",
        "pron": "/hjuːˈmænəti/",
        "example": "He was found guilty of crimes against humanity.",
        "vietnamese": "nhân loại",
        "vietnamese_example": "Anh ta bị kết tội chống lại loài người.",
        "cefr": "C1"
    },
    "identification": {
        "definition": "the process of showing, proving or recognizing who or what somebody/something is",
        "pos": "noun",
        "pron": "/aɪˌdentɪfɪˈkeɪʃn/",
        "example": "The identification of the crash victims was a long and difficult task.",
        "vietnamese": "nhận dạng",
        "vietnamese_example": "Việc xác định danh tính nạn nhân vụ tai nạn là một nhiệm vụ lâu dài và khó khăn.",
        "cefr": "C1"
    },
    "incidence": {
        "definition": "the extent to which something happens or has an effect",
        "pos": "noun",
        "pron": "/ˈɪnsɪdəns/",
        "example": "an area with a high incidence of crime",
        "vietnamese": "sự xuất hiện",
        "vietnamese_example": "khu vực có tỷ lệ tội phạm cao",
        "cefr": "C1"
    },
    "infamous": {
        "definition": "well known for being bad or evil",
        "pos": "adj",
        "pron": "/ˈɪnfəməs/",
        "example": "a general who was infamous for his brutality",
        "vietnamese": "khét tiếng",
        "vietnamese_example": "một vị tướng khét tiếng vì sự tàn bạo của mình",
        "cefr": "C1"
    },
    "compliance": {
        "definition": "the practice of obeying rules or requests made by people in authority",
        "pos": "noun",
        "pron": "/kəmˈplaɪəns/",
        "example": "compliance (with something), procedures that must be followed to ensure full compliance with the law",
        "vietnamese": "Tuân thủ",
        "vietnamese_example": "tuân thủ (với cái gì đó), các thủ tục phải được tuân theo để đảm bảo tuân thủ đầy đủ pháp luật",
        "cefr": "C1"
    },
    "lawsuit": {
        "definition": "a claim or complaint against somebody that a person or an organization can make in court",
        "pos": "noun",
        "pron": "/ˈlɔːsuːt/",
        "example": "He filed a lawsuit against his record label.",
        "vietnamese": "vụ kiện",
        "vietnamese_example": "Anh ấy đã đệ đơn kiện hãng thu âm của mình.",
        "cefr": "C1"
    },
    "legislation": {
        "definition": "a law or a set of laws passed by a parliament",
        "pos": "noun",
        "pron": "/ˌledʒɪsˈleɪʃn/",
        "example": "an important piece of legislation",
        "vietnamese": "pháp luật",
        "vietnamese_example": "một văn bản luật quan trọng",
        "cefr": "C1"
    },
    "constitutional": {
        "definition": "Connected with the constitution of a country or organization.",
        "pos": "adj",
        "pron": "/ˌkɒnstɪˈtjuːʃənl/",
        "example": "The court must protect citizens' constitutional rights.",
        "vietnamese": "hiến pháp",
        "vietnamese_example": "Tòa án phải bảo vệ các quyền hiến pháp của công dân.",
        "cefr": "C1"
    },
    "judicial": {
        "definition": "connected with a court, a judge or legal judgement",
        "pos": "adj",
        "pron": "/dʒuˈdɪʃl/",
        "example": "judicial powers",
        "vietnamese": "tư pháp",
        "vietnamese_example": "quyền tư pháp",
        "cefr": "C1"
    },
    "magistrate": {
        "definition": "an official who acts as a judge in the lowest courts of law",
        "pos": "noun",
        "pron": "/ˈmædʒɪstreɪt/",
        "example": "to come up before the magistrates",
        "vietnamese": "quan tòa",
        "vietnamese_example": "đến trước các quan tòa",
        "cefr": "C1"
    },
    "solicitor": {
        "definition": "a lawyer who prepares legal documents, for example for the sale of land or buildings, advises people on legal matters, and can speak for them in some courts of law",
        "pos": "noun",
        "pron": "/səˈlɪsɪtə(r)/",
        "example": "Her first step was to contact a solicitor for advice.",
        "vietnamese": "luật sư",
        "vietnamese_example": "Bước đầu tiên của cô là liên hệ với luật sư để được tư vấn.",
        "cefr": "C1"
    },
    "attorney": {
        "definition": "a lawyer, especially one who can act for somebody in court",
        "pos": "noun",
        "pron": "/əˈtɜːni/",
        "example": "The prosecuting attorney began with a short opening statement.",
        "vietnamese": "luật sư",
        "vietnamese_example": "Luật sư công tố bắt đầu bằng lời mở đầu ngắn gọn.",
        "cefr": "C1"
    },
    "enact": {
        "definition": "to pass a law",
        "pos": "verb",
        "pron": "/ɪˈnækt/",
        "example": "(be) enacted (by somebody/something), legislation enacted by parliament",
        "vietnamese": "ban hành",
        "vietnamese_example": "(được) ban hành (bởi ai/cái gì), đạo luật được quốc hội ban hành",
        "cefr": "C1"
    },
    "enforcement": {
        "definition": "the act of making people obey a particular law or rule",
        "pos": "noun",
        "pron": "/ɪnˈfɔːsmənt/",
        "example": "strict enforcement of regulations",
        "vietnamese": "thực thi",
        "vietnamese_example": "thực thi nghiêm ngặt các quy định",
        "cefr": "C1"
    },
    "jurisdiction": {
        "definition": "the authority that an official organization has to make legal decisions about somebody/something",
        "pos": "noun",
        "pron": "/ˌdʒʊərɪsˈdɪkʃn/",
        "example": "jurisdiction over somebody/something, The English court had no jurisdiction over the defendants.",
        "vietnamese": "thẩm quyền",
        "vietnamese_example": "quyền tài phán đối với ai đó/cái gì đó, Tòa án Anh không có quyền tài phán đối với các bị cáo.",
        "cefr": "C1"
    },
    "proceeding": {
        "definition": "the process of using a court to settle an argument or to deal with a complaint",
        "pos": "noun",
        "pron": "/prəˈsiːdɪŋ/",
        "example": "court/legal/judicial proceedings",
        "vietnamese": "tiến hành",
        "vietnamese_example": "thủ tục tố tụng tại tòa án/pháp lý/tư pháp",
        "cefr": "C1"
    },
    "ruling": {
        "definition": "an official decision made by somebody in a position of authority, especially a judge",
        "pos": "noun",
        "pron": "/ˈruːlɪŋ/",
        "example": "The court will make its ruling on the case next week.",
        "vietnamese": "cai trị",
        "vietnamese_example": "Tòa án sẽ đưa ra phán quyết về vụ việc vào tuần tới.",
        "cefr": "C1"
    },
    "verdict": {
        "definition": "an official judgement made in court or at an inquest (= an official investigation into somebody's death)",
        "pos": "noun",
        "pron": "/ˈvɜːdɪkt/",
        "example": "Has the jury reached a verdict?",
        "vietnamese": "phán quyết",
        "vietnamese_example": "Bồi thẩm đoàn đã đưa ra phán quyết chưa?",
        "cefr": "C1"
    },
    "warrant": {
        "definition": "a legal document that is signed by a judge and gives the police authority to do something",
        "pos": "noun",
        "pron": "/ˈwɒrənt/",
        "example": "an arrest warrant",
        "vietnamese": "lệnh bảo đảm",
        "vietnamese_example": "lệnh bắt giữ",
        "cefr": "C1"
    },
    "accordance": {
        "definition": "according to a rule or the way that somebody says that something should be done",
        "pos": "noun",
        "pron": "/əˈkɔːdns/",
        "example": "in accordance with legal requirements",
        "vietnamese": "phù hợp",
        "vietnamese_example": "phù hợp với yêu cầu pháp lý",
        "cefr": "C1"
    },
    "amend": {
        "definition": "to change a law, document, statement, etc. slightly in order to correct a mistake or to improve it",
        "pos": "verb",
        "pron": "/əˈmend/",
        "example": "He asked to see the amended version.",
        "vietnamese": "sửa đổi",
        "vietnamese_example": "Anh ấy yêu cầu được xem bản sửa đổi.",
        "cefr": "C1"
    },
    "amendment": {
        "definition": "a small change or improvement that is made to a document or proposed new law; the process of changing a document or proposed new law",
        "pos": "noun",
        "pron": "/əˈmendmənt/",
        "example": "to introduce/propose/table an amendment (= to suggest it)",
        "vietnamese": "sửa đổi",
        "vietnamese_example": "giới thiệu/đề xuất/bàn một sửa đổi (= đề xuất nó)",
        "cefr": "C1"
    },
    "assembly": {
        "definition": "a group of people who have been elected to meet together regularly and make decisions or laws for a particular region or country",
        "pos": "noun",
        "pron": "/əˈsembli/",
        "example": "state/legislative/federal/local assemblies",
        "vietnamese": "cuộc họp",
        "vietnamese_example": "hội đồng tiểu bang/lập pháp/liên bang/địa phương",
        "cefr": "C1"
    },
    "breach": {
        "definition": "a failure to do something that must be done by law",
        "pos": "noun",
        "pron": "/briːtʃ/",
        "example": "a breach of contract/copyright/warranty",
        "vietnamese": "sự vi phạm",
        "vietnamese_example": "vi phạm hợp đồng/bản quyền/bảo hành",
        "cefr": "C1"
    },
    "citizenship": {
        "definition": "the legal right to belong to a particular country",
        "pos": "noun",
        "pron": "/ˈsɪtɪzənʃɪp/",
        "example": "They were granted full French citizenship.",
        "vietnamese": "quyền công dân",
        "vietnamese_example": "Họ được cấp đầy đủ quyền công dân Pháp.",
        "cefr": "C1"
    },
    "compel": {
        "definition": "to force somebody to do something; to make something necessary",
        "pos": "verb",
        "pron": "/kəmˈpel/",
        "example": "compel somebody to do something, The law can compel fathers to make regular payments for their children.",
        "vietnamese": "ép buộc",
        "vietnamese_example": "buộc ai đó phải làm điều gì đó. Luật pháp có thể buộc các ông bố phải trả tiền thường xuyên cho con cái của họ.",
        "cefr": "C1"
    },
    "conception": {
        "definition": "an understanding or a belief of what something/somebody is or what something/somebody should be",
        "pos": "noun",
        "pron": "/kənˈsepʃn/",
        "example": "conception of something, Marx’s conception of social justice",
        "vietnamese": "quan niệm",
        "vietnamese_example": "quan niệm về cái gì đó, quan niệm của Marx về công bằng xã hội",
        "cefr": "C1"
    },
    "conserve": {
        "definition": "to protect something and prevent it from being changed or destroyed",
        "pos": "verb",
        "pron": "/kənˈsɜːv/",
        "example": "new laws to conserve wildlife in the area",
        "vietnamese": "bảo tồn",
        "vietnamese_example": "luật mới để bảo tồn động vật hoang dã trong khu vực",
        "cefr": "C1"
    },
    "constitution": {
        "definition": "the system of laws and basic principles that a state, a country or an organization is governed by",
        "pos": "noun",
        "pron": "/ˌkɒnstɪˈtjuːʃn/",
        "example": "your right to vote under the constitution",
        "vietnamese": "cấu tạo",
        "vietnamese_example": "quyền bầu cử của bạn theo hiến pháp",
        "cefr": "C1"
    },
    "contend": {
        "definition": "to say that something is true, especially in an argument",
        "pos": "verb",
        "pron": "/kənˈtend/",
        "example": "I would contend that the minister's thinking is flawed on this point.",
        "vietnamese": "tranh luận",
        "vietnamese_example": "Tôi cho rằng suy nghĩ của Bộ trưởng là sai lầm về điểm này.",
        "cefr": "C1"
    },
    "divine": {
        "definition": "coming from or connected with God or a god",
        "pos": "adj",
        "pron": "/dɪˈvaɪn/",
        "example": "divine law/love/will",
        "vietnamese": "thần thánh",
        "vietnamese_example": "luật thiêng liêng/tình yêu/ý chí",
        "cefr": "C1"
    },
    "endure": {
        "definition": "to experience and deal with something that is painful or unpleasant without giving up",
        "pos": "verb",
        "pron": "/ɪnˈdjʊə(r)/",
        "example": "endure something, They had to endure a long wait before the case came to trial.",
        "vietnamese": "chịu đựng",
        "vietnamese_example": "chịu đựng điều gì đó, họ đã phải chịu đựng rất lâu trước khi vụ án được đưa ra xét xử.",
        "cefr": "C1"
    },
    "equality": {
        "definition": "the fact of being equal in rights, status, advantages, etc.",
        "pos": "noun",
        "pron": "/iˈkwɒləti/",
        "example": "racial/social/gender equality",
        "vietnamese": "bình đẳng",
        "vietnamese_example": "bình đẳng chủng tộc/xã hội/giới tính",
        "cefr": "C1"
    },
    "excess": {
        "definition": "in addition to an amount that is necessary, usual or legal",
        "pos": "adj",
        "pron": "/ˈekses/",
        "example": "Excess food is stored as fat.",
        "vietnamese": "thặng dư",
        "vietnamese_example": "Thức ăn dư thừa được lưu trữ dưới dạng chất béo.",
        "cefr": "C1"
    },
    "execute": {
        "definition": "to kill somebody, especially as a legal punishment",
        "pos": "verb",
        "pron": "/ˈeksɪkjuːt/",
        "example": "be executed (for something), He was executed for treason.",
        "vietnamese": "thi hành",
        "vietnamese_example": "bị xử tử (vì điều gì), Ngài bị xử tử vì tội phản quốc.",
        "cefr": "C1"
    },
    "execution": {
        "definition": "the act of killing somebody, especially as a legal punishment",
        "pos": "noun",
        "pron": "/ˌeksɪˈkjuːʃn/",
        "example": "He faced execution by hanging for murder.",
        "vietnamese": "thi hành án",
        "vietnamese_example": "Anh ta phải đối mặt với việc bị xử tử bằng cách treo cổ vì tội giết người.",
        "cefr": "C1"
    },
    "expire": {
        "definition": "to be no longer legally acceptable because the period of time for which it could be used has ended",
        "pos": "verb",
        "pron": "/ɪkˈspaɪə(r)/",
        "example": "When does your driving licence expire?",
        "vietnamese": "hết hạn",
        "vietnamese_example": "Giấy phép lái xe của bạn hết hạn khi nào?",
        "cefr": "C1"
    },
    "feminist": {
        "definition": "having or based on the belief that women should have the same rights and opportunities as men",
        "pos": "adj",
        "pron": "/ˈfemənɪst/",
        "example": "feminist demands/ideas/theories",
        "vietnamese": "nhà nữ quyền",
        "vietnamese_example": "nhu cầu/ý tưởng/lý thuyết về nữ quyền",
        "cefr": "C1"
    },
    "formula": {
        "definition": "a series of letters, numbers or symbols that represent a rule or law",
        "pos": "noun",
        "pron": "/ˈfɔːmjələ/",
        "example": "This formula is used to calculate the area of a circle.",
        "vietnamese": "công thức",
        "vietnamese_example": "Công thức này được sử dụng để tính diện tích hình tròn.",
        "cefr": "C1"
    },
    "gravity": {
        "definition": "the force that attracts objects in space towards each other, and that on the earth pulls them towards the centre of the planet, so that things fall to the ground when they are dropped",
        "pos": "noun",
        "pron": "/ˈɡrævəti/",
        "example": "Newton’s law of gravity",
        "vietnamese": "trọng lực",
        "vietnamese_example": "Định luật hấp dẫn của Newton",
        "cefr": "C1"
    },
    "initiate": {
        "definition": "to make something begin",
        "pos": "verb",
        "pron": "/ɪˈnɪʃieɪt/",
        "example": "to initiate legal proceedings against somebody",
        "vietnamese": "khởi xướng",
        "vietnamese_example": "bắt đầu các thủ tục pháp lý chống lại ai đó",
        "cefr": "C1"
    },
    "invoke": {
        "definition": "to mention or use a law, rule, etc. as a reason for doing something",
        "pos": "verb",
        "pron": "/ɪnˈvəʊk/",
        "example": "It is unlikely that libel laws will be invoked.",
        "vietnamese": "gọi",
        "vietnamese_example": "Khó có khả năng luật phỉ báng sẽ được áp dụng.",
        "cefr": "C1"
    },
    "just": {
        "definition": "that most people consider to be morally fair and reasonable",
        "pos": "adj",
        "pron": "/dʒʌst/",
        "example": "a just decision/law/society",
        "vietnamese": "chỉ",
        "vietnamese_example": "một quyết định/luật/xã hội công bằng",
        "cefr": "C1"
    },
    "bureaucracy": {
        "definition": "the system of official rules and ways of doing things that a government or an organization has, especially when these seem to be too complicated",
        "pos": "noun",
        "pron": "/bjʊəˈrɒkrəsi/",
        "example": "unnecessary/excessive bureaucracy",
        "vietnamese": "sự quan liêu",
        "vietnamese_example": "sự quan liêu không cần thiết/quá mức",
        "cefr": "C1"
    },
    "mandate": {
        "definition": "the authority to do something, given to a government or other organization by the people who vote for it in an election",
        "pos": "noun",
        "pron": "/ˈmændeɪt/",
        "example": "It is undemocratic to govern an area without an electoral mandate.",
        "vietnamese": "ủy quyền",
        "vietnamese_example": "Việc quản lý một khu vực không có ủy quyền bầu cử là phi dân chủ.",
        "cefr": "C1"
    },
    "parliamentary": {
        "definition": "connected with a parliament; having a parliament",
        "pos": "adj",
        "pron": "/ˌpɑːləˈmentri/",
        "example": "parliamentary elections",
        "vietnamese": "nghị viện",
        "vietnamese_example": "bầu cử quốc hội",
        "cefr": "C1"
    },
    "republic": {
        "definition": "a country that is governed by a president and politicians elected by the people and where there is no king or queen",
        "pos": "noun",
        "pron": "/rɪˈpʌblɪk/",
        "example": "newly independent republics",
        "vietnamese": "nước cộng hòa",
        "vietnamese_example": "các nước cộng hòa mới độc lập",
        "cefr": "C1"
    },
    "asylum": {
        "definition": "protection that a government gives to people who have left their own country, usually because they were in danger for political reasons",
        "pos": "noun",
        "pron": "/əˈsaɪləm/",
        "example": "to seek/apply for/be granted asylum",
        "vietnamese": "tị nạn",
        "vietnamese_example": "tìm kiếm/đăng ký/được cấp nơi tị nạn",
        "cefr": "C1"
    },
    "cabinet": {
        "definition": "a group of senior members of a government that is responsible for advising and deciding on government policy",
        "pos": "noun",
        "pron": "/ˈkæbɪnət/",
        "example": "a cabinet meeting",
        "vietnamese": "tủ",
        "vietnamese_example": "một cuộc họp nội các",
        "cefr": "C1"
    },
    "condemn": {
        "definition": "to say very strongly that you think something is bad, usually for moral reasons",
        "pos": "verb",
        "pron": "/kənˈdem/",
        "example": "condemn somebody/something, The government issued a statement condemning the killings.",
        "vietnamese": "lên án",
        "vietnamese_example": "lên án ai đó/cái gì đó, Chính phủ đã ban hành một tuyên bố lên án các vụ giết người.",
        "cefr": "C1"
    },
    "declaration": {
        "definition": "an official or formal statement, especially about the plans of a government or an organization; the act of making such a statement",
        "pos": "noun",
        "pron": "/ˌdekləˈreɪʃn/",
        "example": "to issue/sign a declaration",
        "vietnamese": "tuyên ngôn",
        "vietnamese_example": "ban hành/ký một bản tuyên bố",
        "cefr": "C1"
    },
    "endorsement": {
        "definition": "a public statement or action showing that you support somebody/something",
        "pos": "noun",
        "pron": "/ɪnˈdɔːsmənt/",
        "example": "The election victory is a clear endorsement of their policies.",
        "vietnamese": "sự chứng thực",
        "vietnamese_example": "Chiến thắng trong cuộc bầu cử là sự chứng thực rõ ràng cho chính sách của họ.",
        "cefr": "C1"
    },
    "liberty": {
        "definition": "freedom to live as you choose without too many limits from government or authority",
        "pos": "noun",
        "pron": "/ˈlɪbəti/",
        "example": "the fight for justice and liberty",
        "vietnamese": "tự do",
        "vietnamese_example": "cuộc đấu tranh cho công lý và tự do",
        "cefr": "C1"
    },
    "ministry": {
        "definition": "a government department that has a particular area of responsibility",
        "pos": "noun",
        "pron": "/ˈmɪnɪstri/",
        "example": "The Ministry of Defence has issued the following statement.",
        "vietnamese": "bộ",
        "vietnamese_example": "Bộ Quốc phòng đã đưa ra tuyên bố sau đây.",
        "cefr": "C1"
    },
    "provincial": {
        "definition": "connected with one of the large areas that some countries are divided into, with its own local government",
        "pos": "adj",
        "pron": "/prəˈvɪnʃl/",
        "example": "provincial assemblies/elections",
        "vietnamese": "tỉnh",
        "vietnamese_example": "hội đồng/bầu cử cấp tỉnh",
        "cefr": "C1"
    },
    "archive": {
        "definition": "a collection of historical documents or records of a government, a family, a place or an organization; the place where these records are stored",
        "pos": "noun",
        "pron": "/ˈɑːkaɪv/",
        "example": "the National Sound Archive",
        "vietnamese": "lưu trữ",
        "vietnamese_example": "Lưu trữ âm thanh quốc gia",
        "cefr": "C1"
    },
    "assertion": {
        "definition": "a statement saying that you strongly believe something to be true",
        "pos": "noun",
        "pron": "/əˈsɜːʃn/",
        "example": "He was correct in his assertion that the minister had been lying.",
        "vietnamese": "khẳng định",
        "vietnamese_example": "Ông đã đúng khi khẳng định rằng Bộ trưởng đã nói dối.",
        "cefr": "C1"
    },
    "cautious": {
        "definition": "being careful about what you say or do, especially to avoid danger or mistakes; not taking any risks",
        "pos": "adj",
        "pron": "/ˈkɔːʃəs/",
        "example": "The government has been cautious in its response to the report.",
        "vietnamese": "thận trọng",
        "vietnamese_example": "Chính phủ đã thận trọng trong phản ứng với báo cáo.",
        "cefr": "C1"
    },
    "doctrine": {
        "definition": "a belief or set of beliefs held and taught by a Church, a political party, etc.",
        "pos": "noun",
        "pron": "/ˈdɒktrɪn/",
        "example": "the doctrine of parliamentary sovereignty",
        "vietnamese": "học thuyết",
        "vietnamese_example": "học thuyết về chủ quyền của quốc hội",
        "cefr": "C1"
    },
    "elevate": {
        "definition": "to give somebody/something a higher position or rank, often more important than they deserve ",
        "pos": "verb",
        "pron": "/ˈelɪveɪt/",
        "example": "elevate somebody/something (to something), He elevated many of his friends to powerful positions within the government.",
        "vietnamese": "nâng",
        "vietnamese_example": "nâng cao ai đó/thứ gì đó (lên thứ gì đó), Anh ấy đã nâng nhiều bạn bè của mình lên những vị trí quyền lực trong chính phủ.",
        "cefr": "C1"
    },
    "endorse": {
        "definition": "to say publicly that you support a person, statement or course of action",
        "pos": "verb",
        "pron": "/ɪnˈdɔːs/",
        "example": "I wholeheartedly endorse his remarks.",
        "vietnamese": "tán thành",
        "vietnamese_example": "Tôi hoàn toàn tán thành nhận xét của anh ấy.",
        "cefr": "C1"
    },
    "exile": {
        "definition": "the state of being sent to live in another country that is not your own, especially for political reasons or as a punishment",
        "pos": "noun",
        "pron": "/ˈeksaɪl/",
        "example": "a place of exile",
        "vietnamese": "lưu đày",
        "vietnamese_example": "nơi lưu đày",
        "cefr": "C1"
    },
    "inability": {
        "definition": "the fact of not being able to do something",
        "pos": "noun",
        "pron": "/ˌɪnəˈbɪləti/",
        "example": "the government’s inability to provide basic services",
        "vietnamese": "sự bất lực",
        "vietnamese_example": "chính phủ không có khả năng cung cấp các dịch vụ cơ bản",
        "cefr": "C1"
    },
    "interim": {
        "definition": "intended to last for only a short time until somebody/something more permanent is found",
        "pos": "adj",
        "pron": "/ˈɪntərɪm/",
        "example": "an interim government/measure/report",
        "vietnamese": "tạm thời",
        "vietnamese_example": "một chính phủ/biện pháp/báo cáo tạm thời",
        "cefr": "C1"
    },
    "proclaim": {
        "definition": "to publicly and officially tell people about something important",
        "pos": "verb",
        "pron": "/prəˈkleɪm/",
        "example": "proclaim something, The president proclaimed a state of emergency.",
        "vietnamese": "tuyên bố",
        "vietnamese_example": "tuyên bố điều gì đó, Tổng thống tuyên bố tình trạng khẩn cấp.",
        "cefr": "C1"
    },
    "propaganda": {
        "definition": "ideas or statements that may be false or present only one side of an argument that are used in order to gain support for a political leader, party, etc.",
        "pos": "noun",
        "pron": "/ˌprɒpəˈɡændə/",
        "example": "enemy propaganda",
        "vietnamese": "tuyên truyền",
        "vietnamese_example": "kẻ thù tuyên truyền",
        "cefr": "C1"
    },
    "prosecutor": {
        "definition": "a public official who charges somebody officially with a crime and prosecutes them in court",
        "pos": "noun",
        "pron": "/ˈprɒsɪkjuːtə(r)/",
        "example": "the public/state prosecutor",
        "vietnamese": "công tố viên",
        "vietnamese_example": "công tố viên/công tố viên tiểu bang",
        "cefr": "C1"
    },
    "protocol": {
        "definition": "a system of fixed rules and formal behaviour used at official meetings, usually between governments",
        "pos": "noun",
        "pron": "/ˈprəʊtəkɒl/",
        "example": "a breach of protocol",
        "vietnamese": "giao thức",
        "vietnamese_example": "vi phạm giao thức",
        "cefr": "C1"
    },
    "province": {
        "definition": "one of the areas that some countries are divided into with its own local government",
        "pos": "noun",
        "pron": "/ˈprɒvɪns/",
        "example": "the provinces of Canada",
        "vietnamese": "tỉnh",
        "vietnamese_example": "các tỉnh của Canada",
        "cefr": "C1"
    },
    "rally": {
        "definition": "a large public meeting, especially one held to support a particular idea or political party",
        "pos": "noun",
        "pron": "/ˈræli/",
        "example": "to attend/hold a rally",
        "vietnamese": "tập hợp",
        "vietnamese_example": "tham dự/tổ chức một cuộc biểu tình",
        "cefr": "C1"
    },
    "rebel": {
        "definition": "a person who fights against the government of their country",
        "pos": "noun",
        "pron": "/ˈrebl/",
        "example": "rebel forces",
        "vietnamese": "nổi loạn",
        "vietnamese_example": "lực lượng nổi dậy",
        "cefr": "C1"
    },
    "rebellion": {
        "definition": "an attempt by some of the people in a country to change their government, using violence",
        "pos": "noun",
        "pron": "/rɪˈbeljən/",
        "example": "in rebellion (against somebody/something), The north of the country rose in rebellion against the government.",
        "vietnamese": "nổi loạn",
        "vietnamese_example": "trong cuộc nổi dậy (chống lại ai/cái gì), miền Bắc nổi dậy chống lại chính quyền.",
        "cefr": "C1"
    },
    "reform": {
        "definition": "change that is made to a social system, an organization, etc. in order to improve or correct it",
        "pos": "noun",
        "pron": "/rɪˈfɔːm/",
        "example": "a government committed to reform",
        "vietnamese": "cải cách",
        "vietnamese_example": "một chính phủ cam kết cải cách",
        "cefr": "C1"
    },
    "restraint": {
        "definition": "a rule, a fact, an idea, etc. that limits or controls what people can do",
        "pos": "noun",
        "pron": "/rɪˈstreɪnt/",
        "example": "The government has imposed export restraints on some products.",
        "vietnamese": "kiềm chế",
        "vietnamese_example": "Chính phủ đã áp đặt hạn chế xuất khẩu đối với một số sản phẩm.",
        "cefr": "C1"
    },
    "spy": {
        "definition": "a person who tries to get secret information about another country, organization or person, especially somebody who is employed by a government or the police",
        "pos": "noun",
        "pron": "/spaɪ/",
        "example": "He was denounced as a foreign spy.",
        "vietnamese": "điệp viên",
        "vietnamese_example": "Ông bị tố cáo là gián điệp nước ngoài.",
        "cefr": "C1"
    },
    "stability": {
        "definition": "the quality or state of being steady and not changing or being upset in any way (= the quality of being stable)",
        "pos": "noun",
        "pron": "/stəˈbɪləti/",
        "example": "political/economic/social stability",
        "vietnamese": "sự ổn định",
        "vietnamese_example": "ổn định chính trị/kinh tế/xã hội",
        "cefr": "C1"
    },
    "allege": {
        "definition": "to state something as a fact but without giving proof",
        "pos": "verb",
        "pron": "/əˈledʒ/",
        "example": "allege (that)…, The prosecution alleges (that) she was driving carelessly.",
        "vietnamese": "cáo buộc",
        "vietnamese_example": "cáo buộc (rằng)…, Bên công tố cáo buộc (rằng) cô ấy đã lái xe bất cẩn.",
        "cefr": "C1"
    },
    "anonymous": {
        "definition": "with a name that is not known or that is not made public",
        "pos": "adj",
        "pron": "/əˈnɒnɪməs/",
        "example": "an anonymous donor",
        "vietnamese": "vô danh",
        "vietnamese_example": "một nhà tài trợ ẩn danh",
        "cefr": "C1"
    },
    "aspiration": {
        "definition": "a strong desire to have or do something",
        "pos": "noun",
        "pron": "/ˌæspəˈreɪʃn/",
        "example": "I didn't realize you had political aspirations.",
        "vietnamese": "khát vọng",
        "vietnamese_example": "Tôi không nhận ra là anh có tham vọng chính trị.",
        "cefr": "C1"
    },
    "assassination": {
        "definition": "the murder of an important or famous person, especially for political reasons",
        "pos": "noun",
        "pron": "/əˌsæsɪˈneɪʃn/",
        "example": "The president survived a number of assassination attempts.",
        "vietnamese": "vụ ám sát",
        "vietnamese_example": "Tổng thống sống sót sau một số vụ ám sát.",
        "cefr": "C1"
    },
    "assert": {
        "definition": "to state clearly and definitely that something is true",
        "pos": "verb",
        "pron": "/əˈsɜːt/",
        "example": "assert that…, She continued to assert that she was innocent.",
        "vietnamese": "khẳng định",
        "vietnamese_example": "khẳng định rằng…, Cô tiếp tục khẳng định mình vô tội.",
        "cefr": "C1"
    },
    "chamber": {
        "definition": "a hall in a public building that is used for formal meetings",
        "pos": "noun",
        "pron": "/ˈtʃeɪmbə(r)/",
        "example": "The members left the council chamber.",
        "vietnamese": "buồng",
        "vietnamese_example": "Các thành viên rời khỏi phòng hội đồng.",
        "cefr": "C1"
    },
    "collective": {
        "definition": "done or shared by all members of a group of people; involving a whole group or society",
        "pos": "adj",
        "pron": "/kəˈlektɪv/",
        "example": "collective leadership/decision-making/responsibility",
        "vietnamese": "tập thể",
        "vietnamese_example": "lãnh đạo tập thể/ra quyết định/trách nhiệm",
        "cefr": "C1"
    },
    "inequality": {
        "definition": "the unfair difference between groups of people in society, when some have more wealth, status or opportunities than others",
        "pos": "noun",
        "pron": "/ˌɪnɪˈkwɒləti/",
        "example": "We need to tackle inequality of opportunity wherever we find it.",
        "vietnamese": "bất bình đẳng",
        "vietnamese_example": "Chúng ta cần giải quyết sự bất bình đẳng về cơ hội ở bất cứ nơi nào chúng ta tìm thấy nó.",
        "cefr": "C1"
    },
    "socialist": {
        "definition": "connected with socialism",
        "pos": "adj",
        "pron": "/ˈsəʊʃəlɪst/",
        "example": "socialist beliefs",
        "vietnamese": "xã hội chủ nghĩa",
        "vietnamese_example": "niềm tin xã hội chủ nghĩa",
        "cefr": "C1"
    },
    "gathering": {
        "definition": "a meeting of people for a particular purpose",
        "pos": "noun",
        "pron": "/ˈɡæðərɪŋ/",
        "example": "a social/family gathering",
        "vietnamese": "tụ tập",
        "vietnamese_example": "một buổi họp mặt xã hội/gia đình",
        "cefr": "C1"
    },
    "hierarchy": {
        "definition": "a system, especially in a society or an organization, in which people are organized into different levels of importance from highest to lowest",
        "pos": "noun",
        "pron": "/ˈhaɪərɑːki/",
        "example": "the social/political hierarchy",
        "vietnamese": "thứ bậc",
        "vietnamese_example": "thứ bậc xã hội/chính trị",
        "cefr": "C1"
    },
    "buffer": {
        "definition": "a thing or person that reduces a shock or protects somebody/something against difficulties",
        "pos": "noun",
        "pron": "/ˈbʌfə(r)/",
        "example": "buffer against something, Support from family and friends acts as a buffer against stress.",
        "vietnamese": "đệm",
        "vietnamese_example": "đệm chống lại điều gì đó. Sự hỗ trợ từ gia đình và bạn bè đóng vai trò như một lớp đệm chống lại căng thẳng.",
        "cefr": "C1"
    },
    "bulk": {
        "definition": "the main part of something; most of something",
        "pos": "noun",
        "pron": "/bʌlk/",
        "example": "The bulk of the population lives in cities.",
        "vietnamese": "số lượng lớn",
        "vietnamese_example": "Phần lớn dân số sống ở các thành phố.",
        "cefr": "C1"
    },
    "discrimination": {
        "definition": "the practice of treating somebody or a particular group in society less fairly than others",
        "pos": "noun",
        "pron": "/dɪˌskrɪmɪˈneɪʃn/",
        "example": "age/racial/gender/sex discrimination (= because of somebody’s age, race or sex)",
        "vietnamese": "phân biệt",
        "vietnamese_example": "phân biệt tuổi tác/chủng tộc/giới tính/giới tính (= vì tuổi tác, chủng tộc hoặc giới tính của ai đó)",
        "cefr": "C1"
    },
    "elite": {
        "definition": "a small group of people in a society, etc. who are powerful and have a lot of influence, because they are rich, intelligent, etc.",
        "pos": "noun",
        "pron": "/eɪˈliːt/",
        "example": "a member of the ruling/intellectual elite",
        "vietnamese": "ưu tú",
        "vietnamese_example": "một thành viên của giới tinh hoa cai trị/trí thức",
        "cefr": "C1"
    },
    "exclusively": {
        "definition": "for only one particular person, group or use",
        "pos": "adv",
        "pron": "/ɪkˈskluːsɪvli/",
        "example": "The resort caters almost exclusively for a high-society public.",
        "vietnamese": "độc quyền",
        "vietnamese_example": "Khu nghỉ dưỡng hầu như chỉ phục vụ cho tầng lớp thượng lưu.",
        "cefr": "C1"
    },
    "foster": {
        "definition": "to encourage something to develop",
        "pos": "verb",
        "pron": "/ˈfɒstə(r)/",
        "example": "The club's aim is to foster better relations within the community.",
        "vietnamese": "nuôi dưỡng",
        "vietnamese_example": "Mục đích của câu lạc bộ là thúc đẩy mối quan hệ tốt hơn trong cộng đồng.",
        "cefr": "C1"
    },
    "harmony": {
        "definition": "a state of peaceful existence and agreement",
        "pos": "noun",
        "pron": "/ˈhɑːməni/",
        "example": "social/racial harmony",
        "vietnamese": "hòa hợp",
        "vietnamese_example": "sự hòa hợp xã hội/chủng tộc",
        "cefr": "C1"
    },
    "heritage": {
        "definition": "the history, traditions, buildings and objects that a country or society has had for many years and that are considered an important part of its character",
        "pos": "noun",
        "pron": "/ˈherɪtɪdʒ/",
        "example": "Spain’s rich cultural heritage",
        "vietnamese": "di sản",
        "vietnamese_example": "Di sản văn hóa phong phú của Tây Ban Nha",
        "cefr": "C1"
    },
    "indictment": {
        "definition": "a sign that a system, society, etc. is very bad or very wrong",
        "pos": "noun",
        "pron": "/ɪnˈdaɪtmənt/",
        "example": "The poverty in our cities is a damning indictment of modern society.",
        "vietnamese": "bản cáo trạng",
        "vietnamese_example": "Sự nghèo đói ở các thành phố của chúng ta là một bản cáo trạng đáng nguyền rủa đối với xã hội hiện đại.",
        "cefr": "C1"
    },
    "lesbian": {
        "definition": "sexually attracted to other women; connected with lesbians",
        "pos": "adj",
        "pron": "/ˈlezbiən/",
        "example": "the lesbian and gay community",
        "vietnamese": "đồng tính nữ",
        "vietnamese_example": "cộng đồng đồng tính nữ và đồng tính nam",
        "cefr": "C1"
    },
    "manifest": {
        "definition": "to show something clearly, especially a feeling, an attitude or a quality",
        "pos": "verb",
        "pron": "/ˈmænɪfest/",
        "example": "Social tensions were manifested in the recent political crisis.",
        "vietnamese": "biểu hiện",
        "vietnamese_example": "Căng thẳng xã hội được biểu hiện trong cuộc khủng hoảng chính trị gần đây.",
        "cefr": "C1"
    },
    "militant": {
        "definition": "using, or willing to use, force or strong pressure to achieve your aims, especially to achieve social or political change",
        "pos": "adj",
        "pron": "/ˈmɪlɪtənt/",
        "example": "militant groups/leaders",
        "vietnamese": "dân quân",
        "vietnamese_example": "các nhóm chiến binh/thủ lĩnh",
        "cefr": "C1"
    },
    "outsider": {
        "definition": "a person who is not accepted as a member of a society, group, etc.",
        "pos": "noun",
        "pron": "/ˌaʊtˈsaɪdə(r)/",
        "example": "Here she felt she would always be an outsider.",
        "vietnamese": "người ngoài cuộc",
        "vietnamese_example": "Ở đây cô cảm thấy mình sẽ luôn là người ngoài cuộc.",
        "cefr": "C1"
    },
    "projection": {
        "definition": "an estimate or a statement of what figures, amounts, or events will be in the future, or what they were in the past, based on what is happening now",
        "pos": "noun",
        "pron": "/prəˈdʒekʃn/",
        "example": "to make forward/backward projections of population figures",
        "vietnamese": "phép chiếu",
        "vietnamese_example": "để thực hiện các dự đoán tiến/lùi về số liệu dân số",
        "cefr": "C1"
    },
    "residence": {
        "definition": "a house, especially a large or impressive one",
        "pos": "noun",
        "pron": "/ˈrezɪdəns/",
        "example": "a desirable family residence for sale (= for example, in an advertisement)",
        "vietnamese": "nơi cư trú",
        "vietnamese_example": "một nơi cư trú gia đình mong muốn để bán (= ví dụ, trong một quảng cáo)",
        "cefr": "C1"
    },
    "sole": {
        "definition": "only; single",
        "pos": "adj",
        "pron": "/səʊl/",
        "example": "the sole surviving member of the family",
        "vietnamese": "duy nhất",
        "vietnamese_example": "thành viên duy nhất còn sống của gia đình",
        "cefr": "C1"
    },
    "solidarity": {
        "definition": "support by one person or group of people for another because they share feelings, opinions, aims, etc.",
        "pos": "noun",
        "pron": "/ˌsɒlɪˈdærəti/",
        "example": "community solidarity",
        "vietnamese": "sự đoàn kết",
        "vietnamese_example": "đoàn kết cộng đồng",
        "cefr": "C1"
    },
    "supportive": {
        "definition": "encouraging somebody or giving them help or sympathy",
        "pos": "adj",
        "pron": "/səˈpɔːtɪv/",
        "example": "a supportive family",
        "vietnamese": "hỗ trợ",
        "vietnamese_example": "một gia đình hỗ trợ",
        "cefr": "C1"
    },
    "patron": {
        "definition": "a person who gives money and support to artists and writers",
        "pos": "noun",
        "pron": "/ˈpeɪtrən/",
        "example": "Frederick the Great was the patron of many artists.",
        "vietnamese": "người bảo trợ",
        "vietnamese_example": "Frederick Đại đế là người bảo trợ của nhiều nghệ sĩ.",
        "cefr": "C1"
    },
    "inspiration": {
        "definition": "the process that takes place when somebody sees or hears something that causes them to have exciting new ideas or makes them want to create something, especially in art, music or literature",
        "pos": "noun",
        "pron": "/ˌɪnspəˈreɪʃn/",
        "example": "Dreams can be a rich source of inspiration for an artist.",
        "vietnamese": "cảm hứng",
        "vietnamese_example": "Những giấc mơ có thể là nguồn cảm hứng phong phú cho một nghệ sĩ.",
        "cefr": "C1"
    },
    "partial": {
        "definition": "not complete or whole",
        "pos": "adj",
        "pron": "/ˈpɑːʃl/",
        "example": "It was only a partial solution to the problem.",
        "vietnamese": "một phần",
        "vietnamese_example": "Đó chỉ là giải pháp một phần cho vấn đề.",
        "cefr": "C1"
    },
    "partially": {
        "definition": "partly; not completely",
        "pos": "adv",
        "pron": "/ˈpɑːʃəli/",
        "example": "The road was partially blocked by a fallen tree.",
        "vietnamese": "một phần",
        "vietnamese_example": "Con đường bị chặn một phần do cây đổ.",
        "cefr": "C1"
    },
    "bass": {
        "definition": "the lowest tone or part in music, for instruments or voices",
        "pos": "noun",
        "pron": "/beɪs/",
        "example": "He always plays his stereo with the bass turned right up.",
        "vietnamese": "âm trầm",
        "vietnamese_example": "Anh ấy luôn bật âm thanh nổi với âm trầm được bật lên.",
        "cefr": "C1"
    },
    "canvas": {
        "definition": "a strong heavy rough material used for making tents, sails, etc. and by artists for painting on",
        "pos": "noun",
        "pron": "/ˈkænvəs/",
        "example": "tents made from heavy canvas",
        "vietnamese": "vải vẽ",
        "vietnamese_example": "lều làm từ vải bạt nặng",
        "cefr": "C1"
    },
    "entity": {
        "definition": "something that exists separately from other things and has its own identity",
        "pos": "noun",
        "pron": "/ˈentəti/",
        "example": "The unit has become part of a larger department and no longer exists as a separate entity.",
        "vietnamese": "thực thể",
        "vietnamese_example": "Đơn vị này đã trở thành một phần của một bộ phận lớn hơn và không còn tồn tại như một thực thể riêng biệt nữa.",
        "cefr": "C1"
    },
    "merit": {
        "definition": "the quality of being good and of deserving praise or reward",
        "pos": "noun",
        "pron": "/ˈmerɪt/",
        "example": "a work of outstanding artistic merit",
        "vietnamese": "công lao",
        "vietnamese_example": "một tác phẩm có giá trị nghệ thuật xuất sắc",
        "cefr": "C1"
    },
    "opt": {
        "definition": "to choose to take or not to take a particular course of action",
        "pos": "verb",
        "pron": "/ɒpt/",
        "example": "opt for/against something, After graduating she opted for a career in music.",
        "vietnamese": "chọn",
        "vietnamese_example": "lựa chọn ủng hộ/chống lại điều gì đó, Sau khi tốt nghiệp, cô ấy chọn sự nghiệp âm nhạc.",
        "cefr": "C1"
    },
    "sketch": {
        "definition": "a simple picture that is drawn quickly and does not have many details",
        "pos": "noun",
        "pron": "/sketʃ/",
        "example": "The artist is making sketches for his next painting.",
        "vietnamese": "phác họa",
        "vietnamese_example": "Người họa sĩ đang phác thảo cho bức tranh tiếp theo của mình.",
        "cefr": "C1"
    },
    "stereotype": {
        "definition": "a fixed idea or image that many people have of a particular type of person or thing, but which is often not true in reality and may cause hurt and offence",
        "pos": "noun",
        "pron": "/ˈsteriətaɪp/",
        "example": "cultural/gender/racial stereotypes",
        "vietnamese": "khuôn mẫu",
        "vietnamese_example": "định kiến ​​về văn hóa/giới tính/chủng tộc",
        "cefr": "C1"
    },
    "accordingly": {
        "definition": "in a way that is appropriate to what has been done or said in a particular situation",
        "pos": "adv",
        "pron": "/əˈkɔːdɪŋli/",
        "example": "We have to discover his plans and act accordingly.",
        "vietnamese": "tương ứng",
        "vietnamese_example": "Chúng ta phải khám phá kế hoạch của anh ta và hành động phù hợp.",
        "cefr": "C1"
    },
    "alignment": {
        "definition": "arrangement in a straight line",
        "pos": "noun",
        "pron": "/əˈlaɪnmənt/",
        "example": "the alignment of the sun, moon and earth at a particular time",
        "vietnamese": "căn chỉnh",
        "vietnamese_example": "sự thẳng hàng của mặt trời, mặt trăng và trái đất tại một thời điểm cụ thể",
        "cefr": "C1"
    },
    "allocate": {
        "definition": "to give something officially to somebody/something for a particular purpose",
        "pos": "verb",
        "pron": "/ˈæləkeɪt/",
        "example": "allocate something (for something), A large sum has been allocated for buying new books for the library.",
        "vietnamese": "phân bổ",
        "vietnamese_example": "phân bổ cái gì đó (cho cái gì đó), Một khoản tiền lớn đã được phân bổ để mua sách mới cho thư viện.",
        "cefr": "C1"
    },
    "appealing": {
        "definition": "attractive or interesting",
        "pos": "adj",
        "pron": "/əˈpiːlɪŋ/",
        "example": "Spending the holidays in Britain wasn't a prospect that I found particularly appealing.",
        "vietnamese": "hấp dẫn",
        "vietnamese_example": "Việc dành những ngày nghỉ ở Anh không phải là một viễn cảnh mà tôi thấy đặc biệt hấp dẫn.",
        "cefr": "C1"
    },
    "applaud": {
        "definition": "to show your approval of somebody/something by clapping your hands (= hitting your open hands together several times)",
        "pos": "verb",
        "pron": "/əˈplɔːd/",
        "example": "He started to applaud and the others joined in.",
        "vietnamese": "hoan hô",
        "vietnamese_example": "Anh ấy bắt đầu vỗ tay và những người khác cũng tham gia.",
        "cefr": "C1"
    },
    "appreciation": {
        "definition": "pleasure that you have when you recognize and enjoy the good qualities of somebody/something",
        "pos": "noun",
        "pron": "/əˌpriːʃiˈeɪʃn/",
        "example": "She shows little appreciation of good music.",
        "vietnamese": "đánh giá cao",
        "vietnamese_example": "Cô ấy ít thể hiện sự đánh giá cao về âm nhạc hay.",
        "cefr": "C1"
    },
    "breed": {
        "definition": "a particular type of animal that has been developed by people in a certain way, especially a type of dog, cat or farm animal",
        "pos": "noun",
        "pron": "/briːd/",
        "example": "Labradors and other large breeds of dog",
        "vietnamese": "giống",
        "vietnamese_example": "Labradors và các giống chó lớn khác",
        "cefr": "C1"
    },
    "characterize": {
        "definition": "to be typical of a person, place or thing",
        "pos": "verb",
        "pron": "/ˈkærəktəraɪz/",
        "example": "the rolling hills that characterize this part of England",
        "vietnamese": "mô tả đặc điểm",
        "vietnamese_example": "những ngọn đồi nhấp nhô đặc trưng cho vùng này của nước Anh",
        "cefr": "C1"
    },
    "chronic": {
        "definition": "lasting for a long time; difficult to cure",
        "pos": "adj",
        "pron": "/ˈkrɒnɪk/",
        "example": "chronic bronchitis/arthritis/asthma",
        "vietnamese": "mãn tính",
        "vietnamese_example": "viêm phế quản mãn tính/viêm khớp/hen suyễn",
        "cefr": "C1"
    },
    "classification": {
        "definition": "the act or process of putting people or things into a group or class (= of classifying them)",
        "pos": "noun",
        "pron": "/ˌklæsɪfɪˈkeɪʃn/",
        "example": "a style of music that defies classification (= is like no other)",
        "vietnamese": "phân loại",
        "vietnamese_example": "một phong cách âm nhạc bất chấp sự phân loại (= không giống ai)",
        "cefr": "C1"
    },
    "conceive": {
        "definition": "to form an idea, a plan, etc. in your mind",
        "pos": "verb",
        "pron": "/kənˈsiːv/",
        "example": "He conceived the idea of transforming the old power station into an arts centre.",
        "vietnamese": "thụ thai",
        "vietnamese_example": "Ông nảy ra ý tưởng biến nhà máy điện cũ thành một trung tâm nghệ thuật.",
        "cefr": "C1"
    },
    "crawl": {
        "definition": "to move forward on your hands and knees or with your body close to the ground",
        "pos": "verb",
        "pron": "/krɔːl/",
        "example": "Our baby is just starting to crawl.",
        "vietnamese": "thu thập thông tin",
        "vietnamese_example": "Con của chúng tôi mới bắt đầu bò.",
        "cefr": "C1"
    },
    "creator": {
        "definition": "a person who has made or invented a particular thing",
        "pos": "noun",
        "pron": "/kriˈeɪtə(r)/",
        "example": "Walt Disney, the creator of Mickey Mouse",
        "vietnamese": "người sáng tạo",
        "vietnamese_example": "Walt Disney, cha đẻ của chuột Mickey",
        "cefr": "C1"
    },
    "cult": {
        "definition": "very popular with a particular group of people",
        "pos": "adj",
        "pron": "/kʌlt/",
        "example": "a cult movie/book",
        "vietnamese": "giáo phái",
        "vietnamese_example": "một bộ phim/cuốn sách đình đám",
        "cefr": "C1"
    },
    "decisive": {
        "definition": "very important for the final result of a particular situation",
        "pos": "adj",
        "pron": "/dɪˈsaɪsɪv/",
        "example": "a decisive factor/victory/battle",
        "vietnamese": "quyết định",
        "vietnamese_example": "yếu tố quyết định/chiến thắng/trận chiến",
        "cefr": "C1"
    },
    "deem": {
        "definition": "to have a particular opinion about somebody/something",
        "pos": "verb",
        "pron": "/diːm/",
        "example": "deem somebody/something + noun, The evening was deemed a great success.",
        "vietnamese": "cho là",
        "vietnamese_example": "coi ai đó/cái gì đó + danh từ, Buổi tối được coi là một thành công lớn.",
        "cefr": "C1"
    },
    "designate": {
        "definition": "to say officially that somebody/something has a particular character or name; to describe somebody/something in a particular way",
        "pos": "verb",
        "pron": "/ˈdezɪɡneɪt/",
        "example": "be designated (as) something, This area has been designated (as) a National Park.",
        "vietnamese": "chỉ định",
        "vietnamese_example": "được chỉ định (là) một cái gì đó, Khu vực này đã được chỉ định (là) một Công viên Quốc gia.",
        "cefr": "C1"
    },
    "dissolve": {
        "definition": "to mix with a liquid and become part of it",
        "pos": "verb",
        "pron": "/dɪˈzɒlv/",
        "example": "Salt dissolves in water.",
        "vietnamese": "hòa tan",
        "vietnamese_example": "Muối hòa tan trong nước.",
        "cefr": "C1"
    },
    "distinction": {
        "definition": "a clear difference or contrast especially between people or things that are similar or related",
        "pos": "noun",
        "pron": "/dɪˈstɪŋkʃn/",
        "example": "distinctions between traditional and modern societies",
        "vietnamese": "sự phân biệt",
        "vietnamese_example": "sự khác biệt giữa xã hội truyền thống và xã hội hiện đại",
        "cefr": "C1"
    },
    "dual": {
        "definition": "having two parts or aspects",
        "pos": "adj",
        "pron": "/ˈdjuːəl/",
        "example": "his dual role as composer and conductor",
        "vietnamese": "hai",
        "vietnamese_example": "vai trò kép của ông là nhà soạn nhạc và nhạc trưởng",
        "cefr": "C1"
    },
    "dynamic": {
        "definition": "the way in which people or things behave and react to each other in a particular situation",
        "pos": "noun",
        "pron": "/daɪˈnæmɪk/",
        "example": "the dynamics of political change",
        "vietnamese": "năng động",
        "vietnamese_example": "động lực của sự thay đổi chính trị",
        "cefr": "C1"
    },
    "toll": {
        "definition": "money that you pay to use a particular road or bridge",
        "pos": "noun",
        "pron": "/təʊl/",
        "example": "motorway tolls",
        "vietnamese": "số điện thoại",
        "vietnamese_example": "phí đường cao tốc",
        "cefr": "C1"
    },
    "pipeline": {
        "definition": "a series of pipes that are usually underground and are used for carrying oil, gas, etc. over long distances",
        "pos": "noun",
        "pron": "/ˈpaɪplaɪn/",
        "example": "There are plans to lay a gas pipeline through the region.",
        "vietnamese": "đường ống",
        "vietnamese_example": "Có kế hoạch xây dựng một đường ống dẫn khí xuyên qua khu vực.",
        "cefr": "C1"
    },
    "trail": {
        "definition": "a long line or series of marks that is left by somebody/something",
        "pos": "noun",
        "pron": "/treɪl/",
        "example": "a trail of blood",
        "vietnamese": "dấu vết",
        "vietnamese_example": "một vệt máu",
        "cefr": "C1"
    },
    "trailer": {
        "definition": "a truck, or a container with wheels, that is pulled by another vehicle",
        "pos": "noun",
        "pron": "/ˈtreɪlə(r)/",
        "example": "a car towing a trailer with a boat on it",
        "vietnamese": "đoạn phim giới thiệu",
        "vietnamese_example": "một chiếc ô tô kéo một chiếc xe kéo có một chiếc thuyền trên đó",
        "cefr": "C1"
    },
    "adaptation": {
        "definition": "the action or process of changing something, or of being changed, to suit a new purpose or situation",
        "pos": "noun",
        "pron": "/ˌædæpˈteɪʃn/",
        "example": "the adaptation of buildings for military purposes",
        "vietnamese": "sự thích ứng",
        "vietnamese_example": "sự thích ứng của các tòa nhà cho mục đích quân sự",
        "cefr": "C1"
    },
    "aftermath": {
        "definition": "the situation that exists as a result of an important (and usually unpleasant) event, especially a war, an accident, etc.",
        "pos": "noun",
        "pron": "/ˈɑːftəmæθ/",
        "example": "in the aftermath of something, A lot of rebuilding took place in the aftermath of the war.",
        "vietnamese": "hậu quả",
        "vietnamese_example": "sau một điều gì đó, Rất nhiều công trình xây dựng lại đã diễn ra sau hậu quả của chiến tranh.",
        "cefr": "C1"
    },
    "architectural": {
        "definition": "relating to architecture and buildings",
        "pos": "adj",
        "pron": "/ˌɑːkɪˈtektʃərəl/",
        "example": "architectural features",
        "vietnamese": "kiến trúc",
        "vietnamese_example": "đặc điểm kiến ​​trúc",
        "cefr": "C1"
    },
    "carriage": {
        "definition": "a separate section of a train for carrying passengers",
        "pos": "noun",
        "pron": "/ˈkærɪdʒ/",
        "example": "a railway carriage",
        "vietnamese": "xe",
        "vietnamese_example": "toa xe lửa",
        "cefr": "C1"
    },
    "casualty": {
        "definition": "a person who is killed or injured in war or in an accident",
        "pos": "noun",
        "pron": "/ˈkæʒuəlti/",
        "example": "Our primary objective is reducing road casualties.",
        "vietnamese": "tai nạn",
        "vietnamese_example": "Mục tiêu chính của chúng tôi là giảm thương vong trên đường.",
        "cefr": "C1"
    },
    "debris": {
        "definition": "pieces of wood, metal, building materials, etc. that are left after something has been destroyed",
        "pos": "noun",
        "pron": "/ˈdebriː/",
        "example": "Emergency teams are still clearing the debris from the plane crash.",
        "vietnamese": "mảnh vụn",
        "vietnamese_example": "Các đội cứu hộ vẫn đang dọn dẹp các mảnh vỡ từ vụ tai nạn máy bay.",
        "cefr": "C1"
    },
    "exit": {
        "definition": "to go out; to leave a building, stage, vehicle, etc.",
        "pos": "verb",
        "pron": "/ˈeksɪt/",
        "example": "(+ adv./prep.), The bullet entered her back and exited through her chest.",
        "vietnamese": "ra",
        "vietnamese_example": "(+ adv./prep.), Viên đạn găm vào lưng và xuyên qua ngực cô.",
        "cefr": "C1"
    },
    "grin": {
        "definition": "a wide smile",
        "pos": "noun",
        "pron": "/ɡrɪn/",
        "example": "She gave a broad grin.",
        "vietnamese": "cười toe toét",
        "vietnamese_example": "Cô ấy cười toe toét.",
        "cefr": "C1"
    },
    "hint": {
        "definition": "something that you say or do in an indirect way in order to show somebody what you are thinking",
        "pos": "noun",
        "pron": "/hɪnt/",
        "example": "He gave a broad hint (= one that was obvious) that he was thinking of retiring.",
        "vietnamese": "gợi ý",
        "vietnamese_example": "Anh ấy đã đưa ra một gợi ý rộng rãi (= một điều hiển nhiên) rằng anh ấy đang nghĩ đến việc nghỉ hưu.",
        "cefr": "C1"
    },
    "hook": {
        "definition": "to fasten or hang something on something else using a hook; to be fastened or hanging in this way",
        "pos": "verb",
        "pron": "/hʊk/",
        "example": "hook something + adv./prep., We hooked the trailer to the back of the car.",
        "vietnamese": "cái móc",
        "vietnamese_example": "móc thứ gì đó + adv./prep., Chúng tôi móc rơ-moóc vào sau xe.",
        "cefr": "C1"
    },
    "landmark": {
        "definition": "something, such as a large building, that you can see clearly from a distance and that will help you to know where you are",
        "pos": "noun",
        "pron": "/ˈlændmɑːk/",
        "example": "The Empire State Building is a familiar landmark on the New York skyline.",
        "vietnamese": "cột mốc",
        "vietnamese_example": "Tòa nhà Empire State là một địa danh quen thuộc trên đường chân trời của New York.",
        "cefr": "C1"
    },
    "layout": {
        "definition": "the way in which the parts of something such as the page of a book, a website, a garden or a building are arranged",
        "pos": "noun",
        "pron": "/ˈleɪaʊt/",
        "example": "the layout of streets",
        "vietnamese": "cách trình bày",
        "vietnamese_example": "cách bố trí đường phố",
        "cefr": "C1"
    },
    "loop": {
        "definition": "a shape like a curve or circle made by a line curving right round",
        "pos": "noun",
        "pron": "/luːp/",
        "example": "The road went in a huge loop around the lake.",
        "vietnamese": "vòng lặp",
        "vietnamese_example": "Con đường đi thành một vòng lớn quanh hồ.",
        "cefr": "C1"
    },
    "mill": {
        "definition": "a building fitted with equipment for grinding grain into flour; a machine for grinding grain",
        "pos": "noun",
        "pron": "/mɪl/",
        "example": "The old mill has been converted into apartments.",
        "vietnamese": "cối xay",
        "vietnamese_example": "Nhà máy cũ đã được chuyển đổi thành căn hộ.",
        "cefr": "C1"
    },
    "neglect": {
        "definition": "the fact of not giving enough care or attention to something/somebody; the state of not receiving enough care or attention",
        "pos": "noun",
        "pron": "/nɪˈɡlekt/",
        "example": "The buildings are crumbling from years of neglect.",
        "vietnamese": "sao nhãng",
        "vietnamese_example": "Những tòa nhà đang đổ nát sau nhiều năm bị bỏ quên.",
        "cefr": "C1"
    },
    "nest": {
        "definition": "a hollow place or structure that a bird makes or chooses for laying its eggs in and sheltering its young",
        "pos": "noun",
        "pron": "/nest/",
        "example": "sparrows building a nest of twigs and dry grass",
        "vietnamese": "tổ",
        "vietnamese_example": "chim sẻ làm tổ bằng cành cây và cỏ khô",
        "cefr": "C1"
    },
    "patrol": {
        "definition": "the act of going to different parts of a building, an area, etc. to make sure that there is no trouble or crime",
        "pos": "noun",
        "pron": "/pəˈtrəʊl/",
        "example": "Security guards make regular patrols at night.",
        "vietnamese": "tuần tra",
        "vietnamese_example": "Nhân viên bảo vệ thường xuyên tuần tra vào ban đêm.",
        "cefr": "C1"
    },
    "reside": {
        "definition": "to live in a particular place",
        "pos": "verb",
        "pron": "/rɪˈzaɪd/",
        "example": "He returned to Britain in 1939, having resided abroad for many years.",
        "vietnamese": "cư trú",
        "vietnamese_example": "Ông trở lại Anh vào năm 1939 và cư trú ở nước ngoài nhiều năm.",
        "cefr": "C1"
    },
    "restoration": {
        "definition": "the work of repairing and cleaning an old building, a painting, etc. so that its condition is as good as it originally was",
        "pos": "noun",
        "pron": "/ˌrestəˈreɪʃn/",
        "example": "restoration work",
        "vietnamese": "phục hồi",
        "vietnamese_example": "công việc phục hồi",
        "cefr": "C1"
    },
    "stem": {
        "definition": "the main long, thin part of a plant above the ground from which the leaves or flowers grow; a smaller part that grows from this and supports flowers or leaves",
        "pos": "noun",
        "pron": "/stem/",
        "example": "long, trailing stems of ivy",
        "vietnamese": "thân cây",
        "vietnamese_example": "thân cây thường xuân dài và dài",
        "cefr": "C1"
    },
    "strain": {
        "definition": "pressure on a system or relationship because great demands are being placed on it",
        "pos": "noun",
        "pron": "/streɪn/",
        "example": "The transport service cannot cope with the strain of so many additional passengers.",
        "vietnamese": "sự căng thẳng",
        "vietnamese_example": "Dịch vụ vận tải không thể đối phó với sự căng thẳng của quá nhiều hành khách bổ sung.",
        "cefr": "C1"
    },
    "supervise": {
        "definition": "to be in charge of somebody/something and make sure that everything is done correctly, safely, etc.",
        "pos": "verb",
        "pron": "/ˈsuːpəvaɪz/",
        "example": "supervise (somebody/something), to supervise building work",
        "vietnamese": "giám sát",
        "vietnamese_example": "giám sát (ai/cái gì), giám sát công việc xây dựng",
        "cefr": "C1"
    },
    "tenant": {
        "definition": "a person who pays rent for the use of a room, building, land, etc. to the person who owns it",
        "pos": "noun",
        "pron": "/ˈtenənt/",
        "example": "They had evicted their tenants for non-payment of rent.",
        "vietnamese": "người thuê nhà",
        "vietnamese_example": "Họ đã đuổi người thuê nhà vì không trả tiền thuê nhà.",
        "cefr": "C1"
    },
    "thankfully": {
        "definition": "used to show that you are pleased that something good has happened or that something bad has been avoided",
        "pos": "adv",
        "pron": "/ˈθæŋkfəli/",
        "example": "There was a fire in the building, but thankfully no one was hurt.",
        "vietnamese": "thật may mắn",
        "vietnamese_example": "Đã xảy ra hỏa hoạn trong tòa nhà nhưng rất may không có ai bị thương.",
        "cefr": "C1"
    },
    "threshold": {
        "definition": "the floor or ground at the bottom of a doorway, considered as the entrance to a building or room",
        "pos": "noun",
        "pron": "/ˈθreʃhəʊld/",
        "example": "He stepped across the threshold.",
        "vietnamese": "ngưỡng",
        "vietnamese_example": "Anh bước qua ngưỡng cửa.",
        "cefr": "C1"
    },
    "timber": {
        "definition": "trees that are grown to be used in building or for making things",
        "pos": "noun",
        "pron": "/ˈtɪmbə(r)/",
        "example": "the timber industry",
        "vietnamese": "gỗ",
        "vietnamese_example": "ngành công nghiệp gỗ",
        "cefr": "C1"
    },
    "utilize": {
        "definition": "to use something, especially for a practical purpose",
        "pos": "verb",
        "pron": "/ˈjuːtəlaɪz/",
        "example": "The Romans were the first to utilize concrete as a building material.",
        "vietnamese": "sử dụng",
        "vietnamese_example": "Người La Mã là những người đầu tiên sử dụng bê tông làm vật liệu xây dựng.",
        "cefr": "C1"
    },
    "warehouse": {
        "definition": "a building where large quantities of goods are stored, especially before they are sent to shops to be sold",
        "pos": "noun",
        "pron": "/ˈweəhaʊs/",
        "example": "Police are investigating a fire at a furniture warehouse.",
        "vietnamese": "kho",
        "vietnamese_example": "Cảnh sát đang điều tra vụ cháy tại kho đồ nội thất.",
        "cefr": "C1"
    },
    "junction": {
        "definition": "the place where two or more roads or railway lines meet",
        "pos": "noun",
        "pron": "/ˈdʒʌŋkʃn/",
        "example": "It was near the junction of City Road and Old Street.",
        "vietnamese": "ngã ba",
        "vietnamese_example": "Nó nằm gần ngã ba đường City và Old Street.",
        "cefr": "C1"
    },
    "morality": {
        "definition": "principles relating to right and wrong or good and bad behaviour",
        "pos": "noun",
        "pron": "/məˈræləti/",
        "example": "matters of public/private morality",
        "vietnamese": "đạo đức",
        "vietnamese_example": "vấn đề đạo đức công/riêng",
        "cefr": "C1"
    },
    "fairness": {
        "definition": "the quality of treating people equally or in a way that is reasonable",
        "pos": "noun",
        "pron": "/ˈfeənəs/",
        "example": "The fairness of the judicial system is being questioned.",
        "vietnamese": "sự công bằng",
        "vietnamese_example": "Sự công bằng của hệ thống tư pháp đang bị đặt dấu hỏi.",
        "cefr": "C1"
    },
    "cynical": {
        "definition": "believing that people only do things to help themselves rather than for good or honest reasons",
        "pos": "adj",
        "pron": "/ˈsɪnɪkl/",
        "example": "a cynical view/smile",
        "vietnamese": "hoài nghi",
        "vietnamese_example": "một cái nhìn/nụ cười hoài nghi",
        "cefr": "C1"
    },
    "decision-making": {
        "definition": "the process of deciding about something important, especially in a group of people or in an organization",
        "pos": "noun",
        "pron": "/dɪˈsɪʒn meɪkɪŋ/",
        "example": "responsibility for decision-making",
        "vietnamese": "ra quyết định",
        "vietnamese_example": "trách nhiệm đưa ra quyết định",
        "cefr": "C1"
    },
    "dilemma": {
        "definition": "a situation that makes problems, often one in which you have to make a very difficult choice between things of equal importance",
        "pos": "noun",
        "pron": "/dɪˈlemə/",
        "example": "I could see no way of resolving this moral dilemma.",
        "vietnamese": "vấn đề nan giải",
        "vietnamese_example": "Tôi không thể tìm ra cách nào để giải quyết vấn đề nan giải về mặt đạo đức này.",
        "cefr": "C1"
    },
    "distort": {
        "definition": "to change the shape, appearance or sound of something so that it is strange or not clear",
        "pos": "verb",
        "pron": "/dɪˈstɔːt/",
        "example": "a fairground mirror that distorts your shape",
        "vietnamese": "bóp méo",
        "vietnamese_example": "một tấm gương công bằng làm biến dạng hình dạng của bạn",
        "cefr": "C1"
    },
    "frankly": {
        "definition": "in an honest and direct way that people might not like",
        "pos": "adv",
        "pron": "/ˈfræŋkli/",
        "example": "He spoke frankly about the ordeal.",
        "vietnamese": "thẳng thắn",
        "vietnamese_example": "Anh đã thẳng thắn nói về thử thách này.",
        "cefr": "C1"
    },
    "harsh": {
        "definition": "cruel, severe and unkind",
        "pos": "adj",
        "pron": "/hɑːʃ/",
        "example": "The punishment was harsh and unfair.",
        "vietnamese": "thô ráp",
        "vietnamese_example": "Hình phạt thật khắc nghiệt và bất công.",
        "cefr": "C1"
    },
    "legitimate": {
        "definition": "for which there is a fair and acceptable reason",
        "pos": "adj",
        "pron": "/lɪˈdʒɪtɪmət/",
        "example": "a legitimate grievance",
        "vietnamese": "hợp pháp",
        "vietnamese_example": "khiếu nại chính đáng",
        "cefr": "C1"
    },
    "manipulate": {
        "definition": "to control or influence somebody/something, often in a dishonest way so that they do not realize it",
        "pos": "verb",
        "pron": "/məˈnɪpjuleɪt/",
        "example": "manipulate somebody/something, She uses her charm to manipulate people.",
        "vietnamese": "thao túng",
        "vietnamese_example": "thao túng ai/thứ gì đó, Cô ấy dùng sự quyến rũ của mình để thao túng mọi người.",
        "cefr": "C1"
    },
    "noble": {
        "definition": "having or showing fine personal qualities that people admire, such as courage, honesty and care for others",
        "pos": "adj",
        "pron": "/ˈnəʊbl/",
        "example": "a noble leader",
        "vietnamese": "cao quý",
        "vietnamese_example": "một nhà lãnh đạo cao quý",
        "cefr": "C1"
    },
    "parental": {
        "definition": "connected with a parent or parents",
        "pos": "adj",
        "pron": "/pəˈrentl/",
        "example": "parental responsibility/rights",
        "vietnamese": "cha mẹ",
        "vietnamese_example": "trách nhiệm/quyền của cha mẹ",
        "cefr": "C1"
    },
    "sin": {
        "definition": "an offence against God or against a religious or moral law",
        "pos": "noun",
        "pron": "/sɪn/",
        "example": "to commit a sin",
        "vietnamese": "tội lỗi",
        "vietnamese_example": "phạm tội",
        "cefr": "C1"
    },
    "suspicion": {
        "definition": "a feeling that somebody has done something wrong, illegal or dishonest, even though you have no proof",
        "pos": "noun",
        "pron": "/səˈspɪʃn/",
        "example": "They drove away slowly to avoid arousing suspicion.",
        "vietnamese": "sự nghi ngờ",
        "vietnamese_example": "Họ lái xe đi từ từ để tránh gây nghi ngờ.",
        "cefr": "C1"
    },
    "uphold": {
        "definition": "to support something that you think is right and make sure that it continues to exist",
        "pos": "verb",
        "pron": "/ʌpˈhəʊld/",
        "example": "We have a duty to uphold the law.",
        "vietnamese": "ủng hộ",
        "vietnamese_example": "Chúng ta có nhiệm vụ phải tuân thủ luật pháp.",
        "cefr": "C1"
    },
    "virtue": {
        "definition": "behaviour or attitudes that show high moral standards",
        "pos": "noun",
        "pron": "/ˈvɜːtʃuː/",
        "example": "He led a life of virtue.",
        "vietnamese": "đức hạnh",
        "vietnamese_example": "Ông đã sống một cuộc đời đức hạnh.",
        "cefr": "C1"
    },
    "reasoning": {
        "definition": "the process of thinking about things in a logical way; opinions and ideas that are based on logical thinking",
        "pos": "noun",
        "pron": "/ˈriːzənɪŋ/",
        "example": "What is the reasoning behind this decision?",
        "vietnamese": "lý luận",
        "vietnamese_example": "Lý do đằng sau quyết định này là gì?",
        "cefr": "C1"
    },
    "contradiction": {
        "definition": "a lack of agreement between facts, opinions, actions, etc.",
        "pos": "noun",
        "pron": "/ˌkɒntrəˈdɪkʃn/",
        "example": "contradiction (between A and B), There is a contradiction between the two sets of figures.",
        "vietnamese": "mâu thuẫn",
        "vietnamese_example": "mâu thuẫn (giữa A và B), Có sự mâu thuẫn giữa hai tập hợp hình.",
        "cefr": "C1"
    },
    "ideological": {
        "definition": "based on or connected with an ideology",
        "pos": "adj",
        "pron": "/ˌaɪdiəˈlɒdʒɪkl/",
        "example": "ideological differences",
        "vietnamese": "tư tưởng",
        "vietnamese_example": "sự khác biệt về ý thức hệ",
        "cefr": "C1"
    },
    "arguably": {
        "definition": "used (often before a comparative or superlative adjective) when you are stating an opinion that you believe you could give reasons to support",
        "pos": "adv",
        "pron": "/ˈɑːɡjuəbli/",
        "example": "He is arguably the best actor of his generation.",
        "vietnamese": "có thể nói là",
        "vietnamese_example": "Anh ấy được cho là diễn viên xuất sắc nhất trong thế hệ của mình.",
        "cefr": "C1"
    },
    "premise": {
        "definition": "a statement or an idea that forms the basis for a reasonable line of argument",
        "pos": "noun",
        "pron": "/ˈpremɪs/",
        "example": "the basic premise of her argument",
        "vietnamese": "tiền đề",
        "vietnamese_example": "tiền đề cơ bản của lập luận của cô ấy",
        "cefr": "C1"
    },
    "rational": {
        "definition": "based on reason rather than emotions",
        "pos": "adj",
        "pron": "/ˈræʃnəl/",
        "example": "a rational argument/choice/decision",
        "vietnamese": "hợp lý",
        "vietnamese_example": "một lập luận/lựa chọn/quyết định hợp lý",
        "cefr": "C1"
    },
    "absurd": {
        "definition": "extremely silly; not logical and sensible",
        "pos": "adj",
        "pron": "/əbˈsɜːd/",
        "example": "That uniform makes the guards look absurd.",
        "vietnamese": "vô lý",
        "vietnamese_example": "Bộ đồng phục đó khiến lính canh trông thật lố bịch.",
        "cefr": "C1"
    },
    "authentic": {
        "definition": "known to be real and what somebody claims it is and not a copy",
        "pos": "adj",
        "pron": "/ɔːˈθentɪk/",
        "example": "I don't know if the painting is authentic.",
        "vietnamese": "thật",
        "vietnamese_example": "Tôi không biết bức tranh có phải là thật không.",
        "cefr": "C1"
    },
    "concession": {
        "definition": "something that you allow or do, or allow somebody to have, in order to end an argument or to make a situation less difficult",
        "pos": "noun",
        "pron": "/kənˈseʃn/",
        "example": "The firm will be forced to make concessions if it wants to avoid a strike.",
        "vietnamese": "nhượng bộ",
        "vietnamese_example": "Công ty sẽ buộc phải nhượng bộ nếu muốn tránh một cuộc đình công.",
        "cefr": "C1"
    },
    "confer": {
        "definition": "to discuss something with somebody, in order to exchange opinions or get advice",
        "pos": "verb",
        "pron": "/kənˈfɜː(r)/",
        "example": "He wanted to confer with his colleagues before reaching a decision.",
        "vietnamese": "trao",
        "vietnamese_example": "Anh ấy muốn trao đổi với các đồng nghiệp trước khi đưa ra quyết định.",
        "cefr": "C1"
    },
    "confrontation": {
        "definition": "a situation in which there is anger between people or groups who disagree because they have different opinions",
        "pos": "noun",
        "pron": "/ˌkɒnfrʌnˈteɪʃn/",
        "example": "confrontation (with somebody), She wanted to avoid another confrontation with her father.",
        "vietnamese": "sự đối đầu",
        "vietnamese_example": "đối đầu (với ai đó), Cô muốn tránh một cuộc đối đầu khác với cha mình.",
        "cefr": "C1"
    },
    "consistency": {
        "definition": "the quality of always behaving in the same way or of having the same opinions, standard, etc.; the quality of being consistent",
        "pos": "noun",
        "pron": "/kənˈsɪstənsi/",
        "example": "She has played with great consistency all season.",
        "vietnamese": "tính nhất quán",
        "vietnamese_example": "Cô ấy đã chơi rất ổn định trong suốt mùa giải.",
        "cefr": "C1"
    },
    "counter": {
        "definition": "to reply to somebody by trying to prove that what they said is not true",
        "pos": "verb",
        "pron": "/ˈkaʊntə(r)/",
        "example": "counter somebody/something, Such arguments are not easily countered.",
        "vietnamese": "quầy tính tiền",
        "vietnamese_example": "phản đối ai/cái gì, Những lập luận như vậy không dễ dàng bị phản bác.",
        "cefr": "C1"
    },
    "dignity": {
        "definition": "a calm and serious manner that deserves respect",
        "pos": "noun",
        "pron": "/ˈdɪɡnəti/",
        "example": "She accepted the criticism with quiet dignity.",
        "vietnamese": "phẩm giá",
        "vietnamese_example": "Cô chấp nhận những lời chỉ trích với thái độ nghiêm túc.",
        "cefr": "C1"
    },
    "ensue": {
        "definition": "to happen after or as a result of another event",
        "pos": "verb",
        "pron": "/ɪnˈsjuː/",
        "example": "An argument ensued.",
        "vietnamese": "xảy ra sau đó",
        "vietnamese_example": "Một cuộc tranh cãi xảy ra sau đó.",
        "cefr": "C1"
    },
    "justification": {
        "definition": "a good reason why something exists or is done",
        "pos": "noun",
        "pron": "/ˌdʒʌstɪfɪˈkeɪʃn/",
        "example": "justification for doing something, I can see no possible justification for any further tax increases.",
        "vietnamese": "sự biện minh",
        "vietnamese_example": "biện minh cho việc làm điều gì đó, tôi không thấy có lý do biện minh nào cho việc tăng thuế thêm nữa.",
        "cefr": "C1"
    },
    "liberal": {
        "definition": "willing to understand and respect other people’s behaviour, opinions, etc., especially when they are different from your own; believing people should be able to choose how they behave",
        "pos": "adj",
        "pron": "/ˈlɪbərəl/",
        "example": "liberal attitudes/views/opinions",
        "vietnamese": "tự do",
        "vietnamese_example": "thái độ/quan điểm/ý kiến ​​tự do",
        "cefr": "C1"
    },
    "logic": {
        "definition": "a way of thinking or explaining something",
        "pos": "noun",
        "pron": "/ˈlɒdʒɪk/",
        "example": "I fail to see the logic behind his argument.",
        "vietnamese": "logic",
        "vietnamese_example": "Tôi không thấy logic đằng sau lập luận của anh ấy.",
        "cefr": "C1"
    },
    "meditation": {
        "definition": "the practice of focusing your mind in silence, especially for religious reasons or in order to make your mind calm",
        "pos": "noun",
        "pron": "/ˌmedɪˈteɪʃn/",
        "example": "She found peace through yoga and meditation.",
        "vietnamese": "thiền định",
        "vietnamese_example": "Cô tìm thấy sự bình yên nhờ yoga và thiền định.",
        "cefr": "C1"
    },
    "motive": {
        "definition": "a reason for doing something",
        "pos": "noun",
        "pron": "/ˈməʊtɪv/",
        "example": "There seemed to be no motive for the murder.",
        "vietnamese": "động cơ",
        "vietnamese_example": "Dường như không có động cơ giết người.",
        "cefr": "C1"
    },
    "objection": {
        "definition": "a reason why you do not like or are opposed to something; a statement about this",
        "pos": "noun",
        "pron": "/əbˈdʒekʃn/",
        "example": "I'd like to come too, if you have no objection.",
        "vietnamese": "phản đối",
        "vietnamese_example": "Tôi cũng muốn đi nếu bạn không phản đối.",
        "cefr": "C1"
    },
    "persist": {
        "definition": "to continue to do something despite difficulties or opposition, in a way that can seem unreasonable",
        "pos": "verb",
        "pron": "/pəˈsɪst/",
        "example": "persist in doing something, Why do you persist in blaming yourself for what happened?",
        "vietnamese": "kiên trì",
        "vietnamese_example": "kiên trì làm điều gì đó, Tại sao bạn cứ cố chấp tự trách mình về những chuyện đã xảy ra?",
        "cefr": "C1"
    },
    "poll": {
        "definition": "the process of questioning people who are representative of a larger group in order to get information about the general opinion",
        "pos": "noun",
        "pron": "/pəʊl/",
        "example": "to carry out/conduct a poll",
        "vietnamese": "thăm dò ý kiến",
        "vietnamese_example": "thực hiện/tiến hành một cuộc thăm dò ý kiến",
        "cefr": "C1"
    },
    "prejudice": {
        "definition": "an unreasonable dislike of or preference for a person, group, custom, etc., especially when it is based on their race, religion, sex, etc.",
        "pos": "noun",
        "pron": "/ˈpredʒədɪs/",
        "example": "a victim of racial prejudice",
        "vietnamese": "định kiến",
        "vietnamese_example": "nạn nhân của định kiến ​​chủng tộc",
        "cefr": "C1"
    },
    "say": {
        "definition": "the right to influence something by giving your opinion before a decision is made",
        "pos": "noun",
        "pron": "/seɪ/",
        "example": "say (in something), We had no say in the decision to sell the company.",
        "vietnamese": "nói",
        "vietnamese_example": "nói (trong điều gì đó), Chúng tôi không có tiếng nói gì trong quyết định bán công ty.",
        "cefr": "C1"
    },
    "sceptical": {
        "definition": "having doubts that a claim or statement is true or that something will happen",
        "pos": "adj",
        "pron": "/ˈskeptɪkl/",
        "example": "She looked highly sceptical.",
        "vietnamese": "hoài nghi",
        "vietnamese_example": "Cô ấy trông rất hoài nghi.",
        "cefr": "C1"
    },
    "scrutiny": {
        "definition": "careful and complete examination",
        "pos": "noun",
        "pron": "/ˈskruːtəni/",
        "example": "Her argument doesn't really stand up to scrutiny.",
        "vietnamese": "sự xem xét kỹ lưỡng",
        "vietnamese_example": "Lập luận của cô ấy không thực sự đứng vững trước sự xem xét kỹ lưỡng.",
        "cefr": "C1"
    },
    "sentiment": {
        "definition": "a feeling or an opinion, especially one based on emotions",
        "pos": "noun",
        "pron": "/ˈsentɪmənt/",
        "example": "the spread of nationalist sentiments",
        "vietnamese": "tình cảm",
        "vietnamese_example": "sự lan rộng của tình cảm dân tộc",
        "cefr": "C1"
    },
    "sovereignty": {
        "definition": "complete power to govern a country",
        "pos": "noun",
        "pron": "/ˈsɒvrənti/",
        "example": "The country claimed sovereignty over the island.",
        "vietnamese": "chủ quyền",
        "vietnamese_example": "Nước này tuyên bố chủ quyền đối với hòn đảo này.",
        "cefr": "C1"
    },
    "sue": {
        "definition": "to make a claim against a person or an organization in court about something that they have said or done to harm you",
        "pos": "verb",
        "pron": "/suː/",
        "example": "They threatened to sue if the work was not completed.",
        "vietnamese": "kiện",
        "vietnamese_example": "Họ dọa sẽ kiện nếu công việc không hoàn thành.",
        "cefr": "C1"
    },
    "tolerance": {
        "definition": "the quality of being willing to accept or tolerate somebody/something, especially opinions or behaviour that you may not agree with, or people who are not like you",
        "pos": "noun",
        "pron": "/ˈtɒlərəns/",
        "example": "She had no tolerance for jokes of any kind.",
        "vietnamese": "sức chịu đựng",
        "vietnamese_example": "Cô ấy không có lòng khoan dung với bất kỳ trò đùa nào.",
        "cefr": "C1"
    },
    "transparency": {
        "definition": "the quality of something, such as a situation or an argument, that makes it easy to understand",
        "pos": "noun",
        "pron": "/trænsˈpærənsi/",
        "example": "a need for greater transparency in legal documents",
        "vietnamese": "minh bạch",
        "vietnamese_example": "Cần minh bạch hơn nữa trong các văn bản pháp luật",
        "cefr": "C1"
    },
    "varied": {
        "definition": "of many different types",
        "pos": "adj",
        "pron": "/ˈveərid/",
        "example": "varied opinions",
        "vietnamese": "đa dạng",
        "vietnamese_example": "ý kiến ​​​​khác nhau",
        "cefr": "C1"
    },
    "transformation": {
        "definition": "a complete change in somebody/something",
        "pos": "noun",
        "pron": "/ˌtrænsfəˈmeɪʃn/",
        "example": "The way in which we work has undergone a complete transformation in the past decade.",
        "vietnamese": "sự biến đổi",
        "vietnamese_example": "Cách chúng tôi làm việc đã trải qua một sự thay đổi hoàn toàn trong thập kỷ qua.",
        "cefr": "C1"
    },
    "effectiveness": {
        "definition": "the fact of producing the result that is wanted or intended; the fact of producing a successful result",
        "pos": "noun",
        "pron": "/ɪˈfektɪvnəs/",
        "example": "to check the effectiveness of the security system",
        "vietnamese": "hiệu quả",
        "vietnamese_example": "để kiểm tra tính hiệu quả của hệ thống an ninh",
        "cefr": "C1"
    },
    "revolutionary": {
        "definition": "connected with political revolution",
        "pos": "adj",
        "pron": "/ˌrevəˈluːʃənəri/",
        "example": "a revolutionary leader",
        "vietnamese": "mang tính cách mạng",
        "vietnamese_example": "một nhà lãnh đạo cách mạng",
        "cefr": "C1"
    },
    "damaging": {
        "definition": "causing damage; having a bad effect on somebody/something",
        "pos": "adj",
        "pron": "/ˈdæmɪdʒɪŋ/",
        "example": "damaging consequences/effects",
        "vietnamese": "gây tổn hại",
        "vietnamese_example": "hậu quả/tác động tai hại",
        "cefr": "C1"
    },
    "heighten": {
        "definition": "if a feeling or an effect heightens, or something heightens it, it becomes stronger or increases",
        "pos": "verb",
        "pron": "/ˈhaɪtn/",
        "example": "Tension has heightened after the recent bomb attack.",
        "vietnamese": "nâng cao",
        "vietnamese_example": "Căng thẳng gia tăng sau vụ đánh bom gần đây.",
        "cefr": "C1"
    },
    "provoke": {
        "definition": "to cause a particular reaction or have a particular effect",
        "pos": "verb",
        "pron": "/prəˈvəʊk/",
        "example": "The announcement provoked a storm of protest.",
        "vietnamese": "khiêu khích",
        "vietnamese_example": "Thông báo này đã gây ra một làn sóng phản đối.",
        "cefr": "C1"
    },
    "render": {
        "definition": "to cause somebody/something to be in a particular state or condition",
        "pos": "verb",
        "pron": "/ˈrendə(r)/",
        "example": "to render something harmless/useless/ineffective",
        "vietnamese": "kết xuất",
        "vietnamese_example": "làm cho cái gì đó trở nên vô hại/vô dụng/không hiệu quả",
        "cefr": "C1"
    },
    "adjustment": {
        "definition": "a small change made to something in order to correct or improve it",
        "pos": "noun",
        "pron": "/əˈdʒʌstmənt/",
        "example": "I've made a few adjustments to the design.",
        "vietnamese": "điều chỉnh",
        "vietnamese_example": "Tôi đã thực hiện một số điều chỉnh trong thiết kế.",
        "cefr": "C1"
    },
    "adverse": {
        "definition": "negative and unpleasant; not likely to produce a good result",
        "pos": "adj",
        "pron": "/ˈædvɜːs/",
        "example": "adverse change/circumstances/weather conditions",
        "vietnamese": "bất lợi",
        "vietnamese_example": "thay đổi/hoàn cảnh/điều kiện thời tiết bất lợi",
        "cefr": "C1"
    },
    "blast": {
        "definition": "an explosion or a powerful movement of air caused by an explosion",
        "pos": "noun",
        "pron": "/blɑːst/",
        "example": "a bomb blast",
        "vietnamese": "vụ nổ",
        "vietnamese_example": "một vụ nổ bom",
        "cefr": "C1"
    },
    "breakthrough": {
        "definition": "an important development that may lead to an agreement or achievement",
        "pos": "noun",
        "pron": "/ˈbreɪkθruː/",
        "example": "to make/achieve a breakthrough",
        "vietnamese": "đột phá",
        "vietnamese_example": "tạo ra/đạt được bước đột phá",
        "cefr": "C1"
    },
    "cluster": {
        "definition": "a group of things of the same type that grow or appear close together",
        "pos": "noun",
        "pron": "/ˈklʌstə(r)/",
        "example": "The telescope is focused on a dense cluster of stars at the edge of the galaxy.",
        "vietnamese": "cụm",
        "vietnamese_example": "Kính viễn vọng tập trung vào một cụm sao dày đặc ở rìa thiên hà.",
        "cefr": "C1"
    },
    "compensate": {
        "definition": "to provide something good to balance or reduce the bad effects of damage, loss, etc.",
        "pos": "verb",
        "pron": "/ˈkɒmpenseɪt/",
        "example": "Nothing can compensate for the loss of a loved one.",
        "vietnamese": "đền bù",
        "vietnamese_example": "Không gì có thể bù đắp được sự mất mát của người thân.",
        "cefr": "C1"
    },
    "correction": {
        "definition": "a change that makes something more accurate than it was before",
        "pos": "noun",
        "pron": "/kəˈrekʃn/",
        "example": "I've made a few small corrections to your report.",
        "vietnamese": "sự sửa chữa",
        "vietnamese_example": "Tôi đã thực hiện một số chỉnh sửa nhỏ trong báo cáo của bạn.",
        "cefr": "C1"
    },
    "correlation": {
        "definition": "a connection between two things in which one thing changes as the other does",
        "pos": "noun",
        "pron": "/ˌkɒrəˈleɪʃn/",
        "example": "correlation between A and B, There is a direct correlation between exposure to sun and skin cancer.",
        "vietnamese": "sự tương quan",
        "vietnamese_example": "mối tương quan giữa A và B, Có mối tương quan trực tiếp giữa việc tiếp xúc với ánh nắng mặt trời và ung thư da.",
        "cefr": "C1"
    },
    "creep": {
        "definition": "to move slowly, quietly and carefully, because you do not want to be seen or heard",
        "pos": "verb",
        "pron": "/kriːp/",
        "example": "I crept up the stairs, trying not to wake my parents.",
        "vietnamese": "leo",
        "vietnamese_example": "Tôi rón rén lên cầu thang, cố gắng không đánh thức bố mẹ.",
        "cefr": "C1"
    },
    "cultivate": {
        "definition": "to prepare and use land for growing plants or crops",
        "pos": "verb",
        "pron": "/ˈkʌltɪveɪt/",
        "example": "The land around here has never been cultivated.",
        "vietnamese": "trồng trọt",
        "vietnamese_example": "Đất xung quanh đây chưa bao giờ được canh tác.",
        "cefr": "C1"
    },
    "dedication": {
        "definition": "the hard work and effort that somebody puts into an activity or a purpose because they think it is important",
        "pos": "noun",
        "pron": "/ˌdedɪˈkeɪʃn/",
        "example": "hard work and dedication",
        "vietnamese": "sự cống hiến",
        "vietnamese_example": "làm việc chăm chỉ và cống hiến",
        "cefr": "C1"
    },
    "deficiency": {
        "definition": "the state of not having, or not having enough of, something that is essential",
        "pos": "noun",
        "pron": "/dɪˈfɪʃnsi/",
        "example": "deficiency (in something), Vitamin deficiency in the diet can cause illness.",
        "vietnamese": "sự thiếu hụt",
        "vietnamese_example": "sự thiếu hụt (ở cái gì đó), sự thiếu hụt vitamin trong chế độ ăn uống có thể gây ra bệnh tật.",
        "cefr": "C1"
    },
    "diagnosis": {
        "definition": "the act of discovering or identifying the exact cause of an illness or a problem",
        "pos": "noun",
        "pron": "/ˌdaɪəɡˈnəʊsɪs/",
        "example": "a diagnosis of lung cancer",
        "vietnamese": "chẩn đoán",
        "vietnamese_example": "chẩn đoán ung thư phổi",
        "cefr": "C1"
    },
    "divert": {
        "definition": "to make somebody/something change direction",
        "pos": "verb",
        "pron": "/daɪˈvɜːt/",
        "example": "be diverted, The course of the stream has now been diverted.",
        "vietnamese": "chuyển hướng",
        "vietnamese_example": "được chuyển hướng, Dòng chảy hiện đã được chuyển hướng.",
        "cefr": "C1"
    },
    "drown": {
        "definition": "to die because you have been underwater too long and you cannot breathe; to kill somebody by holding them underwater",
        "pos": "verb",
        "pron": "/draʊn/",
        "example": "Two children drowned after falling into the river.",
        "vietnamese": "chết đuối",
        "vietnamese_example": "Hai trẻ em chết đuối sau khi rơi xuống sông.",
        "cefr": "C1"
    },
    "eligible": {
        "definition": "a person who is eligible for something or to do something, is able to have or do it because they have the right qualifications, are the right age, etc.",
        "pos": "adj",
        "pron": "/ˈelɪdʒəbl/",
        "example": "eligible (for something), Only those over 70 are eligible for the special payment.",
        "vietnamese": "đạt chuẩn",
        "vietnamese_example": "đủ điều kiện (cho cái gì đó), Chỉ những người trên 70 tuổi mới đủ điều kiện nhận khoản thanh toán đặc biệt.",
        "cefr": "C1"
    },
    "flee": {
        "definition": "to leave a person or place very quickly, especially because you are afraid of possible danger",
        "pos": "verb",
        "pron": "/fliː/",
        "example": "She burst into tears and fled.",
        "vietnamese": "chạy trốn",
        "vietnamese_example": "Cô bật khóc và bỏ chạy.",
        "cefr": "C1"
    },
    "flexibility": {
        "definition": "the ability to change to suit new conditions or situations",
        "pos": "noun",
        "pron": "/ˌfleksəˈbɪləti/",
        "example": "The new system offers a much greater degree of flexibility in the way work is organized.",
        "vietnamese": "tính linh hoạt",
        "vietnamese_example": "Hệ thống mới mang lại mức độ linh hoạt cao hơn nhiều trong cách tổ chức công việc.",
        "cefr": "C1"
    },
    "gear": {
        "definition": "equipment in a vehicle that changes the relation between engine speed (or pedal speed on a bicycle) and the speed of the wheels moving forwards or backwards",
        "pos": "noun",
        "pron": "/ɡɪə(r)/",
        "example": "Careless use of the clutch may damage the gears.",
        "vietnamese": "bánh răng",
        "vietnamese_example": "Việc sử dụng ly hợp bất cẩn có thể làm hỏng bánh răng.",
        "cefr": "C1"
    },
    "guilt": {
        "definition": "the unhappy feelings caused by knowing or thinking that you have done something wrong",
        "pos": "noun",
        "pron": "/ɡɪlt/",
        "example": "She had feelings of guilt about leaving her children and going to work.",
        "vietnamese": "cảm giác tội lỗi",
        "vietnamese_example": "Cô có cảm giác tội lỗi khi bỏ con và đi làm.",
        "cefr": "C1"
    },
    "hazard": {
        "definition": "something that can be dangerous or cause damage",
        "pos": "noun",
        "pron": "/ˈhæzəd/",
        "example": "a fire/safety hazard",
        "vietnamese": "nguy hiểm",
        "vietnamese_example": "nguy cơ hỏa hoạn/an toàn",
        "cefr": "C1"
    },
    "horn": {
        "definition": "a hard pointed part that grows, usually in pairs, on the heads of some animals, such as sheep and cows. Horns are often curved.",
        "pos": "noun",
        "pron": "/hɔːn/",
        "example": "a large bull with curved horns",
        "vietnamese": "sừng",
        "vietnamese_example": "một con bò đực lớn có sừng cong",
        "cefr": "C1"
    },
    "inhibit": {
        "definition": "to prevent something from happening or make it happen more slowly or less frequently than normal",
        "pos": "verb",
        "pron": "/ɪnˈhɪbɪt/",
        "example": "A lack of oxygen may inhibit brain development in the unborn child.",
        "vietnamese": "ức chế",
        "vietnamese_example": "Thiếu oxy có thể ức chế sự phát triển não bộ ở thai nhi.",
        "cefr": "C1"
    },
    "insider": {
        "definition": "a person who knows a lot about a group or an organization, because they are part of it",
        "pos": "noun",
        "pron": "/ɪnˈsaɪdə(r)/",
        "example": "The situation was described by one insider as ‘absolute chaos’.",
        "vietnamese": "người trong cuộc",
        "vietnamese_example": "Tình hình được một người trong cuộc mô tả là “hoàn toàn hỗn loạn”.",
        "cefr": "C1"
    },
    "intensify": {
        "definition": "to increase in degree or strength; to make something increase in degree or strength",
        "pos": "verb",
        "pron": "/ɪnˈtensɪfaɪ/",
        "example": "Violence intensified during the night.",
        "vietnamese": "tăng cường",
        "vietnamese_example": "Bạo lực gia tăng trong đêm.",
        "cefr": "C1"
    },
    "intriguing": {
        "definition": "very interesting because of being unusual or not having an obvious answer",
        "pos": "adj",
        "pron": "/ɪnˈtriːɡɪŋ/",
        "example": "These discoveries raise intriguing questions.",
        "vietnamese": "hấp dẫn",
        "vietnamese_example": "Những khám phá này đặt ra những câu hỏi hấp dẫn.",
        "cefr": "C1"
    },
    "large-scale": {
        "definition": "involving many people or things, especially over a wide area",
        "pos": "adj",
        "pron": "/ˌlɑːdʒ ˈskeɪl/",
        "example": "Large areas of the forest will be cleared for ranching as part of a large-scale development plan.",
        "vietnamese": "quy mô lớn",
        "vietnamese_example": "Các khu rừng rộng lớn sẽ bị chặt phá để chăn nuôi như một phần của kế hoạch phát triển quy mô lớn.",
        "cefr": "C1"
    },
    "legislature": {
        "definition": "a group of people who have the power to make and change laws",
        "pos": "noun",
        "pron": "/ˈledʒɪslətʃə(r)/",
        "example": "a democratically elected legislature",
        "vietnamese": "cơ quan lập pháp",
        "vietnamese_example": "một cơ quan lập pháp được bầu cử dân chủ",
        "cefr": "C1"
    },
    "lethal": {
        "definition": "causing or able to cause death",
        "pos": "adj",
        "pron": "/ˈliːθl/",
        "example": "She had been given a lethal dose of poison.",
        "vietnamese": "gây chết người",
        "vietnamese_example": "Cô đã bị tiêm một liều thuốc độc chết người.",
        "cefr": "C1"
    },
    "mainstream": {
        "definition": "considered normal because it reflects what is done or accepted by most people ",
        "pos": "adj",
        "pron": "/ˈmeɪnstriːm/",
        "example": "mainstream culture/politics",
        "vietnamese": "chủ đạo",
        "vietnamese_example": "văn hóa/chính trị chủ đạo",
        "cefr": "C1"
    },
    "combat": {
        "definition": "fighting or a fight, especially during a time of war",
        "pos": "noun",
        "pron": "/ˈkɒmbæt/",
        "example": "in combat, He was killed in combat.",
        "vietnamese": "chiến đấu",
        "vietnamese_example": "trong chiến đấu, Anh ta đã bị giết trong trận chiến.",
        "cefr": "C1"
    },
    "ally": {
        "definition": "a country that has agreed to help and support another country, especially in case of a war",
        "pos": "noun",
        "pron": "/ˈælaɪ/",
        "example": "our European/NATO allies",
        "vietnamese": "đồng minh",
        "vietnamese_example": "các đồng minh châu Âu/NATO của chúng ta",
        "cefr": "C1"
    },
    "post-war": {
        "definition": "existing, happening or made in the period after a war, especially the Second World War",
        "pos": "adj",
        "pron": "/ˌpəʊst ˈwɔː(r)/",
        "example": "the post-war years",
        "vietnamese": "sau chiến tranh",
        "vietnamese_example": "những năm sau chiến tranh",
        "cefr": "C1"
    },
    "warrior": {
        "definition": "(especially in the past) a person who fights in a battle or war",
        "pos": "noun",
        "pron": "/ˈwɒriə(r)/",
        "example": "a warrior nation (= whose people are skilled in fighting)",
        "vietnamese": "chiến binh",
        "vietnamese_example": "một quốc gia chiến binh (= có người có kỹ năng chiến đấu)",
        "cefr": "C1"
    },
    "straightforward": {
        "definition": "easy to do or to understand; not complicated",
        "pos": "adj",
        "pron": "/ˌstreɪtˈfɔːwəd/",
        "example": "It's a relatively straightforward process.",
        "vietnamese": "thẳng thắn",
        "vietnamese_example": "Đó là một quá trình tương đối đơn giản.",
        "cefr": "C1"
    },
    "substantially": {
        "definition": "very much; a lot",
        "pos": "adv",
        "pron": "/səbˈstænʃəli/",
        "example": "The costs have increased substantially.",
        "vietnamese": "đáng kể",
        "vietnamese_example": "Các chi phí đã tăng lên đáng kể.",
        "cefr": "C1"
    },
    "dictator": {
        "definition": "a political leader who has complete power over a country, especially one who has gained it using military force",
        "pos": "noun",
        "pron": "/dɪkˈteɪtə(r)/",
        "example": "The country suffered at the hands of a series of military dictators.",
        "vietnamese": "nhà độc tài",
        "vietnamese_example": "Đất nước phải chịu đựng dưới bàn tay của hàng loạt nhà độc tài quân phiệt.",
        "cefr": "C1"
    },
    "revelation": {
        "definition": "a fact that people are made aware of, especially one that has been secret and is surprising",
        "pos": "noun",
        "pron": "/ˌrevəˈleɪʃn/",
        "example": "revelation about/concerning something, startling/sensational revelations about her private life",
        "vietnamese": "sự mặc khải",
        "vietnamese_example": "tiết lộ về/liên quan đến điều gì đó, tiết lộ gây sửng sốt/giật gân về đời sống riêng tư của cô ấy",
        "cefr": "C1"
    },
    "absence": {
        "definition": "the fact of somebody being away from a place where they are usually expected to be; the occasion or period of time when somebody is away",
        "pos": "noun",
        "pron": "/ˈæbsəns/",
        "example": "in somebody's absence, The decision was made in my absence (= while I was not there).",
        "vietnamese": "sự vắng mặt",
        "vietnamese_example": "trong sự vắng mặt của ai đó, Quyết định được đưa ra khi tôi vắng mặt (= trong khi tôi không ở đó).",
        "cefr": "C1"
    },
    "accumulate": {
        "definition": "to gradually get more and more of something over a period of time",
        "pos": "verb",
        "pron": "/əˈkjuːmjəleɪt/",
        "example": "I seem to have accumulated a lot of books.",
        "vietnamese": "tích lũy",
        "vietnamese_example": "Tôi dường như đã tích lũy được rất nhiều sách.",
        "cefr": "C1"
    },
    "accumulation": {
        "definition": "the process of gradually increasing or getting more and more of something over a period of time",
        "pos": "noun",
        "pron": "/əˌkjuːmjəˈleɪʃn/",
        "example": "the accumulation of wealth",
        "vietnamese": "sự tích lũy",
        "vietnamese_example": "sự tích lũy của cải",
        "cefr": "C1"
    },
    "albeit": {
        "definition": "although",
        "pos": "conj",
        "pron": "/ˌɔːlˈbiːɪt/",
        "example": "He finally agreed, albeit reluctantly, to help us.",
        "vietnamese": "mặc dù",
        "vietnamese_example": "Cuối cùng anh ấy đã đồng ý, mặc dù miễn cưỡng, để giúp chúng tôi.",
        "cefr": "C1"
    },
    "align": {
        "definition": "to arrange something in the correct position, or to be in the correct position, in relation to something else, especially in a straight line",
        "pos": "verb",
        "pron": "/əˈlaɪn/",
        "example": "Make sure the shelf is aligned with the top of the cupboard.",
        "vietnamese": "căn chỉnh",
        "vietnamese_example": "Hãy chắc chắn rằng kệ được căn chỉnh với mặt trên của tủ.",
        "cefr": "C1"
    },
    "arm": {
        "definition": "to provide weapons for yourself/somebody in order to fight a battle or a war",
        "pos": "verb",
        "pron": "/ɑːm/",
        "example": "The country was arming against the enemy.",
        "vietnamese": "cánh tay",
        "vietnamese_example": "Đất nước đang vũ trang chống lại kẻ thù.",
        "cefr": "C1"
    },
    "ballot": {
        "definition": "the system of voting in writing and usually in secret; an occasion on which a vote is held",
        "pos": "noun",
        "pron": "/ˈbælət/",
        "example": "The chairperson is chosen by secret ballot.",
        "vietnamese": "lá phiếu",
        "vietnamese_example": "Chủ tịch được bầu bằng bỏ phiếu kín.",
        "cefr": "C1"
    },
    "barrel": {
        "definition": "a large round container, usually made of wood or metal, with flat ends and, usually, curved sides",
        "pos": "noun",
        "pron": "/ˈbærəl/",
        "example": "a beer/wine barrel",
        "vietnamese": "thùng",
        "vietnamese_example": "một thùng bia/rượu",
        "cefr": "C1"
    },
    "bench": {
        "definition": "a long seat for two or more people, usually made of wood",
        "pos": "noun",
        "pron": "/bentʃ/",
        "example": "a park bench",
        "vietnamese": "băng ghế dự bị",
        "vietnamese_example": "một băng ghế công viên",
        "cefr": "C1"
    },
    "bleed": {
        "definition": "to lose blood, especially from a wound or an injury",
        "pos": "verb",
        "pron": "/bliːd/",
        "example": "My finger's bleeding.",
        "vietnamese": "chảy máu",
        "vietnamese_example": "Ngón tay tôi đang chảy máu.",
        "cefr": "C1"
    },
    "boundary": {
        "definition": "a real or imagined line that marks the limits or edges of something and separates it from other things or places; a dividing line",
        "pos": "noun",
        "pron": "/ˈbaʊndri/",
        "example": "After the war the national boundaries were redrawn.",
        "vietnamese": "ranh giới",
        "vietnamese_example": "Sau chiến tranh, biên giới quốc gia được vẽ lại.",
        "cefr": "C1"
    },
    "cemetery": {
        "definition": "an area of land used for burying dead people, especially one that is not next to a church",
        "pos": "noun",
        "pron": "/ˈsemətri/",
        "example": "He was buried in a private cemetery.",
        "vietnamese": "nghĩa trang",
        "vietnamese_example": "Ông được chôn cất tại một nghĩa trang tư nhân.",
        "cefr": "C1"
    },
    "cocktail": {
        "definition": "a drink usually made from a mixture of one or more spirits (= strong alcoholic drinks) and fruit juice. It can also be made without alcohol.",
        "pos": "noun",
        "pron": "/ˈkɒkteɪl/",
        "example": "a cocktail bar/cabinet/lounge/shaker ",
        "vietnamese": "cocktail",
        "vietnamese_example": "quầy bar/tủ/phòng chờ/máy lắc cocktail",
        "cefr": "C1"
    },
    "compromise": {
        "definition": "an agreement made between two people or groups in which each side gives up some of the things they want so that both sides are happy at the end",
        "pos": "noun",
        "pron": "/ˈkɒmprəmaɪz/",
        "example": "After lengthy talks the two sides finally reached a compromise.",
        "vietnamese": "thỏa hiệp",
        "vietnamese_example": "Sau nhiều cuộc đàm phán kéo dài, cuối cùng hai bên đã đạt được thỏa thuận.",
        "cefr": "C1"
    },
    "countless": {
        "definition": "very many; too many to be counted or mentioned",
        "pos": "adj",
        "pron": "/ˈkaʊntləs/",
        "example": "I've warned her countless times.",
        "vietnamese": "vô số",
        "vietnamese_example": "Tôi đã cảnh báo cô ấy không biết bao nhiêu lần.",
        "cefr": "C1"
    },
    "crown": {
        "definition": "an object in the shape of a circle, usually made of gold and precious stones, that a king or queen wears on his or her head on official occasions",
        "pos": "noun",
        "pron": "/kraʊn/",
        "example": "The crown was placed upon the new monarch's head.",
        "vietnamese": "vương miện",
        "vietnamese_example": "Vương miện được đặt trên đầu của vị vua mới.",
        "cefr": "C1"
    },
    "crystal": {
        "definition": "a small piece of a substance with many even sides, that is formed naturally when the substance becomes solid",
        "pos": "noun",
        "pron": "/ˈkrɪstl/",
        "example": "ice/salt crystals",
        "vietnamese": "pha lê",
        "vietnamese_example": "tinh thể nước đá/muối",
        "cefr": "C1"
    },
    "deed": {
        "definition": "a thing that somebody does that is usually very good or very bad",
        "pos": "noun",
        "pron": "/diːd/",
        "example": "It's a stirring tale of heroic deeds.",
        "vietnamese": "chứng thư",
        "vietnamese_example": "Đó là câu chuyện cảm động về những hành động anh hùng.",
        "cefr": "C1"
    },
    "deploy": {
        "definition": "to move soldiers or weapons into a position where they are ready for military action",
        "pos": "verb",
        "pron": "/dɪˈplɔɪ/",
        "example": "2 000 troops were deployed in the area.",
        "vietnamese": "triển khai",
        "vietnamese_example": "2 000 quân đã được triển khai trong khu vực.",
        "cefr": "C1"
    },
    "deployment": {
        "definition": "the act of moving soldiers or weapons into a position where they are ready for military action",
        "pos": "noun",
        "pron": "/dɪˈplɔɪmənt/",
        "example": "the deployment of peacekeeping forces",
        "vietnamese": "triển khai",
        "vietnamese_example": "triển khai lực lượng gìn giữ hòa bình",
        "cefr": "C1"
    },
    "destructive": {
        "definition": "causing destruction or damage",
        "pos": "adj",
        "pron": "/dɪˈstrʌktɪv/",
        "example": "The war demonstrated the destructive power of modern weapons.",
        "vietnamese": "phá hoại",
        "vietnamese_example": "Cuộc chiến đã chứng tỏ sức mạnh hủy diệt của vũ khí hiện đại.",
        "cefr": "C1"
    },
    "dictate": {
        "definition": "to tell somebody what to do, especially in an annoying way",
        "pos": "verb",
        "pron": "/dɪkˈteɪt/",
        "example": "dictate something (to somebody), They are in no position to dictate terms (= tell other people what to do).",
        "vietnamese": "ra lệnh",
        "vietnamese_example": "ra lệnh điều gì đó (cho ai đó), Họ không có quyền ra lệnh cho các điều khoản (= nói cho người khác biết phải làm gì).",
        "cefr": "C1"
    },
    "displace": {
        "definition": "to take the place of somebody/something",
        "pos": "verb",
        "pron": "/dɪsˈpleɪs/",
        "example": "be displaced (by somebody/something), Gradually factory workers have been displaced by machines.",
        "vietnamese": "thay thế",
        "vietnamese_example": "bị thay thế (bởi ai đó / cái gì đó), Dần dần công nhân nhà máy đã bị máy móc thay thế.",
        "cefr": "C1"
    },
    "exceptional": {
        "definition": "unusually good",
        "pos": "adj",
        "pron": "/ɪkˈsepʃənl/",
        "example": "At the age of five he showed exceptional talent as a musician.",
        "vietnamese": "đặc biệt",
        "vietnamese_example": "Khi mới 5 tuổi, anh đã bộc lộ tài năng đặc biệt của một nhạc sĩ.",
        "cefr": "C1"
    },
    "fate": {
        "definition": "the things, especially bad things, that will happen or have happened to somebody/something",
        "pos": "noun",
        "pron": "/feɪt/",
        "example": "The fate of the three men is unknown.",
        "vietnamese": "định mệnh",
        "vietnamese_example": "Số phận của ba người đàn ông vẫn chưa rõ.",
        "cefr": "C1"
    },
    "fleet": {
        "definition": "a group of military ships commanded by the same person",
        "pos": "noun",
        "pron": "/fliːt/",
        "example": "a fleet of destroyers",
        "vietnamese": "hạm đội",
        "vietnamese_example": "một hạm đội tàu khu trục",
        "cefr": "C1"
    },
    "grid": {
        "definition": "a pattern of straight lines, usually crossing each other to form squares",
        "pos": "noun",
        "pron": "/ɡrɪd/",
        "example": "New York’s grid of streets",
        "vietnamese": "lưới",
        "vietnamese_example": "Mạng lưới đường phố của New York",
        "cefr": "C1"
    },
    "humanitarian": {
        "definition": "connected with helping people who are suffering and improving the conditions that they are living in",
        "pos": "adj",
        "pron": "/hjuːˌmænɪˈteəriən/",
        "example": "to provide humanitarian aid to the war zone",
        "vietnamese": "nhân đạo",
        "vietnamese_example": "cung cấp viện trợ nhân đạo cho vùng chiến sự",
        "cefr": "C1"
    },
    "implementation": {
        "definition": "the act of making something that has been officially decided start to happen or be used",
        "pos": "noun",
        "pron": "/ˌɪmplɪmenˈteɪʃn/",
        "example": "the implementation of the new system",
        "vietnamese": "thực hiện",
        "vietnamese_example": "việc triển khai hệ thống mới",
        "cefr": "C1"
    },
    "compassion": {
        "definition": "a strong feeling of sympathy for people or animals who are suffering and a desire to help them",
        "pos": "noun",
        "pron": "/kəmˈpæʃn/",
        "example": "to feel/show compassion",
        "vietnamese": "lòng trắc ẩn",
        "vietnamese_example": "cảm nhận/thể hiện lòng trắc ẩn",
        "cefr": "C1"
    },
    "frustration": {
        "definition": "the feeling of being frustrated",
        "pos": "noun",
        "pron": "/frʌˈstreɪʃn/",
        "example": "in frustration, Dave thumped the table in frustration.",
        "vietnamese": "sự bực bội",
        "vietnamese_example": "Trong cơn bực bội, Dave đập mạnh xuống bàn.",
        "cefr": "C1"
    },
    "hostility": {
        "definition": "aggressive or unfriendly feelings or behaviour ",
        "pos": "noun",
        "pron": "/hɒˈstɪləti/",
        "example": "There was a barely veiled hostility in her tone.",
        "vietnamese": "sự thù địch",
        "vietnamese_example": "Có một sự thù địch gần như không được che đậy trong giọng điệu của cô ấy.",
        "cefr": "C1"
    },
    "overwhelm": {
        "definition": "to have such a strong emotional effect on somebody that it is difficult for them to resist or know how to react",
        "pos": "verb",
        "pron": "/ˌəʊvəˈwelm/",
        "example": "She was overwhelmed by feelings of guilt.",
        "vietnamese": "áp đảo",
        "vietnamese_example": "Cô bị choáng ngợp bởi cảm giác tội lỗi.",
        "cefr": "C1"
    },
    "acid": {
        "definition": "that contains acid or has the essential characteristics of an acid; that has a pH of less than seven",
        "pos": "adj",
        "pron": "/ˈæsɪd/",
        "example": "Rye is tolerant of poor, acid soils.",
        "vietnamese": "axit",
        "vietnamese_example": "Lúa mạch đen có khả năng chịu được đất nghèo axit.",
        "cefr": "C1"
    },
    "affection": {
        "definition": "the feeling of liking or loving somebody/something very much and caring about them",
        "pos": "noun",
        "pron": "/əˈfekʃn/",
        "example": "Children need lots of love and affection.",
        "vietnamese": "sự yêu mến",
        "vietnamese_example": "Trẻ em cần rất nhiều tình yêu thương và tình cảm.",
        "cefr": "C1"
    },
    "contempt": {
        "definition": "the feeling that somebody/something is without value and deserves no respect at all",
        "pos": "noun",
        "pron": "/kənˈtempt/",
        "example": "with contempt, She looked at him with contempt.",
        "vietnamese": "khinh miệt",
        "vietnamese_example": "với vẻ khinh thường, Cô nhìn anh với ánh mắt khinh thường.",
        "cefr": "C1"
    },
    "embarrassment": {
        "definition": "shy, uncomfortable or guilty feelings; a feeling of being embarrassed",
        "pos": "noun",
        "pron": "/ɪmˈbærəsmənt/",
        "example": "I nearly died of embarrassment when he said that.",
        "vietnamese": "bối rối",
        "vietnamese_example": "Tôi gần như chết vì xấu hổ khi anh ấy nói vậy.",
        "cefr": "C1"
    },
    "evoke": {
        "definition": "to bring a feeling, a memory or an image into your mind",
        "pos": "verb",
        "pron": "/ɪˈvəʊk/",
        "example": "The music evoked memories of her youth.",
        "vietnamese": "gợi lên",
        "vietnamese_example": "Âm nhạc gợi lên ký ức tuổi trẻ của cô.",
        "cefr": "C1"
    },
    "grief": {
        "definition": "a very sad feeling, especially when somebody dies",
        "pos": "noun",
        "pron": "/ɡriːf/",
        "example": "She was overcome with grief when her husband died.",
        "vietnamese": "đau buồn",
        "vietnamese_example": "Bà đau khổ tột cùng khi chồng qua đời.",
        "cefr": "C1"
    },
    "hatred": {
        "definition": "a very strong feeling of dislike for somebody/something",
        "pos": "noun",
        "pron": "/ˈheɪtrɪd/",
        "example": "He looked at me with intense hatred.",
        "vietnamese": "hận thù",
        "vietnamese_example": "Anh ta nhìn tôi với ánh mắt căm thù mãnh liệt.",
        "cefr": "C1"
    },
    "mercy": {
        "definition": "a kind or forgiving attitude towards somebody that you have the power to harm or right to punish",
        "pos": "noun",
        "pron": "/ˈmɜːsi/",
        "example": "The prisoner begged for mercy.",
        "vietnamese": "lòng thương xót",
        "vietnamese_example": "Người tù cầu xin lòng thương xót.",
        "cefr": "C1"
    },
    "mutual": {
        "definition": "used to describe feelings that two or more people have for each other equally, or actions that affect two or more people equally",
        "pos": "adj",
        "pron": "/ˈmjuːtʃuəl/",
        "example": "mutual respect/understanding",
        "vietnamese": "qua lại",
        "vietnamese_example": "tôn trọng/hiểu biết lẫn nhau",
        "cefr": "C1"
    },
    "optimism": {
        "definition": "a feeling that good things will happen and that something will be successful",
        "pos": "noun",
        "pron": "/ˈɒptɪmɪzəm/",
        "example": "a mood of cautious optimism",
        "vietnamese": "sự lạc quan",
        "vietnamese_example": "một tâm trạng lạc quan thận trọng",
        "cefr": "C1"
    },
    "orientation": {
        "definition": "a person’s basic beliefs or feelings about a particular subject",
        "pos": "noun",
        "pron": "/ˌɔːriənˈteɪʃn/",
        "example": "religious/political orientation",
        "vietnamese": "định hướng",
        "vietnamese_example": "định hướng tôn giáo/chính trị",
        "cefr": "C1"
    },
    "outrage": {
        "definition": "a strong feeling of shock and anger",
        "pos": "noun",
        "pron": "/ˈaʊtreɪdʒ/",
        "example": "The judge's remarks caused public outrage.",
        "vietnamese": "phẫn nộ",
        "vietnamese_example": "Phát biểu của thẩm phán khiến dư luận phẫn nộ.",
        "cefr": "C1"
    },
    "plea": {
        "definition": "a serious emotional request, especially for something needing action now",
        "pos": "noun",
        "pron": "/pliː/",
        "example": "plea for something, She made an impassioned plea for help.",
        "vietnamese": "lời thú tội",
        "vietnamese_example": "cầu xin điều gì đó, Cô ấy đã khẩn thiết cầu xin sự giúp đỡ.",
        "cefr": "C1"
    },
    "rage": {
        "definition": "a feeling of violent anger that is difficult to control",
        "pos": "noun",
        "pron": "/reɪdʒ/",
        "example": "His face was dark with rage.",
        "vietnamese": "cơn thịnh nộ",
        "vietnamese_example": "Mặt anh ta tối sầm vì giận dữ.",
        "cefr": "C1"
    },
    "regain": {
        "definition": "to get back something you no longer have, especially an ability or a quality",
        "pos": "verb",
        "pron": "/rɪˈɡeɪn/",
        "example": "I struggled to regain some dignity.",
        "vietnamese": "lấy lại",
        "vietnamese_example": "Tôi đấu tranh để lấy lại chút phẩm giá.",
        "cefr": "C1"
    },
    "sensation": {
        "definition": "a feeling that you get when something affects your body",
        "pos": "noun",
        "pron": "/senˈseɪʃn/",
        "example": "a tingling/burning sensation ",
        "vietnamese": "cảm giác",
        "vietnamese_example": "cảm giác ngứa ran / nóng rát",
        "cefr": "C1"
    },
    "sensitivity": {
        "definition": "the ability to understand other people’s feelings",
        "pos": "noun",
        "pron": "/ˌsensəˈtɪvəti/",
        "example": "sensitivity to the needs of children",
        "vietnamese": "sự nhạy cảm",
        "vietnamese_example": "nhạy cảm với nhu cầu của trẻ em",
        "cefr": "C1"
    },
    "sexuality": {
        "definition": "the feelings and activities connected with a person’s sexual desires",
        "pos": "noun",
        "pron": "/ˌsekʃuˈæləti/",
        "example": "He was confused about his sexuality.",
        "vietnamese": "xu hướng tính dục",
        "vietnamese_example": "Anh ấy bối rối về xu hướng tính dục của mình.",
        "cefr": "C1"
    },
    "surge": {
        "definition": "a sudden increase of a strong feeling",
        "pos": "noun",
        "pron": "/sɜːdʒ/",
        "example": "She felt a sudden surge of anger.",
        "vietnamese": "dâng trào",
        "vietnamese_example": "Cô cảm thấy một cơn giận đột ngột trào dâng.",
        "cefr": "C1"
    },
    "wholly": {
        "definition": "completely",
        "pos": "adv",
        "pron": "/ˈhəʊlli/",
        "example": "wholly inappropriate behaviour",
        "vietnamese": "hoàn toàn",
        "vietnamese_example": "hành vi hoàn toàn không phù hợp",
        "cefr": "C1"
    },
    "organizational": {
        "definition": "connected with the way in which the different parts of something are arranged; connected with an organization",
        "pos": "adj",
        "pron": "/ˌɔːɡənaɪˈzeɪʃənl/",
        "example": "organizational changes within the party",
        "vietnamese": "tổ chức",
        "vietnamese_example": "thay đổi tổ chức trong đảng",
        "cefr": "C1"
    },
    "seal": {
        "definition": "an official design or mark, stamped on a document to show that it is real and carries the authority of a particular person or organization",
        "pos": "noun",
        "pron": "/siːl/",
        "example": "The letter bore the president's seal.",
        "vietnamese": "niêm phong",
        "vietnamese_example": "Bức thư có đóng dấu của tổng thống.",
        "cefr": "C1"
    },
    "congressional": {
        "definition": "related to or belonging to a congress or the Congress in the US",
        "pos": "adj",
        "pron": "/kənˈɡreʃənl/",
        "example": "a congressional committee/bill",
        "vietnamese": "quốc hội",
        "vietnamese_example": "một ủy ban/dự luật của quốc hội",
        "cefr": "C1"
    },
    "consent": {
        "definition": "permission to do something, especially given by somebody in authority",
        "pos": "noun",
        "pron": "/kənˈsent/",
        "example": "The written consent of a parent is required.",
        "vietnamese": "bằng lòng",
        "vietnamese_example": "Cần có sự đồng ý bằng văn bản của phụ huynh.",
        "cefr": "C1"
    },
    "delegation": {
        "definition": "a group of people who represent the views of an organization, a country, etc.",
        "pos": "noun",
        "pron": "/ˌdelɪˈɡeɪʃn/",
        "example": "the Dutch delegation to the United Nations",
        "vietnamese": "phái đoàn",
        "vietnamese_example": "phái đoàn Hà Lan tại Liên hợp quốc",
        "cefr": "C1"
    },
    "exert": {
        "definition": "to use power or influence to affect somebody/something",
        "pos": "verb",
        "pron": "/ɪɡˈzɜːt/",
        "example": "He exerted all his authority to make them accept the plan.",
        "vietnamese": "gắng sức",
        "vietnamese_example": "Anh ta dùng mọi quyền hạn của mình để khiến họ chấp nhận kế hoạch.",
        "cefr": "C1"
    },
    "faction": {
        "definition": "a small group of people within a larger one, whose members have some different aims and beliefs to those of the larger group",
        "pos": "noun",
        "pron": "/ˈfækʃn/",
        "example": "There are rival factions within the administration.",
        "vietnamese": "phe phái",
        "vietnamese_example": "Có những phe phái đối địch trong chính quyền.",
        "cefr": "C1"
    },
    "memo": {
        "definition": "an official note from one person to another in the same organization",
        "pos": "noun",
        "pron": "/ˈmeməʊ/",
        "example": "She sent a memo to the whole team.",
        "vietnamese": "bản ghi nhớ",
        "vietnamese_example": "Cô ấy đã gửi một bản ghi nhớ cho cả nhóm.",
        "cefr": "C1"
    },
    "presidency": {
        "definition": "the job of being president of a country or an organization; the period of time somebody holds this job",
        "pos": "noun",
        "pron": "/ˈprezɪdənsi/",
        "example": "the current holder of the EU presidency",
        "vietnamese": "tổng thống",
        "vietnamese_example": "người nắm giữ chức chủ tịch EU hiện tại",
        "cefr": "C1"
    },
    "tribunal": {
        "definition": "a type of court with the authority to deal with a particular problem or disagreement",
        "pos": "noun",
        "pron": "/traɪˈbjuːnl/",
        "example": "an international war crimes tribunal",
        "vietnamese": "tòa án",
        "vietnamese_example": "tòa án tội ác chiến tranh quốc tế",
        "cefr": "C1"
    },
    "trustee": {
        "definition": "a person or an organization that has control of money or property that has been put into a trust for somebody",
        "pos": "noun",
        "pron": "/trʌˈstiː/",
        "example": "The bank will act as trustees for the estate until the child is 18.",
        "vietnamese": "người được ủy thác",
        "vietnamese_example": "Ngân hàng sẽ đóng vai trò là người quản lý tài sản cho đến khi đứa trẻ đủ 18 tuổi.",
        "cefr": "C1"
    },
    "undermine": {
        "definition": "to make something, especially somebody’s confidence or authority, gradually weaker or less effective",
        "pos": "verb",
        "pron": "/ˌʌndəˈmaɪn/",
        "example": "Our confidence in the team has been seriously undermined by their recent defeats.",
        "vietnamese": "làm suy yếu",
        "vietnamese_example": "Niềm tin của chúng tôi vào đội đã bị suy giảm nghiêm trọng bởi những thất bại gần đây của họ.",
        "cefr": "C1"
    },
    "abortion": {
        "definition": "the deliberate ending of a pregnancy at an early stage",
        "pos": "noun",
        "pron": "/əˈbɔːʃn/",
        "example": "to support/oppose abortion",
        "vietnamese": "phá thai",
        "vietnamese_example": "ủng hộ/phản đối việc phá thai",
        "cefr": "C1"
    },
    "abundance": {
        "definition": "a large quantity that is more than enough",
        "pos": "noun",
        "pron": "/əˈbʌndəns/",
        "example": "The brochure promised beautiful walks with an abundance of wildlife.",
        "vietnamese": "sự phong phú",
        "vietnamese_example": "Tài liệu quảng cáo hứa hẹn những chuyến đi tuyệt đẹp với nhiều loài động vật hoang dã.",
        "cefr": "C1"
    },
    "abuse": {
        "definition": "the use of something in a way that is wrong or harmful",
        "pos": "noun",
        "pron": "/əˈbjuːs/",
        "example": "alcohol/drug abuse",
        "vietnamese": "lạm dụng",
        "vietnamese_example": "lạm dụng rượu/ma túy",
        "cefr": "C1"
    },
    "acceptance": {
        "definition": "the act of accepting a gift, an invitation, an offer, etc.",
        "pos": "noun",
        "pron": "/əkˈseptəns/",
        "example": "Please confirm your acceptance of this offer in writing.",
        "vietnamese": "sự chấp nhận",
        "vietnamese_example": "Vui lòng xác nhận việc bạn chấp nhận lời đề nghị này bằng văn bản.",
        "cefr": "C1"
    },
    "accessible": {
        "definition": "that can be reached, entered, used, seen, etc.",
        "pos": "adj",
        "pron": "/əkˈsesəbl/",
        "example": "The remote desert area is accessible only by helicopter.",
        "vietnamese": "có thể truy cập",
        "vietnamese_example": "Khu vực sa mạc xa xôi chỉ có thể đến được bằng trực thăng.",
        "cefr": "C1"
    },
    "acre": {
        "definition": "a unit for measuring an area of land; 4 840 square yards or about 4 050 square metres",
        "pos": "noun",
        "pron": "/ˈeɪkə(r)/",
        "example": "3 000 acres of parkland",
        "vietnamese": "mẫu Anh",
        "vietnamese_example": "3 000 mẫu đất công viên",
        "cefr": "C1"
    },
    "acute": {
        "definition": "very serious or severe",
        "pos": "adj",
        "pron": "/əˈkjuːt/",
        "example": "There is an acute shortage of water.",
        "vietnamese": "cấp tính",
        "vietnamese_example": "Đang có tình trạng thiếu nước trầm trọng.",
        "cefr": "C1"
    },
    "adhere": {
        "definition": "to stick to something",
        "pos": "verb",
        "pron": "/ədˈhɪə(r)/",
        "example": "Once in the bloodstream, the bacteria adhere to the surface of the red cells.",
        "vietnamese": "tuân theo",
        "vietnamese_example": "Khi vào máu, vi khuẩn bám vào bề mặt hồng cầu.",
        "cefr": "C1"
    },
    "adjacent": {
        "definition": "next to something",
        "pos": "adj",
        "pron": "/əˈdʒeɪsnt/",
        "example": "The planes landed on adjacent runways.",
        "vietnamese": "liền kề",
        "vietnamese_example": "Các máy bay hạ cánh trên đường băng liền kề.",
        "cefr": "C1"
    },
    "adolescent": {
        "definition": "a young person who is developing from a child into an adult",
        "pos": "noun",
        "pron": "/ˌædəˈlesnt/",
        "example": "adolescents between the ages of 13 and 18 and the problems they face",
        "vietnamese": "thanh niên",
        "vietnamese_example": "thanh thiếu niên trong độ tuổi từ 13 đến 18 và những vấn đề họ gặp phải",
        "cefr": "C1"
    },
    "adoption": {
        "definition": "the act of adopting a child; the fact of being adopted",
        "pos": "noun",
        "pron": "/əˈdɒpʃn/",
        "example": "She put the baby up for adoption.",
        "vietnamese": "nhận con nuôi",
        "vietnamese_example": "Cô ấy đã đưa đứa bé đi làm con nuôi.",
        "cefr": "C1"
    },
    "alert": {
        "definition": "able to think quickly; quick to notice things",
        "pos": "adj",
        "pron": "/əˈlɜːt/",
        "example": "Suddenly he found himself awake and fully alert.",
        "vietnamese": "báo động",
        "vietnamese_example": "Đột nhiên anh thấy mình tỉnh táo và hoàn toàn tỉnh táo.",
        "cefr": "C1"
    },
    "alien": {
        "definition": "strange and frightening; different from what you are used to",
        "pos": "adj",
        "pron": "/ˈeɪliən/",
        "example": "an alien environment",
        "vietnamese": "người ngoài hành tinh",
        "vietnamese_example": "môi trường xa lạ",
        "cefr": "C1"
    },
    "alike": {
        "definition": "very similar",
        "pos": "adj",
        "pron": "/əˈlaɪk/",
        "example": "My sister and I do not look alike.",
        "vietnamese": "như nhau",
        "vietnamese_example": "Tôi và chị tôi trông không giống nhau.",
        "cefr": "C1"
    },
    "anchor": {
        "definition": "a heavy metal object that is attached to a rope or chain and dropped over the side of a ship or boat to keep it in one place",
        "pos": "noun",
        "pron": "/ˈæŋkə(r)/",
        "example": "to drop anchor",
        "vietnamese": "neo",
        "vietnamese_example": "thả neo",
        "cefr": "C1"
    },
    "applicable": {
        "definition": "that can be said to be true in the case of somebody/something",
        "pos": "adj",
        "pron": "/əˈplɪkəbl/",
        "example": "Give details of children where applicable (= if you have any).",
        "vietnamese": "áp dụng",
        "vietnamese_example": "Cung cấp thông tin chi tiết về trẻ em nếu có (= nếu bạn có).",
        "cefr": "C1"
    },
    "arena": {
        "definition": "a place with a flat open area in the middle and seats around it where people can watch sports and entertainment",
        "pos": "noun",
        "pron": "/əˈriːnə/",
        "example": "a concert at Wembley Arena",
        "vietnamese": "đấu trường",
        "vietnamese_example": "buổi hòa nhạc tại Wembley Arena",
        "cefr": "C1"
    },
    "atrocity": {
        "definition": "a cruel and violent act, especially in a war",
        "pos": "noun",
        "pron": "/əˈtrɒsəti/",
        "example": "In the war, both sides committed atrocities.",
        "vietnamese": "sự tàn ác",
        "vietnamese_example": "Trong chiến tranh, cả hai bên đều phạm tội ác tàn bạo.",
        "cefr": "C1"
    },
    "authorize": {
        "definition": "to give official permission for something, or for somebody to do something",
        "pos": "verb",
        "pron": "/ˈɔːθəraɪz/",
        "example": "authorize something, I can authorize payments up to £5 000.",
        "vietnamese": "ủy quyền",
        "vietnamese_example": "ủy quyền một cái gì đó, tôi có thể ủy quyền thanh toán lên tới £5 000.",
        "cefr": "C1"
    },
    "availability": {
        "definition": "the fact that something is possible to get, buy or find",
        "pos": "noun",
        "pron": "/əˌveɪləˈbɪləti/",
        "example": "the availability of cheap flights",
        "vietnamese": "sẵn có",
        "vietnamese_example": "sự sẵn có của các chuyến bay giá rẻ",
        "cefr": "C1"
    },
    "backdrop": {
        "definition": "everything that can be seen around an event or scene",
        "pos": "noun",
        "pron": "/ˈbækdrɒp/",
        "example": "The mountains provided a dramatic backdrop for our picnic.",
        "vietnamese": "bối cảnh",
        "vietnamese_example": "Những ngọn núi đã tạo nên một khung cảnh ấn tượng cho chuyến dã ngoại của chúng tôi.",
        "cefr": "C1"
    },
    "bare": {
        "definition": "not covered by any clothes",
        "pos": "adj",
        "pron": "/beə(r)/",
        "example": "She likes to walk around in bare feet.",
        "vietnamese": "trần trụi",
        "vietnamese_example": "Cô ấy thích đi lại bằng đôi chân trần.",
        "cefr": "C1"
    },
    "battlefield": {
        "definition": "a place where a battle is being fought or has been fought",
        "pos": "noun",
        "pron": "/ˈbætlfiːld/",
        "example": "heavy casualties on the battlefield",
        "vietnamese": "chiến trường",
        "vietnamese_example": "thương vong nặng nề trên chiến trường",
        "cefr": "C1"
    },
    "behalf": {
        "definition": "in order to help somebody",
        "pos": "noun",
        "pron": "/bɪˈhɑːf/",
        "example": "He began a petition in behalf of the farmers.",
        "vietnamese": "thay mặt",
        "vietnamese_example": "Ông bắt đầu một bản kiến ​​​​nghị thay mặt cho nông dân.",
        "cefr": "C1"
    },
    "beloved": {
        "definition": "loved very much",
        "pos": "adj",
        "pron": "/bɪˈlʌvɪd/",
        "example": "in memory of our dearly beloved son, John",
        "vietnamese": "người yêu dấu",
        "vietnamese_example": "để tưởng nhớ đứa con trai yêu dấu của chúng tôi, John",
        "cefr": "C1"
    },
    "beneath": {
        "definition": "in or to a lower position than somebody/something; under somebody/something",
        "pos": "prep",
        "pron": "/bɪˈniːθ/",
        "example": "They found the body buried beneath a pile of leaves.",
        "vietnamese": "bên dưới",
        "vietnamese_example": "Họ tìm thấy thi thể bị chôn vùi dưới đống lá.",
        "cefr": "C1"
    },
    "bind": {
        "definition": "to tie somebody/something with rope, string, etc. so that they/it cannot move or are held together strongly",
        "pos": "verb",
        "pron": "/baɪnd/",
        "example": "bind somebody/something to something, She was bound to a chair.",
        "vietnamese": "ràng buộc",
        "vietnamese_example": "trói ai/cái gì với cái gì, Cô ấy bị trói vào một cái ghế.",
        "cefr": "C1"
    },
    "biography": {
        "definition": "the story of a person’s life written by somebody else; this type of writing",
        "pos": "noun",
        "pron": "/baɪˈɒɡrəfi/",
        "example": "Boswell’s biography of Johnson",
        "vietnamese": "tiểu sử",
        "vietnamese_example": "Tiểu sử của Boswell về Johnson",
        "cefr": "C1"
    },
    "bizarre": {
        "definition": "very strange or unusual",
        "pos": "adj",
        "pron": "/bɪˈzɑː(r)/",
        "example": "a bizarre situation/incident/story",
        "vietnamese": "kỳ quái",
        "vietnamese_example": "một tình huống/sự cố/câu chuyện kỳ ​​lạ",
        "cefr": "C1"
    },
    "blend": {
        "definition": "a mixture of different types of the same thing",
        "pos": "noun",
        "pron": "/blend/",
        "example": "a blend of tea",
        "vietnamese": "trộn",
        "vietnamese_example": "sự pha trộn của trà",
        "cefr": "C1"
    },
    "bless": {
        "definition": "to ask God to protect somebody/something",
        "pos": "verb",
        "pron": "/bles/",
        "example": "They brought the children to Jesus and he blessed them.",
        "vietnamese": "ban phước",
        "vietnamese_example": "Họ đem những đứa trẻ đến với Chúa Giê-su và ngài ban phước cho chúng.",
        "cefr": "C1"
    },
    "blessing": {
        "definition": "God’s help and protection, or a prayer asking for this",
        "pos": "noun",
        "pron": "/ˈblesɪŋ/",
        "example": "to pray for God’s blessing",
        "vietnamese": "phước lành",
        "vietnamese_example": "để cầu nguyện xin Chúa ban phước lành",
        "cefr": "C1"
    },
    "bounce": {
        "definition": "if something bounces or you bounce it, it moves quickly away from a surface it has just hit or you make it do this",
        "pos": "verb",
        "pron": "/baʊns/",
        "example": "The ball bounced twice before he could reach it.",
        "vietnamese": "tung lên",
        "vietnamese_example": "Quả bóng nảy lên hai lần trước khi anh ấy có thể chạm tới nó.",
        "cefr": "C1"
    },
    "burial": {
        "definition": "the act or ceremony of burying a dead body",
        "pos": "noun",
        "pron": "/ˈberiəl/",
        "example": "a burial place/mound/site",
        "vietnamese": "chôn cất",
        "vietnamese_example": "nơi chôn cất/gò đất/nơi chôn cất",
        "cefr": "C1"
    },
    "calculation": {
        "definition": "the act or process of using numbers to find out an amount",
        "pos": "noun",
        "pron": "/ˌkælkjuˈleɪʃn/",
        "example": "Cathy did a rough calculation.",
        "vietnamese": "tính toán",
        "vietnamese_example": "Cathy đã làm một phép tính sơ bộ.",
        "cefr": "C1"
    },
    "capability": {
        "definition": "the ability or qualities necessary to do something",
        "pos": "noun",
        "pron": "/ˌkeɪpəˈbɪləti/",
        "example": "Age affects the range of a person's capabilities.",
        "vietnamese": "khả năng",
        "vietnamese_example": "Tuổi tác ảnh hưởng đến phạm vi khả năng của một người.",
        "cefr": "C1"
    },
    "cargo": {
        "definition": "the goods carried in a ship, an aircraft or a motor vehicle",
        "pos": "noun",
        "pron": "/ˈkɑːɡəʊ/",
        "example": "The tanker began to spill its cargo of oil.",
        "vietnamese": "hàng hóa",
        "vietnamese_example": "Tàu chở dầu bắt đầu đổ dầu ra ngoài.",
        "cefr": "C1"
    },
    "carve": {
        "definition": "to make objects, patterns, etc. by cutting away material from a piece of wood or stone, or another hard material",
        "pos": "verb",
        "pron": "/kɑːv/",
        "example": "carve something, a carved doorway",
        "vietnamese": "khắc",
        "vietnamese_example": "khắc cái gì đó, một ô cửa được chạm khắc",
        "cefr": "C1"
    },
    "cattle": {
        "definition": "cows and bulls that are kept as farm animals for their milk or meat",
        "pos": "noun",
        "pron": "/ˈkætl/",
        "example": "a herd of cattle",
        "vietnamese": "gia súc",
        "vietnamese_example": "một đàn gia súc",
        "cefr": "C1"
    },
    "caution": {
        "definition": "care that you take in order to avoid danger or mistakes; the fact of not taking any risks",
        "pos": "noun",
        "pron": "/ˈkɔːʃn/",
        "example": "extreme/great caution",
        "vietnamese": "thận trọng",
        "vietnamese_example": "cực kỳ thận trọng/cực kỳ thận trọng",
        "cefr": "C1"
    },
    "charm": {
        "definition": "the power of pleasing or attracting people",
        "pos": "noun",
        "pron": "/tʃɑːm/",
        "example": "He was a man of great charm.",
        "vietnamese": "quyến rũ",
        "vietnamese_example": "Anh ấy là một người đàn ông có sức quyến rũ tuyệt vời.",
        "cefr": "C1"
    },
    "chunk": {
        "definition": "a thick, solid piece that has been cut or broken off something",
        "pos": "noun",
        "pron": "/tʃʌŋk/",
        "example": "a chunk of cheese/masonry",
        "vietnamese": "đoạn",
        "vietnamese_example": "một miếng pho mát/khối gạch",
        "cefr": "C1"
    },
    "circulate": {
        "definition": "when a liquid, gas or air circulates or is circulated, it moves continuously around a place or system",
        "pos": "verb",
        "pron": "/ˈsɜːkjəleɪt/",
        "example": "The condition prevents the blood from circulating freely.",
        "vietnamese": "lưu thông",
        "vietnamese_example": "Tình trạng này ngăn cản máu lưu thông tự do.",
        "cefr": "C1"
    },
    "circulation": {
        "definition": "the movement of blood around the body",
        "pos": "noun",
        "pron": "/ˌsɜːkjəˈleɪʃn/",
        "example": "Regular exercise will improve blood circulation.",
        "vietnamese": "sự lưu thông",
        "vietnamese_example": "Tập thể dục thường xuyên sẽ cải thiện lưu thông máu.",
        "cefr": "C1"
    },
    "civic": {
        "definition": "officially connected with a town or city",
        "pos": "adj",
        "pron": "/ˈsɪvɪk/",
        "example": "civic buildings/leaders",
        "vietnamese": "công dân",
        "vietnamese_example": "tòa nhà dân sự/lãnh đạo",
        "cefr": "C1"
    },
    "cling": {
        "definition": "to hold on tightly to somebody/something",
        "pos": "verb",
        "pron": "/klɪŋ/",
        "example": "cling to somebody/something, survivors clinging to a raft",
        "vietnamese": "bám vào",
        "vietnamese_example": "bám vào ai/cái gì, những người sống sót bám vào một chiếc bè",
        "cefr": "C1"
    },
    "coastal": {
        "definition": "of or near a coast",
        "pos": "adj",
        "pron": "/ˈkəʊstl/",
        "example": "coastal waters/resorts/scenery",
        "vietnamese": "ven biển",
        "vietnamese_example": "vùng nước ven biển/khu nghỉ dưỡng/phong cảnh",
        "cefr": "C1"
    },
    "collision": {
        "definition": "an accident in which two vehicles or people crash into each other",
        "pos": "noun",
        "pron": "/kəˈlɪʒn/",
        "example": "collision between A and B, a collision between two trains",
        "vietnamese": "va chạm",
        "vietnamese_example": "va chạm giữa A và B, va chạm giữa hai đoàn tàu",
        "cefr": "C1"
    },
    "colonial": {
        "definition": "connected with or belonging to a country that controls another country",
        "pos": "adj",
        "pron": "/kəˈləʊniəl/",
        "example": "a colonial power",
        "vietnamese": "thuộc địa",
        "vietnamese_example": "một cường quốc thuộc địa",
        "cefr": "C1"
    },
    "communist": {
        "definition": "connected with communism",
        "pos": "adj",
        "pron": "/ˈkɒmjənɪst/",
        "example": "communist ideology",
        "vietnamese": "cộng sản",
        "vietnamese_example": "hệ tư tưởng cộng sản",
        "cefr": "C1"
    },
    "companion": {
        "definition": "a person or an animal that travels with you or spends a lot of time with you",
        "pos": "noun",
        "pron": "/kəmˈpænjən/",
        "example": "travelling companions",
        "vietnamese": "bạn đồng hành",
        "vietnamese_example": "bạn đồng hành",
        "cefr": "C1"
    },
    "comparable": {
        "definition": "similar to somebody/something else and able to be compared",
        "pos": "adj",
        "pron": "/ˈkɒmpərəbl/",
        "example": "A comparable house in the south of the city would cost twice as much.",
        "vietnamese": "so sánh được",
        "vietnamese_example": "Một ngôi nhà tương đương ở phía nam thành phố sẽ có giá cao gấp đôi.",
        "cefr": "C1"
    },
    "competence": {
        "definition": "the ability to do something well",
        "pos": "noun",
        "pron": "/ˈkɒmpɪtəns/",
        "example": "to gain a high level of competence in English",
        "vietnamese": "năng lực",
        "vietnamese_example": "để đạt được trình độ cao về tiếng Anh",
        "cefr": "C1"
    },
    "complement": {
        "definition": "to add to something in a way that improves it or makes it more attractive",
        "pos": "verb",
        "pron": "/ˈkɒmplɪment/",
        "example": "The excellent menu is complemented by a good wine list.",
        "vietnamese": "bổ sung",
        "vietnamese_example": "Thực đơn tuyệt vời được bổ sung bởi danh sách rượu vang ngon.",
        "cefr": "C1"
    },
    "complication": {
        "definition": "a thing that makes a situation more complicated or difficult",
        "pos": "noun",
        "pron": "/ˌkɒmplɪˈkeɪʃn/",
        "example": "The bad weather added a further complication to our journey.",
        "vietnamese": "sự phức tạp",
        "vietnamese_example": "Thời tiết xấu càng làm cho cuộc hành trình của chúng tôi trở nên phức tạp hơn.",
        "cefr": "C1"
    },
    "compute": {
        "definition": "to calculate something",
        "pos": "verb",
        "pron": "/kəmˈpjuːt/",
        "example": "The losses were computed at £5 million.",
        "vietnamese": "tính toán",
        "vietnamese_example": "Khoản lỗ được tính toán là 5 triệu bảng Anh.",
        "cefr": "C1"
    },
    "conceal": {
        "definition": "to hide somebody/something",
        "pos": "verb",
        "pron": "/kənˈsiːl/",
        "example": "conceal somebody/something, The paintings were concealed beneath a thick layer of plaster.",
        "vietnamese": "che giấu",
        "vietnamese_example": "che giấu ai/cái gì, Những bức tranh được giấu dưới một lớp thạch cao dày.",
        "cefr": "C1"
    },
    "confirmation": {
        "definition": "a statement, letter, etc. that shows that something is true, correct or definite",
        "pos": "noun",
        "pron": "/ˌkɒnfəˈmeɪʃn/",
        "example": "I'm still waiting for confirmation of the test results.",
        "vietnamese": "xác nhận",
        "vietnamese_example": "Tôi vẫn đang chờ xác nhận kết quả xét nghiệm.",
        "cefr": "C1"
    },
    "congratulate": {
        "definition": "to tell somebody that you are pleased about their success or achievements",
        "pos": "verb",
        "pron": "/kənˈɡrætʃəleɪt/",
        "example": "I congratulated them all on their results.",
        "vietnamese": "chúc mừng",
        "vietnamese_example": "Tôi chúc mừng tất cả họ về kết quả của họ.",
        "cefr": "C1"
    },
    "congregation": {
        "definition": "a group of people who are gathered together in a church for a religious service, not including the priest and choir",
        "pos": "noun",
        "pron": "/ˌkɒŋɡrɪˈɡeɪʃn/",
        "example": "The congregation stood to sing the hymn.",
        "vietnamese": "hội chúng",
        "vietnamese_example": "Cộng đoàn đứng dậy hát thánh ca.",
        "cefr": "C1"
    },
    "conquer": {
        "definition": "to take control of a country or city and its people by force",
        "pos": "verb",
        "pron": "/ˈkɒŋkə(r)/",
        "example": "The Normans conquered England in 1066.",
        "vietnamese": "chinh phục",
        "vietnamese_example": "Người Norman chinh phục nước Anh vào năm 1066.",
        "cefr": "C1"
    },
    "consecutive": {
        "definition": "following one after another in a continuous series ",
        "pos": "adj",
        "pron": "/kənˈsekjətɪv/",
        "example": "She was absent for nine consecutive days.",
        "vietnamese": "liên tiếp",
        "vietnamese_example": "Cô đã vắng mặt suốt 9 ngày liên tiếp.",
        "cefr": "C1"
    },
    "consolidate": {
        "definition": "to make a position of power or success stronger so that it is more likely to continue",
        "pos": "verb",
        "pron": "/kənˈsɒlɪdeɪt/",
        "example": "With this new movie he has consolidated his position as the country's leading director.",
        "vietnamese": "củng cố",
        "vietnamese_example": "Với bộ phim mới này, ông đã củng cố vị trí đạo diễn hàng đầu đất nước của mình.",
        "cefr": "C1"
    },
    "consultation": {
        "definition": "The act of discussing something with someone to get advice or information.",
        "pos": "noun",
        "pron": "/ˌkɒnslˈteɪʃn/",
        "example": "The decision was made after consultation with experts.",
        "vietnamese": "sự tư vấn",
        "vietnamese_example": "Quyết định được đưa ra sau khi tham khảo ý kiến chuyên gia.",
        "cefr": "C1"
    },
    "contemplate": {
        "definition": "to think about whether you should do something, or how you should do something",
        "pos": "verb",
        "pron": "/ˈkɒntəmpleɪt/",
        "example": "contemplate something, You're too young to be contemplating retirement.",
        "vietnamese": "suy ngẫm",
        "vietnamese_example": "suy ngẫm điều gì đó, Bạn còn quá trẻ để dự tính nghỉ hưu.",
        "cefr": "C1"
    },
    "contender": {
        "definition": "a person or team with a chance of winning a competition",
        "pos": "noun",
        "pron": "/kənˈtendə(r)/",
        "example": "contender (for something), a contender for a gold medal in the Olympics",
        "vietnamese": "đối thủ",
        "vietnamese_example": "ứng cử viên (cho cái gì), ứng cử viên cho huy chương vàng trong Thế vận hội",
        "cefr": "C1"
    },
    "content": {
        "definition": "happy and satisfied with what you have",
        "pos": "adj",
        "pron": "/kənˈtent/",
        "example": "He seemed more content, less bitter.",
        "vietnamese": "nội dung",
        "vietnamese_example": "Anh có vẻ hài lòng hơn, bớt cay đắng hơn.",
        "cefr": "C1"
    },
    "contention": {
        "definition": "anger between people who disagree",
        "pos": "noun",
        "pron": "/kənˈtenʃn/",
        "example": "One area of contention is the availability of nursery care.",
        "vietnamese": "sự tranh chấp",
        "vietnamese_example": "Một lĩnh vực gây tranh cãi là sự sẵn có của dịch vụ chăm sóc trẻ.",
        "cefr": "C1"
    },
    "contrary": {
        "definition": "Opposite in nature, direction, or meaning.",
        "pos": "adj",
        "pron": "/ˈkɒntrəri/",
        "example": "Contrary views should still be discussed respectfully.",
        "vietnamese": "trái ngược",
        "vietnamese_example": "Những quan điểm trái ngược vẫn nên được thảo luận một cách tôn trọng.",
        "cefr": "C1"
    },
    "correlate": {
        "definition": "if two or more facts, figures, etc. correlate or if a fact, figure, etc. correlates with another, the facts are closely connected and affect or depend on each other",
        "pos": "verb",
        "pron": "/ˈkɒrəleɪt/",
        "example": "The figures do not seem to correlate.",
        "vietnamese": "tương quan",
        "vietnamese_example": "Các số liệu dường như không tương quan.",
        "cefr": "C1"
    },
    "correspond": {
        "definition": "to be the same as or match something",
        "pos": "verb",
        "pron": "/ˌkɒrəˈspɒnd/",
        "example": "Your account and hers do not correspond.",
        "vietnamese": "tương ứng",
        "vietnamese_example": "Tài khoản của bạn và của cô ấy không tương ứng.",
        "cefr": "C1"
    },
    "correspondence": {
        "definition": "the letters, emails, etc. a person sends and receives",
        "pos": "noun",
        "pron": "/ˌkɒrəˈspɒndəns/",
        "example": "personal/private correspondence",
        "vietnamese": "thư từ",
        "vietnamese_example": "thư từ cá nhân/riêng tư",
        "cefr": "C1"
    },
    "councillor": {
        "definition": "a member of a city or county council",
        "pos": "noun",
        "pron": "/ˈkaʊnsələ(r)/",
        "example": "Councillor Ann Jones",
        "vietnamese": "ủy viên hội đồng",
        "vietnamese_example": "Ủy viên Hội đồng Ann Jones",
        "cefr": "C1"
    },
    "credibility": {
        "definition": "The quality of being trusted and believed in.",
        "pos": "noun",
        "pron": "/ˌkred.əˈbɪl.ə.ti/",
        "example": "The report gained credibility after independent verification.",
        "vietnamese": "độ tin cậy",
        "vietnamese_example": "Báo cáo trở nên đáng tin cậy sau khi được kiểm chứng độc lập.",
        "cefr": "C1"
    },
    "credible": {
        "definition": "that can be believed or trusted",
        "pos": "adj",
        "pron": "/ˈkredəbl/",
        "example": "a credible explanation/witness",
        "vietnamese": "đáng tin cậy",
        "vietnamese_example": "một lời giải thích/nhân chứng đáng tin cậy",
        "cefr": "C1"
    },
    "crude": {
        "definition": "in its natural state, before it has been processed or refined",
        "pos": "adj",
        "pron": "/kruːd/",
        "example": "crude oil/metal",
        "vietnamese": "thô",
        "vietnamese_example": "dầu thô/kim loại",
        "cefr": "C1"
    },
    "curiosity": {
        "definition": "a strong desire to know about something",
        "pos": "noun",
        "pron": "/ˌkjʊəriˈɒsəti/",
        "example": "Children show curiosity about everything.",
        "vietnamese": "sự tò mò",
        "vietnamese_example": "Trẻ em thể hiện sự tò mò về mọi thứ.",
        "cefr": "C1"
    },
    "dam": {
        "definition": "a barrier that is built across a river in order to stop the water from flowing, used especially to make a reservoir (= a lake for storing water) or to produce electricity",
        "pos": "noun",
        "pron": "/dæm/",
        "example": "the Narmada dam in India",
        "vietnamese": "con đập",
        "vietnamese_example": "đập Narmada ở Ấn Độ",
        "cefr": "C1"
    },
    "debut": {
        "definition": "the first public appearance of a performer or sports player",
        "pos": "noun",
        "pron": "/ˈdeɪbjuː/",
        "example": "He will make his debut for the first team this week.",
        "vietnamese": "ra mắt",
        "vietnamese_example": "Anh ấy sẽ ra mắt đội một vào tuần này.",
        "cefr": "C1"
    },
    "defect": {
        "definition": "a fault in something or in the way it has been made that means that it is not perfect",
        "pos": "noun",
        "pron": "/ˈdiːfekt/",
        "example": "a defect in the glass",
        "vietnamese": "khuyết điểm",
        "vietnamese_example": "một khiếm khuyết trong kính",
        "cefr": "C1"
    },
    "defensive": {
        "definition": "protecting somebody/something against attack",
        "pos": "adj",
        "pron": "/dɪˈfensɪv/",
        "example": "As a defensive measure he built a series of coastal forts and watchtowers.",
        "vietnamese": "phòng thủ",
        "vietnamese_example": "Để phòng thủ, ông đã xây dựng một loạt pháo đài và tháp canh ven biển.",
        "cefr": "C1"
    },
    "delegate": {
        "definition": "a person who is chosen or elected to represent the views of a group of people and vote and make decisions for them",
        "pos": "noun",
        "pron": "/ˈdelɪɡət/",
        "example": "Congress delegates rejected the proposals.",
        "vietnamese": "đại biểu",
        "vietnamese_example": "Các đại biểu Quốc hội đã bác bỏ các đề xuất.",
        "cefr": "C1"
    },
    "delicate": {
        "definition": "easily damaged or broken",
        "pos": "adj",
        "pron": "/ˈdelɪkət/",
        "example": "delicate china teacups",
        "vietnamese": "thanh tú",
        "vietnamese_example": "tách trà trung quốc tinh tế",
        "cefr": "C1"
    },
    "dense": {
        "definition": "containing a lot of people, things, plants, etc. with little space between them",
        "pos": "adj",
        "pron": "/dens/",
        "example": "a dense crowd/forest",
        "vietnamese": "dày đặc",
        "vietnamese_example": "một đám đông/rừng dày đặc",
        "cefr": "C1"
    },
    "density": {
        "definition": "the quality of being dense; the degree to which something is dense",
        "pos": "noun",
        "pron": "/ˈdensəti/",
        "example": "The population density in this city is very high.",
        "vietnamese": "Tỉ trọng",
        "vietnamese_example": "Mật độ dân số ở thành phố này rất cao.",
        "cefr": "C1"
    },
    "dependence": {
        "definition": "the state of needing the help and support of somebody/something in order to survive or be successful",
        "pos": "noun",
        "pron": "/dɪˈpendəns/",
        "example": "Our relationship was based on mutual dependence.",
        "vietnamese": "sự phụ thuộc",
        "vietnamese_example": "Mối quan hệ của chúng tôi dựa trên sự phụ thuộc lẫn nhau.",
        "cefr": "C1"
    },
    "depict": {
        "definition": "to show an image of somebody/something in a picture",
        "pos": "verb",
        "pron": "/dɪˈpɪkt/",
        "example": "depict somebody/something (as somebody/something), a painting depicting the Virgin and Child",
        "vietnamese": "miêu tả",
        "vietnamese_example": "miêu tả ai đó/cái gì đó (như ai đó/cái gì đó), một bức tranh miêu tả Đức Trinh Nữ và Hài Nhi",
        "cefr": "C1"
    },
    "descend": {
        "definition": "to come or go down from a higher to a lower level",
        "pos": "verb",
        "pron": "/dɪˈsend/",
        "example": "The plane began to descend.",
        "vietnamese": "đi xuống",
        "vietnamese_example": "Máy bay bắt đầu hạ xuống.",
        "cefr": "C1"
    },
    "descent": {
        "definition": "an action of coming or going down",
        "pos": "noun",
        "pron": "/dɪˈsent/",
        "example": "The plane began its descent to Heathrow.",
        "vietnamese": "đi xuống",
        "vietnamese_example": "Máy bay bắt đầu hạ cánh xuống Heathrow.",
        "cefr": "C1"
    },
    "desirable": {
        "definition": "that you would like to have or do; worth having or doing",
        "pos": "adj",
        "pron": "/dɪˈzaɪərəbl/",
        "example": "She chatted for a few minutes about the qualities she considered desirable in a secretary.",
        "vietnamese": "mong muốn",
        "vietnamese_example": "Cô trò chuyện vài phút về những phẩm chất mà cô cho là cần có ở một thư ký.",
        "cefr": "C1"
    },
    "devastate": {
        "definition": "to completely destroy a place or an area",
        "pos": "verb",
        "pron": "/ˈdevəsteɪt/",
        "example": "The bomb devastated much of the old part of the city.",
        "vietnamese": "tàn phá",
        "vietnamese_example": "Quả bom đã tàn phá phần lớn khu vực cũ của thành phố.",
        "cefr": "C1"
    },
    "devise": {
        "definition": "to invent something new or a new way of doing something",
        "pos": "verb",
        "pron": "/dɪˈvaɪz/",
        "example": "A new system has been devised to control traffic in the city.",
        "vietnamese": "nghĩ ra",
        "vietnamese_example": "Một hệ thống mới đã được nghĩ ra để kiểm soát giao thông trong thành phố.",
        "cefr": "C1"
    },
    "diminish": {
        "definition": "to become smaller, weaker, etc.; to make something become smaller, weaker, etc.",
        "pos": "verb",
        "pron": "/dɪˈmɪnɪʃ/",
        "example": "The world's resources are rapidly diminishing.",
        "vietnamese": "giảm bớt",
        "vietnamese_example": "Nguồn tài nguyên của thế giới đang suy giảm nhanh chóng.",
        "cefr": "C1"
    },
    "dip": {
        "definition": "to put something quickly into a liquid and take it out again",
        "pos": "verb",
        "pron": "/dɪp/",
        "example": "dip something (into something), He dipped the brush into the paint.",
        "vietnamese": "nhúng",
        "vietnamese_example": "nhúng cái gì đó (vào cái gì đó), Anh ấy nhúng cọ vào sơn.",
        "cefr": "C1"
    },
    "disastrous": {
        "definition": "very bad, harmful or unsuccessful",
        "pos": "adj",
        "pron": "/dɪˈzɑːstrəs/",
        "example": "a disastrous harvest/fire/result",
        "vietnamese": "thảm họa",
        "vietnamese_example": "một vụ thu hoạch/cháy/kết quả thảm khốc",
        "cefr": "C1"
    },
    "disposal": {
        "definition": "the act of getting rid of something",
        "pos": "noun",
        "pron": "/dɪˈspəʊzl/",
        "example": "The council is responsible for waste disposal and street cleaning.",
        "vietnamese": "xử lý",
        "vietnamese_example": "Hội đồng có trách nhiệm xử lý rác thải và làm sạch đường phố.",
        "cefr": "C1"
    },
    "dispose": {
        "definition": "to arrange things or people in a particular way or position",
        "pos": "verb",
        "pron": "/dɪˈspəʊz/",
        "example": "The visitors disposed themselves in a circle round the statue.",
        "vietnamese": "vứt bỏ",
        "vietnamese_example": "Các du khách xếp thành một vòng tròn quanh bức tượng.",
        "cefr": "C1"
    },
    "disruption": {
        "definition": "a situation in which it is difficult for something to continue in the normal way; the act of stopping something from continuing in the normal way",
        "pos": "noun",
        "pron": "/dɪsˈrʌpʃn/",
        "example": "We aim to help you move house with minimum disruption to yourself.",
        "vietnamese": "sự gián đoạn",
        "vietnamese_example": "Chúng tôi mong muốn giúp bạn chuyển nhà với sự gián đoạn tối thiểu cho chính bạn.",
        "cefr": "C1"
    },
    "drain": {
        "definition": "to make something empty or dry by removing the liquid from it; to become empty or dry in this way",
        "pos": "verb",
        "pron": "/dreɪn/",
        "example": "Drain and rinse the pasta.",
        "vietnamese": "làm khô hạn",
        "vietnamese_example": "Xả và rửa sạch mì ống.",
        "cefr": "C1"
    },
    "drift": {
        "definition": "to move along smoothly and slowly in water or air",
        "pos": "verb",
        "pron": "/drɪft/",
        "example": "Clouds drifted across the sky.",
        "vietnamese": "trôi dạt",
        "vietnamese_example": "Những đám mây trôi khắp bầu trời.",
        "cefr": "C1"
    },
    "driving": {
        "definition": "strong and powerful; having a strong influence in making something happen",
        "pos": "adj",
        "pron": "/ˈdraɪvɪŋ/",
        "example": "Who was the driving force (= the person with the strongest influence) in the band?",
        "vietnamese": "lái xe",
        "vietnamese_example": "Ai là động lực (= người có ảnh hưởng mạnh nhất) trong ban nhạc?",
        "cefr": "C1"
    },
    "dumb": {
        "definition": "stupid",
        "pos": "adj",
        "pron": "/dʌm/",
        "example": "That was a pretty dumb thing to do.",
        "vietnamese": "câm",
        "vietnamese_example": "Đó là một điều khá ngu ngốc để làm.",
        "cefr": "C1"
    },
    "duo": {
        "definition": "two people who perform together or are often seen or thought of together",
        "pos": "noun",
        "pron": "/ˈdjuːəʊ/",
        "example": "the comedy duo Laurel and Hardy",
        "vietnamese": "cặp đôi",
        "vietnamese_example": "bộ đôi hài kịch Laurel và Hardy",
        "cefr": "C1"
    },
    "eager": {
        "definition": "very interested and excited by something that is going to happen or about something that you want to do; showing this",
        "pos": "adj",
        "pron": "/ˈiːɡə(r)/",
        "example": "eager crowds outside the stadium",
        "vietnamese": "háo hức",
        "vietnamese_example": "đám đông háo hức bên ngoài sân vận động",
        "cefr": "C1"
    },
    "echo": {
        "definition": "the reflecting of sound off a wall or inside a particular space so that a noise appears to be repeated; a sound that is reflected back in this way",
        "pos": "noun",
        "pron": "/ˈekəʊ/",
        "example": "There was an echo on the phone and I couldn't hear clearly.",
        "vietnamese": "tiếng vọng",
        "vietnamese_example": "Có tiếng vọng trong điện thoại và tôi không thể nghe rõ.",
        "cefr": "C1"
    },
    "ecological": {
        "definition": "connected with the relation of plants and living creatures to each other and to their environment",
        "pos": "adj",
        "pron": "/ˌiːkəˈlɒdʒɪkl/",
        "example": "We risk upsetting the ecological balance of the area.",
        "vietnamese": "sinh thái",
        "vietnamese_example": "Chúng ta có nguy cơ làm đảo lộn sự cân bằng sinh thái của khu vực.",
        "cefr": "C1"
    },
    "educator": {
        "definition": "a person whose job is to teach or educate people",
        "pos": "noun",
        "pron": "/ˈedʒukeɪtə(r)/",
        "example": "adult educators (= who teach adults)",
        "vietnamese": "nhà giáo dục",
        "vietnamese_example": "nhà giáo dục người lớn (= người dạy người lớn)",
        "cefr": "C1"
    },
    "efficiency": {
        "definition": "the quality of doing something well with no waste of time or money",
        "pos": "noun",
        "pron": "/ɪˈfɪʃnsi/",
        "example": "improvements in efficiency at the factory",
        "vietnamese": "hiệu quả",
        "vietnamese_example": "nâng cao hiệu quả tại nhà máy",
        "cefr": "C1"
    },
    "ego": {
        "definition": "your sense of your own value and importance",
        "pos": "noun",
        "pron": "/ˈiːɡəʊ/",
        "example": "He has the biggest ego of anyone I've ever met.",
        "vietnamese": "cái tôi",
        "vietnamese_example": "Anh ấy có cái tôi lớn nhất trong số những người tôi từng gặp.",
        "cefr": "C1"
    },
    "elaborate": {
        "definition": "very complicated and detailed; carefully prepared and organized",
        "pos": "adj",
        "pron": "/ɪˈlæbərət/",
        "example": "elaborate designs",
        "vietnamese": "phức tạp",
        "vietnamese_example": "thiết kế phức tạp",
        "cefr": "C1"
    },
    "electoral": {
        "definition": "connected with elections",
        "pos": "adj",
        "pron": "/ɪˈlektərəl/",
        "example": "electoral systems/reforms",
        "vietnamese": "bầu cử",
        "vietnamese_example": "hệ thống bầu cử/cải cách",
        "cefr": "C1"
    },
    "embark": {
        "definition": "to get onto a ship or plane; to put somebody/something onto a ship or plane",
        "pos": "verb",
        "pron": "/ɪmˈbɑːk/",
        "example": "We stood on the pier and watched as they embarked.",
        "vietnamese": "tham gia",
        "vietnamese_example": "Chúng tôi đứng trên bến tàu và quan sát khi họ lên đường.",
        "cefr": "C1"
    },
    "embed": {
        "definition": "to fix something in a substance or solid object",
        "pos": "verb",
        "pron": "/ɪmˈbed/",
        "example": "be embedded in something, an operation to remove glass that was embedded in his leg",
        "vietnamese": "nhúng",
        "vietnamese_example": "được nhúng vào một cái gì đó, một cuộc phẫu thuật để loại bỏ mảnh thủy tinh được gắn vào chân anh ấy",
        "cefr": "C1"
    },
    "emergence": {
        "definition": "the fact of somebody/something moving out of or away from something and becoming possible to see",
        "pos": "noun",
        "pron": "/ɪˈmɜːdʒəns/",
        "example": "the island’s emergence from the sea 3 000 years ago",
        "vietnamese": "sự xuất hiện",
        "vietnamese_example": "hòn đảo nổi lên từ biển 3 000 năm trước",
        "cefr": "C1"
    },
    "encompass": {
        "definition": "to include a large number or range of things",
        "pos": "verb",
        "pron": "/ɪnˈkʌmpəs/",
        "example": "The job encompasses a wide range of responsibilities.",
        "vietnamese": "bao gồm",
        "vietnamese_example": "Công việc bao gồm nhiều trách nhiệm.",
        "cefr": "C1"
    },
    "encouragement": {
        "definition": "the act of encouraging somebody to do something; something that encourages somebody",
        "pos": "noun",
        "pron": "/ɪnˈkʌrɪdʒmənt/",
        "example": "a few words of encouragement",
        "vietnamese": "sự khích lệ",
        "vietnamese_example": "một vài lời động viên",
        "cefr": "C1"
    },
    "endless": {
        "definition": "very large in size or amount and seeming to have no end",
        "pos": "adj",
        "pron": "/ˈendləs/",
        "example": "endless patience",
        "vietnamese": "vô tận",
        "vietnamese_example": "kiên nhẫn vô tận",
        "cefr": "C1"
    },
    "engagement": {
        "definition": "an agreement to marry somebody; the period during which two people are engaged",
        "pos": "noun",
        "pron": "/ɪnˈɡeɪdʒmənt/",
        "example": "Their engagement was announced in the local paper.",
        "vietnamese": "hôn ước",
        "vietnamese_example": "Lễ đính hôn của họ đã được công bố trên tờ báo địa phương.",
        "cefr": "C1"
    },
    "engaging": {
        "definition": "interesting or pleasant in a way that attracts your attention",
        "pos": "adj",
        "pron": "/ɪnˈɡeɪdʒɪŋ/",
        "example": "an engaging smile",
        "vietnamese": "hấp dẫn",
        "vietnamese_example": "một nụ cười hấp dẫn",
        "cefr": "C1"
    },
    "enquire": {
        "definition": "to ask somebody for some information",
        "pos": "verb",
        "pron": "/ɪnˈkwaɪə(r)/",
        "example": "enquire about somebody/something, I called the station to enquire about train times.",
        "vietnamese": "hỏi thăm",
        "vietnamese_example": "hỏi về ai/cái gì, tôi gọi ra nhà ga để hỏi về giờ tàu.",
        "cefr": "C1"
    },
    "enthusiast": {
        "definition": "a person who is very interested in something and spends a lot of time doing it",
        "pos": "noun",
        "pron": "/ɪnˈθjuːziæst/",
        "example": "a football enthusiast",
        "vietnamese": "người đam mê",
        "vietnamese_example": "một người đam mê bóng đá",
        "cefr": "C1"
    },
    "entitle": {
        "definition": "to give somebody the right to have or to do something",
        "pos": "verb",
        "pron": "/ɪnˈtaɪtl/",
        "example": "be entitled to something, You will be entitled to your pension when you reach 65.",
        "vietnamese": "quyền",
        "vietnamese_example": "được hưởng một cái gì đó, Bạn sẽ được hưởng lương hưu khi bạn đạt 65 tuổi.",
        "cefr": "C1"
    },
    "erect": {
        "definition": "to build something",
        "pos": "verb",
        "pron": "/ɪˈrekt/",
        "example": "The church was erected in 1582.",
        "vietnamese": "dựng lên",
        "vietnamese_example": "Nhà thờ được xây dựng vào năm 1582.",
        "cefr": "C1"
    },
    "essence": {
        "definition": "the most important quality or feature of something, that makes it what it is",
        "pos": "noun",
        "pron": "/ˈesns/",
        "example": "His paintings capture the essence of France.",
        "vietnamese": "nước hoa",
        "vietnamese_example": "Những bức tranh của ông nắm bắt được bản chất của nước Pháp.",
        "cefr": "C1"
    },
    "eternal": {
        "definition": "without an end; existing or continuing forever",
        "pos": "adj",
        "pron": "/ɪˈtɜːnl/",
        "example": "the promise of eternal life in heaven",
        "vietnamese": "vĩnh cửu",
        "vietnamese_example": "lời hứa về cuộc sống vĩnh cửu trên thiên đàng",
        "cefr": "C1"
    },
    "exaggerate": {
        "definition": "to make something seem larger, better, worse or more important than it really is",
        "pos": "verb",
        "pron": "/ɪɡˈzædʒəreɪt/",
        "example": "The hotel was really filthy and I'm not exaggerating.",
        "vietnamese": "nói quá",
        "vietnamese_example": "Khách sạn thực sự bẩn thỉu và tôi không hề phóng đại.",
        "cefr": "C1"
    },
    "exclusion": {
        "definition": "the act of preventing somebody/something from entering a place or taking part in something",
        "pos": "noun",
        "pron": "/ɪkˈskluːʒn/",
        "example": "exclusion (of somebody/something) (from something), He was disappointed with his exclusion from the England squad.",
        "vietnamese": "loại trừ",
        "vietnamese_example": "sự loại trừ (của ai đó / cái gì đó) (khỏi cái gì đó), Anh ấy thất vọng với việc bị loại khỏi đội tuyển Anh.",
        "cefr": "C1"
    },
    "exclusive": {
        "definition": "only to be used by one particular person or group; only given to one particular person or group",
        "pos": "adj",
        "pron": "/ɪkˈskluːsɪv/",
        "example": "The hotel has exclusive access to the beach.",
        "vietnamese": "loại trừ",
        "vietnamese_example": "Khách sạn có quyền truy cập độc quyền vào bãi biển.",
        "cefr": "C1"
    },
    "explicit": {
        "definition": "clear and easy to understand, so that you have no doubt what is meant",
        "pos": "adj",
        "pron": "/ɪkˈsplɪsɪt/",
        "example": "He gave me very explicit directions on how to get there.",
        "vietnamese": "rõ ràng",
        "vietnamese_example": "Anh ấy đã hướng dẫn tôi rất rõ ràng về cách đến đó.",
        "cefr": "C1"
    },
    "explicitly": {
        "definition": "clearly or directly, so that the meaning is easy to understand",
        "pos": "adv",
        "pron": "/ɪkˈsplɪsɪtli/",
        "example": "The report states explicitly that the system was to blame.",
        "vietnamese": "rõ ràng",
        "vietnamese_example": "Báo cáo nêu rõ ràng rằng hệ thống là nguyên nhân.",
        "cefr": "C1"
    },
    "fade": {
        "definition": "to become or to make something become paler or less bright",
        "pos": "verb",
        "pron": "/feɪd/",
        "example": "The curtains had faded in the sun.",
        "vietnamese": "phai",
        "vietnamese_example": "Những tấm rèm đã phai màu dưới nắng.",
        "cefr": "C1"
    },
    "fatal": {
        "definition": "causing or ending in death",
        "pos": "adj",
        "pron": "/ˈfeɪtl/",
        "example": "a fatal accident/blow/illness",
        "vietnamese": "gây tử vong",
        "vietnamese_example": "một tai nạn/đòn/bệnh chết người",
        "cefr": "C1"
    },
    "fierce": {
        "definition": "angry and aggressive in a way that is frightening",
        "pos": "adj",
        "pron": "/fɪəs/",
        "example": "a fierce dog",
        "vietnamese": "mạnh mẽ",
        "vietnamese_example": "một con chó hung dữ",
        "cefr": "C1"
    },
    "film-maker": {
        "definition": "A person who directs, produces, or works on films.",
        "pos": "noun",
        "pron": "/ˈfɪlm meɪkə(r)/",
        "example": "The young film-maker won an award at the festival.",
        "vietnamese": "người làm phim",
        "vietnamese_example": "Nhà làm phim trẻ đã giành một giải thưởng tại lễ hội.",
        "cefr": "C1"
    },
    "fixture": {
        "definition": "a sports event that has been arranged to take place on a particular date and at a particular place",
        "pos": "noun",
        "pron": "/ˈfɪkstʃə(r)/",
        "example": "There are plans to make the race an annual fixture.",
        "vietnamese": "vật cố định",
        "vietnamese_example": "Có kế hoạch biến cuộc đua thành một trận đấu hàng năm.",
        "cefr": "C1"
    },
    "flesh": {
        "definition": "the soft substance between the skin and bones of animal or human bodies",
        "pos": "noun",
        "pron": "/fleʃ/",
        "example": "The trap had cut deeply into the rabbit's flesh.",
        "vietnamese": "thịt",
        "vietnamese_example": "Cái bẫy đã cắt sâu vào thịt con thỏ.",
        "cefr": "C1"
    },
    "flourish": {
        "definition": "to develop quickly and become successful or common",
        "pos": "verb",
        "pron": "/ˈflʌrɪʃ/",
        "example": "Few businesses are flourishing in the present economic climate.",
        "vietnamese": "phát triển mạnh mẽ",
        "vietnamese_example": "Rất ít doanh nghiệp đang phát triển mạnh mẽ trong môi trường kinh tế hiện nay.",
        "cefr": "C1"
    },
    "footage": {
        "definition": "part of a film showing a particular event",
        "pos": "noun",
        "pron": "/ˈfʊtɪdʒ/",
        "example": "old film footage of the moon landing",
        "vietnamese": "cảnh quay",
        "vietnamese_example": "cảnh phim cũ về cuộc đổ bộ lên mặt trăng",
        "cefr": "C1"
    },
    "forth": {
        "definition": "away from a place; out",
        "pos": "adv",
        "pron": "/fɔːθ/",
        "example": "They set forth at dawn.",
        "vietnamese": "ra",
        "vietnamese_example": "Họ khởi hành vào lúc bình minh.",
        "cefr": "C1"
    },
    "forthcoming": {
        "definition": "going to happen, be published, etc. very soon",
        "pos": "adj",
        "pron": "/ˌfɔːθˈkʌmɪŋ/",
        "example": "the forthcoming elections",
        "vietnamese": "sắp tới",
        "vietnamese_example": "cuộc bầu cử sắp tới",
        "cefr": "C1"
    },
    "fragile": {
        "definition": "easily broken or damaged",
        "pos": "adj",
        "pron": "/ˈfrædʒaɪl/",
        "example": "fragile china/glass/bones",
        "vietnamese": "dễ vỡ",
        "vietnamese_example": "đồ sứ/thủy tinh/xương dễ vỡ",
        "cefr": "C1"
    },
    "funeral": {
        "definition": "a ceremony, often a religious one, for burying or cremating (= burning) a dead person",
        "pos": "noun",
        "pron": "/ˈfjuːnərəl/",
        "example": "Hundreds of people attended the funeral.",
        "vietnamese": "tang lễ",
        "vietnamese_example": "Hàng trăm người đã đến dự tang lễ.",
        "cefr": "C1"
    },
    "gaze": {
        "definition": "a long, steady look at somebody/something",
        "pos": "noun",
        "pron": "/ɡeɪz/",
        "example": "He met her gaze (= looked at her while she looked at him).",
        "vietnamese": "nhìn chằm chằm",
        "vietnamese_example": "Anh ấy gặp ánh mắt của cô ấy (= nhìn cô ấy trong khi cô ấy nhìn anh ấy).",
        "cefr": "C1"
    },
    "generic": {
        "definition": "shared by, including or typical of a whole group of things; not specific",
        "pos": "adj",
        "pron": "/dʒəˈnerɪk/",
        "example": "‘Vine fruit’ is the generic term for currants and raisins.",
        "vietnamese": "chung chung",
        "vietnamese_example": "'Quả nho' là thuật ngữ chung cho quả lý chua và nho khô.",
        "cefr": "C1"
    },
    "genocide": {
        "definition": "the murder of a large number of people from a particular nation or ethnic group, with the aim of destroying that nation or group",
        "pos": "noun",
        "pron": "/ˈdʒenəsaɪd/",
        "example": "Refugees gave accounts of the mass genocide.",
        "vietnamese": "sự diệt chủng",
        "vietnamese_example": "Những người tị nạn kể lại cuộc diệt chủng hàng loạt.",
        "cefr": "C1"
    },
    "glimpse": {
        "definition": "a sight of somebody/something for a very short time, when you do not see the person or thing completely",
        "pos": "noun",
        "pron": "/ɡlɪmps/",
        "example": "glimpse (of somebody/something), He caught a glimpse of her in the crowd.",
        "vietnamese": "thoáng qua",
        "vietnamese_example": "thoáng nhìn thấy (của ai đó / cái gì đó), Anh thoáng thấy cô ấy trong đám đông.",
        "cefr": "C1"
    },
    "glorious": {
        "definition": "deserving or bringing great success and making somebody/something famous",
        "pos": "adj",
        "pron": "/ˈɡlɔːriəs/",
        "example": "We congratulate you on this glorious victory.",
        "vietnamese": "huy hoàng",
        "vietnamese_example": "Chúng tôi xin chúc mừng các bạn về chiến thắng vẻ vang này.",
        "cefr": "C1"
    },
    "glory": {
        "definition": "great success that brings somebody praise and honour and makes them famous",
        "pos": "noun",
        "pron": "/ˈɡlɔːri/",
        "example": "Olympic glory in the 100 metres",
        "vietnamese": "vinh quang",
        "vietnamese_example": "Vinh quang Olympic ở nội dung 100 mét",
        "cefr": "C1"
    },
    "grace": {
        "definition": "an attractive quality of movement that is smooth and done with control; a simple and beautiful quality",
        "pos": "noun",
        "pron": "/ɡreɪs/",
        "example": "She moves with the natural grace of a ballerina.",
        "vietnamese": "duyên dáng",
        "vietnamese_example": "Cô ấy di chuyển với vẻ duyên dáng tự nhiên của một diễn viên múa ba lê.",
        "cefr": "C1"
    },
    "grasp": {
        "definition": "a strong hold of somebody/something or control over somebody/something",
        "pos": "noun",
        "pron": "/ɡrɑːsp/",
        "example": "I grabbed him, but he slipped from my grasp.",
        "vietnamese": "nắm bắt",
        "vietnamese_example": "Tôi tóm lấy anh ấy, nhưng anh ấy trượt khỏi vòng tay tôi.",
        "cefr": "C1"
    },
    "grip": {
        "definition": "an act of holding somebody/something tightly; a particular way of doing this",
        "pos": "noun",
        "pron": "/ɡrɪp/",
        "example": "Keep a tight grip on the rope.",
        "vietnamese": "va li",
        "vietnamese_example": "Giữ chặt dây thừng.",
        "cefr": "C1"
    },
    "gross": {
        "definition": "being the total amount of something before anything is taken away",
        "pos": "adj",
        "pron": "/ɡrəʊs/",
        "example": "gross weight (= including the container or wrapping)",
        "vietnamese": "tổng",
        "vietnamese_example": "tổng trọng lượng (= bao gồm thùng chứa hoặc gói)",
        "cefr": "C1"
    },
    "gut": {
        "definition": "the tube in the body through which food passes when it leaves the stomach",
        "pos": "noun",
        "pron": "/ɡʌt/",
        "example": "It can take up to 72 hours for food to pass through the gut.",
        "vietnamese": "ruột",
        "vietnamese_example": "Có thể mất tới 72 giờ để thức ăn đi qua ruột.",
        "cefr": "C1"
    },
    "halfway": {
        "definition": "at an equal distance between two points; in the middle of a period of time",
        "pos": "adv",
        "pron": "/ˌhɑːfˈweɪ/",
        "example": "It's about halfway between London and Bristol.",
        "vietnamese": "nửa chừng",
        "vietnamese_example": "Đó là khoảng nửa đường giữa London và Bristol.",
        "cefr": "C1"
    },
    "halt": {
        "definition": "an act of stopping the movement or progress of somebody/something",
        "pos": "noun",
        "pron": "/hɔːlt/",
        "example": "Work came to a halt when the machine broke down.",
        "vietnamese": "dừng lại",
        "vietnamese_example": "Công việc bị đình trệ khi máy bị hỏng.",
        "cefr": "C1"
    },
    "handful": {
        "definition": "the amount of something that can be held in one hand",
        "pos": "noun",
        "pron": "/ˈhændfʊl/",
        "example": "a handful of rice",
        "vietnamese": "một số ít",
        "vietnamese_example": "một nắm cơm",
        "cefr": "C1"
    },
    "handy": {
        "definition": "easy to use or to do",
        "pos": "adj",
        "pron": "/ˈhændi/",
        "example": "a handy little tool",
        "vietnamese": "tiện dụng",
        "vietnamese_example": "một công cụ nhỏ tiện dụng",
        "cefr": "C1"
    },
    "harvest": {
        "definition": "the time of year when the crops are gathered in on a farm, etc.; the act of cutting and gathering crops",
        "pos": "noun",
        "pron": "/ˈhɑːvɪst/",
        "example": "harvest time",
        "vietnamese": "mùa gặt",
        "vietnamese_example": "thời gian thu hoạch",
        "cefr": "C1"
    },
    "haunt": {
        "definition": "if the ghost of a dead person haunts a place, people say that they have seen it there",
        "pos": "verb",
        "pron": "/hɔːnt/",
        "example": "A headless rider haunts the country lanes.",
        "vietnamese": "ám ảnh",
        "vietnamese_example": "Một tay đua không đầu ám ảnh các con đường quê.",
        "cefr": "C1"
    },
    "homeland": {
        "definition": "the country where a person was born",
        "pos": "noun",
        "pron": "/ˈhəʊmlænd/",
        "example": "Many refugees have been forced to flee their homeland.",
        "vietnamese": "quê hương",
        "vietnamese_example": "Nhiều người tị nạn đã buộc phải rời bỏ quê hương.",
        "cefr": "C1"
    },
    "hopeful": {
        "definition": "believing that something you want will happen",
        "pos": "adj",
        "pron": "/ˈhəʊpfl/",
        "example": "hopeful (that…), I feel hopeful that we'll find a suitable house very soon.",
        "vietnamese": "hy vọng",
        "vietnamese_example": "hy vọng (that…), tôi cảm thấy hy vọng rằng chúng ta sẽ sớm tìm được một ngôi nhà phù hợp.",
        "cefr": "C1"
    },
    "horizon": {
        "definition": "the furthest that you can see, where the sky seems to meet the land or the sea",
        "pos": "noun",
        "pron": "/həˈraɪzn/",
        "example": "The sun sank below the horizon.",
        "vietnamese": "chân trời",
        "vietnamese_example": "Mặt trời đã lặn xuống dưới đường chân trời.",
        "cefr": "C1"
    },
    "humble": {
        "definition": "showing you do not think that you are as important as other people",
        "pos": "adj",
        "pron": "/ˈhʌmbl/",
        "example": "Be humble enough to learn from your mistakes.",
        "vietnamese": "khiêm tốn",
        "vietnamese_example": "Hãy đủ khiêm tốn để học hỏi từ những sai lầm của bạn.",
        "cefr": "C1"
    },
    "hydrogen": {
        "definition": "A chemical element that is the lightest gas and is used in industry and energy production.",
        "pos": "noun",
        "pron": "/ˈhaɪdrədʒən/",
        "example": "Hydrogen could become an important clean energy source.",
        "vietnamese": "hyđrô",
        "vietnamese_example": "Hyđrô có thể trở thành một nguồn năng lượng sạch quan trọng.",
        "cefr": "C1"
    },
    "immense": {
        "definition": "extremely large or great",
        "pos": "adj",
        "pron": "/ɪˈmens/",
        "example": "There is still an immense amount of work to be done.",
        "vietnamese": "bao la",
        "vietnamese_example": "Vẫn còn một khối lượng lớn công việc phải làm.",
        "cefr": "C1"
    },
    "imminent": {
        "definition": "likely to happen very soon",
        "pos": "adj",
        "pron": "/ˈɪmɪnənt/",
        "example": "the imminent threat of invasion",
        "vietnamese": "sắp xảy ra",
        "vietnamese_example": "mối đe dọa xâm lược sắp xảy ra",
        "cefr": "C1"
    },
    "inadequate": {
        "definition": "not enough; not good enough",
        "pos": "adj",
        "pron": "/ɪnˈædɪkwət/",
        "example": "inadequate supplies",
        "vietnamese": "không đầy đủ",
        "vietnamese_example": "nguồn cung cấp không đầy đủ",
        "cefr": "C1"
    },
    "inclined": {
        "definition": "wanting to do something",
        "pos": "adj",
        "pron": "/ɪnˈklaɪnd/",
        "example": "She was inclined to trust him.",
        "vietnamese": "nghiêng",
        "vietnamese_example": "Cô có xu hướng tin tưởng anh.",
        "cefr": "C1"
    },
    "inclusion": {
        "definition": "the fact of including somebody/something; the fact of being included",
        "pos": "noun",
        "pron": "/ɪnˈkluːʒn/",
        "example": "His inclusion in the team is in doubt.",
        "vietnamese": "bao gồm",
        "vietnamese_example": "Sự tham gia của anh ấy vào đội đang bị nghi ngờ.",
        "cefr": "C1"
    },
    "incur": {
        "definition": "if you incur something unpleasant, you are in a situation in which you have to deal with it",
        "pos": "verb",
        "pron": "/ɪnˈkɜː(r)/",
        "example": "She had incurred the wrath of her father by marrying without his consent.",
        "vietnamese": "gánh chịu",
        "vietnamese_example": "Cô đã phải gánh chịu cơn thịnh nộ của cha mình khi kết hôn mà không có sự đồng ý của ông.",
        "cefr": "C1"
    },
    "indulge": {
        "definition": "to allow yourself to have or do something that you like, especially something that is considered bad for you",
        "pos": "verb",
        "pron": "/ɪnˈdʌldʒ/",
        "example": "indulge in something, They went into town to indulge in some serious shopping.",
        "vietnamese": "thưởng thức",
        "vietnamese_example": "đam mê điều gì đó, họ đi vào thị trấn để mua sắm nghiêm túc.",
        "cefr": "C1"
    },
    "infant": {
        "definition": "a baby or very young child",
        "pos": "noun",
        "pron": "/ˈɪnfənt/",
        "example": "a nursery for infants under two",
        "vietnamese": "trẻ sơ sinh",
        "vietnamese_example": "nhà trẻ cho trẻ dưới hai tuổi",
        "cefr": "C1"
    },
    "inflict": {
        "definition": "to make somebody/something suffer something unpleasant",
        "pos": "verb",
        "pron": "/ɪnˈflɪkt/",
        "example": "inflict something on/upon somebody/something, They inflicted a humiliating defeat on the home team.",
        "vietnamese": "gây ra",
        "vietnamese_example": "gây ra điều gì đó lên/lên ai đó/cái gì đó, Họ đã gây ra một thất bại nhục nhã cho đội chủ nhà.",
        "cefr": "C1"
    },
    "influential": {
        "definition": "having a lot of influence on somebody/something",
        "pos": "adj",
        "pron": "/ˌɪnfluˈenʃl/",
        "example": "a highly influential book",
        "vietnamese": "có ảnh hưởng",
        "vietnamese_example": "một cuốn sách có ảnh hưởng lớn",
        "cefr": "C1"
    },
    "inject": {
        "definition": "to put a drug or other substance into a person’s or an animal’s body using a syringe",
        "pos": "verb",
        "pron": "/ɪnˈdʒekt/",
        "example": "inject something (into yourself/somebody/something), Adrenaline was injected into the muscle.",
        "vietnamese": "tiêm",
        "vietnamese_example": "tiêm thứ gì đó (vào chính bạn/ai đó/thứ gì đó), Adrenaline được tiêm vào cơ.",
        "cefr": "C1"
    },
    "injection": {
        "definition": "an act of injecting somebody with a drug or other substance",
        "pos": "noun",
        "pron": "/ɪnˈdʒekʃn/",
        "example": "to give somebody an injection",
        "vietnamese": "tiêm",
        "vietnamese_example": "tiêm thuốc cho ai đó",
        "cefr": "C1"
    },
    "instrumental": {
        "definition": "important in making something happen",
        "pos": "adj",
        "pron": "/ˌɪnstrəˈmentl/",
        "example": "The Conservation Trust performs an instrumental role in the protection of rural environments.",
        "vietnamese": "nhạc cụ",
        "vietnamese_example": "Quỹ Bảo tồn đóng vai trò quan trọng trong việc bảo vệ môi trường nông thôn.",
        "cefr": "C1"
    },
    "insufficient": {
        "definition": "not large, strong or important enough for a particular purpose",
        "pos": "adj",
        "pron": "/ˌɪnsəˈfɪʃnt/",
        "example": "insufficient time",
        "vietnamese": "không đủ",
        "vietnamese_example": "không đủ thời gian",
        "cefr": "C1"
    },
    "insult": {
        "definition": "a remark or an action that is said or done in order to offend somebody",
        "pos": "noun",
        "pron": "/ˈɪnsʌlt/",
        "example": "The crowd were shouting insults at the police.",
        "vietnamese": "sự sỉ nhục",
        "vietnamese_example": "Đám đông la hét lăng mạ cảnh sát.",
        "cefr": "C1"
    },
    "intact": {
        "definition": "complete and not damaged",
        "pos": "adj",
        "pron": "/ɪnˈtækt/",
        "example": "Most of the house remains intact even after two hundred years.",
        "vietnamese": "nguyên vẹn",
        "vietnamese_example": "Hầu hết ngôi nhà vẫn còn nguyên vẹn sau hai trăm năm.",
        "cefr": "C1"
    },
    "intake": {
        "definition": "the amount of food, drink, etc. that you take into your body",
        "pos": "noun",
        "pron": "/ˈɪnteɪk/",
        "example": "high fluid intake",
        "vietnamese": "lượng tiêu thụ",
        "vietnamese_example": "lượng chất lỏng cao",
        "cefr": "C1"
    },
    "intellectual": {
        "definition": "a person who is well educated and enjoys activities in which they have to think seriously about things",
        "pos": "noun",
        "pron": "/ˌɪntəˈlektʃuəl/",
        "example": "He was a leading intellectual of his day.",
        "vietnamese": "trí tuệ",
        "vietnamese_example": "Ông là một trí thức hàng đầu vào thời đó.",
        "cefr": "C1"
    },
    "intent": {
        "definition": "what you intend to do ",
        "pos": "noun",
        "pron": "/ɪnˈtent/",
        "example": "She denies possessing the drug with intent to supply.",
        "vietnamese": "ý định",
        "vietnamese_example": "Cô phủ nhận việc sở hữu ma túy với ý định cung cấp.",
        "cefr": "C1"
    },
    "interfere": {
        "definition": "to get involved in and try to influence a situation that should not really involve you, in a way that annoys other people",
        "pos": "verb",
        "pron": "/ˌɪntəˈfɪə(r)/",
        "example": "I wish my mother would stop interfering and let me make my own decisions.",
        "vietnamese": "can thiệp",
        "vietnamese_example": "Tôi ước gì mẹ tôi đừng can thiệp nữa và để tôi tự quyết định.",
        "cefr": "C1"
    },
    "interior": {
        "definition": "connected with the inside part of something",
        "pos": "adj",
        "pron": "/ɪnˈtɪəriə(r)/",
        "example": "interior walls",
        "vietnamese": "nội thất",
        "vietnamese_example": "bức tường nội thất",
        "cefr": "C1"
    },
    "intervene": {
        "definition": "to become involved in a situation in order to improve or help it",
        "pos": "verb",
        "pron": "/ˌɪntəˈviːn/",
        "example": "She might have been killed if the neighbours hadn't intervened.",
        "vietnamese": "can thiệp",
        "vietnamese_example": "Cô ấy có thể đã bị giết nếu hàng xóm không can thiệp.",
        "cefr": "C1"
    },
    "intimate": {
        "definition": "having a close and friendly relationship",
        "pos": "adj",
        "pron": "/ˈɪntɪmət/",
        "example": "intimate friends",
        "vietnamese": "thân mật",
        "vietnamese_example": "bạn bè thân thiết",
        "cefr": "C1"
    },
    "invisible": {
        "definition": "that cannot be seen",
        "pos": "adj",
        "pron": "/ɪnˈvɪzəbl/",
        "example": "a wizard who could make himself invisible",
        "vietnamese": "vô hình",
        "vietnamese_example": "một phù thủy có thể tàng hình",
        "cefr": "C1"
    },
    "involvement": {
        "definition": "the act of taking part in something or dealing with somebody",
        "pos": "noun",
        "pron": "/ɪnˈvɒlvmənt/",
        "example": "involvement in something, US involvement in European wars",
        "vietnamese": "sự tham gia",
        "vietnamese_example": "sự tham gia vào một cái gì đó, sự tham gia của Mỹ vào cuộc chiến tranh châu Âu",
        "cefr": "C1"
    },
    "irony": {
        "definition": "the funny or strange aspect of a situation that is very different from what you expect; a situation like this",
        "pos": "noun",
        "pron": "/ˈaɪrəni/",
        "example": "It was one of life's little ironies.",
        "vietnamese": "sự mỉa mai",
        "vietnamese_example": "Đó là một trong những điều trớ trêu nhỏ của cuộc sống.",
        "cefr": "C1"
    },
    "irrelevant": {
        "definition": "not important to or connected with a situation",
        "pos": "adj",
        "pron": "/ɪˈreləvənt/",
        "example": "totally/completely/largely irrelevant",
        "vietnamese": "không liên quan",
        "vietnamese_example": "hoàn toàn/hoàn toàn/phần lớn không liên quan",
        "cefr": "C1"
    },
    "isolation": {
        "definition": "the act of separating somebody/something; the state of being separate",
        "pos": "noun",
        "pron": "/ˌaɪsəˈleɪʃn/",
        "example": "geographical isolation",
        "vietnamese": "sự cách ly",
        "vietnamese_example": "sự cách ly về mặt địa lý",
        "cefr": "C1"
    },
    "kingdom": {
        "definition": "a country that has a king or queen as head of state (= official leader of the country)",
        "pos": "noun",
        "pron": "/ˈkɪŋdəm/",
        "example": "the United Kingdom",
        "vietnamese": "vương quốc",
        "vietnamese_example": "Vương quốc Anh",
        "cefr": "C1"
    },
    "lap": {
        "definition": "the top part of your legs that forms a flat surface when you are sitting down",
        "pos": "noun",
        "pron": "/læp/",
        "example": "on somebody's lap, There's only one seat so you'll have to sit on my lap.",
        "vietnamese": "lòng",
        "vietnamese_example": "trên đùi ai đó, Chỉ có một chỗ nên bạn sẽ phải ngồi trên đùi tôi.",
        "cefr": "C1"
    },
    "latter": {
        "definition": "used to refer to the second of two things or people mentioned",
        "pos": "adj",
        "pron": "/ˈlætə(r)/",
        "example": "He chose the latter option.",
        "vietnamese": "sau này",
        "vietnamese_example": "Anh đã chọn phương án sau.",
        "cefr": "C1"
    },
    "leak": {
        "definition": "a small hole that lets liquid or gas flow in or out of something by accident",
        "pos": "noun",
        "pron": "/liːk/",
        "example": "a leak in the roof",
        "vietnamese": "hở",
        "vietnamese_example": "một mái nhà bị rò rỉ",
        "cefr": "C1"
    },
    "leap": {
        "definition": "a long or high jump",
        "pos": "noun",
        "pron": "/liːp/",
        "example": "a leap of six metres",
        "vietnamese": "bước nhảy vọt",
        "vietnamese_example": "bước nhảy sáu mét",
        "cefr": "C1"
    },
    "legacy": {
        "definition": "money or property that is given to you by somebody when they die",
        "pos": "noun",
        "pron": "/ˈleɡəsi/",
        "example": "They each received a legacy of $5 000.",
        "vietnamese": "di sản",
        "vietnamese_example": "Mỗi người đều nhận được di sản trị giá 5 000 USD.",
        "cefr": "C1"
    },
    "legendary": {
        "definition": "very famous and talked about a lot by people",
        "pos": "adj",
        "pron": "/ˈledʒəndri/",
        "example": "a legendary figure",
        "vietnamese": "huyền thoại",
        "vietnamese_example": "một nhân vật huyền thoại",
        "cefr": "C1"
    },
    "legislative": {
        "definition": "connected with the act of making and passing laws",
        "pos": "adj",
        "pron": "/ˈledʒɪslətɪv/",
        "example": "a legislative assembly/body/council",
        "vietnamese": "lập pháp",
        "vietnamese_example": "một hội đồng/cơ quan/hội đồng lập pháp",
        "cefr": "C1"
    },
    "lengthy": {
        "definition": "very long, and often too long, in time or size",
        "pos": "adj",
        "pron": "/ˈleŋkθi/",
        "example": "lengthy delays",
        "vietnamese": "dài dòng",
        "vietnamese_example": "sự chậm trễ kéo dài",
        "cefr": "C1"
    },
    "lesser": {
        "definition": "not as great in size, amount or importance as something/somebody else",
        "pos": "adj",
        "pron": "/ˈlesə(r)/",
        "example": "people of lesser importance",
        "vietnamese": "ít hơn",
        "vietnamese_example": "người ít quan trọng hơn",
        "cefr": "C1"
    },
    "liberation": {
        "definition": "the act or process of freeing a country or a person from the control of somebody else",
        "pos": "noun",
        "pron": "/ˌlɪbəˈreɪʃn/",
        "example": "a war of liberation",
        "vietnamese": "giải phóng",
        "vietnamese_example": "một cuộc chiến tranh giải phóng",
        "cefr": "C1"
    },
    "license": {
        "definition": "to give somebody official permission to do, own, or use something",
        "pos": "verb",
        "pron": "/ˈlaɪsns/",
        "example": "license something, The new drug has not yet been licensed in the US.",
        "vietnamese": "giấy phép",
        "vietnamese_example": "cấp giấy phép gì đó, Loại thuốc mới này vẫn chưa được cấp phép ở Mỹ.",
        "cefr": "C1"
    },
    "lifelong": {
        "definition": "lasting or existing all through your life",
        "pos": "adj",
        "pron": "/ˈlaɪflɒŋ/",
        "example": "Paul became his lifelong friend.",
        "vietnamese": "suốt đời",
        "vietnamese_example": "Paul đã trở thành người bạn suốt đời của anh ấy.",
        "cefr": "C1"
    },
    "likelihood": {
        "definition": "the chance of something happening; how likely something is to happen",
        "pos": "noun",
        "pron": "/ˈlaɪklihʊd/",
        "example": "There is very little likelihood of that happening.",
        "vietnamese": "khả năng xảy ra",
        "vietnamese_example": "Có rất ít khả năng điều đó xảy ra.",
        "cefr": "C1"
    },
    "limb": {
        "definition": "an arm or a leg; a similar part of an animal, such as a wing",
        "pos": "noun",
        "pron": "/lɪm/",
        "example": "an artificial limb",
        "vietnamese": "chân tay",
        "vietnamese_example": "một chi giả",
        "cefr": "C1"
    },
    "linger": {
        "definition": "to continue to exist for longer than expected",
        "pos": "verb",
        "pron": "/ˈlɪŋɡə(r)/",
        "example": "The faint smell of her perfume lingered in the room.",
        "vietnamese": "nán lại",
        "vietnamese_example": "Mùi nước hoa thoang thoảng của cô còn vương vấn trong phòng.",
        "cefr": "C1"
    },
    "listing": {
        "definition": "a list, especially an official or published list of people or things, often arranged in alphabetical order",
        "pos": "noun",
        "pron": "/ˈlɪstɪŋ/",
        "example": "a comprehensive listing of all airlines",
        "vietnamese": "niêm yết",
        "vietnamese_example": "một danh sách đầy đủ của tất cả các hãng hàng không",
        "cefr": "C1"
    },
    "literacy": {
        "definition": "the ability to read and write",
        "pos": "noun",
        "pron": "/ˈlɪtərəsi/",
        "example": "a campaign to promote adult literacy",
        "vietnamese": "khả năng đọc viết",
        "vietnamese_example": "một chiến dịch khuyến khích người lớn biết đọc biết viết",
        "cefr": "C1"
    },
    "lobby": {
        "definition": "a large area inside the entrance of a public building where people can meet and wait",
        "pos": "noun",
        "pron": "/ˈlɒbi/",
        "example": "a hotel lobby",
        "vietnamese": "sảnh",
        "vietnamese_example": "sảnh khách sạn",
        "cefr": "C1"
    },
    "log": {
        "definition": "a thick piece of wood that is cut from or has fallen from a tree",
        "pos": "noun",
        "pron": "/lɒɡ/",
        "example": "logs for the fire",
        "vietnamese": "nhật ký",
        "vietnamese_example": "khúc gỗ để chữa cháy",
        "cefr": "C1"
    },
    "long-standing": {
        "definition": "that has existed or lasted for a long time",
        "pos": "adj",
        "pron": "/ˌlɒŋ ˈstændɪŋ/",
        "example": "a long-standing relationship",
        "vietnamese": "lâu đời",
        "vietnamese_example": "một mối quan hệ lâu dài",
        "cefr": "C1"
    },
    "long-time": {
        "definition": "having been the particular thing mentioned for a long time",
        "pos": "adj",
        "pron": "/ˈlɒŋ taɪm/",
        "example": "his long-time colleague",
        "vietnamese": "lâu năm",
        "vietnamese_example": "đồng nghiệp lâu năm của anh ấy",
        "cefr": "C1"
    },
    "loom": {
        "definition": "to appear as a large shape that is not clear, especially in a frightening way",
        "pos": "verb",
        "pron": "/luːm/",
        "example": "A dark shape loomed up ahead of us.",
        "vietnamese": "khung cửi",
        "vietnamese_example": "Một bóng đen hiện ra trước mắt chúng tôi.",
        "cefr": "C1"
    },
    "loyalty": {
        "definition": "the quality of being constant in your support of somebody/something",
        "pos": "noun",
        "pron": "/ˈlɔɪəlti/",
        "example": "Can I count on your loyalty?",
        "vietnamese": "lòng trung thành",
        "vietnamese_example": "Tôi có thể tin tưởng vào lòng trung thành của bạn không?",
        "cefr": "C1"
    },
    "machinery": {
        "definition": "machines as a group, especially large ones",
        "pos": "noun",
        "pron": "/məˈʃiːnəri/",
        "example": "agricultural/industrial machinery",
        "vietnamese": "máy móc",
        "vietnamese_example": "máy móc nông nghiệp/công nghiệp",
        "cefr": "C1"
    },
    "magical": {
        "definition": "containing magic; used in magic",
        "pos": "adj",
        "pron": "/ˈmædʒɪkl/",
        "example": "magical powers",
        "vietnamese": "huyền diệu",
        "vietnamese_example": "sức mạnh ma thuật",
        "cefr": "C1"
    },
    "magnetic": {
        "definition": "behaving like a magnet; that can be attracted by a magnet",
        "pos": "adj",
        "pron": "/mæɡˈnetɪk/",
        "example": "magnetic materials",
        "vietnamese": "từ tính",
        "vietnamese_example": "vật liệu từ tính",
        "cefr": "C1"
    },
    "magnitude": {
        "definition": "the great size or importance of something; the degree to which something is large or important",
        "pos": "noun",
        "pron": "/ˈmæɡnɪtjuːd/",
        "example": "We did not realize the magnitude of the problem.",
        "vietnamese": "kích cỡ",
        "vietnamese_example": "Chúng tôi đã không nhận ra tầm quan trọng của vấn đề.",
        "cefr": "C1"
    },
    "mainland": {
        "definition": "the main area of land of a country or region, not including any islands near to it",
        "pos": "noun",
        "pron": "/ðə ˈmeɪnlənd/",
        "example": "to/from the mainland, a boat to/from the mainland ",
        "vietnamese": "đất liền",
        "vietnamese_example": "đến/từ đất liền, một chiếc thuyền đến/từ đất liền",
        "cefr": "C1"
    },
    "mandatory": {
        "definition": "required by law",
        "pos": "adj",
        "pron": "/ˈmændətəri/",
        "example": "The offence carries a mandatory life sentence.",
        "vietnamese": "bắt buộc",
        "vietnamese_example": "Hành vi phạm tội mang bản án chung thân bắt buộc.",
        "cefr": "C1"
    },
    "manuscript": {
        "definition": "a copy of a book, piece of music, etc. before it has been printed",
        "pos": "noun",
        "pron": "/ˈmænjuskrɪpt/",
        "example": "an unpublished/original manuscript",
        "vietnamese": "bản thảo",
        "vietnamese_example": "một bản thảo gốc/chưa được xuất bản",
        "cefr": "C1"
    },
    "marginal": {
        "definition": "small and not important",
        "pos": "adj",
        "pron": "/ˈmɑːdʒɪnl/",
        "example": "a marginal improvement in weather conditions",
        "vietnamese": "cận biên",
        "vietnamese_example": "sự cải thiện nhỏ trong điều kiện thời tiết",
        "cefr": "C1"
    },
    "marine": {
        "definition": "connected with the sea and the creatures and plants that live there",
        "pos": "adj",
        "pron": "/məˈriːn/",
        "example": "marine life",
        "vietnamese": "hàng hải",
        "vietnamese_example": "sinh vật biển",
        "cefr": "C1"
    },
    "mask": {
        "definition": "something that you wear over your face to hide it, or to frighten or entertain other people ",
        "pos": "noun",
        "pron": "/mɑːsk/",
        "example": "The robbers wore stocking masks.",
        "vietnamese": "mặt nạ",
        "vietnamese_example": "Những tên cướp đeo mặt nạ bít tất.",
        "cefr": "C1"
    },
    "massacre": {
        "definition": "the killing of a large number of people especially in a cruel way",
        "pos": "noun",
        "pron": "/ˈmæsəkə(r)/",
        "example": "the bloody massacre of innocent civilians",
        "vietnamese": "thảm sát",
        "vietnamese_example": "vụ thảm sát đẫm máu thường dân vô tội",
        "cefr": "C1"
    },
    "mathematical": {
        "definition": "connected with or involving mathematics",
        "pos": "adj",
        "pron": "/ˌmæθəˈmætɪkl/",
        "example": "mathematical calculations/problems/models",
        "vietnamese": "toán học",
        "vietnamese_example": "tính toán/vấn đề/mô hình toán học",
        "cefr": "C1"
    },
    "mature": {
        "definition": "behaving in a sensible way, like an adult",
        "pos": "adj",
        "pron": "/məˈtʃʊə(r)/",
        "example": "Jane is very mature for her age.",
        "vietnamese": "trưởng thành",
        "vietnamese_example": "Jane rất trưởng thành so với tuổi của mình.",
        "cefr": "C1"
    },
    "meantime": {
        "definition": "for a short period of time but not permanently",
        "pos": "noun",
        "pron": "/ˈmiːntaɪm/",
        "example": "I'm changing my email address but for the meantime you can use the old one.",
        "vietnamese": "trong lúc đó",
        "vietnamese_example": "Tôi đang thay đổi địa chỉ email của mình nhưng trong thời gian chờ đợi, bạn có thể sử dụng địa chỉ cũ.",
        "cefr": "C1"
    },
    "medieval": {
        "definition": "connected with the Middle Ages (about AD 1000 to AD 1450)",
        "pos": "adj",
        "pron": "/ˌmediˈiːvl/",
        "example": "medieval architecture/castles/manuscripts",
        "vietnamese": "thời trung cổ",
        "vietnamese_example": "kiến trúc/lâu đài/bản viết tay thời trung cổ",
        "cefr": "C1"
    },
    "melody": {
        "definition": "a tune, especially the main tune in a piece of music written for several instruments or voices",
        "pos": "noun",
        "pron": "/ˈmelədi/",
        "example": "a haunting melody",
        "vietnamese": "giai điệu",
        "vietnamese_example": "một giai điệu đầy ám ảnh",
        "cefr": "C1"
    },
    "memoir": {
        "definition": "an account written by somebody, especially somebody famous, about their life and experiences",
        "pos": "noun",
        "pron": "/ˈmemwɑː(r)/",
        "example": "O'Connor published a childhood memoir.",
        "vietnamese": "hồi ký",
        "vietnamese_example": "O'Connor đã xuất bản một cuốn hồi ký thời thơ ấu.",
        "cefr": "C1"
    },
    "memorial": {
        "definition": "a statue, stone, etc. that is built in order to remind people of an important past event or of a famous person who has died",
        "pos": "noun",
        "pron": "/məˈmɔːriəl/",
        "example": "a war memorial (= in memory of soldiers who died in a war)",
        "vietnamese": "đài tưởng niệm",
        "vietnamese_example": "một đài tưởng niệm chiến tranh (= tưởng nhớ những người lính đã chết trong chiến tranh)",
        "cefr": "C1"
    },
    "mentor": {
        "definition": "an experienced person who advises and helps somebody with less experience over a period of time",
        "pos": "noun",
        "pron": "/ˈmentɔː(r)/",
        "example": "She was a friend and mentor to many young actors.",
        "vietnamese": "người hướng dẫn",
        "vietnamese_example": "Cô là bạn và là cố vấn của nhiều diễn viên trẻ.",
        "cefr": "C1"
    },
    "merchant": {
        "definition": "a person who buys and sells goods in large quantities, especially one who imports and exports goods",
        "pos": "noun",
        "pron": "/ˈmɜːtʃənt/",
        "example": "a coal/wine merchant",
        "vietnamese": "thương gia",
        "vietnamese_example": "một người buôn than/rượu",
        "cefr": "C1"
    },
    "mere": {
        "definition": "used when you want to emphasize how small, unimportant, etc. somebody/something is",
        "pos": "adj",
        "pron": "/mɪə(r)/",
        "example": "It took her a mere 20 minutes to win.",
        "vietnamese": "chỉ",
        "vietnamese_example": "Cô chỉ mất 20 phút để giành chiến thắng.",
        "cefr": "C1"
    },
    "merely": {
        "definition": "used meaning ‘only’ or ‘simply’ to emphasize a fact or something that you are saying",
        "pos": "adv",
        "pron": "/ˈmɪəli/",
        "example": "It is not merely a job, but a way of life.",
        "vietnamese": "chỉ đơn thuần là",
        "vietnamese_example": "Đó không chỉ là một công việc mà còn là một lối sống.",
        "cefr": "C1"
    },
    "merge": {
        "definition": "to combine or make two or more things combine to form a single thing",
        "pos": "verb",
        "pron": "/mɜːdʒ/",
        "example": "The banks are set to merge next year.",
        "vietnamese": "hợp nhất",
        "vietnamese_example": "Hai ngân hàng này dự kiến ​​sẽ sáp nhập vào năm tới.",
        "cefr": "C1"
    },
    "midst": {
        "definition": "the middle part of something",
        "pos": "noun",
        "pron": "/mɪdst/",
        "example": "in the midst of something, Such beauty was unexpected in the midst of the city.",
        "vietnamese": "ở giữa",
        "vietnamese_example": "giữa một điều gì đó, Vẻ đẹp như vậy thật bất ngờ giữa lòng thành phố.",
        "cefr": "C1"
    },
    "minimal": {
        "definition": "very small in size or amount; as small as possible",
        "pos": "adj",
        "pron": "/ˈmɪnɪml/",
        "example": "The work was carried out at minimal cost.",
        "vietnamese": "tối thiểu",
        "vietnamese_example": "Công việc được thực hiện với chi phí tối thiểu.",
        "cefr": "C1"
    },
    "minimize": {
        "definition": "to reduce something, especially something bad, to the lowest possible level",
        "pos": "verb",
        "pron": "/ˈmɪnɪmaɪz/",
        "example": "Good hygiene helps to minimize the risk of infection.",
        "vietnamese": "giảm thiểu",
        "vietnamese_example": "Vệ sinh tốt giúp giảm thiểu nguy cơ nhiễm trùng.",
        "cefr": "C1"
    },
    "miracle": {
        "definition": "an act or event that does not follow the laws of nature and is believed to be caused by God",
        "pos": "noun",
        "pron": "/ˈmɪrəkl/",
        "example": "the miracle of rising from the grave",
        "vietnamese": "phép lạ",
        "vietnamese_example": "phép lạ sống lại từ nấm mồ",
        "cefr": "C1"
    },
    "misleading": {
        "definition": "giving the wrong idea or impression and making you believe something that is not true",
        "pos": "adj",
        "pron": "/ˌmɪsˈliːdɪŋ/",
        "example": "misleading information/advertisements",
        "vietnamese": "gây hiểu lầm",
        "vietnamese_example": "thông tin/quảng cáo gây hiểu lầm",
        "cefr": "C1"
    },
    "missile": {
        "definition": "a weapon that is sent through the air and that explodes when it hits the thing that it is aimed at",
        "pos": "noun",
        "pron": "/ˈmɪsaɪl/",
        "example": "nuclear missiles",
        "vietnamese": "tên lửa",
        "vietnamese_example": "tên lửa hạt nhân",
        "cefr": "C1"
    },
    "mob": {
        "definition": "a large crowd of people, especially one that may become violent or cause trouble",
        "pos": "noun",
        "pron": "/mɒb/",
        "example": "an angry/unruly mob",
        "vietnamese": "đám đông",
        "vietnamese_example": "một đám đông giận dữ/ngỗ ngược",
        "cefr": "C1"
    },
    "mobilize": {
        "definition": "to work together in order to achieve a particular aim; to organize a group of people to do this",
        "pos": "verb",
        "pron": "/ˈməʊbəlaɪz/",
        "example": "The unions mobilized thousands of workers in a protest against the cuts.",
        "vietnamese": "huy động",
        "vietnamese_example": "Các công đoàn đã huy động hàng nghìn công nhân phản đối việc cắt giảm.",
        "cefr": "C1"
    },
    "modification": {
        "definition": "the act or process of changing something in order to improve it or make it more acceptable; a change that is made",
        "pos": "noun",
        "pron": "/ˌmɒdɪfɪˈkeɪʃn/",
        "example": "Considerable modification of the existing system is needed.",
        "vietnamese": "sửa đổi",
        "vietnamese_example": "Cần phải sửa đổi đáng kể hệ thống hiện tại.",
        "cefr": "C1"
    },
    "momentum": {
        "definition": "the ability to keep increasing or developing",
        "pos": "noun",
        "pron": "/məˈmentəm/",
        "example": "The fight for his release gathers momentum each day.",
        "vietnamese": "đà",
        "vietnamese_example": "Cuộc đấu tranh để trả tự do cho anh ấy đang thu thập động lực mỗi ngày.",
        "cefr": "C1"
    },
    "monk": {
        "definition": "a member of a religious group of men who often live apart from other people in a monastery and who do not marry or have personal possessions",
        "pos": "noun",
        "pron": "/mʌŋk/",
        "example": "Benedictine/Buddhist monks",
        "vietnamese": "nhà sư",
        "vietnamese_example": "tu sĩ Benedictine/Phật giáo",
        "cefr": "C1"
    },
    "motorist": {
        "definition": "a person driving a car",
        "pos": "noun",
        "pron": "/ˈməʊtərɪst/",
        "example": "The accident was reported by a passing motorist.",
        "vietnamese": "người lái xe ô tô",
        "vietnamese_example": "Vụ tai nạn được một người lái xe đi ngang qua báo cáo.",
        "cefr": "C1"
    },
    "municipal": {
        "definition": "connected with or belonging to a town, city or district that has its own local government",
        "pos": "adj",
        "pron": "/mjuːˈnɪsɪpl/",
        "example": "municipal elections/councils",
        "vietnamese": "thành phố",
        "vietnamese_example": "bầu cử/hội đồng thành phố",
        "cefr": "C1"
    },
    "bring about": {
        "definition": "Make something happen.",
        "pos": "verb",
        "pron": "",
        "example": "The politician introduced new laws that might bring about some positive change.",
        "vietnamese": "mang lại",
        "vietnamese_example": "Chính trị gia này đã đưa ra những luật mới có thể mang lại một số thay đổi tích cực.",
        "cefr": "B2"
    },
    "bring in": {
        "definition": "To introduce or recruit someone or something.",
        "pos": "phrase",
        "pron": "/brɪŋ ɪn/",
        "example": "The company plans to bring in new talent.",
        "vietnamese": "tuyển dụng; đưa vào",
        "vietnamese_example": "Công ty dự định tuyển dụng nhân tài mới.",
        "cefr": "B2+"
    },
    "carry out": {
        "definition": "Complete and/or accomplish something.",
        "pos": "verb",
        "pron": "",
        "example": "The secret agent carried out his orders exactly as planned.",
        "vietnamese": "tiến hành",
        "vietnamese_example": "Người mật vụ thực hiện mệnh lệnh của mình đúng như kế hoạch.",
        "cefr": "B2"
    },
    "come out with": {
        "definition": "Produce and distribute a product.",
        "pos": "verb",
        "pron": "",
        "example": "Microsoft is coming out with a new video game system next month.",
        "vietnamese": "đi ra với",
        "vietnamese_example": "Microsoft sẽ ra mắt một hệ thống trò chơi điện tử mới vào tháng tới.",
        "cefr": "B2"
    },
    "find out": {
        "definition": "Discover.",
        "pos": "verb",
        "pron": "",
        "example": "Vicky's parents are going to be so mad when they find out she got a tattoo.",
        "vietnamese": "tìm ra",
        "vietnamese_example": "Cha mẹ của Vicky sẽ rất tức giận khi biết cô có hình xăm.",
        "cefr": "B1"
    },
    "give up": {
        "definition": "Quit.",
        "pos": "verb",
        "pron": "",
        "example": "If you smoke, make every effort to give up. If you don’t then it is probable you’ll get cancer.",
        "vietnamese": "bỏ cuộc",
        "vietnamese_example": "Nếu bạn hút thuốc, hãy cố gắng bỏ thuốc. Nếu không thì rất có thể bạn sẽ bị ung thư.",
        "cefr": "B2"
    },
    "go into": {
        "definition": "Discuss in detail.",
        "pos": "verb",
        "pron": "",
        "example": "I really don't want to go into that now.",
        "vietnamese": "đi vào",
        "vietnamese_example": "Tôi thực sự không muốn đi sâu vào vấn đề đó bây giờ.",
        "cefr": "B2"
    },
    "hold up": {
        "definition": "Delay or stop progress.",
        "pos": "verb",
        "pron": "",
        "example": "Heavy traffic held us up for nearly an hour.",
        "vietnamese": "làm chậm lại",
        "vietnamese_example": "Giao thông đông đúc đã làm chúng tôi chậm gần một giờ.",
        "cefr": "B2"
    },
    "look back on": {
        "definition": "To remember nostalgically.",
        "pos": "verb",
        "pron": "",
        "example": "When I look back on my childhood, I often feel angry.",
        "vietnamese": "nhìn lại",
        "vietnamese_example": "Khi nhìn lại tuổi thơ của mình, tôi thường cảm thấy tức giận.",
        "cefr": "B2"
    },
    "look down on": {
        "definition": "See as inferior.",
        "pos": "verb",
        "pron": "",
        "example": "She's so conceited. She looks down on everybody else.",
        "vietnamese": "coi thường",
        "vietnamese_example": "Cô ấy quá kiêu ngạo. Cô ấy coi thường mọi người khác.",
        "cefr": "B2"
    },
    "look up to": {
        "definition": "Respect, admire someone.",
        "pos": "verb",
        "pron": "",
        "example": "He looks up to his father.",
        "vietnamese": "ngưỡng mộ",
        "vietnamese_example": "Cậu ấy rất ngưỡng mộ bố mình.",
        "cefr": "B2"
    },
    "make up for": {
        "definition": "Compensate for.",
        "pos": "verb",
        "pron": "",
        "example": "Allen made up for being late by getting me flowers.",
        "vietnamese": "bù đắp cho",
        "vietnamese_example": "Allen bù đắp cho việc đến muộn bằng cách mua hoa cho tôi.",
        "cefr": "B2"
    },
    "point out": {
        "definition": "Indicate.",
        "pos": "verb",
        "pron": "",
        "example": "I'd like to point out that figures in column two might be outdated.",
        "vietnamese": "chỉ ra",
        "vietnamese_example": "Tôi muốn chỉ ra rằng những số liệu ở cột hai có thể đã lỗi thời.",
        "cefr": "B2"
    },
    "put up with": {
        "definition": "Tolerate.",
        "pos": "verb",
        "pron": "",
        "example": "Sandy will not put up with smoking in her house.",
        "vietnamese": "chịu đựng",
        "vietnamese_example": "Sandy sẽ không chịu đựng việc hút thuốc trong nhà mình.",
        "cefr": "B2"
    },
    "set up": {
        "definition": "Falsely incriminate a person.",
        "pos": "verb",
        "pron": "",
        "example": "I don't think he killed those men. Somebody set him up.",
        "vietnamese": "gài bẫy",
        "vietnamese_example": "Tôi không nghĩ anh ấy đã giết những người đó. Có ai đó đã gài bẫy anh ấy.",
        "cefr": "B2"
    },
    "take on": {
        "definition": "Accept (responsibilities, work).",
        "pos": "verb",
        "pron": "",
        "example": "She has taken on too much responsibility in this project.",
        "vietnamese": "đảm nhận",
        "vietnamese_example": "Cô ấy đã gánh quá nhiều trách nhiệm trong dự án này.",
        "cefr": "B2"
    },
    "take over": {
        "definition": "Take control of.",
        "pos": "verb",
        "pron": "",
        "example": "Who is going to take over the family business when Aretha's father dies?",
        "vietnamese": "tiếp quản",
        "vietnamese_example": "Ai sẽ tiếp quản công việc kinh doanh của gia đình khi cha của Aretha qua đời?",
        "cefr": "B2"
    },
    "turn out": {
        "definition": "End up being.",
        "pos": "verb",
        "pron": "",
        "example": "She turned out to be the murderer after all.",
        "vietnamese": "hóa ra",
        "vietnamese_example": "Rốt cuộc cô ấy chính là kẻ giết người.",
        "cefr": "B2"
    },
    "turn up": {
        "definition": "Increase the volume or intensity of a TV, radio, or other machine.",
        "pos": "verb",
        "pron": "",
        "example": "Turn up the TV. I can't hear what they're saying.",
        "vietnamese": "vặn to",
        "vietnamese_example": "Vặn to TV lên đi. Tôi không nghe được họ đang nói gì.",
        "cefr": "B2"
    },
    "work out": {
        "definition": "Solve.",
        "pos": "verb",
        "pron": "",
        "example": "I hope you two can work out your problems.",
        "vietnamese": "giải quyết",
        "vietnamese_example": "Tôi hy vọng hai bạn có thể giải quyết những vấn đề của mình.",
        "cefr": "B2"
    },
    "a double-edged sword": {
        "definition": "Something that has both advantages and disadvantages.",
        "pos": "idiom",
        "pron": "",
        "example": "Globalization can be a double-edged sword for local communities.",
        "vietnamese": "một con dao hai lưỡi",
        "vietnamese_example": "Toàn cầu hóa có thể là con dao hai lưỡi đối với cộng đồng địa phương.",
        "cefr": "C1"
    },
    "the tip of the iceberg": {
        "definition": "A small visible part of a much larger problem or issue.",
        "pos": "idiom",
        "pron": "",
        "example": "Traffic congestion is only the tip of the iceberg in modern cities.",
        "vietnamese": "phần nổi của tảng băng trôi",
        "vietnamese_example": "Ùn tắc giao thông chỉ là phần nổi của tảng băng trôi ở các thành phố hiện đại.",
        "cefr": "C1"
    },
    "in the long run": {
        "definition": "Over a long period of time.",
        "pos": "idiom",
        "pron": "",
        "example": "Investing in public transport saves money in the long run.",
        "vietnamese": "về lâu dài",
        "vietnamese_example": "Đầu tư vào giao thông công cộng sẽ tiết kiệm tiền về lâu dài.",
        "cefr": "C1"
    },
    "on the right track": {
        "definition": "Making progress in the correct direction.",
        "pos": "idiom",
        "pron": "",
        "example": "The policy seems to be on the right track so far.",
        "vietnamese": "đi đúng hướng",
        "vietnamese_example": "Cho đến nay, chính sách này có vẻ đang đi đúng hướng.",
        "cefr": "C1"
    },
    "a wake-up call": {
        "definition": "An event that makes people realize a problem needs attention.",
        "pos": "idiom",
        "pron": "",
        "example": "The drought was a wake-up call for policymakers.",
        "vietnamese": "một cuộc gọi đánh thức",
        "vietnamese_example": "Hạn hán là hồi chuông cảnh tỉnh cho các nhà hoạch định chính sách.",
        "cefr": "C1"
    },
    "back to square one": {
        "definition": "Forced to start again from the beginning.",
        "pos": "idiom",
        "pron": "",
        "example": "When the plan failed, the team went back to square one.",
        "vietnamese": "trở lại hình vuông một",
        "vietnamese_example": "Khi kế hoạch thất bại, cả đội quay trở lại hình vuông.",
        "cefr": "C1"
    },
    "a matter of time": {
        "definition": "Something that will certainly happen sooner or later.",
        "pos": "idiom",
        "pron": "",
        "example": "Without reform, it is only a matter of time before the system collapses.",
        "vietnamese": "vấn đề thời gian",
        "vietnamese_example": "Nếu không cải cách, việc hệ thống sụp đổ chỉ là vấn đề thời gian.",
        "cefr": "C1"
    },
    "food for thought": {
        "definition": "Something worth thinking seriously about.",
        "pos": "idiom",
        "pron": "",
        "example": "The lecture gave students plenty of food for thought.",
        "vietnamese": "thức ăn cho sự suy nghĩ",
        "vietnamese_example": "Bài giảng đã mang lại cho sinh viên nhiều điều đáng suy ngẫm.",
        "cefr": "C1"
    },
    "in the same boat": {
        "definition": "In the same difficult situation as other people.",
        "pos": "idiom",
        "pron": "",
        "example": "Small businesses are all in the same boat during a recession.",
        "vietnamese": "trong cùng một chiếc thuyền",
        "vietnamese_example": "Các doanh nghiệp nhỏ đều ở trên cùng một con thuyền trong thời kỳ suy thoái.",
        "cefr": "C1"
    },
    "at the heart of": {
        "definition": "At the center or most important part of something.",
        "pos": "idiom",
        "pron": "",
        "example": "Trust is at the heart of every healthy community.",
        "vietnamese": "ở trung tâm của",
        "vietnamese_example": "Niềm tin là trọng tâm của mọi cộng đồng lành mạnh.",
        "cefr": "C1"
    },
    "a far cry from": {
        "definition": "Very different from something.",
        "pos": "idiom",
        "pron": "",
        "example": "Online discussion is often a far cry from real face-to-face communication.",
        "vietnamese": "khác xa với",
        "vietnamese_example": "Thảo luận trực tuyến thường khác xa với giao tiếp mặt đối mặt thực sự.",
        "cefr": "C1"
    },
    "under pressure": {
        "definition": "Experiencing stress because of demands or difficulties.",
        "pos": "idiom",
        "pron": "",
        "example": "Healthcare systems are under pressure during epidemics.",
        "vietnamese": "chịu áp lực",
        "vietnamese_example": "Hệ thống chăm sóc sức khỏe đang chịu áp lực trong thời kỳ dịch bệnh.",
        "cefr": "C1"
    },
    "a stepping stone": {
        "definition": "Something that helps progress toward a larger goal.",
        "pos": "idiom",
        "pron": "",
        "example": "Volunteering can be a stepping stone to a professional career.",
        "vietnamese": "một bước đệm",
        "vietnamese_example": "Tình nguyện có thể là một bước đệm cho sự nghiệp chuyên nghiệp.",
        "cefr": "C1"
    },
    "in light of": {
        "definition": "After considering new information or circumstances.",
        "pos": "idiom",
        "pron": "",
        "example": "In light of recent evidence, the proposal needs revision.",
        "vietnamese": "trong ánh sáng của",
        "vietnamese_example": "Dựa trên những bằng chứng gần đây, đề xuất này cần được sửa đổi.",
        "cefr": "C1"
    },
    "by and large": {
        "definition": "Generally speaking.",
        "pos": "idiom",
        "pron": "",
        "example": "By and large, the public supports stricter safety rules.",
        "vietnamese": "nhìn chung",
        "vietnamese_example": "Nhìn chung, công chúng ủng hộ các quy định an toàn chặt chẽ hơn.",
        "cefr": "C1"
    },
    "an uphill battle": {
        "definition": "A very difficult struggle.",
        "pos": "idiom",
        "pron": "",
        "example": "Reducing inequality remains an uphill battle in many countries.",
        "vietnamese": "một trận chiến khó khăn",
        "vietnamese_example": "Giảm bất bình đẳng vẫn là một cuộc chiến khó khăn ở nhiều quốc gia.",
        "cefr": "C1"
    },
    "a vicious circle": {
        "definition": "A harmful situation in which one problem causes another and worsens the first.",
        "pos": "idiom",
        "pron": "",
        "example": "Poverty and poor education often form a vicious circle.",
        "vietnamese": "một vòng luẩn quẩn",
        "vietnamese_example": "Nghèo đói và trình độ học vấn kém thường tạo thành một vòng luẩn quẩn.",
        "cefr": "C1"
    },
    "a turning point": {
        "definition": "A moment when an important change happens.",
        "pos": "idiom",
        "pron": "",
        "example": "The invention marked a turning point in digital communication.",
        "vietnamese": "một bước ngoặt",
        "vietnamese_example": "Phát minh này đánh dấu một bước ngoặt trong truyền thông kỹ thuật số.",
        "cefr": "C1"
    },
    "in the face of": {
        "definition": "Despite or when dealing with something difficult.",
        "pos": "idiom",
        "pron": "",
        "example": "Communities remained resilient in the face of repeated disasters.",
        "vietnamese": "đối mặt với",
        "vietnamese_example": "Cộng đồng vẫn kiên cường khi đối mặt với thảm họa lặp đi lặp lại.",
        "cefr": "C1"
    },
    "beyond doubt": {
        "definition": "Certainly true; impossible to question.",
        "pos": "idiom",
        "pron": "",
        "example": "The benefits of clean water are beyond doubt.",
        "vietnamese": "không còn nghi ngờ gì nữa",
        "vietnamese_example": "Những lợi ích của nước sạch là không thể nghi ngờ.",
        "cefr": "C1"
    },
    "break down": {
        "definition": "Become mentally ill.",
        "pos": "verb",
        "pron": "",
        "example": "She broke down after her husband died.",
        "vietnamese": "phá vỡ",
        "vietnamese_example": "Cô suy sụp sau khi chồng qua đời.",
        "cefr": "B2"
    },
    "bring back": {
        "definition": "Restore somebody to consciousness or life.",
        "pos": "verb",
        "pron": "",
        "example": "Sometimes when people die they are able to be brought back to life.",
        "vietnamese": "hồi sinh",
        "vietnamese_example": "Đôi khi người ta có thể được cứu sống và đưa trở lại từ cõi chết.",
        "cefr": "B2"
    },
    "bring up": {
        "definition": "Raise (a child).",
        "pos": "verb",
        "pron": "",
        "example": "Sam was brought up in South Carolina.",
        "vietnamese": "nuôi dưỡng",
        "vietnamese_example": "Sam lớn lên ở Nam Carolina.",
        "cefr": "B2"
    },
    "call back": {
        "definition": "Return to a place to see somebody again.",
        "pos": "verb",
        "pron": "",
        "example": "Mrs Bottone is in a meeting. Can you call back this afternoon, please?",
        "vietnamese": "gọi lại",
        "vietnamese_example": "Bà Bottone đang họp. Chiều nay bạn có thể gọi lại được không?",
        "cefr": "B2"
    },
    "call round": {
        "definition": "Visit someone, usually for a short period of time.",
        "pos": "verb",
        "pron": "",
        "example": "I think I'll call round and see if my grandmother needs anything.",
        "vietnamese": "ghé thăm",
        "vietnamese_example": "Tôi nghĩ tôi sẽ ghé thăm bà để xem bà có cần gì không.",
        "cefr": "B2"
    },
    "carry on with": {
        "definition": "Continue.",
        "pos": "verb",
        "pron": "",
        "example": "I want you to carry on with the project while I am out of town.",
        "vietnamese": "tiếp tục với",
        "vietnamese_example": "Tôi muốn bạn tiếp tục dự án khi tôi đi vắng.",
        "cefr": "B2"
    },
    "check into": {
        "definition": "Investigate, look for (often through a service).",
        "pos": "verb",
        "pron": "",
        "example": "We are checking into discount flights to London.",
        "vietnamese": "kiểm tra",
        "vietnamese_example": "Chúng tôi đang kiểm tra các chuyến bay giảm giá đến London.",
        "cefr": "B2"
    },
    "cheer up": {
        "definition": "Become cheerful.",
        "pos": "verb",
        "pron": "",
        "example": "Cheer up. Everything will be all right.",
        "vietnamese": "Vui lên",
        "vietnamese_example": "Vui lên. Mọi chuyện sẽ ổn thôi.",
        "cefr": "B2"
    },
    "come back": {
        "definition": "Return.",
        "pos": "verb",
        "pron": "",
        "example": "What time are you coming back?",
        "vietnamese": "trở lại",
        "vietnamese_example": "Mấy giờ bạn sẽ quay lại?",
        "cefr": "B2"
    },
    "come down with": {
        "definition": "Become sick with.",
        "pos": "verb",
        "pron": "",
        "example": "He came down with the flu.",
        "vietnamese": "mắc bệnh",
        "vietnamese_example": "Anh ấy bị cúm.",
        "cefr": "B2"
    },
    "come up": {
        "definition": "Happen unexpectedly.",
        "pos": "verb",
        "pron": "",
        "example": "I planned on visiting you last night, but something came up and I was unable to visit.",
        "vietnamese": "phát sinh",
        "vietnamese_example": "Tôi định ghé thăm bạn tối qua, nhưng có việc phát sinh nên tôi không thể đến.",
        "cefr": "B2"
    },
    "get back": {
        "definition": "Take revenge on someone.",
        "pos": "verb",
        "pron": "",
        "example": "Brandon pranked me last Halloween, so this year I am going to get him back.",
        "vietnamese": "trả đũa",
        "vietnamese_example": "Brandon đã chơi khăm tôi vào dịp Halloween năm ngoái, nên năm nay tôi sẽ trả đũa cậu ấy.",
        "cefr": "B2"
    },
    "get on with": {
        "definition": "Have a good relationship.",
        "pos": "verb",
        "pron": "",
        "example": "Natasha doesn't get on with her co-workers.",
        "vietnamese": "hòa hợp với",
        "vietnamese_example": "Natasha không hòa hợp với đồng nghiệp của mình.",
        "cefr": "B2"
    },
    "get out of": {
        "definition": "Exit (a small boat, car, an enclosed area).",
        "pos": "verb",
        "pron": "",
        "example": "I fell into the water when I tried to get out of the canoe.",
        "vietnamese": "thoát ra khỏi",
        "vietnamese_example": "Tôi bị rơi xuống nước khi cố gắng thoát ra khỏi ca nô.",
        "cefr": "B2"
    },
    "go in for": {
        "definition": "Participate ( inf.).",
        "pos": "verb",
        "pron": "",
        "example": "Are you going to go in for soccer this year at school?",
        "vietnamese": "đi vào cho",
        "vietnamese_example": "Năm nay bạn có định tham gia bóng đá ở trường không?",
        "cefr": "B2"
    },
    "go on with": {
        "definition": "Continue (a plan, a conversation).",
        "pos": "verb",
        "pron": "",
        "example": "I think we should go on with the meeting and stop wasting time.",
        "vietnamese": "tiếp tục với",
        "vietnamese_example": "Tôi nghĩ chúng ta nên tiếp tục cuộc họp và ngừng lãng phí thời gian.",
        "cefr": "B2"
    },
    "look up": {
        "definition": "Search for information.",
        "pos": "verb",
        "pron": "",
        "example": "Sometimes when I reminisce I look up old friends on the Internet.",
        "vietnamese": "tra cứu",
        "vietnamese_example": "Đôi khi hồi tưởng lại, tôi tìm kiếm những người bạn cũ trên Internet.",
        "cefr": "B2"
    },
    "make up": {
        "definition": "Put on cosmetics.",
        "pos": "verb",
        "pron": "",
        "example": "She spent an hour making herself up for the party.",
        "vietnamese": "trang điểm",
        "vietnamese_example": "Cô ấy dành một tiếng để trang điểm cho bữa tiệc.",
        "cefr": "B2"
    },
    "pick up": {
        "definition": "Try to initiate a relationship with someone (often in a bar).",
        "pos": "verb",
        "pron": "",
        "example": "Some weird guy tried to pick Patricia up at the bar.",
        "vietnamese": "tán tỉnh",
        "vietnamese_example": "Một gã kỳ quặc đã cố tán tỉnh Patricia ở quán bar.",
        "cefr": "B2"
    },
    "put down": {
        "definition": "Insult, say bad things about.",
        "pos": "verb",
        "pron": "",
        "example": "She always puts down people who don't share her opinions.",
        "vietnamese": "hạ thấp",
        "vietnamese_example": "Cô ấy luôn hạ thấp những người không chia sẻ quan điểm của mình.",
        "cefr": "B2"
    },
    "put out": {
        "definition": "Inconvenience someone.",
        "pos": "verb",
        "pron": "",
        "example": "I don't want to put you out, but could you pick me up at the airport.",
        "vietnamese": "làm phiền",
        "vietnamese_example": "Tôi không muốn làm phiền bạn, nhưng bạn có thể đón tôi ở sân bay được không?",
        "cefr": "B2"
    },
    "set off": {
        "definition": "Cause to be ignited/exploded.",
        "pos": "verb",
        "pron": "",
        "example": "When setting off fireworks you must be very careful not to get injured.",
        "vietnamese": "khởi hành",
        "vietnamese_example": "Khi đốt pháo hoa bạn phải hết sức cẩn thận để không bị thương.",
        "cefr": "B2"
    },
    "take back": {
        "definition": "Return an item to a store.",
        "pos": "verb",
        "pron": "",
        "example": "The dress my grandmother bought for me didn't fit, so I took it back and exchanged it for a pair of pants.",
        "vietnamese": "lấy lại",
        "vietnamese_example": "Chiếc váy bà ngoại mua cho tôi không vừa nên tôi lấy lại và đổi lấy một chiếc quần.",
        "cefr": "B2"
    },
    "take off": {
        "definition": "Leave work or school for a period of time.",
        "pos": "verb",
        "pron": "",
        "example": "I was sick last week, so I took a few days off of work.",
        "vietnamese": "nghỉ",
        "vietnamese_example": "Tuần trước tôi bị ốm nên đã nghỉ làm vài ngày.",
        "cefr": "B2"
    },
    "take up": {
        "definition": "Shorten a garment when sewing.",
        "pos": "verb",
        "pron": "",
        "example": "This dress is too long, I am going to take it up.",
        "vietnamese": "lên gấu",
        "vietnamese_example": "Chiếc váy này quá dài, tôi sẽ lên gấu nó.",
        "cefr": "B2"
    },
    "blow up": {
        "definition": "Suddenly become very angry.",
        "pos": "verb",
        "pron": "",
        "example": "When Joan heard the news, she blew up and rushed out of the room.",
        "vietnamese": "nổ tung",
        "vietnamese_example": "Khi Joan biết tin, cô ấy nổi giận và lao ra khỏi phòng.",
        "cefr": "B2"
    },
    "call off": {
        "definition": "Order to stop (an invasion, guard dogs).",
        "pos": "verb",
        "pron": "",
        "example": "He called off the dogs when he saw it was his neighbor.",
        "vietnamese": "ra lệnh dừng lại",
        "vietnamese_example": "Anh ấy đã ra lệnh dừng lũ chó lại khi thấy đó là hàng xóm của mình.",
        "cefr": "B2"
    },
    "carry on": {
        "definition": "Continue (a conversation, a game).",
        "pos": "verb",
        "pron": "",
        "example": "Please, carry on. I didn't mean to interrupt you.",
        "vietnamese": "tiếp tục",
        "vietnamese_example": "Xin vui lòng, tiếp tục. Tôi không có ý làm phiền bạn.",
        "cefr": "B2"
    },
    "come out": {
        "definition": "Turn out, end up.",
        "pos": "verb",
        "pron": "",
        "example": "The truth finally came out.",
        "vietnamese": "xuất hiện, ra mắt, được phơi bày",
        "vietnamese_example": "Sự thật cuối cùng đã được phơi bày.",
        "cefr": "B2"
    },
    "get out": {
        "definition": "Produce or complete.",
        "pos": "verb",
        "pron": "",
        "example": "I must get this work out before the deadline comes!",
        "vietnamese": "hoàn thành",
        "vietnamese_example": "Tôi phải hoàn thành chỗ việc này trước khi đến hạn!",
        "cefr": "B2"
    },
    "go off": {
        "definition": "Happen (as planned).",
        "pos": "verb",
        "pron": "",
        "example": "The surprise party went off without any problems.",
        "vietnamese": "rời đi",
        "vietnamese_example": "Bữa tiệc bất ngờ đã diễn ra mà không gặp bất kỳ trở ngại nào.",
        "cefr": "B2"
    },
    "go out": {
        "definition": "Take part in social activities (usually at night).",
        "pos": "verb",
        "pron": "",
        "example": "They love to go out every Saturday night.",
        "vietnamese": "đi ra ngoài",
        "vietnamese_example": "Họ thích đi chơi vào mỗi tối thứ bảy.",
        "cefr": "B2"
    },
    "go up": {
        "definition": "Be in the process of construction.",
        "pos": "verb",
        "pron": "",
        "example": "Several new KNUE buildings are going up in 2007 and 2008.",
        "vietnamese": "được xây lên",
        "vietnamese_example": "Một số tòa nhà mới của KNUE đang được xây lên trong năm 2007 và 2008.",
        "cefr": "B2"
    },
    "look out": {
        "definition": "Be careful, pay attention, heed a certain danger.",
        "pos": "verb",
        "pron": "",
        "example": "Look out, there's a black widow spider on the wall.",
        "vietnamese": "coi chừng",
        "vietnamese_example": "Coi chừng, có một con nhện góa phụ đen trên tường.",
        "cefr": "B2"
    },
    "sit down": {
        "definition": "Take a seat.",
        "pos": "verb",
        "pron": "",
        "example": "Sit down and stop your noise!",
        "vietnamese": "ngồi xuống",
        "vietnamese_example": "Ngồi xuống và đừng làm ồn nữa!",
        "cefr": "B2"
    },
    "a grey area": {
        "definition": "A situation that is unclear or not easily judged.",
        "pos": "idiom",
        "pron": "",
        "example": "Online privacy remains a grey area in many legal systems.",
        "vietnamese": "một khu vực màu xám",
        "vietnamese_example": "Quyền riêng tư trực tuyến vẫn là một vùng xám trong nhiều hệ thống pháp luật.",
        "cefr": "C1"
    },
    "a hot potato": {
        "definition": "A controversial issue that people avoid dealing with.",
        "pos": "idiom",
        "pron": "",
        "example": "Immigration has become a hot potato in public debate.",
        "vietnamese": "một củ khoai tây nóng",
        "vietnamese_example": "Nhập cư đã trở thành một vấn đề nóng hổi trong các cuộc tranh luận công khai.",
        "cefr": "C1"
    },
    "a level playing field": {
        "definition": "A fair situation in which everyone has the same chance.",
        "pos": "idiom",
        "pron": "",
        "example": "Transparent regulation helps create a level playing field for businesses.",
        "vietnamese": "một sân chơi bình đẳng",
        "vietnamese_example": "Quy định minh bạch giúp tạo sân chơi bình đẳng cho doanh nghiệp.",
        "cefr": "C1"
    },
    "a means to an end": {
        "definition": "Something done only to achieve another goal.",
        "pos": "idiom",
        "pron": "",
        "example": "For some students, a degree is simply a means to an end.",
        "vietnamese": "một phương tiện để kết thúc",
        "vietnamese_example": "Đối với một số sinh viên, bằng cấp chỉ đơn giản là một phương tiện để đạt được mục đích.",
        "cefr": "C1"
    },
    "a sharp rise": {
        "definition": "A sudden and significant increase.",
        "pos": "idiom",
        "pron": "",
        "example": "The city has seen a sharp rise in housing costs.",
        "vietnamese": "sự gia tăng mạnh mẽ",
        "vietnamese_example": "Thành phố đã chứng kiến ​​sự gia tăng mạnh về chi phí nhà ở.",
        "cefr": "C1"
    },
    "bear in mind": {
        "definition": "Remember and consider something.",
        "pos": "idiom",
        "pron": "",
        "example": "Policymakers should bear in mind the needs of rural communities.",
        "vietnamese": "hãy ghi nhớ",
        "vietnamese_example": "Các nhà hoạch định chính sách nên lưu ý đến nhu cầu của cộng đồng nông thôn.",
        "cefr": "C1"
    },
    "break new ground": {
        "definition": "Do something innovative or pioneering.",
        "pos": "idiom",
        "pron": "",
        "example": "The study breaks new ground in climate research.",
        "vietnamese": "phá vỡ nền tảng mới",
        "vietnamese_example": "Nghiên cứu này tạo ra nền tảng mới trong nghiên cứu khí hậu.",
        "cefr": "C1"
    },
    "draw the line at": {
        "definition": "Set a limit on what is acceptable.",
        "pos": "idiom",
        "pron": "",
        "example": "Most consumers draw the line at misleading advertising.",
        "vietnamese": "vẽ đường tại",
        "vietnamese_example": "Hầu hết người tiêu dùng đều vạch ra ranh giới cho những quảng cáo gây hiểu lầm.",
        "cefr": "C1"
    },
    "fall into place": {
        "definition": "Start to make sense or work correctly.",
        "pos": "idiom",
        "pron": "",
        "example": "Once the data was analyzed, the main pattern fell into place.",
        "vietnamese": "rơi vào vị trí",
        "vietnamese_example": "Sau khi dữ liệu được phân tích, mô hình chính đã được đưa ra.",
        "cefr": "C1"
    },
    "from scratch": {
        "definition": "From the beginning without using previous work.",
        "pos": "idiom",
        "pron": "",
        "example": "The committee had to redesign the policy from scratch.",
        "vietnamese": "từ đầu",
        "vietnamese_example": "Ủy ban đã phải thiết kế lại chính sách từ đầu.",
        "cefr": "C1"
    },
    "gain momentum": {
        "definition": "Increase in strength or progress.",
        "pos": "idiom",
        "pron": "",
        "example": "The campaign gained momentum after the debate.",
        "vietnamese": "lấy đà",
        "vietnamese_example": "Chiến dịch đã đạt được động lực sau cuộc tranh luận.",
        "cefr": "C1"
    },
    "have far-reaching effects": {
        "definition": "Produce consequences that affect many areas.",
        "pos": "idiom",
        "pron": "",
        "example": "Urban planning decisions can have far-reaching effects.",
        "vietnamese": "có ảnh hưởng sâu rộng",
        "vietnamese_example": "Các quyết định quy hoạch đô thị có thể có tác động sâu rộng.",
        "cefr": "C1"
    },
    "in high demand": {
        "definition": "Wanted by many people.",
        "pos": "idiom",
        "pron": "",
        "example": "Skilled engineers are in high demand worldwide.",
        "vietnamese": "có nhu cầu cao",
        "vietnamese_example": "Các kỹ sư lành nghề đang có nhu cầu cao trên toàn thế giới.",
        "cefr": "C1"
    },
    "in short supply": {
        "definition": "Not available in sufficient amounts.",
        "pos": "idiom",
        "pron": "",
        "example": "Affordable housing is in short supply in big cities.",
        "vietnamese": "thiếu hụt nguồn cung",
        "vietnamese_example": "Nhà ở giá rẻ đang khan hiếm ở các thành phố lớn",
        "cefr": "C1"
    },
    "leave a lot to be desired": {
        "definition": "Be far from satisfactory.",
        "pos": "idiom",
        "pron": "",
        "example": "The current transport system leaves a lot to be desired.",
        "vietnamese": "để lại nhiều điều mong muốn",
        "vietnamese_example": "Hệ thống giao thông hiện tại còn nhiều điều đáng mong đợi.",
        "cefr": "C1"
    },
    "make ends meet": {
        "definition": "Earn just enough money to live.",
        "pos": "idiom",
        "pron": "",
        "example": "Many families struggle to make ends meet during inflation.",
        "vietnamese": "kiếm sống",
        "vietnamese_example": "Nhiều gia đình phải vật lộn để kiếm sống trong thời kỳ lạm phát.",
        "cefr": "C1"
    },
    "on a large scale": {
        "definition": "Involving a large number or area.",
        "pos": "idiom",
        "pron": "",
        "example": "Deforestation is occurring on a large scale.",
        "vietnamese": "trên quy mô lớn",
        "vietnamese_example": "Nạn phá rừng đang diễn ra trên quy mô lớn.",
        "cefr": "C1"
    },
    "raise awareness": {
        "definition": "Increase public knowledge of an issue.",
        "pos": "idiom",
        "pron": "",
        "example": "Schools should raise awareness of mental health.",
        "vietnamese": "nâng cao nhận thức",
        "vietnamese_example": "Các trường học nên nâng cao nhận thức về sức khỏe tâm thần.",
        "cefr": "C1"
    },
    "serve a purpose": {
        "definition": "Have a useful function.",
        "pos": "idiom",
        "pron": "",
        "example": "Standardized tests may still serve a purpose in some contexts.",
        "vietnamese": "phục vụ một mục đích",
        "vietnamese_example": "Các bài kiểm tra tiêu chuẩn hóa vẫn có thể phục vụ một mục đích nào đó trong một số bối cảnh.",
        "cefr": "C1"
    },
    "take into account": {
        "definition": "Consider something when making a decision.",
        "pos": "idiom",
        "pron": "",
        "example": "Any reform must take regional differences into account.",
        "vietnamese": "tính đến",
        "vietnamese_example": "Bất kỳ cải cách nào cũng phải tính đến sự khác biệt giữa các khu vực.",
        "cefr": "C1"
    },
    "a chain reaction": {
        "definition": "A series of events in which each one causes the next.",
        "pos": "idiom",
        "pron": "",
        "example": "One factory closure triggered a chain reaction across the region.",
        "vietnamese": "một phản ứng dây chuyền",
        "vietnamese_example": "Một lần đóng cửa nhà máy đã gây ra phản ứng dây chuyền trên toàn khu vực.",
        "cefr": "C1"
    },
    "a growing concern": {
        "definition": "An issue that is becoming more serious or important.",
        "pos": "idiom",
        "pron": "",
        "example": "Plastic waste is a growing concern for coastal communities.",
        "vietnamese": "mối quan tâm ngày càng tăng",
        "vietnamese_example": "Rác thải nhựa đang là mối lo ngại ngày càng tăng đối với cộng đồng ven biển.",
        "cefr": "C1"
    },
    "a landmark decision": {
        "definition": "An important decision that influences future cases or events.",
        "pos": "idiom",
        "pron": "",
        "example": "The court made a landmark decision on digital privacy.",
        "vietnamese": "một quyết định mang tính bước ngoặt",
        "vietnamese_example": "Tòa án đã đưa ra một quyết định mang tính bước ngoặt về quyền riêng tư kỹ thuật số.",
        "cefr": "C1"
    },
    "a mixed blessing": {
        "definition": "Something that has both benefits and drawbacks.",
        "pos": "idiom",
        "pron": "",
        "example": "Remote work has been a mixed blessing for many employees.",
        "vietnamese": "một phước lành hỗn hợp",
        "vietnamese_example": "Làm việc từ xa là một điều may mắn lẫn lộn đối với nhiều nhân viên.",
        "cefr": "C1"
    },
    "a short-term fix": {
        "definition": "A solution that works only for a limited time.",
        "pos": "idiom",
        "pron": "",
        "example": "Borrowing more money is only a short-term fix.",
        "vietnamese": "một sự sửa chữa ngắn hạn",
        "vietnamese_example": "Vay thêm tiền chỉ là giải pháp ngắn hạn.",
        "cefr": "C1"
    },
    "add fuel to the fire": {
        "definition": "Make a bad situation worse.",
        "pos": "idiom",
        "pron": "",
        "example": "Sensational headlines can add fuel to the fire during a crisis.",
        "vietnamese": "thêm dầu vào lửa",
        "vietnamese_example": "Những tiêu đề giật gân có thể đổ thêm dầu vào lửa trong thời kỳ khủng hoảng.",
        "cefr": "C1"
    },
    "at stake": {
        "definition": "At risk or likely to be lost.",
        "pos": "idiom",
        "pron": "",
        "example": "Public trust is at stake when officials hide information.",
        "vietnamese": "bị đe dọa",
        "vietnamese_example": "Niềm tin của công chúng bị đe dọa khi quan chức che giấu thông tin.",
        "cefr": "C1"
    },
    "be in the spotlight": {
        "definition": "Receive a lot of public attention.",
        "pos": "idiom",
        "pron": "",
        "example": "Social media companies are in the spotlight again.",
        "vietnamese": "được chú ý",
        "vietnamese_example": "Các công ty truyền thông xã hội lại được chú ý.",
        "cefr": "C1"
    },
    "bring to light": {
        "definition": "Reveal something previously hidden.",
        "pos": "idiom",
        "pron": "",
        "example": "The report brought several weaknesses to light.",
        "vietnamese": "đưa ra ánh sáng",
        "vietnamese_example": "Báo cáo đã chỉ ra một số điểm yếu.",
        "cefr": "C1"
    },
    "for the greater good": {
        "definition": "For the benefit of most people.",
        "pos": "idiom",
        "pron": "",
        "example": "Taxes are often justified as necessary for the greater good.",
        "vietnamese": "vì lợi ích lớn hơn",
        "vietnamese_example": "Thuế thường được biện minh là cần thiết vì lợi ích lớn hơn.",
        "cefr": "C1"
    },
    "from all walks of life": {
        "definition": "From many different social groups.",
        "pos": "idiom",
        "pron": "",
        "example": "The protest attracted people from all walks of life.",
        "vietnamese": "từ mọi tầng lớp xã hội",
        "vietnamese_example": "Cuộc biểu tình đã thu hút người dân từ mọi tầng lớp xã hội.",
        "cefr": "C1"
    },
    "go hand in hand": {
        "definition": "Be closely connected and happen together.",
        "pos": "idiom",
        "pron": "",
        "example": "Economic growth should go hand in hand with sustainability.",
        "vietnamese": "đi tay trong tay",
        "vietnamese_example": "Tăng trưởng kinh tế phải đi đôi với bền vững.",
        "cefr": "C1"
    },
    "hold true": {
        "definition": "Remain valid or correct.",
        "pos": "idiom",
        "pron": "",
        "example": "The theory holds true in most urban settings.",
        "vietnamese": "giữ đúng",
        "vietnamese_example": "Lý thuyết này đúng ở hầu hết các môi trường đô thị.",
        "cefr": "C1"
    },
    "in real terms": {
        "definition": "After taking other factors such as inflation into account.",
        "pos": "idiom",
        "pron": "",
        "example": "Wages have fallen in real terms over the last decade.",
        "vietnamese": "về mặt thực tế",
        "vietnamese_example": "Tiền lương thực tế đã giảm trong thập kỷ qua.",
        "cefr": "C1"
    },
    "keep pace with": {
        "definition": "Stay at the same speed or level as something else.",
        "pos": "idiom",
        "pron": "",
        "example": "Education systems must keep pace with technology.",
        "vietnamese": "theo kịp với",
        "vietnamese_example": "Hệ thống giáo dục phải bắt kịp với công nghệ.",
        "cefr": "C1"
    },
    "lose ground": {
        "definition": "Become less successful or influential.",
        "pos": "idiom",
        "pron": "",
        "example": "Traditional media has lost ground to digital platforms.",
        "vietnamese": "mất đất",
        "vietnamese_example": "Phương tiện truyền thông truyền thống đã mất chỗ đứng trước các nền tảng kỹ thuật số.",
        "cefr": "C1"
    },
    "open the door to": {
        "definition": "Create the possibility of something.",
        "pos": "idiom",
        "pron": "",
        "example": "New funding could open the door to major reforms.",
        "vietnamese": "mở cửa để",
        "vietnamese_example": "Nguồn tài trợ mới có thể mở ra cánh cửa cho những cải cách lớn.",
        "cefr": "C1"
    },
    "play a key role": {
        "definition": "Have a very important influence.",
        "pos": "idiom",
        "pron": "",
        "example": "Parents play a key role in early education.",
        "vietnamese": "đóng một vai trò quan trọng",
        "vietnamese_example": "Cha mẹ đóng một vai trò quan trọng trong giáo dục sớm.",
        "cefr": "C1"
    },
    "stand to reason": {
        "definition": "Be logical and easy to understand.",
        "pos": "idiom",
        "pron": "",
        "example": "It stands to reason that cleaner air improves public health.",
        "vietnamese": "đứng lên lý luận",
        "vietnamese_example": "Lý do là không khí sạch hơn sẽ cải thiện sức khỏe cộng đồng.",
        "cefr": "C1"
    },
    "take centre stage": {
        "definition": "Become the main focus of attention.",
        "pos": "idiom",
        "pron": "",
        "example": "Energy security has taken centre stage this year.",
        "vietnamese": "chiếm vị trí trung tâm",
        "vietnamese_example": "An ninh năng lượng đã chiếm vị trí trung tâm trong năm nay.",
        "cefr": "C1"
    },
    "dissemination": {
        "definition": "The act of spreading information widely to many people.",
        "pos": "noun",
        "pron": "/dɪˌsem.əˈneɪ.ʃən/",
        "example": "The internet allows rapid dissemination of information.",
        "vietnamese": "sự lan truyền thông tin, kiến thức",
        "vietnamese_example": "Internet cho phép sự lan truyền thông tin nhanh chóng.",
        "cefr": "C1"
    },
    "editorial": {
        "definition": "Related to editing, publishing, or content decisions.",
        "pos": "adj",
        "pron": "/ˌed.ɪˈtɔːr.i.əl/",
        "example": "She is responsible for editorial decisions.",
        "vietnamese": "thuộc về biên tập",
        "vietnamese_example": "Cô ấy chịu trách nhiệm về các quyết định biên tập.",
        "cefr": "C1"
    },
    "syndication": {
        "definition": "Selling or distributing content to multiple broadcasters.",
        "pos": "noun",
        "pron": "/ˌsɪn.dəˈkeɪ.ʃən/",
        "example": "The show became popular through international syndication.",
        "vietnamese": "hợp tác phát hành",
        "vietnamese_example": "Chương trình trở nên nổi tiếng nhờ việc phân phối đến nhiều đài quốc tế.",
        "cefr": "C1"
    },
    "publication": {
        "definition": "The act of making something available to the public.",
        "pos": "noun",
        "pron": "/ˌpʌb.ləˈkeɪ.ʃən/",
        "example": "The publication of the report caused a lot of debate.",
        "vietnamese": "sự xuất bản",
        "vietnamese_example": "Việc công bố / xuất bản báo cáo đã gây ra nhiều tranh luận.",
        "cefr": "C1"
    },
    "broadcast": {
        "definition": "To send out programs, signals, or information to many people.",
        "pos": "verb",
        "pron": "/ˈbrɑːd.kæst/",
        "example": "The game will be broadcast live tonight.",
        "vietnamese": "phát sóng",
        "vietnamese_example": "Trận đấu sẽ được phát sóng trực tiếp tối nay.",
        "cefr": "B2"
    },
    "sensationalized": {
        "definition": "to exaggerate something for dramatic effect.",
        "pos": "verb",
        "pron": "/senˈseɪ.ʃən.əl.aɪzd/",
        "example": "The story was sensationalized to attract more readers.",
        "vietnamese": "phóng đại, làm quá",
        "vietnamese_example": "Câu chuyện đã bị phóng đại, làm quá để thu hút thêm độc giả.",
        "cefr": "C1"
    },
    "privacy": {
        "definition": "The state of being free from public attention or unwanted observation.",
        "pos": "noun",
        "pron": "/ˈprɪvəsi/",
        "example": "Online privacy is important when using new apps.",
        "vietnamese": "Sự riêng tư",
        "vietnamese_example": "Quyền riêng tư trực tuyến rất quan trọng khi dùng các ứng dụng mới.",
        "cefr": "B2"
    },
    "ethical": {
        "definition": "Connected with principles about what is right and wrong.",
        "pos": "adj",
        "pron": "/ˈeθɪkl/",
        "example": "Companies must consider the ethical impact of new technology.",
        "vietnamese": "Có đạo đức",
        "vietnamese_example": "Các công ty phải xem xét tác động đạo đức của công nghệ mới.",
        "cefr": "B2"
    },
    "regulation": {
        "definition": "An official rule made by a government or authority.",
        "pos": "noun",
        "pron": "/ˌreɡjuˈleɪʃn/",
        "example": "New regulation may change how companies collect data.",
        "vietnamese": "Quy định",
        "vietnamese_example": "Quy định mới có thể thay đổi cách các công ty thu thập dữ liệu.",
        "cefr": "B2"
    },
    "dependency": {
        "definition": "A situation in which someone or something relies on another thing.",
        "pos": "noun",
        "pron": "/dɪˈpendənsi/",
        "example": "Heavy dependency on one platform can create risks.",
        "vietnamese": "Sự phụ thuộc",
        "vietnamese_example": "Sự phụ thuộc nhiều vào một nền tảng có thể tạo ra rủi ro.",
        "cefr": "C1"
    },
    "security": {
        "definition": "Protection against danger, attack, or unauthorized access.",
        "pos": "noun",
        "pron": "/sɪˈkjʊrəti/",
        "example": "The team improved security after the data breach.",
        "vietnamese": "An ninh; bảo mật",
        "vietnamese_example": "Nhóm đã cải thiện bảo mật sau vụ rò rỉ dữ liệu.",
        "cefr": "B1"
    },
    "digital divide": {
        "definition": "The gap between people who have access to digital technology and those who do not.",
        "pos": "noun",
        "pron": "/ˌdɪdʒɪtl dɪˈvaɪd/",
        "example": "Rural communities often face a wider digital divide.",
        "vietnamese": "Khoảng cách số",
        "vietnamese_example": "Các cộng đồng nông thôn thường đối mặt với khoảng cách số lớn hơn.",
        "cefr": "C1"
    },
    "obsolescence": {
        "definition": "The process of becoming old-fashioned or no longer useful.",
        "pos": "noun",
        "pron": "/ˌɒbsəˈlesns/",
        "example": "Rapid innovation can lead to product obsolescence.",
        "vietnamese": "Sự lỗi thời",
        "vietnamese_example": "Đổi mới nhanh có thể dẫn đến sự lỗi thời của sản phẩm.",
        "cefr": "C1"
    },
    "scalable": {
        "definition": "Able to grow or handle more work without losing effectiveness.",
        "pos": "adj",
        "pron": "/ˈskeɪləbl/",
        "example": "The startup built a scalable cloud service.",
        "vietnamese": "Có khả năng mở rộng",
        "vietnamese_example": "Công ty khởi nghiệp đã xây dựng một dịch vụ đám mây có khả năng mở rộng.",
        "cefr": "C1"
    },
    "predictive": {
        "definition": "Using information to predict what is likely to happen in the future.",
        "pos": "adj",
        "pron": "/prɪˈdɪktɪv/",
        "example": "Predictive software can identify trends in customer behavior.",
        "vietnamese": "Mang tính dự đoán",
        "vietnamese_example": "Phần mềm dự đoán có thể xác định xu hướng trong hành vi khách hàng.",
        "cefr": "C1"
    },
    "autonomous": {
        "definition": "Able to operate or make decisions without direct human control.",
        "pos": "adj",
        "pron": "/ɔːˈtɒnəməs/",
        "example": "Autonomous vehicles use sensors to navigate roads.",
        "vietnamese": "Tự động; tự chủ",
        "vietnamese_example": "Xe tự hành sử dụng cảm biến để di chuyển trên đường.",
        "cefr": "C1"
    },
    "cybersecurity": {
        "definition": "The practice of protecting computer systems and networks from digital attacks.",
        "pos": "noun",
        "pron": "/ˌsaɪbərsɪˈkjʊrəti/",
        "example": "Cybersecurity training helps employees avoid phishing attacks.",
        "vietnamese": "An ninh mạng",
        "vietnamese_example": "Đào tạo an ninh mạng giúp nhân viên tránh các cuộc tấn công lừa đảo.",
        "cefr": "C1"
    },
    "encryption": {
        "definition": "The process of changing information into a code to keep it secure.",
        "pos": "noun",
        "pron": "/ɪnˈkrɪpʃn/",
        "example": "Encryption protects messages from being read by strangers.",
        "vietnamese": "Sự mã hóa",
        "vietnamese_example": "Mã hóa bảo vệ tin nhắn khỏi bị người lạ đọc.",
        "cefr": "C1"
    },
    "automation": {
        "definition": "The use of machines or software to do tasks with little human effort.",
        "pos": "noun",
        "pron": "/ˌɔːtəˈmeɪʃn/",
        "example": "Automation reduced the time needed to process orders.",
        "vietnamese": "Sự tự động hóa",
        "vietnamese_example": "Tự động hóa đã giảm thời gian cần để xử lý đơn hàng.",
        "cefr": "B2"
    },
    "digitization": {
        "definition": "The process of converting information into a digital form.",
        "pos": "noun",
        "pron": "/ˌdɪdʒɪtaɪˈzeɪʃn/",
        "example": "Digitization made the archive easier to search.",
        "vietnamese": "Sự số hóa",
        "vietnamese_example": "Số hóa giúp kho lưu trữ dễ tìm kiếm hơn.",
        "cefr": "C1"
    },
    "optimization": {
        "definition": "The process of making something as effective or efficient as possible.",
        "pos": "noun",
        "pron": "/ˌɒptɪmaɪˈzeɪʃn/",
        "example": "The update improved battery optimization on the device.",
        "vietnamese": "Sự tối ưu hóa",
        "vietnamese_example": "Bản cập nhật đã cải thiện việc tối ưu hóa pin trên thiết bị.",
        "cefr": "C1"
    },
    "censorship": {
        "definition": "The act of controlling or limiting what people can see, read, or hear.",
        "pos": "noun",
        "pron": "/ˈsen.sɚ.ʃɪp/",
        "example": "The government imposed strict censorship on the media.",
        "vietnamese": "sự kiểm duyệt",
        "vietnamese_example": "Chính phủ áp đặt sự kiểm duyệt nghiêm ngặt lên truyền thông.",
        "cefr": "C1"
    },
    "biased": {
        "definition": "Presenting information in a way that favors one side.",
        "pos": "adj",
        "pron": "/ˈbaɪ.əst/",
        "example": "The article is clearly biased against the government.",
        "vietnamese": "thành kiến, thiên lệch",
        "vietnamese_example": "Bài báo rõ ràng thiên lệch chống lại chính phủ.",
        "cefr": "B2"
    },
    "replication": {
        "definition": "Repeating an experiment to confirm results.",
        "pos": "noun",
        "pron": "/ˌrep.ləˈkeɪ.ʃən/",
        "example": "Replication is essential in scientific research.",
        "vietnamese": "sự tái tạo",
        "vietnamese_example": "Việc tái lặp thí nghiệm là rất quan trọng trong nghiên cứu khoa học.",
        "cefr": "C1"
    },
    "citation": {
        "definition": "A reference to a source of information, such as a book, article, or author.",
        "pos": "noun",
        "pron": "/saɪˈteɪ.ʃən/",
        "example": "The essay included several citations from academic journals.",
        "vietnamese": "trích dẫn",
        "vietnamese_example": "Bài luận bao gồm nhiều trích dẫn từ các tạp chí học thuật.",
        "cefr": "B2"
    },
    "inquiry": {
        "definition": "The act of trying to discover facts or knowledge.",
        "pos": "noun",
        "pron": "/ɪnˈkwaɪə.ri/",
        "example": "Scientific inquiry is essential for progress.",
        "vietnamese": "quá trình tìm hiểu / nghiên cứu",
        "vietnamese_example": "Quá trình tìm hiểu khoa học là rất quan trọng cho sự tiến bộ.",
        "cefr": "B2"
    },
    "steering committee": {
        "definition": "A group of people responsible for directing and overseeing a project or organization.",
        "pos": "noun",
        "pron": "/ˈstɪə.rɪŋ kəˌmɪt.i/",
        "example": "The steering committee approved the new strategic plan.",
        "vietnamese": "ban chỉ đạo",
        "vietnamese_example": "Ban chỉ đạo đã phê duyệt kế hoạch chiến lược mới.",
        "cefr": "C1"
    },
    "lender": {
        "definition": "A person or institution that lends money.",
        "pos": "noun",
        "pron": "/ˈlen.dər/",
        "example": "The lender approved her loan application.",
        "vietnamese": "người cho vay",
        "vietnamese_example": "Người cho vay đã chấp thuận đơn vay của cô ấy.",
        "cefr": "C1"
    },
    "national chain": {
        "definition": "A group of stores or businesses operating across a whole country under the same brand.",
        "pos": "noun",
        "pron": "/ˈnæʃ.ən.əl tʃeɪn/",
        "example": "The restaurant grew into a successful national chain.",
        "vietnamese": "chuỗi cửa hàng toàn quốc",
        "vietnamese_example": "Nhà hàng đã phát triển thành một chuỗi cửa hàng toàn quốc thành công.",
        "cefr": "C1"
    },
    "satisfy a requirement": {
        "definition": "To meet or fulfill a condition or need.",
        "pos": "phrase",
        "pron": "/ˈsæt.ɪs.faɪ ə rɪˈkwaɪə.mənt/",
        "example": "Applicants must satisfy all requirements to qualify.",
        "vietnamese": "đáp ứng yêu cầu",
        "vietnamese_example": "Ứng viên phải đáp ứng tất cả các yêu cầu để đủ điều kiện.",
        "cefr": "C1"
    },
    "board of directors": {
        "definition": "A group of people managing or directing an organization or company.",
        "pos": "noun",
        "pron": "/bɔːd əv dəˈrek.təz/",
        "example": "The board of directors approved the merger.",
        "vietnamese": "hội đồng quản trị",
        "vietnamese_example": "Hội đồng quản trị đã phê duyệt việc sáp nhập.",
        "cefr": "C1"
    },
    "economically sound": {
        "definition": "Financially stable and based on good economic principles.",
        "pos": "phrase",
        "pron": "/ˌiː.kəˈnɒm.ɪ.kəl.i saʊnd/",
        "example": "The investment was considered economically sound.",
        "vietnamese": "vững về kinh tế",
        "vietnamese_example": "Khoản đầu tư được xem là vững về kinh tế.",
        "cefr": "C1"
    },
    "financial climate": {
        "definition": "The overall economic conditions affecting financial activities.",
        "pos": "noun",
        "pron": "/faɪˈnæn.ʃəl ˈklaɪ.mət/",
        "example": "The financial climate has improved this year.",
        "vietnamese": "môi trường tài chính",
        "vietnamese_example": "Môi trường tài chính đã cải thiện trong năm nay.",
        "cefr": "C1"
    },
    "substitution": {
        "definition": "The act of replacing one thing with another.",
        "pos": "noun",
        "pron": "/ˌsʌb.stɪˈtʃuː.ʃən/",
        "example": "The substitution of materials reduced costs.",
        "vietnamese": "sự thay thế",
        "vietnamese_example": "Việc thay thế nguyên liệu đã giảm chi phí.",
        "cefr": "C1"
    },
    "on the strength of": {
        "definition": "Based on or because of something.",
        "pos": "phrase",
        "pron": "/ɒn ðə streŋθ əv/",
        "example": "She was hired on the strength of her experience.",
        "vietnamese": "dựa vào",
        "vietnamese_example": "Cô ấy được tuyển dụng dựa vào kinh nghiệm của mình.",
        "cefr": "C1"
    },
    "realistic evaluation": {
        "definition": "A practical and accurate assessment of a situation.",
        "pos": "noun",
        "pron": "/ˌrɪəˈlɪs.tɪk ɪˌvæl.juˈeɪ.ʃən/",
        "example": "We need a realistic evaluation of the risks.",
        "vietnamese": "đánh giá thực tế",
        "vietnamese_example": "Chúng ta cần một đánh giá thực tế về các rủi ro.",
        "cefr": "C1"
    },
    "prove through research": {
        "definition": "To demonstrate something is true using systematic investigation.",
        "pos": "phrase",
        "pron": "/pruːv θruː rɪˈsɜːtʃ/",
        "example": "The theory was proven through research.",
        "vietnamese": "chứng minh qua nghiên cứu",
        "vietnamese_example": "Lý thuyết đã được chứng minh qua nghiên cứu.",
        "cefr": "C1"
    },
    "redirect resources": {
        "definition": "To change the allocation of resources to a different use.",
        "pos": "phrase",
        "pron": "/ˌriː.daɪˈrekt rɪˈzɔː.sɪz/",
        "example": "The company decided to redirect resources to innovation.",
        "vietnamese": "điều chỉnh lại nguồn lực",
        "vietnamese_example": "Công ty quyết định điều chỉnh lại nguồn lực cho đổi mới.",
        "cefr": "C1"
    },
    "position against competitors": {
        "definition": "To establish a place in the market relative to rivals.",
        "pos": "phrase",
        "pron": "/pəˈzɪʃ.ən əˈɡenst kəmˈpet.ɪ.təz/",
        "example": "The brand positioned itself strongly against competitors.",
        "vietnamese": "vị thế so với đối thủ",
        "vietnamese_example": "Thương hiệu đã tạo vị thế vững chắc so với đối thủ.",
        "cefr": "C1"
    },
    "eliminate risk": {
        "definition": "To remove or reduce the possibility of danger or loss.",
        "pos": "phrase",
        "pron": "/ɪˈlɪm.ɪ.neɪt rɪsk/",
        "example": "They implemented measures to eliminate risk.",
        "vietnamese": "loại bỏ rủi ro",
        "vietnamese_example": "Họ đã áp dụng các biện pháp để loại bỏ rủi ro.",
        "cefr": "C1"
    },
    "measure up against": {
        "definition": "To compare something with another standard or competitor.",
        "pos": "phrase",
        "pron": "/ˈmeʒ.ə rʌp əˈɡenst/",
        "example": "Our product measures up well against others.",
        "vietnamese": "so sánh với",
        "vietnamese_example": "Sản phẩm của chúng tôi so sánh tốt với các sản phẩm khác.",
        "cefr": "C1"
    },
    "niche in the market": {
        "definition": "A specific, specialized segment of the market.",
        "pos": "noun",
        "pron": "/niːʃ ɪn ðə ˈmɑː.kɪt/",
        "example": "The company found a niche in the market.",
        "vietnamese": "thị trường ngách",
        "vietnamese_example": "Công ty đã tìm được một thị trường ngách.",
        "cefr": "C1"
    },
    "evaluate a need": {
        "definition": "To assess or determine the necessity of something.",
        "pos": "phrase",
        "pron": "/ɪˈvæl.ju.eɪt ə niːd/",
        "example": "We must evaluate the need before investing.",
        "vietnamese": "đánh giá nhu cầu",
        "vietnamese_example": "Chúng ta phải đánh giá nhu cầu trước khi đầu tư.",
        "cefr": "C1"
    },
    "address an issue": {
        "definition": "To deal with or take action on a problem.",
        "pos": "phrase",
        "pron": "/əˈdres ən ˈɪʃ.uː/",
        "example": "The team worked to address the issue quickly.",
        "vietnamese": "giải quyết vấn đề",
        "vietnamese_example": "Nhóm đã cố gắng giải quyết vấn đề nhanh chóng.",
        "cefr": "B2+"
    },
    "insufficient capital": {
        "definition": "Not enough financial resources to support an activity.",
        "pos": "noun",
        "pron": "/ˌɪn.səˈfɪʃ.ənt ˈkæp.ɪ.təl/",
        "example": "The project failed due to insufficient capital.",
        "vietnamese": "vốn không đủ",
        "vietnamese_example": "Dự án thất bại do vốn không đủ.",
        "cefr": "C1"
    },
    "distinguish from": {
        "definition": "To recognize or show the difference between things.",
        "pos": "phrase",
        "pron": "/dɪˈstɪŋ.ɡwɪʃ frəm/",
        "example": "It is important to distinguish this product from others.",
        "vietnamese": "phân biệt với",
        "vietnamese_example": "Điều quan trọng là phân biệt sản phẩm này với các sản phẩm khác.",
        "cefr": "B2+"
    },
    "in regard to": {
        "definition": "Concerning or relating to something.",
        "pos": "phrase",
        "pron": "/ɪn rɪˈɡɑːd tuː/",
        "example": "In regard to your request, we will respond shortly.",
        "vietnamese": "liên quan đến",
        "vietnamese_example": "Liên quan đến yêu cầu của bạn, chúng tôi sẽ phản hồi sớm.",
        "cefr": "C1"
    },
    "rearrange the budget": {
        "definition": "To change how money is allocated or distributed.",
        "pos": "phrase",
        "pron": "/ˌriː.əˈreɪndʒ ðə ˈbʌdʒ.ɪt/",
        "example": "They had to rearrange the budget to cover new expenses.",
        "vietnamese": "điều chỉnh ngân sách",
        "vietnamese_example": "Họ phải điều chỉnh ngân sách để chi trả các chi phí mới.",
        "cefr": "C1"
    },
    "address objections": {
        "definition": "To deal with or respond to disagreements or concerns.",
        "pos": "phrase",
        "pron": "/əˈdres əbˈdʒek.ʃənz/",
        "example": "The speaker addressed objections from the audience.",
        "vietnamese": "xử lý phản đối",
        "vietnamese_example": "Diễn giả đã xử lý các phản đối từ khán giả.",
        "cefr": "C1"
    },
    "event coordinators": {
        "definition": "People responsible for organizing and managing events.",
        "pos": "noun",
        "pron": "/ɪˈvent kəʊˈɔː.dɪ.neɪ.təz/",
        "example": "Event coordinators ensured everything ran smoothly.",
        "vietnamese": "người điều phối sự kiện",
        "vietnamese_example": "Những người điều phối sự kiện đã đảm bảo mọi thứ diễn ra suôn sẻ.",
        "cefr": "C1"
    },
    "capable assistant": {
        "definition": "A person who is skilled and competent in helping others.",
        "pos": "noun",
        "pron": "/ˈkeɪ.pə.bəl əˈsɪs.tənt/",
        "example": "She is a capable assistant who handles tasks efficiently.",
        "vietnamese": "trợ lý có năng lực",
        "vietnamese_example": "Cô ấy là một trợ lý có năng lực, xử lý công việc hiệu quả.",
        "cefr": "C1"
    },
    "mutual support": {
        "definition": "Support shared between two or more people or groups.",
        "pos": "noun",
        "pron": "/ˈmjuː.tʃu.əl səˈpɔːt/",
        "example": "The team thrived on mutual support.",
        "vietnamese": "hỗ trợ lẫn nhau",
        "vietnamese_example": "Nhóm phát triển nhờ sự hỗ trợ lẫn nhau.",
        "cefr": "C1"
    },
    "improve efficiency": {
        "definition": "To make a process work better with less waste or effort.",
        "pos": "phrase",
        "pron": "/ɪmˈpruːv ɪˈfɪʃ.ən.si/",
        "example": "They introduced new tools to improve efficiency.",
        "vietnamese": "cải thiện hiệu quả",
        "vietnamese_example": "Họ đã giới thiệu các công cụ mới để cải thiện hiệu quả.",
        "cefr": "C1"
    },
    "alphabetical order": {
        "definition": "An arrangement based on the order of letters in the alphabet.",
        "pos": "noun",
        "pron": "/ˌæl.fəˈbet.ɪ.kəl ˈɔː.dər/",
        "example": "The names were listed in alphabetical order.",
        "vietnamese": "thứ tự bảng chữ cái",
        "vietnamese_example": "Các tên được liệt kê theo thứ tự bảng chữ cái.",
        "cefr": "C1"
    },
    "hurt feelings": {
        "definition": "To cause someone emotional pain or upset.",
        "pos": "phrase",
        "pron": "/hɜːt ˈfiː.lɪŋz/",
        "example": "His comments hurt her feelings.",
        "vietnamese": "làm tổn thương cảm xúc",
        "vietnamese_example": "Những lời nói của anh ấy đã làm tổn thương cảm xúc của cô.",
        "cefr": "C1"
    },
    "accommodating": {
        "definition": "Willing to help or adjust to others' needs.",
        "pos": "adjective",
        "pron": "/əˈkɒm.ə.deɪ.tɪŋ/",
        "example": "The staff were very accommodating to our requests.",
        "vietnamese": "linh hoạt; dễ thích nghi",
        "vietnamese_example": "Nhân viên rất linh hoạt và dễ thích nghi với yêu cầu của chúng tôi.",
        "cefr": "C1"
    },
    "get in touch with": {
        "definition": "To contact or communicate with someone.",
        "pos": "phrase",
        "pron": "/ɡet ɪn tʌtʃ wɪð/",
        "example": "Please get in touch with us for more details.",
        "vietnamese": "liên hệ với",
        "vietnamese_example": "Vui lòng liên hệ với chúng tôi để biết thêm chi tiết.",
        "cefr": "B2+"
    },
    "make arrangements": {
        "definition": "To organize or plan something in advance.",
        "pos": "phrase",
        "pron": "/meɪk əˈreɪndʒ.mənts/",
        "example": "We need to make arrangements for the meeting.",
        "vietnamese": "sắp xếp",
        "vietnamese_example": "Chúng ta cần sắp xếp cho cuộc họp.",
        "cefr": "B2+"
    },
    "suit someone’s needs": {
        "definition": "To be appropriate or acceptable for someone’s requirements.",
        "pos": "phrase",
        "pron": "/suːt ˈsʌm.wʌnz niːdz/",
        "example": "This solution suits our needs perfectly.",
        "vietnamese": "phù hợp nhu cầu",
        "vietnamese_example": "Giải pháp này hoàn toàn phù hợp với nhu cầu của chúng tôi.",
        "cefr": "B2+"
    },
    "make room for": {
        "definition": "To provide space or opportunity for something.",
        "pos": "phrase",
        "pron": "/meɪk ruːm fɔːr/",
        "example": "We need to make room for new ideas.",
        "vietnamese": "dành chỗ cho",
        "vietnamese_example": "Chúng ta cần dành chỗ cho những ý tưởng mới.",
        "cefr": "B2+"
    },
    "fill up quickly": {
        "definition": "To become full in a short time.",
        "pos": "phrase",
        "pron": "/fɪl ʌp ˈkwɪk.li/",
        "example": "The seats fill up quickly during peak hours.",
        "vietnamese": "đầy nhanh",
        "vietnamese_example": "Chỗ ngồi đầy nhanh vào giờ cao điểm.",
        "cefr": "B2+"
    },
    "sign up early": {
        "definition": "To register in advance.",
        "pos": "phrase",
        "pron": "/saɪn ʌp ˈɜː.li/",
        "example": "You should sign up early to secure a spot.",
        "vietnamese": "đăng ký sớm",
        "vietnamese_example": "Bạn nên đăng ký sớm để giữ chỗ.",
        "cefr": "B2+"
    },
    "no questions asked": {
        "definition": "Without requiring explanations or reasons.",
        "pos": "phrase",
        "pron": "/nəʊ ˈkwes.tʃənz ɑːskt/",
        "example": "Refunds are given with no questions asked.",
        "vietnamese": "không hỏi lý do",
        "vietnamese_example": "Hoàn tiền mà không hỏi lý do.",
        "cefr": "C1"
    },
    "misuse or mishandling": {
        "definition": "Incorrect or improper use or treatment of something.",
        "pos": "noun",
        "pron": "/ˌmɪsˈjuːs ɔː ˌmɪsˈhæn.dlɪŋ/",
        "example": "Damage caused by misuse or mishandling is not covered.",
        "vietnamese": "sử dụng sai cách",
        "vietnamese_example": "Thiệt hại do sử dụng sai cách sẽ không được bảo hành.",
        "cefr": "C1"
    },
    "under warranty": {
        "definition": "Covered by a guarantee for repair or replacement.",
        "pos": "phrase",
        "pron": "/ˈʌn.dər ˈwɒr.ən.ti/",
        "example": "The device is still under warranty.",
        "vietnamese": "còn bảo hành",
        "vietnamese_example": "Thiết bị vẫn còn bảo hành.",
        "cefr": "B2+"
    },
    "limit the number": {
        "definition": "To restrict the quantity of something.",
        "pos": "phrase",
        "pron": "/ˈlɪm.ɪt ðə ˈnʌm.bər/",
        "example": "They decided to limit the number of participants.",
        "vietnamese": "giới hạn số lượng",
        "vietnamese_example": "Họ quyết định giới hạn số lượng người tham gia.",
        "cefr": "B2+"
    },
    "allocate resources": {
        "definition": "To distribute available assets or resources for a specific purpose.",
        "pos": "phrase",
        "pron": "/ˈæl.ə.keɪt rɪˈzɔː.sɪz/",
        "example": "The manager allocated resources to improve productivity.",
        "vietnamese": "phân bổ tài nguyên",
        "vietnamese_example": "Người quản lý đã phân bổ tài nguyên để cải thiện năng suất.",
        "cefr": "C1"
    },
    "duplication": {
        "definition": "The act of copying or repeating something.",
        "pos": "noun",
        "pron": "/ˌdjuː.plɪˈkeɪ.ʃən/",
        "example": "Duplication of work can waste time and effort.",
        "vietnamese": "sự sao chép",
        "vietnamese_example": "Sự sao chép công việc có thể gây lãng phí thời gian và công sức.",
        "cefr": "C1"
    },
    "fallible": {
        "definition": "Capable of making mistakes or being wrong.",
        "pos": "adjective",
        "pron": "/ˈfæl.ə.bəl/",
        "example": "Humans are fallible and prone to errors.",
        "vietnamese": "có thể sai sót",
        "vietnamese_example": "Con người có thể sai sót và dễ mắc lỗi.",
        "cefr": "C1"
    },
    "designate for a purpose": {
        "definition": "To officially assign something for a specific use.",
        "pos": "phrase",
        "pron": "/ˈdez.ɪɡ.neɪt fɔːr ə ˈpɜː.pəs/",
        "example": "The room was designated for meetings.",
        "vietnamese": "chỉ định cho mục đích",
        "vietnamese_example": "Phòng này được chỉ định cho các cuộc họp.",
        "cefr": "C1"
    },
    "function together": {
        "definition": "To operate or work effectively as a group.",
        "pos": "phrase",
        "pron": "/ˈfʌŋk.ʃən təˈɡeð.ər/",
        "example": "The departments must function together smoothly.",
        "vietnamese": "hoạt động cùng nhau",
        "vietnamese_example": "Các bộ phận phải hoạt động cùng nhau một cách trơn tru.",
        "cefr": "C1"
    },
    "examine capabilities": {
        "definition": "To assess or evaluate abilities or potential.",
        "pos": "phrase",
        "pron": "/ɪɡˈzæm.ɪn ˌkeɪ.pəˈbɪl.ə.tiz/",
        "example": "We need to examine the system's capabilities.",
        "vietnamese": "kiểm tra khả năng",
        "vietnamese_example": "Chúng ta cần kiểm tra khả năng của hệ thống.",
        "cefr": "C1"
    },
    "adhere to": {
        "definition": "To follow or stick to rules or guidelines.",
        "pos": "phrase",
        "pron": "/ədˈhɪər tuː/",
        "example": "All staff must adhere to safety regulations.",
        "vietnamese": "tuân thủ",
        "vietnamese_example": "Tất cả nhân viên phải tuân thủ quy định an toàn.",
        "cefr": "C1"
    },
    "establish a reputation": {
        "definition": "To build a recognized and respected image over time.",
        "pos": "phrase",
        "pron": "/ɪˈstæb.lɪʃ ə ˌrep.jʊˈteɪ.ʃən/",
        "example": "The company established a reputation for quality.",
        "vietnamese": "xây dựng danh tiếng",
        "vietnamese_example": "Công ty đã xây dựng danh tiếng về chất lượng.",
        "cefr": "C1"
    },
    "figure out": {
        "definition": "To understand or solve something.",
        "pos": "phrase",
        "pron": "/ˈfɪɡ.jər aʊt/",
        "example": "She finally figured out the solution.",
        "vietnamese": "hiểu ra; giải quyết",
        "vietnamese_example": "Cô ấy cuối cùng đã hiểu ra giải pháp.",
        "cefr": "B2+"
    },
    "shut down the system": {
        "definition": "To turn off or stop a system from operating.",
        "pos": "phrase",
        "pron": "/ʃʌt daʊn ðə ˈsɪs.təm/",
        "example": "Please shut down the system before leaving.",
        "vietnamese": "tắt hệ thống",
        "vietnamese_example": "Vui lòng tắt hệ thống trước khi rời đi.",
        "cefr": "B2+"
    },
    "gain access to": {
        "definition": "To obtain the ability or permission to enter or use something.",
        "pos": "phrase",
        "pron": "/ɡeɪn ˈæk.ses tuː/",
        "example": "Users must log in to gain access to the platform.",
        "vietnamese": "có quyền truy cập",
        "vietnamese_example": "Người dùng phải đăng nhập để có quyền truy cập vào nền tảng.",
        "cefr": "B2+"
    },
    "compatible with": {
        "definition": "Able to work together without conflict.",
        "pos": "phrase",
        "pron": "/kəmˈpæt.ə.bəl wɪð/",
        "example": "This software is compatible with most devices.",
        "vietnamese": "tương thích với",
        "vietnamese_example": "Phần mềm này tương thích với hầu hết các thiết bị.",
        "cefr": "B2+"
    },
    "issue a warning": {
        "definition": "To give an official or formal alert about something.",
        "pos": "phrase",
        "pron": "/ˈɪʃ.uː ə ˈwɔː.nɪŋ/",
        "example": "The system issued a warning before shutting down.",
        "vietnamese": "đưa ra cảnh báo",
        "vietnamese_example": "Hệ thống đã đưa ra cảnh báo trước khi tắt.",
        "cefr": "C1"
    },
    "system failure": {
        "definition": "A breakdown or malfunction in a system.",
        "pos": "noun",
        "pron": "/ˈsɪs.təm ˈfeɪl.jər/",
        "example": "The blackout was caused by a system failure.",
        "vietnamese": "lỗi hệ thống",
        "vietnamese_example": "Sự cố mất điện do lỗi hệ thống gây ra.",
        "cefr": "B2+"
    },
    "frozen display/screen": {
        "definition": "A screen that stops responding or updating.",
        "pos": "noun",
        "pron": "/ˈfrəʊ.zən dɪˈspleɪ/",
        "example": "I had to restart the computer because of a frozen screen.",
        "vietnamese": "màn hình bị đơ",
        "vietnamese_example": "Tôi phải khởi động lại máy vì màn hình bị đơ.",
        "cefr": "B2+"
    },
    "solve a dilemma": {
        "definition": "To resolve a difficult situation involving a choice.",
        "pos": "phrase",
        "pron": "/sɒlv ə dɪˈlem.ə/",
        "example": "They worked together to solve the dilemma.",
        "vietnamese": "giải quyết tình huống khó xử",
        "vietnamese_example": "Họ đã cùng nhau giải quyết tình huống khó xử.",
        "cefr": "C1"
    },
    "software compatibility": {
        "definition": "The ability of software to work with other systems or programs.",
        "pos": "noun",
        "pron": "/ˈsɒft.weər kəmˌpæt.əˈbɪl.ə.ti/",
        "example": "Software compatibility is essential for integration.",
        "vietnamese": "tính tương thích phần mềm",
        "vietnamese_example": "Tính tương thích phần mềm là yếu tố cần thiết cho việc tích hợp.",
        "cefr": "C1"
    },
    "observe guidelines": {
        "definition": "To follow or comply with recommended rules.",
        "pos": "phrase",
        "pron": "/əbˈzɜːv ˈɡaɪd.laɪnz/",
        "example": "All participants must observe the guidelines.",
        "vietnamese": "tuân theo hướng dẫn",
        "vietnamese_example": "Tất cả người tham gia phải tuân theo hướng dẫn.",
        "cefr": "B2+"
    },
    "affordability": {
        "definition": "The ability to pay for something without financial difficulty.",
        "pos": "noun",
        "pron": "/əˌfɔː.dəˈbɪl.ə.ti/",
        "example": "Affordability is a key factor for many buyers.",
        "vietnamese": "khả năng chi trả",
        "vietnamese_example": "Khả năng chi trả là yếu tố quan trọng đối với nhiều người mua.",
        "cefr": "C1"
    },
    "initiation": {
        "definition": "The act of beginning or starting something.",
        "pos": "noun",
        "pron": "/ɪˌnɪʃ.iˈeɪ.ʃən/",
        "example": "The initiation of the project took several months.",
        "vietnamese": "sự khởi đầu",
        "vietnamese_example": "Sự khởi đầu của dự án mất vài tháng.",
        "cefr": "C1"
    },
    "recurrence": {
        "definition": "The act of happening again repeatedly.",
        "pos": "noun",
        "pron": "/rɪˈkʌr.əns/",
        "example": "They are trying to prevent the recurrence of the issue.",
        "vietnamese": "sự tái diễn",
        "vietnamese_example": "Họ đang cố gắng ngăn chặn sự tái diễn của vấn đề.",
        "cefr": "C1"
    },
    "reducible": {
        "definition": "Able to be made smaller or less in amount.",
        "pos": "adjective",
        "pron": "/rɪˈdjuː.sə.bəl/",
        "example": "These costs are reducible with better planning.",
        "vietnamese": "có thể giảm",
        "vietnamese_example": "Những chi phí này có thể giảm bằng cách lập kế hoạch tốt hơn.",
        "cefr": "C1"
    },
    "smooth-running operations": {
        "definition": "Activities that function efficiently without problems.",
        "pos": "noun",
        "pron": "/smuːð ˈrʌn.ɪŋ ˌɒp.əˈreɪ.ʃənz/",
        "example": "Good coordination ensures smooth-running operations.",
        "vietnamese": "hoạt động trơn tru",
        "vietnamese_example": "Sự phối hợp tốt đảm bảo hoạt động trơn tru.",
        "cefr": "C1"
    },
    "minimize interruptions": {
        "definition": "To reduce disruptions or breaks in a process.",
        "pos": "phrase",
        "pron": "/ˈmɪn.ɪ.maɪz ˌɪn.təˈrʌp.ʃənz/",
        "example": "We need to minimize interruptions during work hours.",
        "vietnamese": "giảm thiểu gián đoạn",
        "vietnamese_example": "Chúng ta cần giảm thiểu gián đoạn trong giờ làm việc.",
        "cefr": "C1"
    },
    "functional managers": {
        "definition": "Managers responsible for specific departments or functions.",
        "pos": "noun",
        "pron": "/ˈfʌŋk.ʃən.əl ˈmæn.ɪ.dʒəz/",
        "example": "Functional managers oversee different departments.",
        "vietnamese": "quản lý chức năng",
        "vietnamese_example": "Các quản lý chức năng giám sát các bộ phận khác nhau.",
        "cefr": "C1"
    },
    "day-to-day operations": {
        "definition": "Regular, everyday activities of a business or organization.",
        "pos": "noun",
        "pron": "/ˌdeɪ.təˈdeɪ ˌɒp.əˈreɪ.ʃənz/",
        "example": "She handles the day-to-day operations of the company.",
        "vietnamese": "hoạt động hàng ngày",
        "vietnamese_example": "Cô ấy xử lý các hoạt động hàng ngày của công ty.",
        "cefr": "C1"
    },
    "presentable for customers": {
        "definition": "Suitable in appearance or condition for customer interaction.",
        "pos": "phrase",
        "pron": "/prɪˈzen.tə.bəl fɔː ˈkʌs.tə.məz/",
        "example": "The showroom must always be presentable for customers.",
        "vietnamese": "phù hợp để tiếp khách",
        "vietnamese_example": "Phòng trưng bày phải luôn phù hợp để tiếp khách.",
        "cefr": "C1"
    },
    "automatic ordering schedule": {
        "definition": "A system that automatically plans when orders are made.",
        "pos": "noun",
        "pron": "/ˌɔː.təˈmæt.ɪk ˈɔː.dər.ɪŋ ˌʃed.juːl/",
        "example": "They use an automatic ordering schedule to manage inventory.",
        "vietnamese": "lịch đặt hàng tự động",
        "vietnamese_example": "Họ sử dụng lịch đặt hàng tự động để quản lý hàng tồn kho.",
        "cefr": "C1"
    },
    "purchase order": {
        "definition": "An official document used to request goods or services.",
        "pos": "noun",
        "pron": "/ˈpɜː.tʃəs ˌɔː.dər/",
        "example": "The company issued a purchase order to the supplier.",
        "vietnamese": "đơn đặt hàng",
        "vietnamese_example": "Công ty đã phát hành đơn đặt hàng cho nhà cung cấp.",
        "cefr": "C1"
    },
    "stay on top of": {
        "definition": "To remain in control of or well-informed about something.",
        "pos": "phrase",
        "pron": "/steɪ ɒn tɒp əv/",
        "example": "She stays on top of all project updates.",
        "vietnamese": "theo sát; kiểm soát tốt",
        "vietnamese_example": "Cô ấy theo sát tất cả các cập nhật của dự án.",
        "cefr": "B2+"
    },
    "be in charge of": {
        "definition": "To be responsible for managing something.",
        "pos": "phrase",
        "pron": "/bi ɪn tʃɑːdʒ əv/",
        "example": "He is in charge of the marketing team.",
        "vietnamese": "chịu trách nhiệm về",
        "vietnamese_example": "Anh ấy chịu trách nhiệm về nhóm marketing.",
        "cefr": "B2+"
    },
    "take the initiative": {
        "definition": "To act independently and start something without being told.",
        "pos": "phrase",
        "pron": "/teɪk ði ɪˈnɪʃ.ə.tɪv/",
        "example": "She took the initiative to solve the problem.",
        "vietnamese": "chủ động",
        "vietnamese_example": "Cô ấy đã chủ động giải quyết vấn đề.",
        "cefr": "B2+"
    },
    "as-needed basis": {
        "definition": "When required rather than regularly.",
        "pos": "phrase",
        "pron": "/æz ˈniː.dɪd ˈbeɪ.sɪs/",
        "example": "Support is provided on an as-needed basis.",
        "vietnamese": "theo nhu cầu",
        "vietnamese_example": "Hỗ trợ được cung cấp theo nhu cầu.",
        "cefr": "B2+"
    },
    "recurring problem": {
        "definition": "An issue that happens repeatedly over time.",
        "pos": "noun",
        "pron": "/rɪˈkɜː.rɪŋ ˈprɒb.ləm/",
        "example": "This is a recurring problem that needs attention.",
        "vietnamese": "vấn đề lặp lại",
        "vietnamese_example": "Đây là vấn đề lặp lại cần được chú ý.",
        "cefr": "B2+"
    },
    "reduce costs": {
        "definition": "To lower expenses.",
        "pos": "phrase",
        "pron": "/rɪˈdjuːs kɒsts/",
        "example": "The company aims to reduce costs this year.",
        "vietnamese": "giảm chi phí",
        "vietnamese_example": "Công ty đặt mục tiêu giảm chi phí trong năm nay.",
        "cefr": "B2+"
    },
    "exceed capacity": {
        "definition": "To go beyond the maximum limit.",
        "pos": "phrase",
        "pron": "/ɪkˈsiːd kəˈpæs.ə.ti/",
        "example": "Demand may exceed capacity during peak times.",
        "vietnamese": "vượt quá khả năng",
        "vietnamese_example": "Nhu cầu có thể vượt quá khả năng vào giờ cao điểm.",
        "cefr": "B2+"
    },
    "suit business needs": {
        "definition": "To be appropriate for the requirements of a business.",
        "pos": "phrase",
        "pron": "/suːt ˈbɪz.nɪs niːdz/",
        "example": "This solution suits our business needs.",
        "vietnamese": "phù hợp nhu cầu kinh doanh",
        "vietnamese_example": "Giải pháp này phù hợp với nhu cầu kinh doanh của chúng tôi.",
        "cefr": "B2+"
    },
    "follow up on": {
        "definition": "To take further action or check progress.",
        "pos": "phrase",
        "pron": "/ˈfɒl.əʊ ʌp ɒn/",
        "example": "Please follow up on the client's request.",
        "vietnamese": "theo dõi; xử lý tiếp",
        "vietnamese_example": "Vui lòng theo dõi yêu cầu của khách hàng.",
        "cefr": "B2+"
    },
    "look into": {
        "definition": "To investigate or examine something.",
        "pos": "phrase",
        "pron": "/lʊk ˈɪn.tuː/",
        "example": "The team will look into the issue.",
        "vietnamese": "xem xét; điều tra",
        "vietnamese_example": "Nhóm sẽ xem xét vấn đề.",
        "cefr": "B2+"
    },
    "exposure": {
        "definition": "The state of being in contact with something or experiencing it.",
        "pos": "noun",
        "pron": "/ɪkˈspəʊ.ʒər/",
        "example": "Exposure to different cultures broadens your perspective.",
        "vietnamese": "sự tiếp xúc",
        "vietnamese_example": "Sự tiếp xúc với các nền văn hóa khác nhau mở rộng tầm nhìn của bạn.",
        "cefr": "C1"
    },
    "reinforcement": {
        "definition": "The act of strengthening or supporting something.",
        "pos": "noun",
        "pron": "/ˌriː.ɪnˈfɔːs.mənt/",
        "example": "Positive reinforcement helps improve performance.",
        "vietnamese": "sự củng cố",
        "vietnamese_example": "Sự củng cố tích cực giúp cải thiện hiệu suất.",
        "cefr": "C1"
    },
    "verbalize": {
        "definition": "To express thoughts or feelings in words.",
        "pos": "verb",
        "pron": "/ˈvɜː.bə.laɪz/",
        "example": "He struggled to verbalize his ideas clearly.",
        "vietnamese": "diễn đạt bằng lời",
        "vietnamese_example": "Anh ấy gặp khó khăn khi diễn đạt ý tưởng bằng lời.",
        "cefr": "C1"
    },
    "unwritten code": {
        "definition": "An informal set of rules or behaviors not officially documented.",
        "pos": "noun",
        "pron": "/ʌnˈrɪt.ən kəʊd/",
        "example": "There is an unwritten code of conduct in the team.",
        "vietnamese": "quy tắc không chính thức",
        "vietnamese_example": "Có một quy tắc không chính thức trong nhóm.",
        "cefr": "C1"
    },
    "verbal reprimand": {
        "definition": "A spoken expression of disapproval or criticism.",
        "pos": "noun",
        "pron": "/ˈvɜː.bəl ˈrep.rɪ.mɑːnd/",
        "example": "He received a verbal reprimand for being late.",
        "vietnamese": "khiển trách bằng lời",
        "vietnamese_example": "Anh ấy bị khiển trách bằng lời vì đến muộn.",
        "cefr": "C1"
    },
    "overall operations": {
        "definition": "All activities involved in running a business or system.",
        "pos": "noun",
        "pron": "/ˈəʊ.vər.ɔːl ˌɒp.əˈreɪ.ʃənz/",
        "example": "She is responsible for overall operations.",
        "vietnamese": "hoạt động tổng thể",
        "vietnamese_example": "Cô ấy chịu trách nhiệm về hoạt động tổng thể.",
        "cefr": "C1"
    },
    "thorough reading": {
        "definition": "Careful and complete reading of something.",
        "pos": "noun",
        "pron": "/ˈθʌr.ə ˈriː.dɪŋ/",
        "example": "A thorough reading is necessary to understand the document.",
        "vietnamese": "đọc kỹ lưỡng",
        "vietnamese_example": "Cần đọc kỹ lưỡng để hiểu tài liệu.",
        "cefr": "C1"
    },
    "workplace culture": {
        "definition": "The shared values, beliefs, and practices within a workplace.",
        "pos": "noun",
        "pron": "/ˈwɜːk.pleɪs ˈkʌl.tʃər/",
        "example": "A positive workplace culture boosts morale.",
        "vietnamese": "văn hóa nơi làm việc",
        "vietnamese_example": "Văn hóa nơi làm việc tích cực giúp nâng cao tinh thần.",
        "cefr": "C1"
    },
    "corporate procedures": {
        "definition": "Official processes followed within a company.",
        "pos": "noun",
        "pron": "/ˈkɔː.pər.ət prəˈsiː.dʒəz/",
        "example": "Employees must follow corporate procedures.",
        "vietnamese": "quy trình công ty",
        "vietnamese_example": "Nhân viên phải tuân theo quy trình công ty.",
        "cefr": "C1"
    },
    "established routines": {
        "definition": "Regular methods or practices that are already set.",
        "pos": "noun",
        "pron": "/ɪˈstæb.lɪʃt ruːˈtiːnz/",
        "example": "Established routines help maintain efficiency.",
        "vietnamese": "quy trình đã thiết lập",
        "vietnamese_example": "Các quy trình đã thiết lập giúp duy trì hiệu quả.",
        "cefr": "C1"
    },
    "cooperation between departments": {
        "definition": "Collaboration among different parts of an organization.",
        "pos": "noun",
        "pron": "/kəʊˌɒp.əˈreɪ.ʃən bɪˈtwiːn dɪˈpɑːt.mənts/",
        "example": "Cooperation between departments is essential.",
        "vietnamese": "sự hợp tác giữa các bộ phận",
        "vietnamese_example": "Sự hợp tác giữa các bộ phận là rất cần thiết.",
        "cefr": "C1"
    },
    "carry out procedures": {
        "definition": "To perform or execute set processes.",
        "pos": "phrase",
        "pron": "/ˈkær.i aʊt prəˈsiː.dʒəz/",
        "example": "Staff must carry out procedures carefully.",
        "vietnamese": "thực hiện quy trình",
        "vietnamese_example": "Nhân viên phải thực hiện quy trình cẩn thận.",
        "cefr": "C1"
    },
    "be made of": {
        "definition": "To consist of a particular material.",
        "pos": "phrase",
        "pron": "/bi meɪd əv/",
        "example": "The table is made of wood.",
        "vietnamese": "được làm từ",
        "vietnamese_example": "Cái bàn được làm từ gỗ.",
        "cefr": "B2+"
    },
    "catch a glimpse of": {
        "definition": "To see something briefly or partially.",
        "pos": "phrase",
        "pron": "/kætʃ ə ɡlɪmps əv/",
        "example": "I caught a glimpse of her in the crowd.",
        "vietnamese": "thoáng thấy",
        "vietnamese_example": "Tôi thoáng thấy cô ấy trong đám đông.",
        "cefr": "B2+"
    },
    "run out of supplies": {
        "definition": "To use up all available materials or resources.",
        "pos": "phrase",
        "pron": "/rʌn aʊt əv səˈplaɪz/",
        "example": "We ran out of supplies during the project.",
        "vietnamese": "hết vật tư",
        "vietnamese_example": "Chúng tôi đã hết vật tư trong dự án.",
        "cefr": "B2+"
    },
    "expose someone to": {
        "definition": "To make someone experience or come into contact with something.",
        "pos": "phrase",
        "pron": "/ɪkˈspəʊz ˈsʌm.wʌn tuː/",
        "example": "The program exposes students to new ideas.",
        "vietnamese": "cho ai tiếp xúc với",
        "vietnamese_example": "Chương trình giúp sinh viên tiếp xúc với những ý tưởng mới.",
        "cefr": "B2+"
    },
    "follow procedures": {
        "definition": "To adhere to established processes or rules.",
        "pos": "phrase",
        "pron": "/ˈfɒl.əʊ prəˈsiː.dʒəz/",
        "example": "Employees must follow procedures strictly.",
        "vietnamese": "tuân thủ quy trình",
        "vietnamese_example": "Nhân viên phải tuân thủ quy trình nghiêm ngặt.",
        "cefr": "B2+"
    },
    "on a regular basis": {
        "definition": "Happening frequently or at consistent intervals.",
        "pos": "phrase",
        "pron": "/ɒn ə ˈreɡ.jə.lər ˈbeɪ.sɪs/",
        "example": "Meetings are held on a regular basis.",
        "vietnamese": "thường xuyên",
        "vietnamese_example": "Các cuộc họp được tổ chức thường xuyên.",
        "cefr": "B2+"
    },
    "from time to time": {
        "definition": "Occasionally or sometimes.",
        "pos": "phrase",
        "pron": "/frɒm taɪm tuː taɪm/",
        "example": "He visits us from time to time.",
        "vietnamese": "thỉnh thoảng",
        "vietnamese_example": "Anh ấy thỉnh thoảng đến thăm chúng tôi.",
        "cefr": "B2+"
    },
    "get used to": {
        "definition": "To become familiar or comfortable with something.",
        "pos": "phrase",
        "pron": "/ɡet juːst tuː/",
        "example": "She got used to the new environment quickly.",
        "vietnamese": "quen với",
        "vietnamese_example": "Cô ấy nhanh chóng quen với môi trường mới.",
        "cefr": "B2+"
    }
};

/**
 * Course -> Set hierarchy.
 * Each course contains sets, each set references word IDs from the dictionary.
 * @type {Array.<{id: string, title: string, icon: string, sets: Array.<{id: string, title: string, words: string[]}>}>}
 */
var coursesData = [
    {
        "id": "ielts",
        "title": "IELTS",
        "icon": "🎓",
        "sets": [
            {
                "id": "writing-1",
                "title": "Writing 1",
                "words": [
                    "combustion",
                    "greenhouse gases",
                    "exacerbate",
                    "exponential",
                    "methane",
                    "intensity",
                    "glacier",
                    "erosion",
                    "ecosystem",
                    "mitigate",
                    "renewable",
                    "precision",
                    "over-crowding",
                    "competent",
                    "carcinogen",
                    "deleterious",
                    "perishable",
                    "surveillance",
                    "intrusion",
                    "conformist"
                ]
            },
            {
                "id": "writing-2",
                "title": "Writing 2",
                "words": [
                    "tyrannized",
                    "reintegrate",
                    "aesthetic",
                    "distinctive",
                    "refurbish",
                    "autonomy",
                    "intrinsic",
                    "interpersonal",
                    "nuance",
                    "influx",
                    "infrastructure",
                    "indigenous",
                    "insolvency",
                    "redundant",
                    "recession",
                    "automate",
                    "optimal",
                    "sedentary"
                ]
            },
            {
                "id": "c1vocab-1",
                "title": "C1 Vocabulary 1",
                "words": [
                    "alleviate",
                    "arbitrary",
                    "ascertain",
                    "blatant",
                    "coherent",
                    "coincide",
                    "commence",
                    "compelling",
                    "comply",
                    "comprehensive",
                    "conceivable",
                    "constrain",
                    "contradict",
                    "crucial",
                    "deliberate",
                    "denote",
                    "deprive",
                    "differentiate",
                    "disclose",
                    "disrupt"
                ]
            }
        ]
    },
    {
        "id": "toeic",
        "title": "TOEIC",
        "icon": "📝",
        "sets": [
            {
                "id": "600-1",
                "title": "600 words - Lesson 1",
                "words": [
                    "abide by",
                    "assurance",
                    "clause",
                    "comply with",
                    "conform to",
                    "determine",
                    "establish",
                    "liable",
                    "mediator",
                    "negotiation",
                    "obligate",
                    "obligation",
                    "pertaining to",
                    "provision",
                    "representative",
                    "resolve",
                    "settlement",
                    "specification",
                    "stipulation",
                    "terminate"
                ]
            },
            {
                "id": "600-2",
                "title": "600 words - Lesson 2",
                "words": [
                    "advertising",
                    "analysis",
                    "competitors",
                    "comprehension",
                    "consumption",
                    "continually",
                    "convey",
                    "determine",
                    "dominance",
                    "established",
                    "executive",
                    "extensive",
                    "features",
                    "ingredients",
                    "innovation",
                    "manufacturers",
                    "packaging",
                    "priority",
                    "productivity",
                    "promoting",
                    "recession",
                    "recommend",
                    "semiconductor",
                    "significant",
                    "strategies"
                ]
            },
            {
                "id": "600-3",
                "title": "600 words - Lesson 3",
                "words": [
                    "arrangement",
                    "characteristic",
                    "consequence",
                    "consequently",
                    "consideration",
                    "coverage",
                    "defective",
                    "discretion",
                    "expiration",
                    "frequently",
                    "implication",
                    "implicit",
                    "imply",
                    "invalidate",
                    "liability",
                    "malfunction",
                    "promise",
                    "protective",
                    "refurbished",
                    "reputable",
                    "reputation",
                    "reputed",
                    "requirement",
                    "requisite",
                    "satisfactory"
                ]
            },
            {
                "id": "600-4",
                "title": "600 words - Lesson 4",
                "words": [
                    "steering committee",
                    "lender",
                    "national chain",
                    "satisfy a requirement",
                    "board of directors",
                    "economically sound",
                    "financial climate",
                    "substitution",
                    "on the strength of",
                    "realistic evaluation",
                    "prove through research",
                    "redirect resources",
                    "position against competitors",
                    "eliminate risk",
                    "measure up against",
                    "niche in the market",
                    "evaluate a need",
                    "address an issue",
                    "insufficient capital",
                    "distinguish from",
                    "credibility"
                ]
            },
            {
                "id": "600-5",
                "title": "600 words - Lesson 5",
                "words": [
                    "in regard to",
                    "rearrange the budget",
                    "abide by",
                    "provision",
                    "address objections",
                    "event coordinators",
                    "capable assistant",
                    "mutual support",
                    "improve efficiency",
                    "alphabetical order",
                    "hurt feelings",
                    "accommodating",
                    "get in touch with",
                    "make arrangements",
                    "suit someone’s needs",
                    "make room for",
                    "fill up quickly",
                    "sign up early",
                    "no questions asked",
                    "misuse or mishandling",
                    "under warranty",
                    "limit the number"
                ]
            },
            {
                "id": "600-6",
                "title": "600 words - Lesson 6",
                "words": [
                    "allocate resources",
                    "allocation",
                    "duplication",
                    "fallible",
                    "ignorance",
                    "designate for a purpose",
                    "function together",
                    "examine capabilities",
                    "malfunction",
                    "invalidate",
                    "adhere to",
                    "establish a reputation",
                    "figure out",
                    "shut down the system",
                    "gain access to",
                    "compatible with",
                    "issue a warning",
                    "system failure",
                    "frozen display/screen",
                    "solve a dilemma",
                    "software compatibility",
                    "observe guidelines"
                ]
            },
            {
                "id": "600-7",
                "title": "600 words - Lesson 7",
                "words": [
                    "affordability",
                    "initiation",
                    "provision",
                    "recurrence",
                    "reducible",
                    "smooth-running operations",
                    "minimize interruptions",
                    "functional managers",
                    "day-to-day operations",
                    "presentable for customers",
                    "automatic ordering schedule",
                    "purchase order",
                    "stay on top of",
                    "be in charge of",
                    "take the initiative",
                    "as-needed basis",
                    "recurring problem",
                    "reduce costs",
                    "exceed capacity",
                    "suit business needs",
                    "follow up on",
                    "look into"
                ]
            },
            {
                "id": "600-8",
                "title": "600 words - Lesson 8",
                "words": [
                    "exposure",
                    "reinforcement",
                    "verbalize",
                    "unwritten code",
                    "verbal reprimand",
                    "overall operations",
                    "thorough reading",
                    "workplace culture",
                    "corporate procedures",
                    "established routines",
                    "cooperation between departments",
                    "carry out procedures",
                    "bring in",
                    "be made of",
                    "catch a glimpse of",
                    "run out of supplies",
                    "expose someone to",
                    "take the initiative",
                    "follow procedures",
                    "on a regular basis",
                    "from time to time",
                    "get used to"
                ]
            }
        ]
    },
    {
        "id": "ielts-c1",
        "title": "IELTS-C1",
        "icon": "📖",
        "sets": [
            {
                "id": "technology-1",
                "title": "Technology-1",
                "words": [
                    "hardware",
                    "interactive",
                    "simulate",
                    "broadband",
                    "browser",
                    "interface",
                    "upgrade",
                    "activation",
                    "default",
                    "desktop",
                    "directory",
                    "array",
                    "privacy",
                    "surveillance",
                    "ethical",
                    "regulation",
                    "dependency",
                    "security",
                    "digital divide",
                    "obsolescence"
                ]
            },
            {
                "id": "technology-2",
                "title": "Technology-2",
                "words": [
                    "explosive",
                    "filter",
                    "gambling",
                    "laser",
                    "simulation",
                    "spam",
                    "specification",
                    "configuration",
                    "documentation",
                    "functional",
                    "operational",
                    "scalable",
                    "revolutionary",
                    "predictive",
                    "autonomous",
                    "cybersecurity",
                    "encryption",
                    "automation",
                    "digitization",
                    "optimization"
                ]
            },
            {
                "id": "globalisation-1",
                "title": "Globalisation-1",
                "words": [
                    "diplomat",
                    "embassy",
                    "diplomatic",
                    "foreigner",
                    "integration",
                    "migration",
                    "trademark",
                    "sanction",
                    "ambassador",
                    "boom",
                    "commerce",
                    "counterpart",
                    "deficit",
                    "donor",
                    "establishment",
                    "facilitate",
                    "interference",
                    "monopoly",
                    "obsession",
                    "refuge"
                ]
            },
            {
                "id": "science-1",
                "title": "Science-1",
                "words": [
                    "experimental",
                    "empirical",
                    "conscience",
                    "agricultural",
                    "aluminium",
                    "apparatus",
                    "aspire",
                    "clinical",
                    "composition",
                    "copper",
                    "endeavour",
                    "enrich",
                    "evolutionary",
                    "extract",
                    "formulate",
                    "linear",
                    "minute",
                    "petition",
                    "theoretical",
                    "toxic"
                ]
            },
            {
                "id": "research-1",
                "title": "Research-1",
                "words": [
                    "methodology",
                    "statistical",
                    "variable",
                    "collaborate",
                    "commissioner",
                    "conviction",
                    "inherent",
                    "overwhelming",
                    "pioneer",
                    "regime",
                    "supervisor",
                    "tactic",
                    "tactical",
                    "theology",
                    "undergraduate",
                    "warfare",
                    "willingness",
                    "replication",
                    "citation",
                    "inquiry"
                ]
            },
            {
                "id": "media-1",
                "title": "Media-1",
                "words": [
                    "columnist",
                    "correspondent",
                    "broadcast",
                    "newsletter",
                    "suppress",
                    "commentary",
                    "editorial",
                    "dissemination",
                    "publication",
                    "simultaneously",
                    "accomplishment",
                    "allegedly",
                    "articulate",
                    "clarity",
                    "copyright",
                    "syndication",
                    "discard",
                    "disclose",
                    "censorship",
                    "biased"
                ]
            },
            {
                "id": "media-2",
                "title": "Media-2",
                "words": [
                    "disclosure",
                    "distress",
                    "disturbing",
                    "dub",
                    "embody",
                    "favourable",
                    "glance",
                    "grave",
                    "grind",
                    "hail",
                    "handling",
                    "harassment",
                    "high-profile",
                    "hostile",
                    "instruct",
                    "ironic",
                    "sensationalized",
                    "line-up",
                    "manipulation",
                    "march"
                ]
            },
            {
                "id": "communication-1",
                "title": "Communication-1",
                "words": [
                    "discourse",
                    "acquisition",
                    "amid",
                    "banner",
                    "boast",
                    "complexity",
                    "concede",
                    "dispute",
                    "imagery",
                    "inappropriate",
                    "indigenous",
                    "induce",
                    "intensive",
                    "meaningful",
                    "pronounced",
                    "query",
                    "rhetoric",
                    "settlement"
                ]
            },
            {
                "id": "business-1",
                "title": "Business-1",
                "words": [
                    "enterprise",
                    "productivity",
                    "profitable",
                    "capitalism",
                    "marketplace",
                    "non-profit",
                    "outlet",
                    "productive",
                    "reproduction",
                    "administrator",
                    "franchise",
                    "governance",
                    "privatization",
                    "regulator",
                    "regulatory",
                    "shareholder",
                    "stake",
                    "administer",
                    "administrative"
                ]
            },
            {
                "id": "business-2",
                "title": "Business-2",
                "words": [
                    "audit",
                    "commodity",
                    "contractor",
                    "conversion",
                    "deputy",
                    "forge",
                    "intervention",
                    "kidnap",
                    "landlord",
                    "maximize",
                    "merger",
                    "mining",
                    "net",
                    "patent",
                    "persistent",
                    "probe",
                    "proceeds",
                    "processing",
                    "processor"
                ]
            },
            {
                "id": "economy-1",
                "title": "Economy-1",
                "words": [
                    "subsidy",
                    "prosperity",
                    "costly",
                    "fundraising",
                    "taxpayer",
                    "accountable",
                    "beneficiary",
                    "soar",
                    "abolish",
                    "accelerate",
                    "allocation",
                    "allowance",
                    "backing",
                    "bail",
                    "betray",
                    "bonus",
                    "capitalist",
                    "chaos",
                    "compensation",
                    "confront"
                ]
            },
            {
                "id": "economy-2",
                "title": "Economy-2",
                "words": [
                    "constituency",
                    "constraint",
                    "continually",
                    "corresponding",
                    "corrupt",
                    "counsellor",
                    "deposit",
                    "domain",
                    "dominance",
                    "earnings",
                    "encouraging",
                    "escalate",
                    "expenditure",
                    "exploitation",
                    "fine",
                    "flaw",
                    "flawed",
                    "ideology",
                    "indicator",
                    "burst"
                ]
            },
            {
                "id": "work-1",
                "title": "Work-1",
                "words": [
                    "competent",
                    "personnel",
                    "workout",
                    "counselling",
                    "feat",
                    "integrity",
                    "mobility",
                    "practitioner",
                    "sack",
                    "verbal",
                    "whereby",
                    "absent",
                    "academy",
                    "activist",
                    "advocate",
                    "aide",
                    "alliance",
                    "amateur",
                    "appoint"
                ]
            },
            {
                "id": "work-2",
                "title": "Work-2",
                "words": [
                    "breakdown",
                    "burden",
                    "cater",
                    "cease",
                    "charter",
                    "coalition",
                    "collaboration",
                    "compile",
                    "confine",
                    "consensus",
                    "cooperate",
                    "cooperative",
                    "coordinate",
                    "coordination",
                    "coordinator",
                    "courtesy",
                    "craft",
                    "critique",
                    "dawn"
                ]
            },
            {
                "id": "education-1",
                "title": "Education-1",
                "words": [
                    "faculty",
                    "enrol",
                    "ratio",
                    "attain",
                    "attendance",
                    "institutional",
                    "integral",
                    "principal",
                    "reconstruction",
                    "analogy",
                    "assemble",
                    "assurance",
                    "attribute",
                    "benchmark",
                    "buddy",
                    "catalogue",
                    "closure",
                    "dedicated",
                    "defy",
                    "dimension"
                ]
            },
            {
                "id": "education-2",
                "title": "Education-2",
                "words": [
                    "dismissal",
                    "ease",
                    "equation",
                    "excellence",
                    "fluid",
                    "guidance",
                    "ignorance",
                    "injustice",
                    "insertion",
                    "inspect",
                    "inspection",
                    "instinct",
                    "investigator",
                    "maintenance",
                    "moderate",
                    "notable",
                    "notably",
                    "nursery",
                    "oblige",
                    "pad"
                ]
            },
            {
                "id": "health-1",
                "title": "Health-1",
                "words": [
                    "syndrome",
                    "epidemic",
                    "physician",
                    "diagnose",
                    "misery",
                    "prescribe",
                    "prescription",
                    "vulnerability",
                    "ward",
                    "well-being",
                    "admission",
                    "appetite",
                    "assault",
                    "cognitive",
                    "consciousness",
                    "detain",
                    "deteriorate",
                    "dose",
                    "fibre"
                ]
            },
            {
                "id": "health-2",
                "title": "Health-2",
                "words": [
                    "frustrated",
                    "frustrating",
                    "infect",
                    "inmate",
                    "integrated",
                    "liver",
                    "originate",
                    "outbreak",
                    "psychiatric",
                    "rehabilitation",
                    "revive",
                    "robust",
                    "stabilize",
                    "thrive",
                    "transmission",
                    "trauma",
                    "unveil",
                    "vulnerable"
                ]
            },
            {
                "id": "crime-1",
                "title": "Crime-1",
                "words": [
                    "brutal",
                    "custody",
                    "imprison",
                    "imprisonment",
                    "prosecution",
                    "squad",
                    "confession",
                    "constitute",
                    "convict",
                    "coup",
                    "extremist",
                    "presently",
                    "prosecute",
                    "riot",
                    "surveillance",
                    "suspicious",
                    "accountability",
                    "accusation",
                    "accused",
                    "allegation"
                ]
            },
            {
                "id": "crime-2",
                "title": "Crime-2",
                "words": [
                    "await",
                    "backup",
                    "civilian",
                    "clash",
                    "corruption",
                    "denial",
                    "denounce",
                    "detection",
                    "detention",
                    "discharge",
                    "empower",
                    "enforce",
                    "evacuate",
                    "firearm",
                    "fit",
                    "hostage",
                    "humanity",
                    "identification",
                    "incidence",
                    "infamous"
                ]
            },
            {
                "id": "law-1",
                "title": "Law-1",
                "words": [
                    "compliance",
                    "lawsuit",
                    "legislation",
                    "constitutional",
                    "judicial",
                    "magistrate",
                    "solicitor",
                    "attorney",
                    "enact",
                    "enforcement",
                    "jurisdiction",
                    "proceeding",
                    "ruling",
                    "verdict",
                    "warrant",
                    "accordance",
                    "amend",
                    "amendment",
                    "assembly",
                    "breach"
                ]
            },
            {
                "id": "law-2",
                "title": "Law-2",
                "words": [
                    "citizenship",
                    "compel",
                    "conception",
                    "conserve",
                    "constitution",
                    "contend",
                    "divine",
                    "endure",
                    "equality",
                    "excess",
                    "execute",
                    "execution",
                    "expire",
                    "feminist",
                    "formula",
                    "gravity",
                    "initiate",
                    "invoke",
                    "just"
                ]
            },
            {
                "id": "government-1",
                "title": "Government-1",
                "words": [
                    "bureaucracy",
                    "mandate",
                    "parliamentary",
                    "republic",
                    "asylum",
                    "cabinet",
                    "condemn",
                    "declaration",
                    "endorsement",
                    "liberty",
                    "ministry",
                    "provincial",
                    "archive",
                    "assertion",
                    "cautious",
                    "doctrine",
                    "elevate",
                    "endorse",
                    "exile",
                    "inability"
                ]
            },
            {
                "id": "government-2",
                "title": "Government-2",
                "words": [
                    "interim",
                    "proclaim",
                    "propaganda",
                    "prosecutor",
                    "protocol",
                    "province",
                    "rally",
                    "rebel",
                    "rebellion",
                    "reform",
                    "restraint",
                    "spy",
                    "stability",
                    "allege",
                    "anonymous",
                    "aspiration",
                    "assassination",
                    "assert",
                    "autonomy",
                    "chamber"
                ]
            },
            {
                "id": "society-1",
                "title": "Society-1",
                "words": [
                    "collective",
                    "inequality",
                    "socialist",
                    "gathering",
                    "hierarchy",
                    "buffer",
                    "bulk",
                    "discrimination",
                    "elite",
                    "exclusively",
                    "foster",
                    "harmony"
                ]
            },
            {
                "id": "society-2",
                "title": "Society-2",
                "words": [
                    "heritage",
                    "indictment",
                    "lesbian",
                    "manifest",
                    "militant",
                    "outsider",
                    "projection",
                    "residence",
                    "sole",
                    "solidarity",
                    "supportive"
                ]
            },
            {
                "id": "culture-1",
                "title": "Culture-1",
                "words": [
                    "patron",
                    "aesthetic",
                    "inspiration",
                    "partial",
                    "partially",
                    "bass",
                    "canvas",
                    "entity",
                    "merit",
                    "opt",
                    "sketch",
                    "stereotype",
                    "accordingly",
                    "alignment",
                    "allocate",
                    "appealing",
                    "applaud",
                    "appreciation"
                ]
            },
            {
                "id": "culture-2",
                "title": "Culture-2",
                "words": [
                    "breed",
                    "characterize",
                    "chronic",
                    "classification",
                    "comply",
                    "conceive",
                    "crawl",
                    "creator",
                    "cult",
                    "decisive",
                    "deem",
                    "designate",
                    "discretion",
                    "dissolve",
                    "distinction",
                    "dual",
                    "dynamic"
                ]
            },
            {
                "id": "infrastructure-1",
                "title": "Infrastructure-1",
                "words": [
                    "toll",
                    "pipeline",
                    "trail",
                    "trailer",
                    "adaptation",
                    "aftermath",
                    "architectural",
                    "carriage",
                    "casualty",
                    "debris",
                    "exit",
                    "grin",
                    "hint",
                    "hook",
                    "landmark",
                    "layout",
                    "loop"
                ]
            },
            {
                "id": "infrastructure-2",
                "title": "Infrastructure-2",
                "words": [
                    "mill",
                    "neglect",
                    "nest",
                    "patrol",
                    "reside",
                    "restoration",
                    "stem",
                    "strain",
                    "supervise",
                    "tenant",
                    "thankfully",
                    "threshold",
                    "timber",
                    "utilize",
                    "warehouse",
                    "junction"
                ]
            },
            {
                "id": "ethics-1",
                "title": "Ethics-1",
                "words": [
                    "morality",
                    "fairness",
                    "arbitrary",
                    "cynical",
                    "decision-making",
                    "dilemma",
                    "distort",
                    "frankly",
                    "harsh",
                    "legitimate",
                    "manipulate",
                    "noble",
                    "parental",
                    "sin",
                    "suspicion",
                    "uphold",
                    "virtue"
                ]
            },
            {
                "id": "argumentation-1",
                "title": "Argumentation-1",
                "words": [
                    "reasoning",
                    "contradiction",
                    "ideological",
                    "arguably",
                    "premise",
                    "rational",
                    "absurd",
                    "authentic",
                    "concession",
                    "confer",
                    "confrontation",
                    "consistency",
                    "counter",
                    "dignity",
                    "ensue",
                    "justification",
                    "liberal"
                ]
            },
            {
                "id": "argumentation-2",
                "title": "Argumentation-2",
                "words": [
                    "logic",
                    "meditation",
                    "motive",
                    "objection",
                    "persist",
                    "poll",
                    "prejudice",
                    "say",
                    "sceptical",
                    "scrutiny",
                    "sentiment",
                    "sovereignty",
                    "sue",
                    "tolerance",
                    "transparency",
                    "varied"
                ]
            },
            {
                "id": "change-1",
                "title": "Change-1",
                "words": [
                    "transformation",
                    "effectiveness",
                    "revolutionary",
                    "damaging",
                    "heighten",
                    "provoke",
                    "render",
                    "adjustment",
                    "adverse",
                    "blast",
                    "breakthrough",
                    "cluster",
                    "compelling",
                    "compensate",
                    "correction",
                    "correlation",
                    "creep",
                    "cultivate",
                    "dedication",
                    "deficiency"
                ]
            },
            {
                "id": "change-2",
                "title": "Change-2",
                "words": [
                    "diagnosis",
                    "divert",
                    "drown",
                    "eligible",
                    "flee",
                    "flexibility",
                    "gear",
                    "guilt",
                    "hazard",
                    "horn",
                    "inhibit",
                    "insider",
                    "intensify",
                    "intriguing",
                    "large-scale",
                    "legislature",
                    "lethal",
                    "liable",
                    "mainstream"
                ]
            },
            {
                "id": "conflict-and-power-1",
                "title": "Conflict And Power-1",
                "words": [
                    "combat",
                    "ally",
                    "post-war",
                    "warrior",
                    "straightforward",
                    "substantially",
                    "dictator",
                    "revelation",
                    "absence",
                    "accumulate",
                    "accumulation",
                    "albeit",
                    "align",
                    "arm",
                    "ballot",
                    "barrel",
                    "bench",
                    "bleed",
                    "boundary"
                ]
            },
            {
                "id": "conflict-and-power-2",
                "title": "Conflict And Power-2",
                "words": [
                    "cemetery",
                    "cocktail",
                    "compromise",
                    "countless",
                    "crown",
                    "crystal",
                    "deed",
                    "deploy",
                    "deployment",
                    "destructive",
                    "dictate",
                    "displace",
                    "exceptional",
                    "fate",
                    "fleet",
                    "grid",
                    "humanitarian",
                    "implementation"
                ]
            },
            {
                "id": "people-and-behaviour-1",
                "title": "People And Behaviour-1",
                "words": [
                    "compassion",
                    "frustration",
                    "hostility",
                    "overwhelm",
                    "acid",
                    "affection",
                    "contempt",
                    "distinctive",
                    "embarrassment",
                    "evoke",
                    "grief",
                    "hatred",
                    "mercy"
                ]
            },
            {
                "id": "people-and-behaviour-2",
                "title": "People And Behaviour-2",
                "words": [
                    "mutual",
                    "optimism",
                    "orientation",
                    "outrage",
                    "plea",
                    "rage",
                    "regain",
                    "sensation",
                    "sensitivity",
                    "sexuality",
                    "surge",
                    "wholly"
                ]
            },
            {
                "id": "institutions-1",
                "title": "Institutions-1",
                "words": [
                    "organizational",
                    "seal",
                    "congressional",
                    "consent",
                    "delegation",
                    "exert",
                    "faction",
                    "memo",
                    "presidency",
                    "tribunal",
                    "trustee",
                    "undermine"
                ]
            },
            {
                "id": "general-academic-1",
                "title": "General Academic-1",
                "words": [
                    "abortion",
                    "abundance",
                    "abuse",
                    "acceptance",
                    "accessible",
                    "acre",
                    "acute",
                    "adhere",
                    "adjacent",
                    "adolescent",
                    "adoption",
                    "alert",
                    "alien",
                    "alike",
                    "anchor",
                    "applicable",
                    "arena",
                    "atrocity",
                    "authorize",
                    "availability"
                ]
            },
            {
                "id": "general-academic-2",
                "title": "General Academic-2",
                "words": [
                    "backdrop",
                    "bare",
                    "battlefield",
                    "behalf",
                    "beloved",
                    "beneath",
                    "bind",
                    "biography",
                    "bizarre",
                    "blend",
                    "bless",
                    "blessing",
                    "bounce",
                    "burial",
                    "calculation",
                    "capability",
                    "cargo",
                    "carve",
                    "cattle",
                    "caution"
                ]
            },
            {
                "id": "general-academic-3",
                "title": "General Academic-3",
                "words": [
                    "charm",
                    "chunk",
                    "circulate",
                    "circulation",
                    "civic",
                    "cling",
                    "coastal",
                    "coincide",
                    "collision",
                    "colonial",
                    "commence",
                    "communist",
                    "companion",
                    "comparable",
                    "competence",
                    "complement",
                    "complication",
                    "compute",
                    "conceal",
                    "confirmation"
                ]
            },
            {
                "id": "general-academic-4",
                "title": "General Academic-4",
                "words": [
                    "congratulate",
                    "congregation",
                    "conquer",
                    "consecutive",
                    "consolidate",
                    "consultation",
                    "contemplate",
                    "contender",
                    "content",
                    "contention",
                    "contrary",
                    "correlate",
                    "correspond",
                    "correspondence",
                    "councillor",
                    "credibility",
                    "credible",
                    "crude",
                    "curiosity",
                    "dam"
                ]
            },
            {
                "id": "general-academic-5",
                "title": "General Academic-5",
                "words": [
                    "debut",
                    "defect",
                    "defensive",
                    "delegate",
                    "delicate",
                    "dense",
                    "density",
                    "dependence",
                    "depict",
                    "deprive",
                    "descend",
                    "descent",
                    "desirable",
                    "devastate",
                    "devise",
                    "differentiate",
                    "diminish",
                    "dip",
                    "disastrous",
                    "disposal"
                ]
            },
            {
                "id": "general-academic-6",
                "title": "General Academic-6",
                "words": [
                    "dispose",
                    "disrupt",
                    "disruption",
                    "drain",
                    "drift",
                    "driving",
                    "dumb",
                    "duo",
                    "eager",
                    "echo",
                    "ecological",
                    "educator",
                    "efficiency",
                    "ego",
                    "elaborate",
                    "electoral",
                    "embark",
                    "embed",
                    "emergence",
                    "encompass"
                ]
            },
            {
                "id": "general-academic-7",
                "title": "General Academic-7",
                "words": [
                    "encouragement",
                    "endless",
                    "engagement",
                    "engaging",
                    "enquire",
                    "enthusiast",
                    "entitle",
                    "erect",
                    "essence",
                    "eternal",
                    "exaggerate",
                    "exclusion",
                    "exclusive",
                    "explicit",
                    "explicitly",
                    "fade",
                    "fatal",
                    "fierce",
                    "film-maker",
                    "fixture"
                ]
            },
            {
                "id": "general-academic-8",
                "title": "General Academic-8",
                "words": [
                    "flesh",
                    "flourish",
                    "footage",
                    "forth",
                    "forthcoming",
                    "fragile",
                    "funeral",
                    "gaze",
                    "generic",
                    "genocide",
                    "glimpse",
                    "glorious",
                    "glory",
                    "grace",
                    "grasp",
                    "grip",
                    "gross",
                    "gut",
                    "halfway",
                    "halt"
                ]
            },
            {
                "id": "general-academic-9",
                "title": "General Academic-9",
                "words": [
                    "handful",
                    "handy",
                    "harvest",
                    "haunt",
                    "homeland",
                    "hopeful",
                    "horizon",
                    "humble",
                    "hydrogen",
                    "immense",
                    "imminent",
                    "inadequate",
                    "inclined",
                    "inclusion",
                    "incur",
                    "indulge",
                    "infant",
                    "inflict",
                    "influential",
                    "inject"
                ]
            },
            {
                "id": "general-academic-10",
                "title": "General Academic-10",
                "words": [
                    "injection",
                    "instrumental",
                    "insufficient",
                    "insult",
                    "intact",
                    "intake",
                    "intellectual",
                    "intensity",
                    "intent",
                    "interfere",
                    "interior",
                    "intervene",
                    "intimate",
                    "invisible",
                    "involvement",
                    "irony",
                    "irrelevant",
                    "isolation",
                    "kingdom",
                    "lap"
                ]
            },
            {
                "id": "general-academic-11",
                "title": "General Academic-11",
                "words": [
                    "latter",
                    "leak",
                    "leap",
                    "legacy",
                    "legendary",
                    "legislative",
                    "lengthy",
                    "lesser",
                    "liberation",
                    "license",
                    "lifelong",
                    "likelihood",
                    "limb",
                    "linger",
                    "listing",
                    "literacy",
                    "lobby",
                    "log",
                    "long-standing",
                    "long-time"
                ]
            },
            {
                "id": "general-academic-12",
                "title": "General Academic-12",
                "words": [
                    "loom",
                    "loyalty",
                    "machinery",
                    "magical",
                    "magnetic",
                    "magnitude",
                    "mainland",
                    "mandatory",
                    "manuscript",
                    "marginal",
                    "marine",
                    "mask",
                    "massacre",
                    "mathematical",
                    "mature",
                    "meantime",
                    "medieval",
                    "melody",
                    "memoir"
                ]
            },
            {
                "id": "general-academic-13",
                "title": "General Academic-13",
                "words": [
                    "memorial",
                    "mentor",
                    "merchant",
                    "mere",
                    "merely",
                    "merge",
                    "midst",
                    "minimal",
                    "minimize",
                    "miracle",
                    "misleading",
                    "missile",
                    "mob",
                    "mobilize",
                    "modification",
                    "momentum",
                    "monk",
                    "motorist",
                    "municipal"
                ]
            },
            {
                "id": "phrasal-verbs-1",
                "title": "Phrasal Verbs-1",
                "words": [
                    "bring about",
                    "bring in",
                    "carry out",
                    "come out with",
                    "find out",
                    "give up",
                    "go into",
                    "hold up",
                    "look back on",
                    "look down on",
                    "look up to",
                    "make up for",
                    "point out",
                    "put up with",
                    "set up",
                    "take on",
                    "take over",
                    "turn out",
                    "turn up",
                    "work out"
                ]
            },
            {
                "id": "phrasal-verbs-2",
                "title": "Phrasal Verbs-2",
                "words": [
                    "break down",
                    "bring back",
                    "bring up",
                    "call back",
                    "call round",
                    "carry on with",
                    "check into",
                    "cheer up",
                    "come back",
                    "come down with",
                    "come up",
                    "get back",
                    "get on with",
                    "get out of",
                    "go in for",
                    "go on with",
                    "look up",
                    "make up",
                    "pick up",
                    "put down"
                ]
            },
            {
                "id": "phrasal-verbs-3",
                "title": "Phrasal Verbs-3",
                "words": [
                    "put out",
                    "set off",
                    "take back",
                    "take off",
                    "take up",
                    "turn out",
                    "blow up",
                    "break down",
                    "call off",
                    "carry on",
                    "come out",
                    "get out",
                    "go off",
                    "go out",
                    "go up",
                    "look out",
                    "put out",
                    "sit down",
                    "take off",
                    "work out"
                ]
            },
            {
                "id": "idioms-1",
                "title": "Idioms-1",
                "words": [
                    "a double-edged sword",
                    "the tip of the iceberg",
                    "in the long run",
                    "on the right track",
                    "a wake-up call",
                    "back to square one",
                    "a matter of time",
                    "food for thought",
                    "in the same boat",
                    "at the heart of",
                    "a far cry from",
                    "under pressure",
                    "a stepping stone",
                    "in light of",
                    "by and large",
                    "an uphill battle",
                    "a vicious circle",
                    "a turning point",
                    "in the face of",
                    "beyond doubt"
                ]
            },
            {
                "id": "idioms-2",
                "title": "Idioms-2",
                "words": [
                    "a grey area",
                    "a hot potato",
                    "a level playing field",
                    "a means to an end",
                    "a sharp rise",
                    "bear in mind",
                    "break new ground",
                    "draw the line at",
                    "fall into place",
                    "from scratch",
                    "gain momentum",
                    "have far-reaching effects",
                    "in high demand",
                    "in short supply",
                    "leave a lot to be desired",
                    "make ends meet",
                    "on a large scale",
                    "raise awareness",
                    "serve a purpose",
                    "take into account"
                ]
            },
            {
                "id": "idioms-3",
                "title": "Idioms-3",
                "words": [
                    "a chain reaction",
                    "a growing concern",
                    "a landmark decision",
                    "a mixed blessing",
                    "a short-term fix",
                    "add fuel to the fire",
                    "at stake",
                    "be in the spotlight",
                    "bring to light",
                    "for the greater good",
                    "from all walks of life",
                    "go hand in hand",
                    "hold true",
                    "in real terms",
                    "keep pace with",
                    "lose ground",
                    "open the door to",
                    "play a key role",
                    "stand to reason",
                    "take centre stage"
                ]
            }
        ]
    },
    {
        "id": "topic",
        "title": "Topic",
        "icon": "📚",
        "sets": [
            {
                "id": "logistics",
                "title": "Logistics",
                "words": [
                    "air freight",
                    "airway bill",
                    "backorder",
                    "bill of lading",
                    "carrier",
                    "consignment",
                    "container",
                    "courier",
                    "customs clearance",
                    "delivery",
                    "demurrage",
                    "forwarder",
                    "freight",
                    "freight forwarder",
                    "fulfillment",
                    "incoterms",
                    "land freight",
                    "last mile",
                    "lead time",
                    "letter of credit",
                    "ocean freight",
                    "pallet",
                    "procurement",
                    "routing",
                    "shipping",
                    "third-party logistics",
                    "tracking",
                    "train freight"
                ]
            },
            {
                "id": "business",
                "title": "Business",
                "words": [
                    "amortization",
                    "collateral",
                    "diversification",
                    "liquidity",
                    "merger"
                ]
            },
            {
                "id": "environment",
                "title": "Nature",
                "words": [
                    "biodegradable",
                    "conservation",
                    "ecosystem",
                    "renewable",
                    "sustainability"
                ]
            }
        ]
    }
];

console.log('[FoxyVocab] data.js: loaded successfully, dictionary has', Object.keys(dictionary).length, 'words,', coursesData.length, 'courses');
