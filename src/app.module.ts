import {Module} from '@nestjs/common';
import {ApplicationBootstrapOptions} from "./common/interfaces/application-bootstrap-options.interface";
import {CoreModule} from "./core/core.module";
import {AlarmsModule} from "./alarms/application/alarms.module";
import {AlarmsInfrastructureModule} from "./alarms/infrastructure/alarms-infrastructure.module";

@Module({
    imports: [],
    controllers: [],
    providers: [],
})
export class AppModule {
    static register(option: ApplicationBootstrapOptions) {
        return {
            module: AppModule,
            imports: [
                CoreModule.forRoot(option),
                AlarmsModule.withInfrastructure(
                    AlarmsInfrastructureModule.use(option.driver)
                )
            ]
        }
    }
}
