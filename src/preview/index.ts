import * as StyleDictionary from "style-dictionary";
import { cardsFormatter, previewFormatter } from "../formatter";
import { PreviewConfig } from "../formatter/model";
import { stdout } from "process";

export function generate(config: PreviewConfig) {
	const styleDictionary = StyleDictionary.extend({
		source: [`${config.tokensDir}/**/*.json`],
		platforms: {
			sdpPreview: {
				transforms: ["attribute/cti", "name/cti/kebab"],
				buildPath: `${config.outputDir}/`,
				files: [
					{
						destination: "index.html",
						format: "sdp",
					},
				],
			},
		},
	});
	styleDictionary.registerFormat({
		name: "sdp",
		formatter: cardsFormatter(config),
	});
	styleDictionary.buildPlatform("sdpPreview");
}
