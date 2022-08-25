const Bot = require('./modules/bot');
const process = require('process');

require('./modules/date-format');

class Plugin extends Bot {
  constructor () {
    super();
  }
  async run () {
    const now = new Date().Format('M/d h:m:s');
    
    await this.sendMarkdown("🤖 Hello! TreeBot!\n> 启动时间：" + now);

    // test env
    // const $f = await this.uploadFile("env.txt", new Buffer(JSON.stringify(process.env)));
    // await this.sendFile($f);
  }
}

new Plugin().run();
