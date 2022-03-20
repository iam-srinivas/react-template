// A mock function to mimic making an async request for data
export function fetchCount(amount = 1, status = true) {
  return new Promise((resolve, reject) => {
    if (!status) {
      return setTimeout(() => reject(new Error("Induced Error"), 1000));
    }
    return setTimeout(() => resolve({ data: amount }), 500)
  }
  );
}
