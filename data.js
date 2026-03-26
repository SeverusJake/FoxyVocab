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
    "CONSERVATION": { "definition": "Prevention of wasteful use of resources.", "pos": "noun", "pron": "/ˌkɒn.səˈveɪ.ʃən/", "example": "Wildlife conservation.", "vietnamese": "Sự bảo tồn", "vietnamese_example": "Bảo tồn động vật hoang dã." }
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
        "words": ["CONSIGNMENT", "PROCUREMENT", "FULFILLMENT", "LEAD TIME", "BACKORDER"]
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