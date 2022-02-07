import { PreviewType } from "./model";

export const htmlHead = `
<head>
	<title>Style dictionary preview</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet">
	  <style>
html,body,body * {
	margin:0;
	padding:0;
	box-sizing: border-box;
}
body {
	background: whitesmoke;
	font: 14px 'Fira Code',monospace;
}
main {
	margin:1em auto;
	width: 100%;
	max-width: 1400px;
}
</style>
<style>
.tokens {
	display: grid;
	grid-template-columns: repeat(4, minmax(min-content, 1fr));
	grid-template-rows: max-content minmax(80px, max-content);
	grid-auto-rows: minmax(80px, max-content);
	grid-gap: 8px;
}

.token__name,
.token__value,
.token__preview {
	padding: 8px;
	background: white;
	border-color: #E5E5E5;
	border-style: solid;
	display: flex;
	align-items: center;
}
.token__name {
	white-space: nowrap;
	border-width: 1px 0 1px 1px;
	border-radius: 8px 0 0 8px;
}

.token__value {
	border-width: 1px 0;
	font-size: 12px;
}
.token__preview {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius:  0 8px 8px 0;
	border-width: 1px 1px 1px 0;
}
</style>
<style>
.token-card{
    display: grid;
    grid-template: "name name" min-content
    "preview preview" minmax(100px, 1fr)
    "value value" min-content;
    grid-gap: 8px;
    background: white;;
    padding:8px;
    border-radius: 5px;
    border:1px dashed lightgray;
}
.token-card__name{
    grid-area: name;
}
.token-card__value{
    grid-area: value;
    justify-self: end;
}
.token-card__preview{
    grid-area: preview;
    display: flex;
    justify-content: center;
    align-items: center;
		background: white;
	 	border:1px dashed lightgray;
	 	border-width: 1px 0;
}
</style>
<style>
.preview {
	width: auto;
	display: block;
	font-family: serif;
}

.preview--${PreviewType.Size} {
	min-width: 0;
	aspect-ratio: 1;
	background: pink;
	min-height:0;
}

.preview--${PreviewType.Color}{
	width: 40px;
	height: 40px;
	border-radius: 100%;
}
.preview--${PreviewType.Color}:hover {
	outline: 1px solid deeppink;
}
.preview--${PreviewType.BorderColor},
.preview--${PreviewType.BorderStyle},
.preview--${PreviewType.BorderWidth},
.preview--${PreviewType.BorderRadius}{
	width: 80px;
	height: 40px;
	border-color: gray;
	border-style: solid;
	border-radius: 0;
	border-width: 2px;
}
.preview--${PreviewType.Border}{
	width: 80px;
	height: 40px;
</style>
</head>`
	.replace("\n", "")
	.replace("\t", "");

export const tokenListHeader = `
<dt style="text-align: center;padding: 0 12px"><strong>Token name</strong></dt>
<dd style="text-align: center;padding: 0 12px"><strong>Token preview</strong></dd>
<dd style="text-align: center;padding: 0 12px"><strong>Token value</strong></dd>
`;
