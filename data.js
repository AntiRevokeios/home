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

const RAW = "https://raw.githubusercontent.com/AntiRevokeios/AntiRevoke/main";
const ICON = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aKNiZwd-azI8xKrAS4FTaSjNuShYsGUNU-yE_SQO-Q&s=10";

// Tạo link cài trực tiếp qua itms-services
function certInstallUrl(folder) {
    return `itms-services://?action=download-manifest&url=${RAW}/${folder}/${folder}.plist`;
}

function certZipUrl(folder) {
    return `${RAW}/${folder}/${folder}.zip`;
}

const items = [
    // ── HSBC Bank ──────────────────────────
    {
        id: "esign-hsbc",
        name: "eSign HSBC Bank",
        updated: "2026-08-24",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("HSBC_Bank"),
        certName: "HSBC Bank",
        cert: certZipUrl("HSBC_Bank")
    },

    // ── China Telecom ──────────────────────
    {
        id: "esign-chinatelecom",
        name: "eSign China Telecom",
        updated: "2026-07-28",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("China_Telecom_Corporation_Limited"),
        certName: "China Telecom",
        cert: certZipUrl("China_Telecom_Corporation_Limited")
    },

    // ── Aramco ─────────────────────────────
    {
        id: "esign-aramco",
        name: "eSign Aramco",
        updated: "2026-07-15",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("Aramco_Services_Company"),
        certName: "Aramco",
        cert: certZipUrl("Aramco_Services_Company")
    },

    // ── National Oilwell ───────────────────
    {
        id: "esign-nationaloilwell",
        name: "eSign National Oilwell",
        updated: "2026-07-05",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("National_Oilwell"),
        certName: "National Oilwell",
        cert: certZipUrl("National_Oilwell")
    },

    // ── Commission Elections ───────────────
    {
        id: "esign-commission",
        name: "eSign Commission Elections",
        updated: "2026-07-10",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("Commission_on_Elections"),
        certName: "Commission Elections",
        cert: certZipUrl("Commission_on_Elections")
    },

    // ── HDFC Bank ──────────────────────────
    {
        id: "esign-hdfc",
        name: "eSign HDFC Bank",
        updated: "2026-07-20",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("HDFC_Bank_Limited"),
        certName: "HDFC Bank",
        cert: certZipUrl("HDFC_Bank_Limited")
    },

    // ── Vietnam Airlines ───────────────────
    {
        id: "esign-vietnamairlines",
        name: "eSign Vietnam Airlines",
        updated: "2026-08-01",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("VIETNAM_AIRLINES"),
        certName: "Vietnam Airlines",
        cert: certZipUrl("VIETNAM_AIRLINES")
    },

    // ── GAC Toyota Motor ───────────────────
    {
        id: "esign-gactoyota",
        name: "eSign GAC Toyota Motor",
        updated: "2026-06-28",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("GAC_TOYOTA_MOTOR"),
        certName: "GAC Toyota Motor",
        cert: certZipUrl("GAC_TOYOTA_MOTOR")
    },

    // ── Sunshine Insurance ─────────────────
    {
        id: "esign-sunshine",
        name: "eSign Sunshine Insurance",
        updated: "2026-06-15",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("Sunshine_Insurance"),
        certName: "Sunshine Insurance",
        cert: certZipUrl("Sunshine_Insurance")
    },

    // ── Beijing Esensoft ───────────────────
    {
        id: "esign-esensoft",
        name: "eSign Beijing Esensoft",
        updated: "2026-06-10",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("Beijing_Esensoft"),
        certName: "Beijing Esensoft",
        cert: certZipUrl("Beijing_Esensoft")
    },

    // ── China Academy of Railway Sciences ──
    {
        id: "esign-railway",
        name: "eSign China Railway Sciences",
        updated: "2026-06-05",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("China_Academy_of_Railway_Sciences"),
        certName: "China Railway Sciences",
        cert: certZipUrl("China_Academy_of_Railway_Sciences")
    },

    // ── China Continent Property ───────────
    {
        id: "esign-continentproperty",
        name: "eSign China Continent Property",
        updated: "2026-05-28",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("China_Continent_Property"),
        certName: "China Continent Property",
        cert: certZipUrl("China_Continent_Property")
    },

    // ── DTT Technology ─────────────────────
    {
        id: "esign-dtt",
        name: "eSign DTT Technology",
        updated: "2026-05-20",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("Dtt_Technology"),
        certName: "DTT Technology",
        cert: certZipUrl("Dtt_Technology")
    },

    // ── Forevermark Marketing ──────────────
    {
        id: "esign-forevermark",
        name: "eSign Forevermark Marketing",
        updated: "2026-05-15",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("Forevermark_Marketing"),
        certName: "Forevermark Marketing",
        cert: certZipUrl("Forevermark_Marketing")
    },

    // ── Global Takeoff ─────────────────────
    {
        id: "esign-globaltakeoff",
        name: "eSign Global Takeoff",
        updated: "2026-05-10",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("GLOBAL_TAKEOFF"),
        certName: "Global Takeoff",
        cert: certZipUrl("GLOBAL_TAKEOFF")
    },

    // ── Ministere ──────────────────────────
    {
        id: "esign-ministere",
        name: "eSign Ministere",
        updated: "2026-05-05",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("Ministere"),
        certName: "Ministere",
        cert: certZipUrl("Ministere")
    },

    // ── NREH Estate Information ────────────
    {
        id: "esign-nreh",
        name: "eSign NREH Estate",
        updated: "2026-05-01",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("NREH_ESTATE_INFORMATION"),
        certName: "NREH Estate",
        cert: certZipUrl("NREH_ESTATE_INFORMATION")
    },

    // ── TCL Household Appliance ────────────
    {
        id: "esign-tcl",
        name: "eSign TCL Household Appliance",
        updated: "2026-04-25",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("TCL_household_Appliance"),
        certName: "TCL Household Appliance",
        cert: certZipUrl("TCL_household_Appliance")
    },

    // ── Wuling Power ───────────────────────
    {
        id: "esign-wuling",
        name: "eSign Wuling Power",
        updated: "2026-04-20",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("Wuling_Power"),
        certName: "Wuling Power",
        cert: certZipUrl("Wuling_Power")
    },

    // ── XL Axiata ──────────────────────────
    {
        id: "esign-xlaxiata",
        name: "eSign XL Axiata",
        updated: "2026-04-15",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("XL_AXIATA"),
        certName: "XL Axiata",
        cert: certZipUrl("XL_AXIATA")
    },

    // ── Zhuhaishi ShijiXintong ─────────────
    {
        id: "esign-zhuhaishi",
        name: "eSign Zhuhaishi ShijiXintong",
        updated: "2026-04-10",
        type: "ios",
        icon: ICON,
        download: certInstallUrl("Zhuhaishi_ShijiXintong"),
        certName: "Zhuhaishi ShijiXintong",
        cert: certZipUrl("Zhuhaishi_ShijiXintong")
    },
];
