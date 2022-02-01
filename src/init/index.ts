import { prompt } from "enquirer";
import { PreviewConfig } from "../formatter/model";
import { writeFileSync } from "fs";
import { stdout } from "process";

interface ConfigPromptAnswers {
	configFile: string;
	tokensDir: string;
	outputDir: string;
}

async function getAnswersFromUser(): Promise<ConfigPromptAnswers> {
	return prompt<ConfigPromptAnswers>([
		{
			name: "configFile",
			message: "Config file name?",
			initial: "style-dictionary-preview.json",
			type: "input",
			required: true,
		},
		{
			name: "tokensDir",
			message: "Path to directory with design tokens?",
			initial: "tokens",
			type: "input",
			required: true,
		},
		{
			name: "outputDir",
			message:
				"Path for directory in which generated HTML file will be placed?",
			initial: "preview",
			type: "input",
			required: true,
		},
	]);
}

export async function createConfig() {
	const { configFile, outputDir, tokensDir } = await getAnswersFromUser();

	const config: PreviewConfig = {
		previewTypes: {},
		tokensDir,
		outputDir: outputDir,
	};

	writeFileSync(configFile, JSON.stringify(config, null, 2), {
		encoding: "utf-8",
	});
	stdout.write(`config file created ${configFile}\n`);
}
