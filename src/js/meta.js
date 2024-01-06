export default (exif, filename) => {
	return /* html */ `
	<h3>Metadata</h3>
	<span class="label">Filename</span>
	<div class="data">${filename}</div>
	<span class="label">Camera</span>
	<div class="data">${exif.Make ?? "Not available"} ${
		exif.Model ?? exif.Model ?? ""
	}</div>
	<span class="label">Lens</span>
	<div class="data">${exif.LensModel ?? exif.Lens ?? "Not available"}</div>
	<span class="label">Exposure Time</span>
	<div class="data">${
		"ExposureTime" in exif
			? `${
					exif.ExposureTime >= 1
						? exif.ExposureTime
						: "1/" + 1 / exif.ExposureTime
			  } s`
			: "Not available"
	}</div>
	<span class="label">Aperture</span>
	<div class="data">${exif.ApertureValue.toFixed(1) ?? "Not available"}</div>
	<span class="label">ISO</span>
	<div class="data">${exif.ISO ?? "Not available"}</div>
	<span class="label">Exposure Mode</span>
	<div class="data">${exif.ExposureMode ?? "Not available"}</div>
	<span class="label">Flash</span>
	<div class="data">${exif.Flash ?? "Not available"}</div>
	`
}

function sliderCell(label, sliderClass, value, min, max) {
	return /* html */ `
	<div class="cell slider-cell">
	${label}
	<div>
	<span class="value slider-value">${value}</span>
	<input
	type="range"
	class="slider ${sliderClass}"
	value="${value || 0}"
	min="${min}"
	max="${max}"
	disabled
	/>
	</div>
	</div>
	`
}

function colorGradingCell(label, sliderValue, hue, sat) {
	return /* html */ `
	<div class="color-grading-cell">
	${label}
    <div class="color-grading-circle" style="--hue: ${hue}deg; --sat: ${sat}">
      <div class="value-circle"></div>
      <div class="color-circle"></div>
    </div>
    <input
    type="range"
    class="slider slider-bw"
    value="${sliderValue || 0}"
    min="-100"
    max="100"
    disabled
    />
  </div>
	`
}

function renderToneCurves(curve, color) {
	let path = ""
	let points = ""
	for (let i = 0; i < curve.length - 1; i++) {
		const current = stringToXY(curve[i])
		const next = stringToXY(curve[i + 1])
		if (i == 0) {
			const nextplus = stringToXY(curve[i + 1])
			const c1 = [
				current[0] - (nextplus[1] - next[1]) / Math.PI,
				current[1] + (nextplus[0] - next[0]) / Math.PI
			]
			const c2 = [
				nextplus[0] - (nextplus[0] - next[0]) / Math.PI,
				nextplus[1] - (nextplus[1] - next[1]) / Math.PI
			]
			path += `M ${current.join(",")} C ${c1} ${c2} ${next.join(",")}`
		} else {
			const prev = stringToXY(curve[i - 1])
			const c1 = [
				current[0] + (current[0] - prev[0]) / Math.PI,
				current[1] + (current[1] - prev[1]) / Math.PI
			]
			const c2 = [
				next[0] - (next[0] - current[0]) / Math.PI,
				next[1] - (next[1] - current[1]) / Math.PI
			]
			path += `M ${current.join(",")} C ${c1} ${c2} ${next.join(",")} `
		}
	}
	curve.forEach(point => {
		const pos = stringToXY(point)
		points += `<circle cx="${pos[0]}" cy="${pos[1]}" r="3" fill="${color}" />`
	})
	return `<path d="${path}" stroke="${color}" stroke-width="1" fill="none" />${points}`
}

function stringToXY(input) {
	let vals = input.split(",").map(v => parseInt(v))
	vals[1] = 255 - vals[1]
	return vals
}

