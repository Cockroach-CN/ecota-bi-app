const keys = {
    /* KFJRN: "kFJrN",
     BMSQW: "BmsqW",
     HYQJJ: "HyQJJ",
     HYXRDW: "HyxrDw",
     EEUDGE: "eeUdGe",
     LYJSJYJ: "LYJsJyJ",
     LVWMJQG: "LvWmjQg",
     UMCTV: "umCTV",
     ZCVJXV: "ZCVjxV",
     HYpwwB: "HYpwwB",
     JWWAYJ: "JWwayJ",
     QUVTVG: "QUVTVG",
     JWTSEW: "jWTseW"*/

    ASPMZ: "aspMz",
    ZHPKAX: "zhPKAx",
    XKYSWDV: "xkySwdv",
    WMEQTA: "WmeqTA",
    EUKVCCR: "EUkVcCR",
    LQXYY: "LQxYy",
    XETJJSE: "xEtJjse",
    JPSVJP: "JPSVjp",
    ZFMU: "ZFMu",
    JMDEPUQ: "JmDePuq",
    BMVAVVU: "BMvAvVu",
    MHJVYX: "MhJvYx"

}
const groups = [{
    key: "1",
    name: "销售分析",
    tabs: [{
        key: "1-1",
        name: "仪表盘",
        //header: keys.JWWAYJ,//本地
        header: keys.MHJVYX,
        imageUrl: "images/pie2.png",
        lines: [{
            key: "1-1-1",
            //charts: [keys.LVWMJQG, keys.UMCTV],//本地
            charts: [keys.ASPMZ],
        }, {
            key: "1-1-2",
            // charts: [keys.UMCTV],//本地
            charts: [keys.ZHPKAX],
        }],
    },
    {
        key: "1-2",
        name: "同环比",
        // header: keys.KPI_BBB,
        imageUrl: "images/line.png",
        lines: [{
            key: "1-2-1",
            //charts: [keys.BMSQW, keys.HYQJJ],//本地
            charts: [keys.XKYSWDV, keys.WMEQTA],
        }, {
            key: "1-2-2",
            //charts: [keys.HYQJJ],//本地
            charts: [keys.WMEQTA],
        }],
    },
    {
        key: "1-3",
        name: "排名",
        imageUrl: "images/bar.png",
        lines: [{
            key: "1-3-1",
            // charts: [keys.HYXRDW, keys.JWTSEW],//本地
            charts: [keys.EUKVCCR, keys.LQXYY],
        }],
    }, {
        key: "1-4",
        name: "完成率",
        imageUrl: "images/scatter.png",
        lines: [{
            key: "1-4-1",
            //charts: [keys.EEUDGE],//本地
            charts: [keys.XETJJSE],
        }, {
            key: "1-4-2",
            // charts: [keys.LYJSJYJ, keys.QUVTVG],//本地
            charts: [keys.JPSVJP, keys.ZFMU],
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
            // charts: [keys.KFJRN, keys.ZCVJXV],//本地
            charts: [keys.JMDEPUQ, keys.BMVAVVU],
        }],
    },
    {
        key: "2-2",
        name: "功能待扩充",
        imageUrl: "images/pie.png",
        lines: [{
            key: "2-2-2",
            charts: [keys.BMVAVVU],
        }],
    },
    ]
}
];

//list 是列表页面显示    info是详情页面显示   both 是这两个页面都显示
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