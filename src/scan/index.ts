import { PreviewConfig, PreviewType } from "../formatter/model";
import * as StyleDictionary from "style-dictionary";
import { previewFormatter } from "../formatter";
import { prompt } from "enquirer";
import { stdout } from "process";

export async function scan(tokensDir: string) {
	const categories = getTokenCategories(tokensDir);

	const previewTypes = await prompt(categories.map(categoryToOption));

	stdout.write(
		"Your token categories (use them as previewTypes value in your config file:\n\n"
	);
	stdout.write(JSON.stringify(previewTypes, null, 2));
	stdout.write("\n\n");
}

function getTokenCategories(tokensDir: string) {
	const styleDictionary = StyleDictionary.extend({
		source: [`${tokensDir}/**/*.json`],
		platforms: {
			sdpCategories: {
				transforms: ["attribute/cti"],
			},
		},
	});

	return Object.keys(styleDictionary.exportPlatform("sdpCategories"));
}

function categoryToOption(name: string) {
	return {
		name: name,
		message: `Preview type for ${name}`,
		type: "autocomplete",
		choices: Object.values(PreviewType),
		required: true,
	};
}
