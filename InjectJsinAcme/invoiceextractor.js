function extract_data(){
    var rows_length= document.getElementsByTagName('table')[0].rows.length;
    var row_count=0;
    var cell_count=0;
    var cell_length =document.getElementsByTagName('table')[0].rows[1].cells.length;
    var substring='Invoice';
    var string_of_cell=[];
    var string_of_cell_text_value;
    while(row_count < rows_length ) {
        while(cell_count <cell_length ){
           string_of_cell_text_value=document.getElementsByTagName('table')[0].rows[row_count].cells[cell_count].innerText;
           if( string_of_cell_text_value.indexOf(substring) !== -1){

               string_of_cell_text_value.push(string_of_cell);
           }

           cell_count++;
        }
        row_count++;
    }
    return string_of_cell;
}














