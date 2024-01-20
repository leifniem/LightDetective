export default (exif, filename) => {
	console.log(exif)
	return /* html */ `
	<h3>Metadata</h3>
	<span class="label">Filename</span>
	<div class="data">${filename}</div>
	<span class="label">Camera</span>
	<div class="data">${exif.Make?.value ?? "Not available"} ${
		exif.Model?.value ?? "Not available"
	}</div>
	<span class="label">Lens</span>
	<div class="data">${
		exif.LensModel?.value ?? exif.Lens?.value ?? "Not available"
	}</div>
	<span class="label">Exposure Time</span>
	<div class="data">${
		exif.ExposureTime?.description + "s" ?? "Not available"
	}</div>
	<span class="label">Aperture</span>
	<div class="data">${exif.ApertureValue?.description ?? "Not available"}</div>
	<span class="label">ISO</span>
	<div class="data">${exif.ISOSpeedRatings?.value ?? "Not available"}</div>
	<span class="label">Exposure Mode</span>
	<div class="data">${exif.ExposureMode?.value ?? "Not available"}</div>
	<span class="label">Flash</span>
	<div class="data">${exif.Flash?.value ?? "Not available"}</div>
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
		const current = stringToXY(curve[i]?.value)
		const next = stringToXY(curve[i + 1]?.value)
		if (i == 0) {
			const nextplus = stringToXY(curve[i + 1]?.value)
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
			const prev = stringToXY(curve[i - 1]?.value)
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
		points += `<circle cx="${point[0]}" cy="${point[1]}" r="3" fill="${color}" />`
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
	<span class="label">Look</span>
	  ${exif.Look.value.Name.value ?? "Look not available"}
	  ${
			exif.Look?.value.Amount?.value
				? sliderCell(
						"Amount",
						"slider-bw",
						Math.round(parseFloat(exif.Look?.value.Amount?.value) * 100),
						0,
						200
				  )
				: ""
		}
	<span class="label">White Balance</span>
	${sliderCell(
		"Temp",
		"slider-temperature",
		exif.Temperature?.value ?? exif.IncrementalTemperature?.value,
		"Temperature" in exif ? 2000 : -100,
		"Temperature" in exif ? 50000 : 100
	)}
	${sliderCell(
		"Tint",
		"slider-tint",
		exif.Tint?.value ?? exif.IncrementalTint?.value,
		"Tint" in exif ? -150 : -100,
		"Tint" in exif ? 150 : 100
	)}
	</div>
	<div class="block">
  <span class="label">Basic Settings</span>
	${sliderCell("Exposure", "slider-bw", exif.Exposure2012?.value, -5, +5)}
	${sliderCell("Contrast", "slider-bw", exif.Contrast2012?.value, -100, +100)}
	${sliderCell("Highlights", "slider-bw", exif.Highlights2012?.value, -100, +100)}
	${sliderCell("Shadows", "slider-bw", exif.Shadows2012?.value, -100, +100)}
	${sliderCell("Whites", "slider-bw", exif.Whites2012?.value, -100, +100)}
	${sliderCell("Blacks", "slider-bw", exif.Blacks2012?.value, -100, +100)}
	</div>
	<div class="block">
	<span class="label">Presence</span>
	${sliderCell("Texture", "slider-bw", exif.Texture?.value, -100, +100)}
	${sliderCell("Clarity", "slider-bw", exif.Clarity2012?.value, -100, +100)}
	${sliderCell("Dehaze", "slider-bw", exif.Dehaze?.value, -100, +100)}
	${sliderCell("Vibrance", "slider-bw", exif.Vibrance?.value, -100, +100)}
	${sliderCell("Saturation", "slider-bw", exif.Saturation?.value, -100, +100)}
	</div>
	<div class="block">
	<span class="label">Curves</span>
	<div>
	<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 255" class="curves">
	<rect width="102%" height="33%" x="-1%" y="33%" fill="none" stroke="#4c4c53" stroke-width="1" stroke-dasharray="4,4" />>
	<rect width="33%" height="102%" y="-1%" x="33%" fill="none" stroke="#4c4c53" stroke-width="1" stroke-dasharray="4,4" />
  ${renderToneCurves(exif.ToneCurvePV2012Red?.value, "red")}
  ${renderToneCurves(exif.ToneCurvePV2012Green?.value, "green")}
  ${renderToneCurves(exif.ToneCurvePV2012Blue?.value, "blue")}
  ${renderToneCurves(exif.ToneCurvePV2012?.value, "white")}
	</svg>
	</div>
	</div>
	<div class="block">
	<span class="label">HSL</span>
		<div class="hsl-values">
		Red
			<div class="value">H${exif.HueAdjustmentRed?.value}</div>
			<div class="value">S${exif.SaturationAdjustmentRed?.value}</div>
			<div class="value">L${exif.LuminanceAdjustmentRed?.value}</div>
		Orange
			<div class="value">H${exif.HueAdjustmentOrange?.value}</div>
			<div class="value">S${exif.SaturationAdjustmentOrange?.value}</div>
			<div class="value">L${exif.LuminanceAdjustmentOrange?.value}</div>
		Yellow
			<div class="value">H${exif.HueAdjustmentYellow?.value}</div>
			<div class="value">S${exif.SaturationAdjustmentYellow?.value}</div>
			<div class="value">L${exif.LuminanceAdjustmentYellow?.value}</div>
		Green
			<div class="value">H${exif.HueAdjustmentGreen?.value}</div>
			<div class="value">S${exif.SaturationAdjustmentGreen?.value}</div>
			<div class="value">L${exif.LuminanceAdjustmentGreen?.value}</div>
		Aqua
			<div class="value">H${exif.HueAdjustmentAqua?.value}</div>
			<div class="value">S${exif.SaturationAdjustmentAqua?.value}</div>
			<div class="value">L${exif.LuminanceAdjustmentAqua?.value}</div>
		Blue
			<div class="value">H${exif.HueAdjustmentBlue?.value}</div>
			<div class="value">S${exif.SaturationAdjustmentBlue?.value}</div>
			<div class="value">L${exif.LuminanceAdjustmentBlue?.value}</div>
		Purple
			<div class="value">H${exif.HueAdjustmentPurple?.value}</div>
			<div class="value">S${exif.SaturationAdjustmentPurple?.value}</div>
			<div class="value">L${exif.LuminanceAdjustmentPurple?.value}</div>
		Magenta
			<div class="value">H${exif.HueAdjustmentMagenta?.value}</div>
			<div class="value">S${exif.SaturationAdjustmentMagenta?.value}</div>
			<div class="value">L${exif.LuminanceAdjustmentMagenta?.value}</div>
		</div>
	</div>
	<div class="block">
	<span class="label">Split Toning</span>
	<span class="label">Shadows</span>
	${sliderCell(
		"Hue",
		"slider-rainbow",
		exif.SplitToningShadowHue?.value,
		0,
		+100
	)}
	${sliderCell(
		"Saturation",
		"slider-blackred",
		exif.SplitToningShadowSaturation?.value,
		0,
		+100
	)}
	<span class="label">Highlights</span>
	${sliderCell(
		"Hue",
		"slider-rainbow",
		exif.SplitToningHighlightHue?.value,
		-100,
		+100
	)}
	${sliderCell(
		"Saturation",
		"slider-blackred",
		exif.SplitToningHighlightSaturation?.value,
		-100,
		+100
	)}
	<span class="label">Balance</span>
	${sliderCell(
		"Balance",
		"slider-bw",
		exif.SplitToningBalance?.value,
		-100,
		+100
	)}
	</div>
	<div class="block">
	<span class="label">Color Grading</span>
  <div class="row">
    ${
			exif.ColorGradeGlobalSat?.value !== "0"
				? colorGradingCell(
						"Global",
						exif.ColorGradeGlobalLum?.value ?? 0,
						exif.ColorGradeGlobalHue?.value ?? 0,
						exif.ColorGradeGlobalSat?.value ?? 0
				  )
				: ""
		}
    ${colorGradingCell(
			"Midtones",
			exif.ColorGradeMidtoneLum?.value ?? 0,
			exif.ColorGradeMidtoneHue?.value ?? 0,
			exif.ColorGradeMidtoneSat?.value ?? 0
		)}
  </div>
  <div class="row">
    ${colorGradingCell(
			"Shadows",
			exif.ColorGradeShadowLum?.value ?? 0,
			exif.ColorGradeShadowHue?.value ?? 0,
			exif.ColorGradeShadowSat?.value ?? 0
		)}
    ${colorGradingCell(
			"Highlights",
			exif.ColorGradeHighlightLum?.value ?? 0,
			exif.ColorGradeHighlightHue?.value ?? 0,
			exif.ColorGradeHighlightSat?.value ?? 0
		)}
  </div>
  	${sliderCell(
			"Blending",
			"slider-bw",
			exif.ColorGradeBlending?.value ?? 0,
			0,
			+100
		)}
  	${sliderCell(
			"Balance",
			"slider-bw",
			exif.ColorGradeBalance?.value ?? 0,
			-100,
			+100
		)}
  </div>
	<div class="block">
	<span class="label">Details</span>
	<div class="cell">Sharpening</div>
	${sliderCell("Amount", "slider-blackred", exif.Sharpness?.value, 0, 150)}
	${sliderCell("Radius", "slider-bw", exif.SharpenRadius?.value, 0.0, 3.0)}
	${sliderCell("Detail", "slider-bw", exif.SharpenDetail?.value, 0, 100)}
	${sliderCell(
		"Masking",
		"slider-whiteblack",
		exif.SharpenEdgeMasking?.value,
		0,
		100
	)}
	<div class="cell">Noise Reduction</div>
	<span class="label">Luminosity</span>
	${sliderCell("Amount", "slider-bw", exif.LuminanceSmoothing?.value, 0, 100)}
	${
		exif.LuminanceNoiseReductionDetail?.value
			? sliderCell(
					"Detail",
					"slider-bw",
					exif.LuminanceNoiseReductionDetail?.value,
					0,
					100
			  )
			: ""
	}
	${
		exif.LuminanceNoiseReductionContrast?.value
			? sliderCell(
					"Contrast",
					"slider-bw",
					exif.LuminanceNoiseReductionContrast?.value,
					0,
					100
			  )
			: ""
	}
	<div class="cell">Color</div>
	<span class="label">Color</span>
	${
		"ColorNoiseReduction" in exif
			? sliderCell(
					"Amount",
					"slider-bw",
					exif.ColorNoiseReduction?.value,
					0,
					100
			  )
			: ""
	}
	${
		"ColorNoiseReductionDetail" in exif
			? sliderCell(
					"Detail",
					"slider-bw",
					exif.ColorNoiseReductionDetail?.value,
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
					exif.ColorNoiseReductionSmoothness?.value,
					0,
					100
			  )
			: ""
	}
	</div>
	<div class="block">
	<span class="label">Corrections</span>
		<div class="cell">Distortion <span>${
			exif.DistortionCorrectionAlreadyApplied?.value
				? exif.DistortionCorrectionAlreadyApplied?.value
				: "False"
		}</span></div>
		<div class="cell">Vignette <span>${
			exif.VignetteCorrectionAlreadyApplied?.value
				? exif.VignetteCorrectionAlreadyApplied?.value
				: "False"
		}</span></div>
		<div class="cell">CA <span>${
			exif.LateralChromaticAberrationCorrectionAlreadyApplied?.value
				? exif.LateralChromaticAberrationCorrectionAlreadyApplied?.value
				: "False"
		}</span></div>
		<div class="cell">Upright <span>${
			parseInt(exif.PerspectiveUpright?.value) >= 1 ? "True" : "False"
		}</span></div>
	</div>
	<div class="block">
	<span class="label">Effects</span>
  <div class="cell">
  Lens Blur <span>${exif.LensBlur?.value?.Active ? "True" : "False"}</span>
  </div>
	<div>
	<span class="label">Vignette</span>
	${
		exif.PostCropVignetteAmount?.value
			? sliderCell(
					"Amount",
					"slider-bw",
					exif.PostCropVignetteAmount?.value,
					-100,
					+100
			  )
			: ""
	}
	${
		exif.PostCropVignetteMidpoint?.value
			? sliderCell(
					"Midpoint",
					"slider-bw",
					exif.PostCropVignetteMidpoint?.value,
					0,
					100
			  )
			: ""
	}
	${
		exif.PostCropVignetteRoundness?.value
			? sliderCell(
					"Roundness",
					"slider-bw",
					exif.PostCropVignetteRoundness?.value,
					-100,
					+100
			  )
			: ""
	}
	${
		exif.PostCropVignetteFeather?.value
			? sliderCell(
					"Feather",
					"slider-bw",
					exif.PostCropVignetteFeather?.value,
					0,
					100
			  )
			: ""
	}
	${
		exif.PostCropVignetteHighlightContrast?.value
			? sliderCell(
					"Highlights",
					"slider-bw",
					exif.PostCropVignetteHighlightContrast?.value,
					0,
					100
			  )
			: ""
	}
	</div>
	<span class="label">Grain</span>
	${
		exif.GrainAmount?.value
			? sliderCell("Amount", "slider-bw", exif.GrainAmount?.value, 0, 100)
			: ""
	}
	${
		exif.GrainSize?.value
			? sliderCell("Size", "slider-bw", exif.GrainSize?.value, 0, 100)
			: ""
	}
	${
		exif.GrainFrequency?.value
			? sliderCell("Frequency", "slider-bw", exif.GrainFrequency?.value, 0, 100)
			: ""
	}
	</div>
	<div class="block">
	<span class="label">Calibration</span>
	<div>
	${sliderCell("Shadow Tint", "slider-tint", exif.ShadowTint?.value, -100, +100)}
	</div>
	<div>
	<span class="label">Red</span>
	${sliderCell("Hue", "slider-magentaorange", exif.RedHue?.value, -100, +100)}
	${sliderCell(
		"Saturation",
		"slider-blackred",
		exif.RedSaturation?.value,
		-100,
		+100
	)}
	<span class="label">Green</span>
	${sliderCell("Hue", "slider-yellowaqua", exif.GreenHue?.value, -100, +100)}
	${sliderCell(
		"Saturation",
		"slider-blackgreen",
		exif.GreenSaturation?.value,
		-100,
		+100
	)}
	<span class="label">Blue</span>
	${sliderCell("Hue", "slider-aquapurple", exif.BlueHue?.value, -100, +100)}
	${sliderCell(
		"Saturation",
		"slider-blackblue",
		exif.BlueSaturation?.value,
		-100,
		+100
	)}
	</div>
	`
}
