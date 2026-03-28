// data.js — FoxyVocab Data Layer
// Diagnostic logging for old iPad compatibility
console.log('[FoxyVocab] data.js: loading started');

/**
 * @typedef {Object} VocabularyWord
 * @property {string} definition - English definition
 * @property {'noun'|'verb'|'adj'|'adv'|'prep'|'conj'|'pron'} pos - Part of speech
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
    "CONSIGNMENT": { "definition": "Goods sent to someone to sell.", "pos": "noun", "pron": "/kənˈsaɪn.mənt/", "example": "The consignment arrived yesterday.", "vietnamese": "Hàng ký gửi", "vietnamese_example": "Lô hàng ký gửi đã đến hôm qua.", "cefr": "C1" },
    "PROCUREMENT": { "definition": "The process of obtaining goods or services.", "pos": "noun", "pron": "/prəˈkjʊə.mənt/", "example": "Procurement takes time.", "vietnamese": "Sự thu mua", "vietnamese_example": "Thu mua tốn thời gian.", "cefr": "C1" },
    "FULFILLMENT": { "definition": "Completing and delivering an order.", "pos": "noun", "pron": "/fʊlˈfɪl.mənt/", "example": "Order fulfillment is faster now.", "vietnamese": "Sự hoàn tất đơn hàng", "vietnamese_example": "Hoàn tất đơn hàng giờ nhanh hơn.", "cefr": "B2" },
    "LEAD TIME": { "definition": "Time between ordering and receiving goods.", "pos": "noun", "pron": "/liːd taɪm/", "example": "Lead time is about five days.", "vietnamese": "Thời gian chờ", "vietnamese_example": "Thời gian chờ khoảng năm ngày.", "cefr": "B2" },
    "BACKORDER": { "definition": "An order that cannot be filled immediately.", "pos": "noun", "pron": "/ˈbækˌɔː.dər/", "example": "It is currently on backorder.", "vietnamese": "Đơn hàng nợ", "vietnamese_example": "Nó hiện đang trong đơn hàng nợ.", "cefr": "C1" },
    "AMORTIZATION": { "definition": "Gradual reduction of a loan value.", "pos": "noun", "pron": "/ˌæm.ər.taɪˈzeɪ.ʃən/", "example": "Check the amortization schedule.", "vietnamese": "Sự khấu hao", "vietnamese_example": "Kiểm tra lịch trình khấu hao.", "cefr": "C2" },
    "COLLATERAL": { "definition": "Property pledged as security for a loan.", "pos": "noun", "pron": "/kəˈlæt.ər.əl/", "example": "They demanded collateral.", "vietnamese": "Tài sản thế chấp", "vietnamese_example": "Họ yêu cầu tài sản thế chấp.", "cefr": "C1" },
    "DIVERSIFICATION": { "definition": "Varying investments to reduce risk.", "pos": "noun", "pron": "/daɪˌvɜː.sɪ.fɪˈkeɪ.ʃən/", "example": "Diversification is key.", "vietnamese": "Sự đa dạng hóa", "vietnamese_example": "Đa dạng hóa là chìa khóa.", "cefr": "C1" },
    "LIQUIDITY": { "definition": "Availability of liquid assets.", "pos": "noun", "pron": "/lɪˈkwɪd.ə.ti/", "example": "High liquidity is good.", "vietnamese": "Thanh khoản", "vietnamese_example": "Thanh khoản cao là tốt.", "cefr": "C1" },
    "MERGER": { "definition": "Combination of two companies.", "pos": "noun", "pron": "/ˈmɜː.dʒər/", "example": "The merger was announced.", "vietnamese": "Sự sáp nhập", "vietnamese_example": "Việc sáp nhập đã được công bố.", "cefr": "B2" },
    "BIODEGRADABLE": { "definition": "Capable of being decomposed.", "pos": "adj", "pron": "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/", "example": "Use biodegradable packaging.", "vietnamese": "Có thể phân hủy sinh học", "vietnamese_example": "Sử dụng bao bì phân hủy sinh học.", "cefr": "C1" },
    "ECOSYSTEM": { "definition": "Biological community of organisms.", "pos": "noun", "pron": "/ˈiː.kəʊ.sɪs.təm/", "example": "The marine ecosystem.", "vietnamese": "Hệ sinh thái", "vietnamese_example": "Hệ sinh thái biển.", "cefr": "B2" },
    "RENEWABLE": { "definition": "Energy from a source not depleted.", "pos": "adj", "pron": "/rɪˈnjuː.ə.bəl/", "example": "Renewable energy sources.", "vietnamese": "Tái tạo", "vietnamese_example": "Nguồn năng lượng tái tạo.", "cefr": "B2" },
    "SUSTAINABILITY": { "definition": "Avoidance of depletion of resources.", "pos": "noun", "pron": "/səˌsteɪ.nəˈbɪl.ə.ti/", "example": "Focus on sustainability.", "vietnamese": "Tính bền vững", "vietnamese_example": "Tập trung vào tính bền vững.", "cefr": "C1" },
    "CONSERVATION": { "definition": "Prevention of wasteful use of resources.", "pos": "noun", "pron": "/ˌkɒn.səˈveɪ.ʃən/", "example": "Wildlife conservation.", "vietnamese": "Sự bảo tồn", "vietnamese_example": "Bảo tồn động vật hoang dã.", "cefr": "B2" },
    "FREIGHT": { "definition": "Goods transported in bulk by truck, train, ship, or aircraft.", "pos": "noun", "pron": "/freɪt/", "example": "The freight arrives by ship tomorrow.", "vietnamese": "Hàng hóa vận chuyển", "vietnamese_example": "Hàng hóa vận chuyển sẽ đến bằng tàu vào ngày mai.", "cefr": "B2" },
    "AIR FREIGHT": { "definition": "The transportation of goods by aircraft.", "pos": "noun", "pron": "/er freɪt/", "example": "Air freight is fast but expensive.", "vietnamese": "Vận tải hàng không", "vietnamese_example": "Vận tải hàng không nhanh nhưng đắt đỏ.", "cefr": "B1" },
    "TRAIN FREIGHT": { "definition": "The transportation of goods by train.", "pos": "noun", "pron": "/treɪn freɪt/", "example": "Train freight is efficient for long distances.", "vietnamese": "Hàng hóa vận chuyển bằng đường sắt", "vietnamese_example": "Hàng hóa vận chuyển bằng đường sắt rất hiểu quả cho khoảng cách xa.", "cefr": "B1" },
    "AIRWAY BILL": { "definition": "A document accompanying goods shipped by an international air courier.", "pos": "noun", "pron": "/ˈer.weɪ bɪl/", "example": "Please sign the airway bill.", "vietnamese": "Văn bản vận chuyển hàng không", "vietnamese_example": "Vui lòng ký tên vào văn bản vận chuyển.", "cefr": "C1" },
    "OCEAN FREIGHT": { "definition": "The transportation of goods by sea.", "pos": "noun", "pron": "/ˈoʊ.ʃən freɪt/", "example": "Ocean freight is cost-effective for large shipments.", "vietnamese": "Vận tải đường biển", "vietnamese_example": "Vận tải đường biển tiết kiệm chi phí cho các lô hàng lớn.", "cefr": "B2" },
    "LAND FREIGHT": { "definition": "The transportation of goods by road.", "pos": "noun", "pron": "/lænd freɪt/", "example": "Land freight is commonly used for domestic deliveries.", "vietnamese": "Vận tải đường bộ", "vietnamese_example": "Vận tải đường bộ thường được sử dụng cho giao hàng nội địa.", "cefr": "B1" },
    "COURIER": { "definition": "A company or employee that transports packages and documents.", "pos": "noun", "pron": "/ˈkʊr.i.ər/", "example": "The courier will deliver the package today.", "vietnamese": "Chuyển phát nhanh", "vietnamese_example": "Bưu tá sẽ giao gói hàng hôm nay.", "cefr": "B2" },
    "FORWARDER": { "definition": "A firm specializing in arranging storage and shipping of merchandise.", "pos": "noun", "pron": "/ˈfɔːr.wər.dər/", "example": "We hired a forwarder to handle international shipping.", "vietnamese": "Đại lý vận tải", "vietnamese_example": "Chúng tôi đã thuê một đại lý vận tải để lo việc vận chuyển quốc tế.", "cefr": "C1" },
    "CUSTOMS CLEARANCE": { "definition": "The documented permission to pass that a national customs authority grants to imported goods.", "pos": "noun", "pron": "/ˈkʌs.təmz ˈklɪr.əns/", "example": "The goods are delayed at customs clearance.", "vietnamese": "Thủ tục hải quan", "vietnamese_example": "Hàng hóa bị trễ ở khâu thủ tục hải quan.", "cefr": "C1" },
    "INCOTERMS": { "definition": "A set of rules which define the responsibilities of sellers and buyers.", "pos": "noun", "pron": "/ˈɪn.koʊ.tɜːrmz/", "example": "Make sure you understand the Incoterms before signing.", "vietnamese": "Các điều khoản giao hàng quốc tế", "vietnamese_example": "Hãy đảm bảo bạn hiểu rõ các điều khoản giao hàng quốc tế trước khi ký kết.", "cefr": "C2" },
    "BILL OF LADING": { "definition": "A detailed list of a shipment of goods in the form of a receipt given by the carrier.", "pos": "noun", "pron": "/ˌbɪl əv ˈleɪ.dɪŋ/", "example": "The captain signed the bill of lading.", "vietnamese": "Vận đơn", "vietnamese_example": "Thuyền trưởng đã ký tên vào vận đơn.", "cefr": "C2" },
    "LETTER OF CREDIT": { "definition": "A letter issued by a bank to another bank to serve as a guarantee for payments.", "pos": "noun", "pron": "/ˌlet.ər əv ˈkred.ɪt/", "example": "We require a letter of credit for international trades.", "vietnamese": "Tín dụng thư", "vietnamese_example": "Chúng tôi yêu cầu tín dụng thư cho các giao dịch quốc tế.", "cefr": "C2" },
    "CONTAINER": { "definition": "A large metal box of standard design used for transporting goods.", "pos": "noun", "pron": "/kənˈteɪ.nər/", "example": "The container was loaded onto the ship.", "vietnamese": "Thùng container", "vietnamese_example": "Thùng container đã được xếp lên tàu.", "cefr": "B1" },
    "PALLET": { "definition": "A flat wooden structure that heavy goods are put onto so that they can be moved.", "pos": "noun", "pron": "/ˈpæl.ɪt/", "example": "The boxes are stacked on a pallet.", "vietnamese": "Kệ hàng", "vietnamese_example": "Các hộp được xếp chồng lên một kệ hàng.", "cefr": "B2" },
    "DEMURRAGE": { "definition": "A charge payable to the owner of a chartered ship on failure to load or discharge the ship within the time agreed.", "pos": "noun", "pron": "/dɪˈmɜːr.ɪdʒ/", "example": "We had to pay demurrage because the port was congested.", "vietnamese": "Phí lưu kho", "vietnamese_example": "Chúng tôi phải trả phí lưu kho vì cảng bị tắc nghẽn.", "cefr": "C2" },
    "CARRIER": { "definition": "A person or company that undertakes the professional conveyance of goods or people.", "pos": "noun", "pron": "/ˈkær.i.ər/", "example": "The airline is our primary carrier.", "vietnamese": "Hãng vận chuyển", "vietnamese_example": "Hãng hàng không là hãng vận chuyển chính của chúng tôi.", "cefr": "B2" },
    "SHIPPING": { "definition": "The transport of goods by sea or some other means.", "pos": "noun", "pron": "/ˈʃɪp.ɪŋ/", "example": "The shipping cost is calculated by weight.", "vietnamese": "Giao hàng", "vietnamese_example": "Chi phí giao hàng được tính theo trọng lượng.", "cefr": "A2" },
    "DELIVERY": { "definition": "The carrying and turning over of letters, goods, or services.", "pos": "noun", "pron": "/dɪˈlɪv.ər.i/", "example": "We guarantee fast delivery.", "vietnamese": "Giao hàng", "vietnamese_example": "Chúng tôi đảm bảo giao hàng nhanh.", "cefr": "A2" },
    "ROUTING": { "definition": "The process of selecting a path for traffic or transport.", "pos": "noun", "pron": "/ˈruː.tɪŋ/", "example": "The routing of the delivery truck changed due to traffic.", "vietnamese": "Lộ trình", "vietnamese_example": "Lộ trình của xe tải giao hàng thay đổi do tắc đường.", "cefr": "B2" },
    "TRACKING": { "definition": "The monitoring of the progress of an item through a network.", "pos": "noun", "pron": "/ˈtræk.ɪŋ/", "example": "You can use the tracking number to locate your package.", "vietnamese": "Theo dõi", "vietnamese_example": "Bạn có thể sử dụng mã theo dõi để định vị gói hàng của mình.", "cefr": "B1" },
    "FREIGHT FORWARDER": { "definition": "A company that organizes shipments for individuals or corporations.", "pos": "noun", "pron": "/freɪt ˈfɔːr.wər.dər/", "example": "The freight forwarder consolidated our shipments.", "vietnamese": "Nhà xuất khẩu hàng hóa", "vietnamese_example": "Nhà xuất khẩu hàng hóa đã gom các lô hàng của chúng tôi.", "cefr": "C1" },
    "THIRD-PARTY LOGISTICS": { "definition": "The use of third-party businesses to outsource elements of distribution.", "pos": "noun", "pron": "/θɜːrd ˈpɑːr.ti ləˈdʒɪs.tɪks/", "example": "Many companies use third-party logistics to reduce costs.", "vietnamese": "Dịch vụ logistics của bên thứ ba", "vietnamese_example": "Nhiều công ty sử dụng dịch vụ logistics của bên thứ ba để giảm chi phí.", "cefr": "C2" },
    "LAST MILE": { "definition": "The final stage of a product's journey to the end user.", "pos": "noun", "pron": "/læst maɪl/", "example": "The last mile is often the most expensive part of delivery.", "vietnamese": "Cận cảng", "vietnamese_example": "Khâu cận cảng thường là phần đắt đỏ nhất của việc giao hàng.", "cefr": "C1" },
    "COMBUSTION": { "definition": "The process of burning something.", "pos": "noun", "pron": "/kəmˈbʌs.tʃən/", "example": "The combustion of fossil fuels produces greenhouse gases.", "vietnamese": "Sự đốt cháy", "vietnamese_example": "Sự đốt cháy nhiên liệu hóa thạch tạo ra khí nhà kính.", "cefr": "C1" },
    "GREENHOUSE GASES": { "definition": "Gases in the earth's atmosphere that trap heat.", "pos": "noun", "pron": "/ˈɡriːn.haʊs ˌɡæs.ɪz/", "example": "We must reduce emissions of greenhouse gases.", "vietnamese": "Khí nhà kính", "vietnamese_example": "Chúng ta phải giảm lượng khí thải của khí nhà kính.", "cefr": "B2" },
    "EXACERBATE": { "definition": "To make a problem, bad situation, or negative feeling worse.", "pos": "verb", "pron": "/ɪɡˈzæs.ə.beɪt/", "example": "This attack will exacerbate the already tense relations.", "vietnamese": "Làm trầm trọng thêm", "vietnamese_example": "Cuộc tấn công này sẽ làm trầm trọng thêm mối quan hệ vốn dĩ căng thẳng.", "cefr": "C1" },
    "EXPONENTIAL": { "definition": "Growing or increasing very rapidly.", "pos": "adj", "pron": "/ˌek.spəˈnen.ʃəl/", "example": "There has been an exponential increase in world population.", "vietnamese": "Theo cấp số nhân", "vietnamese_example": "Dân số thế giới đã có sự gia tăng theo cấp số nhân.", "cefr": "C1" },
    "METHANE": { "definition": "A colorless, odorless, flammable gas that is a greenhouse gas.", "pos": "noun", "pron": "/ˈmiː.θeɪn/", "example": "Methane is released during the decay of organic substances.", "vietnamese": "Khí mê-tan", "vietnamese_example": "Khí mê-tan được giải phóng trong quá trình phân hủy của các chất hữu cơ.", "cefr": "C1" },
    "INTENSITY": { "definition": "The quality of being felt strongly or having a very strong effect.", "pos": "noun", "pron": "/ɪnˈten.sə.ti/", "example": "The storm resumed with even greater intensity.", "vietnamese": "Cường độ", "vietnamese_example": "Cơn bão tiếp tục với cường độ lớn hơn nữa.", "cefr": "B2" },
    "GLACIER": { "definition": "A slowly moving mass or river of ice formed by the accumulation and compaction of snow.", "pos": "noun", "pron": "/ˈɡlæs.i.ər/", "example": "The glacier is melting rapidly due to climate change.", "vietnamese": "Sông băng", "vietnamese_example": "Sông băng đang tan chảy nhanh do biến đổi khí hậu.", "cefr": "B2" },
    "EROSION": { "definition": "The process of eroding or being eroded by wind, water, or other natural agents.", "pos": "noun", "pron": "/ɪˈrəʊ.ʒən/", "example": "Soil erosion is a serious problem in this area.", "vietnamese": "Sự xói mòn", "vietnamese_example": "Sự xói mòn đất là một vấn đề nghiêm trọng ở khu vực này.", "cefr": "B2" },
    "MITIGATE": { "definition": "To make something less severe, harmful, or painful.", "pos": "verb", "pron": "/ˈmɪt.ɪ.ɡeɪt/", "example": "We need to mitigate the effects of the disaster.", "vietnamese": "Giảm nhẹ", "vietnamese_example": "Chúng ta cần giảm nhẹ ảnh hưởng của thảm họa.", "cefr": "C1" },
    "PRECISION": { "definition": "The quality, condition, or fact of being exact and accurate.", "pos": "noun", "pron": "/prɪˈsɪʒ.ən/", "example": "His work was done with extreme precision.", "vietnamese": "Sự chính xác", "vietnamese_example": "Công việc của anh ấy được thực hiện với độ chính xác cực cao.", "cefr": "B2" },
    "OVER-CROWDING": { "definition": "The presence of more people or things in a space than is comfortable, safe, or permissible.", "pos": "noun", "pron": "/ˌəʊ.vəˈkraʊd.ɪŋ/", "example": "Over-crowding in cities leads to many social problems.", "vietnamese": "Sự đông đúc quá mức", "vietnamese_example": "Sự đông đúc quá mức ở các thành phố dẫn đến nhiều vấn đề xã hội.", "cefr": "B2" },
    "COMPETENT": { "definition": "Having the necessary ability, knowledge, or skill to do something successfully.", "pos": "adj", "pron": "/ˈkɒm.pɪ.tənt/", "example": "Make sure the staff are fully competent.", "vietnamese": "Có năng lực", "vietnamese_example": "Bảo đảm các nhân viên được đào tạo đủ năng lực.", "cefr": "C1" },
    "CARCINOGEN": { "definition": "A substance capable of causing cancer in living tissue.", "pos": "noun", "pron": "/kɑːˈsɪn.ə.dʒən/", "example": "Tobacco smoke contains numerous carcinogens.", "vietnamese": "Chất gây ung thư", "vietnamese_example": "Khói thuốc lá chứa hàng tá chất gây ung thư.", "cefr": "C1" },
    "DELETERIOUS": { "definition": "Causing harm or damage.", "pos": "adj", "pron": "/ˌdel.ɪˈtɪə.ri.əs/", "example": "The chemical is deleterious to the environment.", "vietnamese": "Có hại", "vietnamese_example": "Hóa chất này gây hại cho môi trường.", "cefr": "C2" },
    "PERISHABLE": { "definition": "Likely to decay or go bad quickly.", "pos": "adj", "pron": "/ˈper.ɪ.ʃə.bəl/", "example": "Perishable foods must be kept refrigerated.", "vietnamese": "Dễ ôi thiu", "vietnamese_example": "Thực phẩm dễ ôi thiu phải được giữ lạnh.", "cefr": "C1" },
    "SURVEILLANCE": { "definition": "Close observation, especially of a suspected spy or criminal.", "pos": "noun", "pron": "/səˈveɪ.ləns/", "example": "They were under constant surveillance.", "vietnamese": "Sự giám sát", "vietnamese_example": "Họ bị đặt dưới sự giám sát liên tục.", "cefr": "C1" },
    "INTRUSION": { "definition": "The action of intruding or invading.", "pos": "noun", "pron": "/ɪnˈtruː.ʒən/", "example": "He resented the intrusion into his private life.", "vietnamese": "Sự xâm nhập", "vietnamese_example": "Anh ta bực mình trước sự xâm phạm vào đời sống riêng tư.", "cefr": "C1" },
    "CONFORMIST": { "definition": "A person who conforms to accepted behavior or established practices.", "pos": "noun", "pron": "/kənˈfɔː.mɪst/", "example": "She was too much of a conformist to challenge the rules.", "vietnamese": "Người tuân thủ", "vietnamese_example": "Cô ấy quá tuân thủ nên không dám phản đối những luật lệ đó.", "cefr": "C1" },
    "TYRANNIZED": { "definition": "Ruled or treated cruelly and unjustly.", "pos": "verb", "pron": "/ˈtɪr.ə.naɪzd/", "example": "The people were tyrannized by a dictator.", "vietnamese": "Bị áp bức", "vietnamese_example": "Những người dân bị đàn áp bởi một nhà độc tài.", "cefr": "C2" },
    "REINTEGRATE": { "definition": "To integrate someone back into society.", "pos": "verb", "pron": "/ˌriːˈɪn.tɪ.ɡreɪt/", "example": "They help former inmates reintegrate into society.", "vietnamese": "Tái hòa nhập", "vietnamese_example": "Họ giúp những phạm nhân cũ tái hòa nhập vào cộng đồng.", "cefr": "C1" },
    "AESTHETIC": { "definition": "Concerned with beauty or the appreciation of beauty.", "pos": "adj", "pron": "/esˈθet.ɪk/", "example": "The building has great aesthetic appeal.", "vietnamese": "Thẩm mỹ", "vietnamese_example": "Tòa nhà này có giá trị thẩm mỹ cao.", "cefr": "B2" },
    "DISTINCTIVE": { "definition": "Characteristic of one person or thing.", "pos": "adj", "pron": "/dɪˈstɪŋk.tɪv/", "example": "She has a very distinctive voice.", "vietnamese": "Đặc biệt", "vietnamese_example": "Cô ấy có một giọng nói rất đặc trưng.", "cefr": "B2" },
    "REFURBISH": { "definition": "To renovate and redecorate something.", "pos": "verb", "pron": "/ˌriːˈfɜː.bɪʃ/", "example": "We plan to refurbish the old building.", "vietnamese": "Tân trang", "vietnamese_example": "Chúng tôi dự kiến sẽ tân trang tòa nhà cũ.", "cefr": "C1" },
    "AUTONOMY": { "definition": "The right or condition of self-government.", "pos": "noun", "pron": "/ɔːˈtɒn.ə.mi/", "example": "The region has a degree of autonomy.", "vietnamese": "Quyền tự trị", "vietnamese_example": "Vùng này có một mức độ tự trị.", "cefr": "C1" },
    "INTRINSIC": { "definition": "Belonging naturally; essential.", "pos": "adj", "pron": "/ɪnˈtrɪn.zɪk/", "example": "Art has an intrinsic value.", "vietnamese": "Bản chất", "vietnamese_example": "Nghệ thuật có một giá trị bản chất.", "cefr": "C2" },
    "INTERPERSONAL": { "definition": "Relating to relationships or communication between people.", "pos": "adj", "pron": "/ˌɪn.təˈpɜː.sən.əl/", "example": "You need good interpersonal skills for this job.", "vietnamese": "Giữa các cá nhân", "vietnamese_example": "Bạn cần các kỹ năng giao tiếp giữa các cá nhân tốt.", "cefr": "B2" },
    "NUANCE": { "definition": "A subtle difference in or shade of meaning.", "pos": "noun", "pron": "/ˈnjuː.ɑːns/", "example": "He watched her face intently to catch every nuance of expression.", "vietnamese": "Sắc thái", "vietnamese_example": "Anh ta đã chăm chú quan sát mọi sắc thái của cô ấy.", "cefr": "C2" },
    "INFLUX": { "definition": "An arrival or entry of large numbers of people or things.", "pos": "noun", "pron": "/ˈɪn.flʌks/", "example": "There has been a massive influx of tourists.", "vietnamese": "Sự chảy vào", "vietnamese_example": "Đã có một lượng lớn du khách tràn vào.", "cefr": "C1" },
    "INFRASTRUCTURE": { "definition": "The basic physical and organizational structures and facilities.", "pos": "noun", "pron": "/ˈɪn.frəˌstrʌk.tʃər/", "example": "The country's infrastructure is crumbling.", "vietnamese": "Cơ sở hạ tầng", "vietnamese_example": "Cơ sở hạ tầng của quốc gia đang dần xuống cấp.", "cefr": "B2" },
    "INDIGENOUS": { "definition": "Originating or occurring naturally in a particular place; native.", "pos": "adj", "pron": "/ɪnˈdɪdʒ.ɪ.nəs/", "example": "The area is home to many indigenous people.", "vietnamese": "Bản địa", "vietnamese_example": "Khu vực này là nơi sinh sống của nhiều người dân bản địa.", "cefr": "C1" },
    "INSOLVENCY": { "definition": "The state of being unable to pay the money owed.", "pos": "noun", "pron": "/ɪnˈsɒl.vən.si/", "example": "The company was facing insolvency.", "vietnamese": "Sự vỡ nợ", "vietnamese_example": "Công ty đó đang đối mặt với sự vỡ nợ.", "cefr": "C2" },
    "REDUNDANT": { "definition": "Not or no longer needed or useful.", "pos": "adj", "pron": "/rɪˈdʌn.dənt/", "example": "Many workers were made redundant.", "vietnamese": "Dư thừa", "vietnamese_example": "Rất nhiều công nhân đã bị cho nghỉ việc do dư thừa nhân sự.", "cefr": "C1" },
    "RECESSION": { "definition": "A period of temporary economic decline.", "pos": "noun", "pron": "/rɪˈseʃ.ən/", "example": "The country is sliding into recession.", "vietnamese": "Suy thoái", "vietnamese_example": "Quốc gia này đang trượt dài vào cuộc suy thoái kinh tế.", "cefr": "B2" },
    "AUTOMATE": { "definition": "Convert to largely automatic operation.", "pos": "verb", "pron": "/ˈɔː.tə.meɪt/", "example": "The factory has been fully automated.", "vietnamese": "Tự động hóa", "vietnamese_example": "Nhà máy này đã được tự động hóa hoàn toàn.", "cefr": "C1" },
    "OPTIMAL": { "definition": "Best or most favorable.", "pos": "adj", "pron": "/ˈɒp.tɪ.məl/", "example": "We seek the optimal solution.", "vietnamese": "Tối ưu", "vietnamese_example": "Chúng tôi đang tìm một biện pháp giải quyết tối ưu.", "cefr": "C1" },
    "SEDENTARY": { "definition": "Tending to spend much time seated; somewhat inactive.", "pos": "adj", "pron": "/ˈsed.ən.tər.i/", "example": "He has a very sedentary job.", "vietnamese": "Ít vận động", "vietnamese_example": "Anh ấy có công việc rất ít vận động.", "cefr": "C1" }
};

/**
 * Course → Set hierarchy.
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
                  "COMBUSTION", "GREENHOUSE GASES", "EXACERBATE", "EXPONENTIAL", "METHANE",
                  "INTENSITY", "GLACIER", "EROSION", "ECOSYSTEM", "MITIGATE",
                  "RENEWABLE", "PRECISION", "OVER-CROWDING", "COMPETENT", "CARCINOGEN",
                  "DELETERIOUS", "PERISHABLE", "SURVEILLANCE", "INTRUSION", "CONFORMIST"
                ]
            },
            {
                "id": "writing-2",
                "title": "Writing 2",
                "words": [
                  "TYRANNIZED", "REINTEGRATE", "AESTHETIC", "DISTINCTIVE", "REFURBISH",
                  "AUTONOMY", "INTRINSIC", "INTERPERSONAL", "NUANCE", "INFLUX",
                  "INFRASTRUCTURE", "INDIGENOUS", "INSOLVENCY", "REDUNDANT", "RECESSION",
                  "AUTOMATE", "OPTIMAL", "SEDENTARY"
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
                "id": "toeic-placeholder",
                "title": "TOEIC Placeholder Set",
                "words": ["AMORTIZATION", "COLLATERAL", "DIVERSIFICATION", "LIQUIDITY", "MERGER"]
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
                "title": "Logistics & Supply Chain",
                "words": [
                    "CONSIGNMENT", "PROCUREMENT", "FULFILLMENT", "LEAD TIME", "BACKORDER",
                    "FREIGHT", "AIR FREIGHT", "TRAIN FREIGHT", "AIRWAY BILL", "OCEAN FREIGHT",
                    "LAND FREIGHT", "COURIER", "FORWARDER", "CUSTOMS CLEARANCE", "INCOTERMS",
                    "BILL OF LADING", "LETTER OF CREDIT", "CONTAINER", "PALLET", "DEMURRAGE",
                    "CARRIER", "SHIPPING", "DELIVERY", "ROUTING", "TRACKING", "FREIGHT FORWARDER",
                    "THIRD-PARTY LOGISTICS", "LAST MILE"
                ]
            },
            {
                "id": "business",
                "title": "Business & Finance",
                "words": ["AMORTIZATION", "COLLATERAL", "DIVERSIFICATION", "LIQUIDITY", "MERGER"]
            },
            {
                "id": "environment",
                "title": "Nature & Ecology",
                "words": ["BIODEGRADABLE", "ECOSYSTEM", "RENEWABLE", "SUSTAINABILITY", "CONSERVATION"]
            }
        ]
    }
];

console.log('[FoxyVocab] data.js: loaded successfully, dictionary has', Object.keys(dictionary).length, 'words,', coursesData.length, 'courses');