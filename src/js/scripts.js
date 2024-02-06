import { saveAs } from "file-saver"
import meta, { settings } from "./meta"
import * as exifreader from "exifreader"

const dropArea = document.querySelector("#drop")
const imageInput = document.querySelector("#image-input")
const disclaimer = document.querySelector(".disclaimer")
const resultContainer = document.querySelector(".result-container")
const retry = document.querySelector(".retry")
const download = document.querySelector(".download")
let link = document.querySelector(".download-link")
let headerImage = document.querySelector("#header-image")
let metaDataContainer = document.querySelector(".meta")
let settingsDataContainer = document.querySelector(".settings")

const imageReader = new FileReader()

let rawXMP
let filename
;["dragenter", "dragover"].forEach(eventName => {
	dropArea.addEventListener(eventName, addHighlight, false)
})
;["dragleave", "drop"].forEach(eventName => {
	dropArea.addEventListener(eventName, removeHighlight, false)
})
;["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
	dropArea.addEventListener(eventName, preventDefaults, false)
})

function preventDefaults(e) {
	e.preventDefault()
	e.stopPropagation()
}

imageInput.addEventListener("change", e => {
	processFile(e.target.files[0])
})

dropArea.addEventListener(
	"drop",
	e => processFile(e.dataTransfer.files[0]),
	false
)

retry.addEventListener(
	"click",
	() => {
		location.reload()
	},
	false
)

download.addEventListener("click", downloadPreset, false)

function addHighlight() {
	dropArea.classList.add("highlight")
}

function removeHighlight() {
	dropArea.classList.remove("highlight")
}

async function processFile(file) {
	try {
		dropArea.classList.add("loading")
		filename = file.name
		const result = await exifreader.load(file, { expanded: true })
		if (!result.xmp) throw new Error("XMP data is missing in EXIF");
    rawXMP = result.xmp._raw
		console.log(result)
		imageReader.readAsDataURL(file)
		metaDataContainer.innerHTML = meta(
			{ ...result.xmp, ...result.exif },
			filename
		)
		settingsDataContainer.innerHTML = settings({
			...result.xmp,
			...result.exif
		})
	} catch (err) {
		resultContainer.classList.remove("hidden")
		dropArea.classList.add("hidden")
    disclaimer.classList.add("hidden")
		resultContainer.innerHTML = /* html */ `<h3>Ouch, either no EXIF data to be found here or an issue.</h3>
		<br/>
    <p>Error Message:</p>
    <pre>${err}</pre>
		<br/>
		<a href="." class="button retry">Try another file ↻</a>`
		console.error(
			"There has been an issue reading necessary data. It is as follows: "
		)
		console.error(err)
	}
}

imageReader.onload = () => {
	dropArea.classList.add("hidden")
	disclaimer.classList.add("hidden")
	resultContainer.classList.remove("hidden")
	headerImage.style.background = `linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,1)) top center, url(${imageReader.result}) center`
	headerImage.style.backgroundSize = "cover, cover"
}

function downloadPreset() {
	let data = new Blob([rawXMP], { type: "application/rdf+xml" })
	saveAs(data, `${filename.replace(/\.\w*$/, "")}-light-detective.xmp`)
}
