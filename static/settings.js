const keys = {
    KFJRN: "kFJrN",
    BMSQW: "BmsqW",
    HYQJJ: "HyQJJ",
    HYXRDW: "HyxrDw",
    EEUDGE: "eeUdGe",
    LYJSJYJ: "LYJsJyJ",
    LVWMJQG: "LvWmjQg",
    UMCTV: "umCTV",
    KPI_AAA: "aaA",
    KPI_BBB: "bbB",
}
const groups = [{
        key: "1",
        name: "销售分析",
        tabs: [{
                key: "1-1",
                name: "仪表盘",
                header: keys.KPI_AAA,
                imageUrl: "images/pie2.png",
                lines: [{
                    key: "1-1-1",
                    charts: [keys.LVWMJQG, keys.UMCTV],
                }, {
                    key: "1-1-2",
                    charts: [keys.UMCTV],
                }],
            },
            {
                key: "1-2",
                name: "同环比",
                // header: keys.KPI_BBB,
                imageUrl: "images/line.png",
                lines: [{
                    key: "1-2-1",
                    charts: [keys.BMSQW, keys.HYQJJ],
                }, {
                    key: "1-2-2",
                    charts: [keys.HYQJJ],
                }],
            },
            {
                key: "1-3",
                name: "排名",
                imageUrl: "images/bar.png",
                lines: [{
                    key: "1-3-1",
                    charts: [keys.HYXRDW],
                }],
            }, {
                key: "1-4",
                name: "完成率",
                imageUrl: "images/scatter.png",
                lines: [{
                    key: "1-4-1",
                    charts: [keys.EEUDGE, keys.LYJSJYJ],
                }, {
                    key: "1-4-2",
                    charts: [keys.LYJSJYJ],
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
                imageUrl: "images/pie.png",
                lines: [{
                    key: "2-1-1",
                    charts: [keys.KFJRN],
                }],
            },
            {
                key: "2-2",
                name: "功能待扩充",
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
    key: "区域市场名称",
    name: "市场",
    type: "btn",
    class: "both",
    options: [{
            key: "北京市场",
            name: "北京市场"
        },
        {
            key: "东北市场",
            name: "东北市场"
        },
        {
            key: "华北市场",
            name: "华北市场"
        },
        {
            key: "华南市场",
            name: "华南市场"
        },
        {
            key: "华东市场",
            name: "华东市场"
        },
        {
            key: "华中市场",
            name: "华中市场"
        },
        {
            key: "天津市场",
            name: "天津市场"
        },
        {
            key: "全国合计",
            name: "全国合计"
        },
    ]
}, {
    key: "营业日期",
    name: "营业日期",
    type: "time",
    class: "both",
}];

window.settings = {
    keys,
    groups,
    filters,
}