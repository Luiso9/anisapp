alert("Selamat datang di Ticket \n Yang bias masuk hanya umur 13 tahun keatas");

const umur = prompt("Masukan umur anda");

if (umur >= 13) {
  const studio = prompt(
    "Masukkan studio yang ingin anda pesan \n A : Studio A  \n B : Studio B \n C : Studio C"
  );

  if (studio == "1" || studio == "2" || studio == "3") {
    const film = prompt(
      "Pilih film \n 1 : Avengers \n 2 : Shangrila \n 3 : Cartel"
    );
    let namaFilm;
    if (film == "1") {
      namaFilm = "Avengers";
    } else if (film == "2") {
      namaFilm = "Shangrila";
    } else if (film == "3") {
      namaFilm = "Cartel";
    }

    if (film == "1" || film == "2" || film == "3") {
      const nama = prompt("Masukkan nama anda");
      alert("Terima kasih " + nama + " anda telah membeli tiket " + namaFilm);
    } else {
      alert("Anda harus memilih salah satu film.");
    }
  } else {
    alert("Anda harus memilih studio.");
  }
} else {
  alert("Maaf, umur anda belum memenuhi syarat.");
}
