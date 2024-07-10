export default function HandleError(error) {
    for (const key in error) {
      if (Object.hasOwnProperty.call(error, key)) {
        const element = error["response"];
        return { message: element?.data?.message, status: element?.status };
      }
    }
  }
  