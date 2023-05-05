///Async Generator Function
///
///Generated Async Data

Stream<int> boatStream() async* {
  for (int i = 1; i <= 10; i++) {
    print("Sent Boat: " + i.toString());
    await Future.delayed(
        Duration(seconds: 2)); // await helps waiting process to finish
    yield i; // Pushed boat to a stream
  }
}

void main() {
  Stream<int> stream = boatStream(); // Initializing the Stream

  stream.listen((event) {
    // Listen to stream if data is coming or not (Watch)
    print("Recieved: " + event.toString());
  });
}
