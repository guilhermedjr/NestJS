import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { Customer } from '../../models/customer.model';
import { CreateCustomerDto } from '../../dtos/create-customer-dto';
import { Result } from '../../models/result.model';

@Controller('v1/customers')
export class CustomerController {
    @Get()
    get() {
        return new Result(null, true, {}, null);
    }

    @Get(':document')
    getById(@Param('document') document : string) {
        return new Result(null, true, {}, null);
    }

    @Post()
    //@UseInterceptors(new ValidatorInterceptor(''))
    post(@Body() body : CreateCustomerDto) {
       return new Result('Cliente cadastrado com sucesso!', true, body, null);
    }

    @Patch(':document')
    patch(@Param('document') document, @Body() body) {
       return new Result('Cliente atualizado com sucesso!', true, body, null);
    }

    @Delete(':document')
    delete(@Param('document') document) {
      return new Result('Cliente excluído com sucesso!', true, null, null);
    }
}
