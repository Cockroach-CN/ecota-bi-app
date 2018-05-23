const qsocks = require("qsocks");

var config = {
    host: 'sense-demo.qlik.com',
    isSecure: true,
    ca: "------------------------------------------",
    // key: "---------------------------",
    // cert: "++++++++++++++++++++++++++",
};

//Connect to a server using the config object.
//Connecting without a config object automatically assumes a instance of Qlik Sense Desktop

//When connected we are returned with a handle that represents the Global class.
try {
    qsocks.Connect(config).then(function (global) {

        //We can now interact with the global class, for example fetch the document list.
        //qsocks mimics the Engine API, refer to the Engine API documentation for available methods.
        global.getDocList().then(function (docList) {
            docList.forEach(function (doc) {

            });

        });

    });
} catch (error) {
    console.log(error);
}