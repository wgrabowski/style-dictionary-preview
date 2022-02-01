import { Formatter } from "style-dictionary/types/Format";
import { htmlHead, tokenListHeader } from "./templates";
import { PreviewConfig, PreviewType } from "./model";
import { TransformedToken } from "style-dictionary";

// export function previewFormatter(config: PreviewConfig): Formatter {
// 	return function({ dictionary }): string {
// 		let html = `<!doctype html><html>${htmlHead}<body>`;
// 		html += `<main><dl class='tokens'>${tokenListHeader}`;
// 		html += dictionary.allTokens.map(token => {
// 			const previewType = getPreviewType(token, config);
// 			return `<dt class='token__name' id='${token.name}'><span>${token.name}</span></dt>
// <dd class='token__value'>${token.value}</dd><dd class='token__preview'>
// 				${getPreviewHtml(previewType, getPreviewStyle(token, previewType), getPreviewContent(previewType))}
// 			</dd>`;
// 		}).join('');
// 		html += '</dl></main></body></html>';
// 		return html;
// 	};
// }
export function previewFormatter(config: PreviewConfig): Formatter {
	return function ({ dictionary }): string {
		let html = `<!doctype html><html>${htmlHead}<body>`;
		html += `<main><div class='tokens'>${tokenListHeader}`;
		html += dictionary.allTokens
			.map((token) => {
				const previewType = getPreviewType(token, config);
				return `<div class='token__name' id='${token.name}'><span>${
					token.name
				}</span></div>
							<div class='token__value'><code contenteditable>${token.value}</code></div>
							<div class='token__preview'>
								<div>
									${getPreviewHtml(
										previewType,
										getPreviewStyle(token, previewType),
										getPreviewContent(previewType)
									)}
								</div>
							</div>
							`;
			})
			.join("");
		html += "</div></main></body></html>";
		return html;
	};
}

function getPreviewHtml(
	previewType: PreviewType,
	style: string,
	content: string = ""
): string {
	return `<div class='preview preview--${previewType}' style='${style}'>${content}</div>`;
}

function getPreviewType(
	token: TransformedToken,
	config: PreviewConfig
): PreviewType {
	return token.attributes?.category
		? config.previewTypes[token.attributes?.category] || PreviewType.Unknown
		: PreviewType.Unknown;
}

function getPreviewContent(previewType: PreviewType): string {
	switch (previewType) {
		case PreviewType.Font:
		case PreviewType.FontSize:
		case PreviewType.FontStyle:
		case PreviewType.FontWeight:
			return "Aa 0-9";
		case PreviewType.LineHeight:
			return "First line of text<br>Second line of text";
		case PreviewType.Unknown:
			return "<code>Not configured</code>";
		default:
			return "";
	}
}

function getPreviewStyle(
	token: TransformedToken,
	previewType: PreviewType
): string {
	const propertyMap: Record<PreviewType, string> = {
		[PreviewType.FontSize]: `font-size`,
		[PreviewType.LineHeight]: `line-height`,
		[PreviewType.Font]: `font`,
		[PreviewType.FontWeight]: `font-weight`,
		[PreviewType.FontStyle]: `font-style`,
		[PreviewType.Color]: `background-color`,
		[PreviewType.Size]: `width`,
		[PreviewType.BorderWidth]: `border-width`,
		[PreviewType.BorderColor]: `border-color`,
		[PreviewType.BorderRadius]: `border-radius`,
		[PreviewType.Border]: `border`,
		[PreviewType.BorderStyle]: `border-style`,
		[PreviewType.Unknown]: `invalid`,
	};

	return `${propertyMap[previewType]}: ${token.value}`;
}
