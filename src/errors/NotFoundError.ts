class NotFoundError extends Error {
  public notFoundError: boolean;

  constructor() {
    super("Not found!");
    this.notFoundError = true;
  }
}

/*
  try {
    throw new NotFoundError();
  } catch (e) {
    if (e instanceof NotFoundError) {
      
    }
  }
*/

export default NotFoundError;