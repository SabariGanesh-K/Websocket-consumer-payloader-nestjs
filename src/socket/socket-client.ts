import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:3000');
  }

  onModuleInit() {
    this.registerConsumerEVents();
  }

  private registerConsumerEVents() {
    // this.socketClient.emit('onMessage', {
    //   msg: 'hello from consumer',
    //   content: 'Hello from consumer',
    // });
    this.socketClient.on('connect', () => {
      console.log('Connected to gateway');
    });
    this.socketClient.on('onMessage', (payload: any) => {
      console.log('reccieved data');
      console.log(payload);
    });
  }
}
