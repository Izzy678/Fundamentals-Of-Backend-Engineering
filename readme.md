# POLLING DEMONSTRATION


**Polling** is a common communication technique utilized between a client and server. In this code snippet, the short polling method is demonstrated. Polling is mostly used during long-running tasks, such as uploading a large video file to the cloud or a server.

**How short Polling Works:**

Polling involves the following steps:

1. The client makes a request to complete a particular task (e.g., video uploading).
2. Once the request is sent to the server, the server responds back to the client with a *jobId*. This is to avoid the client from waiting to get the response of the request or job.
3. Consequently, the client sends that *jobId* back to the server to get the status of that task, whether it has been completed or not.
4. The server responds with status updates of the said task, and if it has completed, the client gets the original response of such task.

Polling is a useful technique for handling asynchronous tasks where the client needs to periodically check for completion status without blocking. It enables efficient resource utilization and a better user experience.

**How Long Polling Works:**
Long polling is basically no different as short polling, the only difference is that, you cannot get a status update of long running task unlike short polling where you get job status update. In long polling , the server will only deliver a response when the task or job assigned is completed.Long polling is more scalable than short polling as it is less chatty and its is used by *kafka*.


**Limitation of request/response architecure or design pattern:**
1.it is not ideal for notification on the backend
2.

**SSE(SERVER SENT EVENT):**
1.A response that has a start but no end
2.server sends logical events as part of response 
3.server never writes the end of the response
4.works with http.
**pros**
5.it real time and compatotble with htttp
**cons**
6.client must be online
7.clients might not be able to handle
8.polling is preferred for light clients
9.HTTP/1.1 problem(6 connecttions)