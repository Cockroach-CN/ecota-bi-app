const keys = {
    DATA_KEY_1: "data_key_1",
    DATA_KEY_2: "data_key_2",
    DATA_KEY_3: "data_key_3",
    DATA_KEY_4: "data_key_4",
    DATA_KEY_5: "data_key_5",
    DATA_KEY_6: "data_key_6",
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
                    charts: [keys.DATA_KEY_1, keys.DATA_KEY_3, keys.DATA_KEY_6],
                }, {
                    key: "1-1-2",
                    charts: [keys.DATA_KEY_3],
                }, {
                    key: "1-1-3",
                    charts: [keys.DATA_KEY_6],
                }, {
                    key: "1-1-4",
                    charts: [keys.DATA_KEY_5],
                }],
            },
            {
                key: "1-2",
                name: "同环比",
                header: "表头-2",
                imageUrl: "images/line.png",
                lines: [{
                    key: "1-2-1",
                    charts: [keys.DATA_KEY_3],
                }, {
                    key: "1-2-2",
                    charts: [keys.DATA_KEY_4, keys.DATA_KEY_3],
                }],
            },
            {
                key: "1-3",
                name: "排名",
                header: "表头-3",
                imageUrl: "images/bar.png",
                lines: [{
                    key: "1-3-1",
                    kechartsys: [keys.DATA_KEY_3, keys.DATA_KEY_1],
                }, {
                    key: "1-3-2",
                    charts: [keys.DATA_KEY_6],
                }],
            }, {
                key: "1-4",
                name: "完成率",
                header: "表头-4",
                imageUrl: "images/scatter.png",
                lines: [{
                    key: "1-4-1",
                    charts: [keys.DATA_KEY_6, keys.DATA_KEY_3],
                }, {
                    key: "1-4-2",
                    charts: [keys.DATA_KEY_2],
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
                    charts: [keys.DATA_KEY_2, keys.DATA_KEY_1],
                }],
            },
            {
                key: "2-2",
                name: "功能待扩充",
                header: "表头-6",
                imageUrl: "images/pie.png",
                lines: [{
                    key: "2-2-2",
                    charts: [keys.DATA_KEY_6],
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
        class: "list",
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
        key: "time1",
        name: "时间",
        type: "time",
        class: "list",
    },
    {
        key: "time2",
        name: "时间",
        type: "time",
        class: "info",
    },
];

window.settings = {
    keys,
    groups,
    filters,
}