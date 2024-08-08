
import { Transform } from "class-transformer";
import { TransformFnParams } from "class-transformer/types/interfaces";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: "tb_produtos" })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @Transform(({ value }: TransformFnParams) => value?.trim())
    nome: string;

    @IsNotEmpty()
    @Column({ length: 255, nullable: true })
    @Transform(({ value }: TransformFnParams) => value?.trim())
    tamanho: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 6, scale: 2 })
    preco: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: true })
    @Transform(({ value }: TransformFnParams) => value?.trim())
    descricao: string;

    @IsNotEmpty()
    @Column({ length: 500, nullable: true })
    @Transform(({ value }: TransformFnParams) => value?.trim())
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria
}