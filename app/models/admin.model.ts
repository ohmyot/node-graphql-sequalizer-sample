import { Table, Column, Model } from "sequelize-typescript";
import {DataType, PrimaryKey} from 'sequelize-typescript';

@Table({
  tableName: "admin",
  timestamps: false
})
export class Admin extends Model<Admin> {
  @PrimaryKey
  @Column(DataType.TEXT)
  userId!: string;
}
