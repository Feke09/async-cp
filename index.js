async function iterateWithAsyncAwait(values) {
  for (let i = 0; i < values.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay of 1 second
    console.log(values[i]);
  }
}

const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

async function awaitCall() {
  try {
    // Simulating an API call with a delay
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ data: "API Response Data" }), 2000)
    );
    console.log("Fetched Data:", response.data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

awaitCall();

async function awaitCall() {
  try {
    // Simulating an API call with a delay
    const response = await new Promise((resolve, reject) =>
      setTimeout(() => reject("Failed to fetch data"), 2000)
    );
    console.log("Fetched Data:", response);
  } catch (error) {
    console.log("Error: Unable to fetch the data. Please try again later.");
  }
}

awaitCall();

async function asyncFunction1() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Function 1 complete");
      resolve();
    }, 1000)
  );
}

async function asyncFunction2() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Function 2 complete");
      resolve();
    }, 1000)
  );
}

async function asyncFunction3() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Function 3 complete");
      resolve();
    }, 1000)
  );
}

async function chainedAsyncFunctions() {
  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}

chainedAsyncFunctions();

async function concurrentRequests() {
  try {
    const apiCall1 = new Promise((resolve) =>
      setTimeout(() => resolve("API Response 1"), 1000)
    );
    const apiCall2 = new Promise((resolve) =>
      setTimeout(() => resolve("API Response 2"), 1500)
    );

    // Make both API calls concurrently
    const results = await Promise.all([apiCall1, apiCall2]);

    console.log("Combined Results:", results);
  } catch (error) {
    console.log("Error in concurrent requests:", error);
  }
}

concurrentRequests();

async function parallelCalls(urls) {
  try {
    const fetchPromises = urls.map(
      (url) =>
        // Simulating fetching data from each URL with a 2-second delay
        new Promise((resolve) =>
          setTimeout(() => resolve(`Response from ${url}`), 2000)
        )
    );

    // Wait for all fetches to complete
    const responses = await Promise.all(fetchPromises);

    console.log("All Responses:", responses);
  } catch (error) {
    console.log("Error during parallel calls:", error);
  }
}

const urls = [
  "https://api.example1.com",
  "https://api.example2.com",
  "https://api.example3.com",
];
parallelCalls(urls);
