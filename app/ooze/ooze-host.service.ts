import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { OozeOutputService } from './ooze-output.service';

import 'rxjs/add/operator/map';

@Injectable()
export class OozeHostService {
	private ws:WebSocket = null;

	private host:string;
	private port:number;

	constructor(private http:Http, private out:OozeOutputService) {
		this.loadServerInfo();
	}

	private loadServerInfo() {
		this.http.get('json/server-info.json')
			.map( (res:Response) => res.json() )
			.subscribe(
				data => {
					this.host = data.ip;
					this.port = data.port;
					this.initWebSocket();
				},
				err => {
					console.log('server-info: "' + err.statusText + '", so trying default localhost.');
					this.host = '127.0.0.1';
					this.port = 9002;
					this.initWebSocket();
				}
			);
	}

	private initWebSocket() {
		this.ws = new WebSocket('ws://' + this.host + ':' + this.port);
		this.ws.onerror = (e) => { this.wserror(e); };
		this.ws.onopen = (e) => { this.wsopen(e); };
		this.ws.onmessage = (e) => { this.wsreceive(e); };
		this.ws.onclose = (e) => { this.wsclose(e); };
	}

	send(input:string) : boolean {
		try {
			if (input !== null && this.checkConnection()) {
				this.ws.send(input);
				return true;
			}
		} catch (err) {
			console.log(err);
		}

		return false;
	}

	checkConnection() : boolean {
		if (this.ws !== null) {

			switch (this.ws.readyState) {
			case WebSocket.prototype.OPEN:
				return true;
			case WebSocket.prototype.CONNECTING:
				return false;
			case WebSocket.prototype.CLOSING:
				setTimeout( () => this.initWebSocket(), 5000);
				return false;
			case WebSocket.prototype.CLOSED:
				this.initWebSocket();
				return this.checkConnection();
			}
		}
		return false;
	}

	private wserror(e:Event) {
		console.log(e);
	}

	private wsopen(e:Event) {
		this.out.add('WebSocket connection to ' + this.host + ' opened.');

//		let handshake:any = { "cmd" : "login", "arg" : this.name } ;
//		this.ws.send(JSON.stringify(handshake));
	}

	private wsreceive(e:MessageEvent) {
		if (e.data.length > 0) {
			this.out.add(e.data);
		}
	}

	private wsclose(e:CloseEvent) {
		console.log(e);
		this.out.add('WebSocket connection to ' + this.host + ' closed.');

//		if (this.ws.readyState === WebSocket.prototype.CLOSED) {
//			this.ws = null;
//		}
	}

}
