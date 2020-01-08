import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => { //Done is making this test Asynchronous which means because it callsback it makes the test work
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function (err, window) {
    const h1 = window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal("!11");//why does changing this not affect the test passing#?
      done();
    window.close();
    });
  });
});
