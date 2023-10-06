import { PartialType } from '@nestjs/mapped-types';
import { CreateBruxoDto } from './create-bruxo.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateBruxoDto extends PartialType(CreateBruxoDto) {

    @IsNotEmpty()
    name: string;
    
    house: string;
    patrono: string;
}
