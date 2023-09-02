$( function() {
  $( "#datemasuk" ).datepicker({
    dateFormat: "yy-mm-dd"
  });
} );

$( function() {
    $( "#datekeluar" ).datepicker({
      dateFormat: "yy-mm-dd"
    });
  } );

function savedata(){
    document.getElementById('tabeldata').insertRow(-1).innerHTML =
    `<tr class="th">
        <th class="th">`+ $("#idpasien").val() +`</th>
        <th class="th">`+ $("#nama").val() +`</th>
        <th class="th">`+ $("#alamat").val() +`</th>
        <th class="th">`+ $("#penyakit").val() +`</th>
        <th class="th">`+ $("#noruang").val() +`</th>
        <th class="th">`+ $("#bpjs").val() +`</th>
        <th class="th">`+ $("#datemasuk").val() +`</th>
        <th class="th">`+ $("#datekeluar").val() +`</th>
    </tr>`;
}
