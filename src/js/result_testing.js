import template from './lib/template'
import meta, { settings } from './lib/meta'


const resultContainer = document.querySelector('.result-container')
let metaDataContainer = document.querySelector('.meta')
let settingsDataContainer = document.querySelector('.settings')

const exifData = {
	"Bits Per Sample": { "value": 8, "description": "8" },
	"Image Height": { "value": 5030, "description": "5030px" },
	"Image Width": { "value": 7541, "description": "7541px" },
	"Color Components": { "value": 3, "description": "3" },
	"Subsampling": {
		"value": [[0, 17, 0], [1, 17, 1], [2, 17, 1]],
		"description": "YCb4:4:4 (1 1)"
	},
	"Make": { "id": 271, "value": ["SONY"], "description": "SONY" },
	"Model": { "id": 272, "value": ["ILCE-7RM2"], "description": "ILCE-7RM2" },
	"XResolution": { "id": 282, "value": 240, "description": 240 },
	"YResolution": { "id": 283, "value": 240, "description": 240 },
	"ResolutionUnit": { "id": 296, "value": 2, "description": "inches" },
	"Software": {
		"id": 305,
		"value": ["Adobe Photoshop Lightroom Classic 8.2.1 (Macintosh)"],
		"description": "Adobe Photoshop Lightroom Classic 8.2.1 (Macintosh)"
	},
	"DateTime": {
		"id": 306,
		"value": ["2019:07:07 19:16:53"],
		"description": "2019:07:07 19:16:53"
	},
	"Exif IFD Pointer": { "id": 34665, "value": 214, "description": 214 },
	"ExposureTime": { "id": 33434, "value": 0.01, "description": 0.01 },
	"ExposureProgram": { "id": 34850, "value": 1, "description": "Manual" },
	"ISOSpeedRatings": { "id": 34855, "value": 3200, "description": 3200 },
	"undefined-34864": { "id": 34864, "value": 2, "description": 2 },
	"undefined-34866": { "id": 34866, "value": 3200, "description": 3200 },
	"ExifVersion": {
		"id": 36864,
		"value": [48, 50, 51, 48],
		"description": "0230"
	},
	"DateTimeOriginal": {
		"id": 36867,
		"value": ["2019:04:05 22:18:16"],
		"description": "2019:04:05 22:18:16"
	},
	"DateTimeDigitized": {
		"id": 36868,
		"value": ["2019:04:05 22:18:16"],
		"description": "2019:04:05 22:18:16"
	},
	"ShutterSpeedValue": {
		"id": 37377,
		"value": 6.643856,
		"description": 6.643856
	},
	"BrightnessValue": {
		"id": 37379,
		"value": -5.62734375,
		"description": -5.62734375
	},
	"ExposureBiasValue": { "id": 37380, "value": 0, "description": 0 },
	"MaxApertureValue": { "id": 37381, "value": 0, "description": 0 },
	"MeteringMode": { "id": 37383, "value": 5, "description": "Pattern" },
	"LightSource": {
		"id": 37384,
		"value": 3,
		"description": "Tungsten (incandescent light)"
	},
	"Flash": {
		"id": 37385,
		"value": 16,
		"description": "Flash did not fire, compulsory flash mode"
	},
	"ColorSpace": { "id": 40961, "value": 1, "description": "sRGB" },
	"FocalPlaneXResolution": {
		"id": 41486,
		"value": 2164.4328002929688,
		"description": 2164.4328002929688
	},
	"FocalPlaneYResolution": {
		"id": 41487,
		"value": 2164.4328002929688,
		"description": 2164.4328002929688
	},
	"FocalPlaneResolutionUnit": {
		"id": 41488,
		"value": 3,
		"description": "centimeters"
	},
	"FileSource": { "id": 41728, "value": 3, "description": "DSC" },
	"SceneType": {
		"id": 41729,
		"value": 1,
		"description": "A directly photographed image"
	},
	"CustomRendered": {
		"id": 41985,
		"value": 0,
		"description": "Normal process"
	},
	"ExposureMode": {
		"id": 41986,
		"value": 1,
		"description": "Manual exposure"
	},
	"WhiteBalance": {
		"value": "Custom",
		"attributes": {},
		"description": "Custom"
	},
	"DigitalZoomRatio": { "id": 41988, "value": 1, "description": 1 },
	"SceneCaptureType": { "id": 41990, "value": 0, "description": "Standard" },
	"Contrast": { "id": 41992, "value": 0, "description": "Normal" },
	"Saturation": { "value": "-19", "attributes": {}, "description": "-19" },
	"Sharpness": { "value": "40", "attributes": {}, "description": "40" },
	"undefined-42036": {
		"id": 42036,
		"value": ["----"],
		"description": ["----"]
	},
	"Coded Character Set": {
		"id": 346,
		"value": [27, 37, 71],
		"description": "UTF-8"
	},
	"Record Version": { "id": 512, "value": [0, 4], "description": "4" },
	"Date Created": {
		"id": 567,
		"value": [50, 48, 49, 57, 48, 52, 48, 53],
		"description": "2019-04-05"
	},
	"Time Created": {
		"id": 572,
		"value": [50, 50, 49, 56, 49, 54],
		"description": "22:18:16"
	},
	"Digital Creation Date": {
		"id": 574,
		"value": [50, 48, 49, 57, 48, 52, 48, 53],
		"description": "2019-04-05"
	},
	"Digital Creation Time": {
		"id": 575,
		"value": [50, 50, 49, 56, 49, 54],
		"description": "22:18:16"
	},
	"about": { "value": "", "attributes": {}, "description": "" },
	"CreatorTool": {
		"value": "Adobe Photoshop Lightroom Classic 8.2.1 (Macintosh)",
		"attributes": {},
		"description": "Adobe Photoshop Lightroom Classic 8.2.1 (Macintosh)"
	},
	"ModifyDate": {
		"value": "2019-07-07T19:16:53+02:00",
		"attributes": {},
		"description": "2019-07-07T19:16:53+02:00"
	},
	"CreateDate": {
		"value": "2019-04-05T22:18:16",
		"attributes": {},
		"description": "2019-04-05T22:18:16"
	},
	"MetadataDate": {
		"value": "2019-07-07T19:16:53+02:00",
		"attributes": {},
		"description": "2019-07-07T19:16:53+02:00"
	},
	"Lens": { "value": "----", "attributes": {}, "description": "----" },
	"DistortionCorrectionAlreadyApplied": {
		"value": "True",
		"attributes": {},
		"description": "True"
	},
	"LateralChromaticAberrationCorrectionAlreadyApplied": {
		"value": "True",
		"attributes": {},
		"description": "True"
	},
	"VignetteCorrectionAlreadyApplied": {
		"value": "True",
		"attributes": {},
		"description": "True"
	},
	"LensModel": { "value": "----", "attributes": {}, "description": "----" },
	"DateCreated": {
		"value": "2019-04-05T22:18:16",
		"attributes": {},
		"description": "2019-04-05T22:18:16"
	},
	"DocumentID": {
		"value": "xmp.did:f436130c-64f2-4d5c-b57a-f32994bc018f",
		"attributes": {},
		"description": "xmp.did:f436130c-64f2-4d5c-b57a-f32994bc018f"
	},
	"PreservedFileName": {
		"value": "_DSC3325.ARW",
		"attributes": {},
		"description": "_DSC3325.ARW"
	},
	"OriginalDocumentID": {
		"value": "B64B2F65F1EC23EC6D356376730ABE46",
		"attributes": {},
		"description": "B64B2F65F1EC23EC6D356376730ABE46"
	},
	"InstanceID": {
		"value": "xmp.iid:f436130c-64f2-4d5c-b57a-f32994bc018f",
		"attributes": {},
		"description": "xmp.iid:f436130c-64f2-4d5c-b57a-f32994bc018f"
	},
	"format": {
		"value": "image/jpeg",
		"attributes": {},
		"description": "image/jpeg"
	},
	"RawFileName": {
		"value": "_DSC3325-2.ARW",
		"attributes": {},
		"description": "_DSC3325-2.ARW"
	},
	"Version": { "value": "11.2.1", "attributes": {}, "description": "11.2.1" },
	"ProcessVersion": {
		"value": "11.0",
		"attributes": {},
		"description": "11.0"
	},
	"Temperature": { "value": "2000", "attributes": {}, "description": "2000" },
	"Tint": { "value": "-1", "attributes": {}, "description": "-1" },
	"LuminanceSmoothing": {
		"value": "15",
		"attributes": {},
		"description": "15"
	},
	"ColorNoiseReduction": {
		"value": "32",
		"attributes": {},
		"description": "32"
	},
	"VignetteAmount": { "value": "0", "attributes": {}, "description": "0" },
	"ShadowTint": { "value": "-7", "attributes": {}, "description": "-7" },
	"RedHue": { "value": "-20", "attributes": {}, "description": "-20" },
	"RedSaturation": { "value": "+12", "attributes": {}, "description": "+12" },
	"GreenHue": { "value": "+38", "attributes": {}, "description": "+38" },
	"GreenSaturation": {
		"value": "-26",
		"attributes": {},
		"description": "-26"
	},
	"BlueHue": { "value": "-23", "attributes": {}, "description": "-23" },
	"BlueSaturation": { "value": "+8", "attributes": {}, "description": "+8" },
	"Vibrance": { "value": "+19", "attributes": {}, "description": "+19" },
	"HueAdjustmentRed": {
		"value": "-10",
		"attributes": {},
		"description": "-10"
	},
	"HueAdjustmentOrange": {
		"value": "-13",
		"attributes": {},
		"description": "-13"
	},
	"HueAdjustmentYellow": {
		"value": "+4",
		"attributes": {},
		"description": "+4"
	},
	"HueAdjustmentGreen": {
		"value": "+29",
		"attributes": {},
		"description": "+29"
	},
	"HueAdjustmentAqua": {
		"value": "+22",
		"attributes": {},
		"description": "+22"
	},
	"HueAdjustmentBlue": {
		"value": "-11",
		"attributes": {},
		"description": "-11"
	},
	"HueAdjustmentPurple": {
		"value": "-11",
		"attributes": {},
		"description": "-11"
	},
	"HueAdjustmentMagenta": {
		"value": "-14",
		"attributes": {},
		"description": "-14"
	},
	"SaturationAdjustmentRed": {
		"value": "+13",
		"attributes": {},
		"description": "+13"
	},
	"SaturationAdjustmentOrange": {
		"value": "+19",
		"attributes": {},
		"description": "+19"
	},
	"SaturationAdjustmentYellow": {
		"value": "+24",
		"attributes": {},
		"description": "+24"
	},
	"SaturationAdjustmentGreen": {
		"value": "+28",
		"attributes": {},
		"description": "+28"
	},
	"SaturationAdjustmentAqua": {
		"value": "+26",
		"attributes": {},
		"description": "+26"
	},
	"SaturationAdjustmentBlue": {
		"value": "+24",
		"attributes": {},
		"description": "+24"
	},
	"SaturationAdjustmentPurple": {
		"value": "+28",
		"attributes": {},
		"description": "+28"
	},
	"SaturationAdjustmentMagenta": {
		"value": "+27",
		"attributes": {},
		"description": "+27"
	},
	"LuminanceAdjustmentRed": {
		"value": "-20",
		"attributes": {},
		"description": "-20"
	},
	"LuminanceAdjustmentOrange": {
		"value": "+19",
		"attributes": {},
		"description": "+19"
	},
	"LuminanceAdjustmentYellow": {
		"value": "-15",
		"attributes": {},
		"description": "-15"
	},
	"LuminanceAdjustmentGreen": {
		"value": "+16",
		"attributes": {},
		"description": "+16"
	},
	"LuminanceAdjustmentAqua": {
		"value": "-13",
		"attributes": {},
		"description": "-13"
	},
	"LuminanceAdjustmentBlue": {
		"value": "+14",
		"attributes": {},
		"description": "+14"
	},
	"LuminanceAdjustmentPurple": {
		"value": "-14",
		"attributes": {},
		"description": "-14"
	},
	"LuminanceAdjustmentMagenta": {
		"value": "+22",
		"attributes": {},
		"description": "+22"
	},
	"SplitToningShadowHue": {
		"value": "252",
		"attributes": {},
		"description": "252"
	},
	"SplitToningShadowSaturation": {
		"value": "22",
		"attributes": {},
		"description": "22"
	},
	"SplitToningHighlightHue": {
		"value": "31",
		"attributes": {},
		"description": "31"
	},
	"SplitToningHighlightSaturation": {
		"value": "24",
		"attributes": {},
		"description": "24"
	},
	"SplitToningBalance": {
		"value": "+8",
		"attributes": {},
		"description": "+8"
	},
	"ParametricShadows": { "value": "0", "attributes": {}, "description": "0" },
	"ParametricDarks": { "value": "0", "attributes": {}, "description": "0" },
	"ParametricLights": { "value": "0", "attributes": {}, "description": "0" },
	"ParametricHighlights": {
		"value": "0",
		"attributes": {},
		"description": "0"
	},
	"ParametricShadowSplit": {
		"value": "25",
		"attributes": {},
		"description": "25"
	},
	"ParametricMidtoneSplit": {
		"value": "50",
		"attributes": {},
		"description": "50"
	},
	"ParametricHighlightSplit": {
		"value": "75",
		"attributes": {},
		"description": "75"
	},
	"SharpenRadius": {
		"value": "+1.0",
		"attributes": {},
		"description": "+1.0"
	},
	"SharpenDetail": { "value": "25", "attributes": {}, "description": "25" },
	"SharpenEdgeMasking": {
		"value": "6",
		"attributes": {},
		"description": "6"
	},
	"PostCropVignetteAmount": {
		"value": "-22",
		"attributes": {},
		"description": "-22"
	},
	"PostCropVignetteMidpoint": {
		"value": "73",
		"attributes": {},
		"description": "73"
	},
	"PostCropVignetteFeather": {
		"value": "66",
		"attributes": {},
		"description": "66"
	},
	"PostCropVignetteRoundness": {
		"value": "-43",
		"attributes": {},
		"description": "-43"
	},
	"PostCropVignetteStyle": {
		"value": "1",
		"attributes": {},
		"description": "1"
	},
	"PostCropVignetteHighlightContrast": {
		"value": "15",
		"attributes": {},
		"description": "15"
	},
	"GrainAmount": { "value": "11", "attributes": {}, "description": "11" },
	"GrainSize": { "value": "28", "attributes": {}, "description": "28" },
	"GrainFrequency": { "value": "51", "attributes": {}, "description": "51" },
	"LuminanceNoiseReductionDetail": {
		"value": "52",
		"attributes": {},
		"description": "52"
	},
	"ColorNoiseReductionDetail": {
		"value": "49",
		"attributes": {},
		"description": "49"
	},
	"LuminanceNoiseReductionContrast": {
		"value": "7",
		"attributes": {},
		"description": "7"
	},
	"ColorNoiseReductionSmoothness": {
		"value": "43",
		"attributes": {},
		"description": "43"
	},
	"LensProfileEnable": { "value": "1", "attributes": {}, "description": "1" },
	"LensManualDistortionAmount": {
		"value": "0",
		"attributes": {},
		"description": "0"
	},
	"PerspectiveVertical": {
		"value": "-4",
		"attributes": {},
		"description": "-4"
	},
	"PerspectiveHorizontal": {
		"value": "+5",
		"attributes": {},
		"description": "+5"
	},
	"PerspectiveRotate": {
		"value": "-0.3",
		"attributes": {},
		"description": "-0.3"
	},
	"PerspectiveScale": {
		"value": "97",
		"attributes": {},
		"description": "97"
	},
	"PerspectiveAspect": {
		"value": "+11",
		"attributes": {},
		"description": "+11"
	},
	"PerspectiveUpright": {
		"value": "1",
		"attributes": {},
		"description": "1"
	},
	"PerspectiveX": {
		"value": "-1.67",
		"attributes": {},
		"description": "-1.67"
	},
	"PerspectiveY": {
		"value": "+0.97",
		"attributes": {},
		"description": "+0.97"
	},
	"AutoLateralCA": { "value": "1", "attributes": {}, "description": "1" },
	"Exposure2012": {
		"value": "+2.35",
		"attributes": {},
		"description": "+2.35"
	},
	"Contrast2012": { "value": "+10", "attributes": {}, "description": "+10" },
	"Highlights2012": {
		"value": "+11",
		"attributes": {},
		"description": "+11"
	},
	"Shadows2012": { "value": "-20", "attributes": {}, "description": "-20" },
	"Whites2012": { "value": "+14", "attributes": {}, "description": "+14" },
	"Blacks2012": { "value": "-16", "attributes": {}, "description": "-16" },
	"Clarity2012": { "value": "+16", "attributes": {}, "description": "+16" },
	"DefringePurpleAmount": {
		"value": "0",
		"attributes": {},
		"description": "0"
	},
	"DefringePurpleHueLo": {
		"value": "30",
		"attributes": {},
		"description": "30"
	},
	"DefringePurpleHueHi": {
		"value": "70",
		"attributes": {},
		"description": "70"
	},
	"DefringeGreenAmount": {
		"value": "0",
		"attributes": {},
		"description": "0"
	},
	"DefringeGreenHueLo": {
		"value": "40",
		"attributes": {},
		"description": "40"
	},
	"DefringeGreenHueHi": {
		"value": "60",
		"attributes": {},
		"description": "60"
	},
	"Dehaze": { "value": "+14", "attributes": {}, "description": "+14" },
	"ToneMapStrength": { "value": "0", "attributes": {}, "description": "0" },
	"ConvertToGrayscale": {
		"value": "False",
		"attributes": {},
		"description": "False"
	},
	"OverrideLookVignette": {
		"value": "False",
		"attributes": {},
		"description": "False"
	},
	"ToneCurveName": {
		"value": "Linear",
		"attributes": {},
		"description": "Linear"
	},
	"ToneCurveName2012": {
		"value": "Custom",
		"attributes": {},
		"description": "Custom"
	},
	"CameraProfile": {
		"value": "Adobe Standard",
		"attributes": {},
		"description": "Adobe Standard"
	},
	"CameraProfileDigest": {
		"value": "D360A2DBD2CA77BB5DA0C19FEDBEE62D",
		"attributes": {},
		"description": "D360A2DBD2CA77BB5DA0C19FEDBEE62D"
	},
	"LensProfileSetup": {
		"value": "Custom",
		"attributes": {},
		"description": "Custom"
	},
	"LensProfileName": {
		"value": "Adobe (Helios MC 44-3 58mm F2)",
		"attributes": {},
		"description": "Adobe (Helios MC 44-3 58mm F2)"
	},
	"LensProfileFilename": {
		"value": "SONY (Helios MC 44-3 58mm F2) - RAW.lcp",
		"attributes": {},
		"description": "SONY (Helios MC 44-3 58mm F2) - RAW.lcp"
	},
	"LensProfileDigest": {
		"value": "2852A66F1EBC74A3DE439DE62A5D2524",
		"attributes": {},
		"description": "2852A66F1EBC74A3DE439DE62A5D2524"
	},
	"LensProfileDistortionScale": {
		"value": "106",
		"attributes": {},
		"description": "106"
	},
	"LensProfileChromaticAberrationScale": {
		"value": "100",
		"attributes": {},
		"description": "100"
	},
	"LensProfileVignettingScale": {
		"value": "89",
		"attributes": {},
		"description": "89"
	},
	"UprightVersion": {
		"value": "151388160",
		"attributes": {},
		"description": "151388160"
	},
	"UprightCenterMode": { "value": "0", "attributes": {}, "description": "0" },
	"UprightCenterNormX": {
		"value": "0.5",
		"attributes": {},
		"description": "0.5"
	},
	"UprightCenterNormY": {
		"value": "0.5",
		"attributes": {},
		"description": "0.5"
	},
	"UprightFocalMode": { "value": "0", "attributes": {}, "description": "0" },
	"UprightFocalLength35mm": {
		"value": "40.7602",
		"attributes": {},
		"description": "40.7602"
	},
	"UprightPreview": {
		"value": "True",
		"attributes": {},
		"description": "True"
	},
	"UprightDependentDigest": {
		"value": "04F8CA848AE34771214FBE8503C7E101",
		"attributes": {},
		"description": "04F8CA848AE34771214FBE8503C7E101"
	},
	"UprightTransformCount": {
		"value": "6",
		"attributes": {},
		"description": "6"
	},
	"UprightTransform_0": {
		"value": "1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000",
		"attributes": {},
		"description": "1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000"
	},
	"UprightTransform_1": {
		"value": "1.005656239,-0.003042882,-0.001266584,0.006948481,1.006978821,-0.006919106,-0.000000002,0.000089031,1.000000000",
		"attributes": {},
		"description": "1.005656239,-0.003042882,-0.001266584,0.006948481,1.006978821,-0.006919106,-0.000000002,0.000089031,1.000000000"
	},
	"UprightTransform_2": {
		"value": "1.000068671,-0.000710459,-0.000069072,-0.000779946,0.999019092,-0.000177001,-0.000000000,-0.002114318,1.000000000",
		"attributes": {},
		"description": "1.000068671,-0.000710459,-0.000069072,-0.000779946,0.999019092,-0.000177001,-0.000000000,-0.002114318,1.000000000"
	},
	"UprightTransform_3": {
		"value": "1.006886307,-0.003091174,-0.001897567,0.006948151,1.006886307,-0.006917229,0.000000000,0.000000000,1.000000000",
		"attributes": {},
		"description": "1.006886307,-0.003091174,-0.001897567,0.006948151,1.006886307,-0.006917229,0.000000000,0.000000000,1.000000000"
	},
	"UprightTransform_4": {
		"value": "1.000068671,-0.000710459,-0.000069072,-0.000779946,0.999019093,-0.000177002,-0.000000000,-0.002114318,1.000000000",
		"attributes": {},
		"description": "1.000068671,-0.000710459,-0.000069072,-0.000779946,0.999019093,-0.000177002,-0.000000000,-0.002114318,1.000000000"
	},
	"UprightTransform_5": {
		"value": "1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000",
		"attributes": {},
		"description": "1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000"
	},
	"UprightFourSegmentsCount": {
		"value": "0",
		"attributes": {},
		"description": "0"
	},
	"GrainSeed": {
		"value": "715957996",
		"attributes": {},
		"description": "715957996"
	},
	"HasSettings": { "value": "True", "attributes": {}, "description": "True" },
	"CropTop": {
		"value": "0.024997",
		"attributes": {},
		"description": "0.024997"
	},
	"CropLeft": {
		"value": "0.025831",
		"attributes": {},
		"description": "0.025831"
	},
	"CropBottom": {
		"value": "0.973348",
		"attributes": {},
		"description": "0.973348"
	},
	"CropRight": {
		"value": "0.974181",
		"attributes": {},
		"description": "0.974181"
	},
	"CropAngle": { "value": "0", "attributes": {}, "description": "0" },
	"CropConstrainToWarp": {
		"value": "1",
		"attributes": {},
		"description": "1"
	},
	"HasCrop": { "value": "True", "attributes": {}, "description": "True" },
	"AlreadyApplied": {
		"value": "True",
		"attributes": {},
		"description": "True"
	},
	"History": {
		"value": [
			{
				"value": {},
				"attributes": {
					"action": "derived",
					"parameters": "converted from image/x-sony-arw to image/jpeg, saved to new location"
				},
				"description": ""
			},
			{
				"value": {},
				"attributes": {
					"action": "saved",
					"instanceID": "xmp.iid:f436130c-64f2-4d5c-b57a-f32994bc018f",
					"when": "2019-07-07T19:16:53+02:00",
					"softwareAgent": "Adobe Photoshop Lightroom Classic 8.2.1 (Macintosh)",
					"changed": "/"
				},
				"description": ""
			}
		],
		"attributes": {},
		"description": ", "
	},
	"DerivedFrom": {
		"value": {
			"documentID": {
				"value": "B64B2F65F1EC23EC6D356376730ABE46",
				"attributes": {},
				"description": "B64B2F65F1EC23EC6D356376730ABE46"
			},
			"originalDocumentID": {
				"value": "B64B2F65F1EC23EC6D356376730ABE46",
				"attributes": {},
				"description": "B64B2F65F1EC23EC6D356376730ABE46"
			}
		},
		"attributes": {},
		"description": "documentID: B64B2F65F1EC23EC6D356376730ABE46; originalDocumentID: B64B2F65F1EC23EC6D356376730ABE46"
	},
	"ToneCurve": {
		"value": [
			{ "value": "0, 0", "attributes": {}, "description": "0, 0" },
			{ "value": "255, 255", "attributes": {}, "description": "255, 255" }
		],
		"attributes": {},
		"description": "0, 0, 255, 255"
	},
	"ToneCurveRed": {
		"value": [
			{ "value": "0, 0", "attributes": {}, "description": "0, 0" },
			{ "value": "255, 255", "attributes": {}, "description": "255, 255" }
		],
		"attributes": {},
		"description": "0, 0, 255, 255"
	},
	"ToneCurveGreen": {
		"value": [
			{ "value": "0, 0", "attributes": {}, "description": "0, 0" },
			{ "value": "255, 255", "attributes": {}, "description": "255, 255" }
		],
		"attributes": {},
		"description": "0, 0, 255, 255"
	},
	"ToneCurveBlue": {
		"value": [
			{ "value": "0, 0", "attributes": {}, "description": "0, 0" },
			{ "value": "255, 255", "attributes": {}, "description": "255, 255" }
		],
		"attributes": {},
		"description": "0, 0, 255, 255"
	},
	"ToneCurvePV2012": {
		"value": [
			{ "value": "0, 39", "attributes": {}, "description": "0, 39" },
			{ "value": "27, 43", "attributes": {}, "description": "27, 43" },
			{ "value": "97, 92", "attributes": {}, "description": "97, 92" },
			{
				"value": "167, 163",
				"attributes": {},
				"description": "167, 163"
			},
			{ "value": "233, 255", "attributes": {}, "description": "233, 255" }
		],
		"attributes": {},
		"description": "0, 39, 27, 43, 97, 92, 167, 163, 233, 255"
	},
	"ToneCurvePV2012Red": {
		"value": [
			{ "value": "0, 13", "attributes": {}, "description": "0, 13" },
			{ "value": "71, 72", "attributes": {}, "description": "71, 72" },
			{
				"value": "163, 165",
				"attributes": {},
				"description": "163, 165"
			},
			{
				"value": "208, 209",
				"attributes": {},
				"description": "208, 209"
			},
			{ "value": "255, 238", "attributes": {}, "description": "255, 238" }
		],
		"attributes": {},
		"description": "0, 13, 71, 72, 163, 165, 208, 209, 255, 238"
	},
	"ToneCurvePV2012Green": {
		"value": [
			{ "value": "0, 12", "attributes": {}, "description": "0, 12" },
			{ "value": "58, 61", "attributes": {}, "description": "58, 61" },
			{
				"value": "169, 177",
				"attributes": {},
				"description": "169, 177"
			},
			{ "value": "242, 255", "attributes": {}, "description": "242, 255" }
		],
		"attributes": {},
		"description": "0, 12, 58, 61, 169, 177, 242, 255"
	},
	"ToneCurvePV2012Blue": {
		"value": [
			{ "value": "8, 0", "attributes": {}, "description": "8, 0" },
			{ "value": "59, 55", "attributes": {}, "description": "59, 55" },
			{
				"value": "170, 169",
				"attributes": {},
				"description": "170, 169"
			},
			{ "value": "241, 255", "attributes": {}, "description": "241, 255" }
		],
		"attributes": {},
		"description": "8, 0, 59, 55, 170, 169, 241, 255"
	},
	"Look": {
		"value": {
			"Name": {
				"value": "Adobe Color",
				"attributes": {},
				"description": "Adobe Color"
			},
			"Amount": {
				"value": "1.000000",
				"attributes": {},
				"description": "1.000000"
			},
			"UUID": {
				"value": "B952C231111CD8E0ECCF14B86BAA7077",
				"attributes": {},
				"description": "B952C231111CD8E0ECCF14B86BAA7077"
			},
			"SupportsAmount": {
				"value": "false",
				"attributes": {},
				"description": "false"
			},
			"SupportsMonochrome": {
				"value": "false",
				"attributes": {},
				"description": "false"
			},
			"SupportsOutputReferred": {
				"value": "false",
				"attributes": {},
				"description": "false"
			},
			"Group": {
				"value": [
					{
						"value": "Profiles",
						"attributes": { "lang": "x-default" },
						"description": "Profiles"
					}
				],
				"attributes": {},
				"description": "Profiles"
			},
			"Parameters": {
				"value": {
					"Version": {
						"value": "11.2.1",
						"attributes": {},
						"description": "11.2.1"
					},
					"ProcessVersion": {
						"value": "11.0",
						"attributes": {},
						"description": "11.0"
					},
					"ConvertToGrayscale": {
						"value": "False",
						"attributes": {},
						"description": "False"
					},
					"CameraProfile": {
						"value": "Adobe Standard",
						"attributes": {},
						"description": "Adobe Standard"
					},
					"LookTable": {
						"value": "E1095149FDB39D7A057BAB208837E2E1",
						"attributes": {},
						"description": "E1095149FDB39D7A057BAB208837E2E1"
					},
					"ToneCurvePV2012": {
						"value": [
							{
								"value": "0, 0",
								"attributes": {},
								"description": "0, 0"
							},
							{
								"value": "22, 16",
								"attributes": {},
								"description": "22, 16"
							},
							{
								"value": "40, 35",
								"attributes": {},
								"description": "40, 35"
							},
							{
								"value": "127, 127",
								"attributes": {},
								"description": "127, 127"
							},
							{
								"value": "224, 230",
								"attributes": {},
								"description": "224, 230"
							},
							{
								"value": "240, 246",
								"attributes": {},
								"description": "240, 246"
							},
							{
								"value": "255, 255",
								"attributes": {},
								"description": "255, 255"
							}
						],
						"attributes": {},
						"description": "0, 0, 22, 16, 40, 35, 127, 127, 224, 230, 240, 246, 255, 255"
					},
					"ToneCurvePV2012Red": {
						"value": [
							{
								"value": "0, 0",
								"attributes": {},
								"description": "0, 0"
							},
							{
								"value": "255, 255",
								"attributes": {},
								"description": "255, 255"
							}
						],
						"attributes": {},
						"description": "0, 0, 255, 255"
					},
					"ToneCurvePV2012Green": {
						"value": [
							{
								"value": "0, 0",
								"attributes": {},
								"description": "0, 0"
							},
							{
								"value": "255, 255",
								"attributes": {},
								"description": "255, 255"
							}
						],
						"attributes": {},
						"description": "0, 0, 255, 255"
					},
					"ToneCurvePV2012Blue": {
						"value": [
							{
								"value": "0, 0",
								"attributes": {},
								"description": "0, 0"
							},
							{
								"value": "255, 255",
								"attributes": {},
								"description": "255, 255"
							}
						],
						"attributes": {},
						"description": "0, 0, 255, 255"
					}
				},
				"attributes": {},
				"description": "Version: 11.2.1; ProcessVersion: 11.0; ConvertToGrayscale: False; CameraProfile: Adobe Standard; LookTable: E1095149FDB39D7A057BAB208837E2E1; ToneCurvePV2012: [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]; ToneCurvePV2012Red: [object Object],[object Object]; ToneCurvePV2012Green: [object Object],[object Object]; ToneCurvePV2012Blue: [object Object],[object Object]"
			}
		},
		"attributes": {},
		"description": "Name: Adobe Color; Amount: 1.000000; UUID: B952C231111CD8E0ECCF14B86BAA7077; SupportsAmount: false; SupportsMonochrome: false; SupportsOutputReferred: false; Group: [object Object]; Parameters: [object Object]"
	},
	"UUID": { "description": "F5F9A7C7C61A4308874AECBEBF1DC484" }
}

console.log(exifData)
const filename = 'TestingThisSite.jpg'

let filledTemplate

let metaData = meta(exifData, filename)
metaDataContainer.innerHTML = metaData
let settingsData = settings(exifData)
settingsDataContainer.innerHTML = settingsData
filledTemplate = template(exifData, filename)

