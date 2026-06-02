import 'package:flutter/material.dart';

void main() {
  runApp(const KalkulatorApp());
}

class KalkulatorApp extends StatelessWidget {
  const KalkulatorApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kalkulator Kode Harga',
      theme: ThemeData(
        primarySwatch: Colors.green,
        useMaterial3: true,
      ),
      home: const KalkulatorPage(),
    );
  }
}

class KalkulatorPage extends StatefulWidget {
  const KalkulatorPage({Key? key}) : super(key: key);

  @override
  State<KalkulatorPage> createState() => _KalkulatorPageState();
}

class _KalkulatorPageState extends State<KalkulatorPage> {
  final TextEditingController _kodeController = TextEditingController();
  String _hasil = '-';
  String _harga = '-';

  final Map<String, String> peta = {
    'C': '1', 'I': '2', 'N': '3', 'T': '4', 'A': '5',
    'R': '6', 'O': '7', 'S': '8', 'U': '9', 'L': '0'
  };

  void _konversi(String input) {
    String kode = input.toUpperCase();
    String hasil = '';

    for (int i = 0; i < kode.length; i++) {
      if (peta.containsKey(kode[i])) {
        hasil += peta[kode[i]]!;
      }
    }

    setState(() {
      _hasil = hasil.isEmpty ? '-' : hasil;

      if (hasil.isNotEmpty) {
        int number = int.parse(hasil);
        int hargaValue = number * 1000;
        _harga = 'Rp ${hargaValue.toString().replaceAllMapped(RegExp(r'(\d)(?=(\d{3})+(?!\d))'), (Match m) => '${m[1]}.')},-';
      } else {
        _harga = '-';
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      body: Center(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Card(
              elevation: 4,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'Kalkulator Kode Harga',
                      style: Theme.of(context).textTheme.headlineSmall?.copyWith(fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 10),
                    const Text(
                      'CINTAROSUL = 1234567890',
                      style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
                    ),
                    const SizedBox(height: 20),
                    TextField(
                      controller: _kodeController,
                      onChanged: _konversi,
                      textCapitalization: TextCapitalization.characters,
                      decoration: InputDecoration(
                        hintText: 'Contoh: TAO',
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
                        contentPadding: const EdgeInsets.all(12),
                      ),
                      style: const TextStyle(fontSize: 20),
                    ),
                    const SizedBox(height: 30),
                    Text(
                      _hasil,
                      style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      _harga,
                      style: const TextStyle(fontSize: 24, color: Colors.green, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 20),
                    const Text(
                      'Ketik 2 atau 3 huruf, hasil langsung muncul otomatis.',
                      style: TextStyle(fontSize: 12, color: Colors.grey),
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _kodeController.dispose();
    super.dispose();
  }
}
