import {Injectable} from "@nestjs/common";
import {AlarmRepository} from "../../../application/ports/alarm.repository";
import {Alarm} from "../../../domain/alarm";
import {AlarmEntity} from "./alarm.entity";
import {AlarmMapper} from "./mappers/alarm.mapper";

@Injectable()
export class InMemoryAlarmRepository implements AlarmRepository {
    private readonly alarms = new Map<string, AlarmEntity>

    constructor() {
    }

    async create(alarm: Alarm): Promise<Alarm> {
        const persistence = AlarmMapper.toPersistence(alarm)
        this.alarms.set(persistence.id, persistence);
        const entity = this.alarms.get(persistence.id);
        return AlarmMapper.toDomain(entity)
    }

    async findAll(): Promise<Array<Alarm>> {
        const entities = Array.from(this.alarms.values())
        return entities.map((item) => AlarmMapper.toDomain(item))
    }

}