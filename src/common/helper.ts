import { HttpStatus } from "@nestjs/common";

export const apiResponse = <T = unknown>(
  data: T,
  statusCode: number = HttpStatus.OK,
  messages: string | string[] = "",
) => {
  return {
    statusCode,
    data,
    messages: messages ? (Array.isArray(messages) ? messages : [messages]) : "",
  };
};
