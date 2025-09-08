import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PaymentEntity } from './entities/payment.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Payments')
@ApiBearerAuth()
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get('/success')
  success() {
    return 'Success';
  }

  @Get('/failure')
  failure() {
    return 'Failure';
  }

  @Get('/pending')
  pending() {
    return 'Pending';
  }

  @Post('/webhook')
  webhook(@Body() mpPayloadDto: any) {
    return this.paymentsService.webhook(mpPayloadDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: PaymentEntity })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOkResponse({ type: PaymentEntity, isArray: true })
  findAll() {
    return this.paymentsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOkResponse({ type: PaymentEntity })
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOkResponse({ type: PaymentEntity })
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(id, updatePaymentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOkResponse({ type: PaymentEntity })
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(id);
  }
}
