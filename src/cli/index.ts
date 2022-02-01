import { stderr } from "process";

export interface CliOptions {
	config: string;
	init: boolean;
	scan: string;
}

export function parseOptions(argv: string[]): CliOptions {
	const params = require("minimist")(argv);
	return {
		config: params.config,
		init: params.init,
		scan: params.scan,
	};
}

export function validateParams(options: CliOptions): boolean {
	if (!options.config) {
		return false;
	}

	return true;
}

export function getHelp(): string {
	let help = "style-dictionary-preview [options]\n";
	help += `Options:\n`;
	help += `\t${"--config".padEnd(20)} config file [required]\n`;
	help += `\t${"--tokensDir".padEnd(
		20
	)} directory with design token JSON files [required]\n`;
	help += `\t${"--outputFile".padEnd(
		20
	)} location of generated html file (not existing directories will be created) [required]\n`;

	help += "\n";

	return help;
}
