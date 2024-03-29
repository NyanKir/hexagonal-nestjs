import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AlarmEntity} from "./alarm.entity";
import {AlarmRepository} from "../../../application/ports/alarm.repository";
import {OrmAlarmRepository} from "./alarm.repository";

@Module({
    imports: [TypeOrmModule.forFeature([AlarmEntity])],
    providers: [
        {
            provide: AlarmRepository,
            useClass: OrmAlarmRepository
        }
    ],
    exports: [AlarmRepository]
})

export class OrmAlarmPersistenceModule {
}