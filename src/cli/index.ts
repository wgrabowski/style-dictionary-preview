export interface CliOptions {
	config: string;
	init: boolean;
	scan: string;
	live: string;
	help: string;
}

export function parseOptions(argv: string[]): CliOptions {
	const params = require("minimist")(argv);
	return {
		config: params.config,
		init: params.init,
		scan: params.scan,
		live: params.live,
		help: params.help,
	};
}

export function help(): string {
	const binaryName = `style-dictionary-preview`;
	let help = "style-dictionary-preview - quick preview of design tokens \n";
	help += `\nOptions:\n`;
	help += `\t ${"--config <config file>".padEnd(
		30,
		" "
	)}\t Builds HTML preview of tokens based on <config file>\n`;
	help += `\t ${"--config <config file> --serve".padEnd(
		30,
		" "
	)}\t Serves preview and reloads is on tokens files changess\n`;
	help += `\t ${"--scan".padEnd(
		30,
		" "
	)}\t Scans tokens from <tokens directory> and asks user for preview type mapping\n`;
	help += `\t ${"--help".padEnd(30, " ")}\t Displays help\n\n`;
	return help;
}
