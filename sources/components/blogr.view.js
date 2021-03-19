class BlogrView {
	constructor() {
		this.GUI = {
			hamburger: document.getElementById('hamburger'),
			cross: document.getElementById('cross'),
			dropdownMobile: document.getElementById('dropdownMobile'),
			productAction: document.getElementById('productAction'),
			productList: document.getElementById('productList'),
			companyAction: document.getElementById('companyAction'),
			companyList: document.getElementById('companyList'),
			connectAction: document.getElementById('connectAction'),
			connectList: document.getElementById('connectList'),
		};
		this.states = {
			product: false,
			company: false,
			connect: false,
		};
	}

	//... Global

	initListeners = () => {
		this.GUI.hamburger.addEventListener('click', this._openDropdown);
		this.GUI.cross.addEventListener('click', this._closeDropdown);
		this.GUI.productAction.addEventListener('click', this._productControl);
		this.GUI.companyAction.addEventListener('click', this._companyControl);
		this.GUI.connectAction.addEventListener('click', this._connectControl);
	};

	//... Private of Listeners

	_closeDropdown = () => {
		this._hamburgerVisible();
		this._crossHidden();
		this._dropdownMobileHidden();
	};

	_openDropdown = () => {
		this._hamburgerHidden();
		this._crossVisible();
		this._dropdownMobileVisible();
	};

	_productControl = () => {
		this.states.product ? this._productHidden() : this._productVisible();
		this.states.product = !this.states.product;
	};

	_companyControl = () => {
		this.states.company ? this._companyHidden() : this._companyVisible();
		this.states.company = !this.states.company;
	};

	_connectControl = () => {
		this.states.connect ? this._connectHidden() : this._connectVisible();
		this.states.connect = !this.states.connect;
	};

	//... Private of Methods

	_hamburgerVisible = () => {
		this.GUI.hamburger.style.display = 'block';
		window.requestAnimationFrame(() => {
			this.GUI.hamburger.style.opacity = '1';
			this.GUI.hamburger.style.transform = 'translateX(0)';
		});
	};

	_hamburgerHidden = () => {
		this.GUI.hamburger.style.display = 'none';
		window.requestAnimationFrame(() => {
			this.GUI.hamburger.style.opacity = '0';
			this.GUI.hamburger.style.transform = 'translateX(-30px)';
		});
	};

	_crossHidden = () => {
		this.GUI.cross.style.display = 'none';
		window.requestAnimationFrame(() => {
			this.GUI.cross.style.opacity = '0';
			this.GUI.cross.style.transform = 'translateX(-30px)';
		});
	};

	_crossVisible = () => {
		this.GUI.cross.style.display = 'block';
		window.requestAnimationFrame(() => {
			this.GUI.cross.style.opacity = '1';
			this.GUI.cross.style.transform = 'translateX(0)';
		});
	};

	_dropdownMobileHidden = () => {
		this.GUI.dropdownMobile.style.transform = 'translateX(-30px)';
		this.GUI.dropdownMobile.style.opacity = '0';
		this.GUI.dropdownMobile.style.pointerEvents = 'none';
	};

	_dropdownMobileVisible = () => {
		this.GUI.dropdownMobile.style.transform = 'translateX(0)';
		this.GUI.dropdownMobile.style.opacity = '1';
		this.GUI.dropdownMobile.style.pointerEvents = 'all';
	};

	_productHidden = () => {
		this.GUI.productList.style.display = 'none';
		this.GUI.productAction.classList.remove('none');
	};

	_productVisible = () => {
		this.GUI.productList.style.display = 'block';
		this.GUI.productAction.classList.add('none');
	};

	_companyHidden = () => {
		this.GUI.companyList.style.display = 'none';
		this.GUI.companyAction.classList.remove('none');
	};

	_companyVisible = () => {
		this.GUI.companyList.style.display = 'block';
		this.GUI.companyAction.classList.add('none');
	};

	_connectHidden = () => {
		this.GUI.connectList.style.display = 'none';
		this.GUI.connectAction.classList.remove('none');
	};

	_connectVisible = () => {
		this.GUI.connectList.style.display = 'block';
		this.GUI.connectAction.classList.add('none');
	};
}
