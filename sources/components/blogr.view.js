class BlogrView {
	constructor() {
		this.GUI = {
			hamburger: document.getElementById('hamburger'),
			dropdownMobile: document.getElementById('dropdownMobile'),
		};
		this.state = false;
	}

	initListeners = () => {
		this.GUI.hamburger.addEventListener(
			'click',
			this.changeStateNavMobile,
			false
		);
	};

	changeStateNavMobile = () => {
		this.state ? this._closeDropdown() : this._openDropdown();
	};

	_closeDropdown = () => {
		this.GUI.hamburger.src = 'assets/images/icon-hamburger.svg';
		this.GUI.dropdownMobile.classList.add('element--disabled');

		this.state = !this.state;
	};

	_openDropdown = () => {
		this.GUI.hamburger.src = 'assets/images/icon-close.svg';
		this.GUI.dropdownMobile.classList.remove('element--disabled');

		this.state = !this.state;
	};
}
