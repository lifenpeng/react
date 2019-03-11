import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* project id 1067693 */
  src: url('//at.alicdn.com/t/font_1067693_jse8o8tcwr.eot');
  src: url('//at.alicdn.com/t/font_1067693_jse8o8tcwr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1067693_jse8o8tcwr.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1067693_jse8o8tcwr.woff') format('woff'),
  url('//at.alicdn.com/t/font_1067693_jse8o8tcwr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1067693_jse8o8tcwr.svg#iconfont') format('svg');
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

.iconyumaobi:before {
content: "\e703";
}

.iconfangdajing:before {
content: "\e615";
}
`


