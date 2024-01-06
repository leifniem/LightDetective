import { saveAs } from "file-saver"
import meta, { settings } from "./meta"
import { readFile, parseResult } from "image-info-extractor"

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
		imageReader.readAsDataURL(file)
		const raw = await readFile(file)
		const parsed = await parseResult(raw)
		const td = new TextDecoder()
		rawXMP = td.decode(parsed.XMP.content)
		console.log(parsed)
		const exif = {
			...parsed.EXIF.parsed.tiff,
			...parsed.EXIF.parsed.exif,
			...parsed.XMP.parsed.xmp,
			...parsed.XMP.parsed.crs,
			...parsed.XMP.parsed.rdf
		}
		metaDataContainer.innerHTML = meta(exif, filename)
		settingsDataContainer.innerHTML = settings(exif)
	} catch (err) {
		console.error(
			"There has been an issue reading necessary data. It is as follows: "
		)
		console.error(err)
		resultContainer.innerHTML = `<h3>Ouch, either no EXIF data to be found here or an issue.</h3>
		<br/>
		<a href="." class="button retry">Try another file ↻</a>`
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
