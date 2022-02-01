import { CliOptions, parseOptions } from "./index";

test.each([
	[
		["config", "scan", "configfile.json"],
		{
			config: undefined,
			scan: undefined,
			init: undefined,
		},
	],
	[
		["--config", "--scan", "configfile.json"],
		{
			config: true,
			scan: "configfile.json",
			init: undefined,
		},
	],
	[
		["--scan", "--help", "--config", "config/file.json", "--init"],
		{
			config: "config/file.json",
			scan: true,
			init: true,
		},
	],
])(
	"parseOptions() should return CliOptions object with values based on input array",
	(argv: string[], expected) => {
		expect(parseOptions(argv)).toEqual(expected);
	}
);