export function settings(exif) {
	return /* html */ `
	<h3>Settings</h3>
	<div class="block">
  <!-- image-metadata-extractor currently has an issue extracting RDF structs -->
	<!-- <span class="label">Look</span>
	  ${exif.Look ?? "Look not available"}
	  ${
			exif.Look?.Amount
				? sliderCell(
						"Amount",
						"slider-bw",
						Math.round(parseFloat(exif.Look?.Amount) * 100),
						0,
						200
				  )
				: ""
		} -->
	<span class="label">White Balance</span>
	${exif.WhiteBalance}
	${sliderCell(
		"Temp",
		"slider-temperature",
		exif.Temperature ?? exif.IncrementalTemperature,
		"Temperature" in exif ? 2000 : -100,
		"Temperature" in exif ? 50000 : 100
	)}
	${sliderCell(
		"Tint",
		"slider-tint",
		exif.Tint ?? exif.IncrementalTint,
		"Tint" in exif ? -150 : -100,
		"Tint" in exif ? 150 : 100
	)}
	</div>
	<div class="block">
  <span class="label">Basic Settings</span>
	${sliderCell("Exposure", "slider-bw", exif.Exposure2012, -5, +5)}
	${sliderCell("Contrast", "slider-bw", exif.Contrast2012, -100, +100)}
	${sliderCell("Highlights", "slider-bw", exif.Highlights2012, -100, +100)}
	${sliderCell("Shadows", "slider-bw", exif.Shadows2012, -100, +100)}
	${sliderCell("Whites", "slider-bw", exif.Whites2012, -100, +100)}
	${sliderCell("Blacks", "slider-bw", exif.Blacks2012, -100, +100)}
	</div>
	<div class="block">
	<span class="label">Presence</span>
	${sliderCell("Texture", "slider-bw", exif.Texture, -100, +100)}
	${sliderCell("Clarity", "slider-bw", exif.Clarity2012, -100, +100)}
	${sliderCell("Dehaze", "slider-bw", exif.Dehaze, -100, +100)}
	${sliderCell("Vibrance", "slider-bw", exif.Vibrance, -100, +100)}
	${sliderCell("Saturation", "slider-bw", exif.Saturation, -100, +100)}
	</div>
	<div class="block">
	<span class="label">Curves</span>
	<div>
	<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 255" class="curves">
	<rect width="102%" height="33%" x="-1%" y="33%" fill="none" stroke="#4c4c53" stroke-width="1" stroke-dasharray="4,4" />>
	<rect width="33%" height="102%" y="-1%" x="33%" fill="none" stroke="#4c4c53" stroke-width="1" stroke-dasharray="4,4" />
  ${renderToneCurves(exif.ToneCurvePV2012Red, "red")}
  ${renderToneCurves(exif.ToneCurvePV2012Green, "green")}
  ${renderToneCurves(exif.ToneCurvePV2012Blue, "blue")}
  ${renderToneCurves(exif.ToneCurvePV2012, "white")}
	</svg>
	</div>
	</div>
	<div class="block">
	<span class="label">HSL</span>
		<div class="hsl-values">
		Red
			<div class="value">H${exif.HueAdjustmentRed}</div>
			<div class="value">S${exif.SaturationAdjustmentRed}</div>
			<div class="value">L${exif.LuminanceAdjustmentRed}</div>
		Orange
			<div class="value">H${exif.HueAdjustmentOrange}</div>
			<div class="value">S${exif.SaturationAdjustmentOrange}</div>
			<div class="value">L${exif.LuminanceAdjustmentOrange}</div>
		Yellow
			<div class="value">H${exif.HueAdjustmentYellow}</div>
			<div class="value">S${exif.SaturationAdjustmentYellow}</div>
			<div class="value">L${exif.LuminanceAdjustmentYellow}</div>
		Green
			<div class="value">H${exif.HueAdjustmentGreen}</div>
			<div class="value">S${exif.SaturationAdjustmentGreen}</div>
			<div class="value">L${exif.LuminanceAdjustmentGreen}</div>
		Aqua
			<div class="value">H${exif.HueAdjustmentAqua}</div>
			<div class="value">S${exif.SaturationAdjustmentAqua}</div>
			<div class="value">L${exif.LuminanceAdjustmentAqua}</div>
		Blue
			<div class="value">H${exif.HueAdjustmentBlue}</div>
			<div class="value">S${exif.SaturationAdjustmentBlue}</div>
			<div class="value">L${exif.LuminanceAdjustmentBlue}</div>
		Purple
			<div class="value">H${exif.HueAdjustmentPurple}</div>
			<div class="value">S${exif.SaturationAdjustmentPurple}</div>
			<div class="value">L${exif.LuminanceAdjustmentPurple}</div>
		Magenta
			<div class="value">H${exif.HueAdjustmentMagenta}</div>
			<div class="value">S${exif.SaturationAdjustmentMagenta}</div>
			<div class="value">L${exif.LuminanceAdjustmentMagenta}</div>
		</div>
	</div>
	<div class="block">
	<span class="label">Split Toning</span>
	<span class="label">Shadows</span>
	${sliderCell("Hue", "slider-rainbow", exif.SplitToningShadowHue, 0, +100)}
	${sliderCell(
		"Saturation",
		"slider-blackred",
		exif.SplitToningShadowSaturation,
		0,
		+100
	)}
	<span class="label">Highlights</span>
	${sliderCell("Hue", "slider-rainbow", exif.SplitToningHighlightHue, -100, +100)}
	${sliderCell(
		"Saturation",
		"slider-blackred",
		exif.SplitToningHighlightSaturation,
		-100,
		+100
	)}
	<span class="label">Balance</span>
	${sliderCell("Balance", "slider-bw", exif.SplitToningBalance, -100, +100)}
	</div>
	<div class="block">
	<span class="label">Color Grading</span>
  <div class="row">
    ${
			exif.ColorGradeGlobalSat !== "0"
				? colorGradingCell(
						"Global",
						exif.ColorGradeGlobalLum ?? 0,
						exif.ColorGradeGlobalHue ?? 0,
						exif.ColorGradeGlobalSat ?? 0
				  )
				: ""
		}
    ${colorGradingCell(
			"Midtones",
			exif.ColorGradeMidtoneLum ?? 0,
			exif.ColorGradeMidtoneHue ?? 0,
			exif.ColorGradeMidtoneSat ?? 0
		)}
  </div>
  <div class="row">
    ${colorGradingCell(
			"Shadows",
			exif.ColorGradeShadowLum ?? 0,
			exif.ColorGradeShadowHue ?? 0,
			exif.ColorGradeShadowSat ?? 0
		)}
    ${colorGradingCell(
			"Highlights",
			exif.ColorGradeHighlightLum ?? 0,
			exif.ColorGradeHighlightHue ?? 0,
			exif.ColorGradeHighlightSat ?? 0
		)}
  </div>
  	${sliderCell(
			"Blending",
			"slider-bw",
			exif.ColorGradeBlending ?? 0,
			-100,
			+100
		)}
  	${sliderCell("Balance", "slider-bw", exif.ColorGradeBalance ?? 0, -100, +100)}
  </div>
	<div class="block">
	<span class="label">Details</span>
	<div class="cell">Sharpening</div>
	${sliderCell("Amount", "slider-blackred", exif.Sharpness, 0, 150)}
	${sliderCell("Radius", "slider-bw", exif.SharpenRadius, 0.0, 3.0)}
	${sliderCell("Detail", "slider-bw", exif.SharpenDetail, 0, 100)}
	${sliderCell("Masking", "slider-whiteblack", exif.SharpenEdgeMasking, 0, 100)}
	<div class="cell">Noise Reduction</div>
	<span class="label">Luminosity</span>
	${sliderCell("Amount", "slider-bw", exif.LuminanceSmoothing, 0, 100)}
	${
		exif.LuminanceNoiseReductionDetail
			? sliderCell(
					"Detail",
					"slider-bw",
					exif.LuminanceNoiseReductionDetail,
					0,
					100
			  )
			: ""
	}
	${
		exif.LuminanceNoiseReductionContrast
			? sliderCell(
					"Contrast",
					"slider-bw",
					exif.LuminanceNoiseReductionContrast,
					0,
					100
			  )
			: ""
	}
	<div class="cell">Color</div>
	<span class="label">Color</span>
	${
		"ColorNoiseReduction" in exif
			? sliderCell("Amount", "slider-bw", exif.ColorNoiseReduction, 0, 100)
			: ""
	}
	${
		"ColorNoiseReductionDetail" in exif
			? sliderCell(
					"Detail",
					"slider-bw",
					exif.ColorNoiseReductionDetail,
					0,
					100
			  )
			: ""
	}
	${
		"ColorNoiseReductionSmoothness" in exif
			? sliderCell(
					"Smoothness",
					"slider-bw",
					exif.ColorNoiseReductionSmoothness,
					0,
					100
			  )
			: ""
	}
	</div>
	<div class="block">
	<span class="label">Corrections</span>
		<div class="cell">Distortion <span>${
			exif.DistortionCorrectionAlreadyApplied
				? exif.DistortionCorrectionAlreadyApplied
				: "False"
		}</span></div>
		<div class="cell">Vignette <span>${
			exif.VignetteCorrectionAlreadyApplied
				? exif.VignetteCorrectionAlreadyApplied
				: "False"
		}</span></div>
		<div class="cell">CA <span>${
			exif.LateralChromaticAberrationCorrectionAlreadyApplied
				? exif.LateralChromaticAberrationCorrectionAlreadyApplied
				: "False"
		}</span></div>
		<div class="cell">Upright <span>${
			parseInt(exif.PerspectiveUpright) >= 1 ? "True" : "False"
		}</span></div>
	</div>
	<div class="block">
	<span class="label">Effects</span>
  <div class="cell">
  Lens Blur <span>${exif.LensBlur?.Active ? "True" : "False"}</span>
  </div>
	<div>
	<span class="label">Vignette</span>
	${
		exif.PostCropVignetteAmount
			? sliderCell(
					"Amount",
					"slider-bw",
					exif.PostCropVignetteAmount,
					-100,
					+100
			  )
			: ""
	}
	${
		exif.PostCropVignetteMidpoint
			? sliderCell(
					"Midpoint",
					"slider-bw",
					exif.PostCropVignetteMidpoint,
					0,
					100
			  )
			: ""
	}
	${
		exif.PostCropVignetteRoundness
			? sliderCell(
					"Roundness",
					"slider-bw",
					exif.PostCropVignetteRoundness,
					-100,
					+100
			  )
			: ""
	}
	${
		exif.PostCropVignetteFeather
			? sliderCell("Feather", "slider-bw", exif.PostCropVignetteFeather, 0, 100)
			: ""
	}
	${
		exif.PostCropVignetteHighlightContrast
			? sliderCell(
					"Highlights",
					"slider-bw",
					exif.PostCropVignetteHighlightContrast,
					0,
					100
			  )
			: ""
	}
	</div>
	<span class="label">Grain</span>
	${
		exif.GrainAmount
			? sliderCell("Amount", "slider-bw", exif.GrainAmount, 0, 100)
			: ""
	}
	${exif.GrainSize ? sliderCell("Size", "slider-bw", exif.GrainSize, 0, 100) : ""}
	${
		exif.GrainFrequency
			? sliderCell("Frequency", "slider-bw", exif.GrainFrequency, 0, 100)
			: ""
	}
	</div>
	<div class="block">
	<span class="label">Calibration</span>
	<div>
	${sliderCell("Shadow Tint", "slider-tint", exif.ShadowTint, -100, +100)}
	</div>
	<div>
	<span class="label">Red</span>
	${sliderCell("Hue", "slider-magentaorange", exif.RedHue, -100, +100)}
	${sliderCell("Saturation", "slider-blackred", exif.RedSaturation, -100, +100)}
	<span class="label">Green</span>
	${sliderCell("Hue", "slider-yellowaqua", exif.GreenHue, -100, +100)}
	${sliderCell(
		"Saturation",
		"slider-blackgreen",
		exif.GreenSaturation,
		-100,
		+100
	)}
	<span class="label">Blue</span>
	${sliderCell("Hue", "slider-aquapurple", exif.BlueHue, -100, +100)}
	${sliderCell("Saturation", "slider-blackblue", exif.BlueSaturation, -100, +100)}
	</div>
	`
}
