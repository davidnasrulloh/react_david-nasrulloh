class Kendaraan {
    var totalRoda = 0;
    var kecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
    // fungsi berjalan
    void berjalan() {
        tambahkecepatan(10);
    }

    // fungsi tambahKecepatan
    tambahKecepatan(var kecepatanBaru) {
        kecepatanPerJam = kecepatanPerJam + kecepatanBaru;
    }
}

void main() {
    mobilcepat = new Mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new Mobil();
    mobillamban.berjalan();
}