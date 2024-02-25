import {AlarmSeverity} from "../../../../domain/value-object/alarm-severity";
import {AlarmEntity} from "../alarm.entity";
import {Alarm} from "../../../../domain/alarm";

export class AlarmMapper {
    static toDomain(alarmEntity: AlarmEntity) {
        const alarmSeverity = new AlarmSeverity(
            alarmEntity.severity as AlarmSeverity['value']
        )

        return new Alarm(
            alarmEntity.id,
            alarmEntity.name,
            alarmSeverity
        )
    }

    static toPersistence(alarm: Alarm) {
        const alarmEntity = new AlarmEntity()

        alarmEntity.id = alarm.id
        alarmEntity.name = alarm.name
        alarmEntity.severity = alarm.severity.value

        return alarmEntity
    }
}