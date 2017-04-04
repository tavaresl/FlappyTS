import { Component } from './Component'

export class PlayerCharacter extends Component {

	constructor() {
		super()

		window.addEventListener('keyup', event => {
			if (event.keyCode == 32) {
				this.notify('jump', this)
			}
		})
	}
}