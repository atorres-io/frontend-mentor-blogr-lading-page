class BlogrView {
	constructor() {
		this.GUI = {
			root: document.getElementById('root'),
			hamburger: document.getElementById('hamburger'),
			cross: document.getElementById('cross'),
			dropdownMobile: document.getElementById('dropdownMobile'),
		};
	}

	initListeners = () => {
		this.GUI.hamburger.addEventListener('click', this._openMobileNav, false);
		this.GUI.cross.addEventListener('click', this._closeMobileNav, false);
	};

	_openMobileNav = () => {
		this.GUI.root.classList.add('element__disabled');
		this.GUI.dropdownMobile.style.clipPath = 'circle(150% at 100% 0)';
		this.GUI.dropdownMobile.classList.remove('element__disabled');
	};

	_closeMobileNav = () => {
		this.GUI.root.classList.remove('element__disabled');
		this.GUI.dropdownMobile.style.clipPath = 'circle(0% at 100% 0)';
		this.GUI.dropdownMobile.classList.add('element__disabled');
	};
}
