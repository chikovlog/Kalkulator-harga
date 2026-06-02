import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [kode, setKode] = useState('');
  const [hasil, setHasil] = useState('-');
  const [harga, setHarga] = useState('-');

  const peta = {
    C: '1',
    I: '2',
    N: '3',
    T: '4',
    A: '5',
    R: '6',
    O: '7',
    S: '8',
    U: '9',
    L: '0',
  };

  const konversi = (input) => {
    const upperInput = input.toUpperCase();
    setKode(upperInput);

    let result = '';
    for (let i = 0; i < upperInput.length; i++) {
      if (peta[upperInput[i]]) {
        result += peta[upperInput[i]];
      }
    }

    setHasil(result || '-');

    if (result) {
      const hargaValue = parseInt(result) * 1000;
      const formattedHarga = `Rp ${hargaValue
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')},00`;
      setHarga(formattedHarga);
    } else {
      setHarga('-');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.card}>
          <Text style={styles.title}>Kalkulator Kode Harga</Text>
          <Text style={styles.info}>CINTAROSUL = 1234567890</Text>

          <TextInput
            style={styles.input}
            placeholder="Contoh: TAO"
            placeholderTextColor="#999"
            value={kode}
            onChangeText={konversi}
            autoCapitalize="characters"
          />

          <View style={styles.hasil}>
            <Text style={styles.angka}>{hasil}</Text>
            <Text style={styles.harga}>{harga}</Text>
          </View>

          <Text style={styles.note}>
            Ketik 2 atau 3 huruf, hasil langsung muncul otomatis.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 30,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  info: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 20,
    marginBottom: 20,
    textTransform: 'uppercase',
    color: '#333',
  },
  hasil: {
    alignItems: 'center',
    marginVertical: 20,
  },
  angka: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  harga: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  note: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default App;
