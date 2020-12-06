import { Controller, Get, Param } from '@nestjs/common';

@Controller('company')
export class CompanyController {
  @Get()
  companyGet(@Param('id') companyId: string) {
    return `my company ${companyId}`;
  }
}
