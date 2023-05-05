part of 'counter_cubit.dart';

/// This class is the blueprint of all the states which will be emitted by
/// the Cubit.
///
class CounterState {
  int counterValue;
  bool wasIncremented;
  CounterState({
    required this.counterValue,
    required this.wasIncremented,
  });
}
