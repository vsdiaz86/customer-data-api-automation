'use strict'
const Helper = codecept_helper;

class CustomHelper extends Helper {
	async clickIfDisplayed(textOrLocator, timeout = 5) {
		const helper = this.helpers['Puppeteer'];
		try {
			await helper.waitForVisible(textOrLocator, timeout);
			await helper.click(textOrLocator);
		} catch (err) {
			if (process.env.DEBUG === 'true') {
				console.log(err);
			}		
		}
	}
}

module.exports = CustomHelper;