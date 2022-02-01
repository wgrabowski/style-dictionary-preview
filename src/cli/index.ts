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
