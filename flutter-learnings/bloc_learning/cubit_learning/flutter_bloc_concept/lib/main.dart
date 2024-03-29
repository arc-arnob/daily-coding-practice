import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc_concept/constants/enums.dart';
import 'package:flutter_bloc_concept/cubit/counter_cubit.dart';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_concept/cubit/internet_cubit.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
import 'package:path_provider/path_provider.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  HydratedBloc.storage = await HydratedStorage.build(
      storageDirectory: await getApplicationDocumentsDirectory());
  runApp(MyApp(
    connectivity: Connectivity(),
  ));
}

class MyApp extends StatelessWidget {
  final Connectivity connectivity;
  const MyApp({super.key, required this.connectivity});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider<InternetCubit>(
          create: (context) => InternetCubit(connectivity: connectivity),
        ),
        BlocProvider<CounterCubit>(
          create: (context) =>
              CounterCubit(internetCubit: context.read<InternetCubit>()),
        ),
      ],
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: const MyHomePage(title: 'Flutter Demo Home Page'),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            BlocBuilder<InternetCubit, InternetState>(
              builder: (context, state) {
                if (state is InternetLoading) {
                  return const CircularProgressIndicator();
                }
                if (state is InternetConnected &&
                    state.connectionType == ConnectionType.wifi) {
                  return const Text(
                    'Wifi Connected',
                  );
                } else if (state is InternetConnected &&
                    state.connectionType == ConnectionType.mobile) {
                  return const Text(
                    'Mobile data Connected',
                  );
                } else {
                  return const Text(
                    'Disconnected',
                  );
                }
              },
            ),
            BlocConsumer<CounterCubit, CounterState>(
              listener: (context, state) {
                if (state.wasIncremented == true) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Incremented'),
                      duration: Duration(milliseconds: 400),
                    ),
                  );
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Decremented'),
                      duration: Duration(milliseconds: 400),
                    ),
                  );
                }
              },
              builder: (context, state) {
                return Text(
                  state.counterValue.toString(),
                  style: Theme.of(context).textTheme.headlineMedium,
                );
              },
            ),
            // context Watch
            Builder(builder: (context) {
              final counterState = context.watch<CounterCubit>().state;
              final internetState = context.watch<InternetCubit>().state;
              if (internetState is InternetConnected &&
                  internetState.connectionType == ConnectionType.mobile) {
                return Text(
                  'Counter: ${counterState.counterValue.toString()} Internet: Mobile',
                  style: Theme.of(context).textTheme.headlineLarge,
                );
              } else if (internetState is InternetConnected &&
                  internetState.connectionType == ConnectionType.wifi) {
                return Text(
                  'Counter: ${counterState.counterValue.toString()} Internet: Wifi',
                  style: Theme.of(context).textTheme.headlineLarge,
                );
              } else {
                return Text(
                  'Counter: ${counterState.counterValue.toString()} Internet: No Interntet',
                  style: Theme.of(context).textTheme.headlineLarge,
                );
              }
            })
          ],
        ),
      ),
      floatingActionButton:
          Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
        FloatingActionButton(
          onPressed: () {
            BlocProvider.of<CounterCubit>(context).decrement();
          },
          tooltip: 'Decrement',
          child: const Icon(Icons.remove),
        ),
        FloatingActionButton(
          onPressed: () {
            BlocProvider.of<CounterCubit>(context).increment();
          },
          tooltip: 'Increment',
          child: const Icon(Icons.add),
        )
      ]), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
