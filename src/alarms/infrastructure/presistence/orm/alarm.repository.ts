import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {AlarmRepository} from "../../../application/ports/alarm.repository";
import {Alarm} from "../../../domain/alarm";
import {AlarmEntity} from "./alarm.entity";
import {Repository} from "typeorm";
import {AlarmMapper} from "./mappers/alarm.mapper";

@Injectable()
export class OrmAlarmRepository implements AlarmRepository {
    constructor(
        @InjectRepository(AlarmEntity)
        private readonly alarmRepository: Repository<AlarmEntity>
    ) {
    }

    async create(alarm: Alarm): Promise<Alarm> {
        const persistence = AlarmMapper.toPersistence(alarm)
        const entity = await this.alarmRepository.create(persistence);
        return AlarmMapper.toDomain(entity)
    }

    async findAll(): Promise<Array<Alarm>> {
        const entities = await this.alarmRepository.find();
        return entities.map((item) => AlarmMapper.toDomain(item))
    }

}