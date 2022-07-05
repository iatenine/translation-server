import { Controller, Get } from '@nestjs/common';
import { TranslationService } from './translation.service';

@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get()
  getTranslate(): object {
    return this.translationService.getTranslation('', 0);
  }
}
