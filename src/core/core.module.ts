import {Module} from '@nestjs/common';
import {ApplicationBootstrapOptions} from "../common/interfaces/application-bootstrap-options.interface";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({})
export class CoreModule {
    static forRoot({driver}: ApplicationBootstrapOptions) {
        const imports = driver === 'orm' ?
            [
                TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: '123321',
                    autoLoadEntities: true,
                    synchronize: true,
                })
            ]
            : []
        return {
            module: CoreModule,
            imports
        }
    }
}
