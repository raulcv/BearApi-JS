const env = process.env.NODE_ENV; // 'dev' or 'test'
// mongodb+srv://raulcvadmin:<password>@raulcvdb.bwa3z.mongodb.net/bdname?retryWrites=true&w=majority

const dev = {
    app: {
        port: process.env.APP_PORT || 3000
    },
    db: {
        mongo: process.env.MongoDB_Conection_String
    }
};

const test = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'test'
    }
};

const serverConfig = {
    dev,
    test
};
module.exports = serverConfig[env];
