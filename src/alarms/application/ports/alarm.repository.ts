import {Alarm} from "../../domain/alarm";

export abstract class AlarmRepository {
    abstract findAll(): Promise<Array<Alarm>>
    abstract create(alarm: Alarm): Promise<Alarm>
}