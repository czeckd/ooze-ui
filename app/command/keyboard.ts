export class Keyboard {

	static getKey(event:KeyboardEvent) : string {
		// Parse the key
		let key:string = event.key;	// Firefox and IE
		if (key === undefined) {
			// First check for special keys
			if ((event['keyIdentifier'] !== undefined) && (event['keyIdentifier'].substring(0, 2) !== 'U+')) {
				if (event['code']) {
					key = event['code']; // Chrome
				} else {
					key = event['keyIdentifier'];	// Safari
				}
			} else {
				key = String.fromCharCode(event.keyCode);
				if (event.keyCode === 8) {
					key = 'Backspace';
				}
			}
		}
		return key;
	}
}
