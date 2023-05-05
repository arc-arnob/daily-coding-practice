import 'dart:async';

import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_concept/constants/enums.dart';

part 'internet_state.dart';

class InternetCubit extends Cubit<InternetState> {
  final Connectivity connectivity;

  late StreamSubscription connectivityStreamSub;

  // Constructor
  InternetCubit({
    required this.connectivity,
  }) : super(InternetLoading()) {
    monitorConnectivitySubscription();
  }

  StreamSubscription<ConnectivityResult> monitorConnectivitySubscription() {
    return connectivityStreamSub =
        connectivity.onConnectivityChanged.listen((connectivityResults) {
      if (connectivityResults == ConnectivityResult.wifi) {
        emitInternetConnected(ConnectionType.wifi);
      } else if (connectivityResults == ConnectivityResult.mobile) {
        emitInternetConnected(ConnectionType.mobile);
      } else if (connectivityResults == ConnectivityResult.none) {
        emitInternetDisconnected();
      }
    });
  }

  void emitInternetConnected(ConnectionType connectionType) =>
      emit(InternetConnected(connectionType: connectionType));

  void emitInternetDisconnected() => emit(InternetDisconnected());
  @override
  close() {
    connectivityStreamSub.cancel();
    return super.close();
  }
}
