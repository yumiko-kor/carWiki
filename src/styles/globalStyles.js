// 전체 스타일 설정용
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
	${reset}


* {
	box-sizing: border-box;
}
html,
body {
	margin: 0;
	padding: 0;
	font-size: 16px;
	min-width:1080px;
}
body {
	-webkit-tap-highlight-color: transparent;
	-webkit-text-size-adjust: none;
	color: #2c2c2c;
	font-weight: 400;
	font-family: 'Pretendard', sans-serif;
}
body,
dl,
dt,
dd,
ul,
ol,
li h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
input,
textarea,
select,
button,
table,
th,
td,
ul,
div,
p,
pre,
blockquote {
	margin: 0;
	padding: 0;
	font-family: 'Pretendard', sans-serif;
	-webkit-tap-highlight-color: transparent;
}
ul,
ol {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
address,
em,
i {
	font-style: normal;
}
fieldset,
img {
	border: 0;
}

/* form요소 */
button,
input,
textarea,
select {
	background: transparent;
	border: 0;
	outline: none;
	font-family: inherit;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border-radius: 0;
	-webkit-tap-highlight-color: transparent;
	vertical-align: middle;
}
button,
select {
	cursor: pointer;
}
/* 링크 */
a {
	color: inherit;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;
	display: inline-block;
	text-align: center;
}
a:hover {
	cursor: pointer;
}

/* 기타 */
table {
	table-layout: fixed;
	border-spacing: 0;
	width: 100%;
	border-collapse: collapse;
}
table caption {
	overflow: hidden;
	width: 0;
	height: 0;
	font-size: 0;
	line-height: 0;
}
iframe {
	overflow: hidden;
	margin: 0;
	padding: 0;
	vertical-align: top;
	border: 0;
}

/* placeholder */
::-webkit-input-placeholder,
:-moz-placeholder,
::-moz-placeholder,
::placeholder {
	color: #818181;
	font-weight: 300;
}

`;

export default globalStyles;