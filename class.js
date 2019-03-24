
class domPos {
	constructor() {
		this.x = 100;
		this.y = 150;
	}
}

class fly extends domPos {

	constructor(options) {
		super();
		this.color = options.color;
		this.chr = options.chr;
		this.elm2;
	}

	get upper() {
		this.chr = this.chr.toUpperCase();	
	}	 

	createFlyer() { 
		let elm = document.createElement("div");
		elm.style.width = "50px";
		elm.style.height = "50px";
		elm.style.border = "1px solid " + this.color;
		elm.style.position = "absolute";
		elm.style.borderRadius = "50%";
		elm.style.paddingTop = "13px";
		elm.style.boxSizing = "border-box";
		elm.style.textAlign = "center";	
		elm.style.left = this.x + "px";		
		elm.style.top = this.y + "px";
		elm.innerText = this.chr;
		this.elm2 = elm;		
		document.querySelector("body").appendChild(elm);
	}
	
	fly() {
		setTimeout(() => {
			 
			this.elm2.style.left = Math.floor(Math.random() * 400)+"px";
		this.elm2.style.top = Math.floor(Math.random() * 400)+"px";
		this.fly();
		}, 1000)
		
	}

}