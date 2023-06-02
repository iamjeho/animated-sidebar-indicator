export const SIDEBAR_NAV_ITEMS = [
    {
        display: "관리자 생성",
        icon: "bx bx-ball",
        to: "/createadmin",
        section: "createadmin",
    },
    {
        display: "스키마 생성",
        icon: "bx bx-star",
        to: "/createschema",
        section: "createschema",
    },
    {
        display: "증명서 양식",
        icon: "bx bx-file",
        to: "/certform",
        section: "certform",
    },
    {
        display: "사용자 연결",
        icon: "bx bxs-user-plus",
        to: "/connectuser",
        section: "connectuser",
    },
    {
        display: "증명서 발급",
        icon: "bx bx-receipt",
        to: "/issuecert",
        section: "issuecert",
    },
];

export const CATEGORY_MAP = SIDEBAR_NAV_ITEMS.reduce(
    (r, v) => ({ ...r, [v.to]: v.display }),
    {}
);
