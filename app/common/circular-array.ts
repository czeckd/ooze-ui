export class CircularArray {

	private static cmax:number;

	private carr:Array<any> = [];
	private cidx:number = -1;
	private ctop:number = 0;

	constructor(max:number) {
		CircularArray.cmax = max;
	}

	push(str:any) : number {
		this.cidx += 1;
		if (this.cidx >= CircularArray.cmax) {
			this.cidx = 0;
		}

		if (this.carr.length >= CircularArray.cmax) {
			this.ctop = this.cidx + 1;
			if (this.ctop >= CircularArray.cmax) {
				this.ctop = 0;
			}
		}
		this.carr[this.cidx] = str;

		return this.cidx;
	}

	length() : number {
		return this.carr.length;
	}

	position() : number {
		return this.cidx;
	}

	max() : number {
		return CircularArray.cmax;
	}

	get(i:number) : any {
		if (i >= 0 && i <= CircularArray.cmax) {
			return this.carr[i];
		}
		return undefined;
	}

	join(token = ',') : string {
		let front:Array<any> = this.carr.slice(this.ctop);
		let back:Array<any> = this.carr.slice(0, this.ctop);

		let joinBack:Function = function (bk:Array<any>, tok:string) : string {
			if (bk.length > 0) {
				return tok.concat(bk.join(tok));
			}
			return '';
		};

		return front.join(token) + joinBack(back, token);
	}

	list() : Array<any> {
		let front:Array<any> = this.carr.slice(this.ctop);
		let back:Array<any> = this.carr.slice(0, this.ctop);
		return front.concat(back);
	}
}
