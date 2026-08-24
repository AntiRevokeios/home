// ========================================
// DATA.JS - DNS ESIGN CATALOG
// ========================================

// DNS profile để tải riêng
const dnsProfiles = [
    {
        id: "dns-main",
        name: "Download DNS Profile",
        desc: "Download DNS Profile Anti Revoke",
        tag: "Khuyến nghị",
        download: "https://github.com/AntiRevokeios/AntiRevoke/raw/refs/heads/main/AntiRevoke.mobileconfig"
    },
];

const ICON = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aKNiZwd-azI8xKrAS4FTaSjNuShYsGUNU-yE_SQO-Q&s=10";

const items = [
    // ── HSBC Bank ──────────────────────────
    {
        id: "esign-hsbc",
        name: "eSign HSBC Bank",
        updated: "2026-08-24",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/6.2.0",
        certName: "HSBC Bank",
        cert: "https://example.com/cert/hsbc.p12"
    },

    // ── Central Power ──────────────────────
    {
        id: "esign-centralpower",
        name: "eSign Central Power",
        updated: "2026-08-20",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/6.1.0",
        certName: "Central Power",
        cert: "https://example.com/cert/centralpower.p12"
    },
    {
        id: "esign-centralpower-v1",
        name: "eSign Central Power V1",
        updated: "2026-08-18",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/6.1.0",
        certName: "Central Power",
        cert: "https://example.com/cert/centralpower-v1.p12"
    },

    // ── Viet Nam Rubber ────────────────────
    {
        id: "esign-vnrubber",
        name: "eSign Viet Nam Rubber",
        updated: "2026-08-15",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/6.0.0",
        certName: "Viet Nam Rubber",
        cert: "https://example.com/cert/vnrubber.p12"
    },

    // ── Jiangsu Simcere ────────────────────
    {
        id: "esign-simcere",
        name: "eSign Jiangsu Simcere",
        updated: "2026-08-10",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.9.1",
        certName: "Jiangsu Simcere",
        cert: "https://example.com/cert/simcere.p12"
    },
    {
        id: "esign-simcere-v1",
        name: "eSign Jiangsu Simcere V1",
        updated: "2026-08-08",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.9.1",
        certName: "Jiangsu Simcere",
        cert: "https://example.com/cert/simcere-v1.p12"
    },

    // ── Moving Increasingly ────────────────
    {
        id: "esign-moving",
        name: "eSign Moving Increasingly",
        updated: "2026-08-05",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.8.0",
        certName: "Moving Increasingly",
        cert: "https://example.com/cert/moving.p12"
    },
    {
        id: "esign-moving-v1",
        name: "eSign Moving Increasingly V1",
        updated: "2026-08-03",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.8.0",
        certName: "Moving Increasingly",
        cert: "https://example.com/cert/moving-v1.p12"
    },

    // ── China Telecom ──────────────────────
    {
        id: "esign-chinatelecom",
        name: "eSign China Telecom",
        updated: "2026-07-28",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.7.0",
        certName: "China Telecom",
        cert: "https://example.com/cert/chinatelecom.p12"
    },
    {
        id: "esign-chinatelecom-v1",
        name: "eSign China Telecom V1",
        updated: "2026-07-25",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.7.0",
        certName: "China Telecom",
        cert: "https://example.com/cert/chinatelecom-v1.p12"
    },

    // ── Qingdao Rural ──────────────────────
    {
        id: "esign-qingdao",
        name: "eSign Qingdao Rural",
        updated: "2026-07-20",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.6.0",
        certName: "Qingdao Rural",
        cert: "https://example.com/cert/qingdao.p12"
    },

    // ── Aramco ─────────────────────────────
    {
        id: "esign-aramco",
        name: "eSign Aramco",
        updated: "2026-07-15",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.5.0",
        certName: "Aramco",
        cert: "https://example.com/cert/aramco.p12"
    },

    // ── Commission Elections ───────────────
    {
        id: "esign-commission",
        name: "eSign Commission Elections",
        updated: "2026-07-10",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.5.0",
        certName: "Commission Elections",
        cert: "https://example.com/cert/commission.p12"
    },

    // ── National Oilwell ───────────────────
    {
        id: "esign-nationaloilwell",
        name: "eSign National Oilwell",
        updated: "2026-07-05",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.5.0",
        certName: "National Oilwell",
        cert: "https://example.com/cert/nationaloilwell.p12"
    },

    // ── BOC ────────────────────────────────
    {
        id: "esign-boc",
        name: "eSign BOC",
        updated: "2026-07-01",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.4.0",
        certName: "BOC",
        cert: "https://example.com/cert/boc.p12"
    },
    {
        id: "esign-boc-v1",
        name: "eSign BOC V1",
        updated: "2026-06-28",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.4.0",
        certName: "BOC",
        cert: "https://example.com/cert/boc-v1.p12"
    },
    {
        id: "esign-boc-v2",
        name: "eSign BOC V2",
        updated: "2026-06-25",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.4.0",
        certName: "BOC",
        cert: "https://example.com/cert/boc-v2.p12"
    },
    {
        id: "esign-boc-v3",
        name: "eSign BOC V3",
        updated: "2026-06-20",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.4.0",
        certName: "BOC",
        cert: "https://example.com/cert/boc-v3.p12"
    },

    // ── PowerChina ─────────────────────────
    {
        id: "esign-powerchina",
        name: "eSign PowerChina",
        updated: "2026-06-15",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.3.0",
        certName: "PowerChina",
        cert: "https://example.com/cert/powerchina.p12"
    },
    {
        id: "esign-powerchina-v1",
        name: "eSign PowerChina V1",
        updated: "2026-06-12",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.3.0",
        certName: "PowerChina",
        cert: "https://example.com/cert/powerchina-v1.p12"
    },
    {
        id: "esign-powerchina-v2",
        name: "eSign PowerChina V2",
        updated: "2026-06-10",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.3.0",
        certName: "PowerChina",
        cert: "https://example.com/cert/powerchina-v2.p12"
    },
    {
        id: "esign-powerchina-v3",
        name: "eSign PowerChina V3",
        updated: "2026-06-08",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.3.0",
        certName: "PowerChina",
        cert: "https://example.com/cert/powerchina-v3.p12"
    },
    {
        id: "esign-powerchina-v4",
        name: "eSign PowerChina V4",
        updated: "2026-06-05",
        type: "ios",
        icon: ICON,
        download: "https://esign.yyyue.xyz/dl/5.3.0",
        certName: "PowerChina",
        cert: "https://example.com/cert/powerchina-v4.p12"
    },
];
