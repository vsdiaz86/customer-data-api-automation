const { recorder } = require('codeceptjs');
const event = require('codeceptjs').event;

module.exports = () => {
    event.dispatcher.on(event.all.before, () => {
        recorder.startUnlessRunning();
    });
}
