# style-dictionary-preview

Generate quick preview of design tokens defined with [style-dictionary](https://github.com/amzn/style-dictionary).

## What does it do?

This tool parses your design token JSON files and generates HTML with token overview.

Preview consists of **token name** (in kebab-case format), **token value** and **token preview**.

### Token preview

Token preview is a bit of HTML with token value applied to one CSS property, i.e. font size, color etc.

#### Token preview types
*	Color
*	Size
*	Font
*	FontSize
*	FontWeight
*	FontStyle
*	LineHeight
*	BorderWidth
*	BorderStyle
*	BorderColor
*	BorderRadius
*	Border
*	Unknown

## Usage
> No npm package is published for now, to use it locally clone directory, run `npm install && npm run build && npm link`. 

<del>Install with npm `npm install style-dictionary-preview` or use without installation with `npx style-dictionar-preview`.</del>

## Config file

Config file is required with following content:

```json
{
	"tokensDir": "directory/with/tokens",
	"outputDir": "output/directory",
	"previewTypes": {
		"token-category": "PreviewType",
		"another-token-category": "AnotherPreviewType",
		"third-category": "PreviewType"
	}
}

```
### Generating HTML file
`npx style-dictionary-preview --config <configfile>` where `<configfile>` is path to your config file.

It parses JSON files from `tokensDir` and generates `index.html` file in `outputDir` based on `previewTypes` setting.  

### Generating previewStyles from existing tokens
To generate `previewTypes` for each category from existing tokens run `style-dictionary-preview --scan <tokens-directory>`.
It will find categories defined in your token fields, for each category ask you which preview type should be assigned to it and output JSON object that you can use in config file.


# Example
See `example/style-dictionary-preview.json` to see 



