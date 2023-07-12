const CustomAPIError = require('./custom-error');
const { StatusCodes } = require('http-status-codes');

/*
  使用 http-status-codes 套件就可以快速的設定，錯誤訊息要給的狀態碼
  繼承 CustomAPIError 介面做修改，能夠讓後續處理保持一致
  http-status-codes 文件：https://github.com/prettymuchbryce/http-status-codes#readme
*/

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
