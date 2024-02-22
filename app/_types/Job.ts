export type Job = {
  id: number
  name: string
  title: string
  start_date: Date
  end_date: Date
  description: string
}

export type BadRequest = {
  code: "bad_request";
  message: string;
}

export type JobsResponse =
    | (Omit<Response, "json"> & {
      status: 201;
      json: () => Job | PromiseLike<Job>;
    })
    | (Omit<Response, "json"> & {
      status: 400;
      json: () => BadRequest | PromiseLike<BadRequest>;
    });