import { IsNotEmpty } from "class-validator";

export class CreateBruxoDto {
    @IsNotEmpty({
        message: "Propriedade nome é obrigatório"
    })
    name: string;

    house: string;
    patrono: string;
}
