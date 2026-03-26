// data.js

/**
 * @typedef {Object} VocabularyWord
 * @property {string} definition - English definition
 * @property {'noun'|'verb'|'adj'|'adv'|'prep'|'conj'|'pron'} pos - Part of speech
 * @property {string} pron - IPA pronunciation
 * @property {string} example - English example sentence
 * @property {string} vietnamese - Vietnamese translation
 * @property {string} vietnamese_example - Vietnamese translation of example
 */

/**
 * Global dictionary of all words.
 * @type {Object.<string, VocabularyWord>}
 */
const dictionary = {
    "CONSIGNMENT": { "definition": "Goods sent to someone to sell.", "pos": "noun", "pron": "/kənˈsaɪn.mənt/", "example": "The consignment arrived yesterday.", "vietnamese": "Hàng ký gửi", "vietnamese_example": "Lô hàng ký gửi đã đến hôm qua." },
    "PROCUREMENT": { "definition": "The process of obtaining goods or services.", "pos": "noun", "pron": "/prəˈkjʊə.mənt/", "example": "Procurement takes time.", "vietnamese": "Sự thu mua", "vietnamese_example": "Thu mua tốn thời gian." },
    "FULFILLMENT": { "definition": "Completing and delivering an order.", "pos": "noun", "pron": "/fʊlˈfɪl.mənt/", "example": "Order fulfillment is faster now.", "vietnamese": "Sự hoàn tất đơn hàng", "vietnamese_example": "Hoàn tất đơn hàng giờ nhanh hơn." },
    "LEAD TIME": { "definition": "Time between ordering and receiving goods.", "pos": "noun", "pron": "/liːd taɪm/", "example": "Lead time is about five days.", "vietnamese": "Thời gian chờ", "vietnamese_example": "Thời gian chờ khoảng năm ngày." },
    "BACKORDER": { "definition": "An order that cannot be filled immediately.", "pos": "noun", "pron": "/ˈbækˌɔː.dər/", "example": "It is currently on backorder.", "vietnamese": "Đơn hàng nợ", "vietnamese_example": "Nó hiện đang trong đơn hàng nợ." },
    "AMORTIZATION": { "definition": "Gradual reduction of a loan value.", "pos": "noun", "pron": "/ˌæm.ər.taɪˈzeɪ.ʃən/", "example": "Check the amortization schedule.", "vietnamese": "Sự khấu hao", "vietnamese_example": "Kiểm tra lịch trình khấu hao." },
    "COLLATERAL": { "definition": "Property pledged as security for a loan.", "pos": "noun", "pron": "/kəˈlæt.ər.əl/", "example": "They demanded collateral.", "vietnamese": "Tài sản thế chấp", "vietnamese_example": "Họ yêu cầu tài sản thế chấp." },
    "DIVERSIFICATION": { "definition": "Varying investments to reduce risk.", "pos": "noun", "pron": "/daɪˌvɜː.sɪ.fɪˈkeɪ.ʃən/", "example": "Diversification is key.", "vietnamese": "Sự đa dạng hóa", "vietnamese_example": "Đa dạng hóa là chìa khóa." },
    "LIQUIDITY": { "definition": "Availability of liquid assets.", "pos": "noun", "pron": "/lɪˈkwɪd.ə.ti/", "example": "High liquidity is good.", "vietnamese": "Thanh khoản", "vietnamese_example": "Thanh khoản cao là tốt." },
    "MERGER": { "definition": "Combination of two companies.", "pos": "noun", "pron": "/ˈmɜː.dʒər/", "example": "The merger was announced.", "vietnamese": "Sự sáp nhập", "vietnamese_example": "Việc sáp nhập đã được công bố." },
    "BIODEGRADABLE": { "definition": "Capable of being decomposed.", "pos": "adj", "pron": "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/", "example": "Use biodegradable packaging.", "vietnamese": "Có thể phân hủy sinh học", "vietnamese_example": "Sử dụng bao bì phân hủy sinh học." },
    "ECOSYSTEM": { "definition": "Biological community of organisms.", "pos": "noun", "pron": "/ˈiː.kəʊ.sɪs.təm/", "example": "The marine ecosystem.", "vietnamese": "Hệ sinh thái", "vietnamese_example": "Hệ sinh thái biển." },
    "RENEWABLE": { "definition": "Energy from a source not depleted.", "pos": "adj", "pron": "/rɪˈnjuː.ə.bəl/", "example": "Renewable energy sources.", "vietnamese": "Tái tạo", "vietnamese_example": "Nguồn năng lượng tái tạo." },
    "SUSTAINABILITY": { "definition": "Avoidance of depletion of resources.", "pos": "noun", "pron": "/səˌsteɪ.nəˈbɪl.ə.ti/", "example": "Focus on sustainability.", "vietnamese": "Tính bền vững", "vietnamese_example": "Tập trung vào tính bền vững." },
    "CONSERVATION": { "definition": "Prevention of wasteful use of resources.", "pos": "noun", "pron": "/ˌkɒn.səˈveɪ.ʃən/", "example": "Wildlife conservation.", "vietnamese": "Sự bảo tồn", "vietnamese_example": "Bảo tồn động vật hoang dã." },
    "FREIGHT": { "definition": "Goods transported in bulk by truck, train, ship, or aircraft.", "pos": "noun", "pron": "/freɪt/", "example": "The freight arrives by ship tomorrow.", "vietnamese": "Hàng hóa vận chuyển", "vietnamese_example": "Hàng hóa vận chuyển sẽ đến bằng tàu vào ngày mai." },
    "AIR FREIGHT": { "definition": "The transportation of goods by aircraft.", "pos": "noun", "pron": "/er freɪt/", "example": "Air freight is fast but expensive.", "vietnamese": "Vận tải hàng không", "vietnamese_example": "Vận tải hàng không nhanh nhưng đắt đỏ." },
    "TRAIN FREIGHT": { "definition": "The transportation of goods by train.", "pos": "noun", "pron": "/treɪn freɪt/", "example": "Train freight is efficient for long distances.", "vietnamese": "Hàng hóa vận chuyển bằng đường sắt", "vietnamese_example": "Hàng hóa vận chuyển bằng đường sắt rất hiệu quả cho khoảng cách xa." },
    "AIRWAY BILL": { "definition": "A document accompanying goods shipped by an international air courier.", "pos": "noun", "pron": "/ˈer.weɪ bɪl/", "example": "Please sign the airway bill.", "vietnamese": "Văn bản vận chuyển hàng không", "vietnamese_example": "Vui lòng ký tên vào văn bản vận chuyển." },
    "OCEAN FREIGHT": { "definition": "The transportation of goods by sea.", "pos": "noun", "pron": "/ˈoʊ.ʃən freɪt/", "example": "Ocean freight is cost-effective for large shipments.", "vietnamese": "Vận tải đường biển", "vietnamese_example": "Vận tải đường biển tiết kiệm chi phí cho các lô hàng lớn." },
    "LAND FREIGHT": { "definition": "The transportation of goods by road.", "pos": "noun", "pron": "/lænd freɪt/", "example": "Land freight is commonly used for domestic deliveries.", "vietnamese": "Vận tải đường bộ", "vietnamese_example": "Vận tải đường bộ thường được sử dụng cho giao hàng nội địa." },
    "COURIER": { "definition": "A company or employee that transports packages and documents.", "pos": "noun", "pron": "/ˈkʊr.i.ər/", "example": "The courier will deliver the package today.", "vietnamese": "Chuyển phát nhanh", "vietnamese_example": "Bưu tá sẽ giao gói hàng hôm nay." },
    "FORWARDER": { "definition": "A firm specializing in arranging storage and shipping of merchandise.", "pos": "noun", "pron": "/ˈfɔːr.wər.dər/", "example": "We hired a forwarder to handle international shipping.", "vietnamese": "Đại lý vận tải", "vietnamese_example": "Chúng tôi đã thuê một đại lý vận tải để lo việc vận chuyển quốc tế." },
    "CUSTOMS CLEARANCE": { "definition": "The documented permission to pass that a national customs authority grants to imported goods.", "pos": "noun", "pron": "/ˈkʌs.təmz ˈklɪr.əns/", "example": "The goods are delayed at customs clearance.", "vietnamese": "Thủ tục hải quan", "vietnamese_example": "Hàng hóa bị trễ ở khâu thủ tục hải quan." },
    "INCOTERMS": { "definition": "A set of rules which define the responsibilities of sellers and buyers.", "pos": "noun", "pron": "/ˈɪn.koʊ.tɜːrmz/", "example": "Make sure you understand the Incoterms before signing.", "vietnamese": "Các điều khoản giao hàng quốc tế", "vietnamese_example": "Hãy đảm bảo bạn hiểu rõ các điều khoản giao hàng quốc tế trước khi ký kết." },
    "BILL OF LADING": { "definition": "A detailed list of a shipment of goods in the form of a receipt given by the carrier.", "pos": "noun", "pron": "/ˌbɪl əv ˈleɪ.dɪŋ/", "example": "The captain signed the bill of lading.", "vietnamese": "Vận đơn", "vietnamese_example": "Thuyền trưởng đã ký tên vào vận đơn." },
    "LETTER OF CREDIT": { "definition": "A letter issued by a bank to another bank to serve as a guarantee for payments.", "pos": "noun", "pron": "/ˌlet.ər əv ˈkred.ɪt/", "example": "We require a letter of credit for international trades.", "vietnamese": "Tín dụng thư", "vietnamese_example": "Chúng tôi yêu cầu tín dụng thư cho các giao dịch quốc tế." },
    "CONTAINER": { "definition": "A large metal box of standard design used for transporting goods.", "pos": "noun", "pron": "/kənˈteɪ.nər/", "example": "The container was loaded onto the ship.", "vietnamese": "Thùng container", "vietnamese_example": "Thùng container đã được xếp lên tàu." },
    "PALLET": { "definition": "A flat wooden structure that heavy goods are put onto so that they can be moved.", "pos": "noun", "pron": "/ˈpæl.ɪt/", "example": "The boxes are stacked on a pallet.", "vietnamese": "Kệ hàng", "vietnamese_example": "Các hộp được xếp chồng lên một kệ hàng." },
    "DEMURRAGE": { "definition": "A charge payable to the owner of a chartered ship on failure to load or discharge the ship within the time agreed.", "pos": "noun", "pron": "/dɪˈmɜːr.ɪdʒ/", "example": "We had to pay demurrage because the port was congested.", "vietnamese": "Phí lưu kho", "vietnamese_example": "Chúng tôi phải trả phí lưu kho vì cảng bị tắc nghẽn." },
    "CARRIER": { "definition": "A person or company that undertakes the professional conveyance of goods or people.", "pos": "noun", "pron": "/ˈkær.i.ər/", "example": "The airline is our primary carrier.", "vietnamese": "Hãng vận chuyển", "vietnamese_example": "Hãng hàng không là hãng vận chuyển chính của chúng tôi." },
    "SHIPPING": { "definition": "The transport of goods by sea or some other means.", "pos": "noun", "pron": "/ˈʃɪp.ɪŋ/", "example": "The shipping cost is calculated by weight.", "vietnamese": "Giao hàng", "vietnamese_example": "Chi phí giao hàng được tính theo trọng lượng." },
    "DELIVERY": { "definition": "The carrying and turning over of letters, goods, or services.", "pos": "noun", "pron": "/dɪˈlɪv.ər.i/", "example": "We guarantee fast delivery.", "vietnamese": "Giao hàng", "vietnamese_example": "Chúng tôi đảm bảo giao hàng nhanh." },
    "ROUTING": { "definition": "The process of selecting a path for traffic or transport.", "pos": "noun", "pron": "/ˈruː.tɪŋ/", "example": "The routing of the delivery truck changed due to traffic.", "vietnamese": "Lộ trình", "vietnamese_example": "Lộ trình của xe tải giao hàng thay đổi do tắc đường." },
    "TRACKING": { "definition": "The monitoring of the progress of an item through a network.", "pos": "noun", "pron": "/ˈtræk.ɪŋ/", "example": "You can use the tracking number to locate your package.", "vietnamese": "Theo dõi", "vietnamese_example": "Bạn có thể sử dụng mã theo dõi để định vị gói hàng của mình." },
    "FREIGHT FORWARDER": { "definition": "A company that organizes shipments for individuals or corporations.", "pos": "noun", "pron": "/freɪt ˈfɔːr.wər.dər/", "example": "The freight forwarder consolidated our shipments.", "vietnamese": "Nhà xuất khẩu hàng hóa", "vietnamese_example": "Nhà xuất khẩu hàng hóa đã gom các lô hàng của chúng tôi." },
    "THIRD-PARTY LOGISTICS": { "definition": "The use of third-party businesses to outsource elements of distribution.", "pos": "noun", "pron": "/θɜːrd ˈpɑːr.ti ləˈdʒɪs.tɪks/", "example": "Many companies use third-party logistics to reduce costs.", "vietnamese": "Dịch vụ logistics của bên thứ ba", "vietnamese_example": "Nhiều công ty sử dụng dịch vụ logistics của bên thứ ba để giảm chi phí." },
    "LAST MILE": { "definition": "The final stage of a product's journey to the end user.", "pos": "noun", "pron": "/læst maɪl/", "example": "The last mile is often the most expensive part of delivery.", "vietnamese": "Cận cảng", "vietnamese_example": "Khâu cận cảng thường là phần đắt đỏ nhất của việc giao hàng." }
};

/**
 * @type {Object.<string, string>}
 */
const icons = {
    logistics: '<svg class="topic-icon" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" stroke-width="1.5"><path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>',
    business: '<svg class="topic-icon" viewBox="0 0 24 24" fill="none" stroke="var(--neon-magenta)" stroke-width="1.5"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    environment: '<svg class="topic-icon" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" stroke-width="1.5"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
};

/**
 * @typedef {Object} Topic
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {keyof typeof icons} iconId
 * @property {string[]} words
 */

/**
 * @type {Topic[]}
 */
const topicsData = [
    {
        "id": "logistics",
        "title": "Logistics",
        "description": "C1 Logistics & Supply Chain",
        "iconId": "logistics",
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
        "title": "Business",
        "description": "C1 Business & Finance Terms",
        "iconId": "business",
        "words": ["AMORTIZATION", "COLLATERAL", "DIVERSIFICATION", "LIQUIDITY", "MERGER"]
    },
    {
        "id": "environment",
        "title": "Environment",
        "description": "C1 Nature & Ecology Terms",
        "iconId": "environment",
        "words": ["BIODEGRADABLE", "ECOSYSTEM", "RENEWABLE", "SUSTAINABILITY", "CONSERVATION"]
    }
];