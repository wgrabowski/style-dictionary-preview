export enum PreviewType {
	Color = "Color",
	Size = "Size",
	Font = "Font",
	FontSize = "FontSize",
	FontWeight = "FontWeight",
	FontStyle = "FontStyle",
	LineHeight = "LineHeight",
	BorderWidth = "BorderWidth",
	BorderStyle = "BorderStyle",
	BorderColor = "BorderColor",
	BorderRadius = "BorderRadius",
	Border = "Border",
	Unknown = "Unknown",
}

export type PreviewConfig = {
	tokensDir: string;
	outputDir: string;
	previewTypes: Record<string, PreviewType>;
};
