import {Module} from "@nestjs/common";
import {OrmAlarmPersistenceModule} from "./presistence/orm/orm-persistence";
import {InMemoryAlarmPersistenceModule} from "./presistence/in-memory/in-memory-persistence";

@Module({})
export class AlarmsInfrastructureModule {
    static use(driver: 'orm' | 'in-memory') {
        const module = driver === 'orm' ? OrmAlarmPersistenceModule : InMemoryAlarmPersistenceModule
        return {
            module: AlarmsInfrastructureModule,
            exports: [module],
            imports: [module]
        }
    }
}