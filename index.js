window.alert("Selamat datang di program sederhana biodata");
window.alert("Silahkan isi biodata anda dengan benar");

function output(){
    var nama = document.fform.inama.value;
    var nim = document.fform.inim.value;
    var prodi = document.fform.iprodi.value;
    var fak = document.fform.ifak.value;
    var tl = document.fform.itl.value;
    var jkel = document.fform.ijkel.value;
    var agama = document.fform.iagama.value;
    var email = document.fform.iemail.value;
    var hp = document.fform.ihp.value;
    var alamat = document.fform.ialamat.value;



    document.fform.onama.value = nama;
    document.fform.onim.value = nim;
    document.fform.oprodi.value = prodi;
    document.fform.ofak.value = fak;
    document.fform.otl.value = tl;
    document.fform.ojkel.value = jkel;
    document.fform.oagama.value = agama;
    document.fform.oemail.value = email;
    document.fform.ohp.value = hp;
    document.fform.oalamat.value = alamat;

    window.alert("Data berhasil disimpan silahkan lihat output dibawah.");
}