import meta, { settings } from "./meta"

const resultContainer = document.querySelector(".result-container")
let metaDataContainer = document.querySelector(".meta")
let settingsDataContainer = document.querySelector(".settings")

const exifData = {
	about: { value: "", attributes: {}, description: "" },
	CreatorTool: {
		value: "Adobe Photoshop Lightroom Classic 13.0.1 (Windows)",
		attributes: {},
		description: "Adobe Photoshop Lightroom Classic 13.0.1 (Windows)"
	},
	ModifyDate: {
		value: "2024-01-06T15:04:13+01:00",
		attributes: {},
		description: "2024-01-06T15:04:13+01:00"
	},
	CreateDate: {
		value: "2023-10-22T16:36:50",
		attributes: {},
		description: "2023-10-22T16:36:50"
	},
	MetadataDate: {
		value: "2024-01-06T15:04:13+01:00",
		attributes: {},
		description: "2024-01-06T15:04:13+01:00"
	},
	LensInfo: {
		value: "500/10 500/10 18/10 18/10",
		attributes: {},
		description: "500/10 500/10 18/10 18/10"
	},
	Lens: {
		value: "FE 50mm F1.8",
		attributes: {},
		description: "FE 50mm F1.8"
	},
	LensDistortInfo: {
		value:
			"32800/32768 -3431263/1073741824 -468814/1073741824 762806/1073741824",
		attributes: {},
		description:
			"32800/32768 -3431263/1073741824 -468814/1073741824 762806/1073741824"
	},
	DistortionCorrectionAlreadyApplied: {
		value: "True",
		attributes: {},
		description: "True"
	},
	LateralChromaticAberrationCorrectionAlreadyApplied: {
		value: "True",
		attributes: {},
		description: "True"
	},
	LensModel: {
		id: 42036,
		value: ["FE 50mm F1.8"],
		description: "FE 50mm F1.8"
	},
	DateCreated: {
		value: "2023-10-22T16:36:50",
		attributes: {},
		description: "2023-10-22T16:36:50"
	},
	DocumentID: {
		value: "xmp.did:e1e9d4fe-1b85-ed45-aaf9-66725b2cf11a",
		attributes: {},
		description: "xmp.did:e1e9d4fe-1b85-ed45-aaf9-66725b2cf11a"
	},
	PreservedFileName: {
		value: "_DSC8320.ARW",
		attributes: {},
		description: "_DSC8320.ARW"
	},
	OriginalDocumentID: {
		value: "9BBCEF67BA61FF0C518351CDF060F6F0",
		attributes: {},
		description: "9BBCEF67BA61FF0C518351CDF060F6F0"
	},
	InstanceID: {
		value: "xmp.iid:e1e9d4fe-1b85-ed45-aaf9-66725b2cf11a",
		attributes: {},
		description: "xmp.iid:e1e9d4fe-1b85-ed45-aaf9-66725b2cf11a"
	},
	format: {
		value: "image/jpeg",
		attributes: {},
		description: "image/jpeg"
	},
	RawFileName: {
		value: "_DSC8320.ARW",
		attributes: {},
		description: "_DSC8320.ARW"
	},
	Version: { value: "16.0", attributes: {}, description: "16.0" },
	CompatibleVersion: {
		value: "268435456",
		attributes: {},
		description: "268435456"
	},
	ProcessVersion: {
		value: "15.4",
		attributes: {},
		description: "15.4"
	},
	WhiteBalance: {
		id: 41987,
		value: 0,
		description: "Auto white balance"
	},
	Temperature: { value: "5846", attributes: {}, description: "5846" },
	Tint: { value: "+1", attributes: {}, description: "+1" },
	Exposure2012: {
		value: "-0.49",
		attributes: {},
		description: "-0.49"
	},
	Contrast2012: { value: "-11", attributes: {}, description: "-11" },
	Highlights2012: { value: "-46", attributes: {}, description: "-46" },
	Shadows2012: { value: "+53", attributes: {}, description: "+53" },
	Whites2012: { value: "-7", attributes: {}, description: "-7" },
	Blacks2012: { value: "+7", attributes: {}, description: "+7" },
	Texture: { value: "+6", attributes: {}, description: "+6" },
	Clarity2012: { value: "-2", attributes: {}, description: "-2" },
	Dehaze: { value: "0", attributes: {}, description: "0" },
	Vibrance: { value: "-12", attributes: {}, description: "-12" },
	Saturation: { id: 41993, value: 0, description: "Normal" },
	ParametricShadows: { value: "0", attributes: {}, description: "0" },
	ParametricDarks: { value: "0", attributes: {}, description: "0" },
	ParametricLights: { value: "0", attributes: {}, description: "0" },
	ParametricHighlights: {
		value: "0",
		attributes: {},
		description: "0"
	},
	ParametricShadowSplit: {
		value: "25",
		attributes: {},
		description: "25"
	},
	ParametricMidtoneSplit: {
		value: "50",
		attributes: {},
		description: "50"
	},
	ParametricHighlightSplit: {
		value: "75",
		attributes: {},
		description: "75"
	},
	Sharpness: { id: 41994, value: 0, description: "Normal" },
	SharpenRadius: { value: "+1.4", attributes: {}, description: "+1.4" },
	SharpenDetail: { value: "25", attributes: {}, description: "25" },
	SharpenEdgeMasking: { value: "6", attributes: {}, description: "6" },
	LuminanceSmoothing: { value: "8", attributes: {}, description: "8" },
	LuminanceNoiseReductionDetail: {
		value: "50",
		attributes: {},
		description: "50"
	},
	LuminanceNoiseReductionContrast: {
		value: "0",
		attributes: {},
		description: "0"
	},
	ColorNoiseReduction: { value: "6", attributes: {}, description: "6" },
	ColorNoiseReductionDetail: {
		value: "50",
		attributes: {},
		description: "50"
	},
	ColorNoiseReductionSmoothness: {
		value: "50",
		attributes: {},
		description: "50"
	},
	HueAdjustmentRed: {
		value: "+26",
		attributes: {},
		description: "+26"
	},
	HueAdjustmentOrange: {
		value: "+9",
		attributes: {},
		description: "+9"
	},
	HueAdjustmentYellow: {
		value: "-7",
		attributes: {},
		description: "-7"
	},
	HueAdjustmentGreen: {
		value: "-11",
		attributes: {},
		description: "-11"
	},
	HueAdjustmentAqua: { value: "-7", attributes: {}, description: "-7" },
	HueAdjustmentBlue: { value: "0", attributes: {}, description: "0" },
	HueAdjustmentPurple: {
		value: "+9",
		attributes: {},
		description: "+9"
	},
	HueAdjustmentMagenta: {
		value: "+20",
		attributes: {},
		description: "+20"
	},
	SaturationAdjustmentRed: {
		value: "-28",
		attributes: {},
		description: "-28"
	},
	SaturationAdjustmentOrange: {
		value: "-6",
		attributes: {},
		description: "-6"
	},
	SaturationAdjustmentYellow: {
		value: "-7",
		attributes: {},
		description: "-7"
	},
	SaturationAdjustmentGreen: {
		value: "-11",
		attributes: {},
		description: "-11"
	},
	SaturationAdjustmentAqua: {
		value: "-7",
		attributes: {},
		description: "-7"
	},
	SaturationAdjustmentBlue: {
		value: "-4",
		attributes: {},
		description: "-4"
	},
	SaturationAdjustmentPurple: {
		value: "-12",
		attributes: {},
		description: "-12"
	},
	SaturationAdjustmentMagenta: {
		value: "-26",
		attributes: {},
		description: "-26"
	},
	LuminanceAdjustmentRed: {
		value: "-8",
		attributes: {},
		description: "-8"
	},
	LuminanceAdjustmentOrange: {
		value: "+10",
		attributes: {},
		description: "+10"
	},
	LuminanceAdjustmentYellow: {
		value: "+15",
		attributes: {},
		description: "+15"
	},
	LuminanceAdjustmentGreen: {
		value: "+23",
		attributes: {},
		description: "+23"
	},
	LuminanceAdjustmentAqua: {
		value: "+14",
		attributes: {},
		description: "+14"
	},
	LuminanceAdjustmentBlue: {
		value: "+7",
		attributes: {},
		description: "+7"
	},
	LuminanceAdjustmentPurple: {
		value: "0",
		attributes: {},
		description: "0"
	},
	LuminanceAdjustmentMagenta: {
		value: "-5",
		attributes: {},
		description: "-5"
	},
	SplitToningShadowHue: {
		value: "336",
		attributes: {},
		description: "336"
	},
	SplitToningShadowSaturation: {
		value: "13",
		attributes: {},
		description: "13"
	},
	SplitToningHighlightHue: {
		value: "228",
		attributes: {},
		description: "228"
	},
	SplitToningHighlightSaturation: {
		value: "33",
		attributes: {},
		description: "33"
	},
	SplitToningBalance: { value: "0", attributes: {}, description: "0" },
	ColorGradeMidtoneHue: {
		value: "45",
		attributes: {},
		description: "45"
	},
	ColorGradeMidtoneSat: {
		value: "21",
		attributes: {},
		description: "21"
	},
	ColorGradeShadowLum: {
		value: "-61",
		attributes: {},
		description: "-61"
	},
	ColorGradeMidtoneLum: {
		value: "+24",
		attributes: {},
		description: "+24"
	},
	ColorGradeHighlightLum: {
		value: "+100",
		attributes: {},
		description: "+100"
	},
	ColorGradeBlending: {
		value: "75",
		attributes: {},
		description: "75"
	},
	ColorGradeGlobalHue: {
		value: "225",
		attributes: {},
		description: "225"
	},
	ColorGradeGlobalSat: {
		value: "20",
		attributes: {},
		description: "20"
	},
	ColorGradeGlobalLum: { value: "0", attributes: {}, description: "0" },
	AutoLateralCA: { value: "1", attributes: {}, description: "1" },
	LensProfileEnable: { value: "1", attributes: {}, description: "1" },
	LensManualDistortionAmount: {
		value: "0",
		attributes: {},
		description: "0"
	},
	VignetteAmount: { value: "0", attributes: {}, description: "0" },
	DefringePurpleAmount: {
		value: "0",
		attributes: {},
		description: "0"
	},
	DefringePurpleHueLo: {
		value: "30",
		attributes: {},
		description: "30"
	},
	DefringePurpleHueHi: {
		value: "70",
		attributes: {},
		description: "70"
	},
	DefringeGreenAmount: { value: "0", attributes: {}, description: "0" },
	DefringeGreenHueLo: {
		value: "40",
		attributes: {},
		description: "40"
	},
	DefringeGreenHueHi: {
		value: "60",
		attributes: {},
		description: "60"
	},
	PerspectiveUpright: { value: "4", attributes: {}, description: "4" },
	PerspectiveVertical: { value: "0", attributes: {}, description: "0" },
	PerspectiveHorizontal: {
		value: "0",
		attributes: {},
		description: "0"
	},
	PerspectiveRotate: {
		value: "0.0",
		attributes: {},
		description: "0.0"
	},
	PerspectiveAspect: { value: "0", attributes: {}, description: "0" },
	PerspectiveScale: {
		value: "100",
		attributes: {},
		description: "100"
	},
	PerspectiveX: { value: "0.00", attributes: {}, description: "0.00" },
	PerspectiveY: { value: "0.00", attributes: {}, description: "0.00" },
	GrainAmount: { value: "45", attributes: {}, description: "45" },
	GrainSize: { value: "54", attributes: {}, description: "54" },
	GrainFrequency: { value: "50", attributes: {}, description: "50" },
	PostCropVignetteAmount: {
		value: "-11",
		attributes: {},
		description: "-11"
	},
	PostCropVignetteMidpoint: {
		value: "50",
		attributes: {},
		description: "50"
	},
	PostCropVignetteFeather: {
		value: "50",
		attributes: {},
		description: "50"
	},
	PostCropVignetteRoundness: {
		value: "0",
		attributes: {},
		description: "0"
	},
	PostCropVignetteStyle: {
		value: "1",
		attributes: {},
		description: "1"
	},
	PostCropVignetteHighlightContrast: {
		value: "0",
		attributes: {},
		description: "0"
	},
	ShadowTint: { value: "+88", attributes: {}, description: "+88" },
	RedHue: { value: "+25", attributes: {}, description: "+25" },
	RedSaturation: { value: "-31", attributes: {}, description: "-31" },
	GreenHue: { value: "-45", attributes: {}, description: "-45" },
	GreenSaturation: { value: "-6", attributes: {}, description: "-6" },
	BlueHue: { value: "+24", attributes: {}, description: "+24" },
	BlueSaturation: { value: "+4", attributes: {}, description: "+4" },
	HDREditMode: { value: "0", attributes: {}, description: "0" },
	OverrideLookVignette: {
		value: "False",
		attributes: {},
		description: "False"
	},
	ToneCurveName2012: {
		value: "Custom",
		attributes: {},
		description: "Custom"
	},
	CameraProfile: {
		value: "Adobe Standard",
		attributes: {},
		description: "Adobe Standard"
	},
	CameraProfileDigest: {
		value: "D360A2DBD2CA77BB5DA0C19FEDBEE62D",
		attributes: {},
		description: "D360A2DBD2CA77BB5DA0C19FEDBEE62D"
	},
	LensProfileSetup: {
		value: "Custom",
		attributes: {},
		description: "Custom"
	},
	LensProfileName: {
		value: "Adobe (Sony FE 50mm F1.8)",
		attributes: {},
		description: "Adobe (Sony FE 50mm F1.8)"
	},
	LensProfileFilename: {
		value: "SONY (Sony FE 50mm F1.8) - RAW.lcp",
		attributes: {},
		description: "SONY (Sony FE 50mm F1.8) - RAW.lcp"
	},
	LensProfileDigest: {
		value: "9AE4A323BA9A4C4460CE6BEF81D4F741",
		attributes: {},
		description: "9AE4A323BA9A4C4460CE6BEF81D4F741"
	},
	LensProfileIsEmbedded: {
		value: "False",
		attributes: {},
		description: "False"
	},
	LensProfileDistortionScale: {
		value: "100",
		attributes: {},
		description: "100"
	},
	LensProfileVignettingScale: {
		value: "0",
		attributes: {},
		description: "0"
	},
	UprightVersion: {
		value: "151388160",
		attributes: {},
		description: "151388160"
	},
	UprightCenterMode: { value: "0", attributes: {}, description: "0" },
	UprightCenterNormX: {
		value: "0.506513",
		attributes: {},
		description: "0.506513"
	},
	UprightCenterNormY: {
		value: "0.476698",
		attributes: {},
		description: "0.476698"
	},
	UprightFocalMode: { value: "0", attributes: {}, description: "0" },
	UprightFocalLength35mm: {
		value: "48.7372",
		attributes: {},
		description: "48.7372"
	},
	UprightPreview: {
		value: "False",
		attributes: {},
		description: "False"
	},
	UprightDependentDigest: {
		value: "92EEE1F8DEB63331D0505FB077544566",
		attributes: {},
		description: "92EEE1F8DEB63331D0505FB077544566"
	},
	UprightTransformCount: {
		value: "6",
		attributes: {},
		description: "6"
	},
	UprightTransform_0: {
		value:
			"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000",
		attributes: {},
		description:
			"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000"
	},
	UprightTransform_1: {
		value:
			"0.951480252,0.048519748,0.000000000,-0.109059688,0.951480252,0.078789718,0.000000000,0.000000000,1.000000000",
		attributes: {},
		description:
			"0.951480252,0.048519748,0.000000000,-0.109059688,0.951480252,0.078789718,0.000000000,0.000000000,1.000000000"
	},
	UprightTransform_2: {
		value:
			"0.951480252,0.048519748,0.000000000,-0.109059688,0.951480252,0.078789718,0.000000000,0.000000000,1.000000000",
		attributes: {},
		description:
			"0.951480252,0.048519748,0.000000000,-0.109059688,0.951480252,0.078789718,0.000000000,0.000000000,1.000000000"
	},
	UprightTransform_3: {
		value:
			"0.997090258,0.050845583,-0.023967920,-0.114287556,0.997090258,0.058598649,0.000000000,0.000000000,1.000000000",
		attributes: {},
		description:
			"0.997090258,0.050845583,-0.023967920,-0.114287556,0.997090258,0.058598649,0.000000000,0.000000000,1.000000000"
	},
	UprightTransform_4: {
		value:
			"0.951480252,0.048519748,0.000000000,-0.109059688,0.951480252,0.078789718,0.000000000,0.000000000,1.000000000",
		attributes: {},
		description:
			"0.951480252,0.048519748,0.000000000,-0.109059688,0.951480252,0.078789718,0.000000000,0.000000000,1.000000000"
	},
	UprightTransform_5: {
		value:
			"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000",
		attributes: {},
		description:
			"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000"
	},
	GrainSeed: {
		value: "1030130334",
		attributes: {},
		description: "1030130334"
	},
	HasSettings: { value: "True", attributes: {}, description: "True" },
	CropTop: { value: "0.0731", attributes: {}, description: "0.0731" },
	CropLeft: {
		value: "0.042718",
		attributes: {},
		description: "0.042718"
	},
	CropBottom: {
		value: "0.933009",
		attributes: {},
		description: "0.933009"
	},
	CropRight: {
		value: "0.902626",
		attributes: {},
		description: "0.902626"
	},
	CropAngle: { value: "0", attributes: {}, description: "0" },
	CropConstrainToWarp: { value: "1", attributes: {}, description: "1" },
	HasCrop: { value: "True", attributes: {}, description: "True" },
	AlreadyApplied: {
		value: "True",
		attributes: {},
		description: "True"
	},
	History: {
		value: [
			{
				action: {
					value: "derived",
					attributes: {},
					description: "derived"
				},
				parameters: {
					value:
						"converted from image/x-sony-arw to image/jpeg, saved to new location",
					attributes: {},
					description:
						"converted from image/x-sony-arw to image/jpeg, saved to new location"
				}
			},
			{
				action: {
					value: "saved",
					attributes: {},
					description: "saved"
				},
				instanceID: {
					value: "xmp.iid:e1e9d4fe-1b85-ed45-aaf9-66725b2cf11a",
					attributes: {},
					description: "xmp.iid:e1e9d4fe-1b85-ed45-aaf9-66725b2cf11a"
				},
				when: {
					value: "2024-01-06T15:04:13+01:00",
					attributes: {},
					description: "2024-01-06T15:04:13+01:00"
				},
				softwareAgent: {
					value: "Adobe Photoshop Lightroom Classic 13.0.1 (Windows)",
					attributes: {},
					description: "Adobe Photoshop Lightroom Classic 13.0.1 (Windows)"
				},
				changed: { value: "/", attributes: {}, description: "/" }
			}
		],
		attributes: {},
		description:
			"action: derived; parameters: converted from image/x-sony-arw to image/jpeg, saved to new location, action: saved; instanceID: xmp.iid:e1e9d4fe-1b85-ed45-aaf9-66725b2cf11a; when: 2024-01-06T15:04:13+01:00; softwareAgent: Adobe Photoshop Lightroom Classic 13.0.1 (Windows); changed: /"
	},
	DerivedFrom: {
		value: {
			documentID: {
				value: "9BBCEF67BA61FF0C518351CDF060F6F0",
				attributes: {},
				description: "9BBCEF67BA61FF0C518351CDF060F6F0"
			},
			originalDocumentID: {
				value: "9BBCEF67BA61FF0C518351CDF060F6F0",
				attributes: {},
				description: "9BBCEF67BA61FF0C518351CDF060F6F0"
			}
		},
		attributes: {},
		description:
			"documentID: 9BBCEF67BA61FF0C518351CDF060F6F0; originalDocumentID: 9BBCEF67BA61FF0C518351CDF060F6F0"
	},
	ToneCurvePV2012: {
		value: [
			{ value: "0, 0", attributes: {}, description: "0, 0" },
			{ value: "255, 255", attributes: {}, description: "255, 255" }
		],
		attributes: {},
		description: "0, 0, 255, 255"
	},
	ToneCurvePV2012Red: {
		value: [
			{ value: "0, 5", attributes: {}, description: "0, 5" },
			{ value: "29, 24", attributes: {}, description: "29, 24" },
			{ value: "63, 61", attributes: {}, description: "63, 61" },
			{ value: "175, 171", attributes: {}, description: "175, 171" },
			{ value: "219, 225", attributes: {}, description: "219, 225" },
			{ value: "243, 255", attributes: {}, description: "243, 255" }
		],
		attributes: {},
		description: "0, 5, 29, 24, 63, 61, 175, 171, 219, 225, 243, 255"
	},
	ToneCurvePV2012Green: {
		value: [
			{ value: "0, 7", attributes: {}, description: "0, 7" },
			{ value: "60, 61", attributes: {}, description: "60, 61" },
			{ value: "184, 184", attributes: {}, description: "184, 184" },
			{ value: "255, 254", attributes: {}, description: "255, 254" }
		],
		attributes: {},
		description: "0, 7, 60, 61, 184, 184, 255, 254"
	},
	ToneCurvePV2012Blue: {
		value: [
			{ value: "0, 6", attributes: {}, description: "0, 6" },
			{ value: "60, 62", attributes: {}, description: "60, 62" },
			{ value: "188, 181", attributes: {}, description: "188, 181" },
			{ value: "255, 249", attributes: {}, description: "255, 249" }
		],
		attributes: {},
		description: "0, 6, 60, 62, 188, 181, 255, 249"
	},
	LensBlur: {
		value: {
			Version: { value: "1", attributes: {}, description: "1" },
			Active: { value: "true", attributes: {}, description: "true" },
			FocalRange: {
				value: "-40 40 60 140",
				attributes: {},
				description: "-40 40 60 140"
			},
			FocalRangeSource: {
				value: "2",
				attributes: {},
				description: "2"
			},
			SubjectRange: {
				value: "28 71",
				attributes: {},
				description: "28 71"
			},
			SampledRange: {
				value: "40 60",
				attributes: {},
				description: "40 60"
			},
			SampledArea: {
				value: "0.547497 0.461853 0.549540 0.463215",
				attributes: {},
				description: "0.547497 0.461853 0.549540 0.463215"
			},
			BlurAmount: { value: "100", attributes: {}, description: "100" },
			BokehShape: { value: "0", attributes: {}, description: "0" },
			BokehShapeDetail: {
				value: "0",
				attributes: {},
				description: "0"
			},
			HighlightsThreshold: {
				value: "50",
				attributes: {},
				description: "50"
			},
			HighlightsBoost: {
				value: "50",
				attributes: {},
				description: "50"
			},
			CatEyeAmount: { value: "80", attributes: {}, description: "80" },
			CatEyeScale: { value: "100", attributes: {}, description: "100" },
			BokehAspect: { value: "0", attributes: {}, description: "0" },
			BokehRotation: { value: "0", attributes: {}, description: "0" },
			SphericalAberration: {
				value: "0",
				attributes: {},
				description: "0"
			}
		},
		attributes: {},
		description:
			"Version: 1; Active: true; FocalRange: -40 40 60 140; FocalRangeSource: 2; SubjectRange: 28 71; SampledRange: 40 60; SampledArea: 0.547497 0.461853 0.549540 0.463215; BlurAmount: 100; BokehShape: 0; BokehShapeDetail: 0; HighlightsThreshold: 50; HighlightsBoost: 50; CatEyeAmount: 80; CatEyeScale: 100; BokehAspect: 0; BokehRotation: 0; SphericalAberration: 0"
	},
	DepthMapInfo: {
		value: {
			DepthSource: { value: "2", attributes: {}, description: "2" },
			BaseRawDepthTable: {
				value: "54EC7418A7801B7909DA172E7611B454",
				attributes: {},
				description: "54EC7418A7801B7909DA172E7611B454"
			},
			BaseRawDepthInputDigest: {
				value: "B1C176BE41A373078E9A013C36B7843C",
				attributes: {},
				description: "B1C176BE41A373078E9A013C36B7843C"
			},
			BaseRawDepthVersion: {
				value: "1",
				attributes: {},
				description: "1"
			},
			BaseHighlightGuideTable: {
				value: "5B5C36FE2AF310AE4DBAE2FC908614E2",
				attributes: {},
				description: "5B5C36FE2AF310AE4DBAE2FC908614E2"
			},
			BaseHighlightGuideInputDigest: {
				value: "4352D88A78AA39750BF70CD6F27BCAA5",
				attributes: {},
				description: "4352D88A78AA39750BF70CD6F27BCAA5"
			},
			BaseHighlightGuideVersion: {
				value: "1",
				attributes: {},
				description: "1"
			},
			BaseLayeredDepthTable: {
				value: "6EE6D7A4C2D789477F5D304EB04E5F5D",
				attributes: {},
				description: "6EE6D7A4C2D789477F5D304EB04E5F5D"
			},
			BaseLayeredDepthInputDigest: {
				value: "B191FAA3CBB4E223F7D8DE4C9C187307",
				attributes: {},
				description: "B191FAA3CBB4E223F7D8DE4C9C187307"
			},
			BaseLayeredDepthVersion: {
				value: "1",
				attributes: {},
				description: "1"
			}
		},
		attributes: {},
		description:
			"DepthSource: 2; BaseRawDepthTable: 54EC7418A7801B7909DA172E7611B454; BaseRawDepthInputDigest: B1C176BE41A373078E9A013C36B7843C; BaseRawDepthVersion: 1; BaseHighlightGuideTable: 5B5C36FE2AF310AE4DBAE2FC908614E2; BaseHighlightGuideInputDigest: 4352D88A78AA39750BF70CD6F27BCAA5; BaseHighlightGuideVersion: 1; BaseLayeredDepthTable: 6EE6D7A4C2D789477F5D304EB04E5F5D; BaseLayeredDepthInputDigest: B191FAA3CBB4E223F7D8DE4C9C187307; BaseLayeredDepthVersion: 1"
	},
	MaskGroupBasedCorrections: {
		value: [
			{
				What: {
					value: "Correction",
					attributes: {},
					description: "Correction"
				},
				CorrectionAmount: {
					value: "1",
					attributes: {},
					description: "1"
				},
				CorrectionActive: {
					value: "true",
					attributes: {},
					description: "true"
				},
				CorrectionName: {
					value: "Maske 1",
					attributes: {},
					description: "Maske 1"
				},
				CorrectionSyncID: {
					value: "E089DBEB5A24834CBE930505D8B78B95",
					attributes: {},
					description: "E089DBEB5A24834CBE930505D8B78B95"
				},
				LocalExposure: { value: "0", attributes: {}, description: "0" },
				LocalHue: { value: "0", attributes: {}, description: "0" },
				LocalSaturation: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalContrast: { value: "0", attributes: {}, description: "0" },
				LocalClarity: { value: "0", attributes: {}, description: "0" },
				LocalSharpness: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalBrightness: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalToningHue: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalToningSaturation: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalExposure2012: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalContrast2012: {
					value: "0.17021",
					attributes: {},
					description: "0.17021"
				},
				LocalHighlights2012: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalShadows2012: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalWhites2012: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalBlacks2012: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalClarity2012: {
					value: "0.93617",
					attributes: {},
					description: "0.93617"
				},
				LocalDehaze: { value: "0", attributes: {}, description: "0" },
				LocalLuminanceNoise: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalMoire: { value: "0", attributes: {}, description: "0" },
				LocalDefringe: { value: "0", attributes: {}, description: "0" },
				LocalTemperature: {
					value: "0",
					attributes: {},
					description: "0"
				},
				LocalTint: { value: "0", attributes: {}, description: "0" },
				LocalTexture: { value: "0", attributes: {}, description: "0" },
				LocalGrain: { value: "0", attributes: {}, description: "0" },
				LocalCurveRefineSaturation: {
					value: "100",
					attributes: {},
					description: "100"
				},
				CorrectionMasks: {
					value: [
						{
							What: {
								value: "Mask/CircularGradient",
								attributes: {},
								description: "Mask/CircularGradient"
							},
							MaskActive: {
								value: "true",
								attributes: {},
								description: "true"
							},
							MaskName: {
								value: "Radialer Verlauf 1",
								attributes: {},
								description: "Radialer Verlauf 1"
							},
							MaskBlendMode: {
								value: "0",
								attributes: {},
								description: "0"
							},
							MaskInverted: {
								value: "false",
								attributes: {},
								description: "false"
							},
							MaskSyncID: {
								value: "2CB9DB907C02A94BA32C7F1B25B0A1EB",
								attributes: {},
								description: "2CB9DB907C02A94BA32C7F1B25B0A1EB"
							},
							MaskValue: {
								value: "1",
								attributes: {},
								description: "1"
							},
							Top: {
								value: "0.31665",
								attributes: {},
								description: "0.31665"
							},
							Left: {
								value: "0.138283",
								attributes: {},
								description: "0.138283"
							},
							Bottom: {
								value: "0.721144",
								attributes: {},
								description: "0.721144"
							},
							Right: {
								value: "0.643733",
								attributes: {},
								description: "0.643733"
							},
							Angle: { value: "0", attributes: {}, description: "0" },
							Midpoint: {
								value: "50",
								attributes: {},
								description: "50"
							},
							Roundness: {
								value: "0",
								attributes: {},
								description: "0"
							},
							Feather: {
								value: "66",
								attributes: {},
								description: "66"
							},
							Flipped: {
								value: "true",
								attributes: {},
								description: "true"
							},
							Version: { value: "2", attributes: {}, description: "2" }
						}
					],
					attributes: {},
					description:
						"What: Mask/CircularGradient; MaskActive: true; MaskName: Radialer Verlauf 1; MaskBlendMode: 0; MaskInverted: false; MaskSyncID: 2CB9DB907C02A94BA32C7F1B25B0A1EB; MaskValue: 1; Top: 0.31665; Left: 0.138283; Bottom: 0.721144; Right: 0.643733; Angle: 0; Midpoint: 50; Roundness: 0; Feather: 66; Flipped: true; Version: 2"
				}
			}
		],
		attributes: {},
		description:
			"What: Correction; CorrectionAmount: 1; CorrectionActive: true; CorrectionName: Maske 1; CorrectionSyncID: E089DBEB5A24834CBE930505D8B78B95; LocalExposure: 0; LocalHue: 0; LocalSaturation: 0; LocalContrast: 0; LocalClarity: 0; LocalSharpness: 0; LocalBrightness: 0; LocalToningHue: 0; LocalToningSaturation: 0; LocalExposure2012: 0; LocalContrast2012: 0.17021; LocalHighlights2012: 0; LocalShadows2012: 0; LocalWhites2012: 0; LocalBlacks2012: 0; LocalClarity2012: 0.93617; LocalDehaze: 0; LocalLuminanceNoise: 0; LocalMoire: 0; LocalDefringe: 0; LocalTemperature: 0; LocalTint: 0; LocalTexture: 0; LocalGrain: 0; LocalCurveRefineSaturation: 100; CorrectionMasks: What: Mask/CircularGradient; MaskActive: true; MaskName: Radialer Verlauf 1; MaskBlendMode: 0; MaskInverted: false; MaskSyncID: 2CB9DB907C02A94BA32C7F1B25B0A1EB; MaskValue: 1; Top: 0.31665; Left: 0.138283; Bottom: 0.721144; Right: 0.643733; Angle: 0; Midpoint: 50; Roundness: 0; Feather: 66; Flipped: true; Version: 2"
	},
	Look: {
		value: {
			Name: {
				value: "TG Rec 2020",
				attributes: {},
				description: "TG Rec 2020"
			},
			Amount: { value: "1", attributes: {}, description: "1" },
			UUID: {
				value: "B7212024BEB7794B8BB1246A62DADD0B",
				attributes: {},
				description: "B7212024BEB7794B8BB1246A62DADD0B"
			},
			Group: {
				value: [
					{
						value: "Leif's Luts",
						attributes: { lang: "x-default" },
						description: "Leif's Luts"
					}
				],
				attributes: {},
				description: "Leif's Luts"
			},
			Parameters: {
				value: {
					Version: {
						value: "16.0",
						attributes: {},
						description: "16.0"
					},
					ProcessVersion: {
						value: "15.4",
						attributes: {},
						description: "15.4"
					},
					ConvertToGrayscale: {
						value: "False",
						attributes: {},
						description: "False"
					},
					RGBTable: {
						value: "692E822BAAF065FCC0F305739D23776B",
						attributes: {},
						description: "692E822BAAF065FCC0F305739D23776B"
					}
				},
				attributes: {},
				description:
					"Version: 16.0; ProcessVersion: 15.4; ConvertToGrayscale: False; RGBTable: 692E822BAAF065FCC0F305739D23776B"
			}
		},
		attributes: {},
		description:
			"Name: TG Rec 2020; Amount: 1; UUID: B7212024BEB7794B8BB1246A62DADD0B; Group: Leif's Luts; Parameters: Version: 16.0; ProcessVersion: 15.4; ConvertToGrayscale: False; RGBTable: 692E822BAAF065FCC0F305739D23776B"
	},
	Make: { id: 271, value: ["SONY"], description: "SONY" },
	Model: { id: 272, value: ["ILCE-7RM2"], description: "ILCE-7RM2" },
	XResolution: { id: 282, value: [240, 1], description: "240" },
	YResolution: { id: 283, value: [240, 1], description: "240" },
	ResolutionUnit: { id: 296, value: 2, description: "inches" },
	Software: {
		id: 305,
		value: ["Adobe Photoshop Lightroom Classic 13.0.1 (Windows)"],
		description: "Adobe Photoshop Lightroom Classic 13.0.1 (Windows)"
	},
	DateTime: {
		id: 306,
		value: ["2024:01:06 15:04:13"],
		description: "2024:01:06 15:04:13"
	},
	"Exif IFD Pointer": { id: 34665, value: 214, description: 214 },
	ExposureTime: { id: 33434, value: [1, 125], description: "1/125" },
	FNumber: { id: 33437, value: [18, 10], description: "f/1.8" },
	ExposureProgram: { id: 34850, value: 1, description: "Manual" },
	ISOSpeedRatings: { id: 34855, value: 100, description: 100 },
	SensitivityType: {
		id: 34864,
		value: 2,
		description: "Recommended Exposure Index"
	},
	RecommendedExposureIndex: { id: 34866, value: 100, description: 100 },
	ExifVersion: {
		id: 36864,
		value: [48, 50, 51, 49],
		description: "0231"
	},
	DateTimeOriginal: {
		id: 36867,
		value: ["2023:10:22 16:36:50"],
		description: "2023:10:22 16:36:50"
	},
	DateTimeDigitized: {
		id: 36868,
		value: ["2023:10:22 16:36:50"],
		description: "2023:10:22 16:36:50"
	},
	OffsetTime: { id: 36880, value: ["+01:00"], description: "+01:00" },
	ShutterSpeedValue: {
		id: 37377,
		value: [6965784, 1000000],
		description: "1/125"
	},
	ApertureValue: {
		id: 37378,
		value: [1695994, 1000000],
		description: "1.80"
	},
	BrightnessValue: {
		id: 37379,
		value: [11474, 2560],
		description: "4.48203125"
	},
	ExposureBiasValue: { id: 37380, value: [0, 10], description: "0" },
	MaxApertureValue: {
		id: 37381,
		value: [434, 256],
		description: "1.80"
	},
	MeteringMode: { id: 37383, value: 5, description: "Pattern" },
	LightSource: { id: 37384, value: 0, description: "Unknown" },
	Flash: {
		id: 37385,
		value: 16,
		description: "Flash did not fire, compulsory flash mode"
	},
	FocalLength: { id: 37386, value: [500, 10], description: "50 mm" },
	ColorSpace: { id: 40961, value: 1, description: "sRGB" },
	FocalPlaneXResolution: {
		id: 41486,
		value: [70924134, 32768],
		description: "2164.4328002929688"
	},
	FocalPlaneYResolution: {
		id: 41487,
		value: [70924134, 32768],
		description: "2164.4328002929688"
	},
	FocalPlaneResolutionUnit: {
		id: 41488,
		value: 3,
		description: "centimeters"
	},
	FileSource: { id: 41728, value: 3, description: "DSC" },
	SceneType: {
		id: 41729,
		value: 1,
		description: "A directly photographed image"
	},
	CustomRendered: {
		id: 41985,
		value: 0,
		description: "Normal process"
	},
	ExposureMode: { id: 41986, value: 1, description: "Manual exposure" },
	DigitalZoomRatio: { id: 41988, value: [16, 16], description: "1" },
	FocalLengthIn35mmFilm: { id: 41989, value: 50, description: 50 },
	SceneCaptureType: { id: 41990, value: 0, description: "Standard" },
	Contrast: { id: 41992, value: 0, description: "Normal" },
	LensSpecification: {
		id: 42034,
		value: [
			[500, 10],
			[500, 10],
			[18, 10],
			[18, 10]
		],
		description: "50-50 mm f/1.7999999999999998"
	}
}

const filename = "TestingThisSite.jpg"

let metaData = meta(exifData, filename)
metaDataContainer.innerHTML = metaData
let settingsData = settings(exifData)
settingsDataContainer.innerHTML = settingsData
