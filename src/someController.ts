import {
  Controller,
  Get,
  Route,
} from "tsoa";

@Route("test")
export class SomeController extends Controller {

  @Get()
  public async getValue() {

    /*
     * @isInt
     * @tsoaModel
     */
    type Int = number

    const a: Int = 5
    return a
  }
}