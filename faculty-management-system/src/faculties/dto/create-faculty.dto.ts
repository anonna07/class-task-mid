import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateFacultyDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    expertise: string;

    @IsNumber()
    @Min(0)
    noOfPublication: number;
}