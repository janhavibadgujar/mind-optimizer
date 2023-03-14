import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PusherService {
    private pusherClient!: Pusher;
    env: any = environment;
    constructor(){
        this.pusherClient = new Pusher(this.env.pusherKey, { cluster: 'ap2' });
    }

    getPusherClient() {
        return this.pusherClient;
    }

    subscribe(channel:any) {
        return this.pusherClient.subscribe(channel);
    }

    unsubscribe(channel:any){
        return this.pusherClient.unsubscribe(channel);
    }
}