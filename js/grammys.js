$.ajax({
    url : "data/grammys.json",
    type : "GET",
    dataType : "json",
    success: function(data){
        let new_html = "";

        for( let i=0; i<data.fields.length; i++){
            new_html += `
                <option value="${data.fields[i].field_id}">${data.fields[i].field}</option>
            `;
        }

        $("#category_types").append(new_html);
        $("#category_types").on('change', function(event){
            $("#category").text($(this).children("option:selected").text());
        });

        for(let i=0; i<data.fields.field.length; i++){
            
        }

    },
    error: function(error_msg){
        console.log(error_msg);
    }
});