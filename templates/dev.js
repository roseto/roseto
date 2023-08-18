// We use this file to test the translation

const data = {
	name: "John Doe",
	avatar: "https://ui-avatars.com/api/?background=random",
	socials: `
		<a href="https://github.com/linustorvalds" target="_blank">
			<img width="32" height="32" src="https://cdn.simpleicons.org/github/ffffff/000000" alt="Github" />
		</a>
	`
}

const translate = (dom, data) => {
	const regex = /{@(\w+)}/g
	const matches = dom.match(regex)
	if (matches) {
		matches.forEach(match => {
			const property = match.replace("{@", "").replace("}", "")
			const value = data[property]
			dom = dom.replace(match, value)
		})
	}
	return dom
}

// Translate the dom
const translated = translate(document.body.innerHTML, data)

// Render the dom
document.body.innerHTML = translated
