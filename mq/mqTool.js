const config = require('../config/config').activemq;
const stompit = require('stompit');

module.exports = {
    sendMsg: (dest, msg) => {
        return new Promise((reject, resolve) => {
            stompit.connect(config.activemq, function (err, client) {
                if (err) {
                    reject(err)
                }
                const frame = client.send(dest);
                frame.write(msg);
                frame.end();
                resolve(true)
            })
        })
    },
    receiveMsg: (dest) => {
        return new Promise((reject, resolve) => {
            stompit.connect(config.activemq, function (error, client) {
                if (error) {
                    reject(err);
                }
                client.subscribe(dest, function (error, message) {
                    if (error) {
                        reject(err);
                    }
                    message.readString('utf-8', function (error, body) {
                        if (error) {
                            reject(err);
                        }
                        resolve(body)
                        client.ack(message);//确认收到消息
                        client.disconnect();
                    });
                })
            })

        })
    }
}