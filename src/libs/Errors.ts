export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 302,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "something went wrong",
  NO_DATA_FOUND = "no data was found",
  CREATED_FAILED = "Create was failed",
  UPDATED_FAILED = "Update was failed",
  DELETED_FAILED = "Delete was failed",
  USED_NICK_PHONE = "You are inserting already used nick or phone",
  NO_MEMBER_NICK = "No member with that member nick",
  WORONG_PASSWORD = "Wrong password, please try again",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
