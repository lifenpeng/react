import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1552748980444'); /* IE9 */
  src: url('./iconfont.eot?t=1552748980444#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1552748980444') format('woff'),
  url('./iconfont.ttf?t=1552748980444') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1552748980444#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .iconaa:before {
    content: "\e602";
  }
  
  .icon-cool:before {
    content: "\e6e9";
  }
  
  .iconyumaobi:before {
    content: "\e703";
  }
  
  .iconfangdajing:before {
    content: "\e615";
  }
  
  .iconspin:before {
    content: "\e606";
  }
`
