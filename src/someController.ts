import {
  Controller,
  Get,
  Route,
} from "tsoa";

@Route("test")
export class SomeController extends Controller {

  @Get()
  public async getValue() {
    const a: number = 5
    return a
  }
}