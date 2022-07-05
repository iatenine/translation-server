import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class TranslationService {
  constructor(private readonly httpService: HttpService) {}

  async getTranslation(original: String, iterations: number): Promise<object> {
    try {
      const res = await this.httpService.get(
        'https://jsonplaceholder.typdddicode.com/todos',
      );
      return res.pipe(map((response) => response.data));
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
