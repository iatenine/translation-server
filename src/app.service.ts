import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getTranslation(original: String, iterations: number): Promise<object> {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log(res);

      const body: object = await res.json();
      return body;
    } catch (err) {
      return err;
    }
  }
}
