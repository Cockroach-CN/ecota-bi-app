const keys = {
    KFJRN: "kFJrN",
    BMSQW: "BmsqW",
    HYQJJ: "HyQJJ",
    HYXRDW: "HyxrDw",
    EEUDGE: "eeUdGe",
    LYJSJYJ: "LYJsJyJ",
    LVWMJQG: "LvWmjQg",
    UMCTV: "umCTV"
}
const groups = [{
    key: "1",
    name: "销售分析",
    tabs: [{
        key: "1-1",
        name: "仪表盘",
        header: "表头-1",
        imageUrl: "images/pie2.png",
        lines: [{
            key: "1-1-1",
            charts: [keys.BMSQW, keys.UMCTV],
        }, {
            key: "1-1-2",
            charts: [keys.HYQJJ],
        }, {
            key: "1-1-3",
            charts: [keys.KFJRN],
        }, {
            key: "1-1-4",
            charts: [keys.BMSQW],
        }],
    },
    {
        key: "1-2",
        name: "同环比",
        header: "表头-2",
        imageUrl: "images/line.png",
        lines: [{
            key: "1-2-1",
            charts: [keys.KFJRN],
        }, {
            key: "1-2-2",
            charts: [keys.HYXRDW, keys.KFJRN],
        }],
    },
    {
        key: "1-3",
        name: "排名",
        header: "表头-3",
        imageUrl: "images/bar.png",
        lines: [{
            key: "1-3-1",
            charts: [keys.UMCTV, keys.KFJRN],
        }, {
            key: "1-3-2",
            charts: [keys.HYQJJ],
        }],
    }, {
        key: "1-4",
        name: "完成率",
        header: "表头-4",
        imageUrl: "images/scatter.png",
        lines: [{
            key: "1-4-1",
            charts: [keys.HYQJJ, keys.HYXRDW],
        }, {
            key: "1-4-2",
            charts: [keys.EEUDGE],
        }],
    }
    ]
},
{
    key: "2",
    name: "会员分析",
    tabs: [{
        key: "2-1",
        name: "会员",
        header: "表头-5",
        imageUrl: "images/pie.png",
        lines: [{
            key: "2-1-1",
            charts: [keys.BMSQW, keys.EEUDGE],
        }],
    },
    {
        key: "2-2",
        name: "功能待扩充",
        header: "表头-6",
        imageUrl: "images/pie.png",
        lines: [{
            key: "2-2-2",
            charts: [keys.HYXRDW],
        }],
    },
    ]
}
];


const filters = [{
    key: "brand",
    name: "品牌",
    type: "btn",
    class: "list",
    options: [{
        key: "xiabu",
        name: "呷哺"
    },
    {
        key: "zouzou",
        name: "凑凑"
    },
    ]
}, {
    key: "market",
    name: "市场",
    type: "btn",
    class: "both",
    options: [{
        key: "A",
        name: "A市场"
    },
    {
        key: "B",
        name: "B市场"
    },
    {
        key: "C",
        name: "C市场"
    },
    {
        key: "D",
        name: "D市场"
    },
    {
        key: "E",
        name: "E市场"
    },
    {
        key: "F",
        name: "F市场"
    },
    ],
}, {
    key: "time",
    name: "时间",
    type: "time",
    class: "both",
}];

window.settings = {
    keys,
    groups,
    filters,
}