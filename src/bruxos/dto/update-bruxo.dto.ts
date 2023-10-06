import { PartialType } from '@nestjs/mapped-types';
import { CreateBruxoDto } from './create-bruxo.dto';

export class UpdateBruxoDto extends PartialType(CreateBruxoDto) {
    name: string;
    house: string;
    patrono: string;
}
