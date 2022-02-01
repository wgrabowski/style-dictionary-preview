import { argv, stderr, stdout } from "process";
import { generate } from "./preview";
import { readFileSync } from "fs";
import { parseOptions } from "./cli";
import { scan } from "./scan";
import { PreviewConfig } from "./formatter/model";
import { dirname, join } from "path";

const cliOptions = parseOptions(argv.slice(2));

function getNormalizedConfig(): PreviewConfig {
	const config: PreviewConfig = JSON.parse(
		readFileSync(cliOptions.config, { encoding: "utf-8" })
	);
	const configFileDir = dirname(cliOptions.config);
	config.outputDir = join(configFileDir, config.outputDir);
	config.tokensDir = join(configFileDir, config.tokensDir);
	return config;
}

async function main() {
	if (cliOptions.scan) {
		scan(cliOptions.scan);
		return;
	}

	if (!cliOptions.config) {
		stdout.write(
			`Config file required.\nUse --config <path> to provide config file path.\n`
		);
		return;
	}
	generate(getNormalizedConfig());
}

main();
