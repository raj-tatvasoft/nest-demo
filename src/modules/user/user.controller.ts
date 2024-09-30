import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";

let USER_DATAS = [
  {
    id: 1,
    name: "User 1",
  },
];

@Controller("user")
export class UserController {
  @Get()
  getAllUsers() {
    return USER_DATAS;
  }

  @Post()
  addUser(@Body() userData: any) {
    USER_DATAS.push(userData);
    return USER_DATAS;
  }

  @Put(":id")
  updateUser(@Body() userData: any, @Param("id", ParseIntPipe) id: number) {
    const userId = USER_DATAS.findIndex((x) => x.id === id);
    if (userId >= 0) {
      USER_DATAS[userId] = userData;
      return USER_DATAS;
    } else {
      return "no user found";
    }
  }

  @Delete(":id")
  deleteUser(@Param("id", ParseIntPipe) id: number) {
    USER_DATAS = USER_DATAS.filter((x) => x.id !== id);
    return USER_DATAS;
  }
}
