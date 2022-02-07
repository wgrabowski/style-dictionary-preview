import { watch } from "chokidar";
import { create } from "browser-sync";
import { PreviewConfig } from "../formatter/model";
import { stdout } from "process";
import { generate } from "../preview";

export function serve(config: PreviewConfig) {
	stdout.write(
		`Watching for changes in ${config.tokensDir}. Preview will rebuild`
	);
	const browserSyncInstance = create();
	watch(`${config.tokensDir}/**/*.json`).on("all", (event, path) => {
		generate(config);
	});
	browserSyncInstance.init({
		server: config.outputDir,
		watch: true,
	});
}
