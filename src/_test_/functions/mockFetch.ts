const userDataResponse = {
  data: {
    email: "test@mail.com",
    id: 1,
    name: "test",
    phone: "1-770-736-8031 x56442",
    username: "test",
    website: "test.com",
  },
};

export default async function mockFetch(url: string) {
  switch (url) {
    case process.env.REACT_APP_BASE_URL: {
      return {
        ok: true,
        status: 200,
        json: async () => userDataResponse,
      };
    }

    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}
