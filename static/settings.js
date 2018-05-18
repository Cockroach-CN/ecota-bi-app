const keys = {
    DATA_KEY_1: "data_key_1",
    DATA_KEY_2: "data_key_2",
    DATA_KEY_3: "data_key_3",
    DATA_KEY_4: "data_key_4",
    DATA_KEY_5: "data_key_5",
    DATA_KEY_6: "data_key_6",
}

window.settings = {
    keys,
    groups: [{
            key: "1",
            name: "销售分析",
            tabs: [{
                    key: "1-1",
                    name: "仪表盘",
                    header: "表头-1",
                    imageUrl: "images/pie2.png",
                    charts: [{
                        key: "1-1-1",
                        keys: [keys.DATA_KEY_1, keys.DATA_KEY_3, keys.DATA_KEY_6],
                    }, {
                        key: "1-1-2",
                        keys: [keys.DATA_KEY_3],
                    }, {
                        key: "1-1-3",
                        keys: [keys.DATA_KEY_6],
                    }, {
                        key: "1-1-4",
                        keys: [keys.DATA_KEY_5],
                    }],
                },
                {
                    key: "1-2",
                    name: "同环比",
                    header: "表头-2",
                    imageUrl: "images/line.png",
                    charts: [{
                        key: "1-2-1",
                        keys: [keys.DATA_KEY_3],
                    }, {
                        key: "1-2-2",
                        keys: [keys.DATA_KEY_4, keys.DATA_KEY_3],
                    }],
                },
                {
                    key: "1-3",
                    name: "排名",
                    header: "表头-3",
                    imageUrl: "images/bar.png",
                    charts: [{
                        key: "1-3-1",
                        keys: [keys.DATA_KEY_3, keys.DATA_KEY_1],
                    }, {
                        key: "1-3-2",
                        keys: [keys.DATA_KEY_6],
                    }],
                }, {
                    key: "1-4",
                    name: "完成率",
                    header: "表头-4",
                    imageUrl: "images/scatter.png",
                    charts: [{
                        key: "1-4-1",
                        keys: [keys.DATA_KEY_6, keys.DATA_KEY_3],
                    }, {
                        key: "1-4-2",
                        keys: [keys.DATA_KEY_2],
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
                    charts: [{
                        key: "2-1-1",
                        keys: [keys.DATA_KEY_2, keys.DATA_KEY_1],
                    }],
                },
                {
                    key: "2-2",
                    name: "功能待扩充",
                    header: "表头-6",
                    imageUrl: "images/pie.png",
                    charts: [{
                        key: "2-2-2",
                        keys: [keys.DATA_KEY_6],
                    }],
                },
            ]
        }
    ],
}